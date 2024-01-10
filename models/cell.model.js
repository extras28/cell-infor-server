import mongoose from 'mongoose';

const cell = new mongoose.Schema(
  {
    cellId: Number,
    lac: Number,
    mcc: Number,
    mnc: Number,
    address: String,
    lon: Number,
    lat: Number,
  },
  {
    timestamps: false,
  }
);

export default mongoose.model('cell', cell);
