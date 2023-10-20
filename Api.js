    import { View, Text } from 'react-native'
    import React from 'react'
    
    //const ROOT_DOMAIN = 'http://A-PHZ2-CIDI-010:3000/';
    const ROOT_DOMAIN = 'https://pharmalife.onrender.com/';
    //const ROOT_DOMAIN = 'http://9b-wzc.anonymous.front-proyecto-final.exp.direct:3000/'
    
    const Api = {
        ApiLogin:           ROOT_DOMAIN + 'login/',
        ApiUsuarioGetAll:   ROOT_DOMAIN + 'api/usuario/',
        /* ApiAgregarReceta:   ROOT_DOMAIN + 'api/receta/', */
        ApiAgregarReceta: ROOT_DOMAIN + 'api/receta/',
        ApiGetAllReceta:   ROOT_DOMAIN + 'api/receta/',
    }
    export default Api
   
 