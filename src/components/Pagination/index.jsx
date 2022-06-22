import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


const Pagination = ({currentPage, onChangePage}) => {
    return (
        <ReactPaginate
              className={styles.root}
              breakLabel="..."
              nextLabel=">"
              onPageChange={(event) => onChangePage(event.selected + 1)}
              pageRangeDisplayed={8}
              pageCount={1}
              previousLabel="<"
              forcePage={currentPage}
              renderOnZeroPageCount={null}
          />
    )
} 

export default Pagination;


