import { useState, useEffect } from 'react';
import logo from '@/assets/logo_1.png';
import logowhite from '@/assets/logo-white.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: '私たちについて', href: '#services' },
    { label: 'サービス', href: '#menu' },
    { label: '買取', href: '#buyback' },
    { label: '整理/工事', href: '#cleanup-renovation' },
    { label: '会社情報', href: '#company' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled
        ? 'bg-background-50/95 backdrop-blur-sm border-b border-primary-200/50'
        : 'bg-primary-600 border-b border-primary-700/50'
    }`}
    >
      <div className="flex items-center px-4 md:px-6 py-3">
        {/* 左：ロゴ */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
              <img
                src={scrolled ? logo : logowhite}
                alt="リサイクル絆"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                scrolled
                  ? 'text-foreground-700 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-background-50/90 hover:text-background-50 hover:bg-background-50/15'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-3">
          <a
            href="tel:011-376-1448"
            className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              scrolled
                ? 'bg-accent-500 text-background-50 hover:bg-accent-600'
                : 'bg-background-50/90 text-primary-700 hover:bg-background-50'
            }`}
          >
            <i className="ri-phone-line"></i>
            011-376-1448
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-foreground-700' : 'text-background-50'
            }`}
            aria-label="メニュー"
          >
            {/* 変更箇所1：アイコンに回転とスケールのトランジションを追加 */}
            <div className={`transition-transform duration-300 ease-in-out flex items-center justify-center ${mobileOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
              <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </div>
          </button>
        </div>
      </div>

      {/* 変更箇所2：{mobileOpen && ...} を削除し、CSS Gridを使って高さをアニメーション */}
      <div
        className={`md:hidden bg-background-50 grid transition-all duration-300 ease-in-out ${
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {/* メニューの中身（border-t は内側に移動してレイアウト崩れを防止） */}
          <div className="border-t border-primary-100">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:011-376-1448"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold bg-accent-500 text-background-50 hover:bg-accent-600 transition-colors "
              >
                <i className="ri-phone-line"></i>
                011-376-1448
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}