import React from "react";
import { Button, Col, Row, Upload } from "antd";
import { UploadIcon } from "../../StoreImages/StoreImage";

export default function NewDealsUploads() {
  return (
    <div className="newDealsformUpload">
      <Row style={{ marginTop: 14 }} gutter={[8]}>
        <Col xs={24}>
          <div className="uploadCutom">
            <label>Copy of the Purchase and Sale Agreement *</label>
            <Upload>
              <Button>
                Choose File <UploadIcon />
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 14 }} gutter={[8]}>
        <Col xs={24}>
          <div className="uploadCutom">
            <label>Copy of Updated Trade Record Sheet *</label>
            <Upload>
              <Button>
                Choose File <UploadIcon />
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 14 }} gutter={[8]}>
        <Col xs={24}>
          <div className="uploadCutom">
            <label>Copy of MLS Listing *</label>
            <Upload>
              <Button>
                Choose File <UploadIcon />
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 14 }} gutter={[8]}>
        <Col xs={24}>
          <div className="uploadCutom">
            <label>Proof of Deposit Document *</label>
            <Upload>
              <Button>
                Choose File <UploadIcon />
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>
    </div>
  );
}
