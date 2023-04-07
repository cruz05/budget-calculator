import { memo } from "react";
import Counter from "../Counter/Counter";
import { StyledPanel } from "./Panel.styles";

export default memo(function Panel({ services, setPages, setLangs }) {
    console.log('Panel render')
    return (<>
        <StyledPanel>
            <div>
                <label>Number of pages</label>
                <Counter field='pages' initialValue={services.pages} onChange={setPages} />
            </div>
            <div>
                <label> Number of languages</label>
                <Counter field='languages' initialValue={services.languages} onChange={setLangs} />
            </div>
        </StyledPanel>

    </>)
})
