import signupPage from '../pages/SignupPage'
import signupFactory from '../Factories/SignupFactory'

describe('Signup', () => {
    /*  beforeEach(function () {
         cy.fixture('deliver').then(function (d) {
             this.deliver = d
         })
     }) */
    it('User should be deliver', function () {
        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })
    it('Invalid Document', function () {
        var deliver = signupFactory.deliver()

        deliver.cpf = '123123456AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Invalid Email', function () {
        var deliver = signupFactory.deliver()

        deliver.email = 'andressa.gmail.com'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'adressNumber', output: 'É necessário informar o número do endereço' },
            { field: 'methodDeliver', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })
    
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
 
}) 