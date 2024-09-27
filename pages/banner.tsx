import React from 'react';

interface BannerTag {
  text: string;
  icon: string;
}

interface BannerPageProps {
  bannerTags: BannerTag[];
}

export async function getServerSideProps() {
  const bannerTagRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bannerTag`);
  const bannerTags: BannerTag[] = await bannerTagRes.json();

  return {
    props: {
      bannerTags,
    },
  };
}

const BannerPage: React.FC<BannerPageProps> = ({ bannerTags }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Banner Tags</h1>
      <ul className="space-y-2">
        {bannerTags.map((tag, index) => (
          <li key={index} className="flex items-center space-x-2">
            <img src={tag.icon} alt={tag.text} className="w-5 h-5" />
            <span className="text-lg">{tag.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannerPage;
