"use client";

import Image from "next/image";
import Link from "next/link";

// Datos de ejemplo para los casos de éxito
const SUCCESS_STORIES = [
  {
    id: "cs1",
    type: "marca",
    name: "Eco Trend",
    location: "Barcelona",
    image: "/images/success-marca-1.jpg", // Placeholder
    quote: "Gracias a la plataforma, pudimos exhibir nuestras prendas sostenibles en 3 showrooms diferentes en menos de un mes. Esto nos dio visibilidad con clientes de alto valor que ahora son compradores recurrentes.",
    results: [
      "300% más visibilidad",
      "15 nuevos clientes mayoristas",
      "Aumento de ventas del 70%"
    ],
    slug: "eco-trend-caso-exito"
  },
  {
    id: "cs2",
    type: "showroom",
    name: "Urban Space",
    location: "Madrid",
    image: "/images/success-showroom-1.jpg", // Placeholder
    quote: "Antes de unirme a la plataforma, tenía periodos de baja ocupación que afectaban mi rentabilidad. Ahora mantengo una ocupación casi completa durante todo el año con marcas que comparten la visión estética de mi espacio.",
    results: [
      "Ocupación completa en 2 semanas",
      "Incremento del 40% en rentabilidad",
      "Red de contactos ampliada"
    ],
    slug: "urban-space-caso-exito"
  },
  {
    id: "cs3",
    type: "marca",
    name: "Luxury Elements",
    location: "Valencia",
    image: "/images/success-marca-2.jpg", // Placeholder
    quote: "Como marca emergente de accesorios de lujo, necesitábamos espacios que reflejaran la exclusividad de nuestros productos. La plataforma nos conectó con showrooms especializados que entendían perfectamente nuestras necesidades.",
    results: [
      "Presencia en 5 ciudades diferentes",
      "Colaboración con 3 influencers",
      "Reconocimiento de marca mejorado"
    ],
    slug: "luxury-elements-caso-exito"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          Historias de éxito
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-neutral-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden bg-neutral-200 flex-shrink-0 mr-4">
                    {/* Placeholder para la foto */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-neutral-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {story.type === "marca" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        )}
                      </svg>
                    </div>
                    {/* Aquí iría la imagen real si estuviera disponible */}
                    {/* <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-neutral-600">
                      {story.location} • {story.type === "marca" ? "Marca" : "Showroom"}
                    </p>
                  </div>
                </div>

                <blockquote className="italic text-neutral-700 mb-6 relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-neutral-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">{story.quote}</p>
                </blockquote>

                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="font-medium text-neutral-900 mb-2">Resultados clave:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-green-500 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-right">
                  <Link
                    href={`/casos-exito/${story.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center justify-end"
                  >
                    Leer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;