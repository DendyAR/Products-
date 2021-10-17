import React from "react";
import Country from "./Country/Country";
const CountryList = (props) => {
  return (
    <div>
      {props.stats.map((country) => (
        <Country stats={country} />
      ))}
    </div>
  );
};
export default CountryList;
