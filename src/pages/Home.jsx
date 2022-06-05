import React from "react"
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import HoneyBlock from '../components/HoneyBlock';
import Skeleton from '../components/Skeleton';

const Home = () => {
    const [honey, setHoney] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
    fetch('https://629b609c656cea05fc383281.mockapi.io/honey')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setHoney(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
     }, []);


    return (
        <div className="container">
        <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Список всех продуктов</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : honey.map((obj) => <HoneyBlock key={obj.id} {...obj} />)}
          </div>
        </div>
    )
}


export default Home;