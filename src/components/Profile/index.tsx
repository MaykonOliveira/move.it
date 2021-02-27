import React from 'react';

import { Container } from './styles'

const Profile: React.FC = () => {
  return (
      <Container>
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
          <div>
              <strong>Diego Fernandes</strong>
              <p>
                  <img src="icons/level.svg" alt="Level"></img>
                  Level 1
            </p>
          </div>
      </Container>
  )
}

export default Profile;