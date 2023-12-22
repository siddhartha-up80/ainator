import type { Metadata } from "next";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "AInator",
  description: "AI powered Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
