export const Gradients = () => {
  return (
    <div className="py-12 w-full absolute inset-0 -z-10">
      {/* Left Gradient */}
      <div
        className="
          absolute top-[24px] -left-[163px] 
          bg-[linear-gradient(180deg,_#C6AFFF_0%,_#9028FF_100%)] blur-[700px]
          h-[1214px] w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1214px]
        "
      ></div>

      {/* Right Gradient */}
      <div
        className="
          absolute top-[-27px] left-[100px] sm:left-[300px] md:left-[500px] lg:left-[682px] 
          bg-[linear-gradient(180deg,_#876DC6_0%,_#FF28DF_100%)] blur-[200px]
          h-[802px] w-[200px] sm:w-[400px] md:w-[600px] lg:w-[802px]
        "
      ></div>
    </div>
  );
};
