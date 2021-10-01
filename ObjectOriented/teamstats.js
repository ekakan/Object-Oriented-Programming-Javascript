const team = {
  _players: [
    {
      firstName: 'Edward',
      lastName: 'Mendy',
      age: 28
    },
    {
      firstName: 'Toni',
      lastName: 'Rudiger',
      age: 27
    },
    {
      firstName: 'Thiago',
      lastName: 'Silva',
      age: 35
    },
  ],
  _games: [
    {
      opponent: 'Arsenal',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Brentford',
      teamPoints: 45,
      opponentPoints: 21
    },
    {
      opponent: 'Manchester City',
      teamPoints: 48,
      opponentPoints: 45
    },
  ],

  get players(){
    return this._players
  },

  get games(){
    return this._games
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game)
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
console.log();

team.addGame('Aston Villa', 48, 36);
team.addGame('Manchester United', 55, 54);
team.addGame('Leicester City', 55, 51);

console.log(team.games)
