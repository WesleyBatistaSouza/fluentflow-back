import { Favorite } from '../models/Favorite.model.js';

Favorite.sync()

export const addFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.create(req.body);
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFavoriteById = async (req, res) => {
    try {
        const favorite = await Favorite.findByPk(req.params.id);
        if (!favorite) return res.status(404).json({ error: 'Favorite not found' });
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFavoritesByUserId = async (req, res) => {
    try {
        const favorites = await Favorite.findAll({ where: { user_id: req.params.id } });
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateFavorite = async (req, res) => {
    try {
        const [updated] = await Favorite.update(req.body, {
            where: { favorite_id: req.params.id },
        });
        if (!updated) return res.status(404).json({ error: 'Favorite not found' });
        const updatedFavorite = await Favorite.findByPk(req.params.id);
        res.status(200).json(updatedFavorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteFavorite = async (req, res) => {
    try {
        const deleted = await Favorite.destroy({
            where: { favorite_id: req.params.id },
        });
        if (!deleted) return res.status(404).json({ error: 'Favorite not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
