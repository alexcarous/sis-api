import express from 'express';

import * as countryController from '../controllers/country/country.controller';
import isLoggedin from '../middleware/isLoggedin';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/:countryId/school', isLoggedin, countryController.getSchools);
router.get(
	'/school/:schoolId/grade',
	isLoggedin,
	countryController.getCountryGrades,
);

router.get('/', isLoggedin, countryController.getAllCountries);

module.exports = router;
