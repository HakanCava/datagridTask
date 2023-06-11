import { useDataContext } from "../context/DataProvider";
import {
  up_vektor,
  down_vektor,
  left_go,
  right_go,
} from "../helpers/home/search_icon";

const Pagination = () => {
  const {
    paginatedData,
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    search,
  } = useDataContext();

  return (
    <div className="pagination">
      {/* //! Left  */}
      <div className="pagination_left">
        <div className="show">Show:</div>
        <div className="row_vektors">
          <div style={{ fontSize: "10px", marginRight: "5px" }}>
            {/* //! search varsa sol alttaki showu gösterme */}
            {!search && paginatedData?.length} rows  
          </div>
          <div>
            <div>{up_vektor}</div>
            <div>{down_vektor}</div>
          </div>
        </div>
      </div>
      {/* //! Right */}
      <div className="pagination_right">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="go_btn"
        >
          {left_go}
        </button>
        <div className="pages">{currentPage}</div>
        <div
          style={{
            fontSize: "11px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          of
        </div>
        <div className="pages">{totalPages}</div>
        <button
          className="go_btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {right_go}
        </button>
      </div>
    </div>
  );
};

export default Pagination;





//? Extra
//! paginate de sayfa numaralarını tek tek göstermek istersek bu kodu yazabiliriz
// {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//   (pageNumber) => (
//     <button
//       key={pageNumber}
//       onClick={() => handlePageChange(pageNumber)}
//       className={currentPage === pageNumber ? "active" : "inactive"}
//     >
//       {pageNumber}
//     </button>
//   )
// )}
