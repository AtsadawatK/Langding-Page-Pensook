import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $wrapNodeInElement, mergeRegister } from "@lexical/utils";
import {
  $createParagraphNode,
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $createTextNode,
  $getRoot,
  $isNodeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
} from "lexical";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import Resizer from "react-image-file-resizer";

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import { CAN_USE_DOM } from "../../../../../../utils/canUseDom";
import { $createImageNode, $isImageNode, ImageNode } from "../Nodes/ImageNode";
import NoneImage from "../../../../../../../assets/no_image.png";
import { Close } from "@mui/icons-material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: 130,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const getDOMSelection = (targetWindow) =>
  CAN_USE_DOM ? (targetWindow || window).getSelection() : null;

export const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND");

export function InsertImageUriDialogBody({ onClick }) {
  const [src, setSrc] = useState("");
  const [altText, setAltText] = useState("");

  const isDisabled = src === "";

  return (
    <>
      <TextField
        label="Image URL"
        placeholder="i.e. https://source.unsplash.com/random"
        onChange={(e) => setSrc(e.target.value)}
        value={src}
        sx={{ mb: 7, height: 10 }}
        fullWidth
      />
      <TextField
        label="Alt Text"
        placeholder="Random unsplash image"
        onChange={(e) => setAltText(e.target.value)}
        sx={{ mb: 7, height: 10 }}
        fullWidth
        value={altText}
        data-test-id="image-modal-alt-text-input"
      />
      <Grid container justifyContent="flex-end">
        <Button
          data-test-id="image-modal-confirm-btn"
          disabled={isDisabled}
          onClick={() => onClick({ altText, src })}
          variant="outlined"
        >
          Confirm
        </Button>
      </Grid>
    </>
  );
}

export function InsertImageUploadedDialogBody({ onClick, onClose }) {
  const [src, setSrc] = useState("");
  const [fileName, setFileName] = useState();
  const [editor] = useLexicalComposerContext();
  const [altText, setAltText] = useState("contentImage");
  console.log(fileName);
  const isDisabled = src === "";

  const resizeFile = (file, percent) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file[0],
        "100%",
        "100%",
        "JPEG",
        percent,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onChangeResize = async (file, percent) => {
    try {
      const image = await resizeFile(file, percent);
      return image;
    } catch (err) {
      console.log(err);
    }
  };

  const loadImage = async (files, altText) => {
    if (files === null || !files[0]) {
      return false; // ถ้าไม่มีไฟล์หรือไม่มีไฟล์ในอาร์เรย์
    }
    const fileSizeInBytes = files[0].size;
    const fileSizeInKb = fileSizeInBytes / 1024;
    console.log(`File size: ${fileSizeInKb} KB`);
    let percent = (2000 / fileSizeInKb).toFixed(2);
    console.log(percent);
    if (percent < 1) {
      percent *= 100;
      console.log(percent);
      try {
        const ResizeImage = await onChangeResize(files, percent);

        const reader = new FileReader();
        reader.onload = function () {
          if (typeof reader.result === "string") {
            setFileName(URL.createObjectURL(files[0]));
            setSrc(ResizeImage);
            console.log("แปลงแล้ว");
          }
        };

        reader.readAsDataURL(files[0]);
      } catch (err) {
        console.log(err);
        // สามารถเพิ่มการจัดการข้อผิดพลาดเพิ่มเติมตามความต้องการ
      }
    } else {
      const reader = new FileReader();
      reader.onload = function () {
        if (typeof reader.result === "string") {
          setFileName(URL.createObjectURL(files[0]));
          setSrc(reader.result);
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Box sx={style}>
      <IconButton sx={{ position: "absolute", right: 5 }} onClick={onClose}>
        <Close sx={{ color: "#000" }} />
      </IconButton>
      <img
        src={fileName ? fileName : NoneImage}
        width={200}
        style={{ paddingTop: 20 }}
      />
      <Box pt={2} pb={3}>
        <Button
          sx={{ mr: 2, width: 100 }}
          variant="contained"
          component="label"
        >
          เลือกรูป
          <input
            onChange={(e) => loadImage(e.target.files, altText)}
            hidden
            accept="image/png, image/jpeg, image/jpg"
            multiple
            type="file"
          />
        </Button>

        <Button
          sx={{ width: 100 }}
          data-test-id="image-modal-confirm-btn"
          disabled={isDisabled}
          onClick={() => onClick({ altText, src })}
          variant="outlined"
        >
          ยืนยัน
        </Button>
      </Box>
    </Box>
  );
}

export function InsertImageDialog({ onClose }) {
  const [mode, setMode] = useState(null);
  const [editor] = useLexicalComposerContext();
  const hasModifier = useRef(false);

  const onClick = (payload) => {
    editor.update(() => {
      const root = $getRoot;
      const selection = $getSelection();
      const p = $createParagraphNode;
      const paragraph = $createParagraphNode();
      const textNode = $createTextNode("test");
      console.log("test........", payload);
      root.apply(
        p.apply(editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload))
      );
      if (payload) {
        root.apply(selection.insertLineBreak());
      }
      onClose();
    });
  };

  return (
    <>
      <InsertImageUploadedDialogBody onClick={onClick} onClose={onClose} />
    </>
  );
}

export default function ImagesPlugin({ captionsEnabled }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    }

    return mergeRegister(
      editor.registerCommand(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const imageNode = $createImageNode(payload);
          $insertNodes([imageNode]);
          if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
            $wrapNodeInElement(imageNode, $createParagraphNode).selectEnd();
          }

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          return onDragStart(event);
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        DRAGOVER_COMMAND,
        (event) => {
          return onDragover(event);
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        DROP_COMMAND,
        (event) => {
          return onDrop(event, editor);
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [captionsEnabled, editor]);

  return null;
}

const TRANSPARENT_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const img = document.createElement("img");
img.src = TRANSPARENT_IMAGE;

function onDragStart(event) {
  const node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData("text/plain", "_");
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: node.__altText,
        caption: node.__caption,
        height: node.__height,
        key: node.getKey(),
        maxWidth: node.__maxWidth,
        showCaption: node.__showCaption,
        src: node.__src,
        width: node.__width,
      },
      type: "image",
    })
  );

  return true;
}

function onDragover(event) {
  const node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}

function onDrop(event, editor) {
  const node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const data = getDragImageData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropImage(event)) {
    const range = getDragSelection(event);
    node.remove();
    const rangeSelection = $createRangeSelection();
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }
    $setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
  }
  return true;
}

function getImageNodeInSelection() {
  const selection = $getSelection();
  if (!$isNodeSelection(selection)) {
    return null;
  }
  const nodes = selection.getNodes();
  const node = nodes[0];
  return $isImageNode(node) ? node : null;
}

function getDragImageData(event) {
  const dragData = event.dataTransfer?.getData("application/x-lexical-drag");
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== "image") {
    return null;
  }

  return data;
}

function canDropImage(event) {
  const target = event.target;
  return !!(
    target &&
    target instanceof HTMLElement &&
    !target.closest("code, span.editor-image") &&
    target.parentElement &&
    target.parentElement.closest("div.ContentEditable__root")
  );
}

function getDragSelection(event) {
  let range;
  const target = event.target;
  const targetWindow =
    target == null
      ? null
      : target.nodeType === 9
      ? target.defaultView
      : target.ownerDocument.defaultView;
  const domSelection = getDOMSelection(targetWindow);
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error(`Cannot get the selection when dragging`);
  }

  return range;
}
