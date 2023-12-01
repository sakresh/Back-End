const express = require("express")
const router = express.Router()
const {getAll} = require("../controller/controller")

router.route('/').get(getAll)

module.exports = router