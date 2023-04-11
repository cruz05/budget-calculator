import { useContext } from "react";
import { memo } from "react";
import { ServicesContext } from "../../hooks/useGlobalContext";
import Counter from "../Counter/Counter";
import { StyledPanel } from "./Panel.styles";

export default memo(function Panel() {
    const { state, setPages, setLangs} = useContext(ServicesContext)
    
    return (<>
        <StyledPanel>
            <div>
                <label>Number of pages</label>
                <Counter field='pages' initialValue={state.pages} onChange={setPages} />
            </div>
            <div>
                <label> Number of languages</label>
                <Counter field='languages' initialValue={state.languages} onChange={setLangs} />
            </div>
        </StyledPanel>

    </>)
})
