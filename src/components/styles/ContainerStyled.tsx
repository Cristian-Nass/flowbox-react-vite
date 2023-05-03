import styled from "styled-components";

const handleContainerCards = (styleMode: string) => {
  switch (styleMode) {
    case "grid":
      return `
        display: grid;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: minmax(300px, auto);
      `;

    case "list":
      return ``;

    case "card":
      return `
        display: grid;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: minmax(300px, auto);
      `;

    default:
      return "";
  }
};

const handleContainerCard = (styleMode: string) => {
  switch (styleMode) {
    case "grid":
      return `
        background-color: dodgerblue;
        color: white;
        padding: 1rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-self: center;
      `;

    case "list":
      return `
        display: flex;
        margin: 10px;
        padding: 4px;
        background-color: dodgerblue;
        border-radius: 4px;
      `;

    case "card":
      return `
        background-color: dodgerblue;
        color: white;
        padding: 1rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
      `;

    default:
      return "";
  }
};

const handleContainerImg = (styleMode: string) => {
  switch (styleMode) {
    case "grid":
      return `
        width: 100%;
        display: block;
      `;

    case "list":
      return `
        width: 172px;
        display: block;
        @media screen and (max-width: 600px) {
          display: none;
        }
      `;

    case "card":
      return `
        width: 100%;
        display: block;
      `;

    case "slide":
      return `
        width: 50vw;
        max-width: 1000px;
        display: block;
        @media screen and (max-width: 620px) {
          width: 76vw;
        }
      `;

    default:
      return "";
  }
};

export const ContainerCards = styled("div")`
  ${({ theme }) => handleContainerCards(theme)};
`;

export const ContainerCard = styled("div")`
  ${({ theme }) => handleContainerCard(theme)};
`;

export const ContainerImg = styled("img")`
  ${({ theme }) => handleContainerImg(theme)};
`;
