import React from 'react';
import Navbar from './components/Navbar'
import Editor from './components/Editor'
import Result from './components/Result'
import { useCodeEditor } from './utils/codeUtils';

function App() {

  const { getSrcCode } = useCodeEditor();
  const srcCode = getSrcCode();

  console.log('srcCodeMain', srcCode)





  return (
    <>
      <div>

        <Navbar />
        <Editor />
        <Result srcCode={srcCode} />

      </div>


    </>
  )
}

export default App
