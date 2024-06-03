import Elysia, { t } from "elysia";
import { prismaClient } from "../utils/prisma";
import { UserModel } from "../models/user";

const userRoutes = new Elysia().group("/users", (app) => {
  app
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
      "/",
      async (req) => {
        const body = req.body;

        return await prismaClient.user.create({
          data: {
            username: body.username,
            password: body.password,
          },
        });
      },
      {
        body: "user",
        response: "user",
      }
    );

  return app;
});

export default userRoutes;
