import React  from "react";

function Categories( {value, onClickCategory}) {

    
    const categories = ['Все', 'Мёд', 'Соты'];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, id) => <li key={id} onClick={() => onClickCategory(id)} className={value == id ? 'active' : ''}>{categoryName}</li>)}
        </ul>
      </div>
    );
  }

  export default Categories;