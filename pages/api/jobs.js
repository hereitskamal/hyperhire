export default function handler(req, res) {
    const data = [
      { title: '평균 월 120만원', sub: '임금을 해당 국가를 기준으로 계산합니다.' },
      { title: '최대 3회 인력교체', sub: '막상 채용해보니 맞지 않아도 걱정하지 마세요.' },
      { title: '평균 3일, 최대 10일', sub: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
    ];
    res.status(200).json(data);
  }
  