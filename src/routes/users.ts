import Elysia from "elysia";
import { prismaClient } from "../utils/prisma";

const users = new Elysia();

users.get("/", async () => {
  const users = await prismaClient.user.findMany();

  return { users };
});

export default users;
