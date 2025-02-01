import { DataTypes } from 'sequelize';
import { database } from '../config/db.js';

export const User = database.define('users',
    {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, 
    {
        tableName: 'users',
        timestamps: true,
    }
);
