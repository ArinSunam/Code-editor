import React from 'react'

const Editor = () => {
  return (
    <div className='p-2 grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>HTML</h2>
        HTML
      </div>

      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>CSS</h2>
        CSS
      </div>

      <div className='bg-[#282c34] p-4 rounded-lg shadow'>
        <h2 className='text-lg text-white font-semibold mb-2'>Javascript</h2>
        JAVASCRIPT
      </div>

    </div>
  )
}

export default Editor
