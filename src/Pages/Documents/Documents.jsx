import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Upload } from "antd";
import "./Documents.scss";
import { UploadIcon } from "../../StoreImages/StoreImage";
// import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import makeRequest from "../../Api/makeRequest";
import { disabledUpload, docColumns, stateClass } from "../../Utilis/Constent";
import { useNavigate } from "react-router-dom";

export default function Documents() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const fetchDealDetail = async () => {
    const { data } = await makeRequest(`/agent/docs`, "get", undefined, "", navigate);
    if (!Object.keys(data || []).length) return;
    const modifyResponse = data.map((item) => {
      const uploadDisable = disabledUpload.includes(
        item?.Supporting_Doc_Status
      );
      const stageRejected = item?.Supporting_Doc_Status === "Rejected";
      const uploadLink = item?.Submit_Supporting_Doc_Form;
      return {
        ...item,
        upload: (
          <span
            className={`cursorPointer ${
              uploadDisable ? "uploadBtnIconDisable" : "uploadBtnIcon"
            }  `}
            onClick={() =>
              !uploadDisable &&
              uploadLink &&
              window.open(uploadLink, "_blank", "width=750, height=600")
            }
          >
            <div>

            <UploadIcon />
            </div>
            {/* <br /> */}
            {stageRejected ? <div className="reupload">Re-upload</div> : null}
          </span>
        ),
        stage: (
          <span
            className={`${stateClass(
              item?.Supporting_Doc_Status
            )} greyText textDecoration spaceNowrap`}
          >
            {item?.Supporting_Doc_Status}
          </span>
        ),
      };
    });
    setDataSource(modifyResponse);
  };

  useEffect(() => {
    fetchDealDetail();
  }, []);

  return (
    <div className="document">
      <h1 className="headingText">Uploading Your Supporting Documents</h1>
      <div className="document_wrapper">
        <div className="myDeals_wrapper_table">
          {/* <Modal
            title="Upload"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="commonModals"
            footer={false}
            centered
          >
            <div className="uploadCutom modalUpload">
              <label>Upload Documents *</label>
              <Upload>
                <Button>
                  Choose File <UploadIcon />
                </Button>
              </Upload>
            </div>
            <ButtonCustom label={"Upload"} />
          </Modal> */}
          <Table
            className="commonTable"
            dataSource={dataSource}
            columns={docColumns}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
}
