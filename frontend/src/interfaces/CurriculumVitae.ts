/**
 * Interfaz que representa la información personal de un individuo.
 */
interface PersonalInformation {
  _id: string; // Identificador único
  name: string; // Nombre completo
  profession: string; // Profesión
  nationality: string; // Nacionalidad
  birthDate: string; // Fecha de nacimiento
  phone: string; // Número de teléfono
  email: string; // Dirección de correo electrónico
  population: string; // Población
  country: string; // País
}

/**
 * Interfaz que representa un trabajo o experiencia laboral.
 */
interface Job {
  _id: string; // Identificador único
  company: string; // Nombre de la empresa
  position: string; // Cargo o posición
  from: string; // Fecha de inicio
  to: string; // Fecha de finalización
  population: string; // Ciudad o población
  country: string; // País
  sector: string; // Sector o industria
  tasks: string[]; // Lista de tareas o responsabilidades
}

/**
 * Interfaz que representa un estudio o formación académica.
 */
interface Study {
  _id: string; // Identificador único
  name: string; // Nombre del título o grado
  center: string; // Centro educativo
  from: string; // Fecha de inicio
  to: string; // Fecha de finalización
  population: string; // Ciudad o población
  country: string; // País
  webUrl: string; // URL del centro educativo
}

/**
 * Interfaz que representa un certificado o título.
 */
interface Certificate {
  _id: string; // Identificador único
  name: string; // Nombre del certificado
  center: string; // Centro emisor
  date: string; // Fecha de obtención
  credentialId: string; // Identificador de la credencial
  credentialUrl: string; // URL de verificación de la credencial
  skills: string[]; // Lista de habilidades asociadas
}

/**
 * Interfaz que representa el nivel de dominio de un idioma.
 */
interface Idiom {
  _id: string; // Identificador único
  idiom: string; // Nombre del idioma
  listeningComprehension: string; // Nivel de comprensión auditiva
  readingComprehension: string; // Nivel de comprensión lectora
  writtenExpression: string; // Nivel de expresión escrita
  oralProduction: string; // Nivel de producción oral
  oralInteraction: string; // Nivel de interacción oral
}

/**
 * Interfaz que representa un premio o reconocimiento.
 */
interface Award {
  _id: string; // Identificador único
  name: string; // Nombre del premio
  description: string; // Descripción del premio
  center: string; // Centro o institución que otorga el premio
  date: string; // Fecha de obtención
}

/**
 * Interfaz que representa una licencia de conducir.
 */
interface DriverLicense {
  _id: string; // Identificador único
  type: string; // Tipo de licencia
  date: string; // Fecha de obtención
}

/**
 * Interfaz que representa una discapacidad.
 */
interface Disability {
  _id: string; // Identificador único
  type: string; // Tipo de discapacidad
  description: string; // Descripción de la discapacidad
  date: string; // Fecha de diagnóstico o reconocimiento
}

/**
 * Interfaz principal que representa un Curriculum Vitae completo.
 */
interface CurriculumVitae {
  _id: string; // Identificador único
  version: string; // Versión del CV
  language: string; // Idioma del CV
  personalInformation: PersonalInformation; // Información personal
  jobs: Job[]; // Lista de trabajos
  studies: Study[]; // Lista de estudios
  certificates: Certificate[]; // Lista de certificados
  idioms: Idiom[]; // Lista de idiomas
  softskills: string[]; // Lista de habilidades blandas
  hardskills: string[]; // Lista de habilidades técnicas
  awards: Award[]; // Lista de premios
  driverLicense: DriverLicense; // Licencia de conducir
  disability: Disability; // Información sobre discapacidad
}

export default CurriculumVitae;
