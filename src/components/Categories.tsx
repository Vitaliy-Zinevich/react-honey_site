import React  from "react";

type CategoriesProps = {
    value: number;
    onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ( {value, onClickCategory}) => {

    
    const categories = ['Все', 'Мёд', 'Соты'];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => <li key={i} onClick={() => onClickCategory(i)} className={value == i ? 'active' : ''}>{categoryName}</li>)}
        </ul>
      </div>
    );
  }

  export default Categories;