import SkiperMarqeeDemo from "../Pages/SkiperMarqeeDemo"; // ✅ Adjust if needed

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">

      {/* Background Marquee */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <SkiperMarqeeDemo />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">Protifilo</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering your digital journey with creativity and code.
        </p>
      </div>
    </div>
  );
}
