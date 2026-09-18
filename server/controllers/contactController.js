import nodemailer from 'nodemailer';

// In-memory store for received contact inquiries (can be replaced with a database like MongoDB or PostgreSQL)
const contactMessages = [];

const portfolioEmail = process.env.CONTACT_TO_EMAIL || 'pavansaicharan2004@gmail.com';

const buildTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    GMAIL_USER,
    GMAIL_APP_PASSWORD,
  } = process.env;

  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });
  }

  console.warn('[Mail] SMTP/Gmail credentials not configured. Emails will only be logged locally.');
  return null;
};

const sendContactEmail = async ({ name, email, message }) => {
  const transporter = buildTransporter();
  const senderAddress = process.env.SMTP_USER || process.env.GMAIL_USER || portfolioEmail;

  if (!transporter) {
    console.log(`[Mail] New contact message for ${portfolioEmail}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    return;
  }

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${senderAddress}>`,
    to: portfolioEmail,
    replyTo: email,
    subject: `New contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });
};

/**
 * @desc   Submit a contact message
 * @route  POST /api/contact
 */
export const submitContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name.',
    });
  }

  if (!email || !email.trim() || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  if (!message || !message.trim() || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a message of at least 5 characters.',
    });
  }

  const newMessage = {
    id: contactMessages.length + 1,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  contactMessages.push(newMessage);
  console.log(`[Contact] New message received from ${newMessage.name} <${newMessage.email}>`);

  try {
    await sendContactEmail(newMessage);
  } catch (error) {
    console.error('[Mail] Failed to send contact email:', error);
    return res.status(500).json({
      success: false,
      error: 'Your message was saved, but the email could not be delivered. Please try again later.',
    });
  }

  return res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.',
    data: {
      id: newMessage.id,
      name: newMessage.name,
      createdAt: newMessage.createdAt,
    },
  });
};

/**
 * @desc   Get all received contact messages (admin / debug)
 * @route  GET /api/contact
 */
export const getContactMessages = (req, res) => {
  res.status(200).json({
    success: true,
    count: contactMessages.length,
    data: contactMessages,
  });
};
