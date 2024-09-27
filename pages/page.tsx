// app/page.tsx
import React from 'react';

interface FooterInfo {
  title: string;
  subtitle: string;
  text: string;
}

async function fetchFooterInfo(): Promise<FooterInfo[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footerInfo`);

  if (!response.ok) {
    console.error('Failed to fetch footer information:', response.statusText);
    return []; // Return an empty array on error
  }

  return response.json();
}

const HomePage = async () => {
  const footerInfo = await fetchFooterInfo();

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
