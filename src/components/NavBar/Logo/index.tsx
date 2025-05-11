import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex text-sm md:text-2xl font-bold">
      Personal Task Manager
    </Link>
  );
};

export default Logo;
