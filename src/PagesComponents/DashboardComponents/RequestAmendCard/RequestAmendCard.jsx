import React from "react";
import ButtonCustom from "../../../Components/ButtonCustom/ButtonCustom";
import "./RequestAmendCard.scss";
export default function RequestAmendCard() {
  return (
    <div className="whiteCard requestAmendCard">
      <h1>Request Amendment</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        ante turpis. In non enim at erat mollis condimentum eu vel diam.
      </p>
      <ButtonCustom label="Request Now" customHeight />
    </div>
  );
}
