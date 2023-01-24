import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = ({ setListImages, setIsLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("https://genieart-api-production.up.railway.app/openai/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: inputValue
        })
      })
      const jsonData = await response.json();
      setListImages(jsonData.data)

    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#97D9E1] to-[#D9AFD9]">
      {/* Container */}
      <div className="container mx-auto max-w-5xl px-2 py-6">
        {/* Logo */}
        <p className="block font-bold text-xl font-opensans">Genie<span className="text-primary">ART</span></p>
        {/* Tagline */}
        <div className="mt-14">
          <h2 className="font-bold text-xl max-w-xs mb-1">Unleash the power of AI to create stunning images.</h2>
          <p className="font-light opacity-80 hidden md:inline-block">Created with AI-powered image generation technology.</p>

          {/* Form */}
          <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
            <input value={inputValue} onChange={handleInputChange} className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" type="text" placeholder="Unleash the power of AI to create" />
            <button type="submit" className="absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm">
              <ArrowLongRightIcon className="h-6" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Header;
