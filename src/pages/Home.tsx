import Header from "../components/Header";
import Title from "../components/Home/Title";
import Card from "../components/Card";
import Img1 from "../assets/img/home_img1.png"
import Introduction from "../components/Home/Introduction";
import Mission from "../components/Home/Mission";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Title />
      <Card imgSrc={Img1}>
        <Introduction />
        <Mission />
      </Card>
    </div>
  );
};

export default Home;
