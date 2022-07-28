import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools/tools';
import './Editor.css';
const ReactEditorJS = createReactEditorJS();

function Editor() {
  return (
    <div className='editor'>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

export default Editor;
