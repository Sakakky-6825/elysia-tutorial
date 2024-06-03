import Elysia, { t } from "elysia";

export const UserModel = new Elysia().model({
  user: t.Object({
    username: t.String(),
    password: t.String({
      minLength: 8,
    }),
  }),
});
