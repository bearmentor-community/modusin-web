import React from 'react';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import UserProfile from '../components/UserProfile'

export default class SignIn extends React.Component {

  render() {
    return (<div>
      <Container>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8">
            <Container className="justify-content-md-center">
              <div className="text-left my-auto">
                <UserProfile/>
                <h2 className="mb-2">
                  <b>Tree Traversals explained: They’re like a class of lazy students trying to cheat on their exam</b>
                </h2>
                <img src="/image/dragon.jpg" className="fit-container mb-2" alt="profile-picture"/>
                <p>So the professors released the seating arrangement for the first test ever conducted this way. Say it had N students. If these students were to remain the same from one test to another, then it would have been very easy to cheat, right? Because the seating arrangement is always done alphabetically. Therefore, the professors keep on adding or removing students from this list from one test to another, and only released these modifications before each test. This way, students could never know deterministically before a test who would be sitting in front of or behind them.
                </p>
                <p>Let’s consider this problem in algorithmic terms. We are given a list of N elements where elements in this case are student’s names.</p>
                <p>
                  This list keeps on varying from one exam to another, such that new elements can be added to the list or existing elements can be removed from the list. Given the list of modifications at any given time T and a name N, we need to determine the elements B and A, such that B would come right before N and A would come right after N if the list were to be sorted. Now let’s look at what data structures are available to us and what would suit this problem the best.
                </p>

              </div>
            </Container>
          </Col>
          <Col sm="2"></Col>
        </Row>

      </Container>

    </div>);
  }
}
