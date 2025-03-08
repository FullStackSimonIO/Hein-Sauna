'use client'

import './styles.scss'

import { TrendingUp } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const chartData = [
  { month: 'Januar', desktop: 186 },
  { month: 'Februar', desktop: 305 },
  { month: 'März', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'Mai', desktop: 209 },
  { month: 'Juni', desktop: 214 },
  { month: 'Juli', desktop: 110 },
  { month: 'August', desktop: 173 },
  { month: 'September', desktop: 223 },
  { month: 'Oktober', desktop: 200 },
  { month: 'November', desktop: 180 },
  { month: 'Dezember', desktop: 70 },
]

// Define chart color
const chartColor = 'rgba(0, 90, 150, 0.7)' // Adjust as needed

export default function VisitorChart() {
  return (
    <Card className="visitor-chart">
      <CardHeader>
        <CardTitle className="chart-header">Monatliche Besucher</CardTitle>
        <CardDescription className="chart-description">
          Anzahl der Besucher auf der Website in den letzten 12 Monaten
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Responsive container for proper chart sizing */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid
              className="recharts-cartesian-grid"
              strokeDasharray="3 3"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Shorten month names
            />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke={chartColor}
              fill={chartColor}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground">January - June 2024</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
