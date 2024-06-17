import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const contactMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          message,
        },
      });

      res.status(200).json({ message: 'Message sent successfully', data: contactMessage });
    } catch (error) {
      console.error('Error:', error);

      // Differentiating between different types of errors
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle known request errors
        res.status(400).json({ error: 'A database error occurred' });
      } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        // Handle unknown request errors
        res.status(500).json({ error: 'An unknown database error occurred' });
      } else if (error instanceof Prisma.PrismaClientRustPanicError) {
        // Handle Rust panic errors
        res.status(500).json({ error: 'A database panic error occurred' });
      } else {
        // Handle any other errors
        res.status(500).json({ error: 'An error occurred while sending your message' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
