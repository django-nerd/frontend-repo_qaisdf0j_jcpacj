import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Crown, HeartPulse, MapPin, Medal, PhoneCall, ShieldCheck, Sparkles, Star, Stethoscope, Tooth, Users, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'Главная', href: '#home' },
    { label: 'Услуги', href: '#services' },
    { label: 'Врачи', href: '#doctors' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Технологии', href: '#tech' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 mb-3 rounded-2xl backdrop-blur bg-white/60 shadow-lg ring-1 ring-black/5">
          <div className="h-16 px-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/25" />
              <div className="text-gray-900 font-semibold tracking-tight">
                Blue Dent Premium
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {items.map((i) => (
                <a key={i.href} href={i.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  {i.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black transition-colors">
                <PhoneCall className="h-4 w-4" /> Записаться
              </a>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white text-gray-900 shadow">
              {open ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-4 py-3 grid gap-2">
                {items.map((i) => (
                  <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-gray-900">
                    {i.label}
                  </a>
                ))}
                <a href="#booking" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl">
                  <PhoneCall className="h-4 w-4" /> Записаться
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,.25),rgba(255,255,255,0)_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,.25),rgba(255,255,255,0)_40%)]" />
      <div className="absolute inset-x-0 -top-36 -z-10 h-[400px] blur-3xl opacity-60 bg-gradient-to-b from-indigo-300/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs text-gray-700 mb-5">
              <Crown className="h-3.5 w-3.5 text-indigo-600" /> Премиальная стоматология нового поколения
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Улыбка класса люкс с заботой мирового уровня
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-7">
              Индивидуальные планы лечения, безупречная эстетика и абсолютный комфорт. Технологии ведущих клиник мира и команда признанных специалистов.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 transition-colors">
                Записаться на консультацию <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-medium ring-1 ring-black/5 hover:ring-gray-300 transition">
                Посмотреть услуги
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
              {[
                { icon: <ShieldCheck className="h-4 w-4 text-indigo-600" />, text: 'Гарантия качества' },
                { icon: <Medal className="h-4 w-4 text-indigo-600" />, text: 'Ведущие специалисты' },
                { icon: <HeartPulse className="h-4 w-4 text-indigo-600" />, text: 'Комфорт без боли' },
                { icon: <Sparkles className="h-4 w-4 text-indigo-600" />, text: 'Эстетика и натуральность' },
              ].map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2 ring-1 ring-black/5">
                  {f.icon} <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-indigo-500 via-blue-500 to-fuchsia-500 p-1 shadow-xl shadow-indigo-500/20">
              <div className="h-full w-full rounded-[1.75rem] bg-white overflow-hidden">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl p-4 ring-1 ring-black/5 shadow">
              <div className="flex items-center gap-3">
                <Tooth className="h-6 w-6 text-indigo-600" />
                <div className="text-sm">
                  <div className="font-semibold">Digital Smile Design</div>
                  <div className="text-gray-600">Цифровое планирование улыбки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs text-gray-700">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600 leading-7">{subtitle}</p>}
    </div>
  )
}

function Services() {
  const services = [
    { icon: <Tooth className="h-6 w-6" />, title: 'Терапия', desc: 'Лечение кариеса с микроскопом, сохранение тканей зуба' },
    { icon: <Crown className="h-6 w-6" />, title: 'Ортопедия', desc: 'Коронки и виниры премиум-класса, идеальная эстетика' },
    { icon: <Stethoscope className="h-6 w-6" />, title: 'Имплантация', desc: 'Надежные системы, навигационная хирургия, без боли' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Профилактика', desc: 'Гигиена, отбеливание, профилактические программы' },
    { icon: <Users className="h-6 w-6" />, title: 'Ортодонтия', desc: 'Элайнеры и брекеты, цифровое планирование' },
    { icon: <HeartPulse className="h-6 w-6" />, title: 'Пародонтология', desc: 'Лечение десен, микрофлора, регенерация тканей' },
  ]
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Комплексный подход"
          title="Все ключевые направления в одном месте"
          subtitle="Мы формируем идеальную улыбку с заботой о здоровье, функции и эстетике"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white grid place-items-center shadow-lg shadow-indigo-600/30">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 leading-7">{s.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900">
                Подробнее <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Doctors() {
  const doctors = [
    { name: 'Д-р Анна Петрова', role: 'Ортопед-стоматолог', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop', badges: ['Виниры', 'Эстетика'] },
    { name: 'Д-р Михаил Орлов', role: 'Хирург-имплантолог', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop', badges: ['Имплантация', 'Седация'] },
    { name: 'Д-р Ирина Соколова', role: 'Ортодонт', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop', badges: ['Элайнеры', 'Дети и взрослые'] },
  ]
  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Команда экспертов"
          title="Врачи международного уровня"
          subtitle="Каждый специалист имеет подтвержденные сертификаты и многолетний опыт"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <div key={d.name} className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100" style={{ backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{d.name}</h3>
                <p className="text-gray-600">{d.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.badges.map((b) => (
                    <span key={b} className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1512070800544-c8b8e3b11cd1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1600&auto=format&fit=crop'
  ]
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Эстетика пространства"
          title="Клиника, где хочется оставаться"
          subtitle="Уютные кабинеты, приватность и ощущение пятизвездочного отеля"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5">
              <img src={src} alt="clinic" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Гигиена PRO', price: '9 900 ₽', features: ['Профессиональная чистка', 'Полировка и реминерализация', 'Рекомендации по уходу'] },
    { name: 'Эстетические виниры', price: 'от 39 000 ₽', features: ['Фотопротокол и DSD', 'Временные виниры', 'Керамика премиум класса'] },
    { name: 'Имплантация', price: 'от 59 000 ₽', features: ['Планирование по КТ', 'Навигационная хирургия', 'Гарантия на систему'] },
  ]
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Прозрачные цены"
          title="Инвестиция в уверенную улыбку"
          subtitle="Точная смета формируется после консультации и цифровой диагностики"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <Crown className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-600" /> {f}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors">
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Technology() {
  const items = [
    { title: 'Микроскопы Carl Zeiss', desc: 'Точность до микрона и бережное лечение' },
    { title: '3D-диагностика (КТ)', desc: 'Безопасность и предсказуемость результата' },
    { title: 'Интраоральные сканеры', desc: 'Цифровые слепки вместо неудобных масс' },
    { title: 'Седация', desc: 'Лечение во сне под наблюдением анестезиолога' },
  ]
  return (
    <section id="tech" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Точность и комфорт"
          title="Технологии мировых лидеров"
          subtitle="Оборудование и протоколы, которые вы встретите в лучших клиниках Европы и США"
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 text-indigo-600" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t.title}</h4>
                <p className="text-gray-600 mt-1">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const data = [
    { name: 'Александра', text: 'Лучший опыт в моей жизни: без боли, заботливо и невероятно красиво. Команда — профи.' },
    { name: 'Илья', text: 'Сделали импланты и коронки — все идеально по прикусу и цвету. Комфорт на максимуме.' },
    { name: 'Марина', text: 'Виниры — это восторг. Натурально и эстетично, как я мечтала. Спасибо клинике!' },
  ]
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Опыт пациентов"
          title="Нас рекомендуют"
          subtitle="Мы ценим доверие и строим долгие отношения"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-gray-700 leading-7">“{t.text}”</p>
              <div className="mt-4 text-sm text-gray-500">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { q: 'Больно ли лечить зубы?', a: 'Мы используем современную анестезию и протоколы комфорта. Возможна седация под наблюдением врача-анестезиолога.' },
    { q: 'Можно ли сделать все за один визит?', a: 'Да, мы планируем лечение так, чтобы сократить визиты. Предусмотрены длительные комплексные приемы с полным сервисом.' },
    { q: 'Какие гарантии вы даете?', a: 'Предоставляем официальные гарантии на работы и материалы. Все условия прописываются в вашем плане лечения.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle
          eyebrow="Вопросы и ответы"
          title="Часто спрашивают"
        />
        <div className="divide-y divide-gray-200 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
          {items.map((i, idx) => (
            <button key={i.q} onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full text-left px-6 py-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-semibold text-gray-900">{i.q}</div>
                  {open === idx && <p className="mt-2 text-gray-600 leading-7">{i.a}</p>}
                </div>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactBooking() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
          <SectionTitle eyebrow="Связаться" title="Контакты и локация" />
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700"><PhoneCall className="h-5 w-5 text-indigo-600" /> +7 (900) 000-00-00</div>
            <div className="flex items-center gap-3 text-gray-700"><MapPin className="h-5 w-5 text-indigo-600" /> Москва, Премиум-проспект, 10</div>
            <div className="mt-4 h-56 rounded-xl bg-gradient-to-br from-indigo-200 to-fuchsia-200 grid place-items-center text-indigo-700">
              Интерактивная карта
            </div>
          </div>
        </div>
        <div id="booking" className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
          <SectionTitle eyebrow="Онлайн-запись" title="Записаться на прием" />
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="col-span-1 sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Имя" />
            <input className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Телефон" />
            <input className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" />
            <select className="col-span-1 sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Выберите услугу</option>
              <option>Консультация</option>
              <option>Гигиена</option>
              <option>Виниры</option>
              <option>Имплантация</option>
              <option>Ортодонтия</option>
            </select>
            <textarea rows={4} className="col-span-1 sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Комментарий" />
            <button type="button" className="col-span-1 sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-700 transition-colors">
              Отправить заявку <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">Отправляя форму, вы соглашаетесь с обработкой персональных данных</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500" />
            <div className="text-gray-900 font-semibold">Blue Dent Premium</div>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Все права защищены</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Gallery />
        <Pricing />
        <Technology />
        <Testimonials />
        <FAQ />
        <ContactBooking />
      </main>
      <Footer />
      <a href="#booking" className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-700">
        <PhoneCall className="h-4 w-4" /> Записаться
      </a>
    </div>
  )
}
