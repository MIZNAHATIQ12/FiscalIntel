import { useEffect, useState } from 'react'

export default function SideNav() {
  const [route, setRoute] = useState(() => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : 'dashboard'))

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || 'dashboard')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const activeClass = (name) =>
    route === name
      ? 'flex items-center gap-md px-md py-sm rounded-lg text-primary dark:text-primary-fixed font-bold border-r-4 border-primary hover:bg-surface-container-highest/50 transition-colors scale-[0.98]'
      : 'flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors'

  return (
    <aside className="h-screen w-64 hidden lg:flex flex-col sticky left-0 top-0 bg-surface-container-low dark:bg-surface-container-low bg-white/70 backdrop-blur-xl border-r border-outline-variant shadow-sm py-xl px-md z-50">
      <div className="flex items-center gap-md mb-xl px-sm">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined">analytics</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">FiscalIntel</h1>
          <p className="text-xs text-outline font-label-md">Premium Account</p>
        </div>
      </div>
      <nav className="flex-1 space-y-xs overflow-y-auto scroll-hide">
        <a className={activeClass('dashboard')} href="#dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body-md text-body-md">Dashboard</span>
        </a>
        <a className={activeClass('transactions')} href="#transactions">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-body-md text-body-md">Transactions</span>
        </a>
        <a className={activeClass('budgets')} href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="font-body-md text-body-md">Budgets</span>
        </a>
        <a className={activeClass('categories')} href="#">
          <span className="material-symbols-outlined">category</span>
          <span className="font-body-md text-body-md">Categories</span>
        </a>
        <a className={activeClass('savings')} href="#">
          <span className="material-symbols-outlined">savings</span>
          <span className="font-body-md text-body-md">Savings Goals</span>
        </a>
        <a className={activeClass('forecasts')} href="#">
          <span className="material-symbols-outlined">query_stats</span>
          <span className="font-body-md text-body-md">Forecasts</span>
        </a>
        <a className={activeClass('reports')} href="#">
          <span className="material-symbols-outlined">assessment</span>
          <span className="font-body-md text-body-md">Reports</span>
        </a>
        <div className="pt-lg mt-lg border-t border-outline-variant">
          <a className={activeClass('gmail')} href="#gmail">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-body-md text-body-md">Gmail Integration</span>
          </a>
          <a className={activeClass('notifications')} href="#">
            <span className="material-symbols-outlined">notifications</span>
            <span className="font-body-md text-body-md">Notifications</span>
          </a>
          <a className={activeClass('settings')} href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
        </div>
      </nav>

      <div className="mt-auto p-md bg-surface-container-highest/30 rounded-xl">
        <div className="flex items-center gap-sm">
          <img alt="User Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJ6tMPxlbe3ROe113RI7nCRpzAf4VbdZKccyHCRtVVBYMQT7lVduVYfYV4gGsEIXsGrOT0PwrudKtjAeY6mJ5f15oMoY5-TkSt3i96n_9CZ3YwsZluDXWvrYg8kepZ-u7mZfgK8LndrfuXLDHJ_aTIv7dPCtrAxOYDTCO2zKrWWaaJ14QQHfNKjtIdL2bfnONafxExG--gV2pJTQSo5_hsti4d7t-TkSioqd5OJElUYxwVS02gGkdNokRcobW0TC6ioqWZXvWjvZ9" />
          <div className="flex-1 overflow-hidden">
            <p className="font-bold text-sm truncate">Marcus Sterling</p>
            <p className="text-xs text-outline truncate">m.sterling@fiscal.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
