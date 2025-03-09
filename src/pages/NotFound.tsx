
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarField from "../components/StarField";
import GlowingButton from "../components/GlowingButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <StarField />
      <Header />
      
      <main className="min-h-screen flex items-center justify-center py-24">
        <div className="container px-4">
          <div className="glass-morphism rounded-2xl p-8 max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-6xl text-gradient-rainbow">404</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-white">Page Not Found</h1>
            
            <p className="text-gray-300 mb-8">
              The phenomenon you're looking for seems to have vanished into another dimension. Let's return to known territory.
            </p>
            
            <GlowingButton href="/" color="cyan">
              Return to Home
            </GlowingButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
