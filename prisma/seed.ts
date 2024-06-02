import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const initUsers = [
  {
    "username": "john_doe",
    "password": "securePassword123"
  },
  {
    "username": "jane_smith",
    "password": "password456!"
  },
  {
    "username": "alice_jones",
    "password": "alicePassword789"
  },
  {
    "username": "bob_brown",
    "password": "bobSecurePassword321"
  },
  {
    "username": "charlie_davis",
    "password": "charlieSecret987"
  }
];

const main = async () => {
  try {
    const users = await prismaClient.user.createMany({data: initUsers})
    console.log("create users:", users)
  }
  catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prismaClient.$disconnect()
  }
}

main()