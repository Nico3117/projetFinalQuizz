/**
 * QuizzController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  test: async function (req, res) {

    console.log("toto");
    return res.view('user/connexion');

  },

};
