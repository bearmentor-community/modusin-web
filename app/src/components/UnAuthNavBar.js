import React from 'react';
import {
  Container
} from 'reactstrap';
import TopUnAuthNavBar from './TopUnAuthNavBar'
import BottomNavbar from './BottomNavbar'
import FeaturedPost from './FeaturedPost'
import PostThumbnail from './PostThumbnail'


export default class UnAuthNavBar extends React.Component {

  render() {
    return (<div>
      <Container>
        <TopUnAuthNavBar/>
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
