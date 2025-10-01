
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create users
  const passwordHash = await bcrypt.hash('password123', 10);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@ublog.com',
      name: 'Admin User',
      role: 'ADMIN',
      password: passwordHash,
    },
  });

  const publisher = await prisma.user.create({
    data: {
      email: 'publisher@ublog.com',
      name: 'Publisher User',
      role: 'PUBLISHER',
      password: passwordHash,
    },
  });

  // Create posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Welcome to UBlog!',
        slug: 'welcome-to-ublog',
        content: 'This is the first post on UBlog.',
        published: true,
        authorId: admin.id,
        tags: ['welcome', 'intro'],
      },
      {
        title: 'Second Post',
        slug: 'second-post',
        content: 'This is another post by the publisher.',
        published: true,
        authorId: publisher.id,
        tags: ['update'],
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
