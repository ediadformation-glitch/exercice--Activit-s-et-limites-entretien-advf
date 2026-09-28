"use strict";

const STORAGE_KEY = "advf-activites-limites-v1";
const memoryStorage = new Map();

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return memoryStorage.get(key) || null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    memoryStorage.set(key, value);
  }
}

function storageRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    memoryStorage.delete(key);
  }
}

const intro = {
  title: "🧩 Partie 1 : Introduction",
  mailLabel: "📩Vous recevez ce mail : ",
  mail: `En tant que professionnel-le expérimenté-e de notre structure d'aide à domicile, votre expertise est le socle de la qualité de nos services. 
Aujourd'hui, nous accueillons Alex, un nouveau collègue qui débute dans le métier. Je vous confie une mission essentielle : transmettre votre savoir-faire pour qu'Alex adopte dès le départ les bons réflexes professionnels. 
À travers ce questionnaire, vous allez préparer les conseils et les mises en garde que vous lui donnerez pour garantir une intervention efficace, sécurisée et respectueuse chez nos clients.
Merci pour votre engagement !`,
  instruction: "🔎 Pour chaque situation qui suit, proposez votre réponse et justifiez-la en expliquant le raisonnement professionnel qui vous guide.",
  timing: "⏳ Vous pouvez travailler seul ou en petit groupe. vous disposez de 30 minutes"
};

const sections = [
  {
    number: "1",
    nav: "Posture professionnelle",
    title: "1️⃣ La posture professionnelle :",
    situation: "Alex arrive chez une cliente qui a des habitudes de rangement très précises, mais il pense qu’une autre organisation serait plus efficace.",
    questions: [
      "Question : Que lui conseillez-vous concernant l'organisation du logement ?",
      "Doit-il imposer sa méthode ou suivre celle de la cliente ? Justifiez votre choix :"
    ]
  },
  {
    number: "2",
    nav: "Organisation et hygiène",
    title: "2️⃣ Organisation et hygiène :",
    situation: "Alex s'apprête à commencer sa journée, mais il a oublié ses gants et pense que se laver les mains de temps en temps suffit pour gagner du temps.",
    questions: [
      "Question : Selon vous, quels sont les deux réflexes d'hygiène prioritaires qu'il doit absolument respecter pour sa sécurité et celle du client ?",
      "Pourquoi est-ce non négociable ?",
      "Citez les risques :"
    ]
  },
  {
    number: "3",
    nav: "Pièces de vie",
    title: "3️⃣ Entretien des pièces de vie :",
    situation: "Alex doit s'occuper du salon et de la chambre d'un client. Il se demande si faire le lit et dépoussiérer les bibelots est vraiment sa priorité.",
    questions: [
      "Question : Quelles sont, selon votre expérience, les tâches essentielles qu'il doit réaliser dans ces pièces pour garantir un environnement \"confortable\" ?",
      "Dans quel ordre ? Justifiez votre réponse :",
      "Quels impacts cela aura t-il pour le client ?"
    ]
  },
  {
    number: "4",
    nav: "Cuisine / Sanitaires",
    title: "4️⃣ Entretien des zones à risques (Cuisine / Sanitaires) :",
    situation: "Alex termine le nettoyage de la cuisine. Il voit des produits entamés dans le réfrigérateur mais ne sait pas s'il doit y toucher.",
    questions: [
      "Question : Pourquoi est-il indispensable qu'Alex vérifie le contenu du réfrigérateur dans le cadre du \"bionettoyage\" ? Expliquez le risque encouru :"
    ]
  },
  {
    number: "5",
    nav: "Entretien du linge",
    title: "5️⃣ Entretien du linge :",
    situation: "Alex trouve un panier de linge varié. Il veut tout mettre à 60°C pour être sûr que ce soit bien propre.",
    questions: [
      "Question : Quel conseil lui donnez-vous avant qu'il ne lance la machine ?",
      "Sur quels éléments doit-il s'appuyer pour ne pas commettre d'erreur ? Justifiez l'importance de cette vérification."
    ]
  },
  {
    number: "6",
    nav: "Petits services",
    title: "6️⃣ Les petits services du quotidien :",
    situation: "Une cliente âgée demande à Alex, en plus de son ménage, d'arroser ses plantes d'intérieur et de donner des croquettes au chat.",
    questions: [
      "Question : Alex peut-il accepter ces tâches ?",
      "Est-ce que cela fait partie de ses missions ou doit-il refuser ?",
      "Justifiez votre réponse par rapport à la notion de \"faciliter le quotidien\"."
    ]
  },
  {
    number: "7",
    nav: "Limites physiques",
    title: "7️⃣ Les limites physiques (Sécurité) :",
    situation: "Le fils d’un client hospitalisé demande à Alex d’en profiter pour déplacer une lourde armoire normande pour pouvoir nettoyer la poussière accumulée derrière depuis des années.",
    questions: [
      "Question : Que doit répondre Alex à cette demande ?",
      "Quelles sont les règles de sécurité concernant le poids et le mobilier qu'il doit impérativement respecter ?",
      "Argumentez sur les risques pour sa santé."
    ]
  },
  {
    number: "8",
    nav: "Produits et technique",
    title: "8️⃣ Les limites techniques et produits :",
    situation: "Pour venir à bout d'une tache tenace sur un sol en pierre, Alex envisage d'utiliser de l'ammoniaque qu'il a trouvé dans le garage du client.",
    questions: [
      "Question : Quelle doit être votre réaction face à son projet ?",
      "Quels types de produits Alex est-il autorisé (ou non) à utiliser au domicile ? Expliquez pourquoi."
    ]
  },
  {
    number: "9",
    nav: "Gros travaux",
    title: "9️⃣ Les gros travaux / Rénovation :",
    situation: "Un client qui n’a pas beaucoup de moyens  propose à Alex de passer la matinée à décoller du papier peint dans le couloir plutôt que de faire le ménage habituel. Cela lui évitera de payer un professionnel.",
    questions: [
      "Question : Alex peut-il accepter ce changement de programme ?",
      "Quelle est la limite entre \"entretien courant\" et \"rénovation\" ? Justifiez votre position."
    ]
  },
  {
    number: "10",
    nav: "Animaux et véhicules",
    title: "🔟 Les limites liées aux animaux et aux véhicules :",
    situation: "Le client qui habite une petite ferme demande à Alex de profiter du beau temps pour laver sa voiture à l'extérieur et passer l'aspirateur sur les sièges.\nIl voudrait aussi que vous essayiez d’attraper ses 2 brebis pour les mettre dans leur cabane afin que le vétérinaire puisse les voir.",
    questions: [
      "Question : Que conseillez-vous à Alex de répondre ?",
      "Ces tâches font-elles partie de ses compétences d'ADVF ? Expliquez pourquoi en vous basant sur votre logique métier."
    ]
  },
  {
    number: "A",
    nav: "Auto-évaluation",
    title: "📩 Vous venez de recevoir ce mail : ",
    situation: "Bravo pour votre implication !\n\nPrenez maintenant un moment pour réaliser votre auto-évaluation. L’objectif est de porter un regard lucide et constructif sur votre travail.",
    questions: [
      "Selon vous, avez-vous identifié toutes les bonnes réponses ?",
      "Quelles actions concrètes pourraient vous permettre d’améliorer cette note ?",
      "Qu’attendez-vous du cours qui va suivre pour progresser davantage ?"
    ],
    rating: "Sur une échelle de 0 à 10, comment évaluez-vous votre satisfaction vis-à-vis de votre travail ?\n 0 : vous n’êtes pas du tout satisfait de votre production\n10 : vous êtes pleinement satisfait de votre travail.",
    beforeReflection: "Prenez ensuite un instant de recul :",
    closing: "Merci 🙂préparez-vous à partager vos réponses avec le groupe lors de la classe virtuelle. Nous comparerons vos propositions avec les règles officielles du métier pour valider votre \"guide de survie\" destiné à Alex !"
  }
];

