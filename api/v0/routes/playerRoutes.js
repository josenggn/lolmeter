const router = require('express').Router()

const players = require('../controllers/playerController')

/**
 * Gets all players / Creates a player
 *
 * @section players
 * @type get post
 * @url /v0/players
*/
router.route('/players')
  .get(players.get_players)
  .post(players.create_player)

/**
 * Gets / Updates / Deletes a player
 *
 * @section players
 * @type get post
 * @url /v0/players
*/
router.route('/players/:playerName')
  .get(players.get_player)
  .put(players.update_player)
  .delete(players.delete_player)

/**
 * Gets / Updates a player elo
 *
 * @section players
 * @type get post
 * @url /v0/players/elo
*/
router.route('/players/:playerName/elo')
  .get(players.get_elo)
  .put(players.update_elo)

/**
 * Gets / Updates a player results
 *
 * @section players
 * @type get post
 * @url /v0/players/elo
*/
router.route('/players/:playerName/results')
  .get(players.get_player_results)
  .put(players.update_player_results)

module.exports = router
