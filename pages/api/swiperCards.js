// /pages/api/swiper-cards.js

export default function handler(req, res) {
  const swiperCards = [
    {
      title: 'Abhishek Gupta',
      subtitle: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__',
    },
    {
      title: 'Abhishek Gupta',
      subtitle: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__',
    },
    {
      title: 'Abhishek Gupta',
      subtitle: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__',
    },
  ];

  // Return the swiper cards data as a JSON response
  res.status(200).json(swiperCards);
}
