import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ListPage from './ListPage';
import Error404 from './Error404';

function App() {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });

  const addList = (title) => {
    const newList = { id: Date.now(), title, items: [] };
    const updatedLists = [...lists, newList];
    setLists(updatedLists);
    localStorage.setItem('lists', JSON.stringify(updatedLists));
  };

  const deleteList = (id) => {
    const updatedLists = lists.filter(list => list.id !== id);
    localStorage.setItem('lists', JSON.stringify(updatedLists));
    setLists(updatedLists);
  };

  const updateList = (id, updatedList) => {
    const updatedLists = lists.map((list) => (list.id === id ? updatedList : list));
    setLists(updatedLists);
    localStorage.setItem('lists', JSON.stringify(updatedLists));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home lists={lists} addList={addList} deleteList={deleteList} />} />
        <Route path="/list/:id" element={<ListPage lists={lists} updateList={updateList} />} />
        <Route path='/list/*' element={<Error404 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
