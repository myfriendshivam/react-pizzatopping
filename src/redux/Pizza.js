import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTopping, removeTopping } from './pizzaSlice';

const availableToppings = ['corn', 'cheese', 'pepperoni', 'mushroom', 'olives'];

const toppingEmojis = {
  corn: '🌽',
  cheese: '🧀',
  pepperoni: '🍖',
  mushroom: '🍄',
  olives: '🫒',
};

const Pizza = () => {
    // useSelector -> lets us read the toppings from Redux store
  const toppings = useSelector((state) => state.pizza.toppings);

  // useDispatch -> lets us send actions to Redux store
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  const handleAdd = () => {
    if (selected) {
      dispatch(addTopping(selected));
      setSelected('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Selected Toppings:</h2>
      {/* List of toppings */}
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {toppings.map((topping) => (
          <li key={topping} style={{
            margin: '5px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>
              {toppingEmojis[topping] || '🍕'} {topping}
            </span>
            {/* Remove button -> dispatch removeTopping action */}
            <button
              onClick={() => dispatch(removeTopping(topping))}
              style={{
                background: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        {/* Input field for new topping */}
        <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{
            fontSize: '16px',
            margin: "5px",
            padding: "5px 20px",
            border: "2px Solid black",
            borderRadius: "5px" }}>
          <option value="" >-- Select topping --</option>
          {availableToppings.map((topping) => (
            <option key={topping} value={topping}>
              {toppingEmojis[topping] || '🍕'} {topping}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 18px',
            marginLeft: '10px',
            background: '#27ae60',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Pizza;
