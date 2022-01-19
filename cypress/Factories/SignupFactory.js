var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function (){
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11912345678',
            address: {
                postalCode: '06816340',
                street: 'Rua da Concórdia',
                addressNumber: '556',
                addressDetails: 'casa 4',
                district: 'Jardim Nossa Senhora de Fátima',
                cityUf: 'Embu das Artes/SP'
            },
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}