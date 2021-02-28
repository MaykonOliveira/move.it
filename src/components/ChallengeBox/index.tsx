import React from 'react';

import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  return (
      <Container>
          <strong>Finalize um cliclo para receber um desafio</strong>

          <div>
            <img src="/icons/level-up.svg"></img>
            <span>Avance de level completando os desafios</span>
          </div>
      </Container>
  )
}

export default ChallengeBox;