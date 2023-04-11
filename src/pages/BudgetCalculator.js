import { Fragment, useEffect, useState, useContext } from "react";
import { Form } from "../components/Form/Form.styles";
import useLocalStorage from '../hooks/useLocalStorage'
import Total from "../components/Total/Total";
import Panel from "../components/Panel/Panel";
import { Button } from "../components/Counter/Button";
import { FaBookmark } from "react-icons/fa";
import TextField from "../components/TextField/TextField";
import { Label } from "../components/TextField/TextField.styles";
import BudgetList from "../components/BudgetList/BudgetList";
import Checkbox from "../components/Checkbox/Checkbox";
import { ServicesContext } from "../hooks/useGlobalContext";

export default function BudgetCalculator() {
    const { state } = useContext(ServicesContext)
    const [storedBudgets, setStoredBudgets] = useLocalStorage({ key: 'savedBudgets', initialValue: [] })
    const [, setStoredData] = useLocalStorage({ key: 'data' })
    const [budgets, setBudgets] = useState(storedBudgets)

    useEffect(() => {
        setStoredData({...state })
    }, [state, setStoredData])

    useEffect(() => {
        setStoredBudgets(budgets)
    }, [budgets, setStoredBudgets])


    const handleSubmit = (e) => {
        e.preventDefault()
        const budget = e.target.budget.value
        const client = e.target.client.value
        const newBudget = { budget, client, date: new Date().toUTCString(), services: [...state.services], total: state.total }
        setBudgets(prev => [...prev, newBudget])
    }

    return (
        <>
            <section>
                <h1>Budget Calculator</h1>
                <Form id="budget" onSubmit={handleSubmit}>
                    <TextField label="What's the budget for?" name='budget' placeholder="E.g. My Website" />
                    <TextField label="What's your name?" name="client" placeholder="E.g. John Doe" />
                    <div>
                        <Label>What do you want to do?</Label>
                        <p>Choose the services you need</p>
                    </div>
                    {
                        state.services.map(({ label, price, checked }, i) => {
                            return (
                                <Fragment key={i}>
                                    <Checkbox id={i} label={label} price={price} checked={checked}/>
                                    {(i === 0 && checked) && <Panel />}
                                </Fragment>)
                        })
                    }
                </Form>
                <Total result={state.total} />
                <Button type="submit" bgColor='#283593' px color="white" form='budget'><FaBookmark /> Save</Button>
            </section>
            <BudgetList data={storedBudgets} />
        </>
    );
}

