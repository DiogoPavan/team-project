'use strict'

class InviteController {
  /**
   * Create/save a new invite.
   * POST invites
   */
  async store ({ request, response }) {
    console.log(request.team)
  }
}

module.exports = InviteController
