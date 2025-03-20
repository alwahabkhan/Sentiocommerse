import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Include AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation triggers once when the element comes into view
    });
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <div
        className="relative bg-cover bg-center py-32 px-6"
        style={{
          backgroundImage: "url('/Images/new.png')",
        }}
        data-aos="fade-in"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold mb-6 font-monospace" data-aos="zoom-in">
            ABOUT US
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-justify mb-6 font-sans" data-aos="fade-up">
            We are committed to providing the best shopping experience through personalized recommendations and exceptional customer service. Our goal is to enhance your online shopping journey with seamless and efficient solutions.
          </p>
          <p className="text-base max-w-3xl mx-auto text-justify font-sans" data-aos="fade-up">
            Our team focuses on integrating sentiment analysis into product recommendations, allowing us to tailor suggestions to your preferences, creating a more personalized and enjoyable shopping experience.
          </p>
        </div>
      </div>
      <div className="py-0"></div>

      {/* Mission Section */}
      <div className="flex justify-center items-center py-6 px-6 bg-gray-100">
        {/* Black Border Container */}
        <div className="rounded-lg p-6 max-w-6xl w-full bg-white" data-aos="flip-left"
         style={{ boxShadow: '4px 4px 6px 6px rgba(253, 216, 53, 1)' }}>
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center mb-8 text-black font-monospace">
            Our Mission
          </h2>

          {/* Two Columns: Text and Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Column: Text */}
            <div className=" p-6 text-left md:w-1/2" data-aos="fade-right">
              <p className="text-base text-justify text-black mb-6 font-sans">
                Our mission is to transform the e-commerce experience by leveraging cutting-edge technology and personalized recommendations. We aim to deliver solutions tailored to individual customer preferences, ensuring a seamless, efficient, and delightful shopping journey.
              </p>
              <p className="text-base text-justify text-black font-sans">
                By integrating advanced sentiment analysis into our platform, we strive to understand our customers better and provide them with recommendations that truly resonate. We are committed to innovation, customer satisfaction, and excellence in all our endeavors.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <img
                src="/Images/fa.jpg" // Replace with the actual path to your image
                alt="Our Mission"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-0"></div>

      {/* Services Provided by Us Section */}
      <div className="py-6 px-6">
        {/* Content */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mt-0 mb-6 text-black font-sans">
            Services Provided by Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-justify mb-6 text-black font-sans">
            We offer a range of services designed to enhance your online shopping experience. Below are some of the key services we provide to make your shopping journey more enjoyable and efficient:
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)' }}>
            <img
              src="/Images/fr.jpg"
              alt="Personalized Recommendations"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black font-sans">
              Personalized Recommendations
            </h3>
            <p className="text-base text-justify text-black font-sans">
              We use sentiment analysis to provide personalized product recommendations that match your preferences, making your shopping experience smoother and more enjoyable.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)' }}>
            <img
              src="/Images/team.jpg"
              alt="Efficient Customer Support"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black font-sans">
              Efficient Customer Support
            </h3>
            <p className="text-base text-justify text-black font-sans">
              Our dedicated customer support team is available 24/7 to assist you with any questions or issues, ensuring that you have a seamless shopping experience from start to finish.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)' }}>
            <img
              src="/Images/pay.jpg"
              alt="Secure Payment Solutions"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black font-sans">
              Secure Payment Solutions
            </h3>
            <p className="text-base text-justify text-black font-sans">
              We prioritize your security with safe and secure payment options, providing peace of mind with every purchase you make on our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-6 px-6 bg-gray-100">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mb-6 text-black font-sans">Meet Our Team</h2>
        </div>

        <div className="flex justify-center space-x-12 ">
          {/* Team Member 1 */}
          <div className="text-center" data-aos="flip-left">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 gap-20 mr-20 border-2 border-yellow-500 shadow-lg">
              <img
                src="/Images/1st.png" // Replace with Amna Islam's image path
                alt="Amna Islam"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black font-sans mr-20">Amna Islam</h3>
            <p className="text-base text-black font-sans mr-20">Co-Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center" data-aos="flip-left">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 mr-20 border-2 border-yellow-500 shadow-lg">
              <img
                src="/Images/a.jpg" // Replace with Areeba Rauf's image path
                alt="Areeba Rauf"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black font-sans mr-20">Areeba Rauf</h3>
            <p className="text-base text-black font-sans mr-20">Co-Founder</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center" data-aos="flip-left">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-2 border-yellow-500 shadow-lg">
              <img
                src="/Images/b.jpg" // Replace with Fareeda Yasmeen's image path
                alt="Fareeda Yasmeen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black font-sans">Fareeda Yasmeen</h3>
            <p className="text-base text-black font-sans">Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
