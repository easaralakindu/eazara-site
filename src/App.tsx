import { motion } from 'motion/react'
import {
  ArrowRight,
  Blocks,
  Braces,
  ChevronDown,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Lightbulb,
  Menu,
  Rocket,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'
import { useState } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
}

const capabilities = [
  {
    icon: Blocks,
    title: 'Product Development',
    text: 'From an early idea to a polished digital product — strategy, UX, engineering, iteration, and launch.',
  },
  {
    icon: Code2,
    title: 'Software Services',
    text: 'Web, mobile, and software experiences built around real business needs, not unnecessary complexity.',
  },
  {
    icon: Lightbulb,
    title: 'Technology Innovation',
    text: 'Exploring useful ways to apply emerging technology and turn experiments into things people can actually use.',
  },
]

const process = [
  ['01', 'Understand', 'Start with the problem, context, constraints, and the people who will use the product.'],
  ['02', 'Shape', 'Turn the idea into a clear product direction, experience, and technical approach.'],
  ['03', 'Build', 'Design and engineer the working product with fast feedback and careful iteration.'],
  ['04', 'Evolve', 'Measure what matters, improve what exists, and keep building only where it adds value.'],
]

function EazaraMark({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M11 16h31L30 28H11V16Z" fill="currentColor" />
      <path d="M11 31h24L24 42H11V31Z" fill="currentColor" opacity=".9" />
      <path d="M11 45h17l-7 7H11v-7Z" fill="currentColor" opacity=".75" />
      <path d="M40 15 54 48h-9l-3-8H30l5-7h5l-5-13 5-5Z" fill="currentColor" />
      <circle cx="43" cy="29" r="1.5" fill="#f0b24a" />
    </svg>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">
      <section id="home" className="relative min-h-screen overflow-hidden noise">
        {/* LION VIDEO */}
<div
  className="
    relative
    h-[55svh]
    min-h-[400px]
    w-full
    overflow-hidden
    bg-[#070707]

    md:absolute
    md:inset-0
    md:h-full
    md:min-h-0
  "
>
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="
      h-full
      w-full

      object-contain
      object-top

      md:object-cover
      md:object-[67%_center]
    "
  >
    <source src="/videos/eazara-lion.webm" type="video/webm" />
    <source src="/videos/eazara-lion.mp4" type="video/mp4" />
  </video>

  <div
    className="
      absolute
      inset-0
      bg-[linear-gradient(180deg,rgba(7,7,7,0)_52%,rgba(7,7,7,.12)_67%,rgba(7,7,7,.65)_85%,#070707_100%)]
      md:hidden
    "
  />
</div>

{/* DESKTOP OVERLAYS */}
<div
  className="
    absolute
    inset-0
    hidden
    bg-[linear-gradient(90deg,rgba(5,5,5,.95)_0%,rgba(5,5,5,.82)_31%,rgba(5,5,5,.34)_58%,rgba(5,5,5,.05)_78%)]
    md:block
  "
/>

<div
  className="
    absolute
    inset-0
    hidden
    bg-[linear-gradient(180deg,rgba(0,0,0,.16)_0%,rgba(0,0,0,.04)_55%,#070707_100%)]
    md:block
  "
/>

<div className="absolute inset-0 grid-lines opacity-25 md:opacity-40" />

        <nav className="absolute left-0 right-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-[-0.02em]">
            <EazaraMark />
            <span className="text-lg">Eazara</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#work">What we do</a>
            <a className="transition hover:text-white" href="#approach">Approach</a>
            <a className="transition hover:text-white" href="#origin">Origin</a>
          </div>

          <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white hover:text-black md:inline-flex">
            Start a conversation
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="absolute left-4 right-4 top-20 z-40 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-2xl md:hidden">
            {['About', 'What we do', 'Approach', 'Origin', 'Contact'].map((label) => {
              const ids: Record<string,string> = { About:'about','What we do':'work',Approach:'approach',Origin:'origin',Contact:'contact' }
              return <a key={label} onClick={() => setMobileOpen(false)} href={`#${ids[label]}`} className="block rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">{label}</a>
            })}
          </div>
        )}

        <div
  className="
    relative
    z-20
    mx-auto
    -mt-10
    max-w-7xl
    px-6
    pb-16

    md:mt-0
    md:flex
    md:min-h-[calc(100vh-90px)]
    md:items-center
    md:pb-20
    md:pt-10

    lg:px-10
  "
>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15, duration: .7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-white/60 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_14px_rgba(240,178,74,.9)]" />
              Product development · software services · innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .25, duration: .9, ease: [0.22,1,0.36,1] }}
              className="text-6xl font-semibold leading-[.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7.4rem]"
            >
              Eazara
              <span className="gold-text mt-3 block text-[.48em] font-medium leading-[1.03] tracking-[-0.035em]">
                Build what matters.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5, duration: .8 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
            >
              Eazara turns ideas, everyday problems, and ambitious possibilities into thoughtful digital products and software experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .65, duration: .8 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f2f2f2]">
                Explore Eazara <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/[0.08] hover:text-white">
                Our story <ChevronDown size={15} />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-[.24em] text-white/30 md:flex">
          Scroll to explore <ChevronDown size={13} />
        </div>
      </section>

      <section id="about" className="relative border-t border-white/[0.07] px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.85fr_1.15fr] md:gap-20">
          <motion.div {...fadeUp}>
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[.22em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> About Eazara
            </div>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Started with curiosity.<br />Built around solutions.</h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:pt-9">
            <p className="max-w-2xl text-lg leading-8 text-white/62">
              Eazara began from a simple habit: enjoying technology, experimenting with ideas, and building solutions for problems close to home. That curiosity grew into something broader — a company focused on creating useful products, helping others build software, and exploring better ways technology can serve people.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Human-first', 'Product-minded', 'Experimental', 'Built in Sri Lanka'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-white/55">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-6 py-16 md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-10 max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[.22em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> What we do
            </div>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">One company. Three ways to build.</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: .25 }}
                  transition={{ duration: .7, delay: i * .08 }}
                  className="liquid-glass group relative min-h-[330px] overflow-hidden rounded-3xl p-7"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/[.08] blur-3xl transition group-hover:bg-brand/[.13]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-16 text-2xl font-semibold tracking-[-.035em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/50">{item.text}</p>
                    <div className="mt-auto pt-8 text-xs uppercase tracking-[.2em] text-brand/80">Eazara / 0{i + 1}</div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[.22em] text-white/40">
                <Workflow size={13} /> How we work
              </div>
              <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Less theatre.<br />More useful progress.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/55 md:justify-self-end">
              The process stays clear: understand the problem, shape the right direction, build deliberately, then improve what proves valuable.
            </p>
          </motion.div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08]">
            {process.map(([num, title, text], i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className="grid gap-4 border-b border-white/[0.08] bg-white/[0.018] px-6 py-7 last:border-b-0 md:grid-cols-[90px_220px_1fr] md:items-center"
              >
                <span className="text-sm font-medium text-brand">{num}</span>
                <span className="text-xl font-medium tracking-[-.03em]">{title}</span>
                <span className="max-w-2xl text-sm leading-6 text-white/46">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/[0.07] py-5">
        <div className="marquee flex w-max items-center gap-12 whitespace-nowrap text-xs uppercase tracking-[.25em] text-white/28">
          {[...Array(2)].flatMap(() => ['Products', 'Software', 'Design', 'Engineering', 'AI', 'Experiments', 'Sri Lanka', 'Eazara']).map((x, i) => (
            <span key={`${x}-${i}`} className="flex items-center gap-12"><span>{x}</span><span className="h-1 w-1 rounded-full bg-brand/70" /></span>
          ))}
        </div>
      </section>

      <section id="origin" className="px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div {...fadeUp} className="liquid-glass relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-12">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand/[.08] blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[.22em] text-white/40">
                <Globe2 size={14} /> Our origin
              </div>
              <div className="mt-12 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-5xl">
                Built from Sri Lanka.<br />Designed for wherever the idea can go.
              </div>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/52">
                Eazara is proud of where it started. The ambition is not to imitate what already exists, but to build original work that can stand confidently anywhere.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                <span aria-hidden="true" className="text-lg">🇱🇰</span> Sri Lanka
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="liquid-glass rounded-3xl p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
              <Sparkles size={21} />
            </div>
            <div className="mt-12 text-xs uppercase tracking-[.22em] text-white/35">Founder</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Easara Lakindu</h3>
            <p className="mt-5 text-sm leading-6 text-white/50">
              Eazara grew from personal experiments, curiosity, and the desire to solve real problems. The company keeps that same builder mindset at its core.
            </p>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/35">
              <Cpu size={14} /> Founder-led product thinking
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/[0.08] bg-[#0b0b0b] p-8 sm:p-10 md:p-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[.22em] text-white/35">Built to stay flexible</div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em]">Not a catalogue of apps.<br />A company that keeps building.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                [Rocket, 'Launch'],
                [Braces, 'Engineer'],
                [Layers3, 'Design'],
                [Cpu, 'Experiment'],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Rocket
                return (
                  <div key={label as string} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <I size={18} className="text-white/65" />
                    <div className="mt-8 text-sm font-medium">{label as string}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-10 lg:px-10">
        <motion.div {...fadeUp} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-8 py-16 text-center sm:px-12 md:py-24">
          <div className="absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-brand/[.09] blur-[100px]" />
          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <EazaraMark className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl md:text-6xl">Have something worth building?</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              Bring the problem, the rough idea, or the ambitious version. Eazara can help shape what comes next.
            </p>
            <a href="mailto:hello@eazara.com" className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f3f3f3]">
              hello@eazara.com <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.07] pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2"><EazaraMark className="h-5 w-5" /> Eazara</div>
          <div>Product development · software services · technology innovation</div>
          <div>© 2026 Eazara</div>
        </div>
      </footer>
    </main>
  )
}

export default App
