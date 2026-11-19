import { useState, useEffect } from 'react';

interface Trip {
  id: string;
  author: string;
  direction: string;
  location: { type: string; address?: string };
  departureAt: string;
  seats: number;
  status: string;
}

export default function BadTripList() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTrips();
  }, []);

  async function fetchTrips() {
    setLoading(true);
    setError(null);
    const res = await fetch('/api/trips?page=' + page);
    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
      return;
    }
    setTrips(data);
  }

  return (
    <div>
      <h2>Trips</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {trips.map((t) => (
          <li key={t.id}>
            <strong>{t.author}</strong> → {t.direction}
            <br />
            {t.location.address}
            <br />
            {t.departureAt} — {t.seats} seats
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
