

const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

const addWinsToPlayers = (playerData, matchData) => {
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

