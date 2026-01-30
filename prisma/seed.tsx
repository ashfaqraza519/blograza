import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.blog.createMany({
    data: [
      {
        title: 'Welcome to BlogRaza',
        slug: 'welcome-to-blograza',
        content: 'This is your first blog coming from MySQL using Prisma.',
      },
      {
        title: 'Prisma + Next.js',
        slug: 'prisma-nextjs',
        content: 'This blog is fetched dynamically from the database.',
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
