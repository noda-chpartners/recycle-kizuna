import ScrollReveal from './ScrollReveal';

const recycleMenu = [
  { name: '腕時計', icon: 'ri-time-line', desc: 'ロレックス、オメガなど高級時計を高額査定' },
  { name: 'ブランドバッグ', icon: 'ri-handbag-line', desc: 'エルメス、ルイ・ヴィトン、シャネルなど' },
  { name: '切手・葉書',  icon: 'ri-price-tag-3-line', desc: '未使用・使用済み問わずまとめて査定' },
  { name: '貴金属', icon: 'ri-vip-diamond-line', desc: '金・プラチナ・銀、アクセサリーもOK' },
  { name: '遺品整理・生前整理',  icon: 'ri-box-3-line', desc: '仕分けから買取・清掃まで一貫対応' },
];

const reformMenu = [
  { name: '壁クロス張替え', icon: 'ri-paint-line', desc: '傷んだ壁紙を美しく張替え。豊富な柄から選べます' },
  { name: '床施工', icon: 'ri-layout-bottom-line', desc: 'キズ・へこみ・きしみもきれいにリフレッシュ' },
  { name: '屋根・壁塗装',  icon: 'ri-home-3-line', desc: '防水性・耐久性を高めるプロ仕様の塗装工事' },
  { name: 'サイディング施工', icon: 'ri-building-line', desc: '外壁張り替えで断熱性・美観を一新' },
];

// themeプロパティ（'accent' または 'primary'）を受け取ってアイコン色を切り替える
function MenuCard({ item, theme }: { item: typeof recycleMenu[0]; theme: 'accent' | 'primary' }) {
  const isAccent = theme === 'accent';

  // カード背景は元の通常色で統一
  const cardBg = 'bg-background-100 hover:bg-background-200/60';
  
  // アイコンの背景色をそれぞれの部門カラーに指定
  const iconWrapBg = isAccent 
    ? 'bg-accent-400 group-hover:bg-accent-600' 
    : 'bg-primary-500 group-hover:bg-primary-700';

  return (
    <div className={`group rounded-xl p-5 md:p-6 transition-all duration-300 ${cardBg}`}>
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${iconWrapBg}`}>
          <i className={`${item.icon} text-lg md:text-xl text-background-50`}></i>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h4 className="font-heading font-bold text-foreground-900 text-sm md:text-base truncate">
              {item.name}
            </h4>
          </div>
          <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PopularMenuSection() {
  return (
    // セクション全体の背景色も元のグラデーションに戻しています
    <section id="menu" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-primary-50/40 to-background-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-600 text-xs md:text-sm font-bold tracking-widest mb-2">
              SERVICES
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3">
              サービス
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          
          {/* 左側：リサイクル部門（黄色系 = accent） */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center">
                  <i className="ri-recycle-line text-background-50 text-base"></i>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900">
                  リサイクル部門
                </h3>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {recycleMenu.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 80} direction="left">
                  <MenuCard item={item} theme="accent" />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* 右側：建築リフォーム部門（青色系 = primary） */}
          <div>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center">
                  <i className="ri-tools-line text-background-50 text-base"></i>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900">
                  建築リフォーム部門
                </h3>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {reformMenu.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 80} direction="right">
                  <MenuCard item={item} theme="primary" />
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}