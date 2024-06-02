import Elysia from "elysia";
import users from "./users";

export default new Elysia().group("/users", (app) => {
  return app.use(users);
});
