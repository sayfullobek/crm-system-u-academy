const router = require('express').Router();
const {studentController} = require("../controller")
const {verifyUsersToken} = require("../config")

router.get('/', studentController.getAll)
router.get('/search', studentController.search)
router.get('/:id', studentController.getOne)
router.get('/group-by/:groupId/:courseId', studentController.getStudentByCourse)
router.put("/change-type/:id", studentController.changeType)
router.post('/', studentController.create)
router.put('/:id', studentController.update)
router.delete('/:id', studentController.delete)

module.exports = router;