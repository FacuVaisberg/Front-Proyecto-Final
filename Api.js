    import { View, Text } from 'react-native'
    import React from 'react'
    
    //const ROOT_DOMAIN = 'http://A-PHZ2-CIDI-010:3000/';
    const ROOT_DOMAIN = 'http://localhost:3000/';
    //const ROOT_DOMAIN = 'http://9b-wzc.anonymous.front-proyecto-final.exp.direct:3000/'
    
    const Api = {
        ApiLogin:           ROOT_DOMAIN + 'login/',
        ApiUsuarioGetAll:   ROOT_DOMAIN + 'api/usuario/',
        /* ApiAgregarReceta:   ROOT_DOMAIN + 'api/receta/', */
        ApiAgregarReceta: 'http://localhost:3000/api/receta/',
        ApiGetAllReceta:    'http://localhost:3000/api/receta/',
    }
    export default Api
   
 