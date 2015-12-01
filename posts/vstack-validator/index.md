---
title: 'vstack-validator'
date: '2015-10-28'
lat: 52.1148955
lng: 51.1171140
author: 'Ramon Gebben'
header: 'http://i.imgur.com/Ex08W0g.jpg'
shop: Daily Javascript
avatar: 'http://i.imgur.com/UBLi3O3.jpg'
tags: 'design events'
---

Vstack-validator (GitHub: [vslinko/vstack-validator](https://github.com/vslinko/vstack-validator), License: MIT, npm: vstack-validator)

When you are working with very complex and deeply nested data structures, validation can become a real pain.
Vstack-validator tries to solve this problem by providing you with a declarative API which consists of 3 methods: a validator, a constraint and a schema.
The Validator is a function that receives a value and returns boolean result of validation.
Constraint is a function that receives a value and returns validation metadata.
With a Schema we create declarations of the constraints in a tree, which in turn can be used to validate an object, which would look like this:

```javascript
import {schema} from 'vstack-validator';

const userSchema = schema.type('user', {
    email: {
        notEmpty: schema.constraint(schema.validators.isNotEmpty, 'Email is empty'),
        email: schema.constraint(schema.validators.isEmail, 'Email is not valid'),
    },
    password: schema.optional({
        notEmpty: schema.constraint(schema.validators.isNotEmpty, 'Password is empty'),
        minLength: schema.minLength(3, 'Password is less than 3'),
    }),
});

const itemSchema = schema.type('item', {
    name: {
        notEmpty: schema.constraint(schema.validators.isNotEmpty, 'Name is empty'),
    },
});

const cartSchema = schema.type('cart', {
    user: userSchema,
    items: schema.list(itemSchema),
});

let validationData = {
    user: {
        email: '',
        password: '',
    },
    items: [
        { name: '' },
    ],
};

cartSchema.check(validationData)
          .then((constraintResult) => console.log(constraintResult));
```
When the `check` is executed `constraintResult` it would look something like this:

```javascript
{
    valid: false,
    message: 'Objectisnotvalid',
    children: {
        user: {
            valid: false,
            message: 'Objectisnotvalid',
            children: {
                email: {
                    valid: false,
                    message: 'Valueisnotvalid',
                    children: {
                        notEmpty: {
                            valid: false,
                            message: 'Emailisempty',
                            children: null
                        },
                        email: {
                            valid: false,
                            message: 'Emailisnotvalid',
                            children: null
                        }
                    }
                },
                password: {
                    valid: false,
                    message: 'Valueisnotvalid',
                    children: {
                        notEmpty: {
                            valid: false,
                            message: 'Passwordisempty',
                            children: null
                        },
                        minLength: {
                            valid: false,
                            message: 'Passwordislessthan3',
                            children: null
                        }
                    }
                }
            }
        },
        items: {
            valid: false,
            message: 'Arrayisnotvalid',
            children: [
                {
                    valid: false,
                    message: 'Objectisnotvalid',
                    children: {
                        name: {
                            valid: false,
                            message: 'Valueisnotvalid',
                            children: {
                                notEmpty: {
                                    valid: false,
                                    message: 'Nameisempty',
                                    children: null
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
}
```
