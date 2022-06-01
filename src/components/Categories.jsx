import React, { useState } from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = useState(3);

    const onClickCategory = (index) => {
      setActiveIndex(index);
    }
    
    const categories = ['Все', 'Мёд', 'Соты', 'Оплата', 'Доставка'];

    return (
      <div className="categories">
        <ul>
          {categories.map((value, i) => <li onClick={() => onClickCategory(i)} className={activeIndex == i ? 'active' : ''}>{value}</li>)}
        </ul>
      </div>
    );
  }

  export default Categories;