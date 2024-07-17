import SectionBanner from '../components/SectionBanner'


const BannerPage = () => {

    return (

        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className="rounded flex justify-center items-center md:h-[500px] h-[450px]">
                <SectionBanner />
            </div>
        </div>

    )
}

export default BannerPage