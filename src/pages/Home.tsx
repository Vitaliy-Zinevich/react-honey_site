import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import HoneyBlock from '../components/HoneyBlock';
import Skeleton from '../components/Skeleton';
import Pagination from "../components/Pagination";
import { setCategoryId, setCurrentCount } from "../redux/slices/filterSlice";
import {  fetchHoney  } from "../redux/slices/honeySlice";
import { selectHoneyData } from "./selectHoneyData";
import { selectHoneyFilter } from "./selectHoneyData";


const Home: React.FC = ( ) => {
    const dispatch = useDispatch();
    const {honey, status} = useSelector(selectHoneyData);
    const{ categoryId, sort, currentPage, searchValue} = useSelector(selectHoneyFilter);
    
    const sortType = sort.sortProperty;
    
    const onChangeCategory = (id: number) => {
      dispatch(setCategoryId(id));
    }

    const onChangePage = (number: number) => {
      dispatch(setCurrentCount(number));
    }

    const Loading = async () => {
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.replace('-', '');
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue;
     
      
    
        dispatch
        (
          // @ts-ignore
          fetchHoney({
          order,  sortBy, category,  search, currentPage,
        }),
      );
      
  
      window.scrollTo(0, 0)};
    
    
     React.useEffect( () => {
        Loading(); 
      }, [categoryId, sortType, currentPage, searchValue]);

     
     const price = honey
     .filter((obj: any) => {
       if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
         return true;
       }
         return false;
     })
     .map((obj: any) => <HoneyBlock key={obj.id} {...obj}/>);
     const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);


    return (
        <div className="container">
        <div className="content__top">
            <Categories value = {categoryId} onClickCategory={onChangeCategory} />
            <Sort />
          </div>
          <h2 className="content__title">Список всех продуктов</h2>
          { status === 'error' ? (
            <div className="cart cart--empty">
            <h2>Произошла ошибка<span>😕</span></h2>
            <p>
              К сожалению, не удалось получить данные o товаре.<br />
              Попробуйте повторить попытку позже.
            </p>
            </div>
            ) : (
              <div className="content__items">{status == 'loading' ? skeletons : price } </div>
            )
          }
          
          <Pagination currentPage={currentPage} onChangePage={onChangePage}  />
        </div>
    )
}


export default Home;