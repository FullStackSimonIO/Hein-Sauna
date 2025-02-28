'use client'

import React from 'react'
import './index.scss'
import { useAuth } from '@payloadcms/ui'

const BeforeDashboard: React.FC = () => {
  const { user } = useAuth()
  return (
    <div className="bg-gradient-to-r from-[#A8D1E7] to-[#dada00] p-6 rounded-lg shadow-lg text-center transform transition-transform duration-200 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800">Willkommen, {user?.name}!</h2>
      <p className="text-gray-600 text-lg mt-2">
        Hier findest du deine Website-Statistiken und Einstellungen.
      </p>
    </div>
  )
}

export default BeforeDashboard
