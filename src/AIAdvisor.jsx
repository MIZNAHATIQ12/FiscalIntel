import { useEffect } from 'react'
import SideNav from './SideNav.jsx'

export default function AIAdvisor() {
  useEffect(() => {
    // Auto-resize textarea
    const textarea = document.querySelector('textarea.chat-input')
    const autosize = (el) => {
      if (!el) return
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
    if (textarea) {
      autosize(textarea)
      const onInput = () => autosize(textarea)
      textarea.addEventListener('input', onInput)
      return () => textarea.removeEventListener('input', onInput)
    }
  }, [])

  useEffect(() => {
    // Chip click behavior
    const chips = Array.from(document.querySelectorAll('.ai-chip'))
    const textarea = document.querySelector('textarea.chat-input')
    const handlers = chips.map((chip) => {
      const fn = () => {
        const text = chip.textContent.replace(/"/g, '')
        if (textarea) {
          textarea.value = text
          textarea.focus()
          textarea.dispatchEvent(new Event('input'))
        }
      }
      chip.addEventListener('click', fn)
      return () => chip.removeEventListener('click', fn)
    })
    return () => handlers.forEach((h) => h())
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex-1 flex flex-col min-w-0">
          <header className="bg-surface sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-lg py-md lg:px-2xl">
            <div className="flex items-center gap-md lg:hidden">
              <span className="material-symbols-outlined text-primary">menu</span>
              <span className="font-title-lg text-title-lg font-bold text-primary">FiscalIntel</span>
            </div>
            <div className="hidden lg:flex items-center bg-surface-container-low px-md py-xs rounded-full border border-outline-variant w-96">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-md w-full" placeholder="Search financial data..." type="text" />
            </div>
            <div className="flex items-center gap-lg">
              <button className="bg-primary text-white px-md py-sm rounded-lg font-label-md hover:opacity-90 transition-opacity">Add Transaction</button>
              <div className="hidden lg:flex gap-md">
                <span className="material-symbols-outlined text-outline">notifications</span>
                <span className="material-symbols-outlined text-outline">help_outline</span>
              </div>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden h-[calc(100vh-72px)]">
            <aside className="hidden lg:flex flex-col w-72 border-r border-outline-variant bg-surface-container-lowest h-full">
              <div className="p-md border-b border-outline-variant">
                <button className="w-full flex items-center justify-center gap-sm bg-surface-container-high py-sm rounded-lg text-on-surface font-label-md hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  New Advice Session
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-md space-y-md">
                <p className="font-label-md text-outline uppercase tracking-wider text-[10px]">Recent Sessions</p>
                <div className="space-y-xs">
                  <div className="p-sm rounded-lg bg-primary-fixed-dim/20 border-l-4 border-primary cursor-pointer">
                    <p className="font-label-md text-primary truncate">June Tax Strategy</p>
                    <p className="text-[10px] text-outline">Today, 2:45 PM</p>
                  </div>
                  <div className="p-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                    <p className="font-label-md text-on-surface-variant truncate">Portfolio Diversification</p>
                    <p className="text-[10px] text-outline">Yesterday</p>
                  </div>
                </div>
              </div>
            </aside>

            <section className="flex-1 flex flex-col bg-background relative h-full">
              <div className="flex-1 overflow-y-auto chat-scroll px-lg py-xl space-y-xl z-10" id="chat-container">
                <div className="flex gap-md max-w-3xl animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                  </div>
                  <div className="space-y-md">
                    <div className="bg-white border border-outline-variant p-lg rounded-2xl rounded-tl-none shadow-sm">
                      <p className="text-body-lg text-on-surface leading-relaxed">
                        Good afternoon. I've finished analyzing your transactions. Your net savings rate is up by <span className="text-secondary font-bold">12.4%</span>. How can I assist today?
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-sm">
                      <button className="ai-chip px-md py-xs rounded-full border border-primary text-primary font-label-md hover:bg-primary-fixed-dim/30 transition-colors">"Will I exceed my budget?"</button>
                      <button className="ai-chip px-md py-xs rounded-full border border-primary text-primary font-label-md hover:bg-primary-fixed-dim/30 transition-colors">"Analyze grocery spend"</button>
                      <button className="ai-chip px-md py-xs rounded-full border border-primary text-primary font-label-md hover:bg-primary-fixed-dim/30 transition-colors">"Subscription audit"</button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-md max-w-3xl ml-auto flex-row-reverse animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div className="bg-primary text-white p-lg rounded-2xl rounded-tr-none shadow-md">
                    <p className="text-body-lg">Can you show me a breakdown of my discretionary spending for June so far?</p>
                  </div>
                </div>

                <div className="flex gap-md max-w-3xl animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                  </div>
                  <div className="space-y-md w-full">
                    <div className="bg-white border border-outline-variant p-lg rounded-2xl rounded-tl-none shadow-sm">
                      <p className="text-body-lg text-on-surface mb-lg">Certainly. Your discretionary spending totals <span className="font-bold">$1,240.50</span>. Dining out remains largest.</p>
                      <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant">
                        <div className="flex justify-between items-center mb-md">
                          <h3 className="font-label-md text-on-surface-variant uppercase">June Discretionary Spend</h3>
                          <span className="text-secondary text-[10px] font-bold">+2% vs May</span>
                        </div>
                        <div className="flex items-end gap-xs h-32 w-full pt-md">
                          <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
                          <div className="flex-1 bg-primary/40 rounded-t-sm h-[65%]"></div>
                          <div className="flex-1 bg-primary rounded-t-sm h-[90%]"></div>
                          <div className="flex-1 bg-primary/30 rounded-t-sm h-[25%]"></div>
                          <div className="flex-1 bg-primary/50 rounded-t-sm h-[50%]"></div>
                        </div>
                        <div className="flex justify-between mt-sm text-[10px] text-outline font-bold">
                          <span>$0</span>
                          <span>$500</span>
                          <span>$1,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="p-lg bg-white/70 backdrop-blur-md border-t border-outline-variant z-20">
                <div className="max-w-4xl mx-auto relative">
                  <textarea className="chat-input w-full pl-lg pr-16 py-md bg-surface-container-lowest border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-body-lg" placeholder="Ask about your finances, taxes, or savings..." rows="1"></textarea>
                  <button className="absolute right-md top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
                <p className="text-center text-[10px] text-outline mt-sm">FiscalIntel AI can make mistakes. Check important financial info.</p>
              </div>
            </section>

            <aside className="hidden xl:flex flex-col w-80 bg-surface-container-low border-l border-outline-variant h-full p-lg overflow-y-auto">
              <div className="space-y-xl">
                <div>
                  <h2 className="font-title-lg text-on-surface mb-md">Top Recommendations</h2>
                  <div className="space-y-md">
                    <div className="p-md bg-white border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-md mb-sm">
                        <div className="p-xs bg-secondary-container text-on-secondary-container rounded-lg">
                          <span className="material-symbols-outlined">trending_up</span>
                        </div>
                        <h4 className="font-label-md text-on-surface">Optimize HYSA</h4>
                      </div>
                      <p className="text-body-md text-on-surface-variant">Your idle cash ($4,200) could earn <span className="font-bold">$18.50/mo</span> more in a High-Yield Savings Account.</p>
                      <button className="mt-md text-primary font-bold text-label-md flex items-center gap-xs">Transfer Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                    </div>
                  </div>
                </div>

                <div className="pt-lg border-t border-outline-variant">
                  <h3 className="font-label-md text-outline uppercase mb-md tracking-wider">Asset Health</h3>
                  <div className="space-y-lg">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-on-secondary-container bg-secondary-container">Liquid Capital</span>
                        </div>
                        <div className="text-right"><span className="text-[10px] font-semibold inline-block text-secondary">75%</span></div>
                      </div>
                      <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-secondary-container/30">
                        <div className="shadow-none flex flex-col text-center white-space-nowrap text-white justify-center bg-secondary" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-on-tertiary-container bg-tertiary-container">Investments</span>
                        </div>
                        <div className="text-right"><span className="text-[10px] font-semibold inline-block text-tertiary">42%</span></div>
                      </div>
                      <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-tertiary-container/20">
                        <div className="shadow-none flex flex-col text-center white-space-nowrap text-white justify-center bg-tertiary" style={{ width: '42%' }}></div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl group">
                  <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCS94hVEKUSXQ2l9bb_Ac13-kvFxr0pIITa5fNnKJaOtaeVGopRR_gp8oBp74nGbEQF4g-Jkgb2XxZ3JuQW9qMVBRW3DB8REnE596k2M0rihC0kQYwTKt5SLPDdW2jhANpbN1aBGmJOcnnLNcz1tpDYZ5Iuv8y9VouEcJdKaGkfWCfF4xVlhxW_UYsUw-0kxnEXtSY1O1ubx3vYcdfIblstLW2PUQftIGTrW1gSzSazgvi6hzv3y57W13z2fgs4p5-GTr1DKPl8vt" alt="promo"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-lg">
                    <p className="text-white font-bold text-headline-md leading-tight mb-sm">Plan for retirement today.</p>
                    <button className="w-full bg-white text-primary font-bold py-sm rounded-lg hover:bg-surface-container transition-colors">Get Pro Advice</button>
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}
