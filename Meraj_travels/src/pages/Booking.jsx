import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [bus, setBus] = useState("");
  const [seats, setSeats] = useState("");

  async function handleBooking(e) {

    e.preventDefault();

    if (
      !name ||
      !mobile ||
      !from ||
      !to ||
      !date ||
      !bus ||
      !seats
    ) {
      alert("Please fill all the details.");
      return;
    }

    if (from === to) {
      alert("From and To locations cannot be the same.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          passenger_name: name,
          mobile: mobile,
          from_location: from,
          to_location: to,
          travel_date: date,
          bus: bus,
          seats: Number(seats)
        }
      ]);

    if (error) {

      console.error(error);

      alert("Booking failed. Please try again.");

      return;
    }

    alert("🎉 Ticket booked successfully!");

    setName("");
    setMobile("");
    setFrom("");
    setTo("");
    setDate("");
    setBus("");
    setSeats("");
  }

  return (
    <main className="booking-page">

      <h1>Book Your Ticket</h1>

      <form
        className="booking-form"
        onSubmit={handleBooking}
      >

        <label>Passenger Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter passenger name"
        />


        <label>Mobile Number</label>

        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter 10-digit mobile number"
          maxLength="10"
        />


        <label>From</label>

        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >

          <option value="">
            -- Select Starting Point --
          </option>

          <option value="Bengaluru">
            Bengaluru
          </option>

          <option value="Mysuru">
            Mysuru
          </option>

          <option value="Chennai">
            Chennai
          </option>

          <option value="Hyderabad">
            Hyderabad
          </option>

          <option value="Mangaluru">
            Mangaluru
          </option>

          <option value="Goa">
            Goa
          </option>

        </select>


        <label>To</label>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >

          <option value="">
            -- Select Destination --
          </option>

          <option value="Bengaluru">
            Bengaluru
          </option>

          <option value="Mysuru">
            Mysuru
          </option>

          <option value="Chennai">
            Chennai
          </option>

          <option value="Hyderabad">
            Hyderabad
          </option>

          <option value="Mangaluru">
            Mangaluru
          </option>

          <option value="Goa">
            Goa
          </option>

        </select>


        <label>Travel Date</label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />


        <label>Select Bus</label>

        <select
          value={bus}
          onChange={(e) => setBus(e.target.value)}
        >

          <option value="">
            -- Select Bus --
          </option>

          <option value="MT-101">
            MT-101
          </option>

          <option value="MT-202">
            MT-202
          </option>

          <option value="MT-303">
            MT-303
          </option>

          <option value="MT-404">
            MT-404
          </option>

          <option value="MT-505">
            MT-505
          </option>

        </select>


        <label>Number of Seats</label>

        <input
          type="number"
          min="1"
          max="10"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          placeholder="Enter number of seats"
        />


        <button
          type="submit"
          className="book-button"
        >
          🎫 Book Ticket
        </button>

      </form>


      <section className="booking-preview">

        <h2>Booking Details</h2>

        <p>
          Passenger:
          <strong>{name || "-"}</strong>
        </p>

        <p>
          Mobile:
          <strong>{mobile || "-"}</strong>
        </p>

        <p>
          Journey:
          <strong>
            {from && to
              ? `${from} → ${to}`
              : "-"}
          </strong>
        </p>

        <p>
          Date:
          <strong>{date || "-"}</strong>
        </p>

        <p>
          Bus:
          <strong>{bus || "-"}</strong>
        </p>

        <p>
          Seats:
          <strong>{seats || "-"}</strong>
        </p>

      </section>

    </main>
  );
}

export default Booking;