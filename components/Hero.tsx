'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className="bg-gradient-to-br from-deepblue to-greenbrand text-white">
      <div className="container-max py-14 sm:py-20">
        <div className="max-w-2xl">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                {t('hero.headline')}
              </h1>
            </motion.div>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              {t('hero.subcopy')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#donor" className="btn btn-primary">{t('cta.becomeBacker')}</a>
              <a href="#entrepreneur" className="btn btn-secondary">{t('cta.submitProject')}</a>
            </div>

            <div className="mt-6 flex gap-3">
              <span className="badge border-gold text-gold">0% APR</span>
              <span className="badge border-white text-white">Transparent</span>
              <span className="badge border-white text-white">Local</span>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Community entrepreneurs working together"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mt-8 rounded-xl"
              priority
            />
          </div>
        </div>
    </section>
  );
}
