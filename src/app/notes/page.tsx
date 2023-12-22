import React from "react";

import { Metadata } from "next";
import { auth } from "@clerk/nextjs";

import prisma from "@/lib/db/prisma";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "AInator",
  description: "AI powered Application",
};

const NotesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    throw Error("userId undefined");
  }

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">No notes, Create one</div>
      )}
    </div>
  );
};

export default NotesPage;
