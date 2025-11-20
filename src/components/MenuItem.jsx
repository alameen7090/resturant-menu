// src/components/MenuItem.jsx
import React from 'react';

export default function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <div className="menu-card">
      <div className="menu-card-header">
        <h3 className="menu-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
      <p className="menu-category">{category}</p>
      <p className="menu-desc">{description}</p>
      <div className="menu-footer">
        <span className="menu-price">${price.toFixed(2)}</span>
      </div>
    </div>
  )
}
