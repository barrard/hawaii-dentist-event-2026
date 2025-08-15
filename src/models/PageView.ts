import mongoose from 'mongoose';

const PageViewSchema = new mongoose.Schema({
  url: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  ipAddress: { type: String },
  userAgent: { type: String }, // For browser info
  userId: { type: String }, // Add userId field
});

export default mongoose.models.PageView || mongoose.model('PageView', PageViewSchema);