import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    body{
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
    word-wrap: break-word;
    p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {
      margin: 0;
      padding: 0;
      word-break: keep-all;
      word-wrap: break-word;
    }
    input, textarea, select, button, table {
      font-family: "Noto Sans KR", sans-serif;
      outline:none;
    }
    fieldset,
    img {
      border: 0;
    }
    ol,
    ul {
      list-style: none;
    }
    address,
    em {
      font-style: normal;
    }
    a {
      text-decoration: none;
    }
    a:active,
    a:focus,
    a:hover {
      text-decoration: none;
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 8px / 8px;
    border: 0;
    opacity: 1;
  }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
