import { Link } from "react-router-dom";

function RouteCard(props) {
  return (
    <div className="route-card">

      <div className="bus-icon">
        🚌
      </div>

      <h2>
        {props.from} → {props.to}
      </h2>

      <p>
        <strong>Bus:</strong> {props.bus}
      </p>

      <p>
        <strong>Departure:</strong> {props.time}
      </p>

      <p>
        <strong>Fare:</strong> ₹{props.fare}
      </p>

      <p>
        <strong>Available Seats:</strong> {props.seats}
      </p>

      <Link to="/booking">
        <button>Book Ticket</button>
      </Link>

    </div>
  );
}

export default RouteCard;