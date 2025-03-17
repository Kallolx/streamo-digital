import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music Distribution Service | Streamo Digital',
  description: 'Distribute your music to all major platforms while keeping 100% of your rights. Submit your request and verify your artist profile.',
}

export default function MusicDistributionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 