const corrections = [
  {
    answer: "Alex respecte l’organisation de la cliente. Il peut proposer une amélioration, mais il ne change rien sans son accord.",
    essentials: [
      "Prendre connaissance des consignes et des habitudes.",
      "Demander l’accord avant toute modification.",
      "Respecter le domicile privé et la discrétion professionnelle."
    ],
    remember: "Chez la personne, je m’adapte : je n’impose pas."
  },
  {
    answer: "Alex doit pratiquer l’hygiène des mains aux moments nécessaires et porter les gants ou EPI adaptés à la tâche.",
    essentials: [
      "Les gants ne remplacent jamais l’hygiène des mains.",
      "Sans protection adaptée, il signale le problème et évite la tâche exposante.",
      "Les risques sont la contamination, l’irritation, la brûlure chimique et l’infection."
    ],
    remember: "Mains propres + protection adaptée = sécurité pour tous."
  },
  {
    answer: "Il aère et range, fait le lit, dépoussière les meubles et surfaces accessibles, puis aspire et lave les sols.",
    essentials: [
      "Travailler du haut vers le bas et du propre vers le sale.",
      "Terminer par les sols, puis contrôler et ranger le matériel.",
      "Le résultat améliore la propreté, le confort, le bien-être et la sécurité du client."
    ],
    remember: "Du haut vers le bas ; les sols en dernier."
  },
  {
    answer: "Alex nettoie le réfrigérateur et vérifie les dates ainsi que l’état des aliments. Il signale tout produit douteux ou périmé et demande l’accord avant de le jeter.",
    essentials: [
      "Retirer les salissures et limiter les contaminations.",
      "Repérer les aliments qui peuvent présenter un risque.",
      "Prévenir les intoxications alimentaires."
    ],
    remember: "Je nettoie, je vérifie, je signale."
  },
  {
    answer: "Avant de lancer la machine, Alex trie le linge et lit les étiquettes d’entretien.",
    essentials: [
      "Vérifier la matière, la couleur, la température et le programme.",
      "Utiliser le produit et le dosage adaptés.",
      "Respecter les consignes et les habitudes de rangement du client."
    ],
    remember: "Étiquette d’abord, machine ensuite."
  },
  {
    answer: "Oui, il peut arroser les plantes et nourrir un animal de compagnie si ces tâches sont prévues ou acceptées dans l’intervention.",
    essentials: [
      "Ces petits services facilitent le quotidien.",
      "Respecter les consignes, le temps prévu et les limites de la mission.",
      "Pas de soin vétérinaire, de toilettage ni d’animal de ferme."
    ],
    remember: "J’aide au quotidien sans remplacer un professionnel spécialisé."
  },
  {
    answer: "Alex refuse de déplacer l’armoire. Le mobilier lourd et les charges de plus de 10 kg ne doivent pas être portés ou déplacés.",
    essentials: [
      "Proposer uniquement un nettoyage accessible et sans danger.",
      "Informer le client et, si nécessaire, la structure.",
      "Les risques sont les TMS, la chute, l’écrasement et la blessure."
    ],
    remember: "Si c’est lourd ou dangereux : STOP."
  },
  {
    answer: "Alex n’utilise pas l’ammoniaque. Il emploie seulement des produits ménagers courants, étiquetés et adaptés à la surface.",
    essentials: [
      "Lire le mode d’emploi et respecter le dosage.",
      "Ne jamais mélanger les produits.",
      "Éviter les brûlures, les vapeurs toxiques et la détérioration du support."
    ],
    remember: "Produit connu, étiquette lue, aucun mélange."
  },
  {
    answer: "Alex refuse de décoller le papier peint : c’est un travail de rénovation, pas de l’entretien courant.",
    essentials: [
      "Rester dans les tâches prévues par la prestation.",
      "Ne pas peindre, tapisser, détapisser, décaper ou réaliser de gros nettoyage.",
      "Expliquer la limite et prévenir la structure en cas de désaccord."
    ],
    remember: "J’entretiens ; je ne rénove pas."
  },
  {
    answer: "Alex refuse le nettoyage de la voiture et la prise en charge des brebis : ces tâches ne relèvent pas des missions de l’ADVF.",
    essentials: [
      "Pas de lavage extérieur ni d’aspirateur dans un véhicule.",
      "Pas de gestion des animaux de ferme ou de basse-cour.",
      "Ces activités exposent à des blessures, à la fuite de l’animal et à des problèmes de responsabilité."
    ],
    remember: "Ni véhicule, ni animal de ferme."
  }
];

