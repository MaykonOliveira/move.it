import React, { useState, useEffect, useContext } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { CountdownContext } from "../../providers/CountdownContext";

import {
  Container,
  CountdownButton,
  CountdownButtonActive,
  CountdownButtonFinished,
} from "./styles";

let countdownTimeout: NodeJS.Timeout;
const defaultCountdownTime = 0.1 * 60;

const Countdown: React.FC = () => {
  const { hasFinished, setHasFinishedStatus, time, setTimeValue, isActive, setIsActiveStatus } = useContext(CountdownContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function startCountdown() {
    setIsActiveStatus();
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActiveStatus();
    setTimeValue(defaultCountdownTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeValue(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinishedStatus();
      setIsActiveStatus();
    }
  }, [isActive, time]);

  return (
    <div>
      <Container>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButtonFinished disabled>
          Ciclo encerrado
          <AiOutlineCheckCircle color="green" />
        </CountdownButtonFinished>
      ) : isActive ? (
        <CountdownButtonActive type="button" onClick={resetCountdown}>
          Abandonar ciclo
          <IoClose />
        </CountdownButtonActive>
      ) : (
        <CountdownButton type="button" onClick={startCountdown}>
          Iniciar um ciclo
          <IoMdArrowDropright />
        </CountdownButton>
      )}
    </div>
  );
};

export default Countdown;
