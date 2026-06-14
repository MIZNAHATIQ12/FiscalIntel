import { useEffect } from 'react'
import SideNav from './SideNav.jsx'

export default function SavingsGoals() {
  useEffect(() => {
    const bars = Array.from(document.querySelectorAll('[data-progress]'))
    bars.forEach((bar) => {
      const target = bar.getAttribute('data-progress') || '0%'
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out'
        bar.style.width = target
      }, 120)
    })
  }, [])

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex-1 min-w-0">
          <header className="bg-surface flex justify-between items-center w-full px-lg py-md sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-outline-variant shadow-sm">
            <div className="flex items-center gap-md lg:w-1/3">
              <h2 className="font-title-lg text-title-lg font-bold text-primary lg:hidden">FiscalIntel</h2>
              <div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-md py-xs w-full max-w-sm border border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-body-md w-full ml-xs" placeholder="Search goals or history..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-lg">
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center gap-sm">
                <span className="material-symbols-outlined text-sm">add</span>
                Add Transaction
              </button>
              <div className="hidden lg:flex items-center gap-md text-on-surface-variant">
                <span className="material-symbols-outlined">notifications</span>
                <span className="material-symbols-outlined">help_outline</span>
              </div>
            </div>
          </header>

          <div className="p-lg lg:p-2xl space-y-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-xl">
              <div className="space-y-xs">
                <h1 className="font-headline-lg text-headline-lg tracking-tight">Savings Goals</h1>
                <p className="text-on-surface-variant text-body-lg">Visualizing your path to financial freedom.</p>
              </div>
              <div className="flex flex-wrap gap-md">
                <div className="glass-card p-md rounded-xl border border-outline-variant flex items-center gap-md min-w-[200px]">
                  <div className="bg-secondary/10 p-sm rounded-lg">
                    <span className="material-symbols-outlined text-secondary">savings</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Total Saved</p>
                    <p className="font-numeric-data text-numeric-data">$42,850.00</p>
                  </div>
                </div>
                <button className="bg-primary-container text-on-primary-container px-xl py-md rounded-xl font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center gap-md shadow-sm active:scale-95">
                  <span className="material-symbols-outlined">add_circle</span>
                  Add New Goal
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
              <div className="bg-white rounded-2xl border border-outline-variant shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all group">
                <div className="h-32 w-full relative overflow-hidden">
                  <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Vacation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0v7ElBc3M_U5BqWF0bNWxCk709Ea0EEIzV4IOzmlAGQwKN7y-9M5kQLQ2o4F9jv9UmBvvEksfjYJH84kjYfvSfv-tbqZHvOEYkNleasG6qmw_5z1xTKisR24dCPezwPY058SSiNng2uOsIOUyYVorpFF5ToLHGMC2h9aohhelJDPR89YfOu0FNjgvqAoOl7H8Tk8Ae0Fac7Wv3v5LfWYP0r8Xvi4L_byLwNaG4Q2cVLCl1QMbiAWqC9UI08qFEYSptEUl00UHLHT9" />
                </div>
                <div className="p-lg space-y-lg flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-headline-md">Vacation Fund</h3>
                      <p className="text-on-surface-variant text-body-md italic">Maldives trip with the family</p>
                    </div>
                    <div className="bg-primary/10 text-primary p-xs rounded">
                      <span className="material-symbols-outlined">flight_takeoff</span>
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <div className="flex justify-between items-end">
                      <span className="font-numeric-data text-numeric-data text-primary">$8,400 <span className="text-on-surface-variant text-body-md font-normal">of $12,000</span></span>
                      <span className="text-label-md font-label-md text-primary">70%</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full progress-glow" data-progress="70%" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  <div className="pt-md border-t border-outline-variant/30 flex justify-between">
                    <div className="text-xs">
                      <p className="text-on-surface-variant opacity-60">Est. Monthly</p>
                      <p className="font-bold text-on-surface">$1,200.00</p>
                    </div>
                    <div className="text-xs text-right">
                      <p className="text-on-surface-variant opacity-60">Completion</p>
                      <p className="font-bold text-on-surface">3 Months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-outline-variant shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all group">
                <div className="h-32 w-full relative overflow-hidden">
                  <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Emergency" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtjzvFneTY6v-txRq5D4tpyZI2WaEl68oWxMbIGv_YBOZOxFN5JaJYsyXv_cp5CO1idMz4S_oUiBVpsCyBqmNxOR9LGLiXXPfktgS9krUxdyyxKC_s9cpFUwliELzRz0R6DQttVoQPdLEkxSb9ij9tKj7XchtUGKL_6kCxYob1sAhxlanNNjhTbp93pU0zn4GHJUM-hLNxEsf4OgBpqzO_RWlVGpszpyjh-_pNZsxjLq7Jv1cAVL5_AH3d7QD8Z54qrMNYktgrOQ3y" />
                </div>
                <div className="p-lg space-y-lg flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-headline-md">Emergency Fund</h3>
                      <p className="text-on-surface-variant text-body-md italic">6 months of essential expenses</p>
                    </div>
                    <div className="bg-secondary/10 text-secondary p-xs rounded">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <div className="flex justify-between items-end">
                      <span className="font-numeric-data text-numeric-data text-secondary">$24,150 <span className="text-on-surface-variant text-body-md font-normal">of $30,000</span></span>
                      <span className="text-label-md font-label-md text-secondary">80.5%</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full progress-glow" data-progress="80.5%" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  <div className="pt-md border-t border-outline-variant/30 flex justify-between">
                    <div className="text-xs">
                      <p className="text-on-surface-variant opacity-60">Est. Monthly</p>
                      <p className="font-bold text-on-surface">$500.00</p>
                    </div>
                    <div className="text-xs text-right">
                      <p className="text-on-surface-variant opacity-60">Completion</p>
                      <p className="font-bold text-on-surface">11 Months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-outline-variant shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all group">
                <div className="h-32 w-full relative overflow-hidden">
                  <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcoupftvWj0V3ytNMc3ffKM66pyjEOQAGsu4U4h5Vc0PBxy9PdUymIitgIOIBSKwAGrR8-ifB7md_wi0XDyXw-Y8xNogivZwS-_O8g-8LmnOXxGgmbFiO16400w2Wi_t14zpHpAF6CAzOKG76SnAgN9euIgaxAcQztedQSFLMSfLbEIDteHKmBoGVERn7HoUaCqrkbPjybzq4TNcspm8YDpMdNqhf9LFtanTsGK-O6pvHFsUN1Ylor592MvFGm5a7pFj4eeCW8eLF1" />
                </div>
                <div className="p-lg space-y-lg flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-headline-md">New Laptop</h3>
                      <p className="text-on-surface-variant text-body-md italic">MacBook Pro M3 Max</p>
                    </div>
                    <div className="bg-tertiary/10 text-tertiary p-xs rounded">
                      <span className="material-symbols-outlined">laptop_mac</span>
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <div className="flex justify-between items-end">
                      <span className="font-numeric-data text-numeric-data text-tertiary">$1,300 <span className="text-on-surface-variant text-body-md font-normal">of $3,500</span></span>
                      <span className="text-label-md font-label-md text-tertiary">37%</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full progress-glow" data-progress="37%" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  <div className="pt-md border-t border-outline-variant/30 flex justify-between">
                    <div className="text-xs">
                      <p className="text-on-surface-variant opacity-60">Est. Monthly</p>
                      <p className="font-bold text-on-surface">$250.00</p>
                    </div>
                    <div className="text-xs text-right">
                      <p className="text-on-surface-variant opacity-60">Completion</p>
                      <p className="font-bold text-on-surface">9 Months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center p-2xl group hover:border-primary hover:bg-primary/5 transition-all cursor-pointer min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-lg group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary" style={{ fontSize: 32 }}>add</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">Start a new journey</h4>
                <p className="text-on-surface-variant text-center max-w-[200px] mt-xs">Define a dream, set a target, and watch it grow.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-outline-variant p-lg shadow-sm">
                <div className="flex justify-between items-center mb-xl">
                  <div>
                    <h3 className="font-headline-md text-headline-md">Contribution History</h3>
                    <p className="text-on-surface-variant text-body-md">Your saving momentum over the last 6 months.</p>
                  </div>
                  <div className="flex gap-xs">
                    <button className="px-md py-xs bg-surface-container-highest rounded-lg text-xs font-bold">ALL</button>
                    <button className="px-md py-xs text-on-surface-variant hover:bg-surface-container-low rounded-lg text-xs font-bold transition-colors">MONTH</button>
                  </div>
                </div>
                <div className="space-y-lg">
                  <div className="flex items-center gap-lg group p-md hover:bg-surface-container-lowest rounded-xl transition-colors">
                    <div className="h-10 w-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">Emergency Fund Deposit</p>
                      <p className="text-xs text-on-surface-variant">Automated transfer from checking</p>
                    </div>
                    <div className="text-right">
                      <p className="font-numeric-data text-numeric-data text-secondary">+$1,500.00</p>
                      <p className="text-xs text-on-surface-variant">Today, 9:41 AM</p>
                    </div>
                  </div>
                  <button className="w-full mt-xl py-md text-primary font-label-md text-label-md border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">View Full History</button>
                </div>
              </div>

              <div className="bg-primary text-on-primary p-lg rounded-2xl shadow-xl flex flex-col relative overflow-hidden">
                <div className="relative z-10 space-y-lg">
                  <span className="material-symbols-outlined text-display-lg" style={{ fontSize: 40, opacity: 0.8 }}>lightbulb</span>
                  <h3 className="font-headline-md text-headline-md leading-tight">You're saving 15% faster than last quarter!</h3>
                  <p className="text-on-primary-container/80 text-body-md">Based on your current momentum, your "Vacation Fund" will be fully funded by June instead of August.</p>
                  <div className="pt-lg">
                    <div className="p-md bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                      <p className="text-xs uppercase font-bold tracking-widest opacity-70 mb-sm">Strategy Tip</p>
                      <p className="text-sm">Rounding up your coffee purchases could add an extra $120/month to your laptop fund.</p>
                    </div>
                  </div>
                  <button className="mt-auto w-full py-md bg-white text-primary font-bold rounded-xl active:scale-95 transition-transform">Apply Auto-Roundup</button>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed/20 rounded-full blur-2xl"></div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