const questionEntries = sections.flatMap((section, sectionIndex) =>
  section.questions.map((question, questionIndex) => ({
    id: `s${sectionIndex + 1}-q${questionIndex + 1}`,
    sectionIndex,
    questionIndex,
    question
  }))
);

const ratingId = "self-rating";
const totalRequired = questionEntries.length + 1;

const emptyState = () => ({
  learner: { firstName: "", lastName: "", group: "" },
  answers: {},
  rating: "",
  currentSection: 0,
  currentCorrection: 0,
  view: "exercise",
  started: false
});

let state = loadState();
let missingHighlights = new Set();
let saveTimer;

const elements = {
  welcome: document.querySelector("#welcome-view"),
  exercise: document.querySelector("#exercise-view"),
  copy: document.querySelector("#copy-view"),
  correction: document.querySelector("#correction-view"),
  identityForm: document.querySelector("#identity-form"),
  identityError: document.querySelector("#identity-error"),
  learnerLine: document.querySelector("#learner-line"),
  saveState: document.querySelector("#save-state"),
  workStatus: document.querySelector("#work-status"),
  remainingStatus: document.querySelector("#remaining-status"),
  progressTrack: document.querySelector(".progress-track"),
  progressBar: document.querySelector("#progress-bar"),
  progressCount: document.querySelector("#progress-count"),
  nav: document.querySelector("#section-nav"),
  content: document.querySelector("#exercise-content"),
  previous: document.querySelector("#previous-button"),
  next: document.querySelector("#next-button"),
  check: document.querySelector("#check-button"),
  completion: document.querySelector("#completion-actions"),
  finish: document.querySelector("#finish-button"),
  reset: document.querySelector("#reset-button"),
  copyPreview: document.querySelector("#copy-preview"),
  printCopy: document.querySelector("#print-copy"),
  backToWork: document.querySelector("#back-to-work-button"),
  checkDialog: document.querySelector("#check-dialog"),
  checkDialogTitle: document.querySelector("#check-dialog-title"),
  checkDialogMessage: document.querySelector("#check-dialog-message"),
  goToMissing: document.querySelector("#go-to-missing-button"),
  emailDialog: document.querySelector("#email-dialog"),
  emailForm: document.querySelector("#email-form"),
  emailSubmit: document.querySelector("#email-form button[type=\"submit\"]"),
  trainerEmail: document.querySelector("#trainer-email"),
  emailError: document.querySelector("#email-error"),
  printDialog: document.querySelector("#print-dialog"),
  recommendedFilename: document.querySelector("#recommended-filename"),
  openPrint: document.querySelector("#open-print-button"),
  correctionProgress: document.querySelector("#correction-progress"),
  correctionNav: document.querySelector("#correction-nav"),
  correctionContent: document.querySelector("#correction-content"),
  correctionPrevious: document.querySelector("#correction-previous"),
  correctionNext: document.querySelector("#correction-next"),
  correctionCopy: document.querySelector("#correction-copy-button")
};

