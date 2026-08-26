

export default function Header() {
  return (
    <header className="w-full ">
      <nav className="mx-auto flex w-full items-center justify-between text-white">
        {/* Логотип */}
       <div className="h-full w-50">
        <img src="/tanitim_logo.png" alt="Logo" className="h-full w-full object-cover" />
       </div>

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