const express = require("express");

const {
  get,
  post,
  put,
  del 
} = require("../controllers/controller")

const router = express.Router();

router.route('/').get(get).post(post)
router.route('/:id').put(put).delete(del)

module.exports = router;
