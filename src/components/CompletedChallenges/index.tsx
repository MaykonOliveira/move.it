import React, { useContext } from 'react';
import { ChallengesContext } from '../../providers/ChallengesContext';

import { Container } from './styles';

function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);
  
  return (
      <Container>
          <span>Desafios completos</span>
          <span>{completedChallenges}</span>
      </Container>
  )
}

export default CompletedChallenges;