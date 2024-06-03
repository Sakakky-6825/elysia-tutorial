# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-tutorial
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

Build PostgreSQL in Docker

```bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres
```

copy .env.sample to .env  
replace `DATABASE_URL`

Execute the following command.

```bash
bun run migrate:dev-init
```
