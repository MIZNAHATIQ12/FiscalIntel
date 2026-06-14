import { useEffect, useState } from 'react'
import Dashboard from './Dashboard.jsx'
import Transactions from './Transactions.jsx'
import GmailIntegration from './GmailIntegration.jsx'
import AIAdvisor from './AIAdvisor.jsx'
import BudgetManagement from './BudgetManagement.jsx'

export default function App() {
  const [route, setRoute] = useState(() => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : 'dashboard'))

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || 'dashboard')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === 'transactions') return <Transactions />
  if (route === 'gmail') return <GmailIntegration />
  if (route === 'advisor' || route === 'insights') return <AIAdvisor />
  if (route === 'budgets') return <BudgetManagement />
  return <Dashboard />
}
