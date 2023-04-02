import React, { memo } from 'react'

function Header({title, text}) {
  return (
    <>
        <h1>{title}</h1>
        <p>{text}</p>
    </>
  )
}

export default memo(Header)
