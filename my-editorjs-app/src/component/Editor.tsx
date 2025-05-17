import { createReactEditorJS } from "react-editor-js";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const ReactEditorJS = createReactEditorJS();

const tools = {
  header: Header,
  list: List,
};

const MyEditor = () => {
  const handleInitialize = (instance) => {
    console.log("Editor.js instance:", instance);
  };

  return <ReactEditorJS tools={tools} onInitialize={handleInitialize} />;
};
export default MyEditor;
