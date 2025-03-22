import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Streamo Digital',
  description: 'Explore our comprehensive music services including verification, unlimited artists and labels, projected content, video distribution, faster release, social monetization, 100% copyright royalties, monthly payouts, whitelisting, and maximum revenue.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 