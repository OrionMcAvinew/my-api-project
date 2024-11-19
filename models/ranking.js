// models/ranking.js
import mongoose from 'mongoose';

const rankingSchema = new mongoose.Schema({
  rank: Number,
  points: Number,
  competitor: {
    id: String,
    name: String,
    country: String,
    abbreviation: String,
  },
});

const Ranking = mongoose.models.Ranking || mongoose.model('Ranking', rankingSchema);

export default Ranking;

