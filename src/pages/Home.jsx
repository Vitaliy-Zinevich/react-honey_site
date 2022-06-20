import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import HoneyBlock from '../components/HoneyBlock';
import Skeleton from '../components/Skeleton';
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId, setCurrentCount } from "../redux/slices/filterSlice";
import {  fetchHoney  } from "../redux/slices/honeySlice";


const Home = ( ) => {
    const dispatch = useDispatch();
    const {honey, status} = useSelector((state) => state.honey);
    const{ categoryId, sort, currentPage, searchValue} = useSelector((state) => state.filter);
    
    const sortType = sort.sortProperty;
    // const {searchValue} = React.useContext(SearchContext);
    
    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id));
    }

    const onChangePage = (number) => {
      dispatch(setCurrentCount(number));
    }

    const Loading = async () => {
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.replace('-', '');
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `search=${searchValue}` : '';
      
    
        dispatch
        (fetchHoney({
          order,  sortBy, category,  search, currentPage,
        }),
      );
      
  
      window.scrollTo(0, 0)};
    
    
     React.useEffect( () => {
        Loading(); 
      }, [categoryId, sortType, currentPage, searchValue]);

     
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
          { status === 'error' ? (
            <div class="cart cart--empty">
            <h2>Произошла ошибка<icon>😕</icon></h2>
            <p>
              К сожалению, не удалось получить данные o товаре.<br />
              Попробуйте повторить попытку позже.
            </p>
            </div>
            ) : (
              <div className="content__items">{status == 'loading' ? skeletons : price } </div>
            )
          }
          
          <Pagination value={currentPage} onChangePage={onChangePage}  />
        </div>
    )
}


export default Home;