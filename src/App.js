import Nav from "./components/Navbar";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";
import LatestPost from "./components/Latest.post";

function App() {
  return (
    <div className="App">
      {/* <h2>Relationship App</h2> */}
      <Nav />
      <Banner />
      <Offer />
      <Testimonial />
      <LatestPost />
    </div>
  );
}

export default App;
