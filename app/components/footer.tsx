'use client';

import React, { useEffect, useState } from 'react';

interface InfoData {
  title: string;
  subtitle: string;
  text: React.ReactNode;
}

const Footer: React.FC = () => {
  const [infoData, setInfoData] = useState<InfoData[]>([]);

  const fetchFooterInfo = async () => {
    try {
      const response = await fetch('/api/footerInfo');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setInfoData(data);
    } catch (error) {
      console.error('Failed to fetch footer info:', error);
    }
  };

  useEffect(() => {
    fetchFooterInfo();
  }, []);

  const iconPath = '/icons';

  return (
    <div className="bg-custom-gray py-10 px-4 md:px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="flex flex-col mb-4 md:mb-0 w-48">
          <div className="flex items-center mb-4 relative">
            <div className="h-6 w-6 bg-blue-700 rotate-45 absolute rounded" style={{ left: '0', top: '0' }}></div>
            <div className="h-6 w-6 bg-custom-blue rotate-45 absolute rounded" style={{ left: '12px', top: '0' }}></div>
            <h1 className="text-xl font-bold pl-10">HyperHire</h1>
          </div>
          <p className="text-sm mb-2">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          <p className="text-sm font-bold mb-1">010-0000-0000</p>
          <p className="text-sm font-bold">aaaaa@naver.com</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 md:mb-0">
          {[
            { icon: `${iconPath}/icon-code.svg`, title: '해외 개발자 원격 채용' },
            { icon: `${iconPath}/icon-avatar.svg`, title: '외국인 원격 채용 (비개발)' },
            { icon: `${iconPath}/icon-kor.svg`, title: '한국어 가능 외국인 채용' },
            { icon: `${iconPath}/icon-gear.svg`, title: '해외 개발자 활용 서비스' },
          ].map((item, index) => (
            <div key={index} className="footer-info-card bg-white p-3 rounded-lg md:w-48">
              <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mb-3">
                <img src={item.icon} alt={item.title} />
              </div>
              <div>
                <h2 className="font-bold text-sm pb-2">{item.title}</h2>
                <a href="#" className="flex items-center text-xs">
                  바로가기
                  <span className="ml-1">&#10145;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="flex flex-wrap gap-10">
          {infoData.map((info, index) => (
            <div key={index} className="bg-transparent text-black rounded-lg p-4">
              <h3 className="font-bold text-sm py-1">{info.title}</h3>
              <h4 className="text-xs py-1">{info.subtitle}</h4>
              <p className="text-xs font-bold">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
