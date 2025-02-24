import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const content = "<p> Hello </p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  });
  if (!editor) return null;
  return (
    <>
     <div>
     <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={editor.isActive("bold") ? "is-active" : ""}
      >Bold</button>
     </div>
     <div>
        <EditorContent editor={editor} />
     </div>
    </>
  );
};

export default Tiptap;
