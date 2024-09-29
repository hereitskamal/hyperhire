// utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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

const fetchWithErrorHandling = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text(); // Optionally read the response body
    throw new Error(`Error ${res.status}: ${res.statusText} - ${errorText}`);
  }
  return res.json();
};

export const fetchJobs = async (): Promise<Job[]> => {
  return fetchWithErrorHandling(`${API_BASE_URL}/api/jobs`);
};

export const fetchSwiperCards = async (): Promise<SwiperCard[]> => {
  return fetchWithErrorHandling(`${API_BASE_URL}/api/swiperCards`);
};

export const fetchBannerTags = async (): Promise<BannerTagData[]> => {
  return fetchWithErrorHandling(`${API_BASE_URL}/api/bannerTag`);
};

export const fetchSkills = async (): Promise<any[]> => {
  return fetchWithErrorHandling(`${API_BASE_URL}/api/skill`);
};
