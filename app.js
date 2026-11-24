/* =========================================================
   APP: navegación, corrección, explicaciones, audio y puntos
   ========================================================= */
const TENSE_NAMES = {};
THEORY.forEach(t => TENSE_NAMES[t.key] = t.name);
TENSE_NAMES.prep = "Adjective + Preposition";

const MOTIVATION_OK = [
  "¡Muy bien! 🎉","¡Excelente! 🌟","¡Perfecto! Sigue así 💪","¡Genial, lo has dominado! 🚀",
  "¡Correcto! Eres un crack 🏆","¡Impresionante! 🎯","¡Brillante! Sigue acumulando puntos ✨",
  "¡That's it! Lo tienes claro 🧠"
];
const MOTIVATION_NO = [
  "Casi… vamos a verlo juntos 👇","No pasa nada, aprende de este error 📖",
  "¡Uy! Casi. Mira la explicación 👀","Tranquilo/a, con esto lo sacarás 💡",
  "Sigue intentándolo: ya queda menos 💥","Un error más para aprender. ¡Vamos! 🔥"
];

/* ---------------- Estado / puntos ---------------- */
const STORE_KEY = "angles_tenses_v1";
let state = { points:0, streak:0, best:0, solved:0, failed:0, done:{} };
try{
  const raw = localStorage.getItem(STORE_KEY);
  if(raw) state = Object.assign(state, JSON.parse(raw));
}catch(e){}

function save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function addPoints(n, silent){
  if(n<=0) return;
  state.points += n;
  save();
  const box = document.getElementById("pointsBox");
  document.getElementById("pointsValue").textContent = state.points;
  box.classList.remove("bump"); void box.offsetWidth; box.classList.add("bump");
  if(!silent) toast("+" + n + " puntos ⭐");
  renderStreak();
}
function renderStreak(){
  document.getElementById("streakValue").textContent = "🔥 " + state.streak;
}
let toastTimer=null;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2200);
}

