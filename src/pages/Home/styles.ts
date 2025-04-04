import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 14rem;

  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  margin: 4.5rem 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > input {
    background-color: ${(props) => props.theme["blue-900"]};
    color: ${(props) => props.theme["gray-300"]};
    border: 1px solid ${(props) => props.theme["blue-500"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;

export const IssuesAside = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PublicacoesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Publicacao = styled.div`
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
`
