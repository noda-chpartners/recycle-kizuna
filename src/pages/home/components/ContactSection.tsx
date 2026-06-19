import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
 

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-primary-600">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-3 md:mb-5">
            <p className="text-primary-200 text-xs md:text-sm font-bold tracking-widest mb-2">
              CONTACT
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-background-50 mb-3">
              お問い合わせ
            </h2>
            <p className="text-primary-200 text-sm md:text-base max-w-2xl mx-auto">
              買取・整理・内装工事のご依頼、ご相談など<br />
              お気軽にお電話ください。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:gap-10">
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center justify-center h-full text-center p-6 md:p-8">
              <p className="text-primary-200 text-sm mb-2">お電話でのお問い合わせ</p>
              <a
                  href="tel:011-376-1448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-3 rounded-full bg-background-50 text-primary-700 font-bold text-lg whitespace-nowrap hover:bg-background-50/80 transition-all duration-300"
                >
                  <i className="ri-phone-line text-xl"></i>
                  011-376-1448
                </a>
              <p className="text-primary-200/80 text-xs md:text-sm pt-2">受付時間：9:00 〜 17:00（年中無休）</p>

              <div className="mt-8 pt-8  w-full">
                <p className="text-primary-200 text-sm mb-2">ウェブサイトでのお問い合わせ</p>
                <a
                  href="https://jj8csp.wixsite.com/recycle-kizuna/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-background-50 text-primary-700 font-bold text-sm whitespace-nowrap hover:bg-background-50/80 transition-all duration-300"
                >
                  <i className="ri-external-link-line"></i>
                  ウェブサイトを開く
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}