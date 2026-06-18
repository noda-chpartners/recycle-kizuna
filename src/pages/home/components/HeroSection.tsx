import bag from '@/assets/bag.jpg';
import clock from '@/assets/clock.jpg';
import gakki from '@/assets/gakki.jpg';
import camera from '@/assets/camera.jpg';
import kottou from '@/assets/kottou.png';
import other from '@/assets/other.jpg';
import seiri from '@/assets/seiri.jpg';
import kouji from '@/assets/kouji.jpg';

export default function HeroSection() {


  const imagesRow1 = [
    bag,
    clock,
    seiri,
    camera,
  ];

  const imagesRow2 = [
    kottou,
    other,
    kouji,
    gakki,
  ];

  return (
    <section className="relative w-full h-[580px] md:h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* カスタムアニメーション用のCSS */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 50s linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scrollRight 50s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* ループ背景コンテナ */}
      <div className="absolute inset-0 z-0 flex flex-col opacity-80">
        {/* 上段：左へスクロール */}
        <div className="flex-1 overflow-hidden relative w-full">
          <div className="animate-scroll-left flex h-full gap-2">
            {/* 1セット目 */}
            {imagesRow1.map((src, idx) => (
              <img key={`r1-1-${idx}`} src={src} alt="" className="h-full w-[300px] md:w-[450px] object-cover rounded-md" />
            ))}
            {/* 2セット目（シームレスループ用） */}
            {imagesRow1.map((src, idx) => (
              <img key={`r1-2-${idx}`} src={src} alt="" className="h-full w-[300px] md:w-[450px] object-cover rounded-md" />
            ))}
          </div>
        </div>

        {/* 下段：右へスクロール */}
        <div className="flex-1 overflow-hidden relative w-full rounded-md">
          <div className="animate-scroll-right flex h-full gap-2">
            {/* 1セット目 */}
            {imagesRow2.map((src, idx) => (
              <img key={`r2-1-${idx}`} src={src} alt="" className="h-full w-[300px] md:w-[450px] object-cover rounded-md" />
            ))}
            {/* 2セット目（シームレスループ用） */}
            {imagesRow2.map((src, idx) => (
              <img key={`r2-2-${idx}`} src={src} alt="" className="h-full w-[300px] md:w-[450px] object-cover rounded-md" />
            ))}
          </div>
        </div>
      </div>

      {/* グラデーションオーバーレイ（背景が動くため、文字が読みやすいよう少し暗めに設定） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

      {/* メインコンテンツ（前面） */}
      <div className="relative z-20 w-full px-4 md:px-6 text-center">
        <p className="text-background-50/80 text-sm md:text-base font-medium tracking-widest mb-3">
          親から子へ、子から孫へ
          <br />
          大切な価値を絆いで行く
        </p>
        <h2 className="text-background-50 text-base md:text-xl font-medium tracking-widest mb-1">
          出張買取専門店
        </h2>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-background-50 mb-4 leading-tight">
          株式会社 リサイクル絆
        </h1>
        <p className="text-background-50/80 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          査定・お見積り無料 まずはお電話ください
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:011-376-1448"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent-500 text-background-50 font-bold text-sm md:text-base whitespace-nowrap hover:bg-accent-600 transition-all duration-300 shadow-lg"
          >
            <i className="ri-phone-line text-lg"></i>
            今すぐ電話で相談
          </a>
        </div>
      </div>

      {/* 下スクロールボタン */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#services">
          <i className="ri-arrow-down-s-line text-background-50/80 hover:text-background-50 transition-colors text-3xl"></i>
        </a>
      </div>
    </section>
  );
}