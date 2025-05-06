import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./features/Dashboard/DataFetchingContainer";

const App = () => {
 
  return <>
    <DataFetchingContainer/>
    <DashboardShell />
  </>;
};

export default App;
