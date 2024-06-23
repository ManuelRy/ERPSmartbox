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

    // Handle the request logic here
    const contact = await prisma.contact.create({
      data: {
        name,
        message,
        email,
      },
    });

    // Return a success response
    return { success: true, data: contact };
  } catch (error) {
    // Handle errors and return an appropriate response
    return { success: false, error: error.message };
  }
});
