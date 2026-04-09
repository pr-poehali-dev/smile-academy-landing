import { useState } from "react";
import Icon from "@/components/ui/icon";

const CLINIC_IMAGE = "https://cdn.poehali.dev/projects/925c1e3b-a990-4c0b-a8c2-f47b00b7374d/files/ada023b1-7ca7-4b13-a071-915590397877.jpg";
const DOCTOR_IMAGE = "https://cdn.poehali.dev/projects/925c1e3b-a990-4c0b-a8c2-f47b00b7374d/files/de6e2a4b-1235-4814-873b-e5ccb1f194fe.jpg";

const services = [
  { icon: "Sparkles", title: "Профессиональная чистка", desc: "Ультразвуковая чистка и Air Flow. Удаление зубного камня и налёта", price: "от 3 500 ₽" },
  { icon: "Smile", title: "Лечение кариеса", desc: "Безболезненное лечение с применением современных материалов", price: "от 4 000 ₽" },
  { icon: "Zap", title: "Отбеливание зубов", desc: "Система ZOOM 4. Осветление на 6–12 тонов за одну процедуру", price: "от 15 000 ₽" },
  { icon: "Shield", title: "Имплантация", desc: "Импланты Nobel Biocare, Straumann. Пожизненная гарантия", price: "от 45 000 ₽" },
  { icon: "Star", title: "Виниры и люминиры", desc: "Голливудская улыбка. Тонкие керамические накладки без шлифовки", price: "от 18 000 ₽" },
  { icon: "Heart", title: "Лечение дёсен", desc: "Диагностика и лечение пародонтита и гингивита всех стадий", price: "от 2 500 ₽" },
  { icon: "Baby", title: "Детская стоматология", desc: "Лечение молочных зубов. Весёлая атмосфера без страха", price: "от 1 500 ₽" },
  { icon: "Award", title: "Протезирование", desc: "Коронки, мосты, съёмные протезы. Гарантия 5 лет", price: "от 12 000 ₽" },
];

const doctors = [
  { name: "Анна Сергеевна Волкова", spec: "Главный врач, имплантолог", exp: "15 лет опыта", img: DOCTOR_IMAGE },
  { name: "Дмитрий Иванов", spec: "Ортодонт, брекет-системы", exp: "10 лет опыта", img: DOCTOR_IMAGE },
  { name: "Мария Петрова", spec: "Детский стоматолог", exp: "8 лет опыта", img: DOCTOR_IMAGE },
  { name: "Алексей Кузнецов", spec: "Хирург-имплантолог", exp: "12 лет опыта", img: DOCTOR_IMAGE },
];

const reviews = [
  { name: "Ольга К.", rating: 5, text: "Прекрасная клиника! Поставила виниры — результат превзошёл все ожидания. Врачи внимательные, всё объяснили.", date: "Март 2025" },
  { name: "Иван М.", rating: 5, text: "Впервые пошёл к стоматологу без страха. Безболезненно вылечили кариес, комфортная атмосфера.", date: "Февраль 2025" },
  { name: "Светлана Р.", rating: 5, text: "Привела ребёнка 6 лет — врач нашла подход мгновенно. Теперь сын сам просится на чистку зубов!", date: "Апрель 2025" },
  { name: "Андрей Б.", rating: 5, text: "Сделал имплант. Долго тянул, зря! Всё прошло быстро и без боли. Отличный результат.", date: "Январь 2025" },
];

