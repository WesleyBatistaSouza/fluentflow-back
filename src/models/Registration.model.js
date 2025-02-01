import { DataTypes } from 'sequelize';
import { database } from '../config/db.js';

export const Registration = database.define('Registration', {
    registration_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
        type: DataTypes.UUID, // FK for User
        allowNull: false,
    },
    event_id: {
        type: DataTypes.UUID, // FK for Event
        allowNull: false,
    },
}, {
    tableName: 'Registration',
    timestamps: true,
});
