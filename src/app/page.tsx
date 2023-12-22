import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {

  // for auto redirecting to notes page
  // const { userId } = auth();

  // if (userId) {
  //   redirect("/notes");
  // }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} height={100} width={100} alt="AInator" />
        <span className="text-4xl font-extrabold tracking-tight">AInator</span>
      </div>

      <p className="max-w-prose text-center">
        AI powered Application using openAI
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
