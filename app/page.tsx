'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Card from './components/organisms/SwiperCards';
import InfoCard from './components/molecules/InfoCard';
import HeroSection from './components/organisms/HeroSection';
import ChatBubble from './components/molecules/ChatBubble';
import BannerTag from './components/molecules/BannerTag';
import { fetchBannerTags, fetchJobs, fetchSwiperCards, fetchSkills } from './utils/api';
import SnackbarLoader from './components/molecules/SnackbarLoader';

interface Job {
  title: string;
  sub: string;
}

interface SwiperCard {
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
}

interface BannerTagData {
  text: string;
  icon: string;
}

interface Skill {
  id: string;
  label: string;
}

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [swiperCards, setSwiperCards] = useState<SwiperCard[]>([]);
  const [bannerTags, setBannerTags] = useState<BannerTagData[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loadingJobs, setLoadingJobs] = useState<boolean>(true);
  const [loadingSwiperCards, setLoadingSwiperCards] = useState<boolean>(true);
  const [loadingBannerTags, setLoadingBannerTags] = useState<boolean>(true);
  const [loadingSkills, setLoadingSkills] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedJobs, fetchedSwiperCards, fetchedBannerTags, fetchedSkills] = await Promise.all([
          fetchJobs(),
          fetchSwiperCards(),
          fetchBannerTags(),
          fetchSkills(), // Fetch skills from the new API
        ]);
        setJobs(fetchedJobs);
        setSwiperCards(fetchedSwiperCards);
        setBannerTags(fetchedBannerTags);
        setSkills(fetchedSkills); // Set skills data
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoadingJobs(false);
        setLoadingSwiperCards(false);
        setLoadingBannerTags(false);
        setLoadingSkills(false);
      }
    };

    loadData();
  }, []);

  const isLoading = loadingJobs || loadingSwiperCards || loadingBannerTags || loadingSkills;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="relative flex flex-col min-h-screen md:py-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg-image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}></div>
      <div className="absolute inset-0 bg-cyan-600 opacity-80"></div>

      {/* Snackbar Loader */}
      <SnackbarLoader message="Loading data, please wait..." isLoading={isLoading} />

      <div className="container mx-auto flex flex-col md:flex-row md:px-8 sm:px-4 pt-20 md:px-16 relative z-10">
        <div className="flex-1 flex flex-col justify-center px-2 md:0 mb-4 md:mb-0 max-w-l mx-auto">
          <div className="w-auto">
            <ChatBubble content="풀타임, 파트타임" delay={0.8} trianglePosition="left-bottom" />
          </div>
          <HeroSection
            title={
              <>
                <div className="pb-1">최고의 실력을 가진 </div>
                <div>외국인 인재를 찾고 계신가요?</div>
              </>
            }
            subtitle={
              <>
                법률 및 인사관리 부담없이
                <br />
                1주일 이내에 원격으로 채용해보세요{' '}
                <div className="hidden md:py-4 md:block">
                  <Link href="/contact" className="underline">
                    개발자가 필요하신가요?
                  </Link>
                </div>
              </>
            }
          />

          {error && <p className="text-red-500">{error}</p>}

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <InfoCard key={index} content={job.title} sub={job.sub} delay={0.5 + index * 0.2} />
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex flex-col items-center">
          <div className="w-auto">
            <ChatBubble
              content="월 100만원"
              delay={0.8}
              trianglePosition="center-bottom"
              icon={'/icons/dolor.svg'}
              style={{ top: '-40px', left: '35%', position: 'relative' }}
            />

            <button className="absolute text-xl left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white p-1 rounded-full">
              &#10094;
            </button>
            <button className="absolute text-xl right-0 md:right-4 top-1/2 transform -translate-y-1/2 z-20 text-white p-1 rounded-full">
              &#10095;
            </button>

            <div className="flex relative gap-2 px-2 md:p-0">
              {swiperCards.map((card, index) => {
                const isCenterCard = index === 2;

                return (
                  <Card
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    tags={card.tags}
                    imageSize={'h-14 w-14 md:h-24 md:w-24'}
                    titleFontSize={isCenterCard ? 'text-lg' : 'text-sm'}
                    tagsFontSize={isCenterCard ? 'text-sm' : 'text-xs'}
                    className={
                      isCenterCard
                        ? 'absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 p-2'
                        : 'p-0 md:p-2'
                    }
                    width={isCenterCard ? 'w-[200px] md:w-[252px]' : 'w-[140px] md:w-[220px]'}
                    height={isCenterCard ? 'h-[300px] md:h-[366px]' : 'h-[280px] md:h-[306px]'}
                    imageUrl={card.imageUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 pt-12 grid grid-cols-2 gap-2 md:hidden">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center border-2 border-white rounded bg-white">
                <img src="/icons/check.svg" alt="check" className="w-3 h-3" />
              </div>
              <label htmlFor={skill.id} className="ml-2 text-white">
                {skill.label}
              </label>
            </div>
          ))}
        </div>

        <div className="p-4 md:hidden text-yellow-300">
          <Link href="/contact" className="underline">
            개발자가 필요하신가요?
          </Link>
        </div>
      </div>

      <div
        className="hidden flex w-full justify-start overflow-x-auto scrollbar-hide pt-12 no-select z-30 md:block"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <div className="flex gap-2 pl-40 ml-2">
          {bannerTags.map((tag, index) => (
            <BannerTag key={index} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
