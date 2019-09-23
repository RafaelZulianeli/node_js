const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://ionic_3_admin:Kthw4hQzURzR2dLn@cluster0-yko7h.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = variables