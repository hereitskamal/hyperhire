// utils/api.ts
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

export const fetchJobs = async (): Promise<Job[]> => {
  const res = await fetch('/api/jobs');
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
};

export const fetchSwiperCards = async (): Promise<SwiperCard[]> => {
  const res = await fetch('/api/swiperCards');
  if (!res.ok) throw new Error('Failed to fetch swiper cards');
  return res.json();
};

export const fetchBannerTags = async (): Promise<BannerTagData[]> => {
  const res = await fetch('/api/bannerTag');
  if (!res.ok) throw new Error('Failed to fetch banner tags');
  return res.json();
};
export const fetchSkills = async () => {
  const response = await fetch('/api/skill');
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return await response.json();
};
