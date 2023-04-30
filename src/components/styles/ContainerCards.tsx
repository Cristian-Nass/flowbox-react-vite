import styled from 'styled-components';

export const ContainerCards = styled('div')`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(300px, auto);
`;

export const ContainerCard = styled('div')`
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
