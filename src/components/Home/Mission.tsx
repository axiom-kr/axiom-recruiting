import img2 from "../../assets/img/home_img2.png";
import Parallax from "../Parallax";

const Mission = () => {
  return (
    <div id="mission">
      <div className="mission__leftbox">
        <h2 className="mission__subtitle">Inspiring Possibilities,<br/>Settle for beyond</h2>
        <div className="mission__apply_button">
          Let's work together →
        </div>
        <div className="mission__hline"/>
        <p className="mission__desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        </p>
      </div>
      <Parallax speed={1} className="self-end overflow-hidden">
        <img className="mission__img" src={img2}/>
      </Parallax>
      
    </div>
  );
}

export default Mission;