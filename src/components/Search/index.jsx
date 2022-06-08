import React from "react";
import { SearchContext } from "../../App";

import styles from './Search.module.scss'

const Search = () => {
     const { searchValue, setSearchValue } = React.useContext(SearchContext);

      return (
           <div>
               <input 
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               className={styles.input} 
               placeholder="Искать на сайте" />
               {searchValue && (
               <svg 
               onClick={() => setSearchValue('')}
               className={styles.clear} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
               <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
               <path d="M0 0h48v48H0z" fill="none"/>
               </svg>
               )}
           </div>
           
      ) 
}

export default Search;