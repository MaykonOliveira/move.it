import React, { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../providers/CountdownContext";

import { Container, ContainerActiveChallenge, ExperienceContainer, ChallengeDetails, ChallengeActions} from "./styles";

import challengesJson from "../../../challenges.json";

const ChallengeBox: React.FC = () => {
  const { resetCountdown, hasFinished } = useContext(CountdownContext);
  const [activeChallenge, setActiveChallenge] = useState({});

  useEffect(() => {
    if (hasFinished) {
      setActiveChallenge(challengesJson[0]);
    }
  }, [hasFinished]);

  return hasFinished ? (
    <ContainerActiveChallenge>
      <ExperienceContainer>
        <strong>Ganhe 400 xp</strong>
      </ExperienceContainer>

      <ChallengeDetails>
        <img src="/icons/body.svg"/>
        <strong>Exercite-se</strong>
        <p>Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.</p>
      </ChallengeDetails>

      <ChallengeActions>
        <button>Falhei</button>
        <button>Completei</button>
      </ChallengeActions>
      
    </ContainerActiveChallenge>
  ) : (
    <Container>
      <strong>Finalize um cliclo para receber um desafio</strong>
      <div>
        <img src="/icons/level-up.svg"></img>
        <span>Avance de level completando os desafios</span>
      </div>
    </Container>
  );
};

export default ChallengeBox;
