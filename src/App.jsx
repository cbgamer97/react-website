import {AppWrapper, Container, Row, Column} from "./Components/Layout/";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import './components/resets/resets.css';
import Navbar from './components/navbar/index.jsx';
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <AppWrapper>
                        <Navbar/>
                        <Home/>
                    </AppWrapper>
                }/>
                <Route exact path="/about" element={
                    <AppWrapper>
                        <Navbar/>
                        <About/>
                    </AppWrapper>
                }/>
            </Routes>
        </Router>
    )
}
const Test = styled.h1`
    color: red;
`;
export default App