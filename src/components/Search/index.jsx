import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {setSearchValue} from '../../redux/slices/filterSlice'

import styles from './Search.module.scss'


const Search = () => {
     const dispatch = useDispatch();
     const [value, setValue ]  = React.useState('')
     const inputRef = React.useRef();

     const onClickClear = () => {
          dispatch(setSearchValue(''));
          setValue('');
          inputRef.current.focus();
     };


     const updateSearchValue = React.useCallback(
          debounce((str) => {
               dispatch(setSearchValue(str));
          }, 250), 
          [],
     );


     const onChangeInput = (event) => {
         setValue(event.target.value);
         updateSearchValue(event.target.value);
     };

     console.log(value);


      return (
           <div>
               <input 
               ref = {inputRef}
               value={value}
               onChange={onChangeInput}
               className={styles.input} 
               placeholder="Искать на сайте" />
               {value && (
               <svg 
               onClick={onClickClear}
               className={styles.clear} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
               <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
               <path d="M0 0h48v48H0z" fill="none"/>
               </svg>
               )}
           </div>
           
      ) 
}

export default Search;