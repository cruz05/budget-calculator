import { useContext } from 'react'
import { memo } from 'react'
import { ServicesContext } from '../../hooks/useGlobalContext'
import { CheckboxLabel } from './Checkbox.styles'

export default memo(function Checkbox({ id, label, price, checked}) {
    const {resetValues, setServices, setTotal} = useContext(ServicesContext)

    const handleChange = (e) => {
        if (id === 0 && !e.target.checked) {
            resetValues()
        }
        setServices({id, checked: e.target.checked})
        setTotal()
    }

    return (
        <>
            <CheckboxLabel active={checked}>
                <input type="checkbox" onChange={handleChange} value={price} checked={checked || false} /> {`${label} (${price}€)`}
            </CheckboxLabel>
        </>
    )
})
