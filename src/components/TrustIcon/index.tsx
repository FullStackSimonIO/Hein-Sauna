// components/TrustBadge.tsx
import React from 'react'
import { Star } from 'lucide-react'

/**
 * TrustBadge mit Google- und Trustpilot-Bewertungen.
 */
export const TrustBadge: React.FC = () => {
  // Dummy ratings; ideal wäre Fetch über API
  const googleRating = 4.8
  const trustpilotRating = 4.7

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
      <a
        href="https://www.google.com/maps/place/Your+Business"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 hover:underline"
      >
        <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
        <Star className="w-4 h-4 text-yellow-400" />
        <span className="text-sm font-medium text-gray-700">{googleRating} ( Google)</span>
      </a>

      <a
        href="https://de.trustpilot.com/review/your-business"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 hover:underline"
      >
        {/*<img src="/trustpilot.svg" alt="Trustpilot Logo" className=" h-5" />*/}

        <Star className="w-4 h-4 text-green-500" />
        <span className="text-sm font-medium text-gray-700">{trustpilotRating} (Trustpilot)</span>
      </a>
    </div>
  )
}
