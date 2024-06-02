import { Prisma, PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const initUsers: Prisma.UserCreateInput[] = [
  {
    username: "john_doe",
    password: "securePassword123",
  },
  {
    username: "jane_smith",
    password: "password456!",
  },
  {
    username: "alice_jones",
    password: "alicePassword789",
  },
  {
    username: "bob_brown",
    password: "bobSecurePassword321",
  },
  {
    username: "charlie_davis",
    password: "charlieSecret987",
  },
  {
    username: "john_don",
    password: "johnSecret765",
  },
];

try {
  const createUsers = await prismaClient.user.createMany({
    data: initUsers,
    skipDuplicates: true,
  });
  console.log("created users:", createUsers);
} catch (error) {
  console.error("Error during user creation:", error);
} finally {
  await prismaClient.$disconnect();
}
