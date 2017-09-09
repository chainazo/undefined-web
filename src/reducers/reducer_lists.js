import { FETCH_MOIM, FETCH_MEETUP_DETAIL, FETCH_MEETUP_ATTENDEE, TEST } from '../actions/index';

// const initialState = {
//     moimList: [],
// };

const initialState = {
  moimList: [
    {
      title: '제6회 경찰청 인권영화제',
      thumbnail: 'https://onoffmix.com/images/event/91161/s',
      moimDate: '2017-08-27',
      like: 5
    },{
      title: '시간관리 첫걸음 - 나에게 맞는 시간관리법 찾기',
      thumbnail: 'https://onoffmix.com/images/event/84413/s',
      moimDate: '2017-08-25',
      like: 7
    },{
      title: 'TEDxDongdaemun',
      thumbnail: 'https://onoffmix.com/images/event/108950/s',
      moimDate: '2017-08-20',
      like: 10
    }
  ],
  meetupDetail: {
    title: '[제1회] 9XD Hackathon',
    thumbnail: 'https://onoffmix.com/images/event/91161/s',
    summary: '1회 해커톤을 합니다. 내 꺼를 만드는 내꺼톤',
    moimDate: '2017-08-27',
  },
  attendee: [],
  test: []
};


export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_MOIM:
      // return { ...state, moimList: action.payload.data };
      return state;
    case FETCH_MEETUP_DETAIL:
      // return { ...state, moimList: action.payload.data };
      return state;
    case FETCH_MEETUP_ATTENDEE:
      return { ...state,
        attendee: action.payload.data };
    case TEST:
    return { ...state,
      test: [...state.test, action.payload]
    };
    default:
      return state;
  }
}
