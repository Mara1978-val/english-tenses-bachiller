/* =========================================================
   APP: navegación, corrección, explicaciones, audio y puntos
   ========================================================= */
const TENSE_NAMES = {};
THEORY.forEach(t => TENSE_NAMES[t.key] = t.name);
TENSE_NAMES.prep = "Adjective + Preposition";

/* Fusionamos la teoría ampliada (ortografía, stative, palabras clave) */
if(typeof THEORY_EXTRA !== "undefined"){
  THEORY.forEach(t => Object.assign(t, THEORY_EXTRA[t.key] || {}));
}

/* Todos los textos de las 5 partes */
const ALL_TEXTS = [typeof TEXTS!=="undefined"?TEXTS:[], typeof TEXTS2!=="undefined"?TEXTS2:[],
                   typeof TEXTS3!=="undefined"?TEXTS3:[], typeof TEXTS4!=="undefined"?TEXTS4:[],
                   typeof TEXTS5!=="undefined"?TEXTS5:[]].flat();

/* ---------------- Mensajes motivadores (personalizados para Adriana) ---------------- */
const STUDENT = "Adriana";
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
const ADRIANA_OK = [
  "¡Muy bien, Adriana! 🌟","¡Otro para ti, Adriana! 🏆","¡Qué fuerte eres, Adriana! 💪",
  "¡Genial, Adriana! Lo estás clavando 🚀","¡Eres increíble, Adriana! 🎉",
  "¡Brillante, Adriana! Sigue así ✨","¡Lo tienes clarísimo, Adriana! 🧠",
  "¡Impresionante, Adriana! 🎯","¡Súper, Adriana! Un paso más hacia el dominio 🔥",
  "¡Wow, Adriana! Los verbos ingleses tiemblan contigo 🇬🇧"
];
const ADRIANA_NO = [
  "Casi, Adriana… vamos a verlo juntos 👇","No pasa nada, Adriana: de los errores se aprende 📖",
  "¡Uy, Adriana! Mira la explicación 👀","Tranquilo, Adriana, con esto lo sacarás 💡",
  "Sigue intentándolo, Adriana: ya queda menos 💥","Un error más para aprender, Adriana. ¡Vamos! 🔥"
];
const CHEERS = [
  "¡Ánimo, Adriana! 💪 Hoy vas a arrasar con los tiempos verbales 🚀",
  "Adriana, tú puedes: cada ejercicio te acerca más al 10 ⭐",
  "¡Escribe, falla, aprende y repite, Adriana! 📚 Así se domina un idioma",
  "Pequeños pasos cada día, gran resultado, Adriana ✨",
  "¡Los verbos ingleses no se te resisten, Adriana! 🇬🇧🔥",
  "Adriana, eres capaz de todo lo que te propongas 🌟 ¡Hoy es un gran día!"
];
function praise(){ return Math.random() < 0.7 ? pick(ADRIANA_OK) : pick(MOTIVATION_OK); }
function consolation(){ return Math.random() < 0.7 ? pick(ADRIANA_NO) : pick(MOTIVATION_NO); }

/* ---------------- Estado / puntos ---------------- */
/* v2: reinicio de puntos (Adriana empieza desde cero) */
const STORE_KEY = "angles_tenses_v2";
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
  if(!silent) toast("+" + n + " puntos ⭐ ¡Vamos, " + STUDENT + "!");
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

/* =========================================================
   DICCIÓNARIO: traducción al pasar el ratón, al seleccionar
   una frase y cuadro fijo arriba del todo
   ========================================================= */
