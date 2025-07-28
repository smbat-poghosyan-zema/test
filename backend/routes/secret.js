const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

/**
 * Dummy protected route used for testing JWT auth.
 */
router.get('/secret', auth, (req, res) => {
  res.json({ data: 'secret data' });
});

module.exports = router;
