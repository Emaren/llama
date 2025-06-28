const { User } = require('../../models');
module.exports = (req, res) => {
  const username = req.body.username;
  if (!username || typeof username !== 'string') {
    return res.status(400).send({ message: 'Invalid username' });
  }
  User.findOne({ where: { username } })
    .then(user => {
      if (!user) {
        return res.status(200).send({ message: 'Username available' });
      }
      return res.status(400).send({ message: 'Username taken' });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send({ message: 'Error validating username' });
    });
};
