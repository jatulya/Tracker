import React, { useState } from 'react';

interface Expense {
  id: number;
  date: string;
  amount: number;
  category: string;
  description: string;
}

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Other',
  ]);

  const handleAddExpense = () => {
    const newExpense: Expense = {
      id: expenses.length + 1,
      date,
      amount,
      category,
      description,
    };
    setExpenses([...expenses, newExpense]);
    setDate('');
    setAmount(0);
    setCategory('');
    setDescription('');
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => handleDeleteExpense(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>
        <label>
          Category:
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button onClick={handleAddExpense}>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTracker;