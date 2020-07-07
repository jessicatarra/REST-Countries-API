import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  border: 1px solid red;
  justify-content: center;
  padding: 4em 2em;
`;

export default function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  console.log("el estado total de mi app es", countryList);
  //const [countryList, setCountryList] = useState([]);
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
        //setCountryList(data);
        console.log(list.lenght);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <CountryListStyled>
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
