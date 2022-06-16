import './App.css';

import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools/tools';

const ReactEditorJS = createReactEditorJS();

function App() {
  return (
    <div className='App'>
      <h1>EDITOR JS</h1>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

export default App;