function loadState() {
  try {
    const parsed = JSON.parse(storageGet(STORAGE_KEY));
    return { ...emptyState(), ...parsed, learner: { ...emptyState().learner, ...(parsed?.learner || {}) }, answers: parsed?.answers || {} };
  } catch {
    return emptyState();
  }
}

function persist(showIndicator = true) {
  storageSet(STORAGE_KEY, JSON.stringify(state));
  if (!showIndicator) return;
  window.clearTimeout(saveTimer);
  elements.saveState.classList.add("is-visible");
  saveTimer = window.setTimeout(() => elements.saveState.classList.remove("is-visible"), 1400);
}

function normalize(value) {
  return String(value ?? "").trim();
}

function answerFor(id) {
  return state.answers[id] || "";
}

function isQuestionComplete(id) {
  return normalize(answerFor(id)).length > 0;
}

function missingItems() {
  const missing = questionEntries.filter((entry) => !isQuestionComplete(entry.id));
  if (state.rating === "" || state.rating === null || state.rating === undefined) {
    missing.push({ id: ratingId, sectionIndex: sections.length - 1, questionIndex: -1 });
  }
  return missing;
}

function completionStats() {
  const missing = missingItems();
  return { missing, completed: totalRequired - missing.length, total: totalRequired };
}

