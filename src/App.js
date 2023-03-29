import { useEffect, useState } from "react";
import {Footer} from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Main } from "./components/Main/Main";
import { Label } from './components/Form/Label'
import Panel from './components/Panel/Panel'

const data = [{ label: 'A web page', price: 500, checked: false }, { label: 'A SEO consultancy', price: 300, checked: false }, { label: 'A Google Ads campaign', price: 200, checked: false }]

function App() {
  const [total, setTotal] = useState(0)
  const [services, setServices] = useState(data)
  const [customServices, setCustomServices] = useState({ pages: 1, languages: 1 })
  const [subtotal,setSubtotal] = useState(0)

  const changeState = (e, n) => {
    if(n === 0 && !e.target.checked){
      setCustomServices(prev => ({...prev, pages: 1, languages: 1}))
    }
    const newStates = services.map((service, i) => i === n ? { ...service, checked: e.target.checked } : service)
    setServices(newStates)
  }

  useEffect(() => {
    setSubtotal(customServices.pages * customServices.languages * 30)
  }, [customServices])

  useEffect(() => {
    const sumPrices = services.filter(service => service.checked === true).reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    setTotal(sumPrices + subtotal)
  }, [services, subtotal])

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
                  <input type="checkbox" onChange={e => changeState(e, i)} value={price} /> {`${label} (${price}€)`}
                </Label>
                {(i === 0 && checked) && <Panel onAdd={setCustomServices} />}
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
