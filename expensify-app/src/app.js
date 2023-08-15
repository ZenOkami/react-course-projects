import React from "react";
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Expense = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpense = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpense = () => (
    <div>
        This is from my edit page
    </div>
);

const HelpPage = () => (
    <div>
        This is my help page
    </div>
);

const router = (
    <Router>
        <Routes>
            <Route path='/' element={<Expense />} exact={true}/>
            <Route path='/create' element={<AddExpense />} />
            <Route path='/edit' element={<EditExpense />} />
            <Route path='/help' element={<HelpPage />} />
        </Routes>
    </Router>
)

const root = ReactDOM.createRoot(document.getElementById('app'));

// root.render(<IndecisionApp />);
root.render(router);