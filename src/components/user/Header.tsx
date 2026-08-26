export default function Header() {
  return (
    <header className="w-full bg-amber-400">
      <nav className="mx-auto flex max-w-7xl items-center justify-between text-white">
        {/* Логотип */}
        <a href="/" className="text-2xl font-black tracking-wider uppercase select-none">
          Tanitim.az
        </a>

        {/* Навигационные ссылки */}
        <div className="hidden items-center gap-8 md:flex text-sm font-medium">
          <a href="#about" className="transition-opacity hover:opacity-75">
            Haqqımızda
          </a>
          <a href="#services" className="transition-opacity hover:opacity-75">
            Xidmətlər
          </a>
          <a href="#portfolio" className="transition-opacity hover:opacity-75">
            Portfolio
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-75">
            Əlaqə
          </a>
        </div>

        {/* Кнопка действия */}
        <a
          href="#contact"
          className="rounded-full bg-[#F0692A] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
        >
          Sifariş et
        </a>
      </nav>
    </header>
  );
}