import React from "react";
import { rastlogo } from "../helpers/navbar/rastmobilelogo";
import {
  youtube,
  instegram,
  behance,
  linkedin,
} from "../helpers/navbar/right_icons";
import center_data from "../helpers/navbar/navbar_center_data.json";
import { Link } from "react-router-dom";


//! Navbar'ı sol orta ve sağ olarak üçe böldüm. Uygulamamıza Third Party library olan "react-router-dom" yükledikten sonra Link tagini kullanarak "to" yolu ile pagelerimize yönlendiriyoruz.


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">{rastlogo}</Link>
      </div>

      <div className="center">
        {center_data?.map((data) => (
          <Link className="links1" key={data?.id} to={data.path}>
            {data?.name}
          </Link>
        ))}
          
      </div>

      <div className="right">
       {/* //!Şimdilik görsel olarak ekledik elbette yine yönlendirme yapabiliriz */}
        <div>{youtube}</div>  
        <div>{instegram}</div>
        <div>{behance}</div>
        <div>{linkedin}</div>
      </div>
    </div>
  );
};

export default Navbar;
