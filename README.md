# 🇬🇧 English Tenses · App de gramática verbal para 1º de Bachiller

**🌐 En línea:** https://mara1978-val.github.io/english-tenses-bachiller/
**📦 Repositorio:** https://github.com/Mara1978-val/english-tenses-bachiller

Aplicación creada a partir de las **6 fotos del test** de `eva.educamos.com`
(*The Cybersecurity Incident*, *The Mystery of the Missing Painting*,
*Summer Music Festival & Gap Year*, *Deep Space Bio-Astronomy Mission*…).

## ▶ Cómo abrirla

- **Por internet (recomendado para alumnos):** la URL de arriba. Solo necesitan el navegador.
- **En local:** doble clic en **`index.html`** (o en `Abrir-app.bat`).

No necesita instalación ni servidor: funciona en Chrome, Edge, Firefox o Safari
(y también en tablet y móvil).

> 🎧 **Audio:** el botón **🔊 Listening** usa la síntesis de voz del navegador/sistema.
> En Windows, Edge y Chrome ofrecen voces inglesas muy naturales (Microsoft David / Zira).

## 📚 Contenido

### 1. Teoría (10 tiempos verbales)
Los 10 tiempos/estructuras que salen en tus fotos, cada uno con:
- **🧭 Guía rápida** para elegir el tiempo verbal (pregunta → tiempo → ejemplo)
- Cuándo se usa
- Tabla de estructura (afirmativa, negativa, pregunta)
- **📖 Ortografía del presente simple:** cuándo va **-s**, cuándo **-es** y cuándo **-ies**
  (*play → plays · go → goes · study → studies · consonante + y → -ies, vocal + y → -s…*),
  irregularos `have → has` / `do → does` y la base tras *does / doesn't / didn't*
- **🚫 Verbos que NUNCA van en continuo** (stative verbs: *know, like, have, see…*)
  con sus excepciones (*I am thinking / we are having lunch / I am seeing the dentist*)
- **🔑 Palabras que identifican cada tiempo** con significado y ejemplo
  (*every day, right now, yesterday, while, ever/never, just/yet, for/since,
  before, by the time, this time tomorrow, by Friday…*)
- Ejemplos con traducción (y botón 🔊 para oírlos)
- 💡 **Truco** para reconocerlo rápido + ⚠️ errores típicos del examen

| # | Tiempo verbal |
|---|---|
| 1 | Present Simple |
| 2 | Present Continuous |
| 3 | Past Simple |
| 4 | Past Continuous |
| 5 | Present Perfect |
| 6 | Past Perfect |
| 7 | Future with **Will** |
| 8 | **Be going to** |
| 9 | Future Continuous |
| 10 | Future Perfect |

### 2. 🎯 Práctica guiada
Elige un tiempo verbal y responde **5 preguntas** (puedes pedir otra serie).

### 3. 📚 Banco de ejercicios
- **100 ejercicios de nivel básico** (10 por tiempo verbal)
- **100 ejercicios de nivel medio** (10 por tiempo verbal)
- Filtros por nivel y por tiempo verbal.

### 3b. 📎 Preposiciones (Adjective + Preposition)
El ejercicio de las fotos 5 y 6:
- Teoría: reglas + **tabla con +40 pares** adjetivo/preposición (los de las fotos primero)
- **40 ejercicios básicos** y **40 medios** con explicación y puntos
- Botón 🎯 *5 preguntas al azar* para repaso rápido
- Ejemplos con 🔊 Listening

### 4. 📝 Textos completos (igual que las fotos)
**50 textos** para practicar todos los tiempos verbales en contexto, con filtros
(Los 50 · 🌱 Básicos 12 · 🚀 Medios 38) y botón 🔊 *Listening* tras comprobar:
- Los 4 textos originales del test:
  - The Cybersecurity Incident (10 huecos)
  - The Mystery of the Missing Painting (8 huecos)
  - Summer Music Festival & Gap Year (10 huecos)
  - Deep Space Bio-Astronomy Mission (15 huecos)
- **46 textos nuevos** (rutinas, viajes, futuro, clima, música, ciencia…)
  que cubren los 10 tiempos verbales, con la explicación de cada hueco.

### 5. 🏆 Mis puntos
- Cada acierto **suma puntos** (10 en básico, 15 en medio, 5 por hueco de texto).
- Racha 🔥, porcentaje de acierto, progreso por tiempo verbal **y preposiciones** y rangos
  (Beginner 🌱 → Master 👑).
- Todo se guarda en el navegador (`localStorage`): el alumno cierra y sigue donde estaba.

## ✅ Corrección inteligente
- Si **acierta**: mensaje de refuerzo positivo + explicación de la regla + puntos.
- Si **falla**: se muestra su respuesta, la solución correcta y **por qué** está mal,
  con la regla explicada en español.
- Acepta variantes: contracciones (`don't` / `do not`), mayúsculas, tildes y
  ortografía americana/británica (`analyzed` / `analysed`).
- Botón **🔊 Listening** para oír la frase/texto completo en inglés
  (aparece en cuanto el alumno ve la solución).

## 🎨 Diseño
Fondo **verde claro** y página **ancha** (hasta 1440 px) con el banco de ejercicios
en dos columnas en pantallas grandes; se adapta a móvil y tablet.

## 📁 Archivos
```
app/
├── index.html       ← abrir este archivo
├── styles.css       ← diseño (fondo verde claro, página ancha)
├── theory.js        ← teoría base de los 10 tiempos
├── theory_extra.js  ← ortografía, stative verbs, palabras clave y guía rápida
├── prepositions.js  ← teoría + 80 ejercicios de preposiciones
├── exercises.js     ← banco: 100 básicos + 100 medios
├── texts.js         ← los 4 textos originales de las fotos
├── texts2.js        ← textos t5–t16 (básicos)
├── texts3.js        ← textos t17–t28 (medios)
├── texts4.js        ← textos t29–t39 (medios)
├── texts5.js        ← textos t40–t50 (medios)
└── app.js           ← lógica, corrección, audio y puntos
```

## 🔄 Cómo actualizar (para la profesora)
1. Edita los archivos en la carpeta local.
2. Abre una terminal en la carpeta `app` y ejecuta:
   ```
   git add .
   git commit -m "Cambios"
   git push
   ```
3. En 1 minuto GitHub Pages vuelve a publicarse automáticamente con los cambios.
