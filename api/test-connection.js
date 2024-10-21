import sequelize from "./sequelize.js"
import User from "./models/user.js"

const connection = async () => {
    try {
        await sequelize.authenticate()
        const user = await User.findAll()
        console.log('user', user)
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

connection()