'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  Bell,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Factory,
  Leaf,
  MapPin,
  PackageCheck,
  Radio,
  Route,
  Send,
  ShieldCheck,
  Truck,
  Waves,
  Zap,
} from 'lucide-react'

const metrics = [
  { label: 'Total waste intercepted today', value: '142.4', unit: 'kg', change: '+18.6%', icon: Waves, tone: 'emerald' },
  { label: 'Target micro-factory yield', value: '568', unit: 'tiles', change: 'next batch', icon: Factory, tone: 'lime' },
  { label: 'Supply chain market value', value: '₦64,080', unit: '', change: '+₦8,420', icon: ArrowUpRight, tone: 'amber' },
  { label: 'System-wide trap capacity', value: '82', unit: '%', change: '18% headroom', icon: Activity, tone: 'orange' },
]

const detections = [
  { label: 'LDPE Nylon Sachet', confidence: '94%', className: 'detection-red box-one' },
  { label: 'PET Bottle', confidence: '89%', className: 'detection-blue box-two' },
  { label: 'LDPE Nylon Sachet', confidence: '91%', className: 'detection-red box-three' },
]

const productRoutes = [
  { type: 'PET', examples: 'Bottles', becomes: 'Polyester thread, new bottles, paving tiles', icon: '↗' },
  { type: 'HDPE', examples: 'Jugs + detergent bottles', becomes: 'School desks, crates, pipes', icon: '◆' },
  { type: 'PP', examples: 'Caps + yogurt cups', becomes: 'Buckets, basins, plastic furniture', icon: '●' },
  { type: 'LDPE', examples: 'Sachets + nylon bags', becomes: 'Plastic lumber, benches, road asphalt', icon: '≈' },
]

