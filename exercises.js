/* =========================================================
   BANCO DE EJERCICIOS
   lvl: basico (50) | medio (50)   ·   t: clave del tiempo verbal
   q  : enunciado con "___" y el verbo entre paréntesis
   a  : respuestas aceptadas   ·   why: explicación de la solución
   ========================================================= */
const BANK = [

/* ---------------- PRESENT SIMPLE ---------------- */
{id:"ps-b1", lvl:"basico", t:"ps", q:"My brother ___ (play) basketball on weekends.", a:["plays"], why:"Con he/she/it el presente simple añade -s al verbo: play → plays."},
{id:"ps-b2", lvl:"basico", t:"ps", q:"Water ___ (boil) at 100 degrees Celsius.", a:["boils"], why:"Es una verdad universal y el sujeto es 'water' (it), así que lleva -s: boils."},
{id:"ps-b3", lvl:"basico", t:"ps", q:"They ___ (not / live) in Madrid.", a:["don't live","do not live"], why:"En negativa con they usamos don't + verbo en base (sin -s)."},
{id:"ps-b4", lvl:"basico", t:"ps", q:"___ your sister ___ (speak) English?", a:["does ... speak"], why:"Pregunta con she: auxiliar Does + sujeto + verbo en base (Does your sister speak...).", multi:["Does","speak"]},
{id:"ps-b5", lvl:"basico", t:"ps", q:"We ___ (go) to school by bus every day.", a:["go"], why:"Con I/you/we/they el verbo no lleva -s: go, sin -s. 'Every day' indica rutina → presente simple."},
{id:"ps-b6", lvl:"basico", t:"ps", q:"My parents ___ (not / watch) TV in the morning.", a:["don't watch","do not watch"], why:"Negativa con plural: don't + verbo base. El verbo watch se queda igual."},
{id:"ps-b7", lvl:"basico", t:"ps", q:"She ___ (study) English three times a week.", a:["studies"], why:"study termina en -y: al añadir -s cambia a -ies → studies."},
{id:"ps-b8", lvl:"basico", t:"ps", q:"The museum ___ (close) at 9 p.m. on Fridays.", a:["closes"], why:"Horarios oficiales van en presente simple y con 'the museum' (it) lleva -s: closes."},
{id:"ps-b9", lvl:"basico", t:"ps", q:"He ___ (not / like) coffee at all.", a:["doesn't like","does not like"], why:"Negativa con he: doesn't + verbo base. Al usar doesn, el verbo pierde la -s."},
{id:"ps-b10", lvl:"basico", t:"ps", q:"___ you ___ (speak) Spanish?", a:["do ... speak"], why:"Pregunta con you: auxiliar Do + sujeto + verbo base.", multi:["Do","speak"]},

/* ---------------- PRESENT CONTINUOUS ---------------- */
{id:"pc-b1", lvl:"basico", t:"pc", q:"Look! It ___ (rain) very hard.", a:["is raining","it's raining"], why:"Look! indica que pasa ahora → presente continuo: is + raining."},
{id:"pc-b2", lvl:"basico", t:"pc", q:"Be quiet! The baby ___ (sleep).", a:["is sleeping"], why:"Acción que ocurre ahora mismo: is + -ing (sleeping)."},
{id:"pc-b3", lvl:"basico", t:"pc", q:"They ___ (play) in the garden at the moment.", a:["are playing"], why:"'At the moment' + sujeto plural they → are + -ing."},
{id:"pc-b4", lvl:"basico", t:"pc", q:"Listen! Someone ___ (knock) at the door.", a:["is knocking"], why:"Listen! señala una acción que está pasando ahora: is knocking."},
{id:"pc-b5", lvl:"basico", t:"pc", q:"Are you ___ (listen) to me right now?", a:["listening"], why:"El auxiliar Are ya está en la pregunta, así que solo falta el verbo con -ing: listening."},
{id:"pc-b6", lvl:"basico", t:"pc", q:"We ___ (not / understand) this exercise at the moment.", a:["aren't understanding","are not understanding"], why:"Negativa del continuo: are not (aren't) + -ing."},
{id:"pc-b7", lvl:"basico", t:"pc", q:"I ___ (make) a cake right now.", a:["am making","'m making","i am making"], why:"Con I el auxiliar es am: I am making."},
{id:"pc-b8", lvl:"basico", t:"pc", q:"The students ___ (write) the test now.", a:["are writing"], why:"Sujeto plural → are + writing."},
{id:"pc-b9", lvl:"basico", t:"pc", q:"She ___ (talk) on the phone at the moment.", a:["is talking"], why:"Sujeto she → is + talking."},
{id:"pc-b10", lvl:"basico", t:"pc", q:"Look at those clouds! It ___ (get) dark.", a:["is getting"], why:"Está pasando ahora mismo: is getting. (get → getting, doble t)."},

/* ---------------- PAST SIMPLE ---------------- */
{id:"pa-b1", lvl:"basico", t:"past", q:"We ___ (visit) our grandparents last summer.", a:["visited"], why:"'Last summer' es pasado simple: visit + -ed → visited."},
{id:"pa-b2", lvl:"basico", t:"past", q:"She ___ (not / finish) her homework last night.", a:["didn't finish","did not finish"], why:"En negativa usamos didn't + verbo en base: didn't finish (sin -ed)."},
{id:"pa-b3", lvl:"basico", t:"past", q:"Did you ___ (see) the new film on TV?", a:["see"], why:"Tras Did el verbo va en base: Did you see... (nunca saw ni seen)."},
{id:"pa-b4", lvl:"basico", t:"past", q:"When I ___ (be) young, I lived in the countryside.", a:["was"], why:"Con 'I' el pasado de be es was."},
{id:"pa-b5", lvl:"basico", t:"past", q:"He ___ (lose) his keys yesterday.", a:["lost"], why:"Lose es irregular: lose → lost (no se dice losed)."},
{id:"pa-b6", lvl:"basico", t:"past", q:"They ___ (go) to the beach last Saturday.", a:["went"], why:"Go es irregular: go → went."},
{id:"pa-b7", lvl:"basico", t:"past", q:"The guards ___ (notice) the empty frame and called the police.", a:["noticed"], why:"Notice es regular: notice + -ed → noticed. La cadena de acciones va en pasado simple."},
{id:"pa-b8", lvl:"basico", t:"past", q:"I ___ (have) a great time at the party last Friday.", a:["had"], why:"Have es irregular en pasado: had."},
{id:"pa-b9", lvl:"basico", t:"past", q:"She ___ (not / know) the answer when the teacher asked her.", a:["didn't know","did not know"], why:"Negativa en pasado: didn't + verbo base → didn't know."},
{id:"pa-b10", lvl:"basico", t:"past", q:"We ___ (buy) two tickets for the concert.", a:["bought"], why:"Buy es irregular: buy → bought."},

/* ---------------- PAST CONTINUOUS ---------------- */
{id:"pc2-b1", lvl:"basico", t:"pastc", q:"While I ___ (walk) home, I found a wallet.", a:["was walking"], why:"While + pasado continuo: was walking (acción larga) mientras pasaba otra."},
{id:"pc2-b2", lvl:"basico", t:"pastc", q:"At 8 p.m. yesterday they ___ (watch) a film.", a:["were watching"], why:"En un momento concreto del pasado y sujeto plural they → were watching."},
{id:"pc2-b3", lvl:"basico", t:"pastc", q:"She ___ (read) when the lights went out.", a:["was reading"], why:"Acción larga en pasado: was reading; la interrumpe 'the lights went out' (pasado simple)."},
{id:"pc2-b4", lvl:"basico", t:"pastc", q:"We ___ (not / sleep) when you called.", a:["weren't sleeping","were not sleeping"], why:"Negativa con sujeto plural we: weren't + -ing."},
{id:"pc2-b5", lvl:"basico", t:"pastc", q:"What were you ___ (do) at noon?", a:["doing"], why:"El auxiliar were ya está en la pregunta, falta el verbo con -ing: doing."},
{id:"pc2-b6", lvl:"basico", t:"pastc", q:"The children ___ (play) outside while their parents were talking.", a:["were playing"], why:"Acción de fondo en pasado con sujeto plural: were playing."},
{id:"pc2-b7", lvl:"basico", t:"pastc", q:"He ___ (take) a shower when the phone rang.", a:["was taking"], why:"Acción larga interrumpida: was taking (take → taking)."},
{id:"pc2-b8", lvl:"basico", t:"pastc", q:"At this time last year I ___ (work) in a hotel in Seville.", a:["was working"], why:"'At this time last year' pide pasado continuo: was working."},
{id:"pc2-b9", lvl:"basico", t:"pastc", q:"The sun ___ (shine) and the birds were singing.", a:["was shining"], why:"Ambiente o escenario de una narración: was shining."},
{id:"pc2-b10", lvl:"basico", t:"pastc", q:"I ___ (cook) dinner when they arrived.", a:["was cooking"], why:"Estaba en medio de una acción: was cooking."},

/* ---------------- PRESENT PERFECT ---------------- */
{id:"pp-b1", lvl:"basico", t:"pp", q:"I ___ (never / be) to London.", a:["have never been","'ve never been","i have never been"], why:"Experiencia de vida sin fecha → present perfect: have + participio (been)."},
{id:"pp-b2", lvl:"basico", t:"pp", q:"She ___ (just / finish) her homework.", a:["has just finished","'s just finished"], why:"Con just y sujeto he/she/it: has + participio (finished)."},
{id:"pp-b3", lvl:"basico", t:"pp", q:"We ___ (live) here for ten years.", a:["have lived","'ve lived"], why:"'For' + tiempo indica duración hasta ahora → have lived."},
{id:"pp-b4", lvl:"basico", t:"pp", q:"Have you ever ___ (eat) sushi?", a:["eaten"], why:"Participio irregular de eat: eaten (have/has + participio)."},
{id:"pp-b5", lvl:"basico", t:"pp", q:"They ___ (not / see) the new museum yet.", a:["haven't seen","have not seen"], why:"Con yet en negativa: haven't + participio (seen)."},
{id:"pp-b6", lvl:"basico", t:"pp", q:"He ___ (lose) his wallet, so he can't pay.", a:["has lost","'s lost"], why:"Pasado con resultado presente (no tiene dónde pagar) → has lost."},
{id:"pp-b7", lvl:"basico", t:"pp", q:"___ you ever ___ (visit) Paris?", a:["have ... visited"], why:"Pregunta de experiencia: Have you ever + participio (visited).", multi:["Have","visited"]},
{id:"pp-b8", lvl:"basico", t:"pp", q:"Sofia ___ (finish) her project already.", a:["has finished","'s finished"], why:"Con already y she: has finished."},
{id:"pp-b9", lvl:"basico", t:"pp", q:"We ___ (not / buy) the tickets yet.", a:["haven't bought","have not bought"], why:"Negativa con yet: haven't + participio irregular (bought)."},
{id:"pp-b10", lvl:"basico", t:"pp", q:"I can't find my keys. I ___ (leave) them at home.", a:["have left","'ve left"], why:"El resultado es ahora (no encuentro las llaves) → have left."},

/* ---------------- PAST PERFECT ---------------- */
{id:"pa2-b1", lvl:"basico", t:"pastp", q:"The burglar ___ (escape) before the police arrived.", a:["had escaped"], why:"Acción anterior a otra pasada: had + participio (escaped)."},
{id:"pa2-b2", lvl:"basico", t:"pastp", q:"She ___ (not / eat) anything before she went to bed.", a:["hadn't eaten","had not eaten"], why:"Antes de otro pasado y en negativa: hadn't + participio (eaten)."},
{id:"pa2-b3", lvl:"basico", t:"pastp", q:"When we got to the cinema, the film ___ (start).", a:["had started"], why:"La película empezó antes de que llegáramos → had started."},
{id:"pa2-b4", lvl:"basico", t:"pastp", q:"He ___ (finish) his homework before his parents came home.", a:["had finished"], why:"Acción terminada antes de otra pasada: had finished."},
{id:"pa2-b5", lvl:"basico", t:"pastp", q:"By the time I arrived, they ___ (leave).", a:["had left"], why:"By the time + pasado simple pide had + participio: had left."},
{id:"pa2-b6", lvl:"basico", t:"pastp", q:"The train ___ (depart) before we reached the station.", a:["had departed","departed"], why:"El tren partió antes (más antiguo) → had departed."},
{id:"pa2-b7", lvl:"basico", t:"pastp", q:"I realised I ___ (forget) my wallet at home.", a:["had forgotten"], why:"Antes de darse cuenta ya la había olvidado: had forgotten."},
{id:"pa2-b8", lvl:"basico", t:"pastp", q:"After she ___ (read) the report, she called the director.", a:["had read"], why:"Después de que hubiera leído (primero) → had read."},
{id:"pa2-b9", lvl:"basico", t:"pastp", q:"He told me he ___ (already / book) the tickets.", a:["had already booked"], why:"Estilo indirecto: had already booked (anterior a 'told')."},
{id:"pa2-b10", lvl:"basico", t:"pastp", q:"We ___ (not / see) the announcement before the meeting started.", a:["hadn't seen","had not seen"], why:"Antes de otro pasado y en negativa: hadn't seen."},

/* ---------------- WILL ---------------- */
{id:"wi-b1", lvl:"basico", t:"will", q:"I think it ___ (rain) tomorrow.", a:["will rain"], why:"Predicción u opinión con I think → will + verbo base."},
{id:"wi-b2", lvl:"basico", t:"will", q:"___ you help me with this exercise?", a:["will"], why:"Pregunta con will: Will + sujeto + verbo base."},
{id:"wi-b3", lvl:"basico", t:"will", q:"He ___ (be) 18 next month.", a:["will be"], why:"Hecho futuro: will be (sin -s después de will)."},
{id:"wi-b4", lvl:"basico", t:"will", q:"We ___ (not / be) late for the exam.", a:["won't be","will not be"], why:"Negativa con will: won't (will not) + verbo base."},
{id:"wi-b5", lvl:"basico", t:"will", q:"Don't worry — I ___ (call) you tonight.", a:["will call"], why:"Decisión/promesa en el momento → I'll call."},
{id:"wi-b6", lvl:"basico", t:"will", q:"She ___ (take) her driving test next month, so she is studying hard.", a:["will take"], why:"Futuro con 'next month': will take (nunca will takes)."},
{id:"wi-b7", lvl:"basico", t:"will", q:"I promise I ___ (not / tell) anyone your secret.", a:["won't tell","will not tell"], why:"Promesa: won't tell."},
{id:"wi-b8", lvl:"basico", t:"will", q:"If you heat ice, it ___ (melt).", a:["will melt"], why:"Condicional tipo 1: If + presente simple, ... will + base."},
{id:"wi-b9", lvl:"basico", t:"will", q:"A: The phone is ringing. B: Don't worry, I ___ (answer) it.", a:["will answer"], why:"Decisión improvisada en el momento → will answer."},
{id:"wi-b10", lvl:"basico", t:"will", q:"They ___ (arrive) at 6 p.m. tomorrow.", a:["will arrive"], why:"Futuro sencillo: will arrive."},

/* ---------------- BE GOING TO ---------------- */
{id:"gb-b1", lvl:"basico", t:"goingto", q:"Look at those clouds! It ___ (rain).", a:["is going to rain","it's going to rain"], why:"Evidencia ahora mismo (nubes) → be going to: is going to rain."},
{id:"gb-b2", lvl:"basico", t:"goingto", q:"We ___ (move) to Barcelona next year.", a:["are going to move","we're going to move"], why:"Plan ya decidido → are going to move."},
{id:"gb-b3", lvl:"basico", t:"goingto", q:"I ___ (not / buy) that jacket; it is too expensive.", a:["am not going to buy","'m not going to buy"], why:"Decisión ya tomada en negativa: am not going to buy."},
{id:"gb-b4", lvl:"basico", t:"goingto", q:"Are you ___ (help) me later?", a:["going to help"], why:"Pregunta con be going to: Are you + going to + base."},
{id:"gb-b5", lvl:"basico", t:"goingto", q:"Ana ___ (start) a French course in September.", a:["is going to start"], why:"Plan organizado con anterioridad → is going to start."},
{id:"gb-b6", lvl:"basico", t:"goingto", q:"Be careful! You ___ (fall)!", a:["are going to fall","you're going to fall"], why:"Algo a punto de pasar con evidencia visible → are going to fall."},
{id:"gb-b7", lvl:"basico", t:"goingto", q:"They ___ (not / have) a party this year.", a:["aren't going to have","are not going to have"], why:"Negativa del plan: aren't going to have."},
{id:"gb-b8", lvl:"basico", t:"goingto", q:"This year I ___ (learn) how to surf.", a:["am going to learn","'m going to learn"], why:"Propósito del año → am going to learn."},
{id:"gb-b9", lvl:"basico", t:"goingto", q:"The bus is leaving! We ___ (miss) it!", a:["are going to miss","we're going to miss"], why:"Consecuencia inmediata y visible → are going to miss."},
{id:"gb-b10", lvl:"basico", t:"goingto", q:"My cousin ___ (save) money because he wants a synthesiser.", a:["is going to save"], why:"Intención clara y planificada → is going to save."},

/* ---------------- FUTURE CONTINUOUS ---------------- */
{id:"fc-b1", lvl:"basico", t:"futcont", q:"This time tomorrow I ___ (fly) to New York.", a:["will be flying"], why:"Acción en proceso en un momento futuro: will be + -ing."},
{id:"fc-b2", lvl:"basico", t:"futcont", q:"At 10 p.m. tonight the fans ___ (sing) along with the band.", a:["will be singing"], why:"A esa hora exacta estarán en pleno concierto → will be singing."},
{id:"fc-b3", lvl:"basico", t:"futcont", q:"Don't call me at nine; I ___ (have) a shower.", a:["will be having"], why:"Estaré ocupado en ese momento: will be having."},
{id:"fc-b4", lvl:"basico", t:"futcont", q:"Will you ___ (wait) for me at the station?", a:["be waiting"], why:"Pregunta del futuro continuo: Will + be + -ing (be ya está)."},
{id:"fc-b5", lvl:"basico", t:"futcont", q:"Next week we ___ (take) our final exams.", a:["will be taking"], why:"Semana completa en proceso: will be taking."},
{id:"fc-b6", lvl:"basico", t:"futcont", q:"This time next year I ___ (live) abroad.", a:["will be living"], why:"Situación en marcha dentro de un año: will be living."},
{id:"fc-b7", lvl:"basico", t:"futcont", q:"At 8 a.m. tomorrow they ___ (leave) for the airport.", a:["will be leaving"], why:"Momento concreto del futuro en curso: will be leaving."},
{id:"fc-b8", lvl:"basico", t:"futcont", q:"She ___ (work) on her project all evening, so don't disturb her.", a:["will be working"], why:"Toda la tarde en proceso: will be working."},
{id:"fc-b9", lvl:"basico", t:"futcont", q:"We ___ (not / be) at home at 6; we'll be at the gym.", a:["won't be","will not be"], why:"Negativa del continuo: won't be (+ el verbo stative no necesita -ing)."},
{id:"fc-b10", lvl:"basico", t:"futcont", q:"This time next week we ___ (lie) on the beach.", a:["will be lying"], why:"lie → lying (y no lying con doble l): will be lying."},

/* ---------------- FUTURE PERFECT ---------------- */
{id:"fp-b1", lvl:"basico", t:"futperf", q:"By next year, I ___ (finish) my degree.", a:["will have finished","'ll have finished"], why:"By + futuro → will have + participio: will have finished."},
{id:"fp-b2", lvl:"basico", t:"futperf", q:"By 6 p.m., she ___ (cook) dinner for everyone.", a:["will have cooked"], why:"Terminará antes de las 6 → will have cooked."},
{id:"fp-b3", lvl:"basico", t:"futperf", q:"By the time you arrive, we ___ (leave).", a:["will have left"],"why":"Nos habremos ido antes de tu llegada → will have left."},
{id:"fp-b4", lvl:"basico", t:"futperf", q:"By Friday, will you ___ (complete) the task?", a:["have completed"], why:"Pregunta: Will you + have + participio (have ya está)."},
{id:"fp-b5", lvl:"basico", t:"futperf", q:"By 2030, space agencies ___ (establish) a permanent greenhouse.", a:["will have established"], why:"Para 2030 ya se habrá hecho: will have established."},
{id:"fp-b6", lvl:"basico", t:"futperf", q:"By next month, she ___ (save) enough money to buy a car.", a:["will have saved"], why:"Cumplimiento antes de un plazo: will have saved."},
{id:"fp-b7", lvl:"basico", t:"futperf", q:"By the end of this week, I ___ (read) three novels.", a:["will have read"], why:"Will have + participio irregular read (se lee igual)."},
{id:"fp-b8", lvl:"basico", t:"futperf", q:"By midnight the DJ ___ (play) more than forty songs.", a:["will have played"], why:"Antes de medianoche: will have played."},
{id:"fp-b9", lvl:"basico", t:"futperf", q:"By the time the mission ends, the team ___ (complete) all the experiments.", a:["will have completed"], why:"La misión terminará y antes habrán acabado: will have completed."},
{id:"fp-b10", lvl:"basico", t:"futperf", q:"By 2035, scientists ___ (find) a cure for this disease.", a:["will have found"], why:"Plazo futuro con resultado: will have found."},

/* =========================================================
   NIVEL MEDIO
   ========================================================= */

/* ---------------- PRESENT SIMPLE (medio) ---------------- */
{id:"ps-m1", lvl:"medio", t:"ps", q:"The train ___ (leave) at 8:15 every morning, so don't be late.", a:["leaves"], why:"Horarios oficiales → presente simple con -s: leaves."},
{id:"ps-m2", lvl:"medio", t:"ps", q:"He never ___ (watch) horror films because he finds them scary.", a:["watches"], why:"Adverbio de frecuencia (never) + he → watches (watch + -es)."},
{id:"ps-m3", lvl:"medio", t:"ps", q:"How often does your boss ___ (check) his email?", a:["check"], why:"Con 'does' el verbo vuelve a la forma base: check (sin -s)."},
{id:"ps-m4", lvl:"medio", t:"ps", q:"The earth ___ (go) around the sun.", a:["goes"], why:"Verdad universal con sujeto it → goes."},
{id:"ps-m5", lvl:"medio", t:"ps", q:"When he ___ (get) home, he always takes off his shoes.", a:["gets"], why:"Conjunciones de tiempo (when, as soon as) + presente simple para el futuro; aquí 'gets' por he."},
{id:"ps-m6", lvl:"medio", t:"ps", q:"Water ___ (not / freeze) at 20 degrees Celsius.", a:["doesn't freeze","does not freeze"], why:"Negativa con it/agua: doesn't + base (freeze sin -s)."},
{id:"ps-m7", lvl:"medio", t:"ps", q:"My sister ___ (study) at the library every afternoon.", a:["studies"], why:"-y final → -ies: studies."},
{id:"ps-m8", lvl:"medio", t:"ps", q:"___ the shop ___ (close) at nine on Saturdays?", a:["does ... close"], why:"Pregunta con does: Does the shop close... (close sin -s).", multi:["Does","close"]},
{id:"ps-m9", lvl:"medio", t:"ps", q:"He ___ (not / understand) the instructions at all.", a:["doesn't understand","does not understand"], why:"Negativa con he: doesn't + base."},
{id:"ps-m10", lvl:"medio", t:"ps", q:"If she ___ (hurry), she will catch the bus.", a:["hurries"], why:"Condicional tipo 1: en la cláusula if va presente simple; hurries por she."},

/* ---------------- PRESENT CONTINUOUS (medio) ---------------- */
{id:"pc-m1", lvl:"medio", t:"pc", q:"These days, hackers ___ (attack) financial institutions more frequently.", a:["are attacking"], why:"'These days' indica una tendencia temporal → are attacking."},
{id:"pc-m2", lvl:"medio", t:"pc", q:"She ___ (write) her thesis at the moment, so she can't come out.", a:["is writing"], why:"Situación temporal ahora → is writing."},
{id:"pc-m3", lvl:"medio", t:"pc", q:"You can't come in; we ___ (paint) the kitchen.", a:["are painting"], why:"Acción en curso ahora: are painting."},
{id:"pc-m4", lvl:"medio", t:"pc", q:"I can't talk now — I ___ (drive).", a:["am driving","'m driving"], why:"Con I: am driving."},
{id:"pc-m5", lvl:"medio", t:"pc", q:"This week we ___ (prepare) for the final exams.", a:["are preparing"], why:"'This week' como periodo temporal en curso → are preparing."},
{id:"pc-m6", lvl:"medio", t:"pc", q:"He ___ (always / lose) his keys! It drives me mad.", a:["is always losing","always loses"], why:"Con 'always' + continuo se expresa enfado: He is always losing his keys.", acceptNote:true},
{id:"pc-m7", lvl:"medio", t:"pc", q:"Look! The baby ___ (fall) asleep.", a:["is falling"], why:"Está pasando ahora: is falling (fall → falling)."},
{id:"pc-m8", lvl:"medio", t:"pc", q:"The situation ___ (get) worse every day.", a:["is getting"], why:"Cambio progresivo actual → is getting."},
{id:"pc-m9", lvl:"medio", t:"pc", q:"They ___ (not / pay) attention while the teacher is explaining.", a:["aren't paying","are not paying"], why:"Negativa del continuo: aren't paying."},
{id:"pc-m10", lvl:"medio", t:"pc", q:"I ___ (meet) Sara at the café at 6 this evening.", a:["am meeting","'m meeting","am going to meet"], why:"Plan arreglado para esta tarde → presente continuo (am meeting)."},

/* ---------------- PAST SIMPLE (medio) ---------------- */
{id:"pa-m1", lvl:"medio", t:"past", q:"In 2021, a thief ___ (steal) a priceless masterpiece from the gallery.", a:["stole"], why:"Fecha concreta del pasado e irregular: steal → stole."},
{id:"pa-m2", lvl:"medio", t:"past", q:"The security guards ___ (notice) the empty frame and called the police.", a:["noticed"], why:"Narración en cadena: pasado simple regular noticed."},
{id:"pa-m3", lvl:"medio", t:"past", q:"She ___ (not / know) the answer when the teacher asked her.", a:["didn't know","did not know"], why:"Pasado + negativa: didn't + base (know)."},
{id:"pa-m4", lvl:"medio", t:"past", q:"We ___ (have) a great time at the party last Friday.", a:["had"], why:"Have → had en pasado simple."},
{id:"pa-m5", lvl:"medio", t:"past", q:"Did he ever ___ (mention) the accident to you?", a:["mention"], why:"Tras 'Did' el verbo va en base: mention."},
{id:"pa-m6", lvl:"medio", t:"past", q:"He ___ (not / come) to the meeting yesterday.", a:["didn't come","did not come"], why:"Negativa en pasado: didn't come (sin -s ni -ed)."},
{id:"pa-m7", lvl:"medio", t:"past", q:"The police ___ (not / recover) the painting during the first investigation.", a:["did not recover","didn't recover"], why:"Período pasado terminado (the first investigation) → pasado simple: didn't recover. Ojo: si dijéramos 'so far' iría present perfect (haven't recovered)."},
{id:"pa-m8", lvl:"medio", t:"past", q:"She ___ (teach) English at a school before she moved abroad.", a:["taught"], why:"Teach → taught (irregular)."},
{id:"pa-m9", lvl:"medio", t:"past", q:"The alarm ___ (go) off while nobody was in the building.", a:["went"], why:"Go → went."},
{id:"pa-m10", lvl:"medio", t:"past", q:"They ___ (not / understand) the rules of the game.", a:["didn't understand","did not understand"], why:"Pasado simple negativo: didn't understand."},

/* ---------------- PAST CONTINUOUS (medio) ---------------- */
{id:"pc2-m1", lvl:"medio", t:"pastc", q:"While the sensors ___ (monitor) the humidity, a voltage drop triggered the alarm.", a:["were monitoring"], why:"While + sujeto plural → were monitoring."},
{id:"pc2-m2", lvl:"medio", t:"pastc", q:"I ___ (cook) dinner when the phone rang.", a:["was cooking"], why:"Acción larga interrumpida por el timbre: was cooking."},
{id:"pc2-m3", lvl:"medio", t:"pastc", q:"They ___ (not / pay) attention while the teacher was speaking.", a:["weren't paying","were not paying"], why:"Negativa plural: weren't + -ing."},
{id:"pc2-m4", lvl:"medio", t:"pastc", q:"At this time last year, I ___ (work) in a hotel in Seville.", a:["was working"], why:"Momento exacto en el pasado: was working."},
{id:"pc2-m5", lvl:"medio", t:"pastc", q:"The children ___ (play) outside while their parents were talking inside.", a:["were playing"], why:"Acciones simultáneas en pasado: were playing."},
{id:"pc2-m6", lvl:"medio", t:"pastc", q:"He ___ (fall) asleep while he was reading.", a:["was falling"], why:"Se estaba quedando dormido (en proceso): was falling."},
{id:"pc2-m7", lvl:"medio", t:"pastc", q:"While Julian ___ (investigate) the source of the breach, the IT director isolated the server.", a:["was investigating"], why:"While + continuo para la acción de fondo: was investigating."},
{id:"pc2-m8", lvl:"medio", t:"pastc", q:"We ___ (not / listen) when the teacher called our names.", a:["weren't listening","were not listening"], why:"Negativa plural: weren't listening."},
{id:"pc2-m9", lvl:"medio", t:"pastc", q:"What were you ___ (do) at 3 o'clock yesterday?", a:["doing"], why:"Pregunta en continuo: What were you doing... (el auxiliar 'were' ya está en la frase)."},
{id:"pc2-m10", lvl:"medio", t:"pastc", q:"The plane ___ (take) off while it was raining heavily.", a:["was taking"], why:"En proceso bajo la lluvia: was taking off."},

/* ---------------- PRESENT PERFECT (medio) ---------------- */
{id:"pp-m1", lvl:"medio", t:"pp", q:"Detective Vance ___ (investigate) complex art crimes for more than fifteen years.", a:["has investigated","has been investigating","'s investigated"], why:"Duración hasta ahora (for + tiempo) → present perfect: has investigated / has been investigating."},
{id:"pp-m2", lvl:"medio", t:"pp", q:"The forensic lab ___ (analyze) the DNA evidence several times with newer technology.", a:["has analyzed","has analysed","'s analysed"], why:"Acciones repetidas hasta hoy con 'several times' → has analysed/analyzed."},
{id:"pp-m3", lvl:"medio", t:"pp", q:"Since that incident, the laboratory ___ (receive) additional funding.", a:["has received","'s received"], why:"Since + punto en el pasado → presente perfecto: has received."},
{id:"pp-m4", lvl:"medio", t:"pp", q:"So far, the team ___ (publish) three high-impact articles.", a:["has published","'s published"], why:"'So far' (hasta ahora) es señal clara de present perfect: has published."},
{id:"pp-m5", lvl:"medio", t:"pp", q:"I can't find my phone. I ___ (leave) it at home.", a:["have left","'ve left"], why:"Pasado con consecuencia presente: have left."},
{id:"pp-m6", lvl:"medio", t:"pp", q:"She ___ (already / submit) the application form.", a:["has already submitted","'s already submitted"], why:"Con 'already' → has submitted."},
{id:"pp-m7", lvl:"medio", t:"pp", q:"We ___ (not / finish) the project yet.", a:["haven't finished","have not finished"], why:"Negativa con yet: haven't finished."},
{id:"pp-m8", lvl:"medio", t:"pp", q:"___ you ever ___ (see) a dolphin in the wild?", a:["have ... seen"], why:"Experiencia vital: Have you ever + participio (seen).", multi:["Have","seen"]},
{id:"pp-m9", lvl:"medio", t:"pp", q:"My brother ___ (just / graduate) from university.", a:["has just graduated","'s just graduated"], why:"Justo ahora, con he → has just graduated."},
{id:"pp-m10", lvl:"medio", t:"pp", q:"How many times ___ you ___ (visit) the museum?", a:["have ... visited"], why:"Pregunta de recuento de experiencias: have ... visited.", multi:["Have","visited"]},

/* ---------------- PAST PERFECT (medio) ---------------- */
{id:"pa2-m1", lvl:"medio", t:"pastp", q:"The criminal ___ (deactivate) the alarm system before entering the main room.", a:["had deactivated"], why:"Antes de entrar (anterior a otro pasado) → had deactivated."},
{id:"pa2-m2", lvl:"medio", t:"pastp", q:"Dr. Vance explained that her team ___ (never / observe) such a reaction before that experiment.", a:["had never observed"], why:"Antes de otro pasado y con never → had never observed."},
{id:"pa2-m3", lvl:"medio", t:"pastp", q:"The manager told us he ___ (already / book) the tickets.", a:["had already booked"], why:"Estilo indirecto: lo que ya había hecho → had already booked."},
{id:"pa2-m4", lvl:"medio", t:"pastp", q:"After she ___ (read) the report, she called the director.", a:["had read"], why:"Primero leyó, luego llamó → had read."},
{id:"pa2-m5", lvl:"medio", t:"pastp", q:"The train ___ (depart) before we reached the station.", a:["had departed"], why:"Primero partió el tren → had departed."},
{id:"pa2-m6", lvl:"medio", t:"pastp", q:"I realised I ___ (forget) my wallet at home.", a:["had forgotten"], why:"Ya la había olvidado antes de darse cuenta: had forgotten."},
{id:"pa2-m7", lvl:"medio", t:"pastp", q:"When the guards noticed the frame, almost two hours ___ (pass).", a:["had passed"], why:"Habían pasado antes de que lo notaran: had passed."},
{id:"pa2-m8", lvl:"medio", t:"pastp", q:"She ___ (not / eat) anything before the results came out.", a:["hadn't eaten","had not eaten"], why:"Negativa anterior a otro pasado: hadn't eaten."},
{id:"pa2-m9", lvl:"medio", t:"pastp", q:"By 9 p.m., they ___ (prepare) the entire stage.", a:["had prepared"], why:"By + tiempo pasado → had prepared."},
{id:"pa2-m10", lvl:"medio", t:"pastp", q:"He explained why he ___ (leave) the company so suddenly.", a:["had left"], why:"Motivo anterior en pasado: had left."},

/* ---------------- WILL (medio) ---------------- */
{id:"wi-m1", lvl:"medio", t:"will", q:"According to NASA, the supply capsule ___ (dock) with the station at 04:30 tomorrow.", a:["will dock"], why:"Plan oficial/futuro según un calendario → will dock."},
{id:"wi-m2", lvl:"medio", t:"will", q:"I promise I ___ (not / tell) anyone your secret.", a:["won't tell","will not tell"], why:"Promesa: won't tell."},
{id:"wi-m3", lvl:"medio", t:"will", q:"If you heat ice, it ___ (melt).", a:["will melt"], why:"Condicional tipo 1: If + presente, ... will melt."},
{id:"wi-m4", lvl:"medio", t:"will", q:"The report ___ (be) ready by Friday, I'm sure.", a:["will be"], why:"Opinión sobre futuro: will be."},
{id:"wi-m5", lvl:"medio", t:"will", q:"Don't touch that! You ___ (burn) yourself.", a:["will burn"], why:"Advertencia/amenaza en el momento → will burn."},
{id:"wi-m6", lvl:"medio", t:"will", q:"A: The printer isn't working. B: I ___ (fix) it after class.", a:["will fix"], why:"Oferta espontánea → will fix."},
{id:"wi-m7", lvl:"medio", t:"will", q:"He ___ (be) 21 next Friday.", a:["will be"], why:"Fecha futura concreta: will be."},
{id:"wi-m8", lvl:"medio", t:"will", q:"I'm certain she ___ (pass) the exam; she has studied a lot.", a:["will pass"], why:"Certeza sobre el futuro: will pass."},
{id:"wi-m9", lvl:"medio", t:"will", q:"If it ___ (rain) tomorrow, we will stay at home.", a:["rains"], why:"En la cláusula if va presente simple (no will): rains."},
{id:"wi-m10", lvl:"medio", t:"will", q:"We ___ (not / be) at home at 8; we'll be at the cinema.", a:["won't be","will not be"], why:"Negativa: won't be."},

/* ---------------- BE GOING TO (medio) ---------------- */
{id:"gb-m1", lvl:"medio", t:"goingto", q:"I've already booked the tickets; we ___ (visit) Rome in June.", a:["are going to visit","we're going to visit"], why:"Plan ya preparado (billetes comprados) → are going to visit."},
{id:"gb-m2", lvl:"medio", t:"goingto", q:"The organisers ___ (sell) more than 50,000 wristbands this weekend.", a:["are going to sell"], why:"Plan organizado con antelación → are going to sell."},
{id:"gb-m3", lvl:"medio", t:"goingto", q:"He ___ (be) late again — look at the clock and the traffic!", a:["is going to be"], why:"Predicción con evidencia visible ahora → is going to be."},
{id:"gb-m4", lvl:"medio", t:"goingto", q:"My cousin ___ (save) money this year because he wants a synthesiser.", a:["is going to save"], why:"Intención decidida → is going to save."},
{id:"gb-m5", lvl:"medio", t:"goingto", q:"We ___ (not / have) a party this year; we can't afford it.", a:["aren't going to have","are not going to have"], why:"Decisión ya tomada en negativa: aren't going to have."},
{id:"gb-m6", lvl:"medio", t:"goingto", q:"Listen to that silence! Something ___ (happen)!", a:["is going to happen"], why:"Evidencia actual → predicción con be going to: is going to happen."},
{id:"gb-m7", lvl:"medio", t:"goingto", q:"This summer I ___ (study) for the EBAU exam at the library.", a:["am going to study","'m going to study"], why:"Plan personal ya decidido: am going to study."},
{id:"gb-m8", lvl:"medio", t:"goingto", q:"They ___ (move) house next month; they've found a flat in Seville.", a:["are going to move"], why:"Plan confirmado (piso encontrado) → are going to move."},
{id:"gb-m9", lvl:"medio", t:"goingto", q:"Be careful! You ___ (spill) the coffee!", a:["are going to spill","you're going to spill"], why:"Consecuencia inmediata visible → are going to spill."},
{id:"gb-m10", lvl:"medio", t:"goingto", q:"___ she ___ (start) the new job in January?", a:["is ... going to start"], why:"Pregunta sobre un plan: Is she going to start...?", multi:["Is","going to start"]},

/* ---------------- FUTURE CONTINUOUS (medio) ---------------- */
{id:"fc-m1", lvl:"medio", t:"futcont", q:"This time next month, the technicians ___ (dismantle) the entire main stage.", a:["will be dismantling"], why:"En proceso dentro de un mes: will be dismantling."},
{id:"fc-m2", lvl:"medio", t:"futcont", q:"At 4:30 a.m. tomorrow, the capsule ___ (approach) the orbital station.", a:["will be approaching"], why:"Momento exacto del futuro en curso: will be approaching."},
{id:"fc-m3", lvl:"medio", t:"futcont", q:"I ___ (travel) around Europe this time next year.", a:["will be travelling","will be traveling"], why:"Durante ese periodo estará en marcha: will be travelling (o traveling)."},
{id:"fc-m4", lvl:"medio", t:"futcont", q:"She ___ (work) on her project all evening.", a:["will be working"], why:"Toda la tarde en proceso: will be working."},
{id:"fc-m5", lvl:"medio", t:"futcont", q:"This time next week we ___ (lie) on the beach.", a:["will be lying"], why:"lie → lying: will be lying."},
{id:"fc-m6", lvl:"medio", t:"futcont", q:"At 10 p.m. tonight the fans ___ (sing) along with the headliners.", a:["will be singing"], why:"Estarán cantando a esa hora: will be singing."},
{id:"fc-m7", lvl:"medio", t:"futcont", q:"Don't call at 7; the astronauts ___ (eat) dinner.", a:["will be eating"], why:"Estarán en plena cena: will be eating."},
{id:"fc-m8", lvl:"medio", t:"futcont", q:"While we ___ (fly) to London, you'll be able to sleep.", a:["will be flying"], why:"Acción en curso durante el viaje: will be flying."},
{id:"fc-m9", lvl:"medio", t:"futcont", q:"This time next year, I ___ (not / work) here any more.", a:["won't be working","will not be working"], why:"Negativa: won't be working."},
{id:"fc-m10", lvl:"medio", t:"futcont", q:"Tomorrow at 11 a.m. we ___ (take) the final grammar test.", a:["will be taking"], why:"En ese momento exacto estaremos examinándonos: will be taking."},

/* ---------------- FUTURE PERFECT (medio) ---------------- */
{id:"fp-m1", lvl:"medio", t:"futperf", q:"By the time the mission ends in December, the team ___ (complete) all the experiments.", a:["will have completed"], why:"Habrán terminado antes de diciembre: will have completed."},
{id:"fp-m2", lvl:"medio", t:"futperf", q:"By next month, she ___ (save) enough money to buy a car.", a:["will have saved"], why:"Will have + participio ante un plazo: will have saved."},
{id:"fp-m3", lvl:"medio", t:"futperf", q:"By midnight, the DJ ___ (play) more than forty songs.", a:["will have played"], why:"Antes de medianoche: will have played."},
{id:"fp-m4", lvl:"medio", t:"futperf", q:"By the end of this week, I ___ (read) three novels.", a:["will have read"], why:"Recuento terminado antes del viernes: will have read."},
{id:"fp-m5", lvl:"medio", t:"futperf", q:"By 2035, scientists ___ (find) a cure for this disease.", a:["will have found"], why:"Plazo futuro: will have found."},
{id:"fp-m6", lvl:"medio", t:"futperf", q:"By Friday, the organisers ___ (sell) all the tickets.", a:["will have sold"], why:"Para el viernes se habrán agotado: will have sold."},
{id:"fp-m7", lvl:"medio", t:"futperf", q:"By the time you get there, we ___ (finish) the report.", a:["will have finished"], why:"Antes de tu llegada: will have finished."},
{id:"fp-m8", lvl:"medio", t:"futperf", q:"By next year, they ___ (build) a new school in our town.", a:["will have built"], why:"Will have + participio irregular built."},
{id:"fp-m9", lvl:"medio", t:"futperf", q:"By the end of the concert, the band ___ (play) twelve songs.", a:["will have played"], why:"Conteo antes de un punto final: will have played."},
{id:"fp-m10", lvl:"medio", t:"futperf", q:"By 6 p.m. she ___ (cook) dinner for everyone.", a:["will have cooked"], why:"Terminará antes de las 6: will have cooked."}
];
