import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main.styles";
import Home from './pages/Home'
import BudgetCalculator from "./pages/BudgetCalculator";
import { ServicesContextProvider } from "./hooks/useGlobalContext";

export default function App() {
    return (
        <Main className="App">
            <ServicesContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/budget" element={<BudgetCalculator />} />
                </Routes>
            </ServicesContextProvider>
        </Main>
    );
}

