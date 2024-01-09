import React from 'react'


const Result = ({ srcCode }) => {
  console.log('result updated');



  return (
    <div className='bg-[#282c34] p-4 shadow mt-4 rounded-lg '>
      <h2> Result</h2>
      <iframe
        className='w-full border border-gray-700 h-60 rounded-md'
        srcDoc={srcCode}
        title='output'

        width="100%"
        height="100%"></iframe>

    </div>
  )
}

export default Result
