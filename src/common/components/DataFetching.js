import React from 'react';
import { useState, useEffect } from "react";
import PropTypes from "prop-types"
 
const DataFetching = ({ endPoint }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Fetching from:", endPoint);
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [endPoint]);
 
  return (
    <>
      <ul>
        {data.map((element) => (
          <li key={element.timestamp}>
            {element.timestamp} - {element.amount}
          </li>
        ))}
      </ul>
    </>
  );
};
 
DataFetching.propTypes = {
    endPoint: PropTypes.string.isRequired
}
 
export default DataFetching;