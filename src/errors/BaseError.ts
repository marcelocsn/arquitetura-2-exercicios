

export abstract class BaseError extends Error {
   
     constructor(
        public statusCode: number,
        message: string
    ) {
        super(message)
    }
}

// classe ----- construtor ---> objeto

// Crie a pasta src/errors e crie configure o BaseError
// referencie o material assíncrono se necessário

// Ainda na pasta src/errors crie e configure o erro de requisição 
// inválida BadRequestError
// statusCode é 400
// message padrão é “Requisição inválida”
