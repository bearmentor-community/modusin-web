import React from 'react';
import {
  Container
} from 'reactstrap';
import TopUnAuthNavBar from '../components/TopUnAuthNavBar'
import BottomNavbar from '../components/BottomNavbar'
import FeaturedPost from '../components/FeaturedPost'
import PostThumbnail from '../components/PostThumbnail'


export default class UnAuthNavBar extends React.Component {

  render() {
    return (<div>
      <Container>
        <BottomNavbar/>
        <FeaturedPost/>
        <div><h4 className="underline">
          <b>Top Posts</b>
        </h4></div>
        <PostThumbnail/>
        <PostThumbnail/>
        <PostThumbnail/>
        <PostThumbnail/>
        <PostThumbnail/>
        <PostThumbnail/>
      </Container>

    </div>);
  }
}
