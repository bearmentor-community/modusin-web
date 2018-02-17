import React from 'react';

const UserProfile = (props) => {
  return (<div className="d-flex">
    <img src="/image/dragon.jpg" className="profile-picture mb-2 mr-3" alt=""/>
    <div>
      <h3>Sachin Malhotra</h3>
      <span>Masters Student at University of Southern California</span><br/>
      <span>Feb 14 . 9 mins read</span>
    </div>
  </div>);
};

export default UserProfile;
