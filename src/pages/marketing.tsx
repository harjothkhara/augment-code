import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import augmentBanner from '../images/augment_banner.jpg';

const Marketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Offside',sans-serif]">
      <Head>
        <title>Augment Code - Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <Link href="/">
          <a className="inline-block mb-8 text-blue-500 hover:text-blue-700 transition-colors">
            <span className="inline-block mr-2">←</span> Back to Home
          </a>
        </Link>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Augment Billboard</h2>
          <a href={augmentBanner.src} target="_blank" rel="noopener noreferrer" className="block">
            <Image
              src={augmentBanner}
              alt="Augment Code Billboard"
              layout="responsive"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg"
            />
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">
            Ready to supercharge your coding? Sign up for a free trial and experience the power of Augment Code.
          </p>
          <a
            href="https://www.augmentcode.com/free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Start Free Trial
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
