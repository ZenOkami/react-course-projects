import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ListPage.css';

function ListPage({ lists, updateList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const list = lists.find((l) => l.id === parseInt(id));

  const [items, setItems] = useState(list ? list.items : []);
  const [newItemText, setNewItemText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomItemText, setRandomItemText] = useState('');

  useEffect(() => {
    if (!list) {
      navigate('/');
    }
  }, [list, navigate]);

  const handleAddItem = () => {
    if (newItemText.trim()) {
      const updatedItems = [...items, { text: newItemText, id: items.length + 1 }];
      setItems(updatedItems);
      updateList(list.id, { ...list, items: updatedItems });
      setNewItemText('');
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    updateList(list.id, { ...list, items: updatedItems });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleRandomPick = () => {
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setRandomItemText(randomItem.text);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!list) {
    return <div>List not found. Redirecting...</div>;
  }

  return (
    <div className='container'>
      <h1>{list.title}</h1>
        <div className='button-ui'>
      <button onClick={() => navigate('/')}>Home</button>
          <button onClick={handleRandomPick}>Pick Random Item</button>
          <button onClick={handleAddItem}>Add Item</button>
          <input
            type="text"
            placeholder="Add new item"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={handleKeyDown}  // Trigger on Enter key press
          />
          </div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDeleteItem(item.id)}>-</button>
          </li>
        ))}
      </ol>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Random Item</h2>
            <p>{randomItemText || 'No item selected'}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPage;
