import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main.styles";
import Home from './pages/Home'
import Budget from './pages/Budget'

export default function App() {
    return (
        <Main className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
        </Main>
    );
}

