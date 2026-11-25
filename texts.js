/* =========================================================
   TEXTOS DE LAS FOTOS (completar huecos)
   segments: cadena de texto | {v: verbo en corchetes, a: respuestas, why: motivo}
   ========================================================= */
const TEXTS = [

{
  id:"t1",
  lvl:"medio",
  title:"The Cybersecurity Incident",
  inst:"Complete the gaps using the correct form of the verbs in brackets: Present Simple, Present Continuous, Past Simple or Past Continuous.",
  tenses:"Present Simple · Present Continuous · Past Simple · Past Continuous",
  segments:[
    "Julian ",
    {v:"work", a:["works"], why:"Rutina profesional en presente simple con he → works."},
    " as a junior analyst for a cybersecurity firm in Madrid. He ",
    {v:"know", a:["knows"], why:"Estado permanente (know) en presente simple con he → knows."},
    " how to detect system vulnerabilities quickly. Currently, his department ",
    {v:"upgrade", a:["is upgrading"], why:"'Currently' = ahora mismo → presente continuo: is upgrading."},
    " the company's network security because hackers ",
    {v:"attack", a:["are attacking"], why:"'These days' indica una tendencia actual → are attacking."},
    " financial institutions more frequently these days. Yesterday evening at 8:00 PM, an urgent red alert ",
    {v:"appear", a:["appeared"], why:"Momento concreto del pasado (yesterday evening) → pasado simple: appeared."},
    " on his screen while he ",
    {v:"review", a:["was reviewing"], why:"Acción larga interrumpida (while) → pasado continuo: was reviewing."},
    " the server activity logs. While Julian ",
    {v:"investigate", a:["was investigating"], why:"While + acción de fondo en el pasado → was investigating."},
    " the source of the breach, the IT director ",
    {v:"isolate", a:["isolated"], why:"Acción corta que pasa durante la otra → pasado simple: isolated."},
    " the compromised server. They ",
    {v:"prevent", a:["prevented"], why:"Acción terminada en el pasado → prevented."},
    " a major data leak just in time. Right now, Julian ",
    {v:"prepare", a:["is preparing"], why:"'Right now' = ahora mismo → is preparing."}
  ]
},

{
  id:"t2",
  lvl:"medio",
  title:"The Mystery of the Missing Painting",
  inst:"Complete the text using the correct narrative tense: Past Simple, Present Perfect or Past Perfect.",
  tenses:"Past Simple · Present Perfect · Past Perfect",
  segments:[
    "Detective Vance ",
    {v:"investigate", a:["has investigated","has been investigating"], why:"'For more than fifteen years' hasta hoy → present perfect: has investigated."},
    " complex art crimes for more than fifteen years. In 2021, a thief ",
    {v:"steal", a:["stole"], why:"Fecha pasada concreta (In 2021) → pasado simple irregular: stole."},
    " a priceless masterpiece from the city gallery. The criminal ",
    {v:"deactivate", a:["had deactivated"], why:"Desactivó la alarma ANTES de entrar → pluscuamperfecto: had deactivated."},
    " the alarm system before entering the main exhibition room. When the security guards noticed the empty frame, almost two hours ",
    {v:"pass", a:["had passed"], why:"Ya habían pasado antes de que lo notaran → had passed."},
    ". During the initial inspection, forensic experts ",
    {v:"find", a:["found"], why:"Hecho concreto en el pasado de la investigación → found."},
    " a single leather glove near the broken window. Since that night, the forensic lab ",
    {v:"analyze", a:["has analyzed","has analysed"], why:"'Since that night' hasta ahora → present perfect: has analysed/analyzed."},
    " the DNA evidence multiple times with newer technology. Last month, the police ",
    {v:"reopen", a:["reopened"], why:"'Last month' → pasado simple: reopened."},
    " the case file after receiving an anonymous tip. So far, the police ",
    {v:"not / recover", a:["haven't recovered","have not recovered"], why:"'So far' (hasta ahora) exige present perfect: haven't recovered. Ojo con no poner didn't."}
  ]
},

{
  id:"t3",
  lvl:"medio",
  title:"Summer Music Festival & Gap Year",
  inst:"Complete the text using the correct future structures: Will, Be Going to, Present Simple, Present Continuous, Future Continuous or Future Perfect.",
  tenses:"Will · Be going to · Present Simple · Present Continuous · Future Continuous · Future Perfect",
  segments:[
    "The main gates for the summer festival ",
    {v:"open", a:["open"], why:"Horario oficial → presente simple para el futuro: open (sin -s por 'the gates')."},
    " at 16:00 on Friday afternoon. I ",
    {v:"work", a:["am working","'m working"], why:"Plan personal ya arreglado para este julio → presente continuo: am working."},
    " as a stage assistant this July; I signed the contract with the event company yesterday. Look at the sky! There isn't a single cloud, so it ",
    {v:"be", a:["is going to be"], why:"Evidencia ahora (no hay ni una nube) → be going to: is going to be."},
    " a scorching hot day for the concert. We need an extra acoustic guitar for the soundcheck. No problem, I ",
    {v:"lend", a:["will lend"], why:"Oferta espontánea en el momento → will lend."},
    " you mine. At 10:00 PM tonight, over twenty thousand fans ",
    {v:"sing", a:["will be singing"], why:"A esa hora estarán en pleno concierto → future continuous: will be singing."},
    " along with the headliners' songs. By the end of this weekend, the organisers ",
    {v:"sell", a:["will have sold"], why:"'By the end of' = antes de un plazo futuro → future perfect: will have sold."},
    " more than 50,000 wristbands. My cousin ",
    {v:"save", a:["is going to save"], why:"Plan decidido (comprar un sintetizador) → is going to save."},
    " his festival budget because he wants to buy a professional synthesiser. I reckon ticket prices ",
    {v:"increase", a:["will increase"], why:"Opinión sobre el futuro (I reckon) → will increase."},
    " again next year. To initialise the project, the technical crew ",
    {v:"dismantle", a:["will be dismantling"], why:"Estará desmontando en ese momento → will be dismantling."},
    " the entire main stage. Don't worry about missing the bus home; I ",
    {v:"give", a:["will give"], why:"Promesa de momento: I'll give you a lift."}
  ]
},

{
  id:"t4",
  lvl:"medio",
  title:"Deep Space Bio-Astronomy Mission",
  inst:"Read the passage carefully and fill in each blank with the correct form of the verb in brackets. Choose from: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, Past Perfect, Future Simple (will), Be going to, Future Continuous or Future Perfect.",
  tenses:"Los 10 tiempos verbales",
  segments:[
    "Dr. Elena Vance ",
    {v:"direct", a:["directs"], why:"Presente simple con she (tercera persona) → directs."},
    " an international bio-astronomy laboratory that ",
    {v:"study", a:["studies"], why:"Relativo con 'that' (the laboratory) → presente simple: studies."},
    " plant growth in zero gravity. Right now, her research team ",
    {v:"conduct", a:["is conducting"], why:"'Right now' → presente continuo: is conducting."},
    " an experiment with hydroponic crops inside a specialized orbital module. Last night, while the automated sensors ",
    {v:"monitor", a:["were monitoring"], why:"While + sujeto plural en el pasado → were monitoring."},
    " the internal humidity, a voltage drop ",
    {v:"trigger", a:["triggered"], why:"Acción puntual del pasado (last night) → triggered."},
    " an emergency alarm. Fortunately, the backup generators ",
    {v:"activate", a:["had activated"], why:"Se activaron ANTES de que bajara la temperatura → had activated."},
    " long before the temperature inside the bay dropped. Dr. Vance explained that her team ",
    {v:"never / observe", a:["had never observed"], why:"Antes de ese experimenta y con 'never' → had never observed."},
    " such a rapid cellular reaction before that experiment. Since that incident, the laboratory ",
    {v:"receive", a:["has received"], why:"'Since that incident' hasta hoy → has received."},
    " additional funding from planetary space agencies. So far, the team ",
    {v:"publish", a:["has published"], why:"'So far' → present perfect: has published."},
    " three high-impact scientific articles. Look at the high-pressure indicator on the secondary tank! It ",
    {v:"burst", a:["will burst"], why:"Predicción con evidencia (indicador rojo) y condicional: will burst."},
    " if we don't vent the system immediately! We need to send these telemetry files to ground control. I ",
    {v:"transmit", a:["will transmit"], why:"Decisión/promesa en el momento → will transmit."},
    " them right away, promised the flight engineer. According to NASA's public schedule, the automated supply capsule ",
    {v:"dock", a:["will dock"], why:"Calendario oficial (according to NASA) → will dock."},
    " with the orbital station at 04:30 AM tomorrow. Dr. Vance ",
    {v:"give", a:["will give","is going to give"], why:"Evento programado para el jueves → will give / is going to give."},
    " a live video broadcast to Bachillerato students on Thursday; the school board scheduled the event last week. While the space station is orbiting over Europe, the astronauts ",
    {v:"harvest", a:["will be harvesting"], why:"Acción en curso durante otro momento → will be harvesting."},
    " the first crop of vegetables. When the mission ends in December, the team ",
    {v:"complete", a:["will have completed"], why:"'When the mission ends' (plazo futuro) → will have completed."},
    " all orbital experiments."
  ]
}
];
