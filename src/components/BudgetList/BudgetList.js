import SavedBudget from "../SavedBudget/SavedBudget";
import { List } from "./BudgetList.styles";

export default function BudgetList({ data }) {
  return (
    <>
      {
        data.length > 0 && 
        <List>
          <h2>Saved Budgets</h2>
          {data.map(({ client, budget, total,date,services }, id) => <SavedBudget key={id} client={client} title={budget} date={date} total={total} services={services}/>)}
        </List>
      }
    </>
  )
}
