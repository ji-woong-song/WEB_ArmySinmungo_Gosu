import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import { Header } from '../header'
import { Benefit } from '../benefit'
import { Tmo } from '../tmo'
import { Px } from '../px'
import { Hotel } from '../hotel'
import { Golf } from '../golf'
import Footer from '../Footer';

import JsonData from '../../data/data.json'
import SmoothScroll from 'smooth-scroll'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const MainPage = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Benefit data={landingPageData.Features} />
	  <Tmo data={landingPageData.Features} />
	  {/* <Px data={landingPageData.Features} />
	  <Hotel data={landingPageData.Features} />
	  <Golf data={landingPageData.Features} /> */}
	  <Footer />
    </div>
  )
}

export default MainPage
