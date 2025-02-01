import { FaUtensils, FaMoneyBill, FaCalendar, FaBook, FaClipboard } from 'react-icons/fa'
import { TrackerPage } from './interfaces'
import {FoodSpots, ExpenseTracker, Routine, Tbr, Todo} from "../main/pages"

export const trackerPages: TrackerPage[] = [
    {
      name: 'Food Spots',
      icon: <FaUtensils />,
      href: '/food-spots',
      component: <FoodSpots />,
    },
    {
      name: 'Expense',
      icon: <FaMoneyBill />,
      href: '/expense',
      component: <ExpenseTracker />,
    },
    {
      name: 'Daily Habits',
      icon: <FaCalendar />,
      href: '/daily-habits',
      component: <Routine />,
    },
    {
      name: 'To-Be-Read',
      icon: <FaBook />,
      href: '/to-be-read',
      component: <Tbr />,
    },
    {
      name: 'To-Do',
      icon: <FaClipboard />,
      href: '/to-do',
      component: <Todo />,
    },
  ]