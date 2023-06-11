import { useDataContext } from "../context/DataProvider";

const TableBody = () => {
  const { search, paginatedData,  } = useDataContext();
  //! Arama inputunda tablo body de arama yapıyoruz.
  const searchFilter = paginatedData?.filter(
    (data) =>
      data.link.toLowerCase().includes(search.trim().toLowerCase()) ||   //! search boş bir String olduğu için en başta searchFilter paginatedData daki tüm değerleri alır ve bunu tbody de ekrana basarız. Kullanıcı ne zaman search de değer yazarsa  paginatedData filter dan geçer ve dönen değer searchFilter a atanır ve filter lanan data ekrana basılır
      data.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      data.desc.toLowerCase().includes(search.trim().toLowerCase())
  );
 
  return (
    <tbody className="tbody">
      {searchFilter.map((row) => (
        <tr key={row?.id} className="tbody_tr">
          <td>{row?.link}</td>
          <td>{row?.name}</td>
          <td>{row?.desc}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;


