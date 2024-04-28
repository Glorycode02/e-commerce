
import Image from "next/image"

const Hero = () => {
    return (
        <div className="w-full flex gap-5 h-auto  mt-[10px] max-md:flex max-md:flex-col">
            <div className="w-1/2 h-[500px]  flex flex-col justify-center items-start max-md:w-full max-md:h-auto max-md:flex max-md:flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-md:text-4xl">
                    E-<span className="text-orange-500">buy</span> is a powerful e-commerce website used to sell
                    products at a cheap price.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">E-<span className="text-orange-500">buy</span> come and buy at good prices and get good service.</p>
            </div>
            <div className="w-1/2 h-[500px]  flex flex-col items-center justify-center max-md:w-full max-md:flex max-md:items-center max-md:justify-center">
                <Image 
                src="/images/test.jpeg"
                alt="hero"
                width={500}
                height={500}
                className="w-full h-[500px] object-cover rounded-lg max-md:flex max-md:w-full max-md:rounded-lg"
                />
            </div>
        </div>
    )
}

export default Hero;