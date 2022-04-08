if(process.env.NODE_ENV === 'production'){


    console.log('development')
    module.exports = require('./prod')

}
else{

    module.exports = require('./dev')

}
