import React from "react";

const CompanyPartners = () => {
    // Sample data for company partners
    const companies = [
        { id: 1, name: "Company A", logo: "/partners/bihar_school.jpg" },
        { id: 2, name: "Company B", logo: "/partners/bihar_skill.jpg" },
        { id: 3, name: "Company C", logo: "/partners/bihar.jpg" },
        { id: 4, name: "Company D", logo: "/partners/centum_learning.jpg" },
        { id: 5, name: "Company E", logo: "/partners/cmc_skills.jpg" },
        { id: 6, name: "Company F", logo: "/partners/creating_skills.jpg" },
        { id: 7, name: "Company G", logo: "/partners/indian_oil.jpg" },
        { id: 8, name: "Company H", logo: "/partners/it.jpg" },
        { id: 9, name: "Company I", logo: "/partners/jsdms.jpg" },
        { id: 10, name: "Company J", logo: "/partners/skill_india2.jpg" },
        { id: 11, name: "Company K", logo: "/partners/ntpc.jpg" },
        { id: 12, name: "Company L", logo: "/partners/pmkvy.jpg" },
        { id: 13, name: "Company M", logo: "/partners/premier_shield.jpg" },
        { id: 14, name: "Company N", logo: "/partners/roots_foundation.jpg" },
        { id: 15, name: "Company O", logo: "/partners/sidbi.jpg" },
        { id: 16, name: "Company P", logo: "/partners/skill_india.jpg" },
        { id: 17, name: "Company Q", logo: "/partners/laurus_edutech.jpg" },
        { id: 18, name: "Company R", logo: "/partners/tamil.jpg" },
        { id: 19, name: "Company S", logo: "/partners/tamso.jpg" },
        { id: 20, name: "Company T", logo: "/partners/vfres.jpg" },
    ];

    // Handle mouse move for 3D tilt effect
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        
        // Glow effect position
        const glow = card.querySelector('.glow-effect');
        if (glow) {
            glow.style.left = `${x - cardRect.left}px`;
            glow.style.top = `${y - cardRect.top}px`;
        }
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    return (
        <section className="py-8 dark:bg-gray-900 bg-white">
            {/* Title Section */}
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-2">
                    Our Valued Partners
                </h2>
                <p className="text-lg dark:text-gray-300 text-gray-600">
                    Collaborating with industry leaders to deliver excellence
                </p>
            </div>

            {/* Infinite Scrolling Marquee */}
            <div className="w-full overflow-hidden py-4 dark:bg-gray-800 bg-gray-100">
                <div className="relative">
                    {/* First Marquee */}
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={`first-${index}`}
                                className="inline-flex items-center justify-center mx-4"
                            >
                                <div 
                                    className="relative w-40 h-24 md:w-48 md:h-28 p-4 dark:bg-gray-700 bg-white rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        transformStyle: 'preserve-3d',
                                        willChange: 'transform'
                                    }}
                                >
                                    {/* Glow effect */}
                                    <span className="glow-effect absolute w-20 h-20 bg-blue-500 dark:bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></span>
                                    
                                    {/* Border effect */}
                                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-purple-400 transition-all duration-300 pointer-events-none"></div>
                                    
                                    {/* Inner shadow effect */}
                                    <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)] dark:group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 pointer-events-none"></div>
                                    
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Second Marquee (for continuous effect) */}
                    <div className="flex whitespace-nowrap animate-marquee2 mt-4">
                        {[...companies].reverse().map((company, index) => (
                            <div
                                key={`second-${index}`}
                                className="inline-flex items-center justify-center mx-4"
                            >
                                <div 
                                    className="relative w-40 h-24 md:w-48 md:h-28 p-4 dark:bg-gray-700 bg-white rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        transformStyle: 'preserve-3d',
                                        willChange: 'transform'
                                    }}
                                >
                                    {/* Glow effect */}
                                    <span className="glow-effect absolute w-20 h-20 bg-blue-500 dark:bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></span>
                                    
                                    {/* Border effect */}
                                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-purple-400 transition-all duration-300 pointer-events-none"></div>
                                    
                                    {/* Inner shadow effect */}
                                    <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)] dark:group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 pointer-events-none"></div>
                                    
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CompanyPartners;