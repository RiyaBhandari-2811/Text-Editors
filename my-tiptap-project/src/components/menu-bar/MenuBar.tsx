import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  PaintRoller,
  Highlighter,
  ListOrdered,
  List,
  ListChecks,
  ImagePlus,
  Link,
  Table,
  TextQuote,
  CodeXml,
  AlignRight,
  AlignLeft,
  AlignCenter,
  AlignJustify,
  Minus,
  Undo2,
  Redo2,
} from "lucide-react";

import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Editor } from "@tiptap/react";
import { Popper, TextField, Button, Box } from "@mui/material";
import { useState, useRef, useCallback } from "react";

const MenuBar = ({ editor }: { editor: Editor }) => {
  const [linkInputOpen, setLinkInputOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState("#000000");

  if (!editor) {
    return null;
  }

  function applyLink() {
    if (!editor || !linkUrl) return;
    const { empty } = editor.state.selection;
    if (empty) return;

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: linkUrl })
      .run();

    setLinkInputOpen(false);
    setLinkUrl("");
  }

  const applyColor = () => {
    editor?.chain().focus().setColor(color).run();
    setShowPicker(false);
  };

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const Options = [
    {
      icon: <Heading1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Heading4 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      preesed: editor.isActive("heading", { level: 4 }),
    },
    {
      icon: <Heading5 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      preesed: editor.isActive("heading", { level: 5 }),
    },
    {
      icon: <Heading6 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      preesed: editor.isActive("heading", { level: 6 }),
    },
    {
      icon: <Bold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Underline />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      preesed: editor.isActive("underline"),
    },
    {
      icon: <Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      icon: <Subscript />,
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      preesed: editor.isActive("subscript"),
    },
    {
      icon: <Superscript />,
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      preesed: editor.isActive("superscript"),
    },
    {
      icon: <PaintRoller />,
      onClick: () => setShowPicker(!showPicker),
      preesed: editor.isActive("textStyle", { color: color }),
    },
    {
      icon: <Highlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      preesed: editor.isActive("highlight"),
    },
    {
      icon: <ListOrdered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      icon: <List />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      icon: <ListChecks />,
      onClick: () => editor.chain().focus().toggleTaskList().run(),
      preesed: editor.isActive("taskList"),
    },
    {
      icon: <ImagePlus />,
      onClick: () => addImage(),
      preesed: false,
    },
    {
      icon: <GifBoxOutlinedIcon />,
      onClick: () => console.log("GIF clicked"),
      preesed: false,
    },
    {
      icon: <Link />,
      onClick: () => {
        const { empty } = editor.state.selection;
        if (empty) return;

        setLinkInputOpen(true);
      },

      preesed: editor.isActive("link"),
    },
    {
      icon: <Table />,
      onClick: () =>
        editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run(),
      preesed: false,
    },
    {
      icon: <TextQuote />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      preesed: editor.isActive("blockquote"),
    },
    {
      icon: <CodeXml />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      preesed: editor.isActive("codeBlock"),
    },
    {
      icon: <AlignRight />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <AlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignJustify />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      preesed: editor.isActive({ textAlign: "justify" }),
    },
    {
      icon: <Minus />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      preesed: false,
    },
    {
      icon: <Undo2 />,
      onClick: () => editor.chain().focus().undo().run(),
      preesed: false,
    },
    {
      icon: <Redo2 />,
      onClick: () => editor.chain().focus().redo().run(),
      preesed: false,
    },
  ];

  return (
    <div ref={anchorRef}>
      <ToggleButtonGroup
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Options.map((option, index) => (
          <ToggleButton
            key={index}
            value={index}
            onClick={option.onClick}
            sx={{
              border: "1px solid grey",
              borderRadius: "10px",
            }}
          >
            {option.icon}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* {showPicker && (
        <input
          type="color"
          value={color}
          onChange={(e) => applyColor(e.target.value)}
          style={{ border: "none", background: "none" }}
        />
      )} */}

      <Popper
        open={showPicker}
        anchorEl={anchorRef.current}
        placement="bottom-start"
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            bgcolor: "white",
            p: 2,
            boxShadow: 3,
            borderRadius: 1,
            alignItems: "center",
          }}
        >
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              width: 40,
              height: 40,
              padding: 0,
              border: "none",
              cursor: "pointer",
            }}
          />
          <Button variant="contained" onClick={applyColor}>
            Apply
          </Button>
        </Box>
      </Popper>

      <Popper
        open={linkInputOpen}
        anchorEl={anchorRef.current}
        placement="bottom-start"
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            bgcolor: "white",
            p: 2,
            boxShadow: 3,
            borderRadius: 1,
          }}
        >
          <TextField
            size="small"
            placeholder="Enter URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <Button variant="contained" onClick={applyLink}>
            Add Link
          </Button>
        </Box>
      </Popper>
    </div>
  );
};

export default MenuBar;
