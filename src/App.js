import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import HoneyBlock from './components/HoneyBlock';

function App() {
  const honey = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Мёд разнотравье',
      sizes: [1, 3, 5],
      price: 1000,
      category: 1,
      rating: 4,
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Кориандр',
      sizes: [1, 3, 5],
      price: 1100,
      category: 2,
      rating: 5,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Подсолнух',
      sizes: [1, 3, 5],
      price: 1100,
      category: 4,
      rating: 5,
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Забрус',
      sizes: [1, 3, 5],
      price: 1200,
      category: 1,
      rating: 4,
    },
    {
      id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1642067958024-1a2d9f836920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Соты',
      sizes: [1, 3],
      price: 950,
      category: 2,
      rating: 3,
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Список всех продуктов</h2>
          <div className="content__items">
            {honey.map((obj) => (
              <HoneyBlock
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
