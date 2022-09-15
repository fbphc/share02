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

// home page
export const MapImg = styled.img`
  @media (max-width: 1100px) {
    margin-top: 10%;
    margin-bottom: 15%
  }
  @media (max-width: 700px) {
    margin-top: 30%;
    margin-bottom: 30%
  }
`;

// about us
export const ImgAbout = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover
`;

export const ImgChargers = styled.img`
  width: 100%;
  @media (min-width: 900px) {
    width: 70%
  }
`;

// export const MessageImg = styled.div`
//   width: 400px;
//   height: 400px;
//   border-radius: 50%;
// `