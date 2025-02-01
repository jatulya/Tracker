import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../globals.css';

export default function LandingPage() {
  const nav = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false); // Replace with actual authentication logic

  useEffect(() => {
    if (isAuthenticated) {
      console.log(`isAuthenticated: ${isAuthenticated}`); 
      nav('/home'); // Redirect to the root layout if authenticated
    }
  }, [isAuthenticated, nav]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-900 p-4">
        <h1 className="text-white text-3xl font-bold">Track At Once</h1>
        <nav className="flex mt-4">
          <ul className="flex">
            <li className="mr-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setIsAuthenticated(true) }}>Signup</button>
            </li>
            <li>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setIsAuthenticated(true) }}>Login</button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="container mx-auto py-8">
        <h3 className="text-3xl font-bold mb-4">All Your Tracking Needs in One Place!</h3>
        <img src="/assets/landingimage.webp" alt="Related Image" className="w-full mb-4" />
        <p>Tired of juggling multiple apps and notes to keep track of everything? Stay organized effortlessly with our all-in-one tracking web application! Whether it’s your <strong>daily routine, to-do list, expenses, reading list, or favorite food spots</strong>, we bring everything together in one convenient place.</p>
        <p>Streamline your life, stay on top of your tasks, and never lose track of what matters. Start organizing smarter today!</p>
      </section>
      <footer className="bg-gray-900 p-4 text-center">
        <p className="text-white">Created by <a href="#" className="text-white hover:underline">Your Name</a> | Contact Us</p>
      </footer>
    </div>
  );
}