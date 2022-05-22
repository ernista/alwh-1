import { Fragment, useEffect, useState } from 'react'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'

export const Slider = () => {

    const images = [img1, img2, img3, img4, img5, img6]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          current >= 0 && current < (images.length - 1) ? setCurrent(current + 1) : setCurrent(0)
        }, 5000);
      
        return () => clearInterval(interval);
      }, [current])

    return (
        <Fragment>
            <div className='relative'>
                {
                    images.map((img, index) => (
                        <div key={index} className={`h-screen w-screen absolute ease-in-out transition-all duration-700 ${current === index ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={img} className="h-full w-full object-cover object-center" alt="" />
                        </div>
                    ))
                }
                <div className='bg-[#050036] h-screen w-screen absolute opacity-60'></div>
            </div>
        </Fragment>
    )
}