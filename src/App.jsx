import React from 'react';
import MenuItem from './components/MenuItem';
import { mainCourses, desserts } from './data/menuData';

export default function App() {
  const allItems = [...mainCourses, ...desserts];
  const totalItems = allItems.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header>
        <h1>B.tech Bistro</h1>
        <p>Delicious Food, Made Fresh Daily</p>
      </header>

      <section>
        <h2>Main Courses</h2>
        <div className="grid">
          {mainCourses.map(item => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2>Desserts</h2>
        <div className="grid">
          {desserts.map(item => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="info">
        <p>Total menu items: <strong>{totalItems}</strong></p>
        <p>Open Daily: 11 AM - 10 PM</p>
        <p>Contact: +91-XXXXXXXXXX</p>
      </section>

      <footer>
        <p>Ameens's Bistro — <a href="mailto:ameen@example.com">ameen@example.com</a></p>
        <p>© {currentYear} Rafi's Bistro</p>
      </footer>
    </div>
  );
}
