export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-y-8 row-start-2 items-center">
        <h2 className="font-bold text-3xl text-blue-500 text-center animate-pulse duration-[2000ms]">
          ArtLeap AI
        </h2>
        <p className="text-lg text-center">
          Transform your photos with the power of AI
        </p>
      </main>
    </div>
  );
}
