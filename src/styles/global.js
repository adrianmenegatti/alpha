import { createGlobalStyle } from "styled-components";
import pxlToVw from "../helpers/pxlsToVw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${pxlToVw(24)};

      @media (min-width: 768px) {
        font-size: ${pxlToVw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${pxlToVw(16)};
      }
    }
`;

export default Global;