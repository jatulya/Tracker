import React, { useState } from 'react';

interface FoodSpot {
  id: number;
  name: string;
  location: string;
  type: string;
  rating: number;
  visited: boolean;
}

const FoodSpotsTracker: React.FC = () => {
  const [foodSpots, setFoodSpots] = useState<FoodSpot[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState(0);
  const [visited, setVisited] = useState(false);

  const handleAddFoodSpot = () => {
    const newFoodSpot: FoodSpot = {
      id: foodSpots.length + 1,
      name,
      location,
      type,
      rating,
      visited,
    };
    setFoodSpots([...foodSpots, newFoodSpot]);
    setName('');
    setLocation('');
    setType('');
    setRating(0);
    setVisited(false);
  };

  const handleToggleVisited = (id: number) => {
    const updatedFoodSpots = foodSpots.map((foodSpot) => {
      if (foodSpot.id === id) {
        return { ...foodSpot, visited: !foodSpot.visited };
      }
      return foodSpot;
    });
    setFoodSpots(updatedFoodSpots);
  };

  return (
    <div>
      <h1>Food Spots Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Visited</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {foodSpots.map((foodSpot) => (
            <tr key={foodSpot.id}>
              <td>{foodSpot.name}</td>
              <td>{foodSpot.location}</td>
              <td>{foodSpot.type}</td>
              <td>{foodSpot.rating}</td>
              <td>
                <input
                  type="checkbox"
                  checked={foodSpot.visited}
                  onChange={() => handleToggleVisited(foodSpot.id)}
                />
              </td>
              <td>
                <button onClick={() => handleToggleVisited(foodSpot.id)}>
                  {foodSpot.visited ? 'Unvisit' : 'Visit'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="">Select Type</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
            <option value="Food Truck">Food Truck</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          />
        </label>
        <button onClick={handleAddFoodSpot}>Add Food Spot</button>
      </form>
    </div>
  );
};

export default FoodSpotsTracker;