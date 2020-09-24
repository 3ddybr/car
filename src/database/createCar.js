module.exports =  async function(db, {carValue, userValues}) {
    //inserir dados na tabela carValue

    const insetedCar= await db.run(`
        INSERT INTO car (
            tipo,
            marca,
            modelo,
            versao,
            ano,
            km,
            cor,
            preco,
            fotos,
            msg,
            alarme,
            som,
            airbag,
            arcondic,
            travaeletr,
            vidreletr,
            direcaohidr
        ) VALUES (
            "${carValue.tipo}",
            "${carValue.marca}",
            "${carValue.modelo}",
            "${carValue.versao}",
            "${carValue.ano}",
            "${carValue.km}",
            "${carValue.cor}",
            "${carValue.preco}",
            "${carValue.fotos}",
            "${carValue.msg}",
            "${carValue.alarme}",
            "${carValue.som}",
            "${carValue.airbag}",
            "${carValue.arcondic}",
            "${carValue.travaeletr}",
            "${carValue.vidreletr}",
            "${carValue.direcaohidr}"
        );

    `)

            // const car_id = insertedCar.lastID

    const insetedUsers = await db.run (`
            INSERT INTO users (
                name,
                senha
            )VALUES(
                "${userValue.name}",
                "${userValue.senha}"
            )
    `)

    // const users_id= insertedUsers.lastID
}