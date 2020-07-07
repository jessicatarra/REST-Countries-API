import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  border: 1px solid red;
  padding: 4em 2em;
`;
function CountryList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryList = useSelector((state) => {
    if ("" !== state.filterByRegion) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });
  console.log("el estado total de mi app es", countryList);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list.length);
      })
      .catch(() => {
        console.log("error");
      });
  }, [dispatch]);

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };
  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };
  return (
    <CountryListStyled>
      <input
        placeholder="Search for a country"
        type="text"
        value={inputValue}
        onChange={filterByName}
      />
      {inputValue && <button onClick={clearInput}>X</button>}
      {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      )}
      {countryList.map(({ name, flag, population, capital, region }) => {
        return (
          <Country
            flag={flag}
            name={name}
            key={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}
export default CountryList;
