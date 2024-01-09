import React, { useCallback, useState } from 'react'
import { html } from '@codemirror/lang-html'
import CodeMirror from '@uiw/react-codemirror'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { useCodeEditor } from '../utils/codeUtils'



const Editor = () => {


  const {
    htmlEdit,
    cssEdit,
    jsEdit,
    onChangeHtml,
    onChangeCss,
    onChangeJs,

  } = useCodeEditor();

  console.log('htmlEdit:', htmlEdit)



  return (
    <div className='p-2 grid grid-cols-1 lg:grid-cols-3 gap-2'>

      {/* HTML */}
      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>HTML</h2>
        <CodeMirror
          className='text-xl border border-gray-700 '
          value={htmlEdit}
          height='342px'
          theme='dark'
          extensions={[html(true)]}
          onChange={onChangeHtml} />

      </div>

      {/* CSS */}

      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>CSS</h2>
        <CodeMirror
          className='text-xl border border-gray-700 '
          value={cssEdit}
          height='342px'
          theme='dark'
          extensions={[css(true)]}
          onChange={onChangeCss} />
      </div>

      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>Javascript</h2>
        <CodeMirror
          className='text-xl border border-gray-700 '
          value={jsEdit}
          height='342px'
          theme='dark'
          extensions={[javascript(true)]}
          onChange={onChangeJs} />
      </div>

    </div>
  )
}

export default Editor;


