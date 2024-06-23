import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    if (!body) {
      throw new Error('Request body is missing');
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      throw new Error('Missing fields in request body');
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        message,
        email,
      },
    });

    return { success: true, data: contact };
  } catch (error) {
    console.error('Error creating contact:', error); // Log the error for debugging
    return { success: false, error: error.message };
  }
});
