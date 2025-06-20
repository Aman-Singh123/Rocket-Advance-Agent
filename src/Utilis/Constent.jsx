export const rootName = "/";

export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function formatDate(inputDate) {
  var dateParts = inputDate.split("-");
  var year = dateParts[0];
  var m = dateParts[1];
  var day = dateParts[2];

  var monthName = month[parseInt(m) - 1];

  var formattedDate = monthName + " " + day + ", " + year;
  return formattedDate;
}

export const getDate = (date, brackets = true) => {
  const str = `${
    month[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  if (brackets) return `(${str})`;
  return str;
};

export const cardResponse = (deatil, openDeals, closedDeals) => {
  const dataClone = [...deatil];
  const totalTime = new Date(closedDeals.timestamp);
  const openTime = new Date(openDeals.timestamp);
  dataClone[0].DealsValue = `${openDeals.count ?? openDeals.amount}`;
  dataClone[0].dateValue = getDate(openTime);
  dataClone[1].DealsValue = `${closedDeals.count ?? closedDeals.amount}`;
  dataClone[1].dateValue = getDate(totalTime);
  return dataClone;
};

export const myDealsColumns = [
  {
    title: "Agreement Number",
    dataIndex: "unique_deal_number1",
    key: "unique_deal_number1",
    fixed: "left",
  },
  {
    title: "Property Address",
    dataIndex: "Property_Street_Address",
    key: "Property_Street_Address",
  },
  {
    title: "Closing Date",
    dataIndex: "Closing_Date",
    key: "Closing_Date",
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
    key: "Due_Date",
  },
  {
    title: "Status",
    dataIndex: "Stage",
    key: "Stage",
  },
  {
    title: "Commission Advanced",
    dataIndex: "Rocket_Advance_Net_Advance",
    key: "Rocket_Advance_Net_Advance",
  },
  {
    title: "Commission Owed",
    dataIndex: "Rocket_Advance_Contribution",
    key: "Rocket_Advance_Contribution",
  },
  {
    title: "Request Amendment",
    dataIndex: "requestAmendment",
    key: "requestAmendment",
  },
];

export const myDealsFilterOptions = [
  { value: "all", label: "All" },
  {
    value: "closed",
    label: "Closed Deals",
  },
  {
    value: "open",
    label: "Open Deals",
  },
];

export const classes = {
  "Awaiting to Upload": "yellowText",
  Rejected: "redText",
  Approved: "seaGreenText",
  "Pending Approval": "greenText",
  "Under Review": "yellowText",
  "New Deal": "skyBlueText",
  "More Information Needed":"yellowText",
  // "New Deal": "seaGreenText",
  Underwriting: "orangeText",
  "Closed Won": "greenText",
  Funded: "greenText",
  "Deal Fully Closed": "purpleText",
  Denied: "redText",
  "Closed Lost": "redText",

};

export const renameValue = {
  "New Deal": "New",
  "More Information Needed": "Information Required",
  Underwriting: "Under Review",
  Approved: "Approved",
  "Closed Won": "Funded",
  Funded: "Funded",
  "Deal Fully Closed": "Completed",
  Denied: "Denied",
  "Closed Lost": "Denied",
};

export const stateClass = (value) => classes[value] || "grayText";
export const renameStatus = (val) => renameValue[val] || val;
export const disabledUpload = ["Pending Approval", "Approved"];

export const docColumns = [
  {
    title: "Document Name",
    dataIndex: "Supporting_Doc_Type",
    key: "Supporting_Doc_Type",
    fixed: "left",
  },
  {
    title: "For",
    dataIndex: "Deal_Name",
    key: "Deal_Name",
  },
  {
    title: "Status",
    dataIndex: "stage",
    key: "stage",
  },
  {
    title: "Upload",
    dataIndex: "upload",
    key: "upload",
  },
];

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
