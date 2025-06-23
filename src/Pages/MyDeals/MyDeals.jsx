import React, { useEffect, useState } from "react";
import "./MyDeals.scss";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { Pagination, Select, Table } from "antd";
import FilterIcon from "../../Asset/Icons/FilterIcon.svg";
import makeRequest from "../../Api/makeRequest";
import {
  formatDate,
  getDate,
  myDealsColumns,
  myDealsFilterOptions,
  numberWithCommas,
  renameStatus,
  stateClass,
} from "../../Utilis/Constent";
import { useNavigate } from "react-router";

export default function MyDeals() {
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(4)
  const [allDealsData, setAllDealsData] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  const navigate = useNavigate();
  // const fetchDealDetail = async () => {
  
  //   const { data, total } = await makeRequest(
  //     `/agent/deals`,
  //     "get",
  //     undefined,
  //     "",
  //     navigate
  //   );
  //   if (!Object.keys(data || []).length) return;
  //   setTotal(total);

  //   const modifyResponse = data.map((item) => ({
  //     ...item,
  //     propertyAddr: (
  //       <span style={{ maxWidth: 152, display: "block" }}>
  //         {item.Property_Street_Address}
  //       </span>
  //     ),
  //     requestAmendment: (
  //       <ButtonCustom
  //         customClass={`bgTrans ${!item.Request_Amendment_Form ? "disabled" : ""}`}
  //         label={"Request Amendment"}
  //         onClick={() => {
  //           if (item.Request_Amendment_Form) {
  //             window.open(
  //               item.Request_Amendment_Form,
  //               "_blank",
  //               "width=750, height=600"
  //             );
  //           }
  //         }}
  //         disabled={!item.Request_Amendment_Form}
  //       />
  //     ),
  //     Rocket_Advance_Contribution: `$${item.Rocket_Advance_Contribution
  //       ? numberWithCommas(item.Rocket_Advance_Contribution.toFixed(2))
  //       : 0}`,
  //     Rocket_Advance_Net_Advance: `$${item.Rocket_Advance_Net_Advance
  //       ? numberWithCommas(item.Rocket_Advance_Net_Advance.toFixed(2))
  //       : 0}`,
  //     Stage: (
  //       <span className={`${stateClass(item?.Stage)} greyText textDecoration spaceNowrap`}>
  //         {renameStatus(item?.Stage)}
  //       </span>
  //     ),
  //     Closing_Date: item.Closing_Date && formatDate(item.Closing_Date, false),
  //     Due_Date: item.Due_Date && formatDate(item.Due_Date, false),
  //   }));

  //   setAllDealsData(modifyResponse);   // store full data
  //   setDataSource(modifyResponse);     // default view
  // };
  
  // useEffect(() => {
  //   fetchDealDetail();
  // }, [page]);

  const fetchDealDetail = async () => {
    const { data, total } = await makeRequest(
      `/agent/deals`,
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;

    setTotal(total);

    // Extract unique stage names for filter
    const stageList = Array.from(
      new Set(data.map((item) => item.Stage?.toLowerCase()))
    ).filter(Boolean);

    const options = [
      { value: "all", label: "All" },
      ...stageList.map((stage) => ({
        value: stage,
        label: renameStatus(stage),
      })),
    ];
    setFilterOptions(options);

    const modifyResponse = data.map((item) => ({
      ...item,
      propertyAddr: (
        <span style={{ maxWidth: 152, display: "block" }}>
          {item.Property_Street_Address}
        </span>
      ),
      requestAmendment: (
        <ButtonCustom
          customClass={`bgTrans ${!item.Request_Amendment_Form ? "disabled" : ""
            }`}
          label={"Request Amendment"}
          onClick={() => {
            if (item.Request_Amendment_Form) {
              window.open(
                item.Request_Amendment_Form,
                "_blank",
                "width=750, height=600"
              );
            }
          }}
          disabled={!item.Request_Amendment_Form}
        />
      ),
      Rocket_Advance_Contribution: `$${item.Rocket_Advance_Contribution
        ? numberWithCommas(item.Rocket_Advance_Contribution.toFixed(2))
        : 0}`,
      Rocket_Advance_Net_Advance: `$${item.Rocket_Advance_Net_Advance
        ? numberWithCommas(item.Rocket_Advance_Net_Advance.toFixed(2))
        : 0}`,
      Stage: (
        <span
          className={`${stateClass(item?.Stage)} greyText textDecoration spaceNowrap`}
        >
          {renameStatus(item?.Stage)}
        </span>
      ),
      Closing_Date: item.Closing_Date && formatDate(item.Closing_Date, false),
      Due_Date: item.Due_Date && formatDate(item.Due_Date, false),
    }));

    setAllDealsData(modifyResponse);
    setDataSource(modifyResponse);
  };

  useEffect(() => {
    fetchDealDetail();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setDataSource(allDealsData);
    } else {
      const filtered = allDealsData.filter((item) =>
        item.Stage?.props?.children?.toLowerCase()?.includes(filter)
      );
      setDataSource(filtered);
    }
  }, [filter]);


  return (
    <>
      <div className="allDeals">
        <div className="myDeals_btn">
          <div className="filterSection">
            <button>
              <img src={FilterIcon} alt="filter" width={19} height={22} />
            </button>
            <button>Filter By</button>
            <Select
              className="selectBorderedCustom"
              placeholder="All"
              onChange={(value) => {
                setPage(1);
                setFilter(value);
              }}
              options={filterOptions}
              value={filter}
            />

          </div>
          <ButtonCustom

            customClass={"btnFilled"}
            label={"Submit a New Deal"}
            onClick={() => navigate("/new-deals")}
          />
        </div>
        <div className="allDeals_wrapper">
          <div className="allDeals_wrapper_table desktop-only">
            <Table
              className="commonTable"
              dataSource={dataSource}
              columns={myDealsColumns}
              pagination={false}
            />
            <Pagination
              total={total}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              current={page}
              onChange={setPage}
              simple
              showSizeChanger={false}
              defaultPageSize={10}
              defaultCurrent={1}
            />
          </div>
        </div>
      </div>

      {/* Mobile Accordion View */}
      <div className="mobile-deals mobile-only">
        {dataSource?.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="deal-card">
            <div
              className="deal-header"
              style={{
                backgroundColor: item.open ? "#CA2543" : "#fff",
                color: item.open ? "#fff" : "#000",
              }}
              onClick={() =>
                setDataSource((prev) =>
                  prev.map((deal, i) =>
                    i === index ? { ...deal, open: !deal.open } : { ...deal, open: false }
                  )
                )
              }
            >

              {!item.open ? (
                <div className="deal-collapsed">
                  <div className="number">{item.unique_deal_number1}</div>
                  <div className="flex">
                    <div className={`status-badge textDecoration  ${String(item.Stage).toLowerCase().replace(/\s/g, "")}`}>
                      {renameStatus(item.Stage)}
                    </div>
                    <div className="arrow ms-2">▼</div>
                  </div>
                </div>
              ) : (
                <div className='deal-collapsed' >
                  <div className="label">Agreement Number</div>
                  <div className="flex">
                    <div className="number">{item.unique_deal_number1}</div>
                    <div className="arrow ms-2">▲</div>
                  </div>
                </div>
              )}
            </div>

            {item.open && (
              <div className="deal-body">
                <div className="field">
                  <div className="field-label">Property Address</div>
                  <div className="field-value">{item?.Property_Street_Address}</div>
                </div>
                <hr />

                <div className="field">
                  <div className="field-label">Status</div>
                  <div className={`status-badge textDecoration  ${String(item.Stage).toLowerCase().replace(/\s/g, "")}`}>
                    {renameStatus(item.Stage)}
                  </div>
                </div>
                <hr />
                <div className="flex-pair">
                  <div className="field">
                    <div className="field-label">Closing Date</div>
                    <div className="field-value">{item.Closing_Date}</div>
                  </div>
                  <div className="field">
                    <div className="field-label">Due Date</div>
                    <div className="field-value">{item.Due_Date}</div>
                  </div>
                </div>
                <hr />

                <div className="flex-pair">
                  <div className="field">
                    <div className="field-label">Commission Advanced</div>
                    <div className="field-value">{item.Rocket_Advance_Contribution}</div>
                  </div>
                  <div className="field">
                    <div className="field-label">Commission Due</div>
                    <div className="field-value">{item.Rocket_Advance_Net_Advance}</div>
                  </div>
                </div>
                <hr />
                <div>
                  <button
                    className={`requestAmendBtn ${!item.Request_Amendment_Form ? "disabled" : ""}`}
                    onClick={() => {
                      if (item.Request_Amendment_Form) {
                        window.open(
                          item.Request_Amendment_Form,
                          "_blank",
                          "width=750, height=600"
                        );
                      }
                    }}
                    disabled={!item.Request_Amendment_Form}
                  >
                    Request Amendment
                  </button>
                </div>

              </div>

            )}
          </div>
        ))}

        {/* Load More Button */}
        {visibleCount < dataSource?.length && (
          <div className="load-more-container">
            <p
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 4)}
            >
              Load More...
            </p>
          </div>
        )}
      </div>




    </>
  );
}
