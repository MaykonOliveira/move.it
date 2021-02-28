import Head from 'next/head';

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

import { Container } from './styles'
import ChallengeBox from '../components/ChallengeBox';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>
      
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox></ChallengeBox>
        </div>

      </section>
    </Container>
  );
}
