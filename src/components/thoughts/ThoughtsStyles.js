import styled from "styled-components";
import pxlsToVw from "../../helpers/pxlsToVw";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: ${pxlsToVw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${pxlsToVw(320, 320)};
  flex-direction: row;
  padding: ${pxlsToVw(20)};
  margin: ${pxlsToVw(20)};
  border-bottom: 1px solid black;

  @media (min-width: 768px) {
    width: ${pxlsToVw(320, 768)};
  }

  @media (min-width: 1024px) {
    width: ${pxlsToVw(500)};
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${pxlsToVw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;