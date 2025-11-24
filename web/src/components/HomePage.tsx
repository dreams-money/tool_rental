import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Truck, Wrench } from 'lucide-react';
import logo from 'figma:asset/556feb40f90376c18d2ca45286151ad0fb249a95.png';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0076A8] to-[#005A85] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                Rent Tools and Heavy Equipment <span className="text-[#F2B134]">Local</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Carson City's trusted source for quality tool rentals. We're local, affordable, 
                and ready to deliver right to your doorstep.
              </p>
              <Link
                to="/tools"
                className="inline-block bg-[#F2B134] text-[#0076A8] px-8 py-4 rounded-lg hover:bg-[#E5A520] transition-colors"
              >
                Browse Our Tools
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img src={logo} alt="Carson City Rentals" className="w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center mb-12 text-[#0076A8]">Why Choose Carson City Rentals?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F2B134] rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4 text-[#0076A8]">Locally Owned & Operated</h3>
            <p className="text-gray-600">
              We're your neighbors! As a local business, we understand the needs of our 
              community and provide personalized service you can trust.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F2B134] rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4 text-[#0076A8]">More Affordable Rates</h3>
            <p className="text-gray-600">
              Get the tools you need without breaking the bank. Our competitive prices 
              beat the big chains while maintaining top-quality equipment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F2B134] rounded-full flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4 text-[#0076A8]">Free Delivery Available</h3>
            <p className="text-gray-600">
              Don't worry about transportation! We offer convenient delivery service 
              right to your job site or home.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F2B134] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 text-[#0076A8] mx-auto mb-6" />
          <h2 className="mb-4 text-[#0076A8]">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-[#005A85]">
            Browse our extensive catalog of tools and equipment. Reserve online and we'll 
            have everything ready for you!
          </p>
          <Link
            to="/tools"
            className="inline-block bg-[#0076A8] text-white px-8 py-4 rounded-lg hover:bg-[#005A85] transition-colors"
          >
            View Available Tools
          </Link>
        </div>
      </div>
    </div>
  );
}