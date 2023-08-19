import { Link } from "react-router-dom";
import TicketImage from "../images/ticket.png";

const Home = () => {
  return (
    <div className="flex flex-direction-column mt-1">
      <header className="flex flex-align-items-center gap-1-5">
        <h1>Find a Movie</h1>
        <Link to="/movies">
          <img className="image-logo" src={TicketImage} alt="Ticket" />
        </Link>
      </header>
    </div>
  );
};

export default Home;
