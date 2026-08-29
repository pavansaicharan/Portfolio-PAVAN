// In-memory store for received contact inquiries (can be replaced with a database like MongoDB or PostgreSQL)
const contactMessages = [];

/**
 * @desc   Submit a contact message
 * @route  POST /api/contact
 */
export const submitContactMessage = (req, res) => {
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
