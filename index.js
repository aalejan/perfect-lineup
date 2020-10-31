function validateLineup(lineup) {
  const ogPositions = ['OF', '1B', '2B', '3B', 'SS', 'P', 'C']
  const totalSalary = lineup.reduce((acc, player) => {
    return acc + player.salary
  }, 0)
  const sameGame = lineup.reduce((acc, player) => {
    return acc.concat(player.gameId)
  }, [])
  const sameTeam = lineup.reduce((acc, player) => {
    return acc.concat(player.teamId)
  }, [])
  const positions = lineup.reduce((acc, player) => {
    return acc.concat(player.position)
  }, [])

  if (totalSalary > 45000 || lineup.length > 9) {
    return false
  }

  for (let i = 0; i < sameTeam.length; i++) {
    if (count(sameTeam, sameTeam[i]) > 2) {
      return false
    }
  }
  for (let i = 0; i < sameGame.length; i++) {
    if (count(sameGame, sameGame[i]) > 3) {
      return false
    }
  }

  if (count(positions, 'OF') !== 3) {
    return false
  }
  for (let i = 0; i < ogPositions.length; i++) {
    if (positions.indexOf(ogPositions[i]) === -1) {
      return false
    }
  }

  return true
}

function count(tooManyPlayers, gameId) {
  var count = 0

  for (let i = 0; i < tooManyPlayers.length; i++) {
    if (tooManyPlayers[i] === gameId) {
      count++
    }
  }

  return count
}

module.exports = validateLineup
