import { FETCH_MOIM, FETCH_MEETUP_DETAIL } from '../actions/index';

// const initialState = {
//     moimList: [],
// };

const initialState = {
  moimList: [
    {
      title: '제6회 경찰청 인권영화제',
      thumbnail: 'https://onoffmix.com/images/event/91161/s',
      date: '2017-08-27',
      like: 5
    },{
      title: '시간관리 첫걸음 - 나에게 맞는 시간관리법 찾기',
      thumbnail: 'https://onoffmix.com/images/event/84413/s',
      date: '2017-08-25',
      like: 7
    },{
      title: 'TEDxDongdaemun',
      thumbnail: 'https://onoffmix.com/images/event/108950/s',
      date: '2017-08-20',
      like: 10
    }
  ],
  meetupDetail: {
    title: '[제1회] 9XD Hackathon',
    thumbnail: 'https://onoffmix.com/images/event/91161/s',
    summary: '1회 해커톤을 합니다. 내 꺼를 만드는 내꺼톤',
    date: '2017-08-27',
    user: {
      name: '장고맨',
      photo: 'https://avatars2.githubusercontent.com/u/3839771?v=4&s=460',

    },
    confirmedList: [
      {name: '진유림'},{name: '김멍멍'}
    ],
    waitingList: [
      {name: '해멍멍'},{name: '강뿅뿅'},{name: '장토토'}
    ],
    location: '선릉역 소프트웨어 마에스트로 센터',
    number: 45,
    type:'관리자 선정',
    contents: `#### 이거는 에이치 투입니다
이거는 일반 텍스트입니다.
정말입니까?
네 _markdown_을 지원하죠.

#### 밑에 이미지를 넣겠습니다
![image](https://cdn.dribbble.com/users/1484654/screenshots/3790913/girl_umbrella_texture_small.png)

> 이건 중요하죠
`
  }
};


export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_MOIM:
      // return { ...state, moimList: action.payload.data };
      return state;
    case FETCH_MEETUP_DETAIL:
      // return { ...state, moimList: action.payload.data };
      return state;
    default:
      return state;
  }
}
