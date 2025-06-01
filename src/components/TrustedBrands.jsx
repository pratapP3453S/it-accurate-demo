import { motion } from "framer-motion";
import { Star } from "lucide-react";

const brands = [
  {
    name: "GoAbroad.com",
    logo: "https://images2.goabroad.com/image/upload/h_208,w_272/v1/images2/goabroad-logo.webp",
    rating: 4.5,
  },
  {
    name: "UrbanPro",
    logo: "https://images2.goabroad.com/image/upload/h_208,w_272/v1/images2/goabroad-logo.webp",
    rating: 4.7,
  },
  {
    name: "Go Overseas",
    logo: "https://www.experiment.org/wp-content/uploads/2021/08/GoOverseas-logo.png",
    rating: 4.5,
  },
  {
    name: "AmbitionBox",
    logo: "https://newsmantra.in/wp-content/uploads/2023/11/Group-2242.png",
    rating: 4.6,
  },
  {
    name: "Google",
    logo: "data:image/png;base64,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",
    rating: 4.7,
  },
  {
    name: "Glassdoor",
    logo: "https://www.cdnlogo.com/logos/g/56/glassdoor.svg",
    rating: 4.6,
  },
  {
    name: "EduGorilla",
    logo: "https://edugorilla.com/wp-content/uploads/2016/10/logo-1.png",
    rating: 4.5,
  },
  {
    name: "MouthShut",
    logo: "https://m.mouthshut.com/images/logo3x.png",
    rating: 4.6,
  },
];

const features = [
  {
    title: "Interview Guidance",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Guaranteed Certification",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1131&q=80"
  },
  {
    title: "Job Ready",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    title: "Online+Offline Sessions",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function TrustedBrands() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Trusted Brands Section */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold leading-tight dark:text-white"
          >
            We are one of the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
              Most Trusted Brands!
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="flex flex-col items-center gap-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(brand.rating)
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "stroke-yellow-400"
                        }`}
                    />
                  ))}
                </div>
                <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
                  {brand.rating.toFixed(1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Card - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="flex-1 relative bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 cursor-pointer" />
            <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
              WHAT MAKES IT ACCURATE DIFFERENT?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Training programs at IT Accurate act as a foundation for students who are willing to become distinguished & expert IT professionals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our commitment & focus towards empowering the students with cutting edge industry practices & Salesforce expertise has resulted in exceptional learning experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This approach has helped students seize the right career opportunities.
            </p>
          </motion.div>

          {/* Right Card - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -5,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            className="flex-1 relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 pointer-events-none" />
                  </div>
                  <p className="text-center font-semibold mt-4 text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}