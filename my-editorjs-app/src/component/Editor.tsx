// Editor.tsx
import React, { useEffect, useRef } from 'react';
import EditorJS, { type OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

interface EditorProps {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const ejInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = new EditorJS({
      holder: editorRef.current,
      tools: {
        header: Header,
        list: List,
      },
      data: data ?? { blocks: [] },
      async onChange(api) {
        const outputData = await api.saver.save();
        onChange?.(outputData);
      },
    });

    ejInstance.current = editor;

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id="editorjs" ref={editorRef} />;
};

export default Editor;
