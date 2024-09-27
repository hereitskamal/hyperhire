import React from 'react';

// Define the structure of a swiper card
interface SwiperCard {
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
}

// Define the props for the SwiperPage component
interface SwiperPageProps {
  swiperCards: SwiperCard[];
}

// Fetching swiper cards from API using getServerSideProps
export async function getServerSideProps() {
  const swiperCardsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/swiperCards`);
  const swiperCards: SwiperCard[] = await swiperCardsRes.json();

  return {
    props: {
      swiperCards,
    },
  };
}

const SwiperPage: React.FC<SwiperPageProps> = ({ swiperCards }) => {
  return (
    <div>
      <h1>Swiper Cards</h1>
      <div>
        {swiperCards.map((card, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default SwiperPage;
