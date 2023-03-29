import { useState, useEffect } from "react";
import NumberInput from "../Form/NumberInput";
import { StyledPanel } from "./StyledPanel";
// import {FaInfoCircle} from 'react-icons/fa'

export default function Panel({onAdd}) {
    const [pages, setPages] = useState(1)
    const [languages, setLanguages] = useState(1)

    useEffect(() => {
        onAdd({pages, languages})
    }, [pages, languages, onAdd])

    return (
        <StyledPanel>
            <div>
                <label>Number of pages</label>
                <NumberInput onChange={setPages} />
            </div>
            <div>
                <label> Number of languages</label>
                <NumberInput onChange={setLanguages}/>
            </div>
        </StyledPanel>
    )
}
