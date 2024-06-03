import Elysia, { t } from "elysia";
import { prismaClient } from "../utils/prisma";
import { UserModel } from "../models/user";

const userRoutes = new Elysia({ prefix: "/users" })
  .use(UserModel)
  .get("/", async () => {
    return await prismaClient.user.findMany();
  })
  .get("/:id", async (req) => {
    const { id } = req.params;

    return await prismaClient.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  })
  .post(
    "/new",
    async (req) => {
      const body = req.body;

      return await prismaClient.user.create({
        data: body,
      });
    },
    {
      body: "user",
    }
  )
  .delete("/:id", async (req) => {
    const { id } = req.params;

    return await prismaClient.user.delete({
      where: {
        id: Number(id),
      },
    });
  });

export default userRoutes;
