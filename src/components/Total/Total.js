import { memo } from "react";
import { Budget } from "./Total.styles";

function Total({result}) {
  return (
    <Budget>
        <p className="text">Total Amount:</p> 
        <p className="total">{result}€</p>
    </Budget>
  )
}

export default memo(Total)