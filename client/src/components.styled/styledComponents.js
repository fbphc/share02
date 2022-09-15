import styled from "styled-components";
import { Image } from "cloudinary-react";

export const MsgImgDivStyled = styled.div`
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 5px solid var(--dark-color);
    `;


export const MainMsgDivStyled = styled.div`
  width: 90%;
  margin: 1rem auto;
  color: var(--dark-color);
  padding: 1rem 2rem;
  background-color: #114360;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


  

    `

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



// images
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

export const ImageStyled = styled(Image)`
  width: 100%;
  height:100%;
  object-fit: contain;
  border-radius: 50%;
`;


export const ImgStyled = styled(Image)`
  width: 100%;
  height:100%;
  object-fit: contain;
  border-radius: 50%;
`;
