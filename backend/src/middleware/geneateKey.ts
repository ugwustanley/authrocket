const generateApiKey = require('generate-api-key')

export default function getApikey(){
    
    return generateApiKey({method: "string"})
}