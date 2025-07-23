import { Image, Sparkles } from "lucide-react";
import React, { useState } from "react";
import Toggle from "../components/Toggle";

const GenerateImages = () => {
   const styleType = [
     "Realistic" ,
     "Ghibli Style" ,
     "Anime Style" ,
     "Cartoon Style" ,
     "Fantasy Style" ,
     "Realistic Style" ,
     "3D Style",
     "Portrait Style" ,
  ];
  const [style, setStyle] = useState(styleType[0]);
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#eb373d]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe your image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Describe the type of image you want...."
        />
        <p className="mt-4 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {styleType.map((item) => (
            <span
              onClick={() => setStyle(item)}
              key={item}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                style === item
                  ? "bg-red-50 text-red-600"
                  : "text-gray-500 border-gray-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div  className="flex mt-4 ">
          <Toggle publish={publish} setPublish={setPublish}/>
        </div>
        
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#f31c23] to-[#eb373d] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Image className="w-5" />
          Generate Image
        </button>
      </form>

      {/* right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#eb373d]" />
          <h1 className="text-xl font-semibold">Generated Image</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image className="w-9 h-9 " />
            <p>Enter a topic and click “Generate Image” to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateImages
