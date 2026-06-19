import ScrollReveal from './ScrollReveal';

const infoItems = [
  { label: '会社名', value: '株式会社リサイクル絆' },
  { label: '所在地', value: '〒002-0852 札幌市北区屯田2条1丁目2番5号' },
  { label: '電話番号', value: '011-376-1448' },
  { label: '営業時間', value: '9:00 〜 17:00（平日・土日祝）' },
  { label: '定休日', value: 'なし（年中無休）' },
  { label: '事業内容', value: '出張買取専門（リサイクル買取・遺品整理・生前整理・建築リフォーム）' },
];

export default function CompanyInfoSection() {
  return (
    <section id="company" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-primary-50/30 to-background-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-600 text-xs md:text-sm font-bold tracking-widest mb-2">
              COMPANY &amp; ACCESS
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3">
              会社情報・アクセス
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <ScrollReveal direction="left">
            <div className="bg-background-100 rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900 mb-6">
                会社概要
              </h3>
              <dl className="space-y-4">
                {infoItems.map((item, i) => (
                  <div key={item.label} className={`flex flex-col sm:flex-row gap-1 sm:gap-4 ${i < infoItems.length - 1 ? 'pb-3 border-b border-foreground-50' : ''}`}>
                    <dt className="text-xs md:text-sm font-bold text-primary-600 whitespace-nowrap sm:w-24 shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-sm md:text-base text-foreground-700">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-background-100 rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900 mb-6">
                アクセス
              </h3>

              <div className="rounded-lg overflow-hidden mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.9586219472336!2d141.33779301547945!3d43.11797837914301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2979e4b3f4d1%3A0x2c8e8f9a3b2c1d0e!2z5p2+5bmM5biC5YyX5Yy65bWv55Sw77yS5p2h77yR5LiB55uu77yS4oiS77yV!5e0!3m2!1sja!2sjp!4v1700000000000"
                  width="100%"
                  height="220"
                  className="border-0 w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社リサイクル絆の所在地"
                ></iframe>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-train-line text-accent-600 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground-900 mb-0.5">札幌麻布地下鉄</p>
                    <p className="text-xs md:text-sm text-foreground-600">徒歩15分</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-bus-line text-primary-600 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground-900 mb-0.5">中央バス 札幌市北営業所</p>
                    <p className="text-xs md:text-sm text-foreground-600">徒歩2分</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}