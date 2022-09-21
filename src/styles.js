import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
  html{
    height: 100%
  }
  #root{
    display: flex;
  }
`;
export { Global };
