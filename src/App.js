import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main.styles";
import Home from './pages/Home'
import BudgetCalculator from "./pages/BudgetCalculator";

export default function App() {
    return (
        <Main className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<BudgetCalculator />} />
            </Routes>
        </Main>
    );
}

