class Promesa{
    constructor(promesa){
        this._https = require('https');
        
    }

    requestJsonPlaceholder(link2){
        return new Promise((resolve, reject) => {
            this._https.get(link2, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }

    async hacerPeticion(){
        let result = await this.requestJsonPlaceholder(link2);
        console.table(result);
        console.error()
    }
    async  llamarProcesos (){
        let resultado3 = await this.hacerPeticion();
        console.log(resultado3)
      }

}

const linkes = 'https://jsonplaceholder.typicode.com/posts';
const link2= 'https://flagcdn.com/es/codes.json';
const link3 = 'https://jsonplaceholder.typicode.com/posts/2';

const hacerPeticiones = new Promesa();

// hacerPeticiones.llamarProcesos(link);
hacerPeticiones.hacerPeticion(link2);
// console.log(hacerPeticiones.hacerPeticion(link));
// console.log(hacerPeticiones.hacerPeticion(link2));
// console.log(hacerPeticiones.hacerPeticion(link3));
