const questions = [

/* ===== MCQ ===== */
{type:"mcq", q:"Which virus is the most common cause of viral croup?", options:[
"RSV","Parainfluenza virus","Adenovirus","Influenza A"
], a:1},

{type:"mcq", q:"Acute rhinosinusitis is likely bacterial if symptoms last longer than:", options:[
"3 days","5 days","7 days","10 days"
], a:3},

{type:"mcq", q:"Which organism causes Whooping Cough?", options:[
"S. pneumoniae","Bordetella pertussis","H. influenzae","Mycoplasma"
], a:1},

{type:"mcq", q:"GERD accounts for up to what percentage of chronic cough cases?", options:[
"10%","20%","40%","60%"
], a:2},

{type:"mcq", q:"What is the classic sound of a croup cough?", options:[
"Wheezing","Barking (seal-like)","Whooping","Silent"
], a:1},

{type:"mcq", q:"Bronchiolitis most commonly affects children under the age of:", options:[
"2 years","5 years","10 years","15 years"
], a:0},

{type:"mcq", q:"Which age group is most commonly affected by Mycoplasma pneumonia?", options:[
"Neonates","Infants","School-age (5–13 years)","Elderly"
], a:2},

{type:"mcq", q:"Recommended albuterol dose for a 6-year-old in acute asthma attack:", options:[
"1.25 mg","2.5 mg","5 mg","10 mg"
], a:2},

{type:"mcq", q:"Which is a sign of increased work of breathing?", options:[
"Fever","Sternal retractions","Cough","Pale skin"
], a:1},

{type:"mcq", q:"Aspiration syndrome occurs when which structure fails to close?", options:[
"Esophagus","Pharynx","Glottis","Tongue"
], a:2},

{type:"mcq", q:"Empyema is characterized by:", options:[
"Air in chest","Pus in pleural cavity","Blood in lungs","Lung scarring"
], a:1},

{type:"mcq", q:"Which is a risk factor for asthma?", options:[
"Low altitude","Exposure to tobacco smoke","Excess water intake","Rural living"
], a:1},

{type:"mcq", q:"How often can albuterol be re-dosed initially in emergency care?", options:[
"Every 5 minutes","Every 20 minutes","Every 2 hours","Once daily"
], a:1},

{type:"mcq", q:"Which medication is co-administered with albuterol in severe asthma?", options:[
"Ipratropium","Paracetamol","Ibuprofen","Amoxicillin"
], a:0},

{type:"mcq", q:"Target oxygen saturation for a child with asthma is:", options:[
"80%","85%","Above 90–92%","Exactly 100%"
], a:2},

{type:"mcq", q:"Neonates are at risk of pneumonia from which birth canal bacteria?", options:[
"Group B streptococci","Mycoplasma","S. aureus","Rhinovirus"
], a:0},

{type:"mcq", q:"Which diagnostic tool uses a flexible tube to see bronchi?", options:[
"X-ray","MRI","Bronchoscopy","CT scan"
], a:2},

{type:"mcq", q:"Pulmonary embolism most commonly originates from:", options:[
"Brain","Deep vein thrombosis","Stomach","Skin"
], a:1},

{type:"mcq", q:"Which is an atypical pneumonia pathogen?", options:[
"S. pneumoniae","Mycoplasma pneumoniae","H. influenzae","Group B strep"
], a:1},

{type:"mcq", q:"What helps minimize croup symptoms at home?", options:[
"Dry hot air","Humidified air","Exercise","Heavy blankets"
], a:1},

/* ===== TRUE / FALSE ===== */
{type:"tf", q:"Agitation improves stridor in croup.", a:false},
{type:"tf", q:"Bronchial asthma is a chronic inflammatory condition.", a:true},
{type:"tf", q:"Oral and IV steroids have equivalent potency in acute asthma.", a:true},
{type:"tf", q:"Sputum culture is material coughed up from lungs.", a:true},
{type:"tf", q:"Infants under 12 months should use pillows to breathe better.", a:false},
{type:"tf", q:"Post-nasal drip from allergic rhinitis can cause cough.", a:true},
{type:"tf", q:"Pneumonia is a leading cause of death in children under 5.", a:true},
{type:"tf", q:"Lobar pneumonia affects both lungs entirely.", a:false},
{type:"tf", q:"Anti-leukotrienes are usually inhaled.", a:false},
{type:"tf", q:"Croup symptoms last 3–7 days.", a:true},
{type:"tf", q:"Cyanosis is a sign of mild respiratory distress.", a:false},
{type:"tf", q:"Tachycardia can compensate for hypoxia.", a:true},
{type:"tf", q:"Bacterial croup can include laryngeal diphtheria.", a:true},
{type:"tf", q:"Inhaled steroids are for quick relief in asthma.", a:false},
{type:"tf", q:"Monitoring intake/output is important in pneumonia care.", a:true},
{type:"tf", q:"Aspiration pneumonia occurs only in elderly.", a:false},
{type:"tf", q:"Albuterol is a bronchodilator.", a:true},
{type:"tf", q:"Whooping sound occurs during inspiration in pertussis.", a:true},
{type:"tf", q:"Most bronchiolitis cases are bacterial.", a:false},
{type:"tf", q:"Respiratory failure may require ventilator support.", a:true},
/* ===== CRITICAL THINKING (10 MCQ) ===== */

{
  type:"mcq",
  q:"Why is calming a child with croup the nurse’s first priority?",
  options:[
    "To reduce fever",
    "To prevent worsening airway obstruction",
    "To increase oxygen demand",
    "To stop vomiting"
  ],
  a:1
},
{
  type:"mcq",
  q:"Why is prematurity a major risk factor for severe bronchiolitis?",
  options:[
    "Weak heart muscles",
    "Underdeveloped lungs and immunity",
    "Poor feeding habits",
    "High blood pressure"
  ],
  a:1
},
{
  type:"mcq",
  q:"An asthma patient declines between albuterol doses. What should be anticipated?",
  options:[
    "Stop treatment",
    "Give antibiotics",
    "More frequent or continuous nebulization",
    "Discharge home"
  ],
  a:2
},
{
  type:"mcq",
  q:"Why is nasal flaring a sign of respiratory distress in infants?",
  options:[
    "Indicates fever",
    "Helps reduce airway resistance",
    "Shows dehydration",
    "Indicates infection"
  ],
  a:1
},
{
  type:"mcq",
  q:"How does GERD cause chronic cough?",
  options:[
    "Bacterial infection",
    "Acid irritation of airway receptors",
    "Fluid overload",
    "Allergic response"
  ],
  a:1
},
{
  type:"mcq",
  q:"Why might oral steroids be preferred over IV in asthma?",
  options:[
    "Faster action",
    "More potent",
    "Equally effective and less invasive",
    "Cheaper only"
  ],
  a:2
},
{
  type:"mcq",
  q:"Why should adolescent immigrants with chronic cough be screened for TB?",
  options:[
    "TB is genetic",
    "High prevalence in some regions",
    "TB resolves on its own",
    "Only affects adults"
  ],
  a:1
},
{
  type:"mcq",
  q:"Why does diminished breath sounds on one side require close monitoring?",
  options:[
    "Normal finding",
    "Indicates poor air entry or effusion",
    "Shows dehydration",
    "Indicates fever"
  ],
  a:1
},
{
  type:"mcq",
  q:"How does non-invasive ventilation help respiratory muscle fatigue?",
  options:[
    "Stops breathing",
    "Reduces work of breathing",
    "Increases secretions",
    "Causes lung collapse"
  ],
  a:1
},
{
  type:"mcq",
  q:"How does a DVT lead to pulmonary embolism?",
  options:[
    "Local infection spreads",
    "Clot travels to pulmonary arteries",
    "Lung tissue ruptures",
    "Heart failure only"
  ],
  a:1
}
];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score = 0;
  questions.forEach((q,i)=>{
    if(answers[i] === q.a) score++;
  });

  let percent = Math.round((score / questions.length) * 100);

  document.getElementById("resultScore").innerText =
    `Score: ${score} / ${questions.length}`;

  document.getElementById("resultPercent").innerText =
    `Percentage: ${percent}%`;

  let message = "";

