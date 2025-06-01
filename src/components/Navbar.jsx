import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiSun,
    FiMoon,
    FiMenu,
    FiX,
    FiSearch,
    FiBookOpen,
    FiUser,
    FiFileText,
    FiBriefcase,
    FiAward,
    FiUsers,
    FiMail,
    FiChevronDown,
    FiChevronUp,
    FiArrowRight
} from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMainMenu, setActiveMainMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

    // Check for saved theme preference
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.documentElement.classList.toggle('dark', savedMode);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    // Sub-menu data
    const sapSubMenu = [
        "SAP MM",
        "SAP FICO",
        "SAP SD",
        "SAP HCM",
        "SAP ABAP",
        "SAP BASIS",
        "SAP SCM",
        "SAP ARIBA",
        "SAP PP",
        "SAP PM"
    ];

    const salesforceSubMenu = [
        "Salesforce Admin",
        "Salesforce Development",
        "Salesforce LWC & Integration",
        "Salesforce Marketing Cloud",
        "Salesforce CPQ",
        "Salesforce Service Cloud"
    ];

    const businessAnalyticsSubMenu = [
        "Business Analytics Fundamentals",
        "HR Business Analytics",
        "Financial Analytics",
        "Marketing Analytics",
        "Supply Chain Analytics"
    ];

    const hrTrainingSubMenu = [
        "SAP HCM",
        "HR Analytics",
        "SAP SuccessFactors",
        "HR Business Analytics",
        "Talent Management",
        "Workforce Planning"
    ];

    const dataScienceSubMenu = [
        "Data Science Fundamentals",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "AI for Business"
    ];

    const coursesMenu = [
        { 
            title: "SAP", 
            description: "Enterprise solutions",
            icon: "📊",
            subMenu: sapSubMenu,
            position: 'left'
        },
        { 
            title: "Data Analytics", 
            description: "Analyze Data",
            icon: "📈",
        },
        { 
            title: "DevOps", 
            description: "Accelerate Delivery",
            icon: "⚙️"
        },
        { 
            title: "Full Stack Development", 
            description: "End-to-End",
            icon: "💻"
        },
        { 
            title: "Data Science AI & ML", 
            description: "Intelligent Decisions",
            icon: "🧠",
            subMenu: dataScienceSubMenu,
            position: 'left'
        },
        { 
            title: "AWS", 
            description: "Cloud Power",
            icon: "☁️"
        },
        { 
            title: "Data Engineering", 
            description: "Manipulate Data",
            icon: "🔧"
        },
        { 
            title: "Salesforce", 
            description: "CRM Solutions",
            icon: "📱",
            subMenu: salesforceSubMenu,
            position: 'right'
        },
        { 
            title: "Business Analytics", 
            description: "Data Insights",
            icon: "📊",
            subMenu: businessAnalyticsSubMenu,
            position: 'left'
        },
        { 
            title: "HR TRAINING", 
            description: "HR Management Solutions",
            icon: "👥",
            subMenu: hrTrainingSubMenu,
            position: 'right'
        },
        { 
            title: "Python", 
            description: "Future Coding",
            icon: "🐍"
        },
        { 
            title: "ServiceNow Training", 
            description: "IT Service Management",
            icon: "🛠️"
        },
        { 
            title: "Share Market", 
            description: "Learn Trading",
            icon: "📉"
        }
    ];

    const navItems = [
        { name: 'Courses', icon: <FiBookOpen />, path: '#courses', hasDropdown: true },
        { name: 'About', icon: <FiUser />, path: '#about' },
        { name: 'Blog', icon: <FiFileText />, path: '#blog' },
        { name: 'Placements', icon: <FiAward />, path: '#placements' },
        { name: 'Jobs', icon: <FiBriefcase />, path: '#jobs' },
        { name: 'Career', icon: <FiUsers />, path: '#career' },
        { name: 'Contact', icon: <FiMail />, path: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'dark:bg-gray-900/80 bg-white/80 backdrop-blur-xl' : 'dark:bg-gray-900 bg-white shadow-md backdrop-blur-xl'}`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="IT Accurate Logo"
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <div 
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveMainMenu(item.name)}
                                onMouseLeave={() => {
                                    if (item.hasDropdown) {
                                        setTimeout(() => {
                                            if (!document.querySelector('.dropdown-container:hover')) {
                                                setActiveMainMenu(null);
                                                setActiveSubMenu(null);
                                            }
                                        }, 100);
                                    }
                                }}
                            >
                                <a
                                    href={item.path}
                                    className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors flex items-center"
                                >
                                    <span className="mr-2">{item.icon}</span>
                                    {item.name}
                                    {item.hasDropdown && (
                                        <span className="ml-1">
                                            {activeMainMenu === item.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                        </span>
                                    )}
                                </a>

                                {/* Courses Dropdown */}
                                {item.hasDropdown && activeMainMenu === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-0 w-[700px] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 grid grid-cols-2 gap-2 z-50 dropdown-container"
                                        onMouseEnter={() => setActiveMainMenu(item.name)}
                                        onMouseLeave={() => {
                                            setActiveMainMenu(null);
                                            setActiveSubMenu(null);
                                        }}
                                    >
                                        {coursesMenu.map((course) => (
                                            <div 
                                                key={course.title}
                                                className="relative"
                                                onMouseEnter={() => course.subMenu && setActiveSubMenu(course.title)}
                                                onMouseLeave={() => !document.querySelector('.submenu-container:hover') && setActiveSubMenu(null)}
                                            >
                                                <a
                                                    href={`#${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className={`p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-start ${activeSubMenu === course.title ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                                >
                                                    <span className="text-2xl mr-3">{course.icon}</span>
                                                    <div className="flex-1">
                                                        <h3 className="font-medium dark:text-white text-gray-800">{course.title}</h3>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                                                    </div>
                                                    {course.subMenu && (
                                                        <FiArrowRight className="ml-2 text-gray-400" />
                                                    )}
                                                </a>

                                                {/* Sub-menu Dropdown */}
                                                {course.subMenu && activeSubMenu === course.title && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: course.position === 'left' ? -20 : 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: course.position === 'left' ? -20 : 20 }}
                                                        transition={{ duration: 0.2 }}
                                                        className={`absolute ${course.position === 'left' ? 'right-full mr-2' : 'left-full ml-2'} top-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-50 submenu-container`}
                                                        onMouseEnter={() => setActiveSubMenu(course.title)}
                                                        onMouseLeave={() => setActiveSubMenu(null)}
                                                    >
                                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2 px-2">{course.title} Courses</h4>
                                                        <ul className="space-y-1">
                                                            {course.subMenu.map((subItem) => (
                                                                <li key={subItem}>
                                                                    <a
                                                                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                                        className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        {subItem}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}

                        {/* Search Bar */}
                        <div className="relative ml-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                                placeholder="Search..."
                            />
                        </div>

                        {/* Dark/Light Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="ml-4 p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            <motion.div
                                animate={{ rotate: darkMode ? 180 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </motion.div>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="mr-4 p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>

                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                                if (isOpen) {
                                    setMobileActiveMenu(null);
                                }
                            }}
                            className="p-2 rounded-md dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-2 overflow-hidden"
                        >
                            <div className="pt-2 pb-4 space-y-1">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        <button
                                            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors flex items-center justify-between ${mobileActiveMenu === item.name ? 'dark:bg-gray-800 bg-gray-100' : ''}`}
                                            onClick={() => {
                                                if (item.hasDropdown) {
                                                    setMobileActiveMenu(mobileActiveMenu === item.name ? null : item.name);
                                                } else {
                                                    setIsOpen(false);
                                                }
                                            }}
                                        >
                                            <div className="flex items-center">
                                                <span className="mr-2">{item.icon}</span>
                                                {item.name}
                                            </div>
                                            {item.hasDropdown && (
                                                <span>
                                                    {mobileActiveMenu === item.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                                </span>
                                            )}
                                        </button>

                                        {/* Mobile Courses Dropdown */}
                                        {item.hasDropdown && mobileActiveMenu === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-6 mt-1 mb-2 space-y-2"
                                            >
                                                {coursesMenu.map((course) => (
                                                    <div key={course.title}>
                                                        <button
                                                            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between ${mobileActiveMenu === course.title ? 'dark:bg-gray-700 bg-gray-100' : ''}`}
                                                            onClick={() => {
                                                                if (course.subMenu) {
                                                                    setMobileActiveMenu(mobileActiveMenu === course.title ? null : course.title);
                                                                } else {
                                                                    setIsOpen(false);
                                                                }
                                                            }}
                                                        >
                                                            <div className="flex items-center">
                                                                <span className="mr-2">{course.icon}</span>
                                                                <div>
                                                                    <div className="font-medium">{course.title}</div>
                                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{course.description}</div>
                                                                </div>
                                                            </div>
                                                            {course.subMenu && (
                                                                <FiArrowRight className="ml-2 text-gray-400" />
                                                            )}
                                                        </button>

                                                        {/* Mobile Sub-menu Dropdown */}
                                                        {course.subMenu && mobileActiveMenu === course.title && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="ml-4 mt-1 space-y-1"
                                                            >
                                                                <h4 className="px-3 py-1 text-sm font-semibold text-gray-800 dark:text-white">{course.title} Courses</h4>
                                                                {course.subMenu.map((subItem) => (
                                                                    <a
                                                                        key={subItem}
                                                                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                                        className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        {subItem}
                                                                    </a>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile Search */}
                                <div className="px-3 pt-2 relative">
                                    <div className="absolute inset-y-0 left-5 pl-3 flex items-center pointer-events-none">
                                        <FiSearch className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;