import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event);

    // Ensure the body is not undefined
    if (!body) {
      throw new Error('Request body is missing');
    }

    // Destructure the body safely
    const { name, email, message } = body;

    // Validate the request payload
    if (!name || !email || !message) {
      throw new Error('Missing fields in request body');
    }

    // Save the contact to the database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Return a success response
    return { success: true, data: contact };
  } catch (error) {
    console.error('Error in event handler:', error); // Enhanced logging
    // Handle errors and return an appropriate response
    return { success: false, error: error.message };
  }
});
