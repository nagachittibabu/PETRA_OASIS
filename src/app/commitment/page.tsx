'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { commitment, commitmentcards } from '../export';
import CommitmentCard from '../cards/commitmentCard';

interface CommitmentItem {
    about1: string;
    para1: string;
    para2: string;
    about2: string;
    para3: string;
    image?: string;
    points: string[];
}
const commitmentData: CommitmentItem[] = commitment as any;

const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-1">
            <ArrowRight className="w-4 h-4 text-white" />
        </div>
        <div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {text}
            </p>
        </div>
    </div>
);

const Commitment: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-white">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h2
                        className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-black mb-16"
                        data-aos="fade-down"
                    >
                        Commitment To Quality
                    </h2>
                </div>

                <div className="flex flex-col gap-24 sm:gap-32">
                    {commitmentData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="flex flex-col items-center w-full"
                        >
                            {item.image && (
                                <div className="w-full mb-10 sm:mb-12">
                                    <div className="w-full h-auto">
                                        <Image
                                            src={item.image}
                                            alt={item.about1 || "Commitment to Quality"}
                                            width={1200}
                                            height={800}
                                            quality={90}
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
                                            className="rounded-xl object-cover w-full h-auto max-h-[500px]"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="w-full space-y-6 sm:space-y-8">

                                <div>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                            {item.about1}
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 leading-relaxed">
                                            {item.para1}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-3 leading-relaxed">
                                            {item.para2}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                            {item.about2}
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 leading-relaxed">
                                            {item.para3}
                                        </p>
                                    </div>
                                </div>

                                {item.points && item.points.length > 0 && (
                                    <div className="w-full space-y-4 pt-4 border-t border-gray-100">
                                        {item.points.map((text, i) => (
                                            <ListItem key={i} text={text} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
                >
                    {commitmentcards.map((item, index) => (
                        <CommitmentCard key={index} description={item.para} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commitment;