const dictCache = new Map();
function escHtml(s){
  return String(s==null?"":s).replace(/[&<>"']/g, c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
/* Traducción EN→ES (MyMemory) + definición (dictionaryapi.dev), con caché */
async function lookup(text){
  const key = String(text||"").trim().toLowerCase();
  if(!key) return {es:"", def:"", phon:""};
  if(dictCache.has(key)) return dictCache.get(key);
  const out = {es:"", def:"", phon:""};
  if(typeof fetch !== "function"){
    out.es = "⚠️ Este navegador no permite consultar el diccionario";
    return out;
  }
  try{
    const results = await Promise.allSettled([
      fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(key)+"&langpair=en|es")
        .then(r=>r.json()),
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+encodeURIComponent(key.split(/\s+/)[0]))
        .then(r=> r.ok ? r.json() : Promise.reject()).catch(()=>null)
    ]);
    const tr = results[0];
    if(tr.status === "fulfilled"){
      const t = (tr.value && tr.value.responseData && tr.value.responseData.translatedText) || "";
      if(t && t.toLowerCase() !== key && !/mymemory warning/i.test(t)) out.es = t;
    }
    const dic = results[1];
    if(dic.status === "fulfilled" && Array.isArray(dic.value) && dic.value[0]){
      const d = dic.value[0];
      out.phon = d.phonetic || (d.phonetics && d.phonetics[0] && d.phonetics[0].text) || "";
      const m = d.meanings && d.meanings[0];
      out.def = (m && m.definitions && m.definitions[0] && m.definitions[0].definition) || "";
    }
  }catch(e){ /* sin conexión */ }
  if(!out.es) out.es = "⚠️ Sin conexión: no se pudo traducir";
  else dictCache.set(key, out);
  return out;
}

/* ---- Cuadro de diccionario de la cabecera ---- */
async function doDict(text){
  const drop = document.getElementById("dictDrop");
  if(!drop) return;
  text = String(text||"").trim();
  if(!text){ drop.hidden = true; drop.innerHTML = ""; return; }
  drop.hidden = false;
  drop.innerHTML = '<div class="row"><span>⏳ Traduciendo…</span></div>';
  const r = await lookup(text);
  if(document.getElementById("dictInput").value.trim().toLowerCase() !== text.toLowerCase()) return;
  drop.innerHTML = `
    <div class="row">
      <div>
        <div class="es">🌍 ${escHtml(r.es)}</div>
        ${r.phon ? `<div class="phon">${escHtml(r.phon)}</div>` : ""}
        ${r.def ? `<div class="def"><b>${escHtml(text.split(/\s+/)[0])}</b>: ${escHtml(r.def)}</div>` : ""}
      </div>
      <button class="btn ghost" id="dictSay" style="padding:4px 10px;flex:none" title="Escuchar">🔊</button>
    </div>`;
  const say = document.getElementById("dictSay");
  if(say) say.addEventListener("click", ()=> speak(text));
}

/* ---- Tooltip: significado al pasar el ratón sobre una palabra ---- */
function ensureTip(id, cls){
  let tip = document.getElementById(id);
  if(!tip){
    tip = document.createElement("div");
    tip.id = id; tip.className = cls; tip.hidden = true;
    document.body.appendChild(tip);
  }
  return tip;
}
function posTip(tip, x, y){
  tip.style.left = Math.max(6, Math.min(x+14, window.innerWidth-340)) + "px";
  tip.style.top  = Math.max(6, Math.min(y+18, window.innerHeight-100)) + "px";
}
/* Palabra bajo el cursor (Chrome/Edge: caretRangeFromPoint · Firefox: caretPositionFromPoint) */
function wordAtPoint(x,y){
  const d = document;
  let node = null, offset = 0;
  if(typeof d.caretRangeFromPoint === "function"){
    const r = d.caretRangeFromPoint(x,y);
    if(r){ node = r.startContainer; offset = r.startOffset; }
  }else if(typeof d.caretPositionFromPoint === "function"){
    const p = d.caretPositionFromPoint(x,y);
    if(p){ node = p.offsetNode; offset = p.offset; }
  }else return null;
  if(!node || node.nodeType !== 3) return null;
  const text = node.textContent || "";
  let s = offset, e = offset;
  while(s>0 && /[A-Za-z'’-]/.test(text[s-1])) s--;
  while(e<text.length && /[A-Za-z'’-]/.test(text[e])) e++;
  const w = text.slice(s,e).replace(/^[^A-Za-z]+|[^A-Za-z]+$/g,"");
  return w.length>=2 ? w : null;
}
let tipWord = "", tipTimer = null;
function hideWordTip(){
  const t = document.getElementById("wordTip");
  if(t) t.hidden = true;
  tipWord = "";
}
function initWordTips(){
  const tip = ensureTip("wordTip","word-tip");
  document.addEventListener("mousemove", e=>{
    const tgt = e.target;
    if(!tgt || !tgt.closest) return;
    const host = tgt.closest(".en, .q, .inst, .ex-en");
    if(!host || tgt.closest("input, button, a")){ hideWordTip(); return; }
    const w = wordAtPoint(e.clientX, e.clientY);
    if(!w){ hideWordTip(); return; }
    if(w.toLowerCase() === tipWord && !tip.hidden){ posTip(tip, e.clientX, e.clientY); return; }
    tipWord = w.toLowerCase();
    clearTimeout(tipTimer);
    tip.hidden = true;
    const x = e.clientX, y = e.clientY;
    tipTimer = setTimeout(async ()=>{
      tip.hidden = false;
      tip.innerHTML = `<span style="opacity:.75">⏳</span> <b>${escHtml(w)}</b>`;
      posTip(tip, x, y);
      const r = await lookup(w);
      if(tipWord !== w.toLowerCase()) return;
      tip.innerHTML = `${r.phon ? `<span style="opacity:.7">${escHtml(r.phon)}</span> · ` : ""}<b>${escHtml(r.es)}</b>` +
        (r.def ? `<br><span style="opacity:.85;font-size:12px">${escHtml(r.def)}</span>` : "");
      posTip(tip, x, y);
    }, 300);
  });
  document.addEventListener("scroll", hideWordTip, true);
}

/* ---- Traducción de la frase seleccionada ---- */
let selTimer = null;
function hideSelTip(){
  const t = document.getElementById("selTip");
  if(t) t.hidden = true;
}
function initSelectionTip(){
  ensureTip("selTip","sel-tip");
  document.addEventListener("mouseup", e=>{
    if(e.target && e.target.closest && e.target.closest("#selTip, #dictBox, input, textarea")) return;
    clearTimeout(selTimer);
    selTimer = setTimeout(showSelTranslation, 350);
  });
  document.addEventListener("mousedown", e=>{
    if(!(e.target && e.target.closest && e.target.closest("#selTip"))) hideSelTip();
  });
  window.addEventListener("scroll", hideSelTip, {passive:true});
}
async function showSelTranslation(){
  hideSelTip();
  let sel = null;
  try{ sel = document.getSelection(); }catch(e){ return; }
  if(!sel || sel.isCollapsed) return;
  const text = sel.toString().trim().replace(/\s+/g," ");
  if(text.length < 2 || text.length > 300) return;
  const node = sel.anchorNode;
  const el = node && (node.nodeType===1 ? node : node.parentElement);
  if(el && el.closest && el.closest("input, textarea, #dictBox")) return;
  const tip = ensureTip("selTip","sel-tip");
  let rect = null;
  try{
    const rng = sel.getRangeAt(0);
    rect = rng.getBoundingClientRect && rng.getBoundingClientRect();
  }catch(e){}
  if(!rect || (!rect.top && !rect.left && !rect.width)){
    rect = (el && el.getBoundingClientRect) ? el.getBoundingClientRect() : {top:90, left:90};
  }
  tip.hidden = false;
  tip.innerHTML = "⏳ Traduciendo…";
  tip.style.left = Math.max(8, Math.min(rect.left, window.innerWidth-340)) + "px";
  tip.style.top  = Math.max(8, rect.top - 56) + "px";
  const r = await lookup(text);
  tip.innerHTML = `🌍 <b>${escHtml(r.es)}</b>` +
    (r.def ? `<br><span style="opacity:.85;font-size:12px">${escHtml(r.def)}</span>` : "") +
    ` <button class="btn" id="selSay" style="padding:2px 9px;font-size:12px;margin-left:6px" title="Escuchar">🔊</button>`;
  const say = document.getElementById("selSay");
  if(say) say.addEventListener("click", ()=> speak(text));
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
        <div class="title">✅ ${praise()}${pts ? `<span class="points-pill">+${pts} puntos</span>` : (already ? '<span class="points-pill small">ya lo tenías ✅</span>' : "")}</div>
        <div class="why">${ex.why}</div>`;
    }else{
      const your = inputs.map(i=>i.value.trim() || "—").join(" / ");
      const sol  = answersFor(ex).map(a=>a[0]).join(" ... ");
      feedback.innerHTML = `
        <div class="title">❌ ${consolation()}</div>
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

  /* Guía rápida para elegir el tiempo verbal */
  const guide = typeof QUICK_GUIDE !== "undefined" ? `
    <div class="tense-card open" style="border-left:5px solid #0ca678">
      <div class="tense-head" style="cursor:default;background:#f2fff7">
        <span class="dot" style="background:#0ca678"></span>
        <div><h3>🧭 ¿Cómo elijo el tiempo verbal?</h3><span class="sp">Guía rápida: pregunta → tiempo verbal</span></div>
      </div>
      <div class="tense-body" style="display:block">
        <table class="form-table">
          <tr><th>Pregunta que te haces</th><th>Tiempo verbal</th><th>Ejemplo</th></tr>
          ${QUICK_GUIDE.map(g=>`<tr><td>${g[0]}</td><td><b>${g[1]}</b></td><td>${g[2]}</td></tr>`).join("")}
        </table>
      </div>
    </div>` : "";

  host.innerHTML = guide + THEORY.map((t,i)=>`
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
        ${t.spell ? `<h4>📖 Ortografía del presente simple: ¿-s, -es o -ies?</h4>
        <table class="form-table">
          <tr><th>Regla</th><th>Ejemplos</th></tr>
          ${t.spell.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join("")}
        </table>` : ""}
        ${t.stative ? `<h4>🚫 Verbos que NUNCA van en continuo (stative verbs)</h4>
        <table class="form-table">
          <tr><th>Grupo</th><th>Verbos</th><th>Ejemplo correcto</th></tr>
          ${t.stative.map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join("")}
        </table>` : ""}
        <h4>🔑 Palabras que identifican este tiempo</h4>
        ${t.markers ? `<table class="form-table">
          <tr><th>Palabra / expresión</th><th>Significado</th><th>Ejemplo</th></tr>
          ${t.markers.map(m=>`<tr><td>${m[0]}</td><td>${m[1]}</td><td>${m[2]}</td></tr>`).join("")}
        </table>` : ""}
        ${t.tip ? `<div class="error-box" style="background:#e6f7ef;border-color:#b2e7cd;color:#0f5132">💡 <b>Truco:</b> ${t.tip}</div>` : ""}
        <h4>Ejemplos</h4>
        ${t.ex.map(e=>`<div class="ex"><div class="en">${e[0]} <button class="btn ghost" style="padding:2px 8px;font-size:12px;margin-left:6px" data-say="${e[0].replace(/"/g,"")}">🔊</button></div><div class="es">${e[1]}</div></div>`).join("")}
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
      feedback.innerHTML = `<div class="title">✅ ¡Texto completo, Adriana! ${praise()}<span class="points-pill">+${pts} puntos</span></div>
        <div class="why">Pulsa <b>🔊 Listening</b> para oír el texto entero en inglés y comprobar la entonación.</div>`;
    }else{
      feedback.innerHTML = `<div class="title">❌ ${wrongs.length} de ${inputs.length} huecos fallan. ${consolation()}</div>` +
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
let textsLevel = "all";
function renderTexts(){
  const list = ALL_TEXTS.filter(t=> textsLevel==="all" || t.lvl===textsLevel);
  const host = document.getElementById("textsList");
  const nBas = ALL_TEXTS.filter(t=>t.lvl==="basico").length;
  const nMed = ALL_TEXTS.filter(t=>t.lvl==="medio").length;
  const totalBlanks = list.reduce((n,t)=> n + t.segments.filter(s=>typeof s!=="string").length, 0);
  host.innerHTML = `<div class="ex-top" style="margin-bottom:12px">
      <span class="badge">${list.length} textos</span>
      <span class="badge">${totalBlanks} huecos</span>
      <span class="badge">${nBas} básicos · ${nMed} medios</span>
    </div>` + list.map(textCard).join("");
  host.querySelectorAll(".text-card").forEach(card=>{
    bindText(card, ALL_TEXTS.find(t=>t.id===card.dataset.text));
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

  /* Saludo de bienvenida para Adriana */
  setTimeout(()=>{
    toast(state.points > 0
      ? `¡Bienvenida de nuevo, ${STUDENT}! Llevas ${state.points} puntos ⭐`
      : `¡Bienvenida, ${STUDENT}! 🌟 Vamos a empezar fuerte 💪`);
  }, 500);

  /* Cartel de ánimo: rotación de mensajes */
  let cheerIdx = 0;
  const cheerEl = document.getElementById("cheerText");
  if(cheerEl){
    setInterval(()=>{
      cheerIdx = (cheerIdx + 1) % CHEERS.length;
      cheerEl.textContent = CHEERS[cheerIdx];
    }, 7000);
  }

  /* Diccionario fijo de la cabecera */
  const dictInput = document.getElementById("dictInput");
  if(dictInput){
    let dictTimer = null;
    dictInput.addEventListener("input", ()=>{
      clearTimeout(dictTimer);
      dictTimer = setTimeout(()=> doDict(dictInput.value), 450);
    });
    dictInput.addEventListener("keydown", e=>{
      if(e.key === "Enter"){ e.preventDefault(); clearTimeout(dictTimer); doDict(dictInput.value); }
      if(e.key === "Escape"){ const d = document.getElementById("dictDrop"); if(d) d.hidden = true; }
    });
  }
  document.addEventListener("click", e=>{
    const box = document.getElementById("dictBox");
    const drop = document.getElementById("dictDrop");
    if(box && drop && !box.contains(e.target)) drop.hidden = true;
  });
  initWordTips();
  initSelectionTip();

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
  document.querySelectorAll("#textsLevelChips .chip").forEach(c=>{
    c.addEventListener("click", ()=>{
      document.querySelectorAll("#textsLevelChips .chip").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      textsLevel = c.dataset.level;
      renderTexts();
    });
  });
  renderStats();
});
