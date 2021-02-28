import React, { useContext } from 'react';
import { ChallengesContext } from '../../providers/ChallengesContext';

import { Container } from './styles'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
      <Container>
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
          <div>
              <strong>Diego Fernandes</strong>
              <p>
                  <img src="icons/level.svg" alt="Level"></img>
                  {`Level ${level}`}
            </p>
          </div>
      </Container>
  )
}

export default Profile;