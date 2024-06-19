import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { name, email, message } = body;

  if (!name || !email || !message) {
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
});
