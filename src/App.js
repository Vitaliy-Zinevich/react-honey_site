import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import HoneyBlock from './components/HoneyBlock';

function App() {
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
            <HoneyBlock
              title="Мед разнотравье"
              price={1000}
              imageUrl="https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <HoneyBlock
              title="Кориандр"
              price={1100}
              imageUrl="https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <HoneyBlock
              title="Подсолнух"
              price={1000}
              imageUrl="https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <HoneyBlock
              title="Забрус"
              price={1200}
              imageUrl="https://images.unsplash.com/photo-1619321652902-a8c183e6cdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <HoneyBlock
              title="Соты"
              price={950}
              imageUrl="https://images.unsplash.com/photo-1642067958024-1a2d9f836920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
