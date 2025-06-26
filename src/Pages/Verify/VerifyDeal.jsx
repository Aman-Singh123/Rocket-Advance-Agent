import React, { useEffect, useState } from "react";
import "./VerifyDeal.scss";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyDeal() {
  const [iframeLink, setIframeLink] = useState("");
  const [iframeHeight, setIframeHeight] = useState("729.60px");
  const navigate = useNavigate();
  const location = useLocation();

  const resizeIframe = (event) => {
    // Adjust iframe height dynamically if needed
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const linkFromQuery = queryParams.get("link");

    if (linkFromQuery) {
      setIframeLink(linkFromQuery);
    } else {
      navigate("/"); // Redirect to homepage if ?link= is missing
    }
  }, [navigate, location.search]);

  return (
    <div className="verifyDeals">
      <div className="newDeals_wrapper">
        {iframeLink && (  
          <iframe
            className="verifyFrame"
            src={iframeLink}
            height={iframeHeight}
            onLoad={resizeIframe}
          />
        )}
      </div>
    </div>
  );
}
