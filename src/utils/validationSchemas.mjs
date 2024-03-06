const createMenuItemValidationSchema = {
    name : {
        notEmpty : true,
        isString : true,
        trim : true
    },

    description : {
        notEmpty : true,
        isString : true,
        trim : true
    },
    available : {
        isBoolean :true
    }

}
const createReviewValidationSchema = {
    rating : {
        isNumber :true,
        notEmpty:true,
    },
    comment : {
        notEmpty : true,
        isString : true,
        trim : true
    },
    order_id : {
        isObjectId : true
    },
    date : {
        isDate : true
    }
}


const createOrderValidationSchema = {
    items: {
        isArray: {
            bail:true,
            options: {
              min: 1,
            },
        },
    },
    "items.*.price": {
        isFloat: true
    },
    "items.*.quantity": {
        isInt: true
    }
}
const createUserValidationSchema = {
    username: {
        errorMessage: 'Invalid username',
        isLength: {
            options: { min: 3 },
            errorMessage: 'Password should be at least 3 chars',
          },
        trim : true
    },
    password : {
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password should be at least 8 chars',
          },
        trim : true
    },

    firstName : {
        trim : true,
        notEmpty : true,
        isString : true,
    },
    lastName: {
        trim : true,
        notEmpty : true,
        isString : true,
    },
    email: {
       isEmail : true,
       trim : true,
       notEmpty : true,
       
    },
    role : {
        notEmpty : true,
        isString : true,
        required: true
    },
    address: {
        notEmpty : true,
        isString : true,
    },
    phoneNumber: {
        notEmpty : true,
        isString : true,
    },
}
 export default {
    createMenuItemValidationSchema,
    createReviewValidationSchema,
    createOrderValidationSchema,
    createUserValidationSchema,
 }




