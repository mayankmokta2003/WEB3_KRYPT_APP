import {BsShieldFillCheck} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiHeart2Fill} from "react-icons/ri"


const ServiceCard = ({color,title,icon,subtitle}) => (
    <div className=" flex flex-row justify-start items-centre white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl xl:w-150 ">
        <div className={`w-10 h-10 rounded-full flex justify-centre mt items-centre ${color}`}>
        {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>

        </div>

    </div>

)




const Services = () => {

    return (

        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-20 text-gradient">Services that we <br/>
                    continue to improve
                    </h1>
                    <p className="text-white font-light">The best choice for buying and selling crypto assets,<br />
                     with the various super friendly services we offer</p>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-centre">
                <ServiceCard 
                color="bg-[#2952E3]"
                title="Security Guaranteed"
                icon={<BsShieldFillCheck fontSize={21} className="text-white mt-2.5 ml-2.5"/>}
                subtitle="Secutity is Guaranteed. We always maintain privacy and maintain the quality of our products."
                />
                <ServiceCard 
                color="bg-[#8945f8]"
                title="Best exchange rates"
                icon={<BiSearchAlt fontSize={21} className="text-white mt-2.5 ml-2.5"/>}
                subtitle="Secutity is Guaranteed. We always maintain privacy and maintain the quality of our products."
                />
                <ServiceCard 
                color="bg-[#f84550]"
                title="Fastest transactions"
                icon={<RiHeart2Fill fontSize={21} className="text-white mt-2.5 ml-2.5"/>}
                subtitle="Secutity is Guaranteed. We always maintain privacy and maintain the quality of our products."
                />
            </div>
            
        </div>
        
    );
}

export default Services;