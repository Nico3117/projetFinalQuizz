/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  connexion: async function (req, res) {

    var axios = require('axios');
    var statusReq;

    const email = req.params.email;
    const password = req.params.password;
    var drapeau = false;

    const retour = await axios.post('http://localhost:3000/user', {
      params: {
        email: email,
        password: password

      }
    }).then(function (response) {
      console.log(response);

        if (response.status === 200){

          drapeau = true;

        }

        else if (response > 299){

          drapeau = false;
        }

    })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (response) {
      });


    return res.view('quizz/question');

  },
};

