import Input from "../components/Input";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import Pagination from "../components/Pagination";

const Home = () => {

  //! Home sayfamızı oluşturduk ve üç ana konteynıra bölüp ayrı ayrı componentlerde oluşturduk

  return (
    <div className="home">
      <div className="search_container">
        <Input />
      </div>
      <div className="table_container">
        <table className="table">
          <TableHead />
          <TableBody />
        </table>
      </div>
      <div className="pagination_container">
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
