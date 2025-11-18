
import React, { useRef, useEffect } from 'react';

const Header: React.FC<{ onNavClick: (id: string) => void }> = ({ onNavClick }) => (
  <header className="flex items-center justify-between gap-3 py-4">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-slate-900 text-2xl shrink-0">
        Dg
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">DigammaOS</h1>
        <p className="text-sm text-slate-400">Лёгкая и настраиваемая Linux-система для рабочих и создателей</p>
      </div>
    </div>
    <nav className="hidden md:flex items-center gap-2">
      <button onClick={() => onNavClick('features')} className="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors">Особенности</button>
      <button onClick={() => onNavClick('install')} className="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors">Установка</button>
    </nav>
  </header>
);

const FeatureCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
    <strong className="text-white">{title}</strong>
    <div className="text-sm text-slate-400 mt-1">{description}</div>
  </div>
);

const ScreenshotPlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex-1 h-32 md:h-40 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 font-semibold border border-slate-700">
    {text}
  </div>
);

const App: React.FC = () => {
  const sections = {
    features: useRef<HTMLElement>(null),
    install: useRef<HTMLElement>(null),
    gettingStarted: useRef<HTMLElement>(null),
  };

  const scrollToSection = (id: 'features' | 'install' | 'gettingStarted') => {
    sections[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-gray-900 text-slate-300 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header onNavClick={scrollToSection} />

        <main className="mt-8">
          <section className="grid lg:grid-cols-2 gap-7 items-start">
            <div className="bg-slate-800/50 p-6 rounded-2xl shadow-2xl border border-slate-700">
              <h2 className="text-3xl font-bold text-white">Стабильность. Скорость. Контроль.</h2>
              <p className="text-slate-400 mt-3">DigammaOS — это дистрибутив Linux, ориентированный на минимализм, конфиденциальность и производительность. Подходит как для ноутбуков старых моделей, так и для современных рабочих станций.</p>
              <div className="flex gap-4 mt-6">
                 <button onClick={() => scrollToSection('gettingStarted')} className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/50">
                    Начать
                </button>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <FeatureCard title="Ядро" description="Оптимизированное ядро для низкой латентности" />
                <FeatureCard title="Пакеты" description="Современные менеджеры пакетов" />
                <FeatureCard title="Приватность" description="Минимальная телеметрия и прозрачность" />
              </div>
            </div>

            <aside className="bg-slate-800/50 p-6 rounded-2xl shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white">Скриншоты</h3>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex gap-3">
                  <ScreenshotPlaceholder text="Рабочий стол" />
                  <ScreenshotPlaceholder text="Меню приложений" />
                </div>
                <div className="flex gap-3">
                  <ScreenshotPlaceholder text="Центр настроек" />
                  <ScreenshotPlaceholder text="Терминал" />
                </div>
              </div>
            </aside>
          </section>

          <section ref={sections.features} className="bg-slate-800/50 p-6 rounded-2xl shadow-xl mt-7 border border-slate-700">
            <h2 className="text-2xl font-bold text-white">Что внутри DigammaOS</h2>
            <div className="grid md:grid-cols-3 gap-5 mt-4">
              <div className="bg-slate-900/30 p-4 rounded-xl">
                <h3 className="font-semibold text-white">Лёгкая среда</h3>
                <p className="text-sm text-slate-400 mt-1">Небольшое потребление ресурсов, плавная анимация и быстрая загрузка с минимальным набором фоновых сервисов.</p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded-xl">
                <h3 className="font-semibold text-white">Современные инструменты</h3>
                <p className="text-sm text-slate-400 mt-1">Поддержка Flatpak, Snap (по желанию), а также стандартных менеджеров пакетов для разработчиков.</p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded-xl">
                <h3 className="font-semibold text-white">Безопасность</h3>
                <p className="text-sm text-slate-400 mt-1">Регулярные обновления безопасности и политика минимальной телеметрии.</p>
              </div>
            </div>
          </section>

          <section ref={sections.gettingStarted} className="mt-7 grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl shadow-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white">Быстрый старт</h3>
              <ol className="list-decimal pl-5 mt-4 space-y-2 text-slate-400">
                <li>Ознакомьтесь с системными требованиями и подготовьте загрузочный носитель.</li>
                <li>Проверьте контрольную сумму (SHA256) для проверки целостности образа.</li>
                <li>Запишите образ на флешку и загрузитесь с неё.</li>
                <li>Следуйте шагам установщика: разделы, пользователь, пароль.</li>
              </ol>
              <p className="text-sm text-indigo-400 mt-4"><strong>Совет:</strong> перед установкой сделайте резервную копию важных данных.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl shadow-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white">Примеры команд</h3>
              <p className="text-slate-400 mt-2 text-sm">Примеры команд для проверки образа и записи на USB (замените <code>/path/to/digamma.iso</code> и <code>/dev/sdX</code> на свои значения):</p>
              <pre className="bg-black/30 p-4 rounded-lg text-cyan-300 overflow-x-auto text-sm mt-4 whitespace-pre-wrap font-mono">
{`sha256sum /path/to/digamma.iso
# проверка контрольной суммы

sudo dd if=/path/to/digamma.iso of=/dev/sdX bs=4M status=progress && sync
# Осторожно: команда перезапишет диск`}
              </pre>
            </div>
          </section>

          <section ref={sections.install} className="bg-slate-800/50 p-6 rounded-2xl shadow-xl mt-7 border border-slate-700">
            <h2 className="text-2xl font-bold text-white">Инструкция по установке</h2>
            <p className="text-slate-400 mt-2">Простой пошаговый план для установки DigammaOS.</p>
            <ol className="list-decimal pl-5 mt-4 space-y-2 text-slate-400">
              <li>Подготовьте флеш-накопитель (4GB+).</li>
              <li>Подготовьте загрузочный образ, используя официальное руководство, и проверьте его целостность (SHA256).</li>
              <li>Запишите образ на флешку.</li>
              <li>Загрузитесь с флешки и выберите "Install DigammaOS".</li>
              <li>Следуйте мастеру установки (разметка, пользователи, пакеты).</li>
              <li>Перезагрузите систему и удалите флешку.</li>
            </ol>
          </section>

          <div className="mt-7 grid md:grid-cols-2 gap-6">
            <section className="bg-slate-800/50 p-6 rounded-2xl shadow-xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white">Поддерживаемые платформы</h2>
              <p className="text-slate-400 mt-2">DigammaOS тестируется на широком диапазоне оборудования. Приведённые ниже — ориентировочные рекомендации.</p>
              <ul className="list-disc pl-5 mt-4 space-y-1 text-slate-400">
                <li><span className="font-semibold text-white">CPU:</span> x86_64 (Intel/AMD)</li>
                <li><span className="font-semibold text-white">RAM:</span> 2 ГБ (рекомендуется 4 ГБ для плавной работы)</li>
                <li><span className="font-semibold text-white">Storage:</span> 20 ГБ свободного места</li>
              </ul>
            </section>
            
            <section className="bg-slate-800/50 p-6 rounded-2xl shadow-xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white">FAQ</h2>
              <div className="space-y-3 mt-4">
                <details>
                  <summary className="font-semibold text-white cursor-pointer">Можно ли установить рядом с Windows?</summary>
                  <div className="mt-2 text-slate-400 text-sm pl-4 border-l-2 border-slate-600">Да — поддерживается dual-boot. При установке выберите ручную разметку и убедитесь, что у вас есть резервная копия.</div>
                </details>
                <details>
                  <summary className="font-semibold text-white cursor-pointer">Есть ли поддержка драйверов NVIDIA?</summary>
                  <div className="mt-2 text-slate-400 text-sm pl-4 border-l-2 border-slate-600">Да, проприетарные драйверы доступны в репозитории, но по умолчанию используется открытый драйвер Nouveau.</div>
                </details>
              </div>
            </section>
          </div>

          <section className="bg-slate-800/50 p-6 rounded-2xl shadow-xl mt-7 border border-slate-700">
            <h2 className="text-2xl font-bold text-white">Контакты и обратная связь</h2>
            <p className="text-slate-400 mt-2">Наши каналы: почта, форум и репозиторий.</p>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Email: <code className="bg-slate-700 px-2 py-1 rounded text-indigo-300">hello@digamma.example</code></li>
              <li>Форум: <em className="text-indigo-400">forum.digamma.example</em></li>
              <li>GitHub: <em className="text-indigo-400">github.com/digamma-os</em></li>
            </ul>
          </section>
        </main>

        <footer className="mt-12 text-center text-slate-500 text-sm pb-8">
          © <span id="year">2024</span> DigammaOS — Сделано с контурной заботой о пользователе.
        </footer>
      </div>
    </div>
  );
};

export default App;
