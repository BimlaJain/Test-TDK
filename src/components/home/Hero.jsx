import React from 'react'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div>
            <div className="bg-cover bg-no-repeat max-2xl:bg-contain bg-top max-xl:bg-cover xl:h-[930px] lg:h-[1061px] h-[703px]" style={{ backgroundImage: `url(./assets/images/png/hero-bg.png)` }}>
                <Header />
                <div className='container'>
                            <h1 className="text-6xl font-bold text-white max-lg:text-6xl max-sm:text-3xl leading-customsm pt-[46px] xl:max-w-[1072px] md:max-w-[753px] max-w-[374px] mx-auto text-center">
                               Driving Transformation for Performance and Passion Within
                            </h1>
                            <p className=" font-normal text-white leading-custom-2xl pb-[42px] lg:text-customxl text-base max-sm:pt-2 leading-customsm pt-[15px] xl:max-w-[960px] md:max-w-[553px] max-w-[314px] mx-auto text-center">
                        The future of electric mobility is here. TDK and NEOM McLaren Formula E
                            </p>
                        </div>
                    </div>
                </div>
    )
}

export default Hero
