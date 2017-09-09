import React from 'react';
import { Link } from 'react-router-dom';

const Meetup = ({ meetup }) => (
  <Link className="Meetup" to={`/meetups/${meetup.id}`}>
    <div
      className="Meetup__Image"
      style={{ backgroundImage: `url('${meetup.cover_image_url}')` }}
    ></div>
    <div className="Meetup__Body">
      <span>{meetup.title}</span>
      <p>{meetup.summary}</p>
    </div>
  </Link>
);

export default Meetup;