function sectionComplete(sectionIndex) {
  const questionsComplete = questionEntries
    .filter((entry) => entry.sectionIndex === sectionIndex)
    .every((entry) => isQuestionComplete(entry.id));
  if (sectionIndex === sections.length - 1) return questionsComplete && state.rating !== "";
  return questionsComplete;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderWelcomeValues() {
  elements.identityForm.elements.firstName.value = state.learner.firstName;
  elements.identityForm.elements.lastName.value = state.learner.lastName;
  elements.identityForm.elements.group.value = state.learner.group;
}

function renderNav() {
  elements.nav.innerHTML = sections.map((section, index) => {
    const complete = sectionComplete(index);
    const active = index === state.currentSection;
    return `
      <button class="nav-button${active ? " is-active" : ""}" type="button" data-section="${index}" ${active ? 'aria-current="step"' : ""}>
        <span class="nav-index">${escapeHtml(section.number)}</span>
        <span class="nav-label">${escapeHtml(section.nav)}</span>
        <span class="nav-state" aria-label="${complete ? "Partie terminée" : "Partie à compléter"}">${complete ? "✓" : "○"}</span>
      </button>`;
  }).join("");
}

function introMarkup() {
  return `
    <article class="intro-card">
      <h2>${escapeHtml(intro.title)}</h2>
      <p class="mail-label">${escapeHtml(intro.mailLabel)}</p>
      <p class="mail-body">${escapeHtml(intro.mail)}</p>
      <p class="instruction">${escapeHtml(intro.instruction)}</p>
      <p class="instruction">${escapeHtml(intro.timing)}</p>
    </article>`;
}

function questionMarkup(sectionIndex, question, questionIndex) {
  const id = `s${sectionIndex + 1}-q${questionIndex + 1}`;
  const missingClass = missingHighlights.has(id) ? " is-missing" : "";
  return `
    <div class="question-block${missingClass}" data-question-block="${id}">
      <label class="question-label" for="${id}">${escapeHtml(question)}</label>
      <textarea id="${id}" data-answer-id="${id}" rows="5" aria-required="true">${escapeHtml(answerFor(id))}</textarea>
    </div>`;
}

function ratingMarkup(section) {
  const buttons = Array.from({ length: 11 }, (_, value) => `
    <button class="rating-button${String(state.rating) === String(value) ? " is-selected" : ""}" type="button" data-rating="${value}" aria-pressed="${String(state.rating) === String(value)}">${value}</button>`).join("");
  const missingClass = missingHighlights.has(ratingId) ? " is-missing" : "";
  return `
    <div class="question-block${missingClass}" data-question-block="${ratingId}">
      <p class="rating-copy">${escapeHtml(section.rating)}</p>
      <div class="rating-scale" aria-label="Note de satisfaction de 0 à 10">${buttons}</div>
    </div>`;
}

function renderSection() {
  const section = sections[state.currentSection];
  const isSelfEvaluation = state.currentSection === sections.length - 1;
  let questionsHtml = "";

  if (isSelfEvaluation) {
    questionsHtml += questionMarkup(state.currentSection, section.questions[0], 0);
    questionsHtml += ratingMarkup(section);
    questionsHtml += `<p class="instruction">${escapeHtml(section.beforeReflection)}</p>`;
    questionsHtml += questionMarkup(state.currentSection, section.questions[1], 1);
    questionsHtml += questionMarkup(state.currentSection, section.questions[2], 2);
  } else {
    questionsHtml = section.questions.map((question, questionIndex) => questionMarkup(state.currentSection, question, questionIndex)).join("");
  }

  elements.content.innerHTML = `
    ${state.currentSection === 0 ? introMarkup() : ""}
    <article class="situation-card">
      <p class="part-kicker">${isSelfEvaluation ? "Auto-évaluation" : `Situation ${section.number}`}</p>
      <h2>${escapeHtml(section.title)}</h2>
      <p class="situation-text">${escapeHtml(section.situation)}</p>
      <div class="question-list">${questionsHtml}</div>
      ${isSelfEvaluation ? `<p class="closing-copy">${escapeHtml(section.closing)}</p>` : ""}
    </article>`;

  document.querySelectorAll("textarea[data-answer-id]").forEach((textarea) => autoResize(textarea));
  elements.previous.disabled = state.currentSection === 0;
  elements.previous.setAttribute("aria-disabled", String(state.currentSection === 0));
  elements.check.hidden = isSelfEvaluation;
  elements.next.textContent = state.currentSection === sections.length - 1 ? "Vérifier mon travail" : "Suivant →";
}

function renderProgress() {
  const { missing, completed, total } = completionStats();
  const complete = missing.length === 0;
  elements.workStatus.textContent = complete ? "✓ Travail complet" : "◔ Travail en cours";
  elements.workStatus.classList.toggle("is-complete", complete);
  elements.remainingStatus.textContent = complete ? "Toutes les réponses obligatoires sont complétées." : `Il reste ${missing.length} réponse(s) à compléter.`;
  elements.progressCount.textContent = `${completed} réponses complétées sur ${total}`;
  elements.progressBar.style.width = `${(completed / total) * 100}%`;
  elements.progressTrack.setAttribute("aria-valuemax", String(total));
  elements.progressTrack.setAttribute("aria-valuenow", String(completed));
  elements.completion.hidden = !complete;
}

function renderExercise() {
  elements.learnerLine.textContent = [state.learner.firstName, state.learner.lastName, state.learner.group].filter(Boolean).join(" · ");
  renderNav();
  renderSection();
  renderProgress();
}

function showExercise() {
  state.view = "exercise";
  persist(false);
  elements.welcome.hidden = true;
  elements.copy.hidden = true;
  elements.correction.hidden = true;
  elements.exercise.hidden = false;
  renderExercise();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWelcome() {
  elements.exercise.hidden = true;
  elements.copy.hidden = true;
  elements.correction.hidden = true;
  elements.welcome.hidden = false;
  renderWelcomeValues();
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${Math.max(144, textarea.scrollHeight)}px`;
}

function moveToSection(index, focusId = "") {
  state.currentSection = Math.max(0, Math.min(index, sections.length - 1));
  persist(false);
  renderExercise();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (focusId) {
    window.setTimeout(() => document.querySelector(`#${CSS.escape(focusId)}`)?.focus(), 280);
  }
}

function markAndFindMissing() {
  const missing = missingItems();
  missingHighlights = new Set(missing.map((item) => item.id));
  renderExercise();
  return missing;
}

function verifyWork() {
  const missing = markAndFindMissing();
  if (missing.length === 0) {
    elements.checkDialogTitle.textContent = "✓ Votre travail est complet";
    elements.checkDialogMessage.textContent = "Toutes les réponses obligatoires sont complétées.";
    elements.goToMissing.hidden = true;
  } else {
    elements.checkDialogTitle.textContent = "Votre travail n'est pas encore terminé.";
    elements.checkDialogMessage.textContent = `Il reste ${missing.length} réponse(s) à compléter.`;
    elements.goToMissing.hidden = false;
  }
  elements.checkDialog.showModal();
}

function formatDate() {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date());
}

