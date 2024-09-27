// pages/banner.tsx
import React from 'react';

interface BannerTag {
  text: string;
  icon: string;
}

// Fetching banner tags from API using getServerSideProps
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bannerTag`);
    if (!res.ok) throw new Error('Failed to fetch banner tags');
    const bannerTags: BannerTag[] = await res.json();
    return { props: { bannerTags } };
  } catch (error) {
    console.error(error);
    return { props: { bannerTags: [] } }; // Handle errors gracefully
  }
}

const BannerPage: React.FC<{ bannerTags: BannerTag[] }> = ({ bannerTags }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Banner Tags</h1>
      {bannerTags.length > 0 ? (
        <ul className="space-y-2">
          {bannerTags.map((tag, index) => (
            <li key={index} className="flex items-center space-x-2">
              <img src={tag.icon} alt={tag.text} className="w-5 h-5" />
              <span className="text-lg">{tag.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-500">No banner tags available.</p>
      )}
    </div>
  );
};

export default BannerPage;
