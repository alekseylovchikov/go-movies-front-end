import TicketImage from "../images/ticket.png";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a Movie</h2>
        <hr />
        <img className="img-thumbnail" src={TicketImage} alt="Ticket" />
      </div>
    </>
  );
};

export default Home;
