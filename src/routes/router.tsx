import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fornecedor from "@/pages/Fornecedor/Fornecedor";
import Home from "@/pages/Home/Home";
import LicitacoesAcompanhar from "@/pages/LicitacaoAcompanhar/LicitacoesAcompanhar";
import Login from "@/pages/Login/Login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/fornecedor" element={<Fornecedor />} />
                <Route path="/acompanhar" element={<LicitacoesAcompanhar />} />
            </Routes>
        </BrowserRouter>
    )
}
