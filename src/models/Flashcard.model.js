import { DataTypes } from "sequelize";
import { database } from "../config/db.js";

// Modelo de Flashcard
export const Flashcard = database.define("flashcard", {
  flashcard_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  audio_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  times_reviewed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  last_reviewed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  next_review_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

// Modelo de Tags
export const Tag = database.define("tag", {
  tag_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
});

export const FlashcardTag = database.define("flashcard_tag", {});

Flashcard.belongsToMany(Tag, { through: FlashcardTag });
Tag.belongsToMany(Flashcard, { through: FlashcardTag });

