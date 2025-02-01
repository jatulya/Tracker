// Topbar.tsx
import React from 'react'
import { TopbarProps } from '../../types/interfaces'
export default function Topbar({ name, profilePicture }: TopbarProps) {
  return (
    <div className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-white text-4xl font-bold">Track At Once</h1>
      <div className="flex items-center">
        <span className="text-white text-lg mr-4">Hi, {name}</span>
        <img src={profilePicture} alt="Profile Picture" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  )
}