function copyMarkup() {
  const sectionHtml = sections.map((section, sectionIndex) => {
    const answers = section.questions.map((question, questionIndex) => {
      const id = `s${sectionIndex + 1}-q${questionIndex + 1}`;
      let extra = "";
      if (sectionIndex === sections.length - 1 && questionIndex === 0) {
        extra = `
          <p class="copy-question">${escapeHtml(section.rating)}</p>
          <p class="copy-answer">${escapeHtml(state.rating)}</p>
          <p class="copy-question">${escapeHtml(section.beforeReflection)}</p>`;
      }
      return `
        <p class="copy-question">${escapeHtml(question)}</p>
        <p class="copy-answer">${escapeHtml(answerFor(id))}</p>${extra}`;
    }).join("");

    return `
      <section class="copy-part">
        <h2>${escapeHtml(section.title)}</h2>
        <p class="copy-situation">${escapeHtml(section.situation)}</p>
        ${answers}
        ${section.closing ? `<p class="closing-copy">${escapeHtml(section.closing)}</p>` : ""}
      </section>`;
  }).join("");

  return `
    <article class="copy-paper">
      <h1>⛔ Travaux CCP1 = Alex et limites de prestation (Entretien)</h1>
      <div class="copy-meta">
        <div><strong>Prénom :</strong> ${escapeHtml(state.learner.firstName)}</div>
        <div><strong>Nom :</strong> ${escapeHtml(state.learner.lastName)}</div>
        <div><strong>Groupe :</strong> ${escapeHtml(state.learner.group)}</div>
        <div><strong>Date :</strong> ${escapeHtml(formatDate())}</div>
      </div>
      <section class="copy-part">
        <h2>${escapeHtml(intro.title)}</h2>
        <p class="copy-question">${escapeHtml(intro.mailLabel)}</p>
        <p class="copy-situation">${escapeHtml(intro.mail)}</p>
        <p class="copy-question">${escapeHtml(intro.instruction)}</p>
        <p class="copy-question">${escapeHtml(intro.timing)}</p>
      </section>
      ${sectionHtml}
    </article>`;
}

function renderCopy() {
  const markup = copyMarkup();
  elements.copyPreview.innerHTML = markup;
  elements.printCopy.innerHTML = markup;
}

function showCopy() {
  if (missingItems().length > 0) {
    verifyWork();
    return;
  }
  state.view = "copy";
  persist(false);
  renderCopy();
  elements.exercise.hidden = true;
  elements.welcome.hidden = true;
  elements.correction.hidden = true;
  elements.copy.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCorrection() {
  const index = state.currentCorrection;
  const section = sections[index];
  const correction = corrections[index];
  elements.correctionProgress.textContent = `Situation ${index + 1} sur ${corrections.length}`;
  elements.correctionNav.innerHTML = corrections.map((_, navIndex) => `
    <button class="correction-nav-button${navIndex === index ? " is-active" : ""}" type="button" data-correction="${navIndex}" ${navIndex === index ? 'aria-current="step"' : ""}>
      ${navIndex + 1}
    </button>`).join("");

  const answers = section.questions.map((question, questionIndex) => {
    const id = `s${index + 1}-q${questionIndex + 1}`;
    return `
      <div class="correction-question">
        <p class="question-label">${escapeHtml(question)}</p>
        <div class="learner-answer">
          <span>Votre réponse</span>
          <p>${escapeHtml(answerFor(id))}</p>
        </div>
      </div>`;
  }).join("");

  elements.correctionContent.innerHTML = `
    <article class="correction-card">
      <p class="part-kicker">Situation ${index + 1}</p>
      <h2>${escapeHtml(section.title)}</h2>
      <p class="situation-text">${escapeHtml(section.situation)}</p>
      <div class="correction-answers">${answers}</div>
      <section class="essential-correction" aria-label="Correction essentielle">
        <p class="correction-label">Correction essentielle</p>
        <p class="correction-answer">${escapeHtml(correction.answer)}</p>
        <ul>${correction.essentials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <p class="memory-line"><strong>À retenir :</strong> ${escapeHtml(correction.remember)}</p>
      </section>
    </article>`;

  elements.correctionPrevious.disabled = index === 0;
  elements.correctionPrevious.setAttribute("aria-disabled", String(index === 0));
  elements.correctionNext.textContent = index === corrections.length - 1 ? "Revoir depuis le début ↺" : "Correction suivante →";
}

function showCorrection(index = state.currentCorrection) {
  state.currentCorrection = Math.max(0, Math.min(Number(index) || 0, corrections.length - 1));
  state.view = "correction";
  persist(false);
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
  elements.welcome.hidden = true;
  elements.exercise.hidden = true;
  elements.copy.hidden = true;
  elements.correction.hidden = false;
  renderCorrection();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function sanitizeFilenamePart(value) {
  return normalize(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "_").replace(/^_+|_+$/g, "") || "SansNom";
}

function learnerPdfFilename() {
  return `ADVF_${sanitizeFilenamePart(state.learner.lastName).toUpperCase()}_${sanitizeFilenamePart(state.learner.firstName)}_Activites_limites_prestations.pdf`;
}

function preparePrint() {
  renderCopy();
  elements.recommendedFilename.textContent = learnerPdfFilename();
  elements.printDialog.showModal();
}

function pdfSafeText(value) {
  return String(value ?? "")
    .replaceAll("œ", "oe")
    .replaceAll("Œ", "OE")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replaceAll("…", "...")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x0A\x20-\x7E]/g, "");
}

