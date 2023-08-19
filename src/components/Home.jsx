import { Link } from 'react-router-dom';
import TicketImage from '../images/ticket.png';
import { Title } from '../shared/ui/Title';

const Home = () => {
  return (
    <div className="flex flex-direction-column mt-1">
      <header className="flex flex-align-items-center gap-1-5">
        <Title>Find a Link</Title>
        <Link to="/links">
          <img className="image-logo" src={TicketImage} alt="Ticket" />
        </Link>
      </header>
    </div>
  );
};

export default Home;
