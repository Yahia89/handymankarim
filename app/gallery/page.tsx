import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work Gallery - Handyman Karim',
  description: 'Browse through our portfolio of completed handyman projects and home improvements.',
};

const galleryImages = Array.from({ length: 34 }, (_, i) => ({
  src: `/assets/gallery/project-${i + 1}.jpg`,
  alt: `Project ${i + 1}`
}));

export default function Gallery() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Work Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={image.src} 
            className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={index < 6}
              loading={index < 6 ? 'eager' : 'lazy'}
              quality={75}
            />
          </div>
        ))}
      </div>
    </main>
  );
}