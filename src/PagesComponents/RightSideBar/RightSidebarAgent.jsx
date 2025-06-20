import React, { useEffect, useState } from "react";
import "./RightSideBar.scss";
import RightSideBar from "./RightSideBar";
import NotificationIcon from "../../Asset/Icons/NotificationIcon.svg";
import makeRequest from "../../Api/makeRequest";
import { useNavigate } from "react-router-dom";

export default function RightSidebarAgent() {
  const [textData, setTextData] = useState([]);
  const navigate = useNavigate();
  const fetchActionDetails = async () => {
    const { data } = await makeRequest(
      "/agent/actions",
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    if (data.actionReviewEmail.count)
      data.actionReviewEmail.message = `${data.actionReviewEmail.message} ${data.actionReviewEmail.propertyAddress}.`;
    const response = Object.values(data).filter((item) => +item.count);
    setTextData(response);
  };

  useEffect(() => {
    fetchActionDetails();
  }, []);
  return textData.length ? (
    <div className="textWithLink">
      <RightSideBar
        heading={"Actions"}
        textData={textData?.map((item) => ({
          text: (
            <p>
              <img src={NotificationIcon} alt="Bell" width={24} height={24} />
              {item.message}
            </p>
          ),
        }))}
      />
    </div>
  ) : (
    <></>
  );
}