function wrapPdfText(text, maxCharacters = 86) {
  const lines = [];
  pdfSafeText(text).split("\n").forEach((paragraph) => {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    if (!words.length) {
      lines.push("");
      return;
    }
    let line = "";
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= maxCharacters) {
        line = candidate;
      } else {
        if (line) lines.push(line);
        line = word;
      }
    });
    if (line) lines.push(line);
  });
  return lines;
}

function escapePdfString(value) {
  return pdfSafeText(value).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function buildPdfFile() {
  const pages = [[]];
  let currentPage = pages[0];
  let y = 796;
  const marginBottom = 48;

  function newPage() {
    currentPage = [];
    pages.push(currentPage);
    y = 796;
  }

  function addText(text, options = {}) {
    const size = options.size || 10;
    const lineHeight = options.lineHeight || Math.ceil(size * 1.35);
    const gapAfter = options.gapAfter ?? 6;
    const maxCharacters = options.maxCharacters || (size >= 15 ? 58 : size >= 12 ? 70 : 88);
    wrapPdfText(text, maxCharacters).forEach((line) => {
      if (y < marginBottom + lineHeight) newPage();
      currentPage.push({
        text: line,
        y,
        size,
        bold: Boolean(options.bold),
        color: options.color || "0.09 0.18 0.21"
      });
      y -= lineHeight;
    });
    y -= gapAfter;
  }

  addText("Travail ADVF - Activites et limites des prestations", { bold: true, size: 18, lineHeight: 23, color: "0.06 0.31 0.36", gapAfter: 14 });
  addText(`Prenom : ${state.learner.firstName}    Nom : ${state.learner.lastName}    Groupe : ${state.learner.group || "-"}    Date : ${formatDate()}`, { bold: true, size: 10, gapAfter: 16 });

  sections.forEach((section, sectionIndex) => {
    const label = sectionIndex < 10 ? `Situation ${sectionIndex + 1} - ${section.nav}` : "Auto-evaluation";
    addText(label, { bold: true, size: 13, lineHeight: 17, color: "0.06 0.31 0.36", gapAfter: 5 });
    if (sectionIndex < 10) addText(section.situation, { size: 9, color: "0.28 0.34 0.36", gapAfter: 7 });
    section.questions.forEach((question, questionIndex) => {
      const id = `s${sectionIndex + 1}-q${questionIndex + 1}`;
      addText(question, { bold: true, size: 9, lineHeight: 12, gapAfter: 3 });
      addText(answerFor(id), { size: 10, lineHeight: 14, gapAfter: 7 });
      if (sectionIndex === sections.length - 1 && questionIndex === 0) {
        addText(`Note de satisfaction : ${state.rating}/10`, { bold: true, size: 10, gapAfter: 7 });
      }
    });
    y -= 8;
  });

  const pageObjectNumbers = pages.map((_, index) => 5 + index * 2);
  const objects = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(" ")}] /Count ${pages.length} >>`;
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  pages.forEach((lines, index) => {
    const pageNumber = pageObjectNumbers[index];
    const streamNumber = pageNumber + 1;
    const stream = lines.map((line) => `BT /F${line.bold ? 2 : 1} ${line.size} Tf ${line.color} rg 46 ${line.y} Td (${escapePdfString(line.text)}) Tj ET`).join("\n");
    objects[pageNumber] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${streamNumber} 0 R >>`;
    objects[streamNumber] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let index = 1; index < objects.length; index += 1) {
    offsets[index] = pdf.length;
    pdf += `${index} 0 obj\n${objects[index]}\nendobj\n`;
  }
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let index = 1; index < objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

function downloadPdfCopy() {
  const blob = new Blob([buildPdfFile()], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = learnerPdfFilename();
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 10000);
  return true;
}

function emailBody() {
  const heading = `Bonjour,\n\nVous trouverez ci-dessous mon travail concernant l'activité \"Activités et limites des prestations – Entretien chez un particulier\".\n\nPrénom : ${state.learner.firstName}\nNom : ${state.learner.lastName}\nGroupe : ${state.learner.group}\nDate : ${formatDate()}\n\n`;
  const ending = `\nCordialement,\n\n${state.learner.firstName} ${state.learner.lastName}`;
  const content = sections.map((section, sectionIndex) => {
    const sectionLabel = sectionIndex < 10
      ? `SITUATION ${sectionIndex + 1} — ${section.nav}`
      : "AUTO-ÉVALUATION";
    const answers = section.questions.map((question, questionIndex) => {
      const id = `s${sectionIndex + 1}-q${questionIndex + 1}`;
      const rating = sectionIndex === sections.length - 1 && questionIndex === 0
        ? `\n\nNote de satisfaction : ${state.rating}/10`
        : "";
      return `Réponse ${questionIndex + 1} :\n${answerFor(id)}${rating}`;
    }).join("\n\n");
    return `${sectionLabel}\n${answers}`;
  }).join("\n\n------------------------------\n\n");
  return `${heading}${content}${ending}`;
}

