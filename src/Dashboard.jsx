import { useEffect } from 'react'

export default function Dashboard() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.glass-card'))
    const listeners = cards.map((card) => {
      const handleMouseEnter = () => card.classList.add('shadow-md')
      const handleMouseLeave = () => card.classList.remove('shadow-md')

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

    const bars = document.querySelectorAll('.progress-animate')
    bars.forEach((bar) => {
      const targetWidth = bar.style.width || bar.dataset.width || ''
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.transition = 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        bar.style.width = targetWidth
      }, 200)
    })

    return () => {
      listeners.forEach((removeListener) => removeListener())
    }
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <div className="flex min-h-screen">
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
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-primary dark:text-primary-fixed font-bold border-r-4 border-primary hover:bg-surface-container-highest/50 transition-colors scale-[0.98]" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-body-md text-body-md">Dashboard</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="font-body-md text-body-md">Transactions</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              <span className="font-body-md text-body-md">Budgets</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">category</span>
              <span className="font-body-md text-body-md">Categories</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">savings</span>
              <span className="font-body-md text-body-md">Savings Goals</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">query_stats</span>
              <span className="font-body-md text-body-md">Forecasts</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
              <span className="material-symbols-outlined">assessment</span>
              <span className="font-body-md text-body-md">Reports</span>
            </a>
            <div className="pt-lg mt-lg border-t border-outline-variant">
              <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-body-md text-body-md">Gmail Integration</span>
              </a>
              <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
                <span className="material-symbols-outlined">notifications</span>
                <span className="font-body-md text-body-md">Notifications</span>
              </a>
              <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/50 transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="font-body-md text-body-md">Settings</span>
              </a>
            </div>
          </nav>
          <div className="mt-auto p-md bg-surface-container-highest/30 rounded-xl">
            <div className="flex items-center gap-sm">
              <img
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJ6tMPxlbe3ROe113RI7nCRpzAf4VbdZKccyHCRtVVBYMQT7lVduVYfYV4gGsEIXsGrOT0PwrudKtjAeY6mJ5f15oMoY5-TkSt3i96n_9CZ3YwsZluDXWvrYg8kepZ-u7mZfgK8LndrfuXLDHJ_aTIv7dPCtrAxOYDTCO2zKrWWaaJ14QQHfNKjtIdL2bfnONafxExG--gV2pJTQSo5_hsti4d7t-TkSioqd5OJElUYxwVS02gGkdNokRcobW0TC6ioqWZXvWjvZ9"
              />
              <div className="flex-1 overflow-hidden">
                <p className="font-bold text-sm truncate">Marcus Sterling</p>
                <p className="text-xs text-outline truncate">m.sterling@fiscal.com</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0">
          <header className="bg-surface sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-lg py-md lg:px-2xl">
            <div className="flex items-center gap-md flex-1 max-w-xl">
              <h2 className="font-title-lg text-title-lg font-bold text-primary lg:hidden">FiscalIntel</h2>
              <div className="relative w-full max-w-md hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Search analytics or transactions..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-md">
              <button className="hidden lg:flex items-center gap-xs bg-primary text-white px-md py-sm rounded-lg font-label-md text-label-md hover:opacity-90 active:opacity-80 transition-all">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Add Transaction
              </button>
              <div className="flex items-center gap-sm border-l border-outline-variant pl-md ml-sm">
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-all relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-white"></span>
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-all">
                  <span className="material-symbols-outlined">help_outline</span>
                </button>
              </div>
            </div>
          </header>

          <div className="p-lg lg:p-2xl space-y-2xl">
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-md lg:gap-lg">
              <div className="glass-card p-md rounded-xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-sm">
                  <p className="text-outline font-label-md uppercase tracking-wider">Current Balance</p>
                  <span className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined">account_balance</span>
                  </span>
                </div>
                <h3 className="font-numeric-data text-headline-md">$142,560.42</h3>
                <div className="flex items-center gap-xs text-secondary mt-xs font-bold text-xs">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span>+4.2%</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 sparkline-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="glass-card p-md rounded-xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-sm">
                  <p className="text-outline font-label-md uppercase tracking-wider">Monthly Income</p>
                  <span className="p-2 bg-secondary/10 text-secondary rounded-lg">
                    <span className="material-symbols-outlined">payments</span>
                  </span>
                </div>
                <h3 className="font-numeric-data text-headline-md">$12,400.00</h3>
                <div className="flex items-center gap-xs text-secondary mt-xs font-bold text-xs">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  <span>On track</span>
                </div>
              </div>
              <div className="glass-card p-md rounded-xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-sm">
                  <p className="text-outline font-label-md uppercase tracking-wider">Monthly Expenses</p>
                  <span className="p-2 bg-error/10 text-error rounded-lg">
                    <span className="material-symbols-outlined">shopping_bag</span>
                  </span>
                </div>
                <h3 className="font-numeric-data text-headline-md">$4,821.15</h3>
                <div className="flex items-center gap-xs text-error mt-xs font-bold text-xs">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span>12% Increase</span>
                </div>
              </div>
              <div className="glass-card p-md rounded-xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-sm">
                  <p className="text-outline font-label-md uppercase tracking-wider">Total Savings</p>
                  <span className="p-2 bg-tertiary/10 text-tertiary rounded-lg">
                    <span className="material-symbols-outlined">savings</span>
                  </span>
                </div>
                <h3 className="font-numeric-data text-headline-md">$86,200.00</h3>
                <div className="flex items-center gap-xs text-secondary mt-xs font-bold text-xs">
                  <span className="material-symbols-outlined text-[14px]">stars</span>
                  <span>Target reached</span>
                </div>
              </div>
              <div className="glass-card p-md rounded-xl shadow-sm bg-gradient-to-br from-primary to-primary-container text-white border-none group hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-sm">
                  <p className="text-white/70 font-label-md uppercase tracking-wider">Health Score</p>
                  <span className="material-symbols-outlined text-white/50">security</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <h3 className="font-numeric-data text-headline-md">842</h3>
                  <span className="text-white/60 text-xs">/ 1000</span>
                </div>
                <div className="mt-md bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary-container h-full w-[84%]"></div>
                </div>
                <p className="text-[10px] mt-xs text-white/80 font-medium">Excellent - Top 5% of users</p>
              </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
              <div className="xl:col-span-2 glass-card p-lg rounded-xl shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-xl">
                  <div>
                    <h4 className="font-headline-md text-headline-md">Spending Analytics</h4>
                    <p className="text-outline text-body-md">Visualizing your cash flow over the last 30 days</p>
                  </div>
                  <select className="bg-surface-container-low border-none rounded-lg text-sm font-label-md px-md py-sm outline-none focus:ring-1 focus:ring-primary/30">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="flex-1 min-h-[300px] flex items-end justify-between gap-2 px-md">
                  <div className="flex-1 bg-primary/10 rounded-t-lg relative group h-[40%] hover:bg-primary/20 transition-colors">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$1.2k</div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg relative group h-[55%] hover:bg-primary/30 transition-colors"></div>
                  <div className="flex-1 bg-primary/15 rounded-t-lg relative group h-[45%] hover:bg-primary/25 transition-colors"></div>
                  <div className="flex-1 bg-primary/30 rounded-t-lg relative group h-[70%] hover:bg-primary/40 transition-colors"></div>
                  <div className="flex-1 bg-primary/10 rounded-t-lg relative group h-[35%] hover:bg-primary/20 transition-colors"></div>
                  <div className="flex-1 bg-primary/40 rounded-t-lg relative group h-[85%] hover:bg-primary/50 transition-colors"></div>
                  <div className="flex-1 bg-primary/25 rounded-t-lg relative group h-[60%] hover:bg-primary/35 transition-colors"></div>
                  <div className="flex-1 bg-primary/50 rounded-t-lg relative group h-[95%] hover:bg-primary/60 transition-colors"></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg relative group h-[50%] hover:bg-primary/30 transition-colors"></div>
                  <div className="flex-1 bg-primary/35 rounded-t-lg relative group h-[65%] hover:bg-primary/45 transition-colors"></div>
                  <div className="flex-1 bg-primary/15 rounded-t-lg relative group h-[40%] hover:bg-primary/25 transition-colors"></div>
                  <div className="flex-1 bg-primary/60 rounded-t-lg relative group h-full hover:bg-primary/70 transition-colors"></div>
                </div>
                <div className="flex justify-between mt-md px-md text-[10px] text-outline font-label-md">
                  <span>01 OCT</span>
                  <span>07 OCT</span>
                  <span>14 OCT</span>
                  <span>21 OCT</span>
                  <span>28 OCT</span>
                </div>
              </div>

              <div className="glass-card p-lg rounded-xl shadow-sm flex flex-col">
                <h4 className="font-headline-md text-headline-md mb-xl">Budget Overview</h4>
                <div className="relative w-48 h-48 mx-auto mb-xl">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle className="stroke-surface-container-highest" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                    <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="40, 100" strokeDashoffset="-75" strokeLinecap="round" strokeWidth="3"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-numeric-data">72%</span>
                    <span className="text-[10px] text-outline font-label-md uppercase">Utilized</span>
                  </div>
                </div>
                <div className="space-y-md flex-1">
                  <div className="space-y-xs">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Rent & Mortgage</span>
                      <span>$3,200 / $3,200</span>
                    </div>
                    <div className="h-2 bg-surface-container-low rounded-full">
                      <div className="h-full bg-primary rounded-full w-full progress-animate" data-width="100%"></div>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Groceries</span>
                      <span>$642 / $800</span>
                    </div>
                    <div className="h-2 bg-surface-container-low rounded-full">
                      <div className="h-full bg-secondary rounded-full w-[80%] progress-animate" data-width="80%"></div>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Entertainment</span>
                      <span>$420 / $300</span>
                    </div>
                    <div className="h-2 bg-surface-container-low rounded-full">
                      <div className="h-full bg-error rounded-full w-full progress-animate" data-width="100%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
              <div className="xl:col-span-2 glass-card rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-lg flex justify-between items-center border-b border-outline-variant">
                  <h4 className="font-headline-md text-headline-md">Recent Transactions</h4>
                  <button className="text-primary font-label-md hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low/50 text-[10px] uppercase text-outline tracking-wider">
                      <tr>
                        <th className="px-lg py-md font-label-md">Merchant</th>
                        <th className="px-lg py-md font-label-md">Category</th>
                        <th className="px-lg py-md font-label-md">Date</th>
                        <th className="px-lg py-md font-label-md text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      <tr className="hover:bg-surface-container-low/30 transition-colors">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-on-background rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                            <span className="font-bold text-sm">Apple Services</span>
                          </div>
                        </td>
                        <td className="px-lg py-md">
                          <span className="px-sm py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Subscription</span>
                        </td>
                        <td className="px-lg py-md text-xs text-outline">Oct 24, 2023</td>
                        <td className="px-lg py-md text-right font-bold text-sm">-$14.99</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/30 transition-colors">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
                            <span className="font-bold text-sm">Starbucks Coffee</span>
                          </div>
                        </td>
                        <td className="px-lg py-md">
                          <span className="px-sm py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase">Dining</span>
                        </td>
                        <td className="px-lg py-md text-xs text-outline">Oct 23, 2023</td>
                        <td className="px-lg py-md text-right font-bold text-sm">-$8.50</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/30 transition-colors">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>
                            <span className="font-bold text-sm">Whole Foods</span>
                          </div>
                        </td>
                        <td className="px-lg py-md">
                          <span className="px-sm py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase">Groceries</span>
                        </td>
                        <td className="px-lg py-md text-xs text-outline">Oct 22, 2023</td>
                        <td className="px-lg py-md text-right font-bold text-sm">-$124.20</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/30 transition-colors">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface text-xs font-bold">G</div>
                            <span className="font-bold text-sm">Gym Shark Ltd</span>
                          </div>
                        </td>
                        <td className="px-lg py-md">
                          <span className="px-sm py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full uppercase">Health</span>
                        </td>
                        <td className="px-lg py-md text-xs text-outline">Oct 21, 2023</td>
                        <td className="px-lg py-md text-right font-bold text-sm">-$55.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-lg">
                <div className="bg-gradient-to-br from-inverse-surface to-on-background p-lg rounded-xl shadow-lg text-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-secondary-container">auto_awesome</span>
                    <h4 className="font-title-lg text-title-lg">AI Insights</h4>
                  </div>
                  <div className="space-y-md relative z-10">
                    <div className="bg-white/10 p-md rounded-lg border border-white/5 hover:bg-white/15 transition-all">
                      <p className="text-xs text-secondary-container font-bold mb-xs">Saving Opportunity</p>
                      <p className="text-sm">You are spending <span className="font-bold text-error-container">20% more</span> on food delivery than usual. Cooking at home could save you ~$320 this month.</p>
                    </div>
                    <div className="bg-white/10 p-md rounded-lg border border-white/5 hover:bg-white/15 transition-all">
                      <p className="text-xs text-primary-fixed font-bold mb-xs">Investment Tip</p>
                      <p className="text-sm">Your cash balance is high. Moving $15,000 to a High-Yield account would earn you an extra <span className="font-bold text-secondary-fixed">$68.50/mo</span>.</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-lg rounded-xl shadow-sm">
                  <h4 className="font-headline-md text-headline-md mb-lg">Upcoming Expenses</h4>
                  <div className="space-y-md">
                    <div className="flex items-center gap-md">
                      <div className="w-10 h-10 bg-surface-container-high rounded-lg flex flex-col items-center justify-center text-[10px] font-bold">
                        <span className="text-outline uppercase">Nov</span>
                        <span className="text-sm">01</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Rent Payment</p>
                        <p className="text-xs text-outline">Chase Mortgage</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$2,800.00</p>
                        <span className="text-[10px] font-bold text-error uppercase">High Priority</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-md">
                      <div className="w-10 h-10 bg-surface-container-high rounded-lg flex flex-col items-center justify-center text-[10px] font-bold">
                        <span className="text-outline uppercase">Nov</span>
                        <span className="text-sm">05</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Netflix</p>
                        <p className="text-xs text-outline">Monthly Subscription</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$19.99</p>
                        <span className="text-[10px] font-bold text-outline uppercase">Auto-pay</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-md">
                      <div className="w-10 h-10 bg-surface-container-high rounded-lg flex flex-col items-center justify-center text-[10px] font-bold">
                        <span className="text-outline uppercase">Nov</span>
                        <span className="text-sm">08</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Electricity Bill</p>
                        <p className="text-xs text-outline">ConEdison</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$142.15</p>
                        <span className="text-[10px] font-bold text-secondary uppercase">Standard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="h-20 lg:hidden"></div>
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface dark:bg-surface-container bg-white/70 backdrop-blur-xl border-t border-outline-variant shadow-lg lg:hidden rounded-t-xl">
        <a className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-xl px-4 py-1 scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-[10px]">Dashboard</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:bg-surface-container-highest" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-label-md text-[10px]">Transactions</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:bg-surface-container-highest" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="font-label-md text-[10px]">Budget</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:bg-surface-container-highest" href="#">
          <span className="material-symbols-outlined">lightbulb</span>
          <span className="font-label-md text-[10px]">Insights</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:bg-surface-container-highest" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-md text-[10px]">Profile</span>
        </a>
      </nav>
    </div>
  )
}
