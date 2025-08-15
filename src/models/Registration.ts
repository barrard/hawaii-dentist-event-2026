import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  preferredName: { type: String, required: true },
  title: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  memberships: { type: [String], required: true },
  guests: { type: String },
  allergies: { type: String },
  golf: { type: String, required: true },
  registeredAt: { type: Date, default: Date.now }, // Add timestamp
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);