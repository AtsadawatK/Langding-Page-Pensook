"use client";
import React, { useState, forwardRef,useEffect } from 'react';

import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Box, createTheme,Modal,} from "@mui/material";
import { ImageNode } from "./Nodes/ImageNode";
import ImagesPlugin, { InsertImageDialog } from "./plugins/ImagePlugin";
  import TextField from '@mui/material/TextField';

/*   import { ImageNode } from "../Nodes/ImageNode";
import ImagesPlugin, { InsertImageDialog } from "./plugins/ImagePlugin"; */


function Placeholder() {
  return <div className="editor-placeholder" >เนื้อหา</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    ImageNode,
    AutoLinkNode,
    LinkNode,
  ],
};




  




export const CreateEditor = forwardRef (
  ({ setContent, content,label, setLabel}, ref) => {
  const [Type, setType] = useState("เลือกประเภท");
  const [hover, setHover] = useState(false);
  const [currentHover, setCurrentHover] = useState("");
  const [editorState, setEditorState] = useState();
  const [modalUploadImage, setModalUploadImage] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleChange = (event) => {
    setType(event.target.value);
  };


  function onChange(editorState, editor) {
    console.log(editor);
    setEditorState(editorState);
    editor.update(() => {
      const rawHTML = $generateHtmlFromNodes(editor, null);
      setContent(rawHTML);
      
    });
  }

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#C5C5C5",
              color: "#007DFC",
            },
            color: "#007DFC",
            "&:hover": {
              backgroundColor: "#D5EAFF",
            },
            height: "50px",
            width:"225px",
            fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
            
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            boxShadow: "none",
            border: "2px solid #007DFC",
            marginTop: 5,
            
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
    Select: {
      fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
    },
  });

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin setModalUploadImage={setModalUploadImage}/>
        <Modal
          open={modalUploadImage}
          onClose={() => setModalUploadImage(false)}
        >
          <InsertImageDialog onClose={() => setModalUploadImage(false)} />
        </Modal>
        <Box sx={{ display: "flex" }}>
          
        
         
          
        </Box>
        <Box sx={{mt:windowWidth < 820 ? "112px" : windowWidth < 1250 ? "115px" : 20,mb:5}}>
        <TextField
            fullWidth
            placeholder='หัวข้อ'
            value={label} 
            onChange={(event) => setLabel(event.target.value)}
            inputProps={{
              style: { fontWeight: 700, fontSize: windowWidth < 1250 ? 30 : 50,color: "#007DFC"},
            }}
            sx={{
              pt: "5px",
              width: "100%",
              input: {
                "&::placeholder": {
                  color: "007DFC",
                  opacity: 1,
                },
              },
              color: "#007DFC",
              mt: 5,

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
              
            }}
          />
        </Box>
        <div className="editor-inner" >
          <RichTextPlugin
          ref={ref}
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
            
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <OnChangePlugin onChange={onChange} />
          <CodeHighlightPlugin />
          <ListPlugin />
       
          <ImagesPlugin captionsEnabled={false} />
          
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
)