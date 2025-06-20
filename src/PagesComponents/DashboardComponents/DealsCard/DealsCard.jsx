import React from "react";
import "./DealsCard.scss";

export default function DealsCard(
  { cardImgLeft, dealsText, DealsValue, dateValue, advanceText, fontLg, show },
  props
) {
  return (
    <div className="dealsCard whiteCard" {...props}>
      <div className="dealsCard_imgSec">
        <span className="dealsCard_imgSec_left">
          {cardImgLeft && <img src={cardImgLeft} alt="Icon" />}
        </span>
        <span className="dealsCard_imgSec_right">
          {dealsText && <h3>{dealsText}</h3>}
          {advanceText && <h3 style={{ marginBottom: 12 }}>{advanceText}</h3>}
        </span>
      </div>

      <h2 className={fontLg ? "fontLg" : ""}>
        {show ? "$" : ""}
        {DealsValue}
      </h2>
      {/* <div className="dealsCard_date">{`From last month ${dateValue}`} </div> */}
    </div>
  );
}
