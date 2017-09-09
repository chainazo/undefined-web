import axios from 'axios'
export const FETCH_MOIM = 'FETCH_MOIM';
export const FETCH_MEETUP_DETAIL = 'FETCH_MEETUP_DETAIL';

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
