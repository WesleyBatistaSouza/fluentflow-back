import { DataTypes } from 'sequelize';
import { database } from '../config/db.js';

export const User = database.define('users',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        username: {
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
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, 
    {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at', // Mapeia o campo created_at no banco
        updatedAt: 'updated_at'  // Mapeia o campo updated_at no banco
    }
);
