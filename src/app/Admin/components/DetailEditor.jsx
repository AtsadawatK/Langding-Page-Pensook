import React from 'react'
import Editor from './RichTextEditor/src/Editor'
import "../components/RichTextEditor/src/styles.css";
import { Box } from '@mui/material';

export default function DetailEditor() {
  return (
    <>
      <Box sx={{width:"100vw" , height:"calc(100vh-80px)" , bgcolor:"#FFFFFF",display:"flex" , justifyContent:"center"}}>
        <Editor />
      </Box>
    </>
  );
}
