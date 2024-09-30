const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface Job {
  title: string;
  sub: string;
}

export interface SwiperCard {
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
}

export interface BannerTagData {
  text: string;
  icon: string;
}

export interface Skill {
  id: string;
  label: string;
}

const fetchWithErrorHandling = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text();
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

export const fetchSkills = async (): Promise<Skill[]> => {
  return fetchWithErrorHandling(`${API_BASE_URL}/api/skill`);
};
