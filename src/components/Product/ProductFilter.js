import React, { useState } from 'react';
import './ProductFilter.css';
const ProductFilter = ({ onFilterChange }) => {
    const [filterName, setFilterName] = useState('');

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setFilterName(newName);
        onFilterChange({ name: newName.toLowerCase() });
    };

    return (
        <div className="product-filter-container">
            <label htmlFor="name" className="filter-label">
                Filter by Name:
            </label>
            <input
                type="text"
                id="name"
                value={filterName}
                onChange={handleNameChange}
                placeholder="Enter product name"
                className="filter-input"
            />
        </div>
    );
};

export default ProductFilter