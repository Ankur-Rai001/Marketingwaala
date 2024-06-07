import React, { useState, useEffect } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden" id='dabba'>
                <div
                    className="whitespace-nowrap transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards?.map((card, index) => (
                        <div className="inline-block w-full" key={index}>
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
