import React, { useEffect, useState } from "react";
import "./NewDeals.scss";
// import NewDealsInputs from "../../PagesComponents/NewDealsComponent/NewDealsInputs";
// import NewDealsUploads from "../../PagesComponents/NewDealsComponent/NewDealsUploads";
// import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import makeRequest from "../../Api/makeRequest";
import { useNavigate } from "react-router-dom";

export default function NewDeals() {
  const [iframeLink, setIframeLink] = useState("");
  const [iframeHeight, setIframeHeight] = useState("729.60px");
  const navigate = useNavigate();
  const resizeIframe = (event) => {
    // console.log(event.target.contentWindow.getScreenDetails());
    // setIframeHeight("2770px");
  };
  const fetchDealDetail = async () => {
    const { data } = await makeRequest(
      `/agent/new-deal`,
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    setIframeLink(data?.newDealForm);
  };

  useEffect(() => {
    fetchDealDetail();
  }, []);

  return (
    <div className="newDeals">
      <h1 className="headingText">Submit a New Deal</h1>
      <div className="newDeals_wrapper">
        {/* <p className="newDeals_wrapper_text">Property Information</p> */}
        <iframe
          className="newDealsFrame"
          src={iframeLink}
          height={iframeHeight}
          onLoad={resizeIframe}
        />
        {/* <div className="newDeals_wrapper_inputsCont">
          <NewDealsInputs />
        </div>
        <p className="newDeals_wrapper_text" style={{ marginTop: 32 }}>
          Attachments
        </p>
        <NewDealsUploads />
        <div className="newDeals_btn">
          <ButtonCustom label={"Submit a New Deal"} />
        </div> */}
      </div>
    </div>
  );
}
