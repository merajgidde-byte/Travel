import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);

  async function getBookings() {

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", {
        ascending: false
      });

    if (error) {

      console.error(error);

      alert("Failed to retrieve bookings.");

      return;
    }

    setBookings(data);
  }

  return (
    <main className="history-page">

      <h1>Booking History</h1>

      <button
        className="history-button"
        onClick={getBookings}
      >
        View Bookings
      </button>


      {bookings.length === 0 ? (

        <p className="no-bookings">
          No bookings found. Click "View Bookings".
        </p>

      ) : (

        <div className="history-table-wrapper">

          <table className="history-table">

            <thead>

              <tr>
                <th>Passenger</th>
                <th>Mobile</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Bus</th>
                <th>Seats</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>
                    {booking.passenger_name}
                  </td>

                  <td>
                    {booking.mobile}
                  </td>

                  <td>
                    {booking.from_location}
                  </td>

                  <td>
                    {booking.to_location}
                  </td>

                  <td>
                    {booking.travel_date}
                  </td>

                  <td>
                    {booking.bus}
                  </td>

                  <td>
                    {booking.seats}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </main>
  );
}

export default BookingHistory;