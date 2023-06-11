import React, { useState } from "react";
import { upper_arrow, down_arrow } from "../helpers/home/search_icon";

const THeadCell = () => {
  const [upDown1, setUpDown1] = useState(true);
  const [upDown2, setUpDown2] = useState(true);

  const handleClick1 = () => {
    setUpDown1(!upDown1);
  };
  const handleClick2 = () => {
    setUpDown2(!upDown2);
  };
  return (
    <>
      <th
        onClick={() => {
          handleClick1();
        }}
      >
        <div>
          <div>Sosyal Medya Linki</div>
          <div>{upDown1 ? upper_arrow : down_arrow}</div>
        </div>
      </th>
      <th
        onClick={() => {
          handleClick2();
        }}
      >
        <div>
          <div>Sosyal Medya Adı</div>
          <div>{upDown2 ? upper_arrow : down_arrow}</div>
        </div>
      </th>
      <th>
        <div>
          <div>Açıklama</div>
        </div>
      </th>
    </>
  );
};

export default THeadCell;


