import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";
import routes from "./routes";

const app = new Elysia().use(routes).get("/helth-check", () => "OK");

app.listen(3000);
