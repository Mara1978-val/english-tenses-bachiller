/* =========================================================
   TEORÍA: los 10 tiempos verbales que aparecen en las fotos
   ========================================================= */
const THEORY = [
{
  key:"ps", color:"#2f9e44", name:"Present Simple", sp:"Presente simple",
  use:[
    "Hablar de **rutinas, hábitos y hechos generales** (todos los días, siempre, a veces...).",
    "Decir **verdades universales** (la Tierra gira alrededor del Sol).",
    "Hablar de **horarios y planes oficiales** (el tren sale a las 8:15).",
    "En **cláusulas de tiempo** (when, before, after, as soon as) y en **condicionales tipo 1** para el futuro: If it rains, we will stay."
  ],
  form:[
    ["Afirmativa", "I/You/We/They + verbo · He/She/It + verbo + <b>-s</b>"],
    ["Negativa", "don't / doesn't + verbo (base)"],
    ["Pregunta", "Do / Does + sujeto + verbo (base)?"],
    ["Adverbios", "always, usually, often, sometimes, never, every day, on Mondays"]
  ],
  ex:[
    ["My brother plays basketball on weekends.", "Mi hermano juega al baloncesto los fines de semana."],
    ["Water boils at 100 degrees Celsius.", "El agua hierve a 100 grados."],
    ["She doesn't watch horror films.", "Ella no ve películas de terror."],
    ["Does your sister speak English?", "¿Tu hermana habla inglés?"],
    ["When he gets home, he always takes off his shoes.", "Cuando llega a casa, siempre se quita los zapatos."]
  ],
  signals:["always","usually","every day","never","often","on Mondays","twice a week"],
  error:"Errores típicos: poner <b>-s</b> también en I/You/We/They (<s>I goes</s> → I <b>go</b>) y olvidar el <b>-s</b> en he/she/it (<s>He play</s> → He <b>plays</b>). Con does/no ya no llevamos -s: <s>Does she plays?</s> → Does she <b>play</b>?"
},
{
  key:"pc", color:"#1098ad", name:"Present Continuous", sp:"Presente continuo",
  use:[
    "Acciones que están **ocurriendo ahora mismo** (at the moment, right now).",
    "Situaciones **temporales** de estos días/día (This week, these days).",
    "Cambios y tendencias: The weather **is getting** colder.",
    "Planes **arreglados** para el futuro: I'm meeting Tom tomorrow.",
    "Con <b>always</b> expresa enfado: He's always losing his keys! (¡Siempre pierde las llaves!)"
  ],
  form:[
    ["Afirmativa", "am / is / are + verbo + <b>-ing</b>"],
    ["Negativa", "am not / isn't / aren't + verbo + -ing"],
    ["Pregunta", "Am / Is / Are + sujeto + verbo + -ing?"],
    ["Ortografía", "run → runn<b>ing</b> · lie → l<b>y</b>ing · write → writ<b>ing</b>"]
  ],
  ex:[
    ["Look! It is raining very hard.", "¡Mira! Está lloviendo mucho."],
    ["Be quiet! The baby is sleeping.", "¡Silencio! El bebé está durmiendo."],
    ["These days, hackers are attacking financial institutions.", "Últimamente los hackers están atacando instituciones financieras."],
    ["We are preparing for the final exams this week.", "Esta semana nos estamos preparando para los exámenes finales."],
    ["I can't talk now; I am driving.", "No puedo hablar ahora, estoy conduciendo."]
  ],
  signals:["now","right now","at the moment","look!","listen!","currently","these days","this week"],
  error:"Errores típicos: olvidar el auxiliar (<s>It raining</s> → It <b>is raining</b>), usar el verbo con -s en presente continuo (<s>She is plays</s> → She <b>is playing</b>) o mezclar auxiliares: <s>She is not go</s> → She <b>isn't going</b>."
},
{
  key:"past", color:"#e8590c", name:"Past Simple", sp:"Pasado simple",
  use:[
    "Acciones **terminadas en un momento concreto del pasado** (yesterday, last night, in 2021).",
    "Una **cadena de acciones** una tras otra en un relato.",
    "Estados pasados: I **lived** in Seville for ten years (ya no vivo allí).",
    "En narraciones, el tiempo por excelencia: First he opened the door... then he..."
  ],
  form:[
    ["Regular", "verbo + <b>-ed</b> (play → played, close → closed)"],
    ["Iregulares", "go → went · steal → stole · find → found · take → took · be → was/were"],
    ["Negativa", "didn't + verbo en base (I didn't <b>finish</b>)"],
    ["Pregunta", "Did + sujeto + verbo en base? (Did you <b>see</b> it?)"]
  ],
  ex:[
    ["We visited our grandparents last summer.", "Visitamos a nuestros abuelos el verano pasado."],
    ["She didn't finish her homework last night.", "Ella no terminó su deber anoche."],
    ["In 2021, a thief stole a priceless masterpiece.", "En 2021 un ladrón robó una obra maestra."],
    ["The guards noticed the empty frame and called the police.", "Los guardas notaron el cuadro vacío y llamaron a la policía."],
    ["When I was young, I lived in the countryside.", "Cuando era joven vivía en el campo."]
  ],
  signals:["yesterday","last night","last week","in 2021","two hours ago","when I was young"],
  error:"Errores típicos: usar <b>-ed</b> después de didn't (<s>I didn't finished</s> → I didn't <b>finish</b>) y olvidar que <b>was/were</b> es el pasado de be: <s>I were</s> → I <b>was</b>. Irregulares: <s>stealed</s> → <b>stole</b>, <s>finded</s> → <b>found</b>."
},
{
  key:"pastc", color:"#d9480f", name:"Past Continuous", sp:"Pasado continuo",
  use:[
    "Una acción que **estaba en marcha** en un momento concreto del pasado: At 8 p.m. we were watching a film.",
    "Dos acciones **simultáneas**: While I was walking, I found a wallet.",
    "Una acción **corta que interrumpe** otra más larga (pasado simple la interrumpe): She was reading when the lights went out.",
    "El fondo de una narración: The sun was shining and the birds were singing."
  ],
  form:[
    ["Afirmativa", "was / were + verbo + <b>-ing</b>"],
    ["Negativa", "wasn't / weren't + verbo + -ing"],
    ["Pregunta", "Was / Were + sujeto + verbo + -ing?"],
    ["Conectores", "<b>while</b> + pasado continuo · <b>when</b> + pasado simple"]
  ],
  ex:[
    ["While I was walking home, I found a wallet.", "Mientras caminaba a casa, encontré una cartera."],
    ["At 8 p.m. yesterday they were watching a film.", "Ayer a las 8 p.m. estaban viendo una película."],
    ["She was reading when the lights went out.", "Estaba leyendo cuando se fue la luz."],
    ["While the sensors were monitoring the humidity, an alarm was triggered.", "Mientras los sensores vigilaban la humedad, saltó una alarma."]
  ],
  signals:["while","when","at 8 p.m.","this time last year","meanwhile","as"],
  error:"Errores típicos: poner el auxiliar en pasado simple o al revés: <s>While I walked</s> → While I <b>was walking</b>; <s>When he was coming, I left</s> (con when usamos pasado simple para la acción corta): When he <b>came</b>, I left. Y <s>They was watching</s> → They <b>were watching</b>."
},
{
  key:"pp", color:"#5f3dc4", name:"Present Perfect", sp:"Pretérito perfecto",
  use:[
    "Experiencias de vida **sin decir cuándo**: I've never been to London.",
    "Acciones **pasadas con resultado presente**: I've lost my keys (y aún no las encuentro).",
    "Con <b>just</b>, <b>already</b>, <b>yet</b>: She has just finished. Have you eaten yet?",
    "Situaciones que **continúan hasta ahora** con <b>for / since</b>: We've lived here for ten years.",
    "Con <b>so far / up to now / this week</b>: So far, the team has published three articles."
  ],
  form:[
    ["Afirmativa", "<b>have / has</b> + participio (I have <b>done</b> · He has <b>done</b>)"],
    ["Negativa", "haven't / hasn't + participio"],
    ["Pregunta", "Have / Has + sujeto + participio?"],
    ["Iregulares", "go → gone · steal → stolen · write → written · eat → eaten · see → seen"]
  ],
  ex:[
    ["I have never been to London.", "Nunca he estado en Londres."],
    ["She has just finished her homework.", "Acaba de terminar sus deberes."],
    ["We have lived here for ten years.", "Vivimos aquí desde hace diez años."],
    ["The lab has analysed the DNA evidence several times.", "El laboratorio ha analizado el ADN varias veces."],
    ["I can't find my phone. I have left it at home.", "No encuentro el móvil. Lo he dejado en casa."]
  ],
  signals:["ever","never","just","already","yet","for","since","so far","up to now","this week"],
  error:"Errores típicos: usar el pasado simple con estos marcadores (<s>I saw him yesterday</s> está bien si dices cuándo, pero <s>I've seen him</s> sin fecha), <s>He has went</s> → He has <b>gone</b>, y confundir for/since: <b>for</b> + tiempo (for 3 years) / <b>since</b> + punto (since 2021)."
},
{
  key:"pastp", color:"#862e9c", name:"Past Perfect", sp:"Pretérito pluscuamperfecto",
  use:[
    "Una acción que ocurrió **antes de otra acción pasada**: The burglar had escaped before the police arrived.",
    "Con <b>before / after / when / by the time</b> para ordenar dos hechos pasados.",
    "Para explicar **qué pasó primero** en un relato.",
    "En reported speech: She said she had already booked the tickets."
  ],
  form:[
    ["Afirmativa", "<b>had</b> + participio (I/You/He/She/We/They <b>had done</b>)"],
    ["Negativa", "hadn't + participio"],
    ["Pregunta", "Had + sujeto + participio?"],
    ["Siempre igual", "No cambia con la persona: had, had, had..."]
  ],
  ex:[
    ["The burglar had escaped before the police arrived.", "El ladrón había huido antes de que llegara la policía."],
    ["When we got to the cinema, the film had started.", "Cuando llegamos al cine, la película ya había empezado."],
    ["By the time I arrived, they had left.", "Para cuando llegué, ellos ya se habían ido."],
    ["The criminal had deactivated the alarm before entering the room.", "El criminal había desactivado la alarma antes de entrar."],
    ["I realised I had forgotten my wallet at home.", "Me di cuenta de que había olvidado la cartera en casa."]
  ],
  signals:["before","after","by the time","when","already","just","until then"],
  error:"Errores típicos: usar dos pasados simples seguidos (<s>After she read the report, she called</s> exige orden claro: After she <b>had read</b>...) y olvidar el participio: <s>He had went</s> → He had <b>gone</b>. Solo usamos had + participio, <b>nunca</b> had + -ed del pasado simple."
},
{
  key:"will", color:"#1971c2", name:"Future with Will", sp:"Futuro con will",
  use:[
    "Decisiones **tomadas en el momento** (sin planificar): The phone is ringing — I'll answer it.",
    "Predicciones y **opiniones**: I think it will rain tomorrow.",
    "Promesas, ofertas y amenazas: I promise I won't tell anyone.",
    "Hechos futuros inevitables: If you heat ice, it will melt.",
    "Con <b>according to / I'm sure / I reckon</b> en planes oficiales."
  ],
  form:[
    ["Afirmativa", "<b>will + verbo base</b> (I will go = I'll go)"],
    ["Negativa", "<b>won't + verbo base</b> (will not)"],
    ["Pregunta", "<b>Will + sujeto + verbo base?</b>"],
    ["Cond. tipo 1", "If + presente simple, ... <b>will</b> + verbo base"]
  ],
  ex:[
    ["I think it will rain tomorrow.", "Creo que mañana lloverá."],
    ["Don't worry — I will call you tonight.", "No te preocupes, te llamaré esta noche."],
    ["The report will be ready by Friday.", "El informe estará listo para el viernes."],
    ["According to NASA, the capsule will dock at 04:30 tomorrow.", "Según NASA, la cápsula acoplará mañana a las 04:30."],
    ["If you heat ice, it will melt.", "Si calientas el hielo, se derretirá."]
  ],
  signals:["tomorrow","next week","in the future","I think","I'm sure","probably","if"],
  error:"Errores típicos: añadir -s con will (<s>He will goes</s> → He will <b>go</b>), usar <s>will</s> con going to a la vez (<s>will going to</s>) y olvidar que la pregunta empieza por <b>Will</b> y no por <s>Do</s>: <s>Do you will help?</s> → <b>Will</b> you help?"
},
{
  key:"goingto", color:"#0b7285", name:"Be going to", sp:"Futuro con be going to",
  use:[
    "Planes e intenciones **ya decididos** antes de hablar: We're going to move to Barcelona next year.",
    "Predicciones con **prueba visible ahora**: Look at those clouds! It's going to rain.",
    "Avisar de algo que está a punto de pasar: Be careful! You're going to fall.",
    "No se usa con verbos de planificación mental como think (I think it will rain)."
  ],
  form:[
    ["Afirmativa", "am / is / are + <b>going to + verbo base</b>"],
    ["Negativa", "am not / isn't / aren't + going to + verbo base"],
    ["Pregunta", "Am / Is / Are + sujeto + going to + verbo base?"],
    ["Contracciones", "I'm going to = I'm gonna (informal)"]
  ],
  ex:[
    ["Look at those clouds! It is going to rain.", "¡Mira esas nubes! Va a llover."],
    ["We are going to move to Barcelona next year.", "Vamos a mudarnos a Barcelona el año que viene."],
    ["Ana is going to start a French course in September.", "Ana va a empezar un curso de francés en septiembre."],
    ["The organisers are going to sell more than 50,000 wristbands.", "Los organizadores van a vender más de 50.000 pulseras."],
    ["I am not going to buy that jacket; it is too expensive.", "No voy a comprar esa chaqueta, es demasiado cara."]
  ],
  signals:["look!","this year","next year (plan)","already decided","in September","evidence now"],
  error:"Errores típicos: escribir <s>going to go</s> cuando el verbo ya es go (we're going to <b>Barcelona</b>, no <s>going to go to</s>), olvidar el <b>be</b> (<s>They going to sell</s> → They <b>are</b> going to sell) y poner <b>to + -s</b>: <s>is going to starts</s> → is going to <b>start</b>."
},
{
  key:"futcont", color:"#e64980", name:"Future Continuous", sp:"Futuro continuo",
  use:[
    "Una acción que **estará en marcha** en un momento concreto del futuro: This time tomorrow I'll be flying to New York.",
    "Preguntar si alguien estará haciendo algo: Will you be waiting for me?",
    "Eventos programados que ocurrirán mientras ocurre otro.",
    "Describe el futuro como si ya lo viéramos por dentro (muy usado en narración)."
  ],
  form:[
    ["Afirmativa", "<b>will be + verbo + -ing</b>"],
    ["Negativa", "<b>won't be + verbo + -ing</b>"],
    ["Pregunta", "<b>Will + sujeto + be + verbo + -ing?</b>"],
    ["Alternativa", "am/is/are + going to be + -ing (I'm going to be working)"]
  ],
  ex:[
    ["This time tomorrow I will be flying to New York.", "A esta hora mañana estaré volando a Nueva York."],
    ["At 10 p.m. tonight the fans will be singing along.", "Hoy a las 10 p.m. los fans estarán cantando."],
    ["Don't call me at nine; I will be having a shower.", "No me llames a las nueve: me estaré duchando."],
    ["This time next month the technicians will be dismantling the stage.", "Dentro de un mes a esta hora los técnicos estarán desmontando el escenario."]
  ],
  signals:["this time tomorrow","at 10 p.m. tonight","this time next week","while","all evening"],
  error:"Errores típicos: olvidar el <b>be</b> (<s>will dismantling</s> → will <b>be</b> dismantling), poner <b>will + -ing</b> sin be (<s>will singing</s>) y confundirlo con el futuro simple: will be + -ing = <b>en proceso</b>; will + base = <b>hecho</b>."
},
{
  key:"futperf", color:"#c2255c", name:"Future Perfect", sp:"Futuro perfecto",
  use:[
    "Una acción que estará <b>terminada</b> antes de un momento futuro: By next year I'll have finished my degree.",
    "Con <b>by + tiempo futuro</b> (by Friday, by 2030, by the time...).",
    "Estimaciones sobre lo que habremos conseguido: By 2030 agencies will have established a greenhouse.",
    "En preguntas sobre planes ya en marcha: Will you have read the book by Friday?"
  ],
  form:[
    ["Afirmativa", "<b>will have + participio</b> (I'll have finished)"],
    ["Negativa", "<b>won't have + participio</b>"],
    ["Pregunta", "<b>Will + sujeto + have + participio?</b>"],
    ["Equivalente", "By + tiempo, ... will have + participio"]
  ],
  ex:[
    ["By next year, I will have finished my degree.", "Para el año que viene habré terminado la carrera."],
    ["By the time you arrive, we will have left.", "Para cuando llegues, nos habremos ido."],
    ["By the end of this weekend the organisers will have sold 50,000 wristbands.", "Para este fin de semana los organizadores habrán vendido 50.000 pulseras."],
    ["By 2030, space agencies will have established a permanent greenhouse.", "Para 2030 las agencias habrán establecido un invernadero permanente."]
  ],
  signals:["by next year","by Friday","by 2030","by the time","by the end of"],
  error:"Errores típicos: usar el pasado simple en vez del participio (<s>will have finished</s> ✓ pero <s>will have went</s> ✗ → will have <b>gone</b>), olvidar el <b>have</b> (<s>will finished</s>) y confundirlo con present perfect: <b>by + pasado</b> → had; <b>by + futuro</b> → will have."
}
];
