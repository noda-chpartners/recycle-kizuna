import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: 'ri-money-dollar-circle-line',
    title: '高額買取査定',
    description: 'ブランド品・骨董品など、経験豊富な査定士が丁寧に査定・買取。',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: '生前整理見積',
    description: '将来を見据えた生前整理をサポート。ご意向に沿うプランを提案。',
  },
  {
    icon: 'ri-home-heart-line',
    title: '遺品整理見積',
    description: '大切な遺品を心を込めて整理。仕分け・買取・清掃まで一貫対応。',
  },
  {
    icon: 'ri-tools-line',
    title: '内装工事見積',
    description: '整理後の壁紙張替や補修も自社施工。窓口一つで安心してお任せ。',
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-background-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary-600 text-xs md:text-sm font-bold tracking-widest mb-2">
              ABOUT US
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3">
              私たちについて
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              買取から整理、そしてリフォームまで。<br />
              リサイクル絆は「モノ」と「住まい」の再生をトータルでサポートします。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 120}>
              <div className="group relative bg-background-100 rounded-xl p-6 md:p-7 transition-all duration-300 hover:bg-primary-50/50 cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <i className={`${svc.icon} text-xl md:text-2xl text-primary-600 group-hover:text-background-50 transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-foreground-600 text-xs md:text-sm leading-relaxed mb-3">
                  {svc.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}