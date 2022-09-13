import styled from "styled-components";

export const MainButton = styled.button`
  
  padding: 0.4rem 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid var(--danger-color);
  background-color: transparent;
  color: var(--dark-color);
  font-weight: bold;

  transition: all 0.3s;
  &:hover {
    background-color: var(--danger-color);
    border: 1px solid var(--dark-color);
  }
  &:active {
    transform: scale(1.1);
  }
`;
