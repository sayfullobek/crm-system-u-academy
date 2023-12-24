const router = require('express').Router()
const {verifyUsersToken} = require('../config')
const {lidTypesController} = require('../controller')

router.get('/', lidTypesController.getAll)
router.get('/:id', lidTypesController.getOne)
router.post('/', lidTypesController.create)
router.put('/:id', lidTypesController.edit)
router.delete('/:id', lidTypesController.delete)

module.exports = router