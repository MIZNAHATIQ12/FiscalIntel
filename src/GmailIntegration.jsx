import { useEffect } from 'react'
import SideNav from './SideNav.jsx'

export default function GmailIntegration() {
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
          <header className="bg-surface sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-lg py-md lg:px-2xl">
            <div className="flex items-center gap-md">
              <h2 className="font-title-lg text-title-lg font-bold text-primary lg:hidden">FiscalIntel</h2>
              <div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-md py-xs border border-outline-variant w-96">
                <span className="material-symbols-outlined text-outline text-body-md">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-body-md w-full" placeholder="Search insights..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-lg">
              <div className="hidden sm:flex items-center gap-md">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="material-symbols-outlined text-on-surface-variant">help_outline</span>
              </div>
              <button className="bg-primary text-on-primary px-lg py-xs rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                Add Transaction
              </button>
            </div>
          </header>
          <div className="p-lg lg:p-2xl max-w-6xl mx-auto">
            <div className="mb-2xl">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Gmail Intelligence</h3>
              <p className="text-on-surface-variant font-body-lg">Automate your financial tracking with secure email parsing.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              <div className="lg:col-span-4 space-y-lg">
                <div className="glass-card rounded-xl p-xl shadow-sm">
                  <div className="flex items-center justify-between mb-xl">
                    <h4 className="font-title-lg text-title-lg">Connection</h4>
                    <span className="flex items-center gap-xs text-secondary font-label-md">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-md mb-xl p-md bg-surface-container-low rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm border border-outline-variant">
                      <img alt="Google logo" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwb7EIrLOxJq3pCqUtTzStizPs6SV1t9EJWZhNq78rB1GLziPwrOPeNRnhimZSMnjNeO5Wa2ttDBCEdWixkQv5iyonF8ViTGVYg95w_0LdoSNaLAJ2IrXtRkJ1PD9_KjugZPDUn8zqN7kf8Ba2YGJk3p5pIA6VHsgTG0IhMB6yN5zUCa3iVOOvvkIUu63pcJCGsXCI5_fxnz4W7Fh7ANN7Sm0pWyvnzJY7cKZG6qhxNQvLe7VIL-6nDNqvkwgSjlG5uSg0njAznvF" />
                    </div>
                    <div>
                      <p className="font-body-md font-bold">j.dalton.pro@gmail.com</p>
                      <p className="text-xs text-outline">Last synced 4 mins ago</p>
                    </div>
                  </div>
                  <button className="w-full border border-error text-error py-md rounded-lg font-label-md hover:bg-error-container/20 transition-colors">
                    Disconnect Integration
                  </button>
                </div>
                <div className="glass-card rounded-xl p-xl shadow-sm">
                  <h4 className="font-label-md text-label-md text-outline uppercase mb-md">Quick Stats</h4>
                  <div className="space-y-md">
                    <div className="flex justify-between items-center">
                      <span className="text-body-md">Parsing Accuracy</span>
                      <span className="font-numeric-data text-numeric-data text-secondary">99.2%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '99.2%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body-md">Emails Scanned</span>
                      <span className="font-numeric-data text-numeric-data">1,248</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body-md">Transactions Found</span>
                      <span className="font-numeric-data text-numeric-data">412</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-lg">
                <div className="glass-card rounded-xl p-xl shadow-sm relative overflow-hidden">
                  <h4 className="font-title-lg text-title-lg mb-2xl">Automation Pipeline</h4>
                  <div className="relative flex justify-between items-center px-xl py-xl">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-2xl">
                      <div className="flow-line w-full rounded-full overflow-hidden">
                        <div className="flow-dot" style={{ left: '20%' }}></div>
                        <div className="flow-dot" style={{ left: '50%' }}></div>
                        <div className="flow-dot" style={{ left: '80%' }}></div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-md group">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[32px]">mail</span>
                      </div>
                      <div className="text-center">
                        <p className="font-label-md text-label-md">GMAIL SOURCE</p>
                        <p className="text-xs text-outline">Scanning Receipts</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-md group">
                      <div className="w-16 h-16 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[32px]">psychology</span>
                      </div>
                      <div className="text-center">
                        <p className="font-label-md text-label-md">AI PARSER</p>
                        <p className="text-xs text-outline">Extracting Data</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-md group">
                      <div className="w-16 h-16 rounded-2xl bg-on-surface-variant text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
                      </div>
                      <div className="text-center">
                        <p className="font-label-md text-label-md">FISCAL LEDGER</p>
                        <p className="text-xs text-outline">Budget Updated</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-xl pt-xl border-t border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-md">
                      <div className="w-3 h-3 bg-secondary rounded-full sync-pulse"></div>
                      <span className="text-body-md text-on-surface-variant italic">System is currently listening for new transaction emails...</span>
                    </div>
                    <button className="text-primary font-label-md hover:underline">View Logic Settings</button>
                  </div>
                </div>
                <div className="glass-card rounded-xl overflow-hidden shadow-sm">
                  <div className="p-xl border-b border-outline-variant flex justify-between items-center">
                    <h4 className="font-title-lg text-title-lg">Recent Imports</h4>
                  </div>
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low">
                      <tr>
                        <th className="px-xl py-md font-label-md text-label-md text-outline">MERCHANT & SOURCE</th>
                        <th className="px-xl py-md font-label-md text-label-md text-outline">CATEGORY</th>
                        <th className="px-xl py-md font-label-md text-label-md text-outline">DATE</th>
                        <th className="px-xl py-md font-label-md text-label-md text-outline text-right">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      <tr className="hover:bg-surface-container-low transition-colors group">
                        <td className="px-xl py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                              <span className="material-symbols-outlined text-body-md">local_cafe</span>
                            </div>
                            <div>
                              <p className="font-body-md font-bold">Starbucks Coffee</p>
                              <p className="text-[10px] text-outline">via Receipt #8291</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-xl py-md">
                          <span className="bg-secondary/10 text-on-secondary-container px-sm py-xs rounded text-[10px] font-bold uppercase tracking-wider">Food & Drink</span>
                        </td>
                        <td className="px-xl py-md text-body-md">Oct 24, 2023</td>
                        <td className="px-xl py-md text-right font-numeric-data text-numeric-data">$6.45</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors group">
                        <td className="px-xl py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                              <span className="material-symbols-outlined text-body-md">shopping_bag</span>
                            </div>
                            <div>
                              <p className="font-body-md font-bold">Amazon.com</p>
                              <p className="text-[10px] text-outline">via Shipping Confirmation</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-xl py-md">
                          <span className="bg-primary/10 text-primary px-sm py-xs rounded text-[10px] font-bold uppercase">Electronics</span>
                        </td>
                        <td className="px-xl py-md text-body-md">Oct 23, 2023</td>
                        <td className="px-xl py-md text-right font-numeric-data text-numeric-data">$129.99</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors group">
                        <td className="px-xl py-md">
                          <div className="flex items-center gap-md">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                              <span className="material-symbols-outlined text-body-md">bolt</span>
                            </div>
                            <div>
                              <p className="font-body-md font-bold">ConEd Utilities</p>
                              <p className="text-[10px] text-outline">via Monthly Statement</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-xl py-md">
                          <span className="bg-tertiary/10 text-tertiary px-sm py-xs rounded text-[10px] font-bold uppercase">Housing</span>
                        </td>
                        <td className="px-xl py-md text-body-md">Oct 22, 2023</td>
                        <td className="px-xl py-md text-right font-numeric-data text-numeric-data">$84.12</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-md text-center bg-surface-container-low">
                    <button className="text-primary font-label-md hover:underline">See All Imported Transactions</button>
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-3xl grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="flex gap-md items-start">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <div>
                  <h5 className="font-label-md text-label-md font-bold">Bank-Level Security</h5>
                  <p className="text-xs text-outline">Your Gmail credentials are never stored. We use restricted OAuth scopes for read-only access.</p>
                </div>
              </div>
              <div className="flex gap-md items-start">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  visibility_off
                </span>
                <div>
                  <h5 className="font-label-md text-label-md font-bold">Privacy First</h5>
                  <p className="text-xs text-outline">Only financial-related emails are parsed. Personal correspondence remains completely private.</p>
                </div>
              </div>
              <div className="flex gap-md items-start">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
                <div>
                  <h5 className="font-label-md text-label-md font-bold">Smart Filtering</h5>
                  <p className="text-xs text-outline">Duplicate detection ensures no transaction is ever recorded twice across your accounts.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
