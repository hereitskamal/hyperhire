export default function handler(req, res) {
  const bannerTags = [
    { text: '해외 마케팅', icon: '/icons/marketing.svg' },
    { text: '퍼블리셔', icon: '/icons/image.svg' },
    { text: '캐드원(제도사)', icon: '/icons/box.svg' },
    { text: '해외 세일즈', icon: '/icons/target.svg' },
    { text: '해외 CS', icon: '/icons/target.svg' },
  ];

  res.status(200).json(bannerTags);
}
