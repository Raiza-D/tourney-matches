

export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerData, matchData) => {
  for (const player in playerData) {
    playerData[player].wins = 0;
    for (const match of matchData) {
      if (match.winner === player) {
        playerData[player].wins++;
      }
    }
  }
  return playerData;
};

const addWinsToPlayers = (playerData, matchData) => {
  for (const player in playerData) {
    playerData[player].wins = 0;
    let sum = matchData.reduce(function(previousValue, currentValue) {
      if (matchData.winner === player) {
        previousValue + currentValue;
        playerData[player].wins = sum;
      }
    });
  }
  return playerData;
}