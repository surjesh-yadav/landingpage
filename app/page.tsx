import Image from 'next/image'
import FasterTransactions from './components/FasterTransactions'
import BannerSection from "./components/BannerSection"
import InvestmentOpportunities from "./components/InvestmentOpportunities"
import RewardsTransaction from "./components/RewardsTransaction"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Subscribe from './components/Subscribe'
export default function Home() {
  return (
    <div className="bg-[#03071e] px-8">
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
