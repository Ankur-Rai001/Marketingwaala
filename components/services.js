import React from 'react';
// import { ReactComponent as SeoIcon } from '.C:\Users\Sandeep-Sinha\Desktop\Project1\marketingwaala\public\Influencer.PNG'; // Replace with your actual SVG path
// import { ReactComponent as InfluencerIcon } from './icons/influencer.svg'; // Replace with your actual SVG path
// import { ReactComponent as MarketingIcon } from './icons/marketing.svg'; // Replace with your actual SVG path
// import { ReactComponent as SocialMediaIcon } from './icons/socialmedia.svg'; // Replace with your actual SVG path

const Services = () => {

    const serviceList = [{
        title: "SEO Strategy",
        icon: 'Seo Strategy',
    },
    {
        title: "Influencer Marketing",
        icon: 'Influencer',
    },
    {
        title: "Marketing Strategy",
        icon: 'Marketing',
    },
    {
        title: " Social Media Marketing",
        icon: 'Social Media',
    },
    ]
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <span className="text-yellow-500 font-bold">OUR SERVICE</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">We offer the best services for our customer</h2>
                        <p className="text-gray-700 mb-6">Find effective digital reach of your business, powered by human behavior and driven by data.</p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-yellow-500 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
                            LEARN MORE <span className="ml-2">➔</span>
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img src="service.png" alt="Service Image" className="rounded-lg shadow-lg" />
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                    {serviceList.map(x => (
                        <div className='flex flex-col'>
                            {/* <div> */}

                                <img
                                    src={`${x.icon}.png`}
                                    alt="Hero"
                                    width={120}
                                    className='m-auto'
                                />
                            {/* </div> */}
                            <h3 className="text-xl font-bold text-black">{x.title}</h3>
                        </div>

                    ))}


                </div>
            </div>
        </section>
    );
};

export default Services;
