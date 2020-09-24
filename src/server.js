const veiculos = [
    {
    tipo:[0],
    marca:[10],
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
    arCondicionado:"ar-condicionado",
    travaEletrica:"trava-eletrica",
    vidroEletrica:"vidro-eletrico",
    direcaoHidraulica:"direcao",

},
    {
    tipo:[0],
    marca:[10],
    modelo:"Modelo GM - CHEVROLET COBALT LTZ 1.4 8V FLEXPOWER/ECONOFLEX 4P",
    versao:"Flexpower 2.0",
    ano:"2020",
    km:"115000",
    cor:"Amarelo",
    preco:"60000",
    fotos:"image/car/gol.jpg",
    msg:"Descricao Vendo troco financio em até 60x para aposentados pensionista autônomos setor privado empréstimo consignado carta de crédito etc. Financiamos o seu próprio  veículos fazemos refinanciamento. Pegamos o seu carro consignado pra vender .só liga ou chama no zap .aprovo o seu crédito pelo zap confira .Fala qual veículo vc procura que eu arrumo pra vc São mais de 100 veículos de várias marcas e modelos confira.   aasjdkaj sdkjasd klasjd ;kljqdlk ;jas;dlkja ;skdjas;d wdoq jdoasjd oiqwjdoas jdlkjqd oasj dokjqdo kjql sdj qokdj alkd jqodjak sjdqodjaskdj qlkdjaosd jalksj dlkajdlkj askdjqok djqoiakj sdljqodjaskd jqodakjdla jdalskdj",
    
    alarme:"Alarme",
    som:"Som",
    airbag:"air-bag",
    arCondicionado:"ar-condicionado",
    travaEletrica:"trava-eletrica",
    vidroEletrica:"vidro-eletrico",
    direcaoHidraulica:"direcao",

},
{
    tipo:[0],
    marca:[10],
    modelo:"Modelo GM - CHEVROLET COBALT LTZ 1.4 8V FLEXPOWER/ECONOFLEX 4P",
    versao:"Flexpower 2.0",
    ano:"2020",
    km:"115000",
    cor:"Amarelo",
    preco:"60000",
    fotos:"image/car/gol.jpg",
    msg:"Descricao Vendo troco financio em até 60x para aposentados pensionista autônomos setor privado empréstimo consignado carta de crédito etc. Financiamos o seu próprio  veículos fazemos refinanciamento. Pegamos o seu carro consignado pra vender .só liga ou chama no zap .aprovo o seu crédito pelo zap confira .Fala qual veículo vc procura que eu arrumo pra vc São mais de 100 veículos de várias marcas e modelos confira.   aasjdkaj sdkjasd klasjd ;kljqdlk ;jas;dlkja ;skdjas;d wdoq jdoasjd oiqwjdoas jdlkjqd oasj dokjqdo kjql sdj qokdj alkd jqodjak sjdqodjaskdj qlkdjaosd jalksj dlkajdlkj askdjqok djqoiakj sdljqodjaskd jqodakjdla jdalskdj",
    
    alarme:"Alarme",
    som:"Som",
    airbag:"air-bag",
    arCondicionado:"ar-condicionado",
    travaEletrica:"trava-eletrica",
    vidroEletrica:"vidro-eletrico",
    direcaoHidraulica:"direcao",

}];
const tipos = [
    "Carro",
    "Moto",
    "Outros",
]

const marcas = [
    "M GEN",
    "CLAREN",
    "GRALE",
    "LFA ROMEO",
    "SIA MOTORS",
    "UDI",
    "MW",
    "RM",
    "UGGY",
    "BUGRE",
    "CBT JIPE",
    "CHANGAN",
    "CHERY",
    "CADILLAC",
    "CHRYSLER",
    "CITROEN",
    "CROSS LANDER",
    "DAEWOO",
    "DAIHATSU",
    "DODGE",
    "EFFA",
    "ENGESA",
    "ENVEMO",
    "FERRARI",
    "FIAT",
    "FIBRAVAN",
    "FORD",
    "FYBER",
    "GM-CHEVROLET",
    "GREAT WALL",
    "GURGEL",
    "HAFEI",
    "HONDA",
    "HYUNDAI",
    "ISUZU",
    "JAC",
    "JINBEI",
    "JPX",
    "JAGUAR",
    "JEEP",
    "KIA MOTORS",
    "LAMBORGHINI",
    "LIFAN",
    "LOBINI",
    "LADA",
    "LAND ROVER",
    "LEXUS",
    "LOTUS",
    "MG",
    "MINI",
    "MAHINDRA",
    "MASERATI",
    "MATRA",
    "MAZDA",
    "MERCEDES-BENZ",
    "MERCURY",
    "MITSUBISHI",
    "MIURA",
    "NISSAN",
    "PEUGEOT",
    "PLYMOUTH",
    "PONTIAC",
    "PORSCHE",
    "RENAULT",
    "ROVER",
    "SSANGYONG",
    "SAAB",
    "SATURN",
    "SEAT",
    "SUBARU",
    "SUZUKI",
    "TAC",
    "TOYOTA",
    "TROLLER",
    "VW-VOLKSWAGEN",
    "VOLVO",
    "WAKE",
    "WALK",
    "SMART",
    "SHINERAY",
    "ASTON MARTIN",
    "FOTON",
    "RELY",
    "ROLLS-ROYCE",
    "DKW VEMAG",
    "LANDWIND",
    "GEELY",
    "CHANA",
    "PUMA",
    "RAM",
    "INFINITI",
    "TESLA",
    "BABY",
    "IVECO",
    "ACURA",
    "HITECH ELETRIC",
]

function getTipos(tipoNumber){
    const position = +tipoNumber
    return tipos[position]
}

function getMarcas(marcaNumber){
    const position = +marcaNumber
    return marcas[position]
}

function pageLanding (req, res) {
    // console.log (req.query)
    const filters = req.query
    return res.render("index.html", {veiculos, filters, tipos, marcas})
}
function pageContato (req, res) {
    const filters = req.query
    return res.render("page-contato.html",{veiculos, filters, tipos, marcas})
}
function pageEmpresa (req, res) {
    const filters = req.query
    return res.render("page-empresa.html",{veiculos, filters, tipos, marcas})
}
function pageLogar (req, res) {
    const filters = req.query
    return res.render("page-logar.html", {veiculos, filters, tipos, marcas})
}


function pageVeiculos (req, res) {
    const filters = req.query
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0
    
    if (isNotEmpty){

        data.tipo = getTipos(data.tipo)
        data.marca = getMarcas(data.marca)
        veiculos.push(data)

        return res.redirect("/")
    }
    return res.render("page-veiculos.html", {filters, tipos, marcas})
}


const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurando nunjucks
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
    

})

server
//configurar arquivos staticos
.use("/", express.static("public"))
.get("/", pageLanding)
.get("/page-contato", pageContato)
.get("/page-empresa", pageEmpresa)
.get("/page-logar", pageLogar)
.get("/page-veiculos", pageVeiculos)
.listen(5500)





// server.use('/static', express.static(__dirname + '/public'));
// console.log(__dirname)

// server.use(express.static(__dirname + "/../public"))

// server.use(express.static(path.resolve(path.join(__dirname, '..', 'public'))))