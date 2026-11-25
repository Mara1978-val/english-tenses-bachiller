/* =========================================================
   TEORÍA AMPLIADA: ortografía, verbos stative y palabras clave
   Se fusiona con THEORY en app.js (THEORY_EXTRA[t.key])
   ========================================================= */
const QUICK_GUIDE = [
  ["¿Es una rutina, un hábito o una verdad universal?", "Present Simple", "I <b>study</b> English every day."],
  ["¿Está pasando AHORA MISMO (o estos días)?", "Present Continuous", "She <b>is studying</b> right now."],
  ["¿Pasado con fecha concreta (yesterday, en 2021)?", "Past Simple", "He <b>went</b> to Rome in 2021."],
  ["¿Acción de fondo que otra corta interrumpió?", "Past Continuous", "I <b>was sleeping</b> when he called."],
  ["¿Experiencia o resultado HASTA AHORA sin fecha?", "Present Perfect", "I <b>have never visited</b> Japan."],
  ["¿Qué pasó ANTES de otro hecho pasado?", "Past Perfect", "The film <b>had started</b> before we arrived."],
  ["¿Decisión improvisada, promesa u opinión?", "Will", "I <b>will answer</b> the phone."],
  ["¿Plan ya decidido o predicción con prueba visible?", "Be going to", "It <b>is going to rain</b>; look at the clouds!"],
  ["¿Estará en proceso en un momento futuro?", "Future Continuous", "This time tomorrow I <b>will be flying</b>."],
  ["¿Estará TERMINADO antes de una fecha futura?", "Future Perfect", "By June I <b>will have finished</b>."]
];

