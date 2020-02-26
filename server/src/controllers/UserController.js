


exports.getUsers = async (req, res) => {
    const users = [
        {id:1, name:'Bore Spuzic Kvaka', email:'bore@mail.ba'},
        {id:2, name:'Nedeljko Bilkic', email:'nedjo@mail.sr'}
    ]
    return res.status(400).json( users );
 }