if(percent >= 85){
  message = " اول دفعه يعععمممم  "  ;
}
else if(percent >= 70){
  message = " شد شويه يعم";
}
else{
  message = " انت اخرك تخش كليه البهايممممم  ";
}

document.getElementById("resultTitle").innerText = message;

  // إظهار شاشة النتيجة
  document.getElementById("result").classList.add("show");

  // كونفيتي لو أكتر من 70%
  if(percent >= 70){
    fireConfetti();
  }
}
function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
function fireConfetti(){
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}
function confettiEffect(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.opacity="0.8";
    c.style.borderRadius="50%";
    c.style.animation=`fall ${2+Math.random()*3}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}
function reviewFromResult(){
  const result = document.getElementById("result");

  // اقفل شاشة النتيجة
  result.classList.remove("show");

  // رجّع الكويز
  document.getElementById("quiz").style.display = "block";

  // افتح قائمة الأسئلة
  toggleQuestions();
}"Fever","Sternal retractions","Cough","Pale skin"
], a:1},

{type:"mcq", q:"Aspiration syndrome occurs when which structure fails to close?", options:[
"Esophagus","Pharynx","Glottis","Tongue"
], a:2},

{type:"mcq", q:"Empyema is characterized by:", options:[
"Air in chest","Pus in pleural cavity","Blood in lungs","Lung scarring"
], a:1},

{type:"mcq", q:"Which is a risk factor for asthma?", options:[
"Low altitude","Exposure to tobacco smoke","Excess water intake","Rural living"
], a:1},

{type:"mcq", q:"How often can albuterol be re-dosed initially in emergency care?", options:[
"Every 5 minutes","Every 20 minutes","Every 2 hours","Once daily"
], a:1},

{type:"mcq", q:"Which medication is co-administered with albuterol in severe asthma?", options:[
"Ipratropium","Paracetamol","Ibuprofen","Amoxicillin"
], a:0},

{type:"mcq", q:"Target oxygen saturation for a child with asthma is:", options:[
"80%","85%","Above 90–92%","Exactly 100%"
], a:2},

{type:"mcq", q:"Neonates are at risk of pneumonia from which birth canal bacteria?", options:[
"Group B streptococci","Mycoplasma","S. aureus","Rhinovirus"
], a:0},

{type:"mcq", q:"Which diagnostic tool uses a flexible tube to see bronchi?", options:[
"X-ray","MRI","Bronchoscopy","CT scan"
], a:2},

{type:"mcq", q:"Pulmonary embolism most commonly originates from:", options:[
"Brain","Deep vein thrombosis","Stomach","Skin"
], a:1},

{type:"mcq", q:"Which is an atypical pneumonia pathogen?", options:[
"S. pneumoniae","Mycoplasma pneumoniae","H. influenzae","Group B strep"
], a:1},

{type:"mcq", q:"What helps minimize croup symptoms at home?", options:[
"Dry hot air","Humidified air","Exercise","Heavy blankets"
], a:1},

/* ===== TRUE / FALSE ===== */
{type:"tf", q:"Agitation improves stridor in croup.", a:false},
{type:"tf", q:"Bronchial asthma is a chronic inflammatory condition.", a:true},
{type:"tf", q:"Oral and IV steroids have equivalent potency in acute asthma.", a:true},
{type:"tf", q:"Sputum culture is material coughed up from lungs.", a:true},
{type:"tf", q:"Infants under 12 months should use pillows to breathe better.", a:false},
{type:"tf", q:"Post-nasal drip from allergic rhinitis can cause cough.", a:true},
{type:"tf", q:"Pneumonia is a leading cause of death in children under 5.", a:true},
{type:"tf", q:"Lobar pneumonia affects both lungs entirely.", a:false},
{type:"tf", q:"Anti-leukotrienes are usually inhaled.", a:false},
{type:"tf", q:"Croup symptoms last 3–7 days.", a:true},
{type:"tf", q:"Cyanosis is a sign of mild respiratory distress.", a:false},
{type:"tf", q:"Tachycardia can compensate for hypoxia.", a:true},
{type:"tf", q:"Bacterial croup can include laryngeal diphtheria.", a:true},
{type:"tf", q:"Inhaled steroids are for quick relief in asthma.", a:false},
{type:"tf", q:"Monitoring intake/output is important in pneumonia care.", a:true},
{type:"tf", q:"Aspiration pneumonia occurs only in elderly.", a:false},
{type:"tf", q:"Albuterol is a bronchodilator.", a:true},
{type:"tf", q:"Whooping sound occurs during inspiration in pertussis.", a:true},
{type:"tf", q:"Most bronchiolitis cases are bacterial.", a:false},
{type:"tf", q:"Respiratory failure may require ventilator support.", a:true},

];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score = 0;
  questions.forEach((q,i)=>{
    if(answers[i] === q.a) score++;
  });

  let percent = Math.round((score / questions.length) * 100);

  document.getElementById("resultScore").innerText =
    `Score: ${score} / ${questions.length}`;

  document.getElementById("resultPercent").innerText =
    `Percentage: ${percent}%`;

  let message = "";

if(percent >= 85){
  message = " اول دفعه يعععمممم  "  ;
}
else if(percent >= 70){
  message = " شد شويه يعم";
}
else{
  message = " انت اخرك تخش كليه البهايممممم  ";
}

document.getElementById("resultTitle").innerText = message;

  // إظهار شاشة النتيجة
  document.getElementById("result").classList.add("show");

  // كونفيتي لو أكتر من 70%
  if(percent >= 70){
    fireConfetti();
  }
}
function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
function fireConfetti(){
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}
function confettiEffect(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.opacity="0.8";
    c.style.borderRadius="50%";
    c.style.animation=`fall ${2+Math.random()*3}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}
function reviewFromResult(){
  const result = document.getElementById("result");

  // اقفل شاشة النتيجة
  result.classList.remove("show");

  // رجّع الكويز
  document.getElementById("quiz").style.display = "block";

  // افتح قائمة الأسئلة
  toggleQuestions();
}
