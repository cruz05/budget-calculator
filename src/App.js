import { useEffect, useState } from "react";
import {Footer} from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Main } from "./Main";
import { Label } from './components/Form/Label'

const services = [{ label: 'A web page', price: 500, checked: false }, { label: 'A SEO consultancy', price: 300, checked: false }, { label: 'A Google Ads campaign', price: 200, checked: false }]

function App() {
  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState(services)

  const changeState = (e, index) => {
    const newStates = checked.map((service, i) => i === index ? { ...service, checked: e.target.checked } : service)
    setChecked(newStates)
  }

  useEffect(() => {
    const sum = checked.filter(i => i.checked === true).reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    setTotal(sum)
  }, [checked])


  return (
    <Main className="App">
      <h1>¿What do you want to do?</h1>
      <p>Choose the services you need</p>
      <Form>
        {
          services.map(({label, price, checked}, i) => {
            return(
              <div key={i}>
                <Label active={checked}>
                  <input type="checkbox" onChange={e => changeState(e, i)} value={price}/> {`${label} (${price}€)`}
                </Label>
              </div>
            )
          })
        }
      </Form>
      <Footer>
        <p className="text">Total Amount:</p> 
        <p className="total">{total}€</p>
      </Footer>
    </Main>
  );
}

export default App;
