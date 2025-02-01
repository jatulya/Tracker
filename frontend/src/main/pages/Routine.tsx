import React, { useState } from 'react';

interface Routine {
  id: number;
  name: string;
  description: string;
  frequency: string;
  time: string;
  completed: boolean;
}

const RoutineManager: React.FC = () => {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleAddRoutine = () => {
    const newRoutine: Routine = {
      id: routines.length + 1,
      name,
      description,
      frequency,
      time,
      completed,
    };
    setRoutines([...routines, newRoutine]);
    setName('');
    setDescription('');
    setFrequency('');
    setTime('');
    setCompleted(false);
  };

  const handleToggleCompleted = (id: number) => {
    const updatedRoutines = routines.map((routine) => {
      if (routine.id === id) {
        return { ...routine, completed: !routine.completed };
      }
      return routine;
    });
    setRoutines(updatedRoutines);
  };

  return (
    <div>
      <h1>Routine Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Frequency</th>
            <th>Time</th>
            <th>Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {routines.map((routine) => (
            <tr key={routine.id}>
              <td>{routine.name}</td>
              <td>{routine.description}</td>
              <td>{routine.frequency}</td>
              <td>{routine.time}</td>
              <td>
                <input
                  type="checkbox"
                  checked={routine.completed}
                  onChange={() => handleToggleCompleted(routine.id)}
                />
              </td>
              <td>
                <button onClick={() => handleToggleCompleted(routine.id)}>
                  {routine.completed ? 'Uncomplete' : 'Complete'}
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
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Frequency:
          <select value={frequency} onChange={(event) => setFrequency(event.target.value)}>
            <option value="">Select Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
        <button onClick={handleAddRoutine}>Add Routine</button>
      </form>
    </div>
  );
};

export default RoutineManager;
