const router = require('express').Router()

const teams = require('../controllers/teamController')

/**
 * Gets all teams / Create a team
 *
 * @section teams
 * @type get post
 * @url /v0/teams
*/
router.route('/teams')
  .get(teams.get_teams)
  .post(teams.create_team)

/**
 * Gets / Updates / Deletes a team
 *
 * @section teams
 * @type get post
 * @url /v0/teams
*/
router.route('/teams/:teamName')
  .get(teams.get_team)
  .put(teams.update_team)
  .delete(teams.delete_team)

module.exports = router
