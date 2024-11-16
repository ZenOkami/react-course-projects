import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ lists, addList, deleteList }) {
  const [newListTitle, setNewListTitle] = useState('');

  const handleAddList = () => {
    if (newListTitle.trim()) {
      addList(newListTitle);
      setNewListTitle('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddList();
    }
  };

  return (
    <div className='container'>
      <h1>{lists.length === 0 ? "No Lists! \n Let's add a list!" : 'My Lists'}</h1>
      <div className='form-flex'>
      <input
        type="text"
        placeholder="New List Title"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
        onKeyDown={handleKeyDown}  // Trigger on Enter key press
        className='form-flex'
      />
      <button onClick={handleAddList} className='form-flex'>+</button>
      </div>
      <ol>
        {lists.map((list, index) => (
          <li key={list.id || index}>
            <Link to={`/list/${list.id}`}>{list.title}</Link>
            <button onClick={() => deleteList(list.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
