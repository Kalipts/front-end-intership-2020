import { useState, useEffect } from 'react';

export function useRank(bookings) {
  const [ranks, setRanks] = useState({});
  useEffect(() => {}, [bookings]);
  return [ranks, setRanks];
}
