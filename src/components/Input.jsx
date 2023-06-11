import React, { useState } from "react";
import { search2, koni, arti } from "../helpers/home/search_icon";
import YeniHesapModel from "./YeniHeapModel";
import { useDataContext } from "../context/DataProvider";

const Input = () => {
  const {setSearch}=useDataContext()  //! globalden setSearch import edip input dan gelen value'yu onChange fonksiyonunda search state'tine atıyoruz.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className="input">
      <div className="input_left">
        <input type="text" placeholder="Search objects..." onChange={(e)=>setSearch(e.target.value)}/>
        <div className="icon">
          <div className="icon_renk">
            <span className="icon_search">{search2}</span>
          </div>
        </div>
        <div className="koni">
          <span className="icon_koni">{koni}</span>
        </div>
      </div>

      <div className="input_right">
        <button className="input_right_btn" onClick={handleShow}> 
        {/* //!Third Party Framework olan Bootstrapi - yarn add react-bootstrap bootstrap komutu ile uygulamımıza ekledikten sonra Bootstrap den modal yapısını kullandık */}
          <div>{arti}</div>
          <div>Yeni Hesap Ekle</div>
        </button>
        <YeniHesapModel show={show} handleClose={handleClose}/>
      </div>
      
    </div>
  );
};

export default Input;
