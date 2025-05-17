// App.tsx
import React, { useState } from "react";
import Editor from "./component/Editor";
import { type OutputData } from "@editorjs/editorjs";

const App: React.FC = () => {
  const [editorData, setEditorData] = useState<OutputData | null>(null);

  const handleEditorChange = (data: OutputData) => {
    setEditorData(data);
    console.log("Editor Data:", data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Editor.js in React + TypeScript</h1>
      <Editor data={editorData ?? undefined} onChange={handleEditorChange} />
    </div>
  );
};

export default App;
