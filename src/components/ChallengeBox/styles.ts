import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 6.85rem;

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
