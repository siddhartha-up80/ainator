"use client";

import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import { AddEditNoteDialog } from "./AddEditNoteDialog";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";

interface NoteProps {
  note: NoteModel;
}

export default function Note({ note }: NoteProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [fullLength , setFullLength] = useState(false);

  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdatedAtTimestamp = wasUpdated
    ? note.updatedAt.toDateString()
    : note.createdAt.toDateString();

  // console.log(createdUpdatedAtTimestamp);

  return (
    <>
      <Card className="cursor-pointer transition-shadow hover:shadow-lg" onClick={() => setFullLength(!fullLength)}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{note.title}</CardTitle>
            <Button
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setShowEditDialog(true)}
            >
              <Edit size={18} />
              <span>Edit</span>
            </Button>
          </div>

          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && " (updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{!fullLength ? note.content?.slice(0, 100) : note.content}</p>
        </CardContent>
      </Card>
      <AddEditNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToEdit={note}
      />
    </>
  );
}
