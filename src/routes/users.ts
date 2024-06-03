import Elysia, { t } from "elysia";
import { prismaClient } from "../utils/prisma";

const userRoutes = new Elysia().group("/users", (app) => {
  app.get("/", async () => {
    const users = await prismaClient.user.findMany();

    return { users };
  });

  app.get("/:id", async (req) => {
    const { id } = req.params;

    const user = await prismaClient.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return { user };
  });

  app.post(
    "/",
    async (req) => {
      const body = req.body;

      const user = await prismaClient.user.create({
        data: body,
      });

      return { user };
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String({
          minLength: 8,
        }),
      }),
    }
  );

  return app;
});

export default userRoutes;
