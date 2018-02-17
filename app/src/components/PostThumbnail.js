import React from 'react';
import {Row, Col} from 'reactstrap'
const PostThumbnail = (props) => {
  return (<div>
    <Row>
      <Col sm="3" className="img-vertical-mid">
        <img src="/image/fadhli-zon.jpg" className="fit-container" alt=""/>
      </Col>
      <Col sm="6">
        <h3>
          <b>What Happens When Your Figure Skating Career Ends?</b>
        </h3>
        <p className="text-justify">After women retire from sports that focus on their youth and bodies, they have to figure out their real long program. Rachael Flatt helps build digital mental-health tools for those who will come next. </p>
        <p>
          <span className="small-text text-muted">Muhammad Haekal . 12 February 2018</span>
        </p>
      </Col>
      <Col sm="3"></Col>
    </Row>
  </div>);
};

export default PostThumbnail;
