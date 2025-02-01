import { User } from '../models/User.model.js';
import { Event } from '../models/Event.model.js'; 
import { Point } from '../models/Point.model.js';

export const getReport = async (req, res) => {
    try {
        const totalUsers = await User.count();
        const totalEvents = await Event.count();
        const totalPoints = await Point.count();

        res.status(200).json({
            totalUsers,
            totalEvents,
            totalPoints,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
