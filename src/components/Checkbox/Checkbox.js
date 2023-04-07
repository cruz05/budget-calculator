import { memo } from 'react'
import { CheckboxLabel } from './Checkbox.styles'

export default memo(function Checkbox({ id, label, price, checked, setServices, reset}) {
    const handleChange = (e, n) => {
        if (n === 0 && !e.target.checked) {
            reset()
        }
        setServices(prev => prev.map((service, i) => i === n ? { ...service, checked: e.target.checked } : service))
    }

    return (
        <>
            <CheckboxLabel active={checked}>
                <input type="checkbox" onChange={e => handleChange(e, id)} value={price} checked={checked || false} /> {`${label} (${price}€)`}
            </CheckboxLabel>
        </>
    )
})
