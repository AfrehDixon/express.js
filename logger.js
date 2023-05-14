logger =(req,res,nex )=>{
    const method= req.method;
    const url = req.url;
    const time = new Date().getDate()
    console.log(method, url ,time)
    nex()

}

module.exports = logger