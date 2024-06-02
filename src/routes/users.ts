import Elysia from "elysia";
import { prismaClient } from "../utils/prisma";

const userRoutes = new Elysia().group("/users", (app) => {
  return app.get("/", async () => {
    const users = await prismaClient.user.findMany();

    return { users };
  });
});

export default userRoutes;
