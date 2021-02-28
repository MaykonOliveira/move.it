import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 6.85rem;

  border-radius: 5px;

  background: var(--white);

  strong {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align:center;
  }

  div {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      svg {
          width: 3.75rem;
      }

      span {
          margin-top: 0.65rem;
          font-weight: 400;
          line-height: 1.65rem;

          text-align: center;
      }
  }
`;

export const ContainerActiveChallenge = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background: var(--white);
`;

export const ExperienceContainer = styled.div`
  padding: 1.65rem 4rem;

  border-bottom: 1px solid #DCDDE0;

  strong {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.9rem;
    color: #5965E0;
  }
`;

export const ChallengeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 4rem;
  margin: 2.5rem 0;

  text-align: center;

  img {
    width: 8.75rem;
  }

  strong {
    font-weight: 600;
    font-size: 1.85rem;
    line-height: 2.5rem;
    margin-top: 1.5rem;
    color: var(--title);
  }

  p {
    line-height: 1.65rem;
    margin-top: 0.5rem;
  }
`;

export const ChallengeActions = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;

  align-items: center;
  justify-content: center;

  button {
    flex: 1;
    background: none;
    border: 0;
    font-weight: 500;
    height: 100%;
  }

  button:first-child {
    border-radius: 0px 0px 0px 5px;
    color: var(--red);
    background: #fef5f5;
  }

  button:last-child {
    border-radius: 0px 0px 5px 0px;
    color: #3FB023;
    background: #f7fff6;
  }
`;