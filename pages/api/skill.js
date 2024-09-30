const skills = [
  { id: 'korean-skill', label: '한국어 능력' },
  { id: 'work-skill', label: '업무 수행 능력' },
  { id: 'side-job', label: '겸업 여부' },
  { id: 'reputation-check', label: '평판 조회' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(skills);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
