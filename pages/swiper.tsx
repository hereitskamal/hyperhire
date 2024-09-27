// pages/swiper.tsx
import React from 'react';

interface SwiperCard {
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
}

interface SwiperPageProps {
  swiperCards: SwiperCard[];
}

export async function getServerSideProps() {
  try {
    const swiperCardsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/swiperCards`);
    if (!swiperCardsRes.ok) throw new Error('Failed to fetch swiper cards');
    const swiperCards: SwiperCard[] = await swiperCardsRes.json();
    return { props: { swiperCards } };
  } catch (error) {
    console.error(error);
    return { props: { swiperCards: [] } }; // Handle errors gracefully
  }
}

const SwiperPage: React.FC<SwiperPageProps> = ({ swiperCards }) => {
  return (
    <div>
      <h1>Swiper Cards</h1>
      <div>
        {swiperCards.length > 0 ? (
          swiperCards.map((card, index) => (
            <div key={index}>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <ul>
                {card.tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
              <img src={card.imageUrl} alt={card.title} />
            </div>
          ))
        ) : (
          <p>No swiper cards available.</p>
        )}
      </div>
    </div>
  );
};

export default SwiperPage;
