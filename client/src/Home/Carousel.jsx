import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [slide, setSlide] = useState(0);
    const itemsPerPage = 3;
    const navigate = useNavigate();

    const nextSlide = () => {
        if (slide >= categories.length - itemsPerPage) return;
        setSlide(slide + itemsPerPage);
    };

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - itemsPerPage);
    };

    const fetchCategory = async () => {
        const response = await fetch("category.json");
        const data = await response.json();
        setCategories(data);
    };

    const handleCategoryClick = (category) => {
        navigate('/Shop', { state: {category} }); // Navigate to ShopNow with the selected category
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <section className="py-12 bg-white">
            <div className='max-w-[1200px] mx-auto bg-gray-200 p-10 rounded-[20px]'>
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='text-3xl font-bold mb-8 text-black'>What's on your mind?</h1>
                    <div className='flex items-center ml-auto'>
                        <button
                            className='p-2 rounded-full bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-300 transition-colors'
                            onClick={prevSlide}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className='p-2 rounded-full bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-300 transition-colors'
                            onClick={nextSlide}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className='flex gap-5 text-black shrink-0 overflow-hidden'>
                    {categories.map((cat, index) => (
                        <div
                            style={{
                                transform: `translateX(-${slide * 100}%)`,
                            }}
                            key={index}
                            className='flex flex-col shrink-0 items-center justify-center duration-500 cursor-pointer'
                            onClick={() => handleCategoryClick(cat.path)} // Handle category click
                        >
                            <img
                                src={`/Images/${cat.image}`}
                                alt={cat.path}
                                className='w-[150px] h-[150px] rounded-full object-cover'
                            />
                            <p className='mt-2 font-bold capitalize'>{cat.path}</p>
                        </div>
                    ))}
                </div>
                <hr className='my-12 border-[1px]'></hr>
            </div>
        </section>
    );
};

export default Categories;
