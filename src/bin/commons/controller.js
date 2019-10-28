exports.post = async (repository, validation, req, res) => {
    try {
        if (!validation.isValid())
            return res.status(400).send({
                message: 'Dados inválidos',
                validation: validation.error()
            }).end()

        let result = repository.create(req.body)
        res.status(201).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Erro no sistema', error })
    }
}

exports.fetch = async (repository, req, res) => {
    try {
        let id = req.params.id
        if (id) {
            let result = repository.fetch(id)
            return res.status(202).send(result)
        }

        res.status(400).send({ message: 'Id null' })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Erro no sistema', error })
    }
}

exports.fetchAll = async (repository, req, res) => {
    try {
        let result = repository.fetchAll()
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Erro no sistema', error })
    }
}

exports.update = async (repository, validation, req, res) => {
    try {
        if (!validation.isValid())
            return res.status(400).send({
                message: 'Dados inválidos',
                validation: validation.error()
            }).end()

        let result = repository.update(req.params.id, req.body)
        res.status(202).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Erro no sistema', error })
    }
}

exports.delete = async (repository, req, res) => {
    try {
        let id = req.params.id
        if (id) {
            await repository.delete(id)
            return res.status(200).send({ message: "Registro excluido com sucesso!" })
        }
        
        res.status(400).send({ message: 'Id null' })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Erro no sistema', error })
    }
}

