import React from 'react';
import OilGasTile from './components/OilGasTile';
import { 
  Database, 
  TrendingUp, 
  CheckCircle, 
  Verified, 
  ArrowRight, 
  Factory, 
  Waves, 
  Network,
  LifeBuoy,
  Shield,
  Server,
  BarChart2,
  Search
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#F8F9FA] text-[#002855] font-sans antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          
          {/* Header */}
          <div className="w-full flex justify-center py-2 border-b border-solid border-[#8D99AE]/20 bg-white">
            <div className="flex flex-col max-w-[1400px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-6 md:px-10 py-4">
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-[#004B87]">
                      <Database className="w-full h-full" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-[#002855] text-xl font-bold leading-tight tracking-[-0.015em]">
                      OilAndGasHero
                    </h2>
                  </div>
                  <nav className="hidden md:flex items-center gap-9">
                    {['Executive Suite', 'Risk Matrix', 'Growth Strategy', 'Global Assets'].map((item) => (
                      <a 
                        key={item}
                        className="text-[#8D99AE] text-sm font-semibold leading-normal hover:text-[#002855] transition-colors cursor-pointer"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                  <div className="hidden lg:flex items-center gap-4 mr-4">
                    <span className="text-[#8D99AE] text-sm font-medium">
                      Market Data: <span className="text-[#002855] font-bold">WTI $78.42</span>
                    </span>
                    <div className="h-4 w-px bg-[#8D99AE]/30"></div>
                    <span className="text-[#8D99AE] text-sm font-medium">
                      Global Status: <span className="text-emerald-600 font-bold">Optimal</span>
                    </span>
                  </div>
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border-2 border-[#004B87]" 
                    style={{ backgroundImage: 'url("https://picsum.photos/100/100")' }}
                  ></div>
                </div>
              </header>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 max-w-[1400px] mx-auto w-full">
            <div className="text-center mb-16 max-w-4xl">
              <span className="bg-[#004B87]/10 text-[#004B87] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Enterprise Performance Intelligence
              </span>
              <h1 className="text-[#002855] text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                Strategic Performance Overview
              </h1>
              <p className="text-[#8D99AE] text-xl font-normal leading-relaxed">
                A high-level synthesis of global operational efficiency, cost management, and predictive yield analytics for informed executive decision-making.
              </p>
            </div>

            {/* REACT COMPONENT INSERTION POINT */}
            <div className="w-full flex justify-center mb-20">
               <OilGasTile />
            </div>
            {/* END REACT COMPONENT */}

            {/* KPI Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'GLOBAL UPTIME', value: '99.8%', sub: '0.4% Improvement', icon: TrendingUp, color: 'text-emerald-600', subColor: 'text-emerald-600' },
                { label: 'TOTAL OUTPUT', value: '88.4%', sub: '7.2% Yield Growth', icon: TrendingUp, color: 'text-[#002855]', subColor: 'text-[#004B87]' },
                { label: 'CAPEX BURN', value: '$4.2M', sub: 'Within Budget', icon: CheckCircle, color: 'text-[#002855]', subColor: 'text-[#8D99AE]' },
                { label: 'RISK INDEX', value: 'Low', sub: 'Stable Operations', icon: Verified, color: 'text-[#002855]', subColor: 'text-emerald-600' },
              ].map((kpi, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-[#8D99AE]/20 shadow-sm">
                  <p className="text-[#8D99AE] text-sm font-semibold mb-1">{kpi.label}</p>
                  <p className="text-[#002855] text-4xl font-black">{kpi.value}</p>
                  <div className={`flex items-center gap-1 ${kpi.subColor} text-sm font-bold mt-2`}>
                    <kpi.icon className="w-4 h-4" />
                    <span>{kpi.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 w-full pt-8 border-t border-[#8D99AE]/20">
              <button className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-16 px-8 bg-[#D90429] text-white text-lg font-bold transition-all hover:bg-[#b00321] hover:-translate-y-1 shadow-lg shadow-[#D90429]/20 group">
                <BarChart2 className="mr-3 w-6 h-6" />
                View Executive Report
              </button>
              <button className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-16 px-8 bg-white text-[#002855] text-lg font-bold border-2 border-[#002855] transition-all hover:bg-[#F8F9FA] group">
                <Search className="mr-3 w-6 h-6" />
                Access Raw Data
              </button>
            </div>

            {/* Bottom Content Area */}
            <div className="w-full mt-24">
              <div className="flex items-center justify-between border-b-2 border-[#002855]/10 pb-6 mb-10">
                <h3 className="text-[#002855] text-2xl font-black">Key Performance Hubs</h3>
                <a href="#" className="text-[#004B87] text-sm font-bold flex items-center gap-2 group">
                  Explore Detailed Asset Map
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Factory, title: 'Extraction Rigs', desc: 'Monitoring 14 offshore assets. All systems operating within 1.5% of peak theoretical yield.' },
                  { icon: Waves, title: 'Transport Network', desc: 'Real-time pressure telemetry indicates stable flow at 1.2M bbl/d with 0% leak variance detected.' },
                  { icon: Network, title: 'Distribution Hubs', desc: 'Regional supply optimization active across 48 global hubs. Fulfillment rate at 99.2%.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-[#8D99AE]/20 hover:border-[#004B87] transition-all cursor-pointer shadow-sm group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-[#004B87] bg-[#004B87]/5 p-3 rounded-lg group-hover:bg-[#004B87]/10 transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-[#002855] text-lg font-bold">{item.title}</h4>
                    </div>
                    <p className="text-[#8D99AE] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="py-12 bg-white border-t border-[#8D99AE]/20 flex flex-col items-center gap-6">
            <div className="flex gap-10">
              {[
                { icon: LifeBuoy, label: 'CONCIERGE' },
                { icon: Shield, label: 'SECURE LOG' },
                { icon: Server, label: 'API ACCESS' },
              ].map((item, i) => (
                <a key={i} href="#" className="text-[#8D99AE] hover:text-[#002855] transition-colors flex flex-col items-center gap-1">
                  <item.icon className="w-6 h-6" />
                  <span className="text-[10px] font-bold">{item.label}</span>
                </a>
              ))}
            </div>
            <p className="text-[#8D99AE] text-sm font-medium">© 2024 OilAndGasHero Executive Dashboard. High-Confidence Intelligence. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}