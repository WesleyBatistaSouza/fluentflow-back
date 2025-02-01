import { DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export const Favorite = database.define('Favorite', {
    favorite_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
        type: DataTypes.UUID, // FK for User
        allowNull: false,
    },
    point_id: {
        type: DataTypes.UUID, // FK for Point, can be null
        allowNull: true,
    },
    event_id: {
        type: DataTypes.UUID, // FK for Event, can be null
        allowNull: true,
    },
}, {
    tableName: 'Favorite',
    timestamps: true,
});
