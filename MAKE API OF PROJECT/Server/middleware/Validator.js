const validator = (req, res, next) => {
   
    console.log("req.user.role",req.user.role)
    if (!req.user) 
    {
        return res.status(401).send({ message: "Unauthorized" });
    }
    
    if (req.user.role !== "admin") 
    {
        return res.status(403).send({ message: "You don't have the required permissions" });
    }

    next(); 

};

module.exports = validator;
