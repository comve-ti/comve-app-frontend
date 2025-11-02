import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
      <Image 
        src="/logo-comve.png" 
        alt="Logo Comve" 
        width={200} 
        height={200} 
        className="mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido a Comve</h1>
      <p className="text-gray-600 text-lg">Tu marketplace geolocalizado en Argentina</p>
    </main>
  );
}