/* ---------------- Normalización de respuestas ---------------- */
const CONTRACTIONS = {
  "dont":"do not","doesnt":"does not","didnt":"did not","wont":"will not","isnt":"is not",
  "arent":"are not","wasnt":"was not","werent":"were not","havent":"have not","hasnt":"has not",
  "hadnt":"had not","cant":"can not","couldnt":"could not","shouldnt":"should not",
  "wouldnt":"would not","mustnt":"must not","im":"i am","ive":"i have","ill":"i will",
  "id":"i would","youre":"you are","theyre":"they are","hes":"he is","shes":"she is",
  "its":"it is","thats":"that is","whats":"what is","theres":"there is","lets":"let us"
};
function norm(s){
  if(s==null) return "";
  let x = String(s).toLowerCase().replace(/[’‘`]/g,"'").trim();
  x = x.replace(/n't/g,"nt").replace(/'s\b/g,"s").replace(/'ve\b/g,"ve")
       .replace(/'ll\b/g,"ll").replace(/'re\b/g,"re").replace(/'d\b/g,"d").replace(/'/g,"");
  x = x.replace(/[.,!?;:"()]/g," ").replace(/\s+/g," ").trim();
  const parts = x.split(" ").map(w => CONTRACTIONS[w] || w);
  return parts.join(" ").replace(/\s+/g," ").trim();
}

/* ---------------- Audio (Listening) ---------------- */
let enVoice = null;
function loadVoices(){
  const vs = speechSynthesis.getVoices();
  enVoice = vs.find(v=>/en-GB/i.test(v.lang)) || vs.find(v=>/^en/i.test(v.lang)) || null;
}
if("speechSynthesis" in window){
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
function speak(text){
  if(!("speechSynthesis" in window)){ toast("Tu navegador no soporta audio 🔇"); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = enVoice ? enVoice.lang : "en-GB";
  if(enVoice) u.voice = enVoice;
  u.rate = 0.92; u.pitch = 1;
  speechSynthesis.speak(u);
}

/* ---------------- Utilidades de enunciados ---------------- */
/* Devuelve los huecos en orden: {hint} si lleva verbo entre paréntesis */
function holesOf(q){
  const re = /___(?:\s*\(([^)]*)\))?/g, out=[]; let m;
  while((m = re.exec(q)) !== null) out.push({hint: m[1] || null});
  return out;
}
/* Respuestas válidas por hueco */
function answersFor(ex){
  if(ex.multi) return ex.multi.map(a=>[a]);
  return [ex.a];
}
function fullSentence(ex){
  const answers = answersFor(ex).map(arr=>arr[0]);
  let i=0;
  return ex.q.replace(/___(?:\s*\(([^)]*)\))?/g, ()=>answers[i++] ?? "");
}

/* =========================================================
   TARJETA DE EJERCICIO (banco y práctica)
   ========================================================= */
function exerciseCard(ex){
  const solved = state.done[ex.id] && state.done[ex.id].ok;
  const lvlLabel = ex.lvl === "basico" ? "🌱 Básico" : "🚀 Medio";
  let html = `<div class="ex-card" data-ex="${ex.id}">
    <div class="ex-top">
      <span class="badge ${ex.lvl}">${lvlLabel}</span>
      <span class="badge">${TENSE_NAMES[ex.t]}</span>
      ${solved ? '<span class="badge done">✔ Resuelto</span>' : ""}
    </div>
    <div class="q">${qHtml(ex)}</div>
    <div class="answer-row">
      <input class="txt" type="text" placeholder="Escribe la respuesta en inglés..." autocomplete="off" spellcheck="false">
      <button class="btn check">Comprobar</button>
      <button class="btn ghost listen" style="display:none">🔊 Listening</button>
    </div>
    <div class="feedback"></div>
  </div>`;
  return html;
}
function qHtml(ex){
  let i=0;
  /* Sustituye "___ (verbo)" por un hueco con el verbo como pista */
  return ex.q.replace(/___(?:\s*\(([^)]*)\))?/g, (m,hint)=>{
    const n = i++;
    return `<span class="blank"><input class="gapin" data-i="${n}" style="width:100%;border:none;background:transparent;text-align:center;font:inherit;outline:none" placeholder="${hint ? hint : ""}"></span>`;
  });
}

function bindCard(card, ex){
  const inputs = [...card.querySelectorAll(".gapin")];
  const feedback = card.querySelector(".feedback");
  const listenBtn = card.querySelector(".listen");
  const checkBtn = card.querySelector(".check");

  function check(){
    const variants = answersFor(ex);
    let allOk = true, firstBad = null;
    inputs.forEach((inp, idx)=>{
      const val = inp.value;
      const opts = variants[idx] || [];
      const ok = opts.length > 0 && opts.some(v => norm(v) === norm(val));
      inp.classList.toggle("ok", ok);
      inp.classList.toggle("bad", !ok);
      if(!ok){ allOk = false; if(firstBad===null) firstBad = idx; }
    });

    const rec = state.done[ex.id];
    const already = rec && rec.ok;
    let pts = 0;
    if(allOk){
      if(!already){
        pts = ex.lvl === "basico" ? 10 : 15;
        state.solved++;
      }
      state.streak++;
      state.best = Math.max(state.best, state.streak);
    }else{
      state.streak = 0;
      state.failed++;
    }
    state.done[ex.id] = { ok: already || allOk, tries: (rec ? rec.tries : 0) + 1 };
    save();
    renderStreak();
    if(pts) addPoints(pts);

    feedback.className = "feedback show " + (allOk ? "good" : "bad");
    if(allOk){
      feedback.innerHTML = `
        <div class="title">✅ ${pick(MOTIVATION_OK)}${pts ? `<span class="points-pill">+${pts} puntos</span>` : (already ? '<span class="points-pill small">ya lo tenías ✅</span>' : "")}</div>
        <div class="why">${ex.why}</div>`;
    }else{
      const your = inputs.map(i=>i.value.trim() || "—").join(" / ");
      const sol  = answersFor(ex).map(a=>a[0]).join(" ... ");
      feedback.innerHTML = `
        <div class="title">❌ ${pick(MOTIVATION_NO)}</div>
        <div class="why"><b>Tu respuesta:</b> ${your || "—"}<br><b>Solución correcta:</b> ${sol}</div>
        <div class="why">${ex.why}</div>`;
      inputs[firstBad] && inputs[firstBad].focus();
    }
    listenBtn.style.display = "inline-block";
  }

  checkBtn.addEventListener("click", check);
  listenBtn.addEventListener("click", ()=> speak(fullSentence(ex)));
  inputs.forEach(inp => inp.addEventListener("keydown", e=>{
    if(e.key === "Enter"){ e.preventDefault(); check(); }
  }));
}

/* =========================================================
   TEORÍA
   ========================================================= */
function md(s){ return String(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }

function renderTheory(){
  const host = document.getElementById("theoryList");
  host.innerHTML = THEORY.map((t,i)=>`
    <div class="tense-card ${i===0?"open":""}" data-t="${t.key}">
      <div class="tense-head">
        <span class="dot" style="background:${t.color}"></span>
        <div><h3>${t.name}</h3><span class="sp">${t.sp}</span></div>
        <span class="arrow">▶</span>
      </div>
      <div class="tense-body">
        <h4>¿Cuándo se usa?</h4>
        <ul>${t.use.map(u=>`<li>${md(u)}</li>`).join("")}</ul>
        <h4>Estructura</h4>
        <table class="form-table">
          ${t.form.map(f=>`<tr><th>${f[0]}</th><td>${f[1]}</td></tr>`).join("")}
        </table>
        <h4>Ejemplos</h4>
        ${t.ex.map(e=>`<div class="ex"><div class="en">${e[0]} <button class="btn ghost" style="padding:2px 8px;font-size:12px;margin-left:6px" data-say="${e[0].replace(/"/g,"")}">🔊</button></div><div class="es">${e[1]}</div></div>`).join("")}
        <h4>Palabras clave</h4>
        <div class="signals">${t.signals.map(s=>`<span>${s}</span>`).join("")}</div>
        <div class="error-box">⚠️ ${t.error}</div>
        <div style="margin-top:12px">
          <button class="btn practice-of" data-t="${t.key}">🎯 Practicar este tiempo verbal</button>
        </div>
      </div>
    </div>`).join("");

  host.querySelectorAll(".tense-head").forEach(h=>{
    h.addEventListener("click", ()=> h.parentElement.classList.toggle("open"));
  });
  host.querySelectorAll("[data-say]").forEach(b=>{
    b.addEventListener("click", e=>{ e.stopPropagation(); speak(b.dataset.say); });
  });
  host.querySelectorAll(".practice-of").forEach(b=>{
    b.addEventListener("click", ()=>{
      switchTab("practice");
      renderPractice(b.dataset.t);
      document.getElementById("practiceChips").querySelectorAll(".chip").forEach(c=>
        c.classList.toggle("active", c.dataset.t === b.dataset.t));
    });
  });
}

/* =========================================================
   PRÁCTICA (5 preguntas por tiempo verbal)
   ========================================================= */
function renderPracticeChips(){
  const host = document.getElementById("practiceChips");
  host.innerHTML = THEORY.map((t,i)=>
    `<button class="chip ${i===0?"active":""}" data-t="${t.key}">${t.name}</button>`).join("");
  host.querySelectorAll(".chip").forEach(c=>{
    c.addEventListener("click", ()=>{
      host.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      renderPractice(c.dataset.t);
    });
  });
}
let practiceTense = "ps";
function renderPractice(tkey){
  practiceTense = tkey || practiceTense;
  const pool = BANK.filter(b=>b.t===practiceTense);
  const basic = shuffle(pool.filter(b=>b.lvl==="basico")).slice(0,3);
  const medium = shuffle(pool.filter(b=>b.lvl==="medio")).slice(0,2);
  const set = shuffle(basic.concat(medium));
  const area = document.getElementById("practiceArea");
  area.innerHTML = `
    <div class="ex-top" style="margin-bottom:14px">
      <span class="badge">${TENSE_NAMES[practiceTense]}</span>
      <span class="badge">5 preguntas</span>
      <button class="btn ghost" id="againPractice">🔄 Otra serie</button>
    </div>
    <div id="practiceSet"></div>`;
  const setHost = document.getElementById("practiceSet");
  set.forEach(ex=>{
    setHost.insertAdjacentHTML("beforeend", exerciseCard(ex));
    bindCard(setHost.lastElementChild, ex);
  });
  document.getElementById("againPractice").addEventListener("click", ()=>renderPractice(practiceTense));
}
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

/* =========================================================
   BANCO DE EJERCICIOS
   ========================================================= */
let bankLevel = "basico", bankTense = "all";
function renderBankChips(){
  const host = document.getElementById("tenseChips");
  host.innerHTML = `<button class="chip active" data-t="all">Todos</button>` +
    THEORY.map(t=>`<button class="chip" data-t="${t.key}">${t.name}</button>`).join("");
  host.querySelectorAll(".chip").forEach(c=>{
    c.addEventListener("click", ()=>{
      host.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      bankTense = c.dataset.t;
      renderBank();
    });
  });
  document.querySelectorAll("#levelChips .chip").forEach(c=>{
    c.addEventListener("click", ()=>{
      document.querySelectorAll("#levelChips .chip").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      bankLevel = c.dataset.level;
      renderBank();
    });
  });
}
function renderBank(){
  const list = BANK.filter(b=> b.lvl===bankLevel && (bankTense==="all" || b.t===bankTense));
  const host = document.getElementById("bankList");
  const doneCount = list.filter(b=> state.done[b.id] && state.done[b.id].ok).length;
  host.innerHTML = `<div class="ex-top" style="margin-bottom:12px">
      <span class="badge">${list.length} ejercicios</span>
      <span class="badge done">${doneCount} resueltos</span>
    </div>` + list.map(exerciseCard).join("");
  host.querySelectorAll(".ex-card").forEach(card=>{
    const ex = list.find(b=>b.id === card.dataset.ex);
    bindCard(card, ex);
  });
}

/* =========================================================
   TEXTOS
   ========================================================= */
function textCard(t){
  let bi = 0;
  const body = t.segments.map(seg=>{
    if(typeof seg === "string") return seg;
    const n = bi++;
    return `<span class="gap-n">${n+1}</span> <input class="gap" data-i="${n}" autocomplete="off" spellcheck="false" placeholder="${seg.v}">`;
  }).join("");
  return `<div class="text-card" data-text="${t.id}">
    <h3>📝 ${t.title}</h3>
    <p class="inst">${t.inst}</p>
    <div class="ex-top"><span class="badge">${t.tenses}</span><span class="badge">${t.segments.filter(s=>typeof s!=="string").length} huecos</span></div>
    <div class="paragraph">${body}</div>
    <div class="answer-row" style="margin-top:14px">
      <button class="btn check">Comprobar</button>
      <button class="btn listen" style="display:none">🔊 Listening (texto completo)</button>
      <button class="btn ghost reveal">👀 Ver solución</button>
    </div>
    <div class="feedback"></div>
  </div>`;
}
function bindText(card, t){
  const inputs = [...card.querySelectorAll(".gap")];
  const feedback = card.querySelector(".feedback");
  const listenBtn = card.querySelector(".listen");
  const blanks = t.segments.filter(s=>typeof s!=="string");

  function correctText(){
    let i=0;
    return t.segments.map(s=> typeof s==="string" ? s : s.a[0]).join("").replace(/\s+/g," ").trim();
  }
  function check(){
    let okCount = 0, pts = 0;
    const wrongs = [];
    inputs.forEach((inp,i)=>{
      const b = blanks[i];
      const ok = b.a.some(v=>norm(v)===norm(inp.value));
      inp.classList.toggle("ok", ok);
      inp.classList.toggle("bad", !ok);
      const key = t.id + ":" + i;
      const rec = state.done[key];
      if(ok){
        okCount++;
        if(!(rec && rec.ok)){
          pts += rec ? 2 : 5;
          state.solved++;
        }
        state.done[key] = {ok:true, tries:(rec?rec.tries:0)+1};
        state.streak++;
      }else{
        wrongs.push({i, b, your: inp.value.trim()});
        state.streak = 0;
        state.failed++;
        state.done[key] = {ok:false, tries:(rec?rec.tries:0)+1};
      }
    });
    state.best = Math.max(state.best, state.streak);
    save(); renderStreak(); if(pts) addPoints(pts);

    feedback.className = "feedback show " + (wrongs.length===0 ? "good" : "bad");
    if(wrongs.length===0){
      feedback.innerHTML = `<div class="title">✅ ¡Texto completo! ${pick(MOTIVATION_OK)}<span class="points-pill">+${pts} puntos</span></div>
        <div class="why">Pulsa <b>🔊 Listening</b> para oír el texto entero en inglés y comprobar la entonación.</div>`;
    }else{
      feedback.innerHTML = `<div class="title">❌ ${wrongs.length} de ${inputs.length} huecos fallan. ${pick(MOTIVATION_NO)}</div>` +
        wrongs.map(w=>`<div class="why"><b>Hueco ${w.i+1}:</b> ${w.your || "—"} → <b>${w.b.a[0]}</b><br>${w.b.why}</div>`).join("") +
        (okCount? `<div class="why">✔ Has acertado ${okCount} huecos.</div>`:"");
    }
    listenBtn.style.display = "inline-block";
  }
  function reveal(){
    inputs.forEach((inp,i)=>{ inp.value = blanks[i].a[0]; inp.classList.add("ok"); inp.classList.remove("bad"); });
    feedback.className = "feedback show bad";
    feedback.innerHTML = `<div class="title">👀 Solución completa</div>` +
      blanks.map((b,i)=>`<div class="why"><b>${i+1}.</b> ${b.a[0]} — ${b.why}</div>`).join("");
    listenBtn.style.display = "inline-block";
  }
  card.querySelector(".check").addEventListener("click", check);
  card.querySelector(".reveal").addEventListener("click", reveal);
  listenBtn.addEventListener("click", ()=> speak(correctText()));
}
function renderTexts(){
  const host = document.getElementById("textsList");
  host.innerHTML = TEXTS.map(textCard).join("");
  host.querySelectorAll(".text-card").forEach(card=>{
    bindText(card, TEXTS.find(t=>t.id===card.dataset.text));
  });
}

/* =========================================================
   PREPOSICIONES (adjective + preposition)
   ========================================================= */
let prepLevel = "basico";
function renderPrepTheory(){
  const p = PREP_THEORY;
  document.getElementById("prepTheory").innerHTML = `
    <div class="tense-card open">
      <div class="tense-head" style="cursor:default">
        <span class="dot" style="background:#f08c00"></span>
        <div><h3>${p.title}</h3><span class="sp">${p.sp}</span></div>
      </div>
      <div class="tense-body" style="display:block">
        <h4>Cómo funciona</h4>
        <ul>${p.rules.map(r=>`<li>${md(r)}</li>`).join("")}</ul>
        <h4>Tabla de preposiciones (las de las fotos, primero)</h4>
        <table class="form-table">
          <tr><th>Adjetivo + prep.</th><th>Significado</th></tr>
          ${p.table.map(t=>`<tr><td><b>${t[0]}</b></td><td>${t[1]}</td></tr>`).join("")}
        </table>
        <h4>Ejemplos</h4>
        ${p.ex.map(e=>`<div class="ex"><div class="en">${e[0]} <button class="btn ghost" style="padding:2px 8px;font-size:12px;margin-left:6px" data-say="${e[0].replace(/"/g,"")}">🔊</button></div><div class="es">${e[1]}</div></div>`).join("")}
        <div class="error-box">${p.errors}</div>
      </div>
    </div>`;
  document.getElementById("prepTheory").querySelectorAll("[data-say]").forEach(b=>{
    b.addEventListener("click", ()=> speak(b.dataset.say));
  });
}
function renderPrep(){
  const list = PREP_BANK.filter(b=> b.lvl===prepLevel);
  const host = document.getElementById("prepList");
  const done = list.filter(b=> state.done[b.id] && state.done[b.id].ok).length;
  host.innerHTML = `<div class="ex-top" style="margin-bottom:12px">
      <span class="badge">${list.length} ejercicios</span>
      <span class="badge done">${done} resueltos</span>
    </div>` + list.map(exerciseCard).join("");
  host.querySelectorAll(".ex-card").forEach(card=>{
    bindCard(card, list.find(b=>b.id === card.dataset.ex));
  });
}
function renderPrepPractice(){
  const set = shuffle(PREP_BANK).slice(0,5);
  const area = document.getElementById("prepPracticeArea");
  area.innerHTML = `<div class="ex-top" style="margin:18px 0 12px">
      <span class="badge">🎯 5 preguntas al azar</span>
      <button class="btn ghost" id="prepAgain">🔄 Otra serie</button>
      <button class="btn ghost" id="prepClose">✖ Cerrar</button>
    </div><div id="prepSet"></div>`;
  const host = document.getElementById("prepSet");
  set.forEach(ex=>{
    host.insertAdjacentHTML("beforeend", exerciseCard(ex));
    bindCard(host.lastElementChild, ex);
  });
  document.getElementById("prepAgain").addEventListener("click", renderPrepPractice);
  document.getElementById("prepClose").addEventListener("click", ()=>{ area.innerHTML=""; });
}

/* =========================================================
   PUNTOS / ESTADÍSTICAS
   ========================================================= */
const RANKS = [
  {min:0,    name:"Beginner 🌱",        desc:"Estás empezando. ¡Sigue practicando!"},
  {min:100,  name:"Elementary 🌿",      desc:"Ya dominas lo básico."},
  {min:300,  name:"Intermediate ⭐",     desc:"Vas por muy buen camino."},
  {min:600,  name:"Upper-Intermediate 🚀", desc:"¡Casi llegas al C1!"},
  {min:1000, name:"Advanced 🏆",        desc:"Nivel de experto en tiempos verbales."},
  {min:1600, name:"Master 👑",          desc:"¡Lo dominas todo! Eres un crack."}
];
function renderStats(){
  const total = state.solved + state.failed;
  const acc = total ? Math.round(state.solved/total*100) : 0;
  let rank = RANKS[0], next = null;
  RANKS.forEach((r,i)=>{ if(state.points >= r.min){ rank = r; next = RANKS[i+1] || null; } });
  const span = next ? next.min - rank.min : 1;
  const pct = next ? Math.min(100, Math.round((state.points - rank.min)/span*100)) : 100;

  const perTense = THEORY.map(t=>{
    const items = BANK.filter(b=>b.t===t.key);
    const done = items.filter(b=> state.done[b.id] && state.done[b.id].ok).length;
    return {name:t.name, color:t.color, done, total:items.length};
  });
  const prepDone = PREP_BANK.filter(b=> state.done[b.id] && state.done[b.id].ok).length;
  perTense.push({name:"Adjective + Preposition", color:"#f08c00", done:prepDone, total:PREP_BANK.length});

  document.getElementById("statsArea").innerHTML = `
    <div class="rank">
      <h3>${rank.name}</h3>
      <div>${rank.desc}</div>
      <div style="margin-top:8px;font-weight:800">⭐ ${state.points} puntos ${next ? `· faltan <b>${next.min - state.points}</b> para ${next.name}` : "· ¡nivel máximo!"}</div>
      <div class="bar"><i style="width:${pct}%"></i></div>
    </div>
    <div class="stat-grid">
      <div class="stat"><div class="num">${state.points}</div><div class="lbl">Puntos totales</div></div>
      <div class="stat"><div class="num">${state.best}</div><div class="lbl">Mejor racha 🔥</div></div>
      <div class="stat"><div class="num">${state.solved}</div><div class="lbl">Aciertos ✅</div></div>
      <div class="stat"><div class="num">${acc}%</div><div class="lbl">Porcentaje de acierto</div></div>
    </div>
    <div class="legend" style="margin-top:18px">
      <h3 style="margin-top:0">Progreso por tiempo verbal (banco)</h3>
      <ul style="list-style:none;padding:0;margin:0">
        ${perTense.map(p=>`<li style="display:flex;align-items:center;gap:10px;margin:8px 0">
          <span style="width:170px;font-size:14px">${p.name}</span>
          <span style="flex:1;height:10px;background:#eef1f7;border-radius:99px;overflow:hidden">
            <i style="display:block;height:100%;width:${p.total? Math.round(p.done/p.total*100):0}%;background:${p.color}"></i>
          </span>
          <span style="font-size:13px;color:#6b7280;width:56px;text-align:right">${p.done}/${p.total}</span>
        </li>`).join("")}
      </ul>
    </div>
    <div class="reset"><button class="btn danger" id="resetBtn">🗑 Borrar mis puntos y progreso</button></div>`;

  document.getElementById("resetBtn").addEventListener("click", ()=>{
    if(confirm("¿Seguro que quieres borrar todos tus puntos y progreso?")){
      state = { points:0, streak:0, best:0, solved:0, failed:0, done:{} };
      save();
      document.getElementById("pointsValue").textContent = 0;
      renderStreak(); renderStats(); renderBank();
      toast("Progreso borrado");
    }
  });
}

/* =========================================================
   NAVEGACIÓN
   ========================================================= */
function switchTab(name){
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active", t.dataset.tab===name));
  document.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active", p.id==="panel-"+name));
  if(name==="stats") renderStats();
  window.scrollTo({top:0, behavior:"smooth"});
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("pointsValue").textContent = state.points;
  renderStreak();

  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=> switchTab(t.dataset.tab));
  });

  renderTheory();
  renderPracticeChips();
  renderPractice("ps");
  renderBankChips();
  renderBank();
  renderPrepTheory();
  renderPrep();
  document.querySelectorAll("#prepLevelChips .chip").forEach(c=>{
    c.addEventListener("click", ()=>{
      document.querySelectorAll("#prepLevelChips .chip").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      prepLevel = c.dataset.level;
      renderPrep();
    });
  });
  document.getElementById("prepPractice").addEventListener("click", renderPrepPractice);
  renderTexts();
  renderStats();
});
