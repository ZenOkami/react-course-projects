import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Expense from "../components/expenseDashboard";
import EditExpense from "../components/EditExpense";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/helpPage";
import Header from "../components/headerPage";
import Error404 from "../components/error404";


const AppRouter = () => (
    <Router>
        <div>
        <Header />
            <Routes>
                <Route path='/' element={<Expense />} exact={true}/>
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit/:id' element={<EditExpense />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;