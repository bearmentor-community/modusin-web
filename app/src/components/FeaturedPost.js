import React from 'react';
import {Row, Col} from 'reactstrap'
const FeaturedPost = (props) => {
  return (<div>
    <Row>
      <Col sm="8">
        <h4 className="underline">
          <b>Featured</b>
        </h4>
        <h3><b>What I wish I knew when I became CTO</b>
        </h3>
        <p className="text-justify">Over the last four years I’ve been the CTO at SketchDeck and now, as I leave and hand the reins onto the team, I wanted to reflect on the experience and what I wish I’d known at the start. It’s been a wild and wonderful experience. Founding a startup is an upside-down version of traditional employment: initially you’ve no idea if the company will take off nor if it’ll ever turn into a full-time job, then as it grows you keep on being thrust into new and different jobs.</p>
        <p>
          <span className="small-text text-muted">Muhammad Haekal . 12 February 2018</span>
        </p>
      </Col>
      <Col sm="4" className="img-vertical-mid">
          <img src="/image/dragon.jpg" className="fit-container" alt=""/>
      </Col>
    </Row>
  </div>);
};

export default FeaturedPost;
