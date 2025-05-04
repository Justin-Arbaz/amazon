import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  max?: number;
  onChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  max = 10,
  onChange,
}) => {
  const options = Array.from({ length: max }, (_, i) => i + 1);

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        disabled={quantity <= 1}
        className={`w-8 h-8 flex items-center justify-center border rounded-l 
          ${quantity <= 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
      >
        -
      </button>
      
      <select
        value={quantity}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-8 bg-white border-t border-b text-center appearance-none focus:outline-none"
      >
        {options.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`w-8 h-8 flex items-center justify-center border rounded-r
          ${quantity >= max 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;