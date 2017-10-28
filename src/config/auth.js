const jwt = require( 'jsonwebtoken' )
const env = require( '../.env' )

module.exports = ( req, res, next ) => {
    if ( req.method === 'OPTIONS' ) {
        next()

    } else {
        const token = req.body.token || req.query.token || req.headers[ 'authorization' ]

        if ( !token ) {
            return res.status( 403 ).send({ errors: [ 'Nenhum token foi enviado' ] })
        }

        jwt.verify( token, env.authSecret, function( err, decoded ) {
            if ( err ) {
                return res.status( 403 ).send({ errors: [ 'A autenticação do token falhou' ] })

            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}
