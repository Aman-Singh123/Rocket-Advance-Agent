import React, { useEffect, useState } from "react";
import "../DealsCard/DealsCard.scss";
import DealsCard from "../DealsCard/DealsCard";
import TotalCommision from "../../../Asset/Icons/TotalCommision.svg";
import TotalCommisionBlue from "../../../Asset/Icons/TotalCommisionBlue.svg";
import makeRequest from "../../../Api/makeRequest";
import { cardResponse } from "../../../Utilis/Constent";
import { useNavigate } from "react-router-dom";
import useCurrentWidth from "../../../CustomHooks/useCurrentWidth/useCurrentWidth";

export default function AdvanceCard() {
  const navigate = useNavigate();
   const width = useCurrentWidth();
  const [deatil, setDetails] = useState([
    {
      icon: TotalCommision,
      advanceText: "Total commission advanced",
      DealsValue: "-",
      dateValue: "(-) ",
      dots: true,
    },
    {
      icon: TotalCommisionBlue,
      advanceText: "Open commission advances",
      DealsValue: "-",
      dateValue: "(-) ",
      dots: true,
    },
  ]);

  const fetchCardDeatil = async () => {
    const { data } = await makeRequest(
      "/agent/commisions",
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    const { open_commision_advanced, total_commision_advanced } = data;
    setDetails(
      cardResponse(deatil, total_commision_advanced, open_commision_advanced)
    );
  };

  useEffect(() => {
    fetchCardDeatil();
  }, []);

  return (
    <div className={width < 768 ? "dealsContainer" : "advanceCard"}>
      {deatil?.map((ele, index) => (
        <DealsCard
          key={index}
          cardImgLeft={ele.icon}
          DealsValue={ele.DealsValue}
          dateValue={ele.dateValue}
          advanceText={ele.advanceText}
          fontLg
          show
        />
      ))}
    </div>
  );
}
