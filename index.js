//@ts-check
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const query = prisma.user.findMany({
    where: {
      email: {
        contains: '@prisma.io',
      },
    },
  })
  const queries = Array(10).fill(query, 0)

  for (let i = 0; i < 100; i++) {
    try {
      Promise.all(queries).then()
      if (i === 100) {
        throw new Error('Induce Crash')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

main()
  .catch(async (e) => {
    console.log(`Disconnecting Prisma catch`)
    await prisma.$disconnect()
    console.log(`Disconnected Prisma catch`)
  })
  .finally(async () => {
    console.log(`Disconnecting Prisma finally`)
    await prisma.$disconnect()
    console.log(`Disconnected Prisma finally`)
  })
