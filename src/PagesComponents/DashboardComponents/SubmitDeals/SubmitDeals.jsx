import React from "react";
import "./SubmitDeals.scss";
import InputCustom from "../../../Components/InputCustom/InputCustom";
import { Col, Row } from "antd";
import ButtonCustom from "../../../Components/ButtonCustom/ButtonCustom";

export default function SubmitDeals({ children }) {
  return (
    <div className="submitDeals whiteCard">
      <h1 className="heading">Submit a New Deal</h1>
      <div className="submitDeals_form">
        {children}
        {/* <InputCustom
          label={"Property Address *"}
          placeholder={"Street Address"}
        />
        <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <InputCustom placeholder={"City"} />
          </Col>
          <Col xs={24} xl={12}>
            <InputCustom placeholder={"Province"} />
          </Col>
        </Row>
        <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <InputCustom placeholder={"Postal Code"} />
          </Col>
          <Col xs={24} xl={12}>
            <InputCustom placeholder={"Country"} />
          </Col>
        </Row>
        <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <InputCustom
              label={"Total Commission (without HST) *"}
              placeholder={"$"}
            />
          </Col>
          <Col xs={24} xl={12}>
            <InputCustom
              label={"Total Requested Commission Advance *"}
              placeholder={"$"}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
          <Col xs={24}>
            <InputCustom
              label={"Total Requested Commission Advance %"}
              placeholder={"$"}
            />
          </Col>
        </Row>
        <div className="buttonOuter">
          <ButtonCustom label="Submit" customHeight />
        </div> */}
      </div>
    </div>
  );
}
