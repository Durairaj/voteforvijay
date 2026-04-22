const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
const langButtons = document.querySelectorAll('.lang-btn');
const talksTrack = document.getElementById('talksTrack');
const talksPrev = document.getElementById('talksPrev');
const talksNext = document.getElementById('talksNext');

const translations = {
  en: {
    menuButton: 'Menu',
    navVision: 'Vision',
    navAgenda: 'Agenda',
    navTalks: 'Talks',
    navCompare: 'Why Change',
    navJoin: 'Join',
    heroKicker: 'Tamil Nadu 2026 Election',
    heroTitle: 'A New Voice.<br />A Stronger Tamil Nadu.',
    heroLead:
      'Joseph Vijay Chandrasekhar, leader of TVK, is contesting this election with a clear mission: transparent governance, youth opportunity, and dignity for every family.',
    heroVolunteer: 'Volunteer Now',
    heroAgenda: 'Read Agenda',
    countLabel: 'Campaign Momentum',
    countDefault: 'Building support across Tamil Nadu...',
    heroCardTag: 'Campaign Promise',
    heroCardTitle: 'People First. Politics Next.',
    heroPoint1: 'Job-ready skill programs for youth',
    heroPoint2: 'Local infrastructure with transparent spending',
    heroPoint3: 'Public services that work for every district',
    visionKicker: 'Why Vijay',
    visionTitle: 'Leadership Built on Trust and Action',
    visionCard1Title: 'Clean Governance',
    visionCard1Body: 'Every public rupee tracked. Every major project published for people to review.',
    visionCard2Title: 'Youth Power',
    visionCard2Body: 'District-level startup, sports, and skill hubs to create pathways for real employment.',
    visionCard3Title: 'Inclusive Growth',
    visionCard3Body: 'Development that reaches villages, towns, and cities equally across Tamil Nadu.',
    agendaKicker: 'TVK Detailed Agenda',
    agendaTitle: 'What A TVK Government Will Deliver',
    agenda1Title: '100-Day Accountability Plan',
    agenda1Body: 'Public dashboard for promises, budgets, and district-level status updates.',
    agenda2Title: 'District Jobs Mission',
    agenda2Body: 'Industry partnerships and skill pipelines to create local jobs for local youth.',
    agenda3Title: 'Healthcare Access Guarantee',
    agenda3Body: 'Stronger primary health centers, medicine availability, and emergency care networks.',
    agenda4Title: 'Education to Employment Track',
    agenda4Body: 'Career counseling, placement support, and modern curriculum alignment with industry.',
    agenda5Title: 'Women and Family Security',
    agenda5Body: 'Safety infrastructure, legal support access, and targeted support for working women.',
    talksKicker: 'Vijay Talks',
    talksTitle: 'Watch Campaign Speeches and Interviews',
    talk1Title: 'Vision Speech: Tamil Nadu of Opportunity',
    talk2Title: 'Interview: Why TVK, Why Now',
    talk3Title: 'Youth Townhall: Jobs and Future',
    talksNote: 'Replace the sample YouTube links above with official Vijay speech videos.',
    timelineKicker: 'Campaign Journey',
    timelineTitle: 'Across Every District, For Every Citizen',
    phase1Title: 'Phase 1',
    phase1Body: 'Community listening tours in major urban and rural regions.',
    phase2Title: 'Phase 2',
    phase2Body: 'Youth-focused town halls and grassroots volunteer expansion.',
    phase3Title: 'Phase 3',
    phase3Body: 'Statewide call-to-action for voter turnout and campaign support.',
    compareKicker: 'Why Vote For Vijay',
    compareTitle: 'A Fresh Alternative to the DMK-AIADMK Cycle',
    compareVijayTitle: 'TVK + Vijay Focus',
    compareVijay1: 'New leadership with a first-principles governance approach',
    compareVijay2: 'Public spending visibility and citizen-facing progress dashboards',
    compareVijay3: 'Youth-first jobs, entrepreneurship, and modern skills mission',
    compareVijay4: 'Grassroots volunteer model over legacy political networks',
    compareStatusTitle: 'Concerns Voters Raise About Status Quo',
    compareStatus1: 'Recurring corruption and bribery allegations in political discourse',
    compareStatus2: 'Cash-for-vote and patronage style politics concerns',
    compareStatus3: 'Dynasty-led leadership and limited internal democracy concerns',
    compareStatus4: 'Slow accountability on major public complaints and local issues',
    compareDisclaimer:
      'Note: this section reflects campaign messaging and commonly reported public concerns; voters should verify facts using election affidavits, court records, and credible journalism.',
    fanKicker: 'From a Fan',
    fanTitle: 'VoteForVijay, with hope and respect - Raj',
    fanBody:
      '"I am Raj, a proud supporter who believes Tamil Nadu deserves honest governance and energetic leadership. I support Vijay because he speaks directly to people, listens to youth, and offers a practical plan for change."',
    joinKicker: 'Take Part',
    joinTitle: 'Join the Movement',
    joinBody: 'Sign up to volunteer, host local meetings, and help spread the campaign message.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Your phone',
    districtLabel: 'District',
    districtPlaceholder: 'Your district',
    helpLabel: 'How You Can Help',
    helpOption0: 'Choose one',
    helpOption1: 'Door-to-door campaign',
    helpOption2: 'Social media support',
    helpOption3: 'Local event coordination',
    joinButton: 'Join Campaign Team',
    footerLine: 'Paid for by the Vijay Campaign Committee',
    thanksMessage: 'Thanks, {name}. The campaign team will contact you soon.',
    electionLive: 'Election day is here. Every vote matters.',
    electionCountdown: '{days} days {hours} hours to election day',
  },
  ta: {
    menuButton: 'மெனு',
    navVision: 'நோக்கம்',
    navAgenda: 'அஜெண்டா',
    navTalks: 'பேச்சுகள்',
    navCompare: 'ஏன் மாற்றம்',
    navJoin: 'இணையுங்கள்',
    heroKicker: 'தமிழ்நாடு 2026 தேர்தல்',
    heroTitle: 'புதிய குரல்.<br />வலுவான தமிழ்நாடு.',
    heroLead:
      'தமிழக வெற்றி கழகத் தலைவர் ஜோசப் விஜய் சந்திரசேகர், வெளிப்படையான ஆட்சி, இளைஞர் வாய்ப்பு, ஒவ்வொரு குடும்பத்துக்கும் மரியாதை என்பவற்றை இலக்காக கொண்டு தேர்தலில் நிற்கிறார்.',
    heroVolunteer: 'தன்னார்வலராக இணைக',
    heroAgenda: 'அஜெண்டா படிக்க',
    countLabel: 'பிரசார முன்னேற்றம்',
    countDefault: 'தமிழகம் முழுவதும் ஆதரவு உருவாகிறது...',
    heroCardTag: 'பிரசார உறுதி',
    heroCardTitle: 'முதலில் மக்கள். பின்னர் அரசியல்.',
    heroPoint1: 'இளைஞர்களுக்கு வேலை திறன் பயிற்சி திட்டங்கள்',
    heroPoint2: 'வெளிப்படையான செலவில் உள்ளூர் உட்கட்டமைப்பு மேம்பாடு',
    heroPoint3: 'ஒவ்வொரு மாவட்டத்துக்கும் செயல்படும் பொது சேவைகள்',
    visionKicker: 'ஏன் விஜய்',
    visionTitle: 'நம்பிக்கையும் செயல்பாடும் கொண்ட தலைமை',
    visionCard1Title: 'சுத்தமான நிர்வாகம்',
    visionCard1Body: 'ஒவ்வொரு பொது ரூபாயும் கண்காணிப்பு. ஒவ்வொரு பெரிய திட்டமும் மக்களுக்கு வெளிப்படையாக.',
    visionCard2Title: 'இளைஞர் சக்தி',
    visionCard2Body: 'மாவட்ட அளவிலான ஸ்டார்ட்அப், விளையாட்டு, திறன் மையங்கள் மூலம் வேலை வாய்ப்பு பாதைகள்.',
    visionCard3Title: 'ஒன்றிணைந்த வளர்ச்சி',
    visionCard3Body: 'கிராமம், நகரம், மாநகரம் அனைத்துக்கும் சமமான வளர்ச்சி.',
    agendaKicker: 'TVK விரிவான அஜெண்டா',
    agendaTitle: 'TVK அரசு வழங்க உள்ளவை',
    agenda1Title: '100 நாள் பொறுப்புணர்வு திட்டம்',
    agenda1Body: 'வாக்குறுதிகள், பட்ஜெட், மாவட்ட முன்னேற்றம் ஆகியவற்றுக்கான பொது டாஷ்போர்ட்.',
    agenda2Title: 'மாவட்ட வேலை வாய்ப்பு திட்டம்',
    agenda2Body: 'உள்ளூர் இளைஞர்களுக்கான உள்ளூர் வேலைகள் உருவாக்க தொழில் கூட்டாண்மைகள்.',
    agenda3Title: 'மருத்துவ அணுகல் உறுதி',
    agenda3Body: 'வலுப்படுத்தப்பட்ட முதன்மை சுகாதார மையங்கள், மருந்து கிடைக்கும் நிலை, அவசர சேவை வலையமைப்பு.',
    agenda4Title: 'கல்வி முதல் வேலை வரை இணைப்பு',
    agenda4Body: 'தொழில் வழிகாட்டல், வேலைவாய்ப்பு ஆதரவு, பாடத்திட்டம்-தொழில் இணக்கம்.',
    agenda5Title: 'பெண்கள் மற்றும் குடும்ப பாதுகாப்பு',
    agenda5Body: 'பாதுகாப்பு கட்டமைப்பு, சட்ட உதவி அணுகல், வேலை செய்கிற பெண்களுக்கு ஆதரவு.',
    talksKicker: 'விஜய் பேச்சுகள்',
    talksTitle: 'பிரசார பேச்சுகள் மற்றும் நேர்காணல்கள்',
    talk1Title: 'நோக்கு பேச்சு: வாய்ப்புகளின் தமிழ்நாடு',
    talk2Title: 'நேர்காணல்: ஏன் TVK, ஏன் இப்போது',
    talk3Title: 'இளைஞர் டவுன்ஹால்: வேலை மற்றும் எதிர்காலம்',
    talksNote: 'மேலுள்ள மாதிரி YouTube இணைப்புகளை அதிகாரப்பூர்வ விஜய் பேச்சு வீடியோக்களால் மாற்றவும்.',
    timelineKicker: 'பிரசார பயணம்',
    timelineTitle: 'ஒவ்வொரு மாவட்டத்திலும், ஒவ்வொரு குடிமகனுக்காகவும்',
    phase1Title: 'கட்டம் 1',
    phase1Body: 'நகர மற்றும் கிராம பகுதிகளில் மக்கள் கேட்பு பயணங்கள்.',
    phase2Title: 'கட்டம் 2',
    phase2Body: 'இளைஞர் மைய கூட்டங்கள் மற்றும் அடிப்படை தன்னார்வ வலையமைப்பு விரிவு.',
    phase3Title: 'கட்டம் 3',
    phase3Body: 'மாநில அளவிலான வாக்காளர் பங்கேற்பு இயக்கம்.',
    compareKicker: 'ஏன் விஜய்க்கு வாக்களிக்க வேண்டும்',
    compareTitle: 'DMK-AIADMK சுழற்சிக்கு மாற்றான புதிய தேர்வு',
    compareVijayTitle: 'TVK + விஜய் முன்னுரிமை',
    compareVijay1: 'புதிய தலைமை, அடிப்படை மதிப்புகளின் நிர்வாக அணுகுமுறை',
    compareVijay2: 'பொது செலவு வெளிப்படைத்தன்மை மற்றும் மக்களுக்கு திறந்த முன்னேற்ற டாஷ்போர்டு',
    compareVijay3: 'இளைஞர் மைய வேலை, தொழில் முனைவு, நவீன திறன் இயக்கம்',
    compareVijay4: 'பழைய அரசியல் வலையமைப்புக்கு பதிலாக மக்கள் தன்னார்வ அடிப்படை',
    compareStatusTitle: 'நிலையான அரசியலைப் பற்றி வாக்காளர்கள் கூறும் கவலைகள்',
    compareStatus1: 'அரசியல் விவாதங்களில் தொடர்ந்து எழும் ஊழல் மற்றும் லஞ்ச குற்றச்சாட்டு கவலைகள்',
    compareStatus2: 'பணம் கொடுத்து வாக்கு மற்றும் ஆதரவு வலையமைப்பு அரசியல் குறித்த கவலைகள்',
    compareStatus3: 'குடும்ப ஆதிக்க தலைமை மற்றும் உள் ஜனநாயக குறைபாடு குறித்த கேள்விகள்',
    compareStatus4: 'பொது புகார்கள் மற்றும் உள்ளூர் பிரச்சினைகளில் மந்தமான பொறுப்புணர்வு',
    compareDisclaimer:
      'குறிப்பு: இப்பகுதி பிரசார பார்வை மற்றும் பொதுவாக பேசப்படும் கவலைகளை பிரதிபலிக்கிறது; வாக்காளர்கள் தேர்தல் சத்தியப்பிரமாணங்கள், நீதிமன்ற ஆவணங்கள் மற்றும் நம்பகமான செய்தி மூலங்களை சரிபார்க்க வேண்டும்.',
    fanKicker: 'ஒரு ரசிகரிடமிருந்து',
    fanTitle: 'VoteForVijay - நம்பிக்கையுடன், மரியாதையுடன் - ராஜ்',
    fanBody:
      '"நான் ராஜ். நேர்மையான நிர்வாகமும் ஆற்றல்மிக்க தலைமைமும் தமிழகத்திற்கு தேவை என்று நம்புகிறேன். மக்களிடம் நேரடியாக பேசும், இளைஞர்களை கேட்கும், மாற்றத்திற்கான நடைமுறைத் திட்டம் தரும் விஜயை நான் ஆதரிக்கிறேன்."',
    joinKicker: 'பங்கேற்போம்',
    joinTitle: 'இயக்கத்தில் இணையுங்கள்',
    joinBody: 'தன்னார்வமாக இணைந்து, உள்ளூர் கூட்டங்களை நடத்தி, பிரசார செய்தியை பரப்ப உதவுங்கள்.',
    nameLabel: 'முழு பெயர்',
    namePlaceholder: 'உங்கள் பெயர்',
    phoneLabel: 'தொலைபேசி எண்',
    phonePlaceholder: 'உங்கள் எண்',
    districtLabel: 'மாவட்டம்',
    districtPlaceholder: 'உங்கள் மாவட்டம்',
    helpLabel: 'நீங்கள் உதவ விரும்புவது',
    helpOption0: 'ஒன்றை தேர்வு செய்யவும்',
    helpOption1: 'வீடு தோறும் பிரசாரம்',
    helpOption2: 'சமூக ஊடக ஆதரவு',
    helpOption3: 'உள்ளூர் நிகழ்ச்சி ஒருங்கிணைப்பு',
    joinButton: 'பிரசார அணியில் இணையுங்கள்',
    footerLine: 'விஜய் பிரசார குழுவினரால் ஏற்பாடு செய்யப்பட்டது',
    thanksMessage: 'நன்றி, {name}. பிரசார அணி விரைவில் உங்களை தொடர்புகொள்ளும்.',
    electionLive: 'தேர்தல் நாள் வந்துவிட்டது. ஒவ்வொரு வாக்கும் முக்கியம்.',
    electionCountdown: 'தேர்தல் நாளுக்கு இன்னும் {days} நாள் {hours} மணி',
  },
};

