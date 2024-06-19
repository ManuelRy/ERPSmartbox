import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Request body:', body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log('Missing fields:', { name, email, message });
      throw createError({ statusCode: 400, statusMessage: 'All fields are required' });
    }

    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return {
      success: true,
      data: newContact,
    };
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return {
      success: false,
      error: error.message,
    };
  }
});
