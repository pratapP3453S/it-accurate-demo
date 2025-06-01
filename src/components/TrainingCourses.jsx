import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const TrainingCourses = () => {
    const courses = [
        {
            title: "SAP",
            description: "Start Learning SAP, And Land Your First Dream Job.",
            cta: "Enquire Now",
            color: "from-blue-500 to-blue-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "FULL STACK DEVELOPER",
            description: "Master frontend and backend technologies to build complete web applications.",
            cta: "Enquire Now",
            color: "from-purple-500 to-purple-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "SALESFORCE",
            description: "Become a certified Salesforce developer and administrator.",
            cta: "Enquire Now",
            color: "from-cyan-500 to-cyan-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "DEVOPS",
            description: "Learn CI/CD pipelines, Docker, Kubernetes and cloud deployment.",
            cta: "Enquire Now",
            color: "from-green-500 to-green-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "ML/AI",
            description: "Master machine learning and artificial intelligence concepts.",
            cta: "Enquire Now",
            color: "from-red-500 to-red-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')]"
        },
        {
            title: "DATA ANALYTICS",
            description: "Become proficient in data analysis and visualization tools.",
            cta: "Enquire Now",
            color: "from-yellow-500 to-yellow-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "DATA SCIENCE",
            description: "Learn statistical modeling and predictive analytics.",
            cta: "Enquire Now",
            color: "from-indigo-500 to-indigo-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            title: "AWS",
            description: "Get certified in Amazon Web Services cloud technologies.",
            cta: "Enquire Now",
            color: "from-orange-500 to-orange-700",
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"
        }
    ];

    return (
        <section className="py-16 dark:bg-gray-900 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-800">
                        Our Training Courses
                    </h2>
                    <h3 className="text-xl md:text-2xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600">
                        Be certified by global certifications and increase your understanding
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }
                            }}
                            className="relative rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800/50 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Gradient border */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${course.color} p-0.5 rounded-xl`}></div>
                            
                            {/* Background image with overlay */}
                            <div className={`absolute inset-0 ${course.bgImage} bg-cover bg-center opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-300`}></div>
                            
                            <div className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-[10px]">
                                <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-800">
                                    {course.title}
                                </h3>
                                <p className="dark:text-gray-300 text-gray-600 mb-6">
                                    {course.description}
                                </p>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                                >
                                    {course.cta}
                                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105">
                        View All Courses
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TrainingCourses;