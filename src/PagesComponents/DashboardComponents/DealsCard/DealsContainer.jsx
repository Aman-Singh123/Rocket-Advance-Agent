import React, { useEffect, useState } from "react";
import DealsCard from "./DealsCard";
import "./DealsCard.scss";
import OpenDealsIcon from "../../../Asset/Icons/OpenDealsIcon.svg";
import CloseDealsIcon from "../../../Asset/Icons/CloseDeals.svg";
import makeRequest from "../../../Api/makeRequest";
import { cardResponse } from "../../../Utilis/Constent";
import { useNavigate } from "react-router-dom";

export default function DealsContainer() {
  const navigate = useNavigate();
  const [deatil, setDetails] = useState([
    {
      icon: OpenDealsIcon,
      dealsText: "Open Deals",
      DealsValue: "-",
      dateValue: "(-) ",
      dots: true,
    },
    {
      icon: CloseDealsIcon,
      dealsText: "Closed Deals",
      DealsValue: "-",
      dateValue: "(-) ",
      dots: true,
    },
  ]);

  const fetchCardDeatil = async () => {
    const { data } = await makeRequest(
      "/agent/deals-count",
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    const { openDeals, closedDeals } = data;
    cardResponse(deatil, openDeals, closedDeals);
    setDetails(cardResponse(deatil, openDeals, closedDeals));
  };

  useEffect(() => {
    fetchCardDeatil();
  }, []);

  return (
    <div className="dealsContainer">
      {deatil.map((ele, index) => (
        <DealsCard
          key={index}
          cardImgLeft={ele.icon}
          dealsText={ele.dealsText}
          DealsValue={ele.DealsValue}
          dateValue={ele.dateValue}
          dots={ele.dots}
        />
      ))}
    </div>
  );
}
