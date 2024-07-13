import React, { useEffect } from 'react'
import SectionBanner from '../components/SectionBanner'
import SectionImageBanner from '../components/SectionImageBanner'
import AOS from "aos";
import "aos/dist/aos.css";

const BannerPage = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div className="h-full py-5 mt-0 w-full md:mt-10 flex items-center justify-center mx-auto p-10">
            <div className="flex flex-col md:flex-row w-full">
                <div className="rounded m-4 flex-1">
                    <SectionBanner />
                </div>
                <div className="rounded m-4 flex-1">
                    <SectionImageBanner />
                </div>
            </div>

        </div>
    )
}

export default BannerPage