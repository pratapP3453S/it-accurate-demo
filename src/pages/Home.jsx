import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Homepage from '../components/HomePage'
import FreeDemoForm from '../components/FreeDemoForm'
import CompanyPartners from '../components/CompanyPartners';
import TrainingCourses from '../components/TrainingCourses';
import TrustedBrands from '../components/TrustedBrands';
import ReachNowForm from '../components/ReachNowForm';
import Footer from '../components/Footer';

export default function Home() {
      const [freeDemoFormPopUp, setFreeDemoFormPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFreeDemoFormPopUp(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
    {freeDemoFormPopUp && <FreeDemoForm />}
      <Navbar />
      <Homepage />
      <CompanyPartners />
        <div className="dark:bg-gray-900 bg-gray-50">
            <TrainingCourses />
        </div>
       <TrustedBrands />
       <ReachNowForm />
       <Footer />
    </div>
  )
}
