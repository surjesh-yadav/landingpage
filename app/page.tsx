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
    <div className="md:md:bg-[#03071e] bg-[#0b0b0b] bg-[#0b0b0b] px-5">
       <Head>
        <title>CUNetwork</title>
      </Head>
      <div className='max-width'>
        <Header/>
        <BannerSection/>
        <InvestmentOpportunities/>
        <FasterTransactions/>
        <RewardsTransaction/>
        <Subscribe/>
        <Footer/>
        </div>
    </div>
  )
}
