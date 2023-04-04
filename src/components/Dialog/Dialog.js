import { useEffect, useRef } from 'react'
import { DialogContent } from './Dialog.styles'

export default function Dialog({ field, onClick }) {
  const dialogRef = useRef(null)
  
  useEffect(() => {
    const handleClick = e => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClick()
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [onClick])

  return (
    <DialogContent>
      <div ref={dialogRef}>
        <p>This field indicates the number of {field} your website will have.</p>
      </div>
    </DialogContent>
  )
}
