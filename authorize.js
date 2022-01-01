const authorize =(req,res,next)=>{
    const {user} = req.query
    if(user ==='susan'){
        req.user = {name:'susan', id:2}
        next()
    }
    else {
        res.status(401).send('unauthorized')
    }

}
//After url add ?user=susan =>turn into authorize and you can visit the pages again

module.exports= authorize