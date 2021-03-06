import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    background: var(--blue-dark);
  }

  svg {
    margin-left: 0.5rem;
    size: 1.5rem;
  }
`;

export const CountdownButtonActive = styled(CountdownButton)`
  background: var(--white);
  color: var(--text);

  &:hover {
    background: var(--red);
    color: var(--white);
  }
`;

export const CountdownButtonFinished = styled(CountdownButton)`
  background: var(--white);
  color: var(--text);
  opacity: 0.6;

  &:hover {
    background: var(--white);
    color: var(--text);
    cursor: default;
  }

  svg {
    color: #4cd62b;
  }
`;
