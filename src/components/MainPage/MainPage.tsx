import React from 'react'
import HeroComponent from '../HeroComponent/HeroComponent'
import BlocksDivider from '../BlocksDivider/BlocksDivider'
import DailyStreak from '../DailyStreak/DailyStreak'
import Projects from '../Projects/Projects'

const FronkMain = () => {
  return (
    <div className="uppercase">
      <HeroComponent />
      <BlocksDivider text={'daily streak'} />
      <DailyStreak />
      <BlocksDivider text={'projects'} />
      <Projects />
    </div>
  )
}

export default FronkMain