let currentLang = 'en';

function applyLanguage(lang) {
  const copy = translations[lang] || translations.en;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const { i18n: key } = el.dataset;
    if (!key || !copy[key]) {
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.value = copy[key];
      return;
    }
    el.innerHTML = copy[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const { i18nPlaceholder: key } = el.dataset;
    if (!key || !copy[key]) {
      return;
    }
    el.setAttribute('placeholder', copy[key]);
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateCountdown();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const electionDay = new Date('2026-05-01T00:00:00+05:30');
const countdownText = document.getElementById('countdownText');

function updateCountdown() {
  if (!countdownText) {
    return;
  }

  const now = new Date();
  const diff = electionDay - now;
  const langCopy = translations[currentLang] || translations.en;

  if (diff <= 0) {
    countdownText.textContent = langCopy.electionLive;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  countdownText.textContent = langCopy.electionCountdown
    .replace('{days}', String(days))
    .replace('{hours}', String(hours));
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 15);

const joinForm = document.getElementById('joinForm');
const formStatus = document.getElementById('formStatus');

if (joinForm && formStatus) {
  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(joinForm);
    const rawName = formData.get('name');
    const name = typeof rawName === 'string' && rawName.trim() ? rawName.trim() : 'friend';
    const langCopy = translations[currentLang] || translations.en;

    formStatus.textContent = langCopy.thanksMessage.replace('{name}', name);
    formStatus.style.color = '#0c6d36';
    joinForm.reset();
  });
}

if (langButtons.length > 0) {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang) {
        return;
      }
      applyLanguage(lang);
    });
  });
}

if (talksTrack && talksPrev && talksNext) {
  const slide = () => Math.max(320, talksTrack.clientWidth * 0.85);

  talksPrev.addEventListener('click', () => {
    talksTrack.scrollBy({ left: -slide(), behavior: 'smooth' });
  });

  talksNext.addEventListener('click', () => {
    talksTrack.scrollBy({ left: slide(), behavior: 'smooth' });
  });
}

applyLanguage('en');
