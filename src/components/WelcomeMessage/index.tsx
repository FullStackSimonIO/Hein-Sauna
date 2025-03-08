'use client'

import React from 'react'
import './index.scss'
import { useAuth } from '@payloadcms/ui'

const WelcomeMessage: React.FC = () => {
  const { user } = useAuth()
  return (
    <div className="welcome-banner">
      <h2 id="welcome-title">Willkommen, {user?.name}!</h2>
      <p id="welcome-subtitle">Hier findest du deine Website-Statistiken und Einstellungen.</p>
    </div>
  )
}

export default WelcomeMessage
