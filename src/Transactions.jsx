import { useEffect } from 'react'
import SideNav from './SideNav.jsx'

export default function Transactions() {
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
      listeners.forEach((remove) => remove())
    }
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex-1 flex flex-col min-w-0">

          <div className="p-lg lg:p-2xl space-y-2xl">
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-md lg:gap-lg">
              {/* KPI cards omitted for brevity */}
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
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="h-20 lg:hidden"></div>
        </main>
      </div>
    </div>
  )
}
