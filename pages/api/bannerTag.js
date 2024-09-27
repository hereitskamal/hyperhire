// api/bannerTag.js
export default function handler(req, res) {
  const bannerTags = [
    { text: '해외 마케팅', icon: '/icons/marketing.svg' }, // Globe icon for marketing
    { text: '퍼블리셔', icon: '/icons/image.svg' }, // Scroll icon for publisher
    { text: '캐드원(제도사)', icon: '/icons/box.svg' }, // Triangle ruler for CAD designer
    { text: '해외 세일즈', icon: '/icons/target.svg' }, // Briefcase icon for sales
    { text: '해외 CS', icon: '/icons/target.svg' }, // Speech bubble for customer service
  ];

  res.status(200).json(bannerTags);
}
