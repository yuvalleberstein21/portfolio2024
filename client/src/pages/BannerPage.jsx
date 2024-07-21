import SectionBanner from '../components/SectionBanner'


const BannerPage = () => {

    return (

        <div className="flex flex-col md:flex-row w-full justify-center items-center md:h-[100vh]">
            <div className="md:mb-20 min-h-[550px] mt-20">
                <SectionBanner />
            </div>
        </div>

    )
}

export default BannerPage