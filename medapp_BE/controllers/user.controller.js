const userVal = require('../models/user.model');

exports.create = (req, res) => {
    // Validate request
    let user = new userVal({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        question:req.body.question,
        answer:req.body.answer
        
    });
   if(!req.body) {
        return res.status(400).send({
            message: "user name can not be empty"+req.body
        });
    }

    // Create a user
    console.log('testing'+req.body.email);
    console.log('testing name '+user.email);
    // Save user in the database
    user.save()
    .then(data => {
        console.log('testingdate'+data);
        res.send(data);
    }).catch(err => {
        console.log('err -'+err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
   
    userVal.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.validateLogin = (req, res) => {
   const userName = req.body.email;
   const password = req.body.password;
   console.log(userName+';'+password);
    userVal.find( {email: userName, password:password})
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a userId
/*exports.findOne = (req, res) => {
    user.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "user name can not be empty"
        });
    }

    // Find user and update it with the request body
    user.findByIdAndUpdate(req.params.userId, {
        email: req.body.email || "Unemaild user",
        name: req.body.name
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    user.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    }); 
};*/