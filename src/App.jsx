import React from "react";
import Header from "../src/components/Header/Header";
import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/NavBar/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";

function App(){
    return(
        <>
        <Header greeting="Jordy Olaya" />
        <Main />
        <NavBar />
        <CartWidget />
        <ItemListContainer />
        <Footer />
        </>
    )
}

export default App;