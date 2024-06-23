const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

exports.handler = async (event) => {
  try {
    // Read the request body
    const body = JSON.parse(event.body);

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
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: contact }),
    };
  } catch (error) {
    console.error('Error occurred:', error);
    // Handle errors and return an appropriate response
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
