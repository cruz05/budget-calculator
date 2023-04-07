import { Fragment, useEffect, useState } from "react";
import { Form } from "../components/Form/Form.styles";
import useLocalStorage from '../hooks/useLocalStorage'
import Total from "../components/Total/Total";
import useStateHandler from "../hooks/useStateHandler";
import Panel from "../components/Panel/Panel";
import { Button } from "../components/Counter/Button";
import { FaBookmark } from "react-icons/fa";
import TextField from "../components/TextField/TextField";
import { Label } from "../components/TextField/TextField.styles";
import BudgetList from "../components/BudgetList/BudgetList";
import Checkbox from "../components/Checkbox/Checkbox";

const data = [{ label: 'Web page', price: 500 }, { label: 'SEO consultancy', price: 300 }, { label: 'Google Ads campaign', price: 200 }]

export default function BudgetCalculator() {
    const [storedData, setStoredData] = useLocalStorage({ key: 'data' })
    const [services, setServices] = useState(storedData ? storedData.services : data)
    const { state, setPages, setLangs, resetValues } = useStateHandler()
    const [total, setTotal] = useState(0)
    const [savedBudgets, setSavedBudgets] = useState([])
    
    useEffect(() => {
        const result = services.filter(s => s.checked === true).reduce((accumulator, { price }) => accumulator + price, 0)
        setTotal(result + state.subtotal)
        setStoredData({services, custom: state})
    }, [services, state, setStoredData])

    const handleSubmit = (e) => {
        e.preventDefault()
        const budget = e.target.children.budget.value
        const client = e.target.children.client.value
        const newBudget = [...savedBudgets, {budget, client, date: new Date().toDateString(), services: [...services], total}]
        setSavedBudgets(newBudget)
    }
    
    return (
        <>
            <section>
                <h1>Budget Calculator</h1>
                <Form id="budget" onSubmit={e => handleSubmit(e)}>
                    <TextField label="What's the budget for?" name='budget' placeholder="E.g. My Website" />
                    <TextField label="What's your name?" name="client" placeholder="E.g. John Doe" />
                    <div>
                        <Label>What do you want to do?</Label>
                        <p>Choose the services you need</p>
                    </div>
                    {
                        services.map(({ label, price, checked }, i) => {
                            return (
                            <Fragment key={i}>
                                <Checkbox id={i} label={label} price={price} checked={checked} setServices={setServices} reset={resetValues} />  
                                {(i === 0 && checked) && <Panel services={storedData.custom} setPages={setPages} setLangs={setLangs} />}
                            </Fragment>)
                        })
                    }
                </Form> 
                <Total result={total} />
                <Button type="submit" bgColor='#283593' px color="white" form='budget'><FaBookmark/> Save</Button>
            </section>
            <BudgetList data={savedBudgets}/>
        </>
    );
}

