// app/portfolio/[slug]/page.jsx

import WeddingHeroSection from '@/components/WeddingHeroSection';
import WeddingGallery from '@/components/WeddingGallery';

// Wedding data for all 6 weddings
const weddingsData = {
  'aman-tara': {
    brideName: 'Tara',
    groomName: 'Aman',
    videoUrl: '/videos/video7.mp4',
    weddingFolder: 'wedding1', // Folder name in public/
  },
  'ravi-karan': {
    brideName: 'Karan',
    groomName: 'Ravi',
    videoUrl: '/videos/video2.mp4',
    weddingFolder: 'wedding2',
  },
  'manisha-deepak': {
    brideName: 'Manisha',
    groomName: 'Deepak',
    videoUrl: '/videos/video3.mp4',
    weddingFolder: 'wedding3',
  },
  'rahul-sarah': {
    brideName: 'Sarah',
    groomName: 'Rahul',
    videoUrl: '/videos/video4.mp4',
    weddingFolder: 'wedding4',
  },
  'anusha-virat': {
    brideName: 'Anusha',
    groomName: 'Virat',
    videoUrl: '/videos/video5.mp4',
    weddingFolder: 'wedding5',
  },
  'shravan-nikita': {
    brideName: 'Nikita',
    groomName: 'Shravan',
    videoUrl: '/videos/video6.mp4',
    weddingFolder: 'wedding6',
  },
};

export default async function WeddingDetailPage({ params }) {
  const resolvedParams = await params;
  const wedding = weddingsData[resolvedParams.slug];

  if (!wedding) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Wedding Not Found</h1>
          <p className="text-gray-400 mb-8">The wedding you're looking for doesn't exist.</p>
          <a 
            href="/portfolio" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <WeddingHeroSection 
        videoUrl={wedding.videoUrl}
        brideName={wedding.brideName}
        groomName={wedding.groomName}
      />
      
      {/* Pinterest-style Gallery */}
      <WeddingGallery weddingFolder={wedding.weddingFolder} />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(weddingsData).map((slug) => ({
    slug: slug,
  }));
}