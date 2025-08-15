import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
export default function About() {
  return (
    <div>

    <Header/>
    <div className="card mt-8">
       
      <h5 className="card-header text-4xl font-extrabold text-center text-gray-900">About Us</h5>
      <div className="card-body bg-gray-50 p-6 rounded-lg shadow-md mt-4">
        <h5 className="card-title bg-gray-200 p-3 rounded-lg text-lg font-semibold text-gray-800">Empowering Farmers with Advanced Disease Diagnosis</h5>
        <p className="card-text text-gray-700 mt-3">
          Welcome to Aarogyam, a cutting-edge web application designed to revolutionize how farmers diagnose and manage plant and animal diseases. Our mission is to empower farmers with the tools and knowledge they need to ensure healthy crops and livestock, leading to increased productivity and sustainable agricultural practices.
        </p>
      </div>
      <hr className="my-6"/>
      <div className="card-body bg-gray-50 p-6 rounded-lg shadow-md">
        <h5 className="card-title bg-gray-200 p-3 rounded-lg text-lg font-semibold text-gray-800">Our Vision</h5>
        <p className="card-text text-gray-700 mt-3">
          In a world where food security is paramount, we aim to bridge the gap between modern technology and traditional farming. By providing an easy-to-use platform that leverages Artificial Intelligence (AI) and data analytics, we strive to make disease diagnosis accessible and accurate for farmers everywhere.
        </p>
      </div>
      <hr className="my-6"/>
      <div className="card-body bg-gray-50 p-6 rounded-lg shadow-md">
        <h5 className="card-title bg-gray-200 p-3 rounded-lg text-lg font-semibold text-gray-800">What We Offer</h5>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>
            <b>AI-Powered Diagnosis:</b> Our platform uses advanced AI algorithms to analyze symptoms and provide accurate disease diagnosis for a wide range of crops and livestock. This helps farmers take timely and appropriate actions to protect their yields.
          </li>
          <li>
            <b>User-Friendly Interface:</b> Our web application is designed with simplicity in mind, making it easy for anyone to use, regardless of their technical background.
          </li>
          <li>
            <b>Real-Time Reporting:</b> Stay informed with real-time updates and alerts about potential disease outbreaks in your region, helping you take preventive measures.
          </li>
          <li>
            <b>Comprehensive Disease Database:</b> Our extensive database covers various diseases affecting plants and animals, offering detailed information on symptoms, causes, and recommended treatments.
          </li>
          <li>
            <b>Community Support:</b> Join a growing community of farmers who share their experiences and solutions, fostering a collaborative environment where knowledge and resources are exchanged freely.
          </li>
        </ul>
      </div>
      <hr className="my-6"/>
      <div className="card bg-gray-50 p-6 rounded-lg shadow-md">
        <h5 className="card-header text-lg font-semibold text-center bg-gray-200 p-3 rounded-lg">Why Choose Us</h5>
        <div className="card-body text-gray-700 mt-3">
          <p className="card-text">
            At Aarogyam, we are committed to enhancing the agricultural sector by providing farmers with the tools they need to thrive. Our innovative approach combines the power of technology with the practical knowledge of farming, ensuring that every farmer has the resources they need to succeed.
          </p>
          <p className="card-text mt-3">
            Join us in our journey to make agriculture smarter, more sustainable, and resilient.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
