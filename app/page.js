// import Hero from "@/components/home/Hero";
// import HowItWorks from "@/components/home/HowItWorks";
// import FeaturedShowrooms from "@/components/home/FeaturedShowrooms";
// import FeaturedBrands from "@/components/home/FeaturedBrands";
// import SuccessStories from "@/components/home/SuccessStories";
// import PlatformStats from "@/components/home/PlatformStats";
// import BlogPreview from "@/components/home/BlogPreview";
// import FinalCTA from "@/components/home/FinalCTA";

// // Metadatos específicos para la página de inicio
// export const metadata = {
//   title: "Conecta Marcas y Showrooms | La Plataforma Líder para Moda",
//   description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
//   openGraph: {
//     title: "Conecta Marcas y Showrooms | Plataforma Líder para Moda",
//     description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
//   },
// };

// export default function Home() {
//   return (
//     <>
//       {/* Sección Hero */}
//       <Hero />

//       {/* Sección Cómo Funciona */}
//       <HowItWorks />

//       {/* Sección Showrooms Destacados */}
//       <FeaturedShowrooms />

//       {/* Sección Marcas Destacadas */}
//       <FeaturedBrands />

//       {/* Sección Casos de Éxito */}
//       <SuccessStories />

//       {/* Sección Estadísticas de la Plataforma */}
//       <PlatformStats />

//       {/* Sección Blog/Novedades */}
//       <BlogPreview />

//       {/* Sección Llamada a la Acción Final */}
//       <FinalCTA />
//     </>
//   );
// }


import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-40 h-40 relative mb-6">
          <Image 
            src="/images/logo.svg" 
            alt="The Showroom App Logo" 
            width={160} 
            height={160} 
            priority
          />
        </div>
        
        <h1 className="text-5xl mb-4 text-brandTeal-800">
          The Showroom App
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl">
          Conectamos marcas de ropa con los mejores espacios para exhibir. 
          Encuentra showrooms o marcas que potencien tu negocio.
        </p>
        
        <div className="flex gap-4 mb-12">
          <button className="btn btn-primary">Para Marcas</button>
          <button className="btn btn-secondary">Para Showrooms</button>
        </div>
        
        <div className="card p-6 max-w-lg">
          <h3 className="mb-3">¿Cómo funciona?</h3>
          <p className="mb-4">
            Nuestra plataforma conecta marcas de moda con showrooms ideales para sus productos.
            Regístrate, explora opciones y comienza a crecer.
          </p>
          <button className="btn btn-outline">Más información</button>
        </div>
      </div>
    </div>
  );
}