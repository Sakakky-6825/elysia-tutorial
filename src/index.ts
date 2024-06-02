import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";
import userRoutes from "./routes/users";

const app = new Elysia()
  .use(userRoutes)
  .get("heath-check", () => "OK")
  .listen(3000);
