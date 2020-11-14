const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const shortenerController = require('../controllers/ShortenerController');

router.get('/', homepageController.index);
router.post('/generate', shortenerController.generateUrl);
router.get('/:id(\\w+)', shortenerController.redirect);
router.get('/:id\\+', shortenerController.showStadistic);

module.exports = router;
