import styled from "styled-components";

export const MapStyles = styled.div`
  
  font-size: 13px;

  iframe {
    width: 100%;
    height: 400px;
    webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border: 0;
    allowfullscreen=true;
  }

  p {
    margin: 0;

    a {
      color: #fff;
      font-weight: 700;
      text-decoration: none;

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }

    span {
      color: var(--primary);
    }
  }
`;
