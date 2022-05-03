import React from 'react'

const Error = (props) => {
  return (
    <div className='error'>
        <p>{props.error}</p>
    </div>
  )
}

export default Error