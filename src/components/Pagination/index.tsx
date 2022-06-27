import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

type PaginationProps = {
    currentPage: number;
    onChangePage: (selected: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage}) => {
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
          />
    )
} 

export default Pagination;


