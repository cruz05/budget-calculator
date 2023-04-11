import { useEffect, useState } from "react";
import Budget from "../Budget/Budget";
import { List } from "./BudgetList.styles";

export default function BudgetList({ data }) {
  const [savedBudgets, setSavedBudgets] = useState([])
  const [filter, setFilter] = useState('')

  const handleSearch = (e) => {
    const name = e.target.value
    if (name) {
      const filteredBudgets = data.filter(b => b.budget.toLowerCase().includes(name.toLowerCase()))
      if (filteredBudgets.length) {
        setSavedBudgets(filteredBudgets)
      }
    } else {
      setSavedBudgets([...data])
    }
  }

  const handleSelect = (e) => {
    const { options, selectedIndex } = e.target
    const selectedOpt = options[selectedIndex].value
    setFilter(selectedOpt)
  }

  const handleClick = (e) => {
    setSavedBudgets([...data])
  }

  useEffect(() => {
    if (filter === 'name') {
      setSavedBudgets(budgets => [...budgets].sort((a, b) => {
        const nameA = a.budget.toLowerCase();
        const nameB = b.budget.toLowerCase();
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0;
      }))
    }

    if (filter === 'date') {
      setSavedBudgets(budgets => [...budgets].sort((a, b) => new Date(a.date) - new Date(b.date)))
    } 
  }, [filter])

  useEffect(() => {
    setSavedBudgets(data.slice(0))
  }, [data])

  return (
    <List>
      <h2>Saved Budgets</h2>
      <div className="filters">
        <input type='text' placeholder="Search a budget..." onChange={handleSearch} />
        <div className="row">
          <fieldset>
            <label id="sort-opt">Sort by: </label>
            <select name="sorts" id="sort-opt" defaultValue={''} required onChange={handleSelect}>
              <option value='' disabled>Default</option>
              <option value='name'>Name</option>
              <option value='date'>Date</option>
            </select>
          </fieldset>
          <button onClick={handleClick}>Reset</button>
        </div>
      </div>
      {savedBudgets.map(({ client, budget, total, date, services }, i) => <Budget key={i} client={client} title={budget} date={date} total={total} services={services} />)}
    </List>
  )
}
