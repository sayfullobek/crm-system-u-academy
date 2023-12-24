const router = require('express').Router();
const {courseController} = require("../controller")
const {verifyUsersToken} = require("../config")

router.get('/', courseController.getAll)
router.get('/:id', courseController.getOne)
router.post('/', courseController.create)
router.put('/:id', courseController.edit)
router.delete('/:id', courseController.delete)

module.exports = router;