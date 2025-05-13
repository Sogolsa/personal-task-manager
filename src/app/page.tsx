import { prisma } from "@/lib/prisma";
import { JSX } from "react";
import SignIn from "@/components/SignIn";

type User = {
  id: String;
  name: String;
  email: String;
};

export default async function Home(user: User): Promise<JSX.Element> {
  const users: User[] = await prisma.user.findMany();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
 "
    >
      <h1 className="mb-4 text-md lg:text-4xl md:text-3xl leading-none tracking-tight text-gray-900  dark:text-white">
        Personal Task Manager
      </h1>
      <SignIn />
      {/* <li className="list-none px-5 py-3 text-base">
        {users.map((user) => user.name)}, {users.map((user) => user.email)}
      </li> */}
    </div>
  );
}
