'use client';

import {useTranslations} from 'next-intl';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedStory from '@/components/FeaturedStory';
import SocialProof from '@/components/SocialProof';
import BenefitsGrid from '@/components/BenefitsGrid';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import DonorForm from '@/components/DonorForm';
import EntrepreneurForm from '@/components/EntrepreneurForm';

export default function Page() {
  const t = useTranslations();
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FeaturedStory />
      <SocialProof />
      <BenefitsGrid />

      {/* Donor form target for #donor anchor */}
      <section className="py-16">
        <div className="container-max">
          <h3 className="text-2xl font-bold mb-6">{t('nav.becomeBacker')}</h3>
          <DonorForm />
        </div>
      </section>

      <FAQ />

      {/* Entrepreneur form */}
      <section className="py-16">
        <div className="container-max">
          <h3 className="text-2xl font-bold mb-6">{t('nav.submitProject')}</h3>
          <EntrepreneurForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
