import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './assets/css/main.css';

import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {DashboardPage} from "./pages/DashboardPage/DashboardPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
        <Router>
            <Header/>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/about" >
                        <AboutPage/>
                    </Route>
                    <Route path="/contact" >
                        <ContactPage/>
                    </Route>
                    <Route path="/register" >
                        <RegisterPage/>
                    </Route>
                    <Route path="/login" >
                        <LoginPage/>
                    </Route>
                    <Route path="/dashboard" >
                        <DashboardPage/>
                    </Route>
                </Switch>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
