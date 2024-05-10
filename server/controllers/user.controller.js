const test = (req,res)=>{
    res.json({
        message:'API WORKS'
    })
}

const signout = (req,res,next)=>{
    try{
        res.clearCookie('access_token')
    }
}

module.exports = test;