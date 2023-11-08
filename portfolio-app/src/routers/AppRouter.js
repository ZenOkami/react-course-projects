import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "../components/headerPage";
import HomePage from "../components/homePage";
import PortfolioPage from "../components/portfolioPage";
import PortfolioItemPage from "../components/portfolioItemPage";
import ContactPage from "../components/contactPage";
import Error404 from "../components/error404";

const AppRouter = () => (
    <Router>
        <Header />
            <Routes>
                <Route path='/' element={<HomePage />} exact={true}/>
                <Route path='/portfolio'>
                    <Route path=':id' element={< PortfolioItemPage />} />
                    <Route index element={<PortfolioPage />} />
                </Route>
                <Route path='/contact' element={<ContactPage />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
    </Router>
)

export default AppRouter;