const episodeIndex = require('./routes/episodeIndex');
const episodeDescription = require('./routes/episodeDescription');
const seasons = require('./routes/seasons')
const episodeTitle = require('./routes/episodeTitle')
const router = require('express').Router();
const episodes = require('./routes/episodes');
const images = require('./routes/images');


router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/episode-description/:index", episodeDescription);
router.get("/episode-title/:index", episodeTitle);
router.get("/seasons/:index", seasons);
router.get("/image/:index", images);

module.exports = router;
