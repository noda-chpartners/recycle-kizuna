import { useEffect, useRef } from "react";
import bag from '@/assets/bag.jpg';
import clock from '@/assets/clock.jpg';
import gakki from '@/assets/gakki.jpg';
import camera from '@/assets/camera.jpg';
import kottou from '@/assets/kottou.png';
import other from '@/assets/other.jpg';



const categories = [
  {
    title: "ブランド品",
    desc: "バッグはもちろんアクセサリーもどんなメーカーでも買い取ります。LOUIS VUITTON / HERMES / CHANEL / GUCCI / Cartier  ...etc",
    image: bag,
  },
  {
    title: "腕時計・時計",
    desc: "メーカー問わず高価買取。ROLEX / OMEGA / PATEK PHILIPPE / IWC / Breguet / VACHERON CONSTANTIN/SEIKO/CITIZEN/ロンジン/ラドー/CASIO/中国メーカー  ...etc",
    image: clock,
  },
  {
    title: "楽器・音響機器",
    desc: "壊れていても大丈夫。和楽器から洋楽器まで色々なものを買取ります。 YAMAHA / SELMER / Roland / KORG ...etc",
    image: gakki,
  },
  {
    title: "カメラ・光学機器",
    desc: "インスタントカメラまで買取OK。Leica/Canon/Nikon/ハッセル/ヤシカ/マイクロ/富士/レンズ/ケース  ...etc",
    image: camera,
  },
  {
    title: "骨董品",
    desc: "鉄瓶/お茶道具/花器/日本刀/甲冑/槍/西洋武具/アンティーク食器/家具/着物/万年筆  ...etc",
    image: kottou,
  },
  {
    title: "その他高額買取商品",
    desc: "おもちゃ・ゲーム・ゲーム機/お酒・ワイン・ブランデー/切手・ハガキ・記念硬貨/自転車/冷蔵庫・洗濯機/PC・PC周辺機器・モデルガン/釣り具/書道具・電気工具・電動工具/アンティーク食器・家具/アンティーク商品・TV・テレカ/商品券・着物一式・万年筆/キャンプ・アウトドア商品  ...etc",
    image: other,
  },
];

export default function PurchaseLineupSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="buyback"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background-100"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block text-primary-600 text-xs md:text-sm font-bold tracking-widest mb-3">
              BUYBACK LINEUP
            </span>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground-900 mb-4">
              買取ラインナップ
            </h2>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <p className="text-foreground-600 text-base md:text-lg max-w-2xl mx-auto">
              値段がつくものなんでも高価買取します。<br />お気軽にご相談ください。
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 bg-background-50 rounded-xl overflow-hidden border border-background-200/70`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Image */}
                <div className="w-full lg:w-1/2 h-48 md:h-64 lg:h-72">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    // 時計と楽器の画像を中央基準、その他を下部基準に変更しました
                    className={`w-full h-full object-cover ${cat.title === "腕時計・時計" || cat.title === "楽器・音響機器" ? "object-center" : "object-bottom"}`}
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-5 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-8 bg-primary-500 rounded-full"></div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-900">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  
                   
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}