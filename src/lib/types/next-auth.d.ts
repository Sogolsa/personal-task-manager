import NextAuth, { type DeafaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    } & DefaultSession["user"];
  }
}
