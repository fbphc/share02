import styled from "styled-components";
import { Image } from "cloudinary-react";
import { PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";

export const MsgImgDivStyled = styled.div`
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 5px solid var(--dark-color);
      margin: 0 auto;
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

export const LinkStyled = styled(Link)`
transition: all 0.2s;
color: var(--dark-color);
text-align: center;
display: block;
text-decoration: none;
&:hover{
  color:var(--danger-color);
}
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
  object-fit: cover;
`;

export const ImgChargers = styled.img`
  width: 100%;
  @media (min-width: 900px) {
    width: 70%
  }
`;

export const PagLinkFirstStyled = styled(PaginationLink)`
 padding: 0.4rem 1rem;
 margin: 0 0.4rem;
  border-radius: 0.4rem 0 0 0.4rem;
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

`
export const PagLinkLastStyled = styled(PaginationLink)`
 padding: 0.4rem 1rem;
 margin: 0 0.2rem;
  border-radius: 0 0.4rem 0.4rem 0;
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

`
export const PagLinkStyledNum = styled(PaginationLink)`
padding: 0.4rem 1rem;
 margin: 0 0.4rem;
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

`

export const BurgerLinkStyled = styled.div`
font-size: 1.2rem;
transition: all 0.2s;
display: inline-block;
&:hover{
  color:var(--danger-color);
}
`
// export const MessageImg = styled.div`
//   width: 400px;
//   height: 400px;
//   border-radius: 50%;
// `
export const ImageStyled = styled(Image)`
  width: 100%;
  height:100%;
  object-fit: contain;
  border-radius: 50%;
`;


export const ImgStyled = styled.img`
  width: 100%;
  height:100%;
  object-fit: contain;
  border-radius: 50%;
`;
