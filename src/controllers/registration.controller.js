import { Registration } from '../models/Registration.model.js';

Registration.sync()

export const createRegistration = async (req, res) => {
    try {
        const registration = await Registration.create(req.body);
        res.status(201).json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByPk(req.params.id);
        if (!registration) return res.status(404).json({ error: 'Registration not found' });
        res.status(200).json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRegistration = async (req, res) => {
    try {
        const [updated] = await Registration.update(req.body, {
            where: { registration_id: req.params.id },
        });
        if (!updated) return res.status(404).json({ error: 'Registration not found' });
        const updatedRegistration = await Registration.findByPk(req.params.id);
        res.status(200).json(updatedRegistration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteRegistration = async (req, res) => {
    try {
        const deleted = await Registration.destroy({
            where: { registration_id: req.params.id },
        });
        if (!deleted) return res.status(404).json({ error: 'Registration not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
