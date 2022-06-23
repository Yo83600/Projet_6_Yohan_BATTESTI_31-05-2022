const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(10)                                    
.is().max(100)                                  
.has().uppercase()                              
.has().lowercase()                             
.has().digits(2)                                
.has().not().spaces()                    

module.exports = passwordSchema;

// Validate against a password string
console.log(passwordSchema.validate('validPASS123'));
// => true
console.log(passwordSchema.validate('invalidPASS'));
// => false

// Get a full list of rules which failed
console.log(passwordSchema.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]