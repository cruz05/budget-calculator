import { FaPlus, FaMinus } from 'react-icons/fa'
import { memo, useEffect, useState } from 'react';
import { Button } from './Button';

function Counter({initialValue, onChange}) {
  const [value, setValue] = useState(initialValue)

  console.log('input render')

  const onAdd = () => setValue(prev => prev + 1)

  const onMinus = () => { if(value > 0) setValue(prev => prev - 1) }

  const handleChange = e => {
    const value = parseInt(e.target.value)
    if(value >= 0) setValue(value)
  }

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <div>
      <Button type='button' onClick={onAdd}><FaPlus /></Button>
      <input type='number' onChange={e => handleChange(e)} value={value}/> 
      <Button type='button' onClick={onMinus}><FaMinus /></Button>
    </div>
  )
}

export default memo(Counter)