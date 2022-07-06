const playerData = {
  "Disguised Lizard": {
    gamerTag: "Disguised Lizard",
    firstName: "Daria ",
    lastName: "Stark",
  },
  DrSpiteful: {
    gamerTag: "DrSpiteful",
    firstName: "Terrell",
    lastName: "Hunter",
  },
  Henrikarex: {
    gamerTag: "Henrikarex",
    firstName: "Maia",
    lastName: "Ryder",
  },
  Gamerhorse: {
    gamerTag: "Gamerhorse",
    firstName: "Lucien",
    lastName: "Beltran",
  },
  IHasEyes: {
    gamerTag: "IHasEyes",
    firstName: "Matteo",
    lastName: "Wagstaff",
  },
  "Captain Slimy": {
    gamerTag: "Captain Slimy",
    firstName: "Persephone",
    lastName: "Shah",
  },
  H3nr1k4: {
    gamerTag: "H3nr1k4",
    firstName: "Elliott",
    lastName: "Herrera",
  },
};

const matchData = [
  {
    matchNumber: 1,
    players: ["Disguised Lizard", "DrSpiteful"],
    winner: "DrSpiteful",
    scoreDifference: 1,
  },
  {
    matchNumber: 2,
    players: ["Henrikarex", "Gamerhorse"],
    winner: "Henrikarex",
    scoreDifference: 2,
  },
  {
    matchNumber: 3,
    players: ["IHasEyes", "Captain Slimy"],
    winner: "Captain Slimy",
    scoreDifference: 1,
  },
  {
    matchNumber: 4,
    players: ["H3nr1k4", "DrSpiteful"],
    winner: "H3nr1k4",
    scoreDifference: 3,
  },
  {
    matchNumber: 5,
    players: ["Henrikarex", "Captain Slimy"],
    winner: "Henrikarex",
    scoreDifference: 1,
  },
  {
    matchNumber: 6,
    players: ["Henrikarex", "H3nr1k4"],
    winner: undefined,
    scoreDifference: undefined,
  },
];

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
  return matchData;
};

console.log(preparePlayerData(playerData));
console.log(addWinsToPlayers(playerData, matchData));
