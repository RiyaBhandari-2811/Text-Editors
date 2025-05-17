import EditorJS from "@editorjs/editorjs";
import EJHeader from "@editorjs/header";
import EJList from "@editorjs/list";

const Editor = () => {
  const editor = new EditorJS({
    holder: "editor-js",
    tools: {
      EJHeader,
      EJList,
    },
    autofocus: true,
    placeholder: "Let's write an awsome Article",
  });
  return <div>Editor</div>;
};

export default Editor;
