import React from "react";
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
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

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" className={({ isActive }) => isActive ? 'is-active' : undefined} end>Dashboard</NavLink>
        <NavLink to="/create" className={({ isActive }) => isActive ? 'is-active' : undefined} end>Create an Expense</NavLink>
        <NavLink to="/edit" className={({ isActive }) => isActive ? 'is-active' : undefined} end>Edit an Expense</NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? 'is-active' : undefined} end>Help</NavLink>
    </header>
);

const router = (
    <Router>
        <div>
        <Header />
            <Routes>
                <Route path='/' element={<Expense />} exact={true}/>
                <Route path='/create' element={<AddExpense />} />
                <Route path='/edit' element={<EditExpense />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
)

const root = ReactDOM.createRoot(document.getElementById('app'));

// root.render(<IndecisionApp />);
root.render(router);