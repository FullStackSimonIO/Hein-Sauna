import { FaStar, FaCheckCircle, FaQuestionCircle, FaLightbulb } from 'react-icons/fa'

export const IconMap: Record<string, React.FC<{ className?: string }>> = {
  star: FaStar,
  check: FaCheckCircle,
  question: FaQuestionCircle,
  lightbulb: FaLightbulb,
}
