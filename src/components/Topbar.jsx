import React from 'react'
import location from '../../public/icons/location.png'
import tracking from '../../public/icons/tracking.png'
import faq from '../../public/icons/faq.png'
import TopbarItem from './TopbarItem'
export default function Topbar() {
  return (
    <div>
        <div className="row flex justify-between items-center">
            <div className="left-row ">
                <ul className='flex items-center gap-5'>
                    <TopbarItem img={location} title='Store Location'></TopbarItem>
                    <TopbarItem img={tracking} title='Order Tracking'></TopbarItem>
                    <TopbarItem img={faq} title='FAQ '></TopbarItem>
                </ul>
            </div>
            <div className="right-row">
                <p className='text-sm text-[#727272]'>Need a Help ? Call Us : <span className='text-[#000]'>01900000000</span> </p>
            </div>
        </div>
    </div>
  )
}