const faqs = [
  { q: "Больно ли лечить зубы?", a: "Нет. Мы используем современную анестезию — укол практически не ощущается. 99% пациентов не чувствуют боли во время процедур." },
  { q: "Как записаться на приём?", a: "Заполните форму онлайн-записи на сайте, позвоните по телефону или напишите в WhatsApp. Ответим в течение 15 минут." },
  { q: "Принимаете ли ДМС?", a: "Да, мы работаем с большинством страховых компаний. Уточните наличие вашего полиса по телефону." },
  { q: "Есть ли скидки и акции?", a: "Да! Действует программа лояльности — скидка 10% с карты постоянного клиента. Следите за акциями на сайте." },
  { q: "Сколько длится приём?", a: "Первичная консультация — 30–40 минут. Лечебные процедуры — от 1 до 2 часов в зависимости от сложности." },
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const galleryImages = [CLINIC_IMAGE, CLINIC_IMAGE, CLINIC_IMAGE, CLINIC_IMAGE, CLINIC_IMAGE, CLINIC_IMAGE];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDone, setBookingDone] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "services", label: "Услуги" },
    { id: "team", label: "Врачи" },
    { id: "reviews", label: "Отзывы" },
    { id: "gallery", label: "Галерея" },
    { id: "booking", label: "Запись" },
    { id: "faq", label: "FAQ" },
    { id: "contacts", label: "Контакты" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    } else {
      setBookingDone(true);
    }
  };

  const resetBooking = () => {
    setBookingDone(false);
    setBookingStep(1);
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
    setFormName("");
    setFormPhone("");
  };

  return (
    <div className="min-h-screen font-golos">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full hero-gradient flex items-center justify-center">
              <Icon name="Smile" size={18} className="text-white" />
            </div>
            <span className="font-bold text-clinic-navy text-lg tracking-tight">
              Академия <span className="text-gradient">улыбки</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-slate-600 hover:text-clinic-blue font-medium transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+74951234567" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-clinic-blue">
              <Icon name="Phone" size={15} />
              +7 (495) 123-45-67
            </a>
            <button
              onClick={() => scrollTo("booking")}
              className="bg-clinic-blue text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-clinic-blue-dark transition-colors"
            >
              Записаться
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} className="text-clinic-navy" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-clinic-blue/10 px-4 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-sm text-slate-700 font-medium py-1">
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-clinic-teal-light blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-soft" />
              Принимаем пациентов ежедневно
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Академия<br />
              <span className="italic" style={{ color: "#a8f0ee" }}>улыбки</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Современная стоматологическая клиника с 15-летним опытом. Безболезненное лечение, имплантация, эстетика улыбки.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("booking")}
                className="bg-white text-clinic-navy font-bold px-8 py-4 rounded-full hover:bg-clinic-blue-light transition-all text-base shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                Записаться онлайн
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all text-base"
              >
                Наши услуги
              </button>
            </div>

            <div className="flex gap-8 mt-14">
              {[
                { n: "15+", l: "лет работы" },
                { n: "12 000+", l: "пациентов" },
                { n: "98%", l: "довольных" },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.n}</div>
                  <div className="text-white/60 text-sm mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in animate-delay-300 hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={CLINIC_IMAGE} alt="Клиника" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clinic-blue-light flex items-center justify-center">
                  <Icon name="Star" size={18} className="text-clinic-blue-dark" />
                </div>
                <div>
                  <div className="text-sm font-bold text-clinic-navy">Рейтинг 4.9</div>
                  <div className="text-xs text-slate-500">258 отзывов</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheck" size={20} className="text-clinic-blue" />
                <div className="text-sm font-semibold text-clinic-navy">Лицензия МЗ РФ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-blue text-sm font-semibold uppercase tracking-widest">Что мы лечим</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-clinic-navy mt-2 mb-4">
              Услуги и стоимость
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Полный спектр стоматологических услуг по прозрачным ценам
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={i} className="bg-clinic-gray-soft border border-clinic-blue/10 rounded-2xl p-6 card-hover cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-clinic-blue-light to-clinic-teal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon as "Smile"} size={22} className="text-clinic-blue-dark" fallback="Star" />
                </div>
                <h3 className="font-semibold text-clinic-navy text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-clinic-blue font-bold text-sm">{s.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 text-clinic-blue font-semibold border-2 border-clinic-blue rounded-full px-8 py-3 hover:bg-clinic-blue hover:text-white transition-all">
              Полный прайс-лист
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-padding bg-clinic-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-blue text-sm font-semibold uppercase tracking-widest">Профессионалы</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-clinic-navy mt-2 mb-4">
              Наша команда
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Врачи с международными сертификатами и многолетним опытом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((d, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {d.exp}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-clinic-navy text-sm leading-snug mb-1">{d.name}</h3>
                  <p className="text-clinic-blue text-xs font-medium mb-4">{d.spec}</p>
                  <button
                    onClick={() => { setSelectedDoctor(d.name); scrollTo("booking"); }}
                    className="w-full bg-clinic-blue-light text-clinic-blue-dark text-sm font-semibold py-2 rounded-xl hover:bg-clinic-blue hover:text-white transition-all"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-blue text-sm font-semibold uppercase tracking-widest">Пациенты о нас</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-clinic-navy mt-2 mb-4">
              Отзывы и рейтинги
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Icon key={s} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-clinic-navy text-xl">4.9</span>
              <span className="text-slate-400 text-sm">/ 258 отзывов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-clinic-gray-soft rounded-2xl p-6 border border-clinic-blue/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clinic-blue to-clinic-blue-dark flex items-center justify-center text-white font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-clinic-navy text-sm">{r.name}</div>
                      <div className="text-slate-400 text-xs">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {Array(r.rating).fill(0).map((_, j) => (
                      <Icon key={j} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 text-clinic-blue font-semibold text-sm hover:underline">
              Читать все отзывы на Яндекс.Картах
              <Icon name="ExternalLink" size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-padding bg-clinic-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-teal-light text-sm font-semibold uppercase tracking-widest">Наша клиника</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mt-2 mb-4">
              Фотографии кабинетов
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Современное оборудование и комфортная атмосфера для ваших процедур
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl card-hover cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img
                  src={img}
                  alt={`Фото ${i + 1}`}
                  className={`w-full object-cover ${i === 0 ? "h-64 md:h-full" : "h-40 md:h-48"}`}
                />
                <div className="absolute inset-0 bg-clinic-navy/20 hover:bg-transparent transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-clinic-blue text-sm font-semibold uppercase tracking-widest">Онлайн-запись</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-clinic-navy mt-2 mb-4">
              Запишитесь к врачу
            </h2>
            <p className="text-slate-500 text-lg">Удобная запись за 2 минуты. Подтверждение придёт на телефон</p>
          </div>

          {bookingDone ? (
            <div className="text-center py-16 bg-clinic-blue-light rounded-3xl border border-clinic-blue/20">
              <div className="w-20 h-20 rounded-full bg-clinic-blue flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-clinic-navy mb-3">Запись подтверждена!</h3>
              <p className="text-slate-600 mb-2">Ждём вас в назначенное время.</p>
              <p className="text-slate-500 text-sm">Мы позвоним за день для подтверждения визита.</p>
              <button
                onClick={resetBooking}
                className="mt-8 bg-clinic-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-clinic-blue-dark transition-colors"
              >
                Записаться ещё раз
              </button>
            </div>
          ) : (
            <div className="bg-clinic-gray-soft rounded-3xl border border-clinic-blue/10 overflow-hidden">
              <div className="flex border-b border-clinic-blue/10">
                {["Выбор врача", "Дата и время", "Ваши данные"].map((step, i) => (
                  <div
                    key={i}
                    className={`flex-1 py-4 text-center text-sm font-semibold transition-all ${bookingStep === i + 1
                      ? "bg-clinic-blue text-white"
                      : bookingStep > i + 1
                        ? "bg-clinic-blue-light text-clinic-blue-dark"
                        : "text-slate-400"
                    }`}
                  >
                    <span className="hidden sm:inline">{step}</span>
                    <span className="sm:hidden">{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="p-8">
                {bookingStep === 1 && (
                  <div className="animate-fade-in">
                    <h3 className="font-semibold text-clinic-navy text-lg mb-6">Выберите врача или направление</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {doctors.map(d => (
                        <button
                          key={d.name}
                          onClick={() => setSelectedDoctor(d.name)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${selectedDoctor === d.name
                            ? "border-clinic-blue bg-clinic-blue-light"
                            : "border-slate-200 bg-white hover:border-clinic-blue/40"
                          }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clinic-blue to-clinic-blue-dark flex items-center justify-center text-white font-bold flex-shrink-0">
                            {d.name[0]}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-clinic-navy">{d.name}</div>
                            <div className="text-xs text-slate-400">{d.spec}</div>
                          </div>
                          {selectedDoctor === d.name && <Icon name="CheckCircle" size={18} className="text-clinic-blue ml-auto flex-shrink-0" />}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={!selectedDoctor}
                      className="w-full bg-clinic-blue text-white font-bold py-4 rounded-2xl hover:bg-clinic-blue-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Далее — выбрать время
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="animate-fade-in">
                    <h3 className="font-semibold text-clinic-navy text-lg mb-6">Выберите дату и время</h3>
                    <div className="mb-6">
                      <label className="text-sm font-medium text-slate-600 block mb-2">Дата приёма</label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-clinic-navy focus:border-clinic-blue outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="mb-8">
                      <label className="text-sm font-medium text-slate-600 block mb-3">Время приёма</label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map(t => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${selectedTime === t
                              ? "bg-clinic-blue text-white shadow-md"
                              : "bg-white border-2 border-slate-200 text-slate-600 hover:border-clinic-blue"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setBookingStep(1)}
                        className="flex-1 border-2 border-slate-200 text-slate-600 font-semibold py-4 rounded-2xl hover:border-clinic-blue transition-colors"
                      >
                        Назад
                      </button>
                      <button
                        onClick={handleBooking}
                        disabled={!selectedDate || !selectedTime}
                        className="flex-[2] bg-clinic-blue text-white font-bold py-4 rounded-2xl hover:bg-clinic-blue-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Далее
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="animate-fade-in">
                    <h3 className="font-semibold text-clinic-navy text-lg mb-2">Ваши данные</h3>
                    <div className="bg-clinic-blue-light rounded-xl p-4 mb-6 text-sm text-clinic-blue-dark">
                      <strong>{selectedDoctor}</strong> · {selectedDate} в {selectedTime}
                    </div>
                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Ваше имя *</label>
                        <input
                          type="text"
                          placeholder="Иван Петров"
                          value={formName}
                          onChange={e => setFormName(e.target.value)}
                          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-clinic-navy focus:border-clinic-blue outline-none transition-colors bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Телефон *</label>
                        <input
                          type="tel"
                          placeholder="+7 (999) 000-00-00"
                          value={formPhone}
                          onChange={e => setFormPhone(e.target.value)}
                          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-clinic-navy focus:border-clinic-blue outline-none transition-colors bg-white"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setBookingStep(2)}
                        className="flex-1 border-2 border-slate-200 text-slate-600 font-semibold py-4 rounded-2xl hover:border-clinic-blue transition-colors"
                      >
                        Назад
                      </button>
                      <button
                        onClick={handleBooking}
                        disabled={!formName || !formPhone}
                        className="flex-[2] bg-clinic-blue text-white font-bold py-4 rounded-2xl hover:bg-clinic-blue-dark transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Подтвердить запись
                      </button>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-clinic-gray-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-blue text-sm font-semibold uppercase tracking-widest">Вопрос — ответ</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-clinic-navy mt-2 mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-clinic-blue/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-clinic-blue-light/40 transition-colors"
                >
                  <span className="font-semibold text-clinic-navy text-sm md:text-base pr-4">{f.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className={`flex-shrink-0 transition-transform ${openFaq === i ? "text-clinic-blue" : "text-slate-400"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-clinic-blue/10 pt-4 animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-clinic-teal-light text-sm font-semibold uppercase tracking-widest">Как нас найти</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mt-2 mb-4">
              Адрес и контакты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Тверская, д. 15", "Москва, м. Тверская"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "Ежедневно 9:00 — 21:00"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 9:00 — 21:00", "Сб–Вс: 10:00 — 18:00"] },
            ].map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                  <Icon name={c.icon as "MapPin"} size={22} className="text-white" fallback="Info" />
                </div>
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                {c.lines.map((l, j) => (
                  <p key={j} className="text-white/70 text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden bg-white/10 h-56 flex items-center justify-center border border-white/20">
            <div className="text-center text-white/60">
              <Icon name="Map" size={40} className="mx-auto mb-2 text-white/40" />
              <p className="text-sm">Карта будет здесь</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollTo("booking")}
              className="bg-white text-clinic-navy font-bold px-12 py-4 rounded-full text-lg hover:bg-clinic-blue-light transition-all shadow-xl hover:scale-105 transform duration-200"
            >
              Записаться к врачу
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-clinic-navy py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
              <Icon name="Smile" size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-base">Академия улыбки</span>
          </div>
          <p className="text-white/40 text-sm text-center">
            © 2025 Академия улыбки. Лицензия № ЛО-77-01-123456
          </p>
          <div className="flex gap-4">
            {["Политика конфиденциальности", "Оферта"].map(l => (
              <button key={l} className="text-white/40 text-xs hover:text-white/70 transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
