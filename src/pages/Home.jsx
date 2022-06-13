import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import HoneyBlock from '../components/HoneyBlock';
import Skeleton from '../components/Skeleton';
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";


const Home = ( ) => {
    const dispatch = useDispatch();
    const{ categoryId, sort} = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;

   

    const {searchValue} = React.useContext(SearchContext);
    const [honey, setHoney] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id));
    }

    React.useEffect(() => {
      setIsLoading(true);

      const order = sortType.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.replace('-', '');
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      
      
     fetch(
       `https://629b609c656cea05fc383281.mockapi.io/honey?${category}&page=${currentPage}&sortBy=${sortBy}&order=${order}`
       )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setHoney(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
     }, [categoryId, sortType, currentPage]);

     
     const price = honey
     .filter((obj) => {
       if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
         return true;
       }
         return false;
     })
     .map((obj) => <HoneyBlock key={obj.id} {...obj}/>);
     const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);


    return (
        <div className="container">
        <div className="content__top">
            <Categories value = {categoryId} onClickCategory={onChangeCategory} />
            <Sort />
          </div>
          <h2 className="content__title">Список всех продуктов</h2>
          <div className="content__items">
            {isLoading ? skeletons : price }
          </div>
          <Pagination onChangePage={number => setCurrentPage(number)}  />
        </div>
    )
}


export default Home;