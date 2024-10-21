import { Sequelize } from "sequelize";

const sequelize = new Sequelize('pms', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;