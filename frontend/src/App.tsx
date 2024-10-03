// App.tsx
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Karte from "./components/Karte.tsx";
import AlleFahrtgemeinschaften from "./components/AlleFahrtgemeinschaften.tsx";
import AlleFahrtstunden from "./components/AlleFahrtgemeinschaften.tsx";
import GespeicherteFahrten from "./components/GespeicherteFahrten.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="karte" element={<Karte />} />
                        <Route path="allefahrtgemeinschaften" element={<AlleFahrtgemeinschaften />} />
                        <Route path="allefahrtstunden" element={<AlleFahrtstunden />} />
                        <Route path="gespeichertefahrten" element={<GespeicherteFahrten />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
