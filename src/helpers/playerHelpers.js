// Converts playerData object into array
export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};


/* Calculates match wins for each player.
Iterates over each player in playerData. Then iterates over each match in matchData.
If player in iteration is the winner of the match, increase tally.
Return player showing wins key and value. */
export const addWinsToPlayers = (playerData, matchData) => {
  return playerDataArray.map((player) => {

    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {

      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return (accumulator += 1);
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
};