const THEORY_EXTRA = {

/* ================= PRESENT SIMPLE ================= */
ps:{
  spell:[
    ["1 · Tercera persona (he / she / it)", "play → play<b>s</b> · study → stud<b>y+s</b> → stud<b>ies</b> · go → go<b>es</b>"],
    ["2 · Termina en <b>-o, -ch, -sh, -ss, -x</b> → añade <b>-es</b>", "go → go<b>es</b> · watch → watch<b>es</b> · wash → wash<b>es</b> · miss → miss<b>es</b> · fix → fix<b>es</b> · do → do<b>es</b>"],
    ["3 · Consonante + <b>-y</b> → la -y pasa a <b>-ies</b>", "study → stud<b>ies</b> · fly → fl<b>ies</b> · try → tr<b>ies</b> · carry → carr<b>ies</b>"],
    ["4 · Vocal + <b>-y</b> → solo se añade <b>-s</b>", "play → play<b>s</b> · buy → buy<b>s</b> · enjoy → enjoy<b>s</b> · say → say<b>s</b>"],
    ["5 · Irregulares: <b>have → has</b> y <b>do → does</b>", "She <b>has</b> a brother. · He <b>does</b> his homework."],
    ["6 · Con <b>does / doesn't / didn't</b> el verbo vuelve a la BASE (sin -s ni -ed)", "Does she <b>study</b>? · She doesn't <b>study</b>. · <s>Does she studies?</s>"],
    ["7 · <b>I, you, we, they</b> nunca llevan -s", "<s>They plays</s> → They <b>play</b> · <s>I goes</s> → I <b>go</b>"],
    ["8 · Los adverbios van ENTRE el sujeto y el verbo: <b>sujeto + adverbio + verbo</b>", "She <b>always</b> arrives early. · I <b>never</b> smoke."]
  ],
  markers:[
    ["every day / every week / every Monday", "cada día / semana / lunes", "<b>Every day</b> I take the bus to school."],
    ["always · usually · often · sometimes · rarely · never", "siempre · normalmente · a menudo · a veces · rara vez · nunca", "He <b>never</b> eats breakfast."],
    ["on Mondays · at weekends · in the morning", "los lunes · a los fines de semana · por la mañana", "We <b>play football on Mondays</b>."],
    ["twice a week · once a month", "dos veces por semana · una vez al mes", "She goes to the gym <b>twice a week</b>."],
    ["What time does…? · How often do…?", "¿A qué hora…? · ¿Con qué frecuencia…?", "<b>What time does</b> the train <b>leave</b>?"],
    ["Hechos generales y verdades universales", "el agua hierve a 100 °C…", "Water <b>boils</b> at 100 degrees."],
    ["Horarios oficiales (trenes, cine, clases)", "el tren sale a las 8:15", "The film <b>starts</b> at 9 p.m."],
    ["in the morning / last night", "por la mañana (rutina) vs anoche (pasado)", "I <b>drink</b> coffee in the morning. (no: I am drinking, si es rutina)"]
  ],
  tip:"Truco: si puedes sustituirlo por «todos los días» o por «es verdad que…», es presente simple."
},

/* ================= PRESENT CONTINUOUS ================= */
pc:{
  stative:[
    ["Pensamiento y opinión", "know, understand, believe, think (=opinar), agree, remember, forget, mean, recognise, realise, suppose, doubt", "I <b>know</b> the answer. (no: I am knowing)"],
    ["Sentimientos y deseos", "like, love, hate, prefer, want, need, wish, fear, mind, care", "She <b>wants</b> a new phone. (no: She is wanting)"],
    ["Propiedad y estado", "have (=tener), own, belong, contain, include, consist of, seem, appear, cost, weigh, depend, matter", "This bag <b>contains</b> books. (no: is containing)"],
    ["Percepción (los 5 sentidos)", "see, hear, smell, taste, sound, seem", "I <b>hear</b> a noise. (no: I am hearing)"],
    ["EXCEPCIONES: esos verbos SÍ pueden ir en continuo con otro significado", "<b>think</b> = pensar en algo · <b>have</b> = comer/celebrar · <b>see</b> = quedar con · <b>be</b> = comportarse · <b>taste</b> = probar", "I <b>am thinking</b> about the problem. · We <b>are having</b> lunch. · I <b>am seeing</b> the dentist at 5. · He <b>is being</b> silly today. · <b>Taste</b> this soup! (probar)"]
  ],
  markers:[
    ["now · right now · at the moment", "ahora mismo", "<b>At the moment</b> I <b>am writing</b> an email."],
    ["Look! · Listen! · Shh!", "¡Mira! · ¡Escucha! · ¡Shh!", "<b>Look!</b> It <b>is raining</b>."],
    ["currently · these days · this week · lately", "actualmente · estos días · esta semana · últimamente", "<b>These days</b> hackers <b>are attacking</b> banks."],
    ["still", "todavía", "She <b>is still waiting</b> at the bus stop."],
    ["today / this month (día o mes en curso)", "hoy / este mes (aún no terminado)", "I <b>am reading</b> a lot <b>this month</b>."],
    ["Cambios y tendencias: get, become, increase…", "la situación está empeorando", "The weather <b>is getting</b> colder."],
    ["Planes ya arreglados con hora (con I/he/she…)", "quedar a las 5", "I <b>am meeting</b> Tom at 5 this afternoon."],
    ["Con <b>always</b> → enfado o sorpresa", "¡siempre pierde las llaves!", "He <b>is always losing</b> his keys!"]
  ],
  tip:"Truco: si ves «ahora mismo» o alguien te dice «¡Mira!», es presente continuo. Y cuidado: los verbos de la lista stative jamás van en continuo."
},

/* ================= PAST SIMPLE ================= */
past:{
  markers:[
    ["yesterday · the day before yesterday", "ayer · anteayer", "We <b>met</b> yesterday."],
    ["last night / week / month / year", "anoche / la semana / el mes / el año pasado", "He <b>travelled</b> last summer."],
    ["… ago (two days ago, long ago)", "hace…", "They left <b>ten minutes ago</b>."],
    ["in 2010 / in the 90s / when I was young", "en 2010 / en los 90 / cuando era joven", "She <b>was born</b> in 2008."],
    ["Then · After that · Suddenly · Finally", "luego · después · de repente · al final", "<b>Suddenly</b> the lights went out."],
    ["Did you…? / What did you…? / When did…?", "¿…tú? / ¿Qué hiciste…? / ¿Cuándo…?", "<b>Did</b> you <b>see</b> that film?"],
    ["En negativa: <b>didn't + base</b> (nunca -ed)", "no vi, no terminé", "I <b>didn't finish</b> my homework."],
    ["used to + base (costumbre pasada que ya no existe)", "antes solía…", "I <b>used to play</b> tennis."]
  ],
  tip:"Truco: si hay fecha del pasado (o se sobreentiende que ya acabó), es pasado simple. Y ojo: tras didn't/Did, el verbo va en base: didn't <b>finish</b>, nunca didn't finished."
},

/* ================= PAST CONTINUOUS ================= */
pastc:{
  markers:[
    ["while + -ing (o while + was/were + -ing)", "mientras", "<b>While</b> I <b>was walking</b>, I found a wallet."],
    ["when + pasado simple (la acción corta)", "cuando", "She <b>was reading</b> <b>when</b> the lights <b>went out</b>."],
    ["at 8 p.m. yesterday · this time last year", "ayer a las 8 · a esta hora el año pasado", "<b>At 8 p.m.</b> we <b>were watching</b> a film."],
    ["all morning / all night / all day (pasado)", "toda la mañana (pasada)", "They <b>were working</b> all morning."],
    ["At that moment · Suddenly (fondo que se interrumpe)", "en ese momento · de repente", "The sun <b>was shining</b> when suddenly it rained."],
    ["as / as long as + continuo", "mientras tanto", "<b>As</b> we <b>were crossing</b> the street…"],
    ["Dos acciones largas simultáneas → AMBAS en continuo", "mientras yo estudiaba, él cocinaba", "I <b>was studying</b> and he <b>was cooking</b>."]
  ],
  tip:"Truco: while = pantalla larga (continuo); when = foto rápida (pasado simple). «While I walked» es incorrecto: siempre <b>while + was/were + -ing</b>."
},

/* ================= PRESENT PERFECT ================= */
pp:{
  markers:[
    ["ever · never (experiencia vital sin fecha)", "alguna vez · nunca", "<b>Have</b> you ever <b>been</b> to London? — No, I <b>'ve never been</b>."],
    ["just · already · yet", "justo ahora · ya · todavía no (negativas)", "She <b>has just finished</b>. · He <b>has already left</b>. · <b>Haven't</b> you eaten <b>yet</b>?"],
    ["for + duración · since + punto de inicio", "durante 3 años · desde 2021", "We <b>'ve lived</b> here <b>for</b> ten years / <b>since</b> 2015."],
    ["so far · up to now · until now · to date", "hasta ahora", "<b>So far</b> the team <b>has published</b> three articles."],
    ["this week / today / this year / lately (aún en curso)", "esta semana / hoy / este año", "I <b>'ve seen</b> her <b>this week</b>."],
    ["How long have you…?", "¿Cuánto tiempo llevas…?", "<b>How long have</b> you <b>studied</b> English?"],
    ["Resultado presente: I've lost my keys (y siguen perdidas)", "pasado con efecto ahora", "I <b>'ve lost</b> my keys → ¡no puedo entrar!"],
    ["Con frecuencia reciente: twice this month", "dos veces este mes", "She <b>has called</b> me <b>twice this month</b>."]
  ],
  tip:"Truco: present perfect = «ya», «todavía no», «alguna vez», «desde hace»… Sin fecha concreta. Si te dicen «yesterday», cambia a pasado simple."
},

/* ================= PAST PERFECT ================= */
pastp:{
  markers:[
    ["before · after · by the time (+ pasado)", "antes de que · después de que · para cuando", "The thief <b>had escaped</b> <b>before</b> the police <b>arrived</b>."],
    ["when (dos pasados: el más antiguo va en had + pp)", "cuando", "When we arrived, the film <b>had started</b>."],
    ["already · just · still (contados desde otro pasado)", "ya · justo", "He told me he <b>had already booked</b> the tickets."],
    ["by 2010 / by then / by the end of… (pasado)", "para 2010 (en el pasado)", "<b>By 9 p.m.</b> they <b>had prepared</b> the stage."],
    ["Estilo indirecto: said / told that…", "dijo que ya había…", "She said she <b>had finished</b> the report."],
    ["never + had + pp (antes de esa vez)", "nunca había…", "Her team <b>had never observed</b> that before."]
  ],
  tip:"Truco: dibuja una línea del tiempo. Si el primer evento (had + pp) está a la izquierda del segundo (pasado simple), es pluscuamperfecto."
},

/* ================= WILL ================= */
will:{
  markers:[
    ["tomorrow · next week · in 2050 · soon", "mañana · la semana que viene · en 2050", "I <b>will call</b> you tomorrow."],
    ["I think · I'm sure · probably · certainly · maybe", "creo que · seguro que · probablemente", "I think it <b>will rain</b>."],
    ["in the future · from now on", "en el futuro · a partir de ahora", "Cars <b>will use</b> less fuel."],
    ["If + presente simple → … will + base (cond. tipo 1)", "si llueve, nos quedaremos", "If it <b>rains</b>, we <b>will stay</b> home."],
    ["Ofertas y promesas: I'll… · Shall I…? (británico)", "¿te ayudo? · lo haré", "<b>I'll help</b> you. · <b>Shall I open</b> the window?"],
    ["Avisos y amenazas: Don't… or…", "no toques o te quemarás", "<b>Don't touch</b> it or you <b>will burn</b> yourself."],
    ["Con verbos de opinión: expect, believe, reckon, be sure", "espero que, me imagino que", "I <b>expect</b> they <b>will arrive</b> late."]
  ],
  tip:"Truco: will es decisión de ENTONCES u opinión. Y ojo: después de will nunca va -s ni -ing: will <b>go</b>, will <b>be</b>, will <b>have done</b>."
},

/* ================= BE GOING TO ================= */
goingto:{
  markers:[
    ["Look! · Listen! · ¡pruebas visibles AHORA!", "¡mira esas nubes!", "<b>Look at the clouds!</b> It <b>is going to rain</b>."],
    ["Planes ya decididos: this summer · next year · in September", "verano que viene (ya organizado)", "We <b>are going to move</b> house next month."],
    ["Ya tengo los preparativos: I've booked…, I've decided…", "ya he reservado, así que…", "I <b>'ve booked</b> the flights; we <b>are going to visit</b> Rome."],
    ["Algo está a punto de pasar: Be careful! …", "¡cuidado, te vas a caer!", "<b>Be careful!</b> You <b>are going to fall</b>!"],
    ["Evidencia inmediata: There's the bus!", "¡ahí va el autobús!", "There's the bus! We <b>are going to miss</b> it."],
    ["Preguntas: Am/Is/Are + sujeto + going to + base?", "¿vas a…?", "<b>Are</b> you <b>going to help</b> me later?"]
  ],
  tip:"Truco: be going to = plan YA decidido o predicción con prueba a la vista. Si es una decisión improvisada, usa will."
},

/* ================= FUTURE CONTINUOUS ================= */
futcont:{
  markers:[
    ["this time tomorrow · at 10 p.m. tonight", "a esta hora mañana · hoy a las 10", "<b>This time tomorrow</b> I <b>will be flying</b> to New York."],
    ["this time next week / next year", "a esta hora la semana que viene", "<b>This time next year</b> we <b>will be living</b> abroad."],
    ["while + will be + -ing (futuro)", "mientras estaremos…", "<b>While</b> you <b>will be travelling</b>…"],
    ["all evening / all day tomorrow (duración futura)", "toda la tarde (de mañana)", "She <b>will be working</b> all evening."],
    ["Preguntas: Will you be + -ing?", "¿estarás…?", "<b>Will you be waiting</b> for me at the station?"]
  ],
  tip:"Truco: «estar haciendo» en un momento futuro. Estructura fija: <b>will be + verbo-ing</b> (nunca will + -ing solo)."
},

/* ================= FUTURE PERFECT ================= */
futperf:{
  markers:[
    ["by + tiempo futuro: by Friday · by next year · by 2030", "para el viernes / para el año que viene", "<b>By Friday</b> I <b>will have finished</b> the project."],
    ["by the time + presente (¡ojo, presente!)", "para cuando llegues", "<b>By the time</b> you <b>arrive</b>, we <b>will have left</b>."],
    ["before + momento futuro", "antes de que… (futuro)", "He will call before we <b>will have started</b>… (más natural: before we start)"],
    ["by the end of… · in + años", "para finales de…", "<b>By the end of</b> the week they <b>will have sold</b> everything."],
    ["Preguntas: Will you have + pp?", "¿habrás…?", "<b>Will you have read</b> the book by Friday?"]
  ],
  tip:"Truco: <b>by + pasado → had + pp</b> · <b>by + futuro → will have + pp</b>. El participio, siempre: finished, gone, written…"
}
};
