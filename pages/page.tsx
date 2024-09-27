
import React from 'react';

interface FooterInfo {
  title: string;
  subtitle: string;
  text: string;
}

const fetchFooterInfo = async (): Promise<FooterInfo[]> => {
  const footerInfoRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footerInfo`);
  if (!footerInfoRes.ok) {
    throw new Error('Failed to fetch footer info');
  }
  return footerInfoRes.json();
};

const FooterPage: React.FC = async () => {
  const footerInfo: FooterInfo[] = await fetchFooterInfo();

  return (
    <div>
      <h1>Footer Info</h1>
      <ul>
        {footerInfo.map((info, index) => (
          <li key={index}>
            <strong>{info.title}</strong>: {info.subtitle} - {info.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPage;
