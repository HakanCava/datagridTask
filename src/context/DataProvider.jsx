import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import tBody from "../helpers/home/table_row_data.json";

//! Context Dosyamızda global statelerimizi tanımlıyoruz

//! 1)  Context Oluşturma
export const DataContext = createContext();

//! 2) Provider: Uygulamamızın genelinde global statelerimize ulaşabilmemiz için provider oluşturuyoruz ve App.js de tüm uygulamamızı sarmalıyoruz.
const DataProvider = ({ children }) => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || tBody
  ); //! Kullanıcı uygulamamızı kullandığında local storagenda data adında bir değer varsa bunu data statemize atamamızı yoksa da tBody deki verileri data statetine atamasını istiyoruz.

  const getData = () => {
    //! Güncellenen local storage verisini data state'inde de güncelliyoruz. Normal şartlarda bu verileri Backend'e swagger dökümanındaki verilere göre ***GET*** işlemi yaparak database den verileri fetch ediyoruz.
    setData(JSON.parse(localStorage.getItem("data")));
  };

  const createData = (newrow) => {
    //!Kullanıcı veri create ettiğinde bunu localstorage da saklıyoruz ve data ya push edip getData ile güncel veriyi data state ekliyoruz. Yine bu işlem normaş şartlardi Restfull API da ***POST*** işlemine benzemektedir. Swagger dökümanında belitilen url bilgisine göre POST isteğinde bulunuruz.
    data?.push(newrow);
    localStorage.setItem("data", JSON.stringify(data));
    getData();
  };

  const itemsPerPage = 5; //! Her sayfada kaçtane veri gözükmesini istiyorsak

  const [currentPage, setCurrentPage] = useState(1); //! Kullanıcının görüntülrdiği sayfa

  const startIndex = (currentPage - 1) * itemsPerPage; //! Pagination da oluşturdumuz index değerlere göre parça parça datadan verileri slice metodu ile alıp paginatedData ya atıyoruz.
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage); //! toplamda kaç sayfamızın oluşacağını belirliyoruz

  const handlePageChange = (pageNumber) => {
    //! handlePage fonksiyonları ile ileri geri butonlara fonksiyonluk kazandırmış oluyoruz.
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [search, setSearch] = useState(""); //! Filtreleme stateni tanımladık

  const values = {
    //! Tüm statelerimizi values objesinde topluyoruz
    data,
    createData,
    getData,
    itemsPerPage,
    currentPage,
    paginatedData,
    totalPages,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    search,
    setSearch,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

// ! 3) Consuming
export const useDataContext = () => useContext(DataContext);  //! Oluşturduğumuz conteksi tüketiyoruz. useContext ten dönen veriyi useDataContext döndürüp diğer sayfalarda tekrar tekrar useContext i fazladan import etmeye gerek kalmamamış oluyoruz...

export default DataProvider;
