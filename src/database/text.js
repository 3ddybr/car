const Database = require('./db')
const createCar = require('./createCar')
Database.then (async (db)=> {
    carValue = {
    tipo:"Carro",
    marca:"GM",
    modelo:"Modelo GM - CHEVROLET COBALT LTZ 1.4 8V FLEXPOWER/ECONOFLEX 4P",
    versao:"Flexpower 1.4",
    ano:"3000",
    km:"50000",
    cor:"Prata",
    preco:"60000",
    fotos:"image/car/corolla.jpg",
    msg:"Descricao Vendo troco financio em até 60x para aposentados pensionista autônomos setor privado empréstimo consignado carta de crédito etc. Financiamos o seu próprio  veículos fazemos refinanciamento. Pegamos o seu carro consignado pra vender .só liga ou chama no zap .aprovo o seu crédito pelo zap confira .Fala qual veículo vc procura que eu arrumo pra vc São mais de 100 veículos de várias marcas e modelos confira.   aasjdkaj sdkjasd klasjd ;kljqdlk ;jas;dlkja ;skdjas;d wdoq jdoasjd oiqwjdoas jdlkjqd oasj dokjqdo kjql sdj qokdj alkd jqodjak sjdqodjaskdj qlkdjaosd jalksj dlkajdlkj askdjqok djqoiakj sdljqodjaskd jqodakjdla jdalskdj",
    
    alarme:"Alarme",
    som:"Som",
    airbag:"air-bag",
    arcondic:"ar-condicionado",
    travaeletr:"trava-eletrica",
    vidreletr:"vidro-eletrico",
    direcaohidr:"direcao",
    },

    userValue = {
        name: "Alberto",
        senha: "123456"
    };

    // await createCar(db, {carValue, userValue})

    const selectedCar = await db.all("SELECT  * FROM car")
    console.log(selectedCar)



})