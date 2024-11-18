import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Statistics from '@/components/Statistics'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className='container mx-auto h-full'>
        <div className="flex flex-col xl:flex-row 
                  items-center justify-between
                  xl:pt-8 xl:pb-24">
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>
              Software Engineer | DevSecOps | DataScience
            </span>
            <h1 className='h1 mb-6'> Hello I'm <br />
              <span className='text-accent'>Ezra</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80' >
              A passionate Full Stack Software Developer 🚀
              having an experience of building Web and Mobile
              applications with JavaScript / Reactjs / Nodejs /
              React Native and some other cool libraries and
              frameworks.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6 mb-9">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="uppercase  items-center gap-2">
                <span>Download Cover Letter</span>
                <FiDownload className="text-xl" />
              </Button>

            </div>
            <div className="flex flex-col xl:flex-row items-center xl:ml-20 gap-4 xl:gap-6">
              <Social
                containerStyles="flex gap-5"
                iconStyles="w-9 h-9 border border-accent 
                        rounded-full flex justify-center 
                        items-center text-accent text-base 
                        hover:bg-accent hover:text-primary 
                        hover:transition-all duration-500"/>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 m-5 xl:mb-0">
            {/* photo */}
            <Photo />
          </div>

        </div>
      </div>
      <Statistics/>
    </section>
  )
}

export default Home
