import imgFitness from '../assets/pesomuerto.webp'
import imgMasajes from '../assets/masajesprevencion.png'
import imgNutricion from '../assets/plannutricion.webp'

export const servicios = [
  {
    id: "fitness",
    titulo: "FITNESS",
    imagen: imgFitness,
    alt: "ejercicio peso muerto",
    texto: "Entrenamientos personalizados para mejorar tu rendimiento.",
    textoExtra: 'Trabajamos con planes de entrenamiento periodizados, adaptados a tu nivel y objetivos. Contás con seguimiento de un entrenador certificado, acceso a equipamiento deúltima generación y ajustes mensuales según tu progreso.'
  },
  {
    id:'masajes',
    titulo: 'MASAJES',
    imagen: imgMasajes,
    alt: 'hombre recibiendo masajes',
    texto:'Recuperación muscular y corporal para tu bienestar físico.',
    textoExtra: 'Ofrecemos masajes deportivos, de recuperación y descontracturantes. Ideales para reducir el dolor muscularpost-entrenamiento, mejorar la circulación y acelerar turecuperación entre sesiones.'
  },
  {
    id:'nutricion',
    titulo: 'NUTRICIÓN',
    imagen: imgNutricion,
    alt: 'persona con suplemento proteíco en mano',
    texto: 'Planes nutricionales adaptados a tu alimentación y  objetivos.',
    textoExtra:'Nuestros nutricionistas diseñan planes alimenticios personalizados según tu composición corporal y metas.Incluye seguimiento mensual, ajuste de macros y soportepor WhatsApp ante cualquier consulta.'
  }
]
