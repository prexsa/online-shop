import { useState } from 'react';
import './quantity.css';

const Quantity = () => {
  const [value, setValue] = useState(1);

  const handleSubtract = () => {
    if (value < 2) return;
    setValue(value - 1);
  };

  const handleAdd = () => {
    if (value >= 10) return;
    setValue(value + 1);
  };

  return (
    <div className="quantity">
      <button className="minus" aria-label="decrease" onClick={handleSubtract}>
        &minus;
      </button>
      <input
        type="number"
        className="input-box"
        value={value}
        min="1"
        max="10"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="plus" aria-label="increase" onClick={handleAdd}>
        &#43;
      </button>
    </div>
  );
};

export default Quantity;
