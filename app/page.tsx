'use client';
import Link from 'next/link';
import Image from 'next/image';
import { GeistSans } from 'geist/font/sans';

const services = [
  {
    title: "ADU Construction",
    description:
      "Specialized in building Accessory Dwelling Units (ADUs). Create additional living space with custom designs that match your property.",
    image: "/images/services/ADU.jpg",
  },
  {
    title: "Plumbing Services",
    description:
      "Comprehensive plumbing solutions for repairs, installations, and maintenance. From fixing leaks to complete bathroom renovations.",
    image: "/images/services/plumbing.jpg",
  },
  {
    title: "Roofing Services",
    description:
      "Expert roofing solutions including repairs, replacements, and maintenance. We handle all types of roofs with quality materials and professional installation.",
    image: "/images/services/roofing.jpg",
  },
  {
    title: "Remodeling & Construction",
    description:
      "Complete home remodeling services, from kitchen and bathroom renovations to whole-house transformations. Quality craftsmanship for your dream space.",
    image: "/images/services/remodeling.jpg",
  },
  {
    title: "Painting & Drywall",
    description:
      "Professional interior and exterior painting services, drywall installation, repair, and finishing. Transform your space with expert color solutions, as well as plastering services.",
    image: "/images/services/painting.jpg",
  },
  {
    title: "Flooring & Tile Services",
    description:
      "Expert installation and repair of hardwood, laminate, tile, and stone flooring. Professional tile work for bathrooms, kitchens, and custom designs. Quality materials and craftsmanship for lasting beauty in your home.",
    image: "/images/services/flooring.jpg",
  },
  // Add more services as needed
];

export default function Home() {
  return (
    <main className={`min-h-screen ${GeistSans.className}`}>
      {/* Wrap header and cards together */}
      <div className="sticky-container relative">
        <h1 className="sticky top-0 z-20 text-4xl md:text-5xl font-bold text-center pt-20 text-gray-900 backdrop-blur-sm backdrop-filter">
          Handyman Karim - Your Go to Handyman
        </h1>
        {/* Stacking Cards Section */}
        <section id="services" className="py-32">
          <div className="max-w-6xl mx-auto px-4">
            <ul id="cards" className="relative">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="card sticky top-50"
                  style={{ ['--index' as string]: index + 1 }}
                >
                  <div className="card__content grid grid-cols-2 gap-4 shadow-lg bg-white rounded-lg overflow-hidden">
                    {/* Left Half: Text */}
                    <div className="flex flex-col gap-4 items-start w-4/5 mx-auto text-left text-gray-900 p-10">
                      <h2 className="font-light text-3xl">
                        {service.title}
                      </h2>
                      <p className="font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Right Half: Image */}
                    <figure className="overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </figure>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Hero Section with Wave Effect */}
      <section className="relative bg-white h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Handyman karim, your go to handyman & contractor.
          </h1>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-yellow-900 transition-colors cursor-pointer z-10 relative inline-block mb-4 md:mb-0 md:mr-4"
          >
            Ready to hire me?
          </Link>
          <Link
            href="/gallery"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-yellow-900 transition-colors cursor-pointer z-10 relative inline-block"
          >
            Or you want to see my work first?
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] waves-effect" />
      </section>

      {/* Combined styles */}
      <style jsx global>{`
        /* Wave effect styles */
        .waves-effect::before,
        .waves-effect::after {
          content: '';
          position: absolute;
          width: 300vw;
          height: 300vw;
          top: -65vw;
          left: 50%;
          transform: translate(-50%, -75%);
          border-radius: 44%;
        }
        .waves-effect::before {
          background: white;
          animation: waves 8s linear infinite;
        }
        .waves-effect::after {
          background: rgba(255, 255, 255, 0.5);
          animation: waves 15s linear infinite;
        }

        /* Card styles */
        :root {
          --card-height: 40vw;
          --card-margin: 4vw;
          --card-top-offset: 1em;
          --numcards: ${services.length};
        }
        #cards {
          padding-bottom: calc(var(--numcards) * var(--card-top-offset));
          margin-bottom: var(--card-margin);
          list-style: none;
          position: relative;
        }
        .card {
          padding-top: calc(var(--index) * var(--card-top-offset));
        }
        .card__content {
          box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1),
            0 1em 2em rgba(0, 0, 0, 0.1);
          background: #fff;
          color: #0a0507;
          border-radius: 1em;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        /* Container for header and cards to control sticky behavior */
        .sticky-container {
          position: relative;
          /* This height should cover your header and all cards. Adjust as needed. */
          min-height: 150vh;
        }
      `}</style>
    </main>
  );
}
