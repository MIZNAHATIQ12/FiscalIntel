import { useEffect } from 'react'
import SideNav from './SideNav.jsx'

export default function BudgetManagement() {
  useEffect(() => {
    const bars = Array.from(document.querySelectorAll('[data-target]'))
    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute('data-target') || ''
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.transition = 'width 1.2s ease'
        bar.style.width = targetWidth
      }, 100)
    })
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex-1 flex flex-col min-w-0">
          <header className="bg-surface lg:hidden top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-lg py-md">
            <h1 className="font-title-lg text-title-lg font-bold text-primary">FiscalIntel</h1>
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
              <img
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBvcHxQYzEZAXAArUcgzwf0WRHx9Pi8uqrSACUDNFAyErMvTlr_RzDCERitjNN3CN36_qq2USU4Mva-P-OoB-F2_Akkz4CAmkXCQjk2B7AJyHN1YkD4BzFkXhof0iX1k3Xuy5CnrbsqH6eyZ8nv1u6v5BgKJ7ijBekEdBYPXUF1ccFV34NBtGb9XCjX6XJRPENw4vRNAJp_ozEke0WhRHMa5pvViq71q4bNJmg4Bcr5va1Eh1nP5RmFXXcEmcISdJTp80W4dgQdMs_"
              />
            </div>
          </header>

          <div className="p-lg lg:p-2xl space-y-2xl">
            <section className="grid grid-cols-1 md:grid-cols-12 gap-lg items-end">
              <div className="md:col-span-8">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Budget Management</h2>
                <p className="text-on-surface-variant mt-xs">Optimize your capital allocation with real-time variance analysis.</p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end gap-md">
                <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all shadow-sm">
                  Export Report
                </button>
              </div>
            </section>

            <div className="flex flex-col gap-md">
              <div className="bg-error-container/30 border border-error/20 p-md rounded-xl flex flex-col gap-md lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-error">warning</span>
                  <div>
                    <p className="font-label-md text-on-error-container font-bold uppercase tracking-wider">Critical Alert</p>
                    <p className="text-on-surface text-body-md">Your "Dining & Entertainment" budget has exceeded its limit by 12%.</p>
                  </div>
                </div>
                <button className="text-primary font-label-md hover:underline">Reallocate Funds</button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2xl">
              <section className="xl:col-span-1 space-y-lg">
                <div className="glass-panel p-xl rounded-xl border border-outline-variant shadow-sm">
                  <h3 className="font-title-lg text-title-lg text-primary mb-lg">Create New Budget</h3>
                  <form className="space-y-lg">
                    <div className="space-y-xs">
                      <label className="font-label-md text-on-surface-variant">Category Name</label>
                      <input
                        className="w-full bg-transparent border border-outline-variant rounded-lg px-md py-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="e.g. Cloud Infrastructure"
                        type="text"
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-md text-on-surface-variant">Monthly Limit ($)</label>
                      <div className="relative">
                        <span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                        <input
                          className="w-full bg-transparent border border-outline-variant rounded-lg pl-8 pr-md py-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="5,000.00"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div className="space-y-xs">
                        <label className="font-label-md text-on-surface-variant">Budget Type</label>
                        <div className="flex bg-surface-container-highest/50 rounded-lg p-1">
                          <button className="flex-1 py-2 text-xs font-bold rounded-md bg-white shadow-sm text-primary" type="button">
                            Fixed
                          </button>
                          <button className="flex-1 py-2 text-xs font-bold rounded-md text-on-surface-variant hover:text-primary transition-colors" type="button">
                            Variable
                          </button>
                        </div>
                      </div>
                      <div className="space-y-xs">
                        <label className="font-label-md text-on-surface-variant">Notification</label>
                        <select className="w-full bg-transparent border border-outline-variant rounded-lg px-md py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md">
                          <option>80% Usage</option>
                          <option>90% Usage</option>
                          <option>At Limit</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-md">
                      <button className="w-full bg-primary text-on-primary py-md rounded-lg font-bold active:scale-[0.98] transition-transform shadow-md" type="submit">
                        Activate Budget
                      </button>
                    </div>
                  </form>
                </div>
                <div className="rounded-xl overflow-hidden relative h-48 border border-outline-variant shadow-sm group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Coins stacked in a premium financial setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_C1UKHdEAZFVC79dA_EyYZI37BbhyiYydH2yyKt3krQEpvQMtM2xDYVpuXylgtCKKHBjsN3S1P0E4hKlSyxsZ9eS4rLPPV52z_MQLKTeBxHkVcvL3y7FZb1I6sc1TcSqK_3HYmiuzebzHNG3EOwUkyeUT85eTB4bOW6eNIsDF-FTSvENKrDrb_3QO2JeAa8l16dQtWjxiJc7dPqxEgnVzF1J5ts6W1Oefm5mEy5-bY11nHvxsHk1ktsiz5lbIP2ydZEYWRXWCQJsC"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                    <span className="font-label-md text-primary-fixed uppercase tracking-widest">Financial Tip</span>
                    <p className="text-white font-title-lg">How to optimize tax-loss harvesting this quarter.</p>
                  </div>
                </div>
              </section>

              <section className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="md:col-span-2 bg-white border border-outline-variant rounded-xl p-xl flex flex-col md:flex-row gap-lg items-center shadow-sm relative overflow-hidden">
                  <div className="flex-1 z-10">
                    <h4 className="font-label-md text-on-surface-variant uppercase tracking-widest">Total Monthly Utilization</h4>
                    <div className="flex items-baseline gap-sm mt-xs">
                      <span className="text-display-lg font-display-lg text-primary">$42,904</span>
                      <span className="text-on-surface-variant font-body-md">/ $55,000</span>
                    </div>
                    <div className="mt-md w-full bg-surface-container-highest rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full transition-all duration-1000" data-target="78%" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div className="z-10 text-right">
                    <div className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-full font-label-md inline-flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[18px]">trending_down</span>
                      4.2% Lower than last month
                    </div>
                  </div>
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-lg">
                    <div className="p-sm bg-surface-container rounded-lg">
                      <span className="material-symbols-outlined text-primary">home</span>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-sm py-xs rounded font-label-md uppercase">Safe</span>
                  </div>
                  <h5 className="font-title-lg text-on-surface mb-xs">Operations & Rent</h5>
                  <p className="text-on-surface-variant font-numeric-data mb-md">$12,000.00 / $15,000.00</p>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 mb-md overflow-hidden">
                    <div className="bg-secondary h-full transition-all duration-1000" data-target="80%" style={{ width: '80%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span>$3,000 remaining</span>
                    <span>20 days left</span>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-lg">
                    <div className="p-sm bg-surface-container rounded-lg">
                      <span className="material-symbols-outlined text-tertiary">travel_explore</span>
                    </div>
                    <span className="bg-tertiary/10 text-tertiary px-sm py-xs rounded font-label-md uppercase">Near Limit</span>
                  </div>
                  <h5 className="font-title-lg text-on-surface mb-xs">Marketing & Growth</h5>
                  <p className="text-on-surface-variant font-numeric-data mb-md">$8,550.00 / $9,000.00</p>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 mb-md overflow-hidden">
                    <div className="bg-tertiary h-full transition-all duration-1000" data-target="95%" style={{ width: '95%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span>$450 remaining</span>
                    <span>12 days left</span>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-lg">
                    <div className="p-sm bg-surface-container rounded-lg">
                      <span className="material-symbols-outlined text-error">restaurant</span>
                    </div>
                    <span className="bg-error/10 text-error px-sm py-xs rounded font-label-md uppercase">Exceeded</span>
                  </div>
                  <h5 className="font-title-lg text-on-surface mb-xs">Dining & Entertainment</h5>
                  <p className="text-on-surface-variant font-numeric-data mb-md">$2,800.00 / $2,500.00</p>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 mb-md overflow-hidden">
                    <div className="bg-error h-full transition-all duration-1000" data-target="100%" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span className="text-error font-bold">$300 over budget</span>
                    <span>Reset in 4 days</span>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-lg">
                    <div className="p-sm bg-surface-container rounded-lg">
                      <span className="material-symbols-outlined text-primary">subscriptions</span>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-sm py-xs rounded font-label-md uppercase">Safe</span>
                  </div>
                  <h5 className="font-title-lg text-on-surface mb-xs">SaaS Subscriptions</h5>
                  <p className="text-on-surface-variant font-numeric-data mb-md">$4,200.00 / $6,500.00</p>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 mb-md overflow-hidden">
                    <div className="bg-secondary h-full transition-all duration-1000" data-target="64%" style={{ width: '64%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span>$2,300 remaining</span>
                    <span>Annual billing cycle</span>
                  </div>
                </div>
              </section>
            </div>

            <section className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-xl py-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
                <h3 className="font-title-lg text-title-lg text-on-surface">Budget History & Forecasts</h3>
                <div className="flex gap-sm">
                  <button className="p-sm hover:bg-surface-container-highest rounded-full transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
                  </button>
                  <button className="p-sm hover:bg-surface-container-highest rounded-full transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant">search</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-highest/30 text-on-surface-variant font-label-md uppercase tracking-wider">
                      <th className="px-xl py-md">Category</th>
                      <th className="px-xl py-md">Assigned</th>
                      <th className="px-xl py-md">Actual</th>
                      <th className="px-xl py-md">Variance</th>
                      <th className="px-xl py-md">Trend</th>
                      <th className="px-xl py-md text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-xl py-md">
                        <div className="flex items-center gap-md">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          <span className="font-bold">Cloud Infrastructure</span>
                        </div>
                      </td>
                      <td className="px-xl py-md font-numeric-data">$25,000</td>
                      <td className="px-xl py-md font-numeric-data">$18,400</td>
                      <td className="px-xl py-md text-secondary font-bold">+$6,600</td>
                      <td className="px-xl py-md">
                        <span className="material-symbols-outlined text-secondary">trending_down</span>
                      </td>
                      <td className="px-xl py-md text-right">
                        <button className="text-primary hover:underline font-label-md">Edit</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-xl py-md">
                        <div className="flex items-center gap-md">
                          <div className="w-2 h-2 rounded-full bg-error"></div>
                          <span className="font-bold">Team Offsites</span>
                        </div>
                      </td>
                      <td className="px-xl py-md font-numeric-data">$5,000</td>
                      <td className="px-xl py-md font-numeric-data">$5,800</td>
                      <td className="px-xl py-md text-error font-bold">-$800</td>
                      <td className="px-xl py-md">
                        <span className="material-symbols-outlined text-error">trending_up</span>
                      </td>
                      <td className="px-xl py-md text-right">
                        <button className="text-primary hover:underline font-label-md">Edit</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-xl py-md">
                        <div className="flex items-center gap-md">
                          <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                          <span className="font-bold">Professional Development</span>
                        </div>
                      </td>
                      <td className="px-xl py-md font-numeric-data">$10,000</td>
                      <td className="px-xl py-md font-numeric-data">$9,200</td>
                      <td className="px-xl py-md text-on-surface-variant font-bold">+$800</td>
                      <td className="px-xl py-md">
                        <span className="material-symbols-outlined text-on-surface-variant">horizontal_rule</span>
                      </td>
                      <td className="px-xl py-md text-right">
                        <button className="text-primary hover:underline font-label-md">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-white/70 backdrop-blur-xl border-t border-outline-variant shadow-lg lg:hidden">
              <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-xs">Dashboard</span>
              </a>
              <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest" href="#">
                <span className="material-symbols-outlined">receipt_long</span>
                <span className="text-xs">Transactions</span>
              </a>
              <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                <span className="text-xs">Budget</span>
              </a>
              <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest" href="#">
                <span className="material-symbols-outlined">lightbulb</span>
                <span className="text-xs">Insights</span>
              </a>
              <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest" href="#">
                <span className="material-symbols-outlined">person</span>
                <span className="text-xs">Profile</span>
              </a>
            </nav>
            <div className="h-20 lg:hidden"></div>
          </div>
        </main>
      </div>
    </div>
  )
}
