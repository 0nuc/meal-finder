const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Hash le mot de passe avant de le sauvegarder
  const hashedPassword = await bcrypt.hash('jorisnoel', 10);

  const user = await prisma.user.upsert({
    where: { email: 'joris@mealfinder.com' },
    update: {},
    create: {
      email: 'joris@mealfinder.com',
      name: 'joris noel',
      password: hashedPassword,  
    },
  });

  console.log('Utilisateur créé:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });