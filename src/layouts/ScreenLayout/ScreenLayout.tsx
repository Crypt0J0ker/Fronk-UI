import { SocialType } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

const ScreenLayout = ({
  children,
  socials,
}: {
  children: React.ReactElement
  socials: SocialType[]
}) => {
  return (
    <div
      className="relative h-screen overflow-hidden bg-fronk-dark flex w-full"
      style={{
        background:
          'url(/images/bg.png) center center/contain no-repeat, radial-gradient(rgba(236, 132, 37, 0.4), rgba(12, 12, 12, 1) 60%), linear-gradient(to right, rgba(12, 12, 12, 1), rgba(12, 12, 12, 1))',
      }}
    >
      <div className="container max-w-[1440px] mx-auto">
        <div className="absolute z-10 w-[37%] h-[50%] top-[20%] left-[25%] overflow-y-auto pt-8 pl-8">
          {children}
        </div>
      </div>

      <div className="absolute h-[6%] bg-black/80 w-[17%] left-[42.25%] bottom-[5%] rounded-full flex space-x-[21%]">
        {socials.map(social => (
          <Link
            key={social.label}
            href={social.path}
            className="cursor-pointer h-[100%] w-[20%] rounded-full"
          />
        ))}
      </div>
    </div>
  )
}

export default ScreenLayout
