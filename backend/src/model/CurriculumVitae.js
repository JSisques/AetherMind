const mongoose = require('mongoose');

// Definir el esquema de Mongoose
const personalInformationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String, required: true },
  birthDate: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  population: { type: String, required: true },
  country: { type: String, required: true },
  sector: { type: String, required: true },
  tasks: [{ type: String }],
});

const studySchema = new mongoose.Schema({
  name: { type: String, required: true },
  center: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  population: { type: String, required: true },
  country: { type: String, required: true },
  webUrl: { type: String, required: true },
});

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  center: { type: String, required: true },
  date: { type: String, required: true },
  credentialId: { type: String, required: true },
  credentialUrl: { type: String, required: true },
  skills: [{ type: String }],
});

const idiomSchema = new mongoose.Schema({
  idiom: { type: String, required: true },
  listeningComprehension: { type: String, required: true },
  readingComprehension: { type: String, required: true },
  writtenExpression: { type: String, required: true },
  oralProduction: { type: String, required: true },
  oralInteraction: { type: String, required: true },
});

const awardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  center: { type: String, required: true },
  date: { type: String, required: true },
});

const driverLicenseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: String, required: true },
});

const disabilitySchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

// Definir el esquema principal del Resume
const curriculumVitaeSchema = new mongoose.Schema({
  version: { type: String, required: true },
  language: { type: String, required: true },
  personalInformation: personalInformationSchema,
  jobs: [jobSchema],
  studies: [studySchema],
  certificates: [certificateSchema],
  idioms: [idiomSchema],
  softskills: [{ type: String }],
  hardskills: [{ type: String }],
  awards: [awardSchema],
  driverLicense: driverLicenseSchema,
  disability: disabilitySchema,
});

// Exportar el modelo de Mongoose
const CurriculumVitaeSchema = mongoose.model('CurriculumVitae', curriculumVitaeSchema);

module.exports = CurriculumVitaeSchema;
