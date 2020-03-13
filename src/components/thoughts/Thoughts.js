import React from "react";

import { Container, Box, BoxTitle, BoxText } from "./ThoughtsStyles";
import ThoughtDetails from './ThoughtDetails';

class Thoughts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentThought: null,
      showDetail: false
    };
  }

  handleThoughtClick = (thought) => {
    this.setState({
      currentThought: thought,
      showDetail: true
    });
  }

  handleThoughtDetailClick = () => {
    this.setState({
      currentThought: null,
      showDetail: false
    })
  }

  render() {
    
    return (
      <div>
        {!this.state.showDetail && <Container>
        {this.props.thoughtsData.map(thought => (
          <div>
            <Box key={thought.id} onClick={() => this.handleThoughtClick(thought)}>
              <BoxTitle>{thought.title}</BoxTitle>
              <BoxText>{thought.date}</BoxText>
            </Box>
          </div>
        ))}
      </Container>}

      {this.state.showDetail && <ThoughtDetails thought={this.state.currentThought} back={this.handleThoughtDetailClick} />}

    </div>
    );
  }
}

export default Thoughts;