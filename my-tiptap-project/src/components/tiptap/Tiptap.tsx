import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../menu-bar/MenuBar";
import "./Tiptap.css";
import { Stack, Button } from "@mui/material";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { useState } from "react";

const lowlight = createLowlight(all);

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Underline.configure(),
  Subscript.configure(),
  Superscript.configure(),
  Highlight.configure(),
  Link.configure({
    HTMLAttributes: {
      target: "_blank",
    },
  }),
  TaskList.configure(),
  TaskItem.configure({
    nested: true,
  }),
  Image.configure({
    inline: true,
  }),
  TextStyle.configure(),
  Color.configure({
    types: ["textStyle"],
  }),
  CodeBlockLowlight.configure({
    lowlight,
    defaultLanguage: "kotlin",
  }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
];

const Tiptap = () => {
  const [post, setPost] = useState("");

  const editor = useEditor({
    extensions,
    content: post,
    editorProps: {
      attributes: {
        class: "editor-div",
      },
    },
  });

  const handleSave = () => {
    if (!editor) return;
    const html = editor.getHTML();
    setPost(html);
    console.log("Saved HTML:", html);
  };

  if (!editor) return null;

  return (
    <Stack
      spacing={2}
      marginTop={5}
      alignItems="center"
      justifyContent="center"
    >
      <MenuBar editor={editor} lowlight={lowlight} />
      <EditorContent editor={editor} />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Post
      </Button>
    </Stack>
  );
};

export default Tiptap;
