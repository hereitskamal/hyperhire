export default function handler(req, res) {
  const infoData = [
    {
      title: '상호명',
      subtitle: '하이퍼하이어',
      text: 'Hyperhire India Private Limited',
    },
    {
      title: '대표 CEO',
      subtitle: '김주현',
      text: 'Juhyun Kim',
    },
    {
      title: '사업자등록번호 CIN',
      subtitle: '427-86-01187',
      text: 'U74110DL2016PTC290812',
    },
    {
      title: '주소 ADDRESS',
      subtitle: '서울특별시 강남대로 479, 지하 1층 238호',
      text: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  ];

  res.status(200).json(infoData);
}
