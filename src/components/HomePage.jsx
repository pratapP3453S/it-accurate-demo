import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import FeatureSection from './FeatureSection';

const Homepage = () => {

    return (
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
            <section className="relative overflow-hidden bg-[url('/your-image.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 dark:opacity-10"></div>
                <div className="container mx-auto px-6 py-24 md:py-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-gray-800">
                            LEARN WITH <span className="text-blue-600">IT ACCURATE</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold mb-8 dark:text-gray-300 text-gray-600">
                            FOR BEST JOB OPPORTUNITY
                        </h2>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a
                                href="#enquiry"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
                            >
                                Get Started <FiArrowRight className="inline ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <FeatureSection />
        </div>
    );
};

export default Homepage;