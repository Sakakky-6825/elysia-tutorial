import { Elysia } from "elysia";
import userRoutes from "./routes/users";

const app = new Elysia()
  .use(userRoutes)
  .get("health-check", () => "OK")
  .listen(3000);
