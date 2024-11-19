'use client'

import { useEffect, useState } from 'react';

const HomePage = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const res = await fetch('/api/rankings');
        if (!res.ok) {
          throw new Error('Failed to fetch rankings');
        }
        const data = await res.json();
        setRankings(data.rankings || []);
      } catch (error) {
        console.error(`Error fetching rankings: ${error}`);
        setError('Failed to fetch rankings');
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  
  return (
    <div>
      <h1>Tennis Player Rankings</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {rankings.map((ranking, index) => (
          <div key={index}>
            {/* Displaying the ATP/WTA title */}
            <h2>{ranking.name} ({ranking.year})</h2>
            
            {/* Now map over the competitor_rankings array */}
            <ul>
              {ranking.competitor_rankings.map((competitor, idx) => (
                <li key={idx}>
                  {/* Display each player's ranking info */}
                  <p>Rank: {competitor.rank}</p>
                  <p>Name: {competitor.competitor.name}</p>
                  <p>Country: {competitor.competitor.country}</p>
                  <p>Points: {competitor.points}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
