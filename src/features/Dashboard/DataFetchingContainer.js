import React from "react";
import Select from "../../common/components/Select";
import DataFetching from "../../common/components/DataFetching";
import { useState } from "react";
 
if (process.env.NODE_ENV === "development") {
  const { Server } = require("miragejs");
  const { getMockData } = require("../../mocks");
  const { sales, subscriptions } = getMockData();
 
  console.log("Mock Data Loaded:", sales.length, subscriptions.length); // log count
 
  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;;
      this.get("/sales/", () => sales);
      this.get("/subscriptions/", () => subscriptions);
    },
  });
}
 
const DataFetchingContainer = () => {
  const [selectedEndPoint, setSelectedEndPoint] = useState("");
 
  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];
 
  const handleSelectChange = (event) => {
    setSelectedEndPoint(event.target.value);
    console.log("Selected value:", event.target.value);
  };
 
  return (
    <>
      <Select
        handleChange={handleSelectChange}
        id="select-chart"
        label="Please,select a chart"
        options={optionsForSelect}
      />
      {selectedEndPoint && selectedEndPoint !== "" && (
        <DataFetching endPoint={selectedEndPoint} />
      )}
    </>
  );
};
export default DataFetchingContainer;
 