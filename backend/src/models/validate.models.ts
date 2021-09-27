import Joi from 'joi'


export  const validationSchema = Joi.object({

    email: Joi.string()
        .max(150)
        .required()
        .email({
            minDomainSegments: 2
        }),

    password: Joi.string()
        .min(6)
        .max(255)
        .required()
});