async function copyEmailBody(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    return copied;
  }
}

function openEmailDialog() {
  elements.trainerEmail.value = "";
  elements.emailError.hidden = true;
  elements.emailSubmit.disabled = false;
  elements.emailSubmit.textContent = "Enregistrer le PDF et ouvrir l’e-mail";
  elements.emailDialog.showModal();
}

elements.identityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(elements.identityForm);
  const firstName = normalize(form.get("firstName"));
  const lastName = normalize(form.get("lastName"));
  if (!firstName || !lastName) {
    elements.identityError.hidden = false;
    (!firstName ? elements.identityForm.elements.firstName : elements.identityForm.elements.lastName).focus();
    return;
  }
  elements.identityError.hidden = true;
  state.learner = { firstName, lastName, group: normalize(form.get("group")) };
  state.started = true;
  persist();
  showExercise();
});

elements.nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (button) moveToSection(Number(button.dataset.section));
});

elements.content.addEventListener("input", (event) => {
  const textarea = event.target.closest("textarea[data-answer-id]");
  if (!textarea) return;
  state.answers[textarea.dataset.answerId] = textarea.value;
  missingHighlights.delete(textarea.dataset.answerId);
  autoResize(textarea);
  persist();
  renderProgress();
  renderNav();
  textarea.closest(".question-block")?.classList.remove("is-missing");
});

elements.content.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) return;
  state.rating = button.dataset.rating;
  missingHighlights.delete(ratingId);
  persist();
  renderExercise();
  document.querySelector(`[data-rating="${state.rating}"]`)?.focus();
});

elements.previous.addEventListener("click", () => moveToSection(state.currentSection - 1));
elements.next.addEventListener("click", () => state.currentSection === sections.length - 1 ? verifyWork() : moveToSection(state.currentSection + 1));
elements.check.addEventListener("click", verifyWork);
elements.finish.addEventListener("click", openEmailDialog);
elements.backToWork.addEventListener("click", showExercise);
elements.correctionCopy.addEventListener("click", showCopy);

elements.correctionNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-correction]");
  if (button) showCorrection(Number(button.dataset.correction));
});

elements.correctionPrevious.addEventListener("click", () => showCorrection(state.currentCorrection - 1));
elements.correctionNext.addEventListener("click", () => {
  showCorrection(state.currentCorrection === corrections.length - 1 ? 0 : state.currentCorrection + 1);
});

elements.goToMissing.addEventListener("click", () => {
  const first = missingItems()[0];
  if (!first) return;
  elements.checkDialog.close();
  moveToSection(first.sectionIndex, first.id);
});

elements.reset.addEventListener("click", () => {
  const confirmed = window.confirm("Êtes-vous certain de vouloir supprimer toutes vos réponses ? Cette action est irréversible.");
  if (!confirmed) return;
  storageRemove(STORAGE_KEY);
  state = emptyState();
  missingHighlights.clear();
  showWelcome();
  elements.identityForm.elements.firstName.focus();
});

document.querySelectorAll(".email-button").forEach((button) => button.addEventListener("click", openEmailDialog));
document.querySelectorAll(".print-button").forEach((button) => button.addEventListener("click", preparePrint));

elements.emailForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = normalize(elements.trainerEmail.value);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  elements.emailError.hidden = valid;
  if (!valid) {
    elements.trainerEmail.focus();
    return;
  }

  const subject = `Travail ADVF – Activités et limites des prestations – ${state.learner.firstName} ${state.learner.lastName.toUpperCase()}`;
  const body = emailBody();
  elements.emailSubmit.disabled = true;
  elements.emailSubmit.textContent = "Préparation en cours…";
  try {
    await downloadPdfCopy();
    await new Promise((resolve) => window.setTimeout(resolve, 350));
  } catch (error) {
    console.error("La création automatique du PDF a échoué.", error);
  }
  await copyEmailBody(body);
  const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showCorrection(0);
  window.location.href = mailto;
});

elements.openPrint.addEventListener("click", () => {
  elements.printDialog.close();
  document.title = `ADVF_${sanitizeFilenamePart(state.learner.lastName).toUpperCase()}_${sanitizeFilenamePart(state.learner.firstName)}_Activites_limites_prestations`;
  window.print();
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

window.addEventListener("afterprint", () => {
  document.title = "Travaux CCP1 — Alex et limites de prestation";
});

if (state.started && state.learner.firstName && state.learner.lastName) {
  if (state.view === "correction") showCorrection(state.currentCorrection);
  else if (state.view === "copy") showCopy();
  else showExercise();
} else {
  showWelcome();
}
