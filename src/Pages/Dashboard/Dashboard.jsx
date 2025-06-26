import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import DealsContainer from "../../PagesComponents/DashboardComponents/DealsCard/DealsContainer";
import AdvanceCard from "../../PagesComponents/DashboardComponents/AdvanceCard/AdvanceCard";
import RequestAmendCard from "../../PagesComponents/DashboardComponents/RequestAmendCard/RequestAmendCard";
import RightSidebarAgent from "../../PagesComponents/RightSideBar/RightSidebarAgent";
import SubmitDeals from "../../PagesComponents/DashboardComponents/SubmitDeals/SubmitDeals";
import makeRequest from "../../Api/makeRequest";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { numberWithCommas } from "../../Utilis/Constent";

const Dashboard = () => {
  const [iframeLink, setIframeLink] = useState("");
  const [iframeHeight, setIframeHeight] = useState("729.60px");
  const [offerWidgets, setOfferWidgets] = useState([]);
  const navigate = useNavigate();

  const resizeIframe = (event) => {
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

  const fetchOfferWidgets = async () => {
    const { data } = await makeRequest(
      `/agent/offer-widgets`,
      "get",
      undefined,
      "",
      navigate
    );
    if (data && data.length) {
      setOfferWidgets(data);
    }
  };

  useEffect(() => {
    fetchDealDetail();
    fetchOfferWidgets();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <DealsContainer />
        <AdvanceCard />
      </div>
      <div className="dashboard_botomWrapper">
        <div className="dashboard_center">
          <SubmitDeals>
            <iframe
              className="newDealsFrame1"
              src={iframeLink}
              height={iframeHeight}
              onLoad={resizeIframe}
            />
          </SubmitDeals>
          {/* Render offer widgets */}
        </div>
        <div className="dashboard_right">
          <RightSidebarAgent />
          {offerWidgets.map((widget, index) => (
            <>
              {/* Desktop/Tablet Card */}
              <div className="whiteCard preappoveCard" key={index}>
                <div className="offerDetails">
                  <div className="preappove">You've been pre-approved for</div>
                  <div className="preappoveAmmount">
                    ${numberWithCommas(widget.offerAmount.toFixed(2))}
                  </div>
                  <div className="deal-documents">
                    <h2>The following documents are required for verification </h2>
                    <ul>
                      <li>  Listing Agreement (if listing agent)</li>
                      <li>  Amendment Agreement (If original closing date of transaction is amended)</li>
                      <li>  APS</li>
                      <li> Trade Sheet</li>
                      <li>  Proof of Deposit</li>
                      <li> Broker Commission Agreement</li>
                      <li> Receipts of Installments Received (if pre-con)</li>
                      <li>Invoice for Builder (if pre-con)</li>
                      <li> Production Report</li>
                    </ul>
                  </div>

                  <div className="actionspreappove">
                    <a href={`/verify?link=${encodeURIComponent(widget.verificationLink)}`}>
                      <ButtonCustom customClass="bgTrans" label={"Click to verify"} />
                    </a>
                  </div>
                  <div className="dealno">
                    <b>Deal №:</b> {widget.dealNo}
                  </div>
                </div>
              </div>

              {/* Mobile-only Card */}
              <div className="whiteCard preappoveCardMobile" key={`mobile-${index}`}>
                <div className="mobileDetails">
                  <div className="mobileTopRow">
                    <div className="preappove">You've been pre-approved for</div>
                    <div className="preappoveAmmount">
                      ${numberWithCommas(widget.offerAmount.toFixed(2))}
                    </div>
                  </div>
                  <div className="actionspreappoveMobile">
                    <a href={`/verify?link=${encodeURIComponent(widget.verificationLink)}`}>
                      <ButtonCustom customClass="bgTrans" label={"Click to verify"} />
                    </a>
                  </div>

                </div>
                <div className="deal-documents">
                  <h2>The following documents are required for verification </h2>
                  <ul>
                    <li>  Listing Agreement (if listing agent)</li>
                    <li>  Amendment Agreement (If original closing date of transaction is amended)</li>
                    <li>  APS</li>
                    <li> Trade Sheet</li>
                    <li>  Proof of Deposit</li>
                    <li> Broker Commission Agreement</li>
                    <li> Receipts of Installments Received (if pre-con)</li>
                    <li>Invoice for Builder (if pre-con)</li>
                    <li> Production Report</li>
                  </ul>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
