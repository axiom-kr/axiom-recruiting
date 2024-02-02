import { ReactNode } from "react";
import Parallax from "./Parallax";

const Card = ({imgSrc, children}: {imgSrc: string, children: ReactNode}) => {

  return (
    <Parallax speed={-3} className="self-end overflow-hidden">
      <img src={imgSrc}/>
      {children}
    </Parallax>
  );
}

export default Card;