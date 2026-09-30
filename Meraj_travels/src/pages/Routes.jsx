import RouteCard from "../components/RouteCard";

function RoutesPage() {
  return (
    <main className="routes-page">

      <h1>Available Bus Routes</h1>

      <p className="page-description">
        Choose your destination and book your journey with
        Meraj Travels.
      </p>

      <div className="routes-grid">

        <RouteCard
          from="Bengaluru"
          to="Mysuru"
          bus="MT-101"
          time="7:30 AM"
          fare="250"
          seats="30"
        />

        <RouteCard
          from="Bengaluru"
          to="Hyderabad"
          bus="MT-202"
          time="8:00 PM"
          fare="900"
          seats="35"
        />

        <RouteCard
          from="Bengaluru"
          to="Chennai"
          bus="MT-303"
          time="9:00 PM"
          fare="750"
          seats="40"
        />

        <RouteCard
          from="Mysuru"
          to="Bengaluru"
          bus="MT-104"
          time="6:30 PM"
          fare="250"
          seats="28"
        />

        <RouteCard
          from="Bengaluru"
          to="Mangaluru"
          bus="MT-404"
          time="10:00 PM"
          fare="650"
          seats="32"
        />

        <RouteCard
          from="Bengaluru"
          to="Goa"
          bus="MT-505"
          time="7:00 PM"
          fare="850"
          seats="36"
        />

      </div>

    </main>
  );
}

export default RoutesPage;