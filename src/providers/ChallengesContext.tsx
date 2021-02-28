import React, { createContext, useCallback, useState } from "react";

interface ChallengesContextData {
    level: number;
    levelUp(): void;
    completedChallenges: number;
    addCompletedChallenges(): void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel ] = useState(1);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function addCompletedChallenges(){
    setCompletedChallenges(completedChallenges + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp, completedChallenges, addCompletedChallenges }}>
        {children}
    </ChallengesContext.Provider>
  );
};
