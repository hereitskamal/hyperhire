// pages/index.tsx
import React from 'react';

interface FooterInfo {
  title: string;
  subtitle: string;
  text: string;
}

// Fetching footer information from API using getServerSideProps
export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footerInfo`);
    if (!response.ok) throw new Error('Failed to fetch footer info');
    const footerInfo: FooterInfo[] = await response.json();
    return { props: { footerInfo } };
  } catch (error) {
    console.error(error);
    return { props: { footerInfo: [] } }; // Handle errors gracefully
  }
}

const HomePage: React.FC<{ footerInfo: FooterInfo[] }> = ({ footerInfo }) => {
  return (
    <div>
      <h1>Footer Information</h1>
      <ul>
        {footerInfo.length > 0 ? (
          footerInfo.map((info, index) => (
            <li key={index}>
              <h3>{info.title}</h3>
              <p>{info.subtitle}</p>
              <p>{info.text}</p>
            </li>
          ))
        ) : (
          <li>No footer information available.</li>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
