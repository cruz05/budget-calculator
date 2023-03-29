import { FaPlus, FaMinus } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Button } from './Button';

export default function NumberInput({onChange}) {
  const [counter, setCounter] = useState(1)

  const onAdd = () => setCounter(prev => prev + 1)

  const onMinus = () => { if(counter > 0) setCounter(prev => prev - 1) }

  const handleChange = e => {
    if(Number(e.target.value) >= 0) {
      setCounter(parseInt(e.target.value))
    }
  }

  useEffect(() => {
    onChange(counter)
  }, [counter, onChange])

  return (
    <div>
      <Button type='button' onClick={onAdd}><FaPlus /></Button>
      <input type='number' onChange={e => handleChange(e)} value={counter}/> 
      <Button type='button' onClick={onMinus}><FaMinus /></Button>
    </div>
  )
}
