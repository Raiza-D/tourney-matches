import React from 'react';
import playerData from '../data/PlayerData';
import matchData from '../data/matchData';
import Player from './Player';

function PlayerList(props) {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
};

export default PlayerList;