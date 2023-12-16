import Image from 'next/image'
import FasterTransactions from './components/FasterTransactions'
import BannerSection from "./components/BannerSection"
import InvestmentOpportunities from "./components/InvestmentOpportunities"
import RewardsTransaction from "./components/RewardsTransaction"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Subscribe from './components/Subscribe'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-[#0B0C0E] px-5 scroll-smooth">
      <Head>
        <title>The BEP20 Token govern by the community.!!</title>
        <meta name="description" content="The BEP20 Token govern by the community.!!" />
        <meta property="og:image" content="/dashh.svg" />
      </Head>
      <div className='max-width'>  
        <Header />
        <BannerSection />
        <InvestmentOpportunities />
        <FasterTransactions />
        <RewardsTransaction />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}
