// pages/index.tsx
import React from 'react';
import { GetServerSideProps } from 'next';

// Define TypeScript interface for FooterInfo
interface FooterInfo {
  title: string;
  subtitle: string;
  text: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const footerInfoRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footerInfo`);

  // Handle potential errors
  if (!footerInfoRes.ok) {
    console.error('Failed to fetch footer information:', footerInfoRes.statusText);
    return {
      props: {
        footerInfo: [], // Return an empty array on error
      },
    };
  }

  const footerInfo: FooterInfo[] = await footerInfoRes.json();

  return {
    props: {
      footerInfo,
    },
  };
};

interface HomePageProps {
  footerInfo: FooterInfo[];
}

const HomePage: React.FC<HomePageProps> = ({ footerInfo }) => {
  return (
    <div>
      <h1>Footer Information</h1>
      <ul>
        {footerInfo.map((info, index) => (
          <li key={index}>
            <h3>{info.title}</h3>
            <p>{info.subtitle}</p>
            <p>{info.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
