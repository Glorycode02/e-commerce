import React, { FC } from 'react'
import { FaStar, FaStarHalfStroke, FaPlus } from "react-icons/fa6"
import {
    Card,
    CardContent,
    CardFooter,
} from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

interface product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: { rate: number, count: number }
}

const ProductCard: FC<product> = ({ id, title, price, image, category, description, rating }) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating.rate);
        const hasHalfStar = rating.rate % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-orange-500" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfStroke key={i} className="text-orange-500" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <div>
            <Card className="w-[350px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <CardContent>
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-[200px] w-full flex justify-center items-center">
                            <Image
                                src={image}
                                height={100}
                                width={100}
                                alt="product"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl max-md:text-4xl">{title}</h1>
                            <h2 className="truncate text-sm text-gray-600 mt-2">{description.substring(0, 40)}</h2>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full justify-between items-center px-4 py-2">
                        <h2 className="font-bold text-gray-700">{`$${price}`}</h2>
                        <div className="flex items-center gap-2">
                            <div className='flex items-center gap-1'>
                                {renderStars()}
                            </div>
                            <Button className="text-white  transition duration-300"><FaPlus /></Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}

export default ProductCard
