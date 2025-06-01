import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience"
  },
  {
    title: "Project-based Learning",
    description: "Gain hands-on experience with real-world projects"
  },
  {
    title: "Internship Opportunities",
    description: "Get placed in top companies during your training"
  },
  {
    title: "Certification Programs",
    description: "Earn recognized certifications to boost your career"
  }
];

export default function FeatureSection() {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    setCursor({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setStyle({});
    setCursor({ ...cursor, visible: false });
  };

  return (
    <>
      <section className="py-16 px-4 dark:bg-black bg-white min-h-screen flex items-center justify-center">
        <motion.div
          ref={cardRef}
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-7xl p-10 md:p-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl border border-transparent hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 overflow-hidden"
        >
          {/* Cursor glow light */}
          {cursor.visible && (
            <div
              className="pointer-events-none absolute z-10 w-40 h-40 rounded-full bg-blue-400/20 dark:bg-blue-300/20 blur-2xl"
              style={{
                top: cursor.y - 80,
                left: cursor.x - 80,
                transition: "top 0.05s, left 0.05s",
              }}
            />
          )}

          {/* Nearest-border hover effect (top, right, bottom, left) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1/2 bg-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1/2 bg-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Actual content */}
          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white text-gray-800">
              Why Choose Us?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-inner hover:shadow-xl transition duration-300 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                    <FiCheck className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
