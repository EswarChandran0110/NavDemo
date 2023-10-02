import Navbar from "./Navbar";


export const Frame = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1512px] h-[1883px] relative">
        <Navbar/> 
        {/* blank boxes */}
        <div className="top-[227px] left-[232px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
        <div className="top-[791px] left-[233px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
        <div className="top-[1372px] left-[233px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
        <div className="top-[324px] left-[793px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
        <div className="top-[888px] left-[794px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
        <div className="top-[1469px] left-[794px] absolute w-[443px] h-[443px] bg-[#d9d9d9]" />
             
      </div>
    </div>
  );
};