export default function Page() {
  const [dispatchSent, setDispatchSent] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7f3] text-[#14251d]">
      <div className="mx-auto max-w-[1560px] px-4 py-5 sm:px-6 lg:px-10 lg:py-7">
        <header className="flex flex-col gap-5 border-b border-[#d8e3dc] pb-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#123d2b] text-[#d7f36d] shadow-[0_8px_24px_rgba(18,61,43,.18)]">
              <Leaf aria-hidden="true" className="size-5" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#709080]">Operations intelligence</p>
              <h1 className="text-xl font-semibold tracking-[-0.03em] text-[#123d2b] sm:text-2xl">WasteLens <span className="font-normal text-[#7f9389]">// AI Analytics</span></h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#f2b6ad] bg-[#fff5f3] px-4 py-2 text-xs font-bold tracking-wide text-[#bd493d] shadow-sm">
              <span className="size-2 animate-pulse rounded-full bg-[#d94b3f]" />
              CRITICAL LEVEL ACTIVE: Surulere Node 04
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-[#d8e3dc] bg-white px-3 py-2 text-xs font-medium text-[#688075] sm:flex">
              <Radio className="size-3.5 text-[#13865f]" /> 12 nodes online
            </div>
            <button aria-label="View alerts" className="flex size-9 items-center justify-center rounded-full border border-[#d8e3dc] bg-white text-[#527065] transition hover:border-[#8bb69e] hover:text-[#123d2b]"><Bell className="size-4" /></button>
          </div>
        </header>

        <section aria-label="Key performance indicators" className="grid gap-3 py-6 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <article key={metric.label} className="relative overflow-hidden rounded-2xl border border-[#dce7df] bg-white p-5 shadow-[0_7px_24px_rgba(26,70,49,.045)]">
                <div className="flex items-start justify-between gap-3">
                  <p className="max-w-[175px] text-[11px] font-bold uppercase leading-4 tracking-[0.14em] text-[#789086]">{metric.label}</p>
                  <div className={`flex size-9 items-center justify-center rounded-xl ${metric.tone === 'emerald' ? 'bg-[#e5f6ed] text-[#14845d]' : metric.tone === 'lime' ? 'bg-[#f0f8d4] text-[#6b8c1e]' : 'bg-[#fff2da] text-[#c17a18]'}`}><Icon className="size-4" /></div>
                </div>
                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-3xl font-semibold tracking-[-0.06em] text-[#16382a]">{metric.value}</span>
                  <span className="mb-1 text-xs font-semibold text-[#789086]">{metric.unit}</span>
                </div>
                <p className={`mt-2 text-xs font-semibold ${metric.tone === 'orange' ? 'text-[#c17a18]' : 'text-[#18835d]'}`}>{metric.change}</p>
                {metric.tone === 'orange' && <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f7ead3]"><div className="h-full w-[82%] rounded-full bg-[#e0a33e]" /></div>}
              </article>
            )
          })}
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.12fr_.88fr]">
          <article className="rounded-2xl border border-[#dce7df] bg-white p-4 shadow-[0_7px_24px_rgba(26,70,49,.045)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#769085]"><Camera className="size-3.5 text-[#1a8a61]" /> Edge vision / camera 04</div>
                <h2 className="text-lg font-semibold tracking-[-0.03em] text-[#17382a]">Live Edge Stream <span className="font-normal text-[#8ba097]">— TideTrap Cam 04</span></h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#fff0ed] px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#c64f43]"><span className="size-1.5 animate-pulse rounded-full bg-[#dd5044]" /> LIVE FEED // AI SORTING ACTIVE</div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#123d2b]" aria-label="Stylized live waterway camera feed">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(93,170,145,.55),transparent_38%),linear-gradient(145deg,#0a382f,#176457_52%,#092f2b)]" />
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(192,238,203,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(192,238,203,.35)_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute -left-10 top-1/2 h-24 w-[120%] -rotate-6 rounded-[50%] border-y border-[#9ce2c2]/30 bg-[#65bca0]/10 blur-[1px]" />
              <div className="absolute left-[15%] top-[25%] h-4 w-11 rotate-12 rounded bg-white/50 shadow-[12px_14px_0_#d7e9d0,40px_-7px_0_#d1e1d0]" />
              <div className="absolute bottom-[20%] right-[16%] h-8 w-5 rotate-12 rounded-sm border border-white/40 bg-[#dbf1e1]/60 shadow-[18px_-7px_0_#e8c69b]" />
              <div className="absolute bottom-[10%] left-[8%] text-[10px] font-medium tracking-[0.16em] text-white/65">SURULERE CANAL 04 / 1080P / 24 FPS</div>
              {detections.map((detection) => <div key={`${detection.label}-${detection.confidence}`} className={`absolute ${detection.className}`}><div className="whitespace-nowrap rounded-sm px-2 py-1 text-[10px] font-bold tracking-wide text-white">[{detection.label} · Conf: {detection.confidence}]</div></div>)}
              <div className="absolute right-3 top-3 flex items-center gap-2 rounded-md border border-white/20 bg-[#082a25]/55 px-2 py-1.5 text-[10px] font-semibold text-[#dcf7df]"><ShieldCheck className="size-3.5 text-[#a8e467]" /> SORTING MODEL v2.4</div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#edf2ee] pt-4 text-center">
              <div><p className="text-lg font-semibold text-[#17382a]">03</p><p className="text-[10px] uppercase tracking-wider text-[#8ba097]">Objects found</p></div>
              <div><p className="text-lg font-semibold text-[#17382a]">96.2%</p><p className="text-[10px] uppercase tracking-wider text-[#8ba097]">Model accuracy</p></div>
              <div><p className="text-lg font-semibold text-[#17382a]">7.46 kg</p><p className="text-[10px] uppercase tracking-wider text-[#8ba097]">Payload ready</p></div>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-[#dce7df] bg-white p-4 shadow-[0_7px_24px_rgba(26,70,49,.045)] sm:p-5">
            <div className="mb-5 flex items-start justify-between gap-3"><div><div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#769085]"><Route className="size-3.5 text-[#1a8a61]" /> Material intelligence</div><h2 className="text-lg font-semibold tracking-[-0.03em] text-[#17382a]">Circular Economy Routing <span className="font-normal text-[#8ba097]">& Hotspots</span></h2></div><span className="rounded-full bg-[#edf8e8] px-2.5 py-1 text-[10px] font-bold text-[#3b7c45]">AUTO-ROUTING ON</span></div>
            <div className="flex flex-col gap-3">
              <RoutingRow icon={<PackageCheck className="size-4" />} title="LDPE Pure Water Sachets" destination="Micro-Factory #2" output="Paving Tiles" tone="green" />
              <RoutingRow icon={<Truck className="size-4" />} title="HDPE Detergent Jugs" destination="Hub Alapere" output="School Desks" tone="amber" />
            </div>
            <div className="mt-5 flex-1 rounded-xl border border-[#dce7df] bg-[#f3f8f2] p-3">
              <div className="mb-2 flex items-center justify-between"><p className="text-xs font-bold text-[#345548]">Predictive hotspot map</p><div className="flex items-center gap-1.5 text-[10px] text-[#7a9186]"><MapPin className="size-3" /> Live model</div></div>
              <div className="relative min-h-[180px] overflow-hidden rounded-lg bg-[#dcecdf] [background-image:linear-gradient(38deg,transparent_45%,rgba(86,145,111,.22)_46%,rgba(86,145,111,.22)_48%,transparent_49%),linear-gradient(145deg,transparent_47%,rgba(86,145,111,.16)_48%,rgba(86,145,111,.16)_50%,transparent_51%)]">
                <div className="absolute left-[8%] top-[58%] h-32 w-64 -rotate-[20deg] rounded-[48%] border-[18px] border-[#b0d4bd]/55" /><div className="absolute right-[10%] top-[14%] h-24 w-44 rotate-[32deg] rounded-[48%] border-[12px] border-[#b0d4bd]/45" />
                <Hotspot label="Surulere Canal" value="82%" className="left-[20%] top-[27%]" critical /><Hotspot label="Makoko Node A" value="34%" className="left-[55%] top-[64%]" /><Hotspot label="Lekki Channel 2" value="12%" className="right-[12%] top-[22%]" />
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <article className="rounded-2xl border border-[#dce7df] bg-white p-5 shadow-[0_7px_24px_rgba(26,70,49,.045)] sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#769085]"><Leaf className="size-3.5 text-[#1a8a61]" /> Mission control / why WasteLens exists</div>
            <h2 className="max-w-xl text-xl font-semibold leading-tight tracking-[-0.04em] text-[#17382a]">Stop plastic early. Understand it. Turn it into something useful.</h2>
            <p className="mt-3 text-sm leading-6 text-[#6b8378]">WasteLens serves residents, market traders and coastal communities affected by flooding and blocked drainage. TideTrap captures the litter before it reaches the lagoon; this dashboard makes every kilogram traceable.</p>
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#edf2ee] pt-4 text-center">
              <div><p className="text-lg font-semibold text-[#17382a]">2.5M</p><p className="text-[9px] uppercase tracking-wider text-[#8ba097]">Tons / year</p></div>
              <div><p className="text-lg font-semibold text-[#17382a]">&lt;12%</p><p className="text-[9px] uppercase tracking-wider text-[#8ba097]">Recycled</p></div>
              <div><p className="text-lg font-semibold text-[#17382a]">4</p><p className="text-[9px] uppercase tracking-wider text-[#8ba097]">SDGs served</p></div>
            </div>
          </article>
          <article className="rounded-2xl border border-[#dce7df] bg-white p-5 shadow-[0_7px_24px_rgba(26,70,49,.045)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><div><div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#769085]"><Factory className="size-3.5 text-[#1a8a61]" /> Material recovery ledger</div><h2 className="text-lg font-semibold tracking-[-0.03em] text-[#17382a]">From TideTrap capture to community product</h2></div><span className="rounded-full bg-[#f0f8d4] px-2.5 py-1 text-[10px] font-bold text-[#66871c]">CIRCULAR LOOP</span></div>
            <div className="grid gap-2 sm:grid-cols-2">
              {productRoutes.map((route) => <div key={route.type} className="rounded-xl border border-[#e1ebe4] bg-[#fbfdfb] p-3"><div className="flex items-start justify-between gap-2"><div><p className="text-xs font-bold text-[#305546]">{route.type} <span className="font-normal text-[#80958b]">/ {route.examples}</span></p><p className="mt-2 text-[11px] leading-4 text-[#71887d]">Sorted into <strong className="text-[#397154]">{route.becomes}</strong></p></div><span aria-hidden="true" className="text-lg font-semibold text-[#a9ca52]">{route.icon}</span></div></div>)}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#f3f8f2] px-3 py-2 text-[10px] font-semibold text-[#527363]"><CircleDot className="size-3 text-[#1a8a61]" /> Mixed and dirty plastics are routed to Micro-Factory #2 for paving tiles and roofing sheets.</div>
          </article>
        </section>

        <section className="mt-5 flex flex-col gap-4 rounded-2xl border border-[#d8e3dc] bg-[#123d2b] p-5 text-white shadow-[0_12px_32px_rgba(18,61,43,.14)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div><div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a7d9b5]"><Zap className="size-3.5" /> Demo control center</div><h2 className="text-xl font-semibold tracking-[-0.03em]">Ready to move today&apos;s recovered material?</h2><p className="mt-1 text-sm text-[#c2ddce]">Notify the next node and keep the circular supply chain moving.</p></div>
          <button onClick={() => setDispatchSent(true)} className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d7f36d] px-5 py-3 text-sm font-bold text-[#153622] shadow-[0_6px_18px_rgba(215,243,109,.18)] transition hover:bg-[#e5fb91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7f36d]"><Send className="size-4 transition-transform group-hover:translate-x-0.5" /> Simulate Automated Logistics Dispatch <ChevronRight className="size-4" /></button>
        </section>
        {dispatchSent && <div role="status" className="fixed bottom-5 right-5 z-10 flex max-w-[380px] items-start gap-3 rounded-2xl border border-[#a8dfbf] bg-white p-4 text-sm text-[#244e39] shadow-[0_14px_40px_rgba(18,61,43,.18)]"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#168b60]" /><div><p className="font-bold">SMS Dispatch Alert Sent</p><p className="mt-1 text-xs leading-5 text-[#6d8579]">Micro-Factory #2 team notified. Pickup payload scheduled: <strong className="text-[#385e4a]">7.46kg LDPE</strong>.</p></div><button aria-label="Dismiss dispatch notification" onClick={() => setDispatchSent(false)} className="ml-2 text-lg leading-none text-[#91a79b] hover:text-[#17382a]">×</button></div>}
      </div>
    </main>
  )
}

function RoutingRow({ icon, title, destination, output, tone }: { icon: React.ReactNode; title: string; destination: string; output: string; tone: 'green' | 'amber' }) {
  return <div className="flex items-center gap-3 rounded-xl border border-[#e1ebe4] bg-[#fbfdfb] p-3"><div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${tone === 'green' ? 'bg-[#e4f6eb] text-[#18845d]' : 'bg-[#fff0d8] text-[#bc7417]'}`}>{icon}</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-[#305546]">{title}</p><div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px] text-[#80958b]"><span>{destination}</span><ChevronRight className="size-3" /><span className="font-semibold text-[#4c7661]">{output}</span></div></div><CircleDot className={`size-3.5 shrink-0 ${tone === 'green' ? 'text-[#54b979]' : 'text-[#e4a23c]'}`} /></div>
}

function Hotspot({ label, value, className, critical = false }: { label: string; value: string; className: string; critical?: boolean }) {
  return <div className={`absolute ${className}`}><div className={`relative flex size-4 items-center justify-center rounded-full ${critical ? 'bg-[#d95142]' : 'bg-[#4f9c6a]'} shadow-[0_0_0_5px_rgba(217,81,66,.12)]`}><span className="size-1.5 rounded-full bg-white" /></div><div className="mt-1 whitespace-nowrap rounded-md border border-white/80 bg-white/85 px-1.5 py-1 text-[9px] font-bold text-[#3c5f4d] shadow-sm backdrop-blur-sm">{label} <span className={critical ? 'text-[#c44c40]' : 'text-[#4e9a69]'}>({value})</span></div></div>
}

