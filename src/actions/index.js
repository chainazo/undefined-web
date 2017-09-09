import axios from 'axios'
export const FETCH_MOIM = 'FETCH_MOIM';
export const FETCH_MEETUP_DETAIL = 'FETCH_MEETUP_DETAIL';
export const FETCH_MEETUP_ATTENDEE = 'FETCH_MEETUP_ATTENDEE';
export const TEST ='TEST';

export function fetchMoim() {
  const request = axios.get('/api/moim/');
  return {
    type: FETCH_MOIM,
    payload: request
  }
}

export function fetchMeetupDetail(id) {
  const request = axios.get(`/api/moim/${id}`);
  return {
    type: FETCH_MEETUP_DETAIL,
    payload: request
  }
}

export function fetchMeetupAttendee(id) {
  const request = axios.get(`/meetups/${id}/attendees`);
  return {
    type: FETCH_MEETUP_ATTENDEE,
    payload: request.data
  };
}

export function testActionCreator() {
  console.log('test action crea');
  return {
    type: TEST,
    payload: "ss"
  }
}
