const escapeRegex = require('./searcg-regex-escape');

module.exports =  (req, perpage = 3) => {
    const params =  {};
    params.page = Number(req.query.page) || 1;
    params.perpage = Number(req.query.perpage) || perpage; 
    params.search = null;
    if(req.query.search) {
       // const searchQuery = req.query.search;
        params.search = new RegExp(escapeRegex(req.query.search), 'gi');
    }


    return params;

};