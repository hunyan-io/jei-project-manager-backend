const express = require("express");
const Joi = require("joi");

const validate = require("../middlewares/validate");
const controller = require("../controllers/task.controller");

const router = express.Router();

router.get(
    "/:id",
    validate.params(
        Joi.object({ id: Joi.number().integer().required() }).required()
    ),
    controller.findOne
);

router.delete(
    "/:id",
    validate.params(
        Joi.object({ id: Joi.number().integer().required() }).required()
    ),
    controller.delete
);

router.put(
    "/:id",
    validate.params(
        Joi.object({ id: Joi.number().integer().required() }).required()
    ),
    validate.body(
        Joi.object({
            status: Joi.any().valid("to do", "doing", "done").required(),
        }).required()
    ),
    controller.update
);

module.exports = router;
