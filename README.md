This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Set up:

npx create-next-app@latest <app_name>

## Clean up Boilerplate

app/page.tsx
app/globals.css

## Add global Layout & Navigation

- a basic navbar with links
- Call the navbar in toot layout.tsx

# Dataset Setup and Prisma Integration

1. Install and set up Prisma:
   `npm install prisma --save-dev`
   `npx prisma init --datasource-provider sqlite`, this creates a new prisma directory with a schema.prisma file and configures SQLite as data base (SQLite for development), and created .env file

2. `npx prisma db push

- creates database file and a generated prisma client

3. `npx prisma studio`

- you can see the database in UI

4. Create the prisma client lib/prisma

## Authentication with next-auth

- `npm install next-auth
- Add api route, in app/api/auth/[...nextauth].js
