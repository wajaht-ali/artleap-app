export const Gradients = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <div
        className="
          absolute top-0 inset-0 
          bg-[url('/assets/images/bg-gradient-1.png')]
          bg-cover bg-center
          sm:bg-[url('/assets/images/bg-gradient-2.png')]
          md:bg-[url('/assets/images/bg-gradient-1.png')]
          opacity-90
          transition-all duration-700"></div>

      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-black/30 via-transparent to-black/40
          pointer-events-none"></div>
    </div>
  );
};
