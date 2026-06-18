import ScrollReveal from './ScrollReveal';
import cleanupImg from '@/assets/packing_simple.png';
import renovationImg from '@/assets/gyousya_man_simple.png';

export default function CleanupAndRenovationSection() {
  return (
    <section id="cleanup-renovation" className="py-16 md:py-20 px-4 md:px-6 bg-background-100">
      <div className="max-w-6xl mx-auto">

        {/* セクション見出し */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary-600 text-xs md:text-sm font-bold tracking-widest mb-2">
              CLEANUP &amp; RENOVATION
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3">
              遺品・生前整理＆内装工事
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              整理からリフォームまでワンストップで対応。<br />遺品整理後の内装工事もお任せください。
            </p>
          </div>
        </ScrollReveal>

        {/* 2つの項目を並べるグリッド */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* 項目1：遺品・生前整理 */}
            <div className="bg-background-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              {/* 画像エリア */}
              <div className="w-full h-56 md:h-72 bg-background-200 relative flex items-center justify-center shrink-0">
                 {/* ▼ object-cover を object-contain に変更しました ▼ */}
                 <img src={cleanupImg} alt="遺品・生前整理" className="w-full h-full object-contain" /> 
              </div>
              
              {/* テキストエリア */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-5 text-center">
                  遺品・生前整理
                </h3>
                <div className="text-foreground-600 text-sm md:text-base leading-relaxed flex flex-col gap-4">
                  <p>
                    遺品整理・生前整理でお困りのお客様は、まずはお電話ください。<br className="hidden md:block" />
                    低予算で受付させていただきます。
                  </p>
                  
                  {/* メッセージの強調 */}
                  <div className="bg-primary-50/50 border border-primary-100 rounded-lg p-3 text-center my-1">
                    <p className="font-bold text-primary-800 text-sm md:text-base">
                      要らない・不要 ＝ <span className="text-accent-600">売る</span> の時代です
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-sm">
                    お客様がゴミと思う品物も、他の国、人には必要なものが多数あります。ある程度処分してからでは遅いです。捨てる前にまずは絆にご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 項目2：内装工事 */}
            <div className="bg-background-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              {/* 画像エリア */}
              <div className="w-full h-56 md:h-72 bg-background-200 relative flex items-center justify-center shrink-0">
                {/* ▼ object-cover を object-contain に変更しました ▼ */}
                <img src={renovationImg} alt="内装工事" className="w-full h-full object-contain" /> 
              </div>
              
              {/* テキストエリア */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-5 text-center">
                  内装工事
                </h3>
                <div className="text-foreground-600 text-sm md:text-base leading-relaxed flex flex-col gap-4">
                  
                  {/* リストを囲むボックスデザイン */}
                  <div className="bg-background-100 rounded-lg p-4 md:p-5">
                    <p className="font-bold text-foreground-800 mb-3 text-center text-sm">
                      【主な施工・工事内容】
                    </p>
                    {/* アイコン付きの箇条書き */}
                    <ul className="space-y-2 w-fit mx-auto text-sm md:text-base">
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>壁紙/クロスの貼替工事</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>壁穴補修工事</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>床/クッションフロアーの貼替工事</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>床/塩ビタイルの貼替工事</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>床/剥離ワックス施工</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-600 mt-0.5"></i>
                        <span>建具（ドア）シート貼替施工</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs md:text-sm">
                    整理後の清掃や内装の貼替工事は業者が違うからと契約が２個３個と多くなりがちですが、当社は従業員自ら施工いたしますのでご安心下さい。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}