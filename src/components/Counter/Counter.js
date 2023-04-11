import { FaPlus, FaMinus } from 'react-icons/fa'
import { memo, useContext, useEffect, useState } from 'react';
import { Button } from './Button';
import { FaInfoCircle } from 'react-icons/fa'
import Dialog from '../Dialog/Dialog';
import { ServicesContext } from '../../hooks/useGlobalContext';

function Counter({ field, initialValue, onChange }) {
  const { setTotal } = useContext(ServicesContext)
  const [value, setValue] = useState(initialValue)
  const [showDialog, setShowDialog] = useState(false)

  const onAdd = () => setValue(prev => prev + 1)

  const onMinus = () => { if(value > 0) setValue(prev => prev - 1) }

  const handleChange = e => {
    const value = parseInt(e.target.value)
    if(value >= 0) setValue(value)
  }

  useEffect(() => {
    onChange(value)
    setTotal()
  }, [setTotal, value, onChange])

  return (
    <div>
      <Button type='button' onClick={onAdd}><FaPlus /></Button>
      <input type='number' onChange={e => handleChange(e)} value={value} />
      <Button type='button' onClick={onMinus}><FaMinus /></Button>
      
      <Button color='#898889' bgColor='transparent' onClick={() => setShowDialog(true)} type="button"><FaInfoCircle /></Button>
      { showDialog && <Dialog field={field} onClick={() => setShowDialog(false)} />  }
    </div>
  )
}

export default memo(Counter)