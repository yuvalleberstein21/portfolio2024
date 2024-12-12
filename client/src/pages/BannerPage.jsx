import SectionBanner from '../components/SectionBanner'


const BannerPage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className='mt-0 lg:mt-10'>
                <SectionBanner />
            </div>
        </div>
    )
}

export default BannerPage