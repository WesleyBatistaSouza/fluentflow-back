import { Flashcard, Tag } from "../models/flashcards.model.js";

// Criar um novo flashcard com tags, imagem e áudio
export const createFlashcard = async (req, res) => {
  try {
    const { question, answer, image_url, audio_url, tags } = req.body;

    const newFlashcard = await Flashcard.create({
      question,
      answer,
      image_url,
      audio_url,
    });

    if (tags && tags.length > 0) {
      const tagInstances = await Promise.all(
        tags.map(async (tagName) => {
          return await Tag.findOrCreate({ where: { name: tagName } });
        })
      );

      await newFlashcard.addTags(tagInstances.map((tag) => tag[0]));
    }

    res.status(201).json({ message: "Flashcard criado!", flashcard: newFlashcard });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar flashcard", error });
  }
};

// Atualizar o intervalo de revisão do flashcard com base no desempenho do usuário
export const updateFlashcardReview = async (req, res) => {
  try {
    const { flashcard_id } = req.params;
    const { correct } = req.body;

    const flashcard = await Flashcard.findByPk(flashcard_id);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard não encontrado" });
    }

    const now = new Date();
    let nextReview;

    if (correct) {
      // Se acertou, aumentar o tempo da próxima revisão
      const intervalDays = [1, 3, 7, 14, 30]; // Exemplo de espaçamento
      const nextInterval = intervalDays[Math.min(flashcard.times_reviewed, intervalDays.length - 1)];
      nextReview = new Date(now.setDate(now.getDate() + nextInterval));
    } else {
      // Se errou, revisar novamente no dia seguinte
      nextReview = new Date(now.setDate(now.getDate() + 1));
    }

    await flashcard.update({
      times_reviewed: flashcard.times_reviewed + 1,
      last_reviewed_at: new Date(),
      next_review_at: nextReview,
    });

    res.status(200).json({ message: "Revisão atualizada!", flashcard });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar revisão", error });
  }
};
