import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  border: 1px solid red;
  text-align: left;
  img {
    width: 100%;
    height: 160px;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5em;
  }
`;

export default function country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}
