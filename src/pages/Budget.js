import { Fragment, useEffect, useState } from "react";
import { Form } from "../components/Form/Form.styles";
import useLocalStorage from '../hooks/useLocalStorage'
import Field from "../components/Field/Field";
import Total from "../components/Total/Total";
import Header from "../components/Header/Header";
import useReduce from "../hooks/useReduce";
import Panel from "../components/Panel/Panel";
import { Main } from "../components/Main/Main.styles";

const data = [{ label: 'Web page', price: 500 }, { label: 'SEO consultancy', price: 300 }, { label: 'Google Ads campaign', price: 200 }]

export default function Budget() {
    const [localData, setLocalData] = useLocalStorage({ key: 'services' })
    const [customServices, setCustomServices] = useLocalStorage({ key: 'custom' })
    const [services, setServices] = useState(localData || data)
    const { state, setPages, setLangs, resetValues } = useReduce()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setCustomServices(state)
    }, [state, setCustomServices])
    
    useEffect(() => {
        const result = services.filter(s => s.checked === true).reduce((accumulator, { price }) => accumulator + price, 0)
        setTotal(result + state.subtotal)
        setLocalData(services)
    }, [services, setLocalData, state.subtotal])
    
    return (
        <Main>
            <Header title='¿What do you want to do?' text='Choose the services you need' />
            <Form>
                {
                    services.map(({ label, price, checked }, i) => {
                        return (
                        <Fragment key={i}>
                            <Field id={i} label={label} price={price} checked={checked} setServices={setServices} reset={resetValues}/>
                            {(i === 0 && checked) && <Panel services={customServices} setPages={setPages} setLangs={setLangs} />}
                        </Fragment>)
                    })
                }
            </Form>
            <Total result={total} />
        </Main>
    );
}

