import React from 'react'
import { trackerPages } from '../../types/constants'

export default function TrackerPages() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Tracker Pages</h2>
      <ul className="list-none mb-0">
        {trackerPages.map((page, index) => (
          <li key={index} className="mb-4">
            <a
              href={`/home${page.href}`}
              className="flex items-center text-lg font-bold hover:text-blue-500"
            >
              {page.icon}
              <span className="ml-2">{page.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}