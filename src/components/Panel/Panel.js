import { memo } from "react";
import Counter from "../Counter/Counter";
import { StyledPanel } from "./Panel.styles";
// import {FaInfoCircle} from 'react-icons/fa'

export default memo(function Panel({ services, setPages, setLangs}) {
    return (
        <StyledPanel>
            <div>
                <label>Number of pages</label>
                <Counter initialValue={services.pages} onChange={setPages} />
            </div>
            <div>
                <label> Number of languages</label>
                <Counter initialValue={services.languages} onChange={setLangs} />
            </div>
        </StyledPanel>
    )
})
