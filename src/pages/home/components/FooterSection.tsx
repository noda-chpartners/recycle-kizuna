import logo from '@/assets/logo-white.png'; // ※実際のファイル名がアンダースコアの場合は「logo_white.png」に戻してください

export default function FooterSection() {
  const footerLinks = [
    { label: '私たちについて', href: '#services' },
    { label: 'サービス', href: '#menu' },
    { label: '買取', href: '#buyback' },
    { label: '整理/工事', href: '#cleanup-renovation' },
    { label: '会社情報', href: '#company' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <footer className="bg-primary-800 py-12 md:py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          <div className="text-center md:text-left">

            {/* 修正箇所: ロゴとテキストをまとめて<a>タグで囲み、不要なdivを削除しました */}
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start mb-4 transition-opacity hover:opacity-80">
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="リサイクル絆"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-background-50 text-sm md:text-base">
                リサイクル絆
              </span>
            </a>
            {/* 修正箇所ここまで */}

            <p className="text-primary-300 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 mb-2">
              株式会社リサイクル絆
              <br />
              〒002-0852 札幌市北区屯田2条1丁目2番5号

            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="tel:011-376-1448"
                className="flex items-center gap-1.5 text-primary-300 text-xs hover:text-background-50 transition-colors"
              >
                <i className="ri-phone-line"></i>
                011-376-1448
              </a>
              <a
                href="https://jj8csp.wixsite.com/recycle-kizuna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary-300 text-xs hover:text-background-50 transition-colors"
              >
                <i className="ri-external-link-line"></i>
                Wixサイト
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-300 text-xs md:text-sm hover:text-background-50 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-700/50 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-primary-400 text-xs">
            &copy; {new Date().getFullYear()} 株式会社リサイクル絆. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}