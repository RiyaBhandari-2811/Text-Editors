import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../menu-bar/MenuBar";
import "./Tiptap.css";
import { Stack } from "@mui/material";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from '@tiptap/extension-text-style'
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Image from "@tiptap/extension-image";
import { Color } from '@tiptap/extension-color'

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
  Underline.configure({}),
  Subscript.configure({}),
  Superscript.configure({}),
  Highlight.configure({}),
  Link.configure({
    HTMLAttributes: {
      target: "_blank",
    },
  }),
  TaskList.configure({}),
  TaskItem.configure({
    nested: true,
  }),
  Image.configure({
    inline: true,
  }),
  TextStyle.configure({}),
  Color.configure({
  types: ['textStyle'],
})

];

const content = "<p> Hello </p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "editor-div",
      },
    },
  });
  if (!editor) return null;
  return (
    <Stack
      spacing={2}
      marginTop={5}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Stack>
  );
};

export default Tiptap;
