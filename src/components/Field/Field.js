import { memo } from 'react'
import { Label } from './Label'

export default memo(function Field({ id, label, price, checked, setServices, reset}) {
    const handleChange = (e, n) => {
        if (n === 0 && !e.target.checked) {
            reset()
        }
        setServices(prev => prev.map((service, i) => i === n ? { ...service, checked: e.target.checked } : service))
    }

    return (
        <>
            <Label active={checked}>
                <input type="checkbox" onChange={e => handleChange(e, id)} value={price} checked={checked || false} /> {`${label} (${price}€)`}
            </Label>
        </>
    )
})
