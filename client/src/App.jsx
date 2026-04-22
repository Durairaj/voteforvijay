import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import tvkLogo from './assets/tvk-logo.svg'

const copy = {
  en: {
    brand: 'VoteForVijay',
    brandSubline: 'Tamilaga Vettri Kazhagam',
    disclaimer: 'Fan Website Disclaimer: This is an unofficial fan-made website and is not operated by or affiliated with TVK or Vijay official channels.',
    disclaimerShort: 'Unofficial fan website',
    logoMissing: 'Official TVK logo file not added yet. The site is showing a temporary fan-site placeholder mark.',
    navIdeology: 'Ideology',
    navPlan: 'Action Plan',
    navJourney: 'Journey',
    navPoll: 'Tamil Nadu Poll',
    navJoin: 'Join Us',
    heroTitle: 'A People’s Political Movement for Tamil Nadu',
    heroLead:
      'Built around Tamil Nadu, its people, and their welfare, this movement presents Joseph Vijay Chandrasekhar and TVK as a structured alternative focused on social justice, equality, dignity, and accountable governance.',
    heroPledge: 'Work. Rise. Believe that change is possible.',
    ideologyTitle: 'Movement Principles',
    actionTitle: 'Action Plan for Governance',
    guaranteesTitle: 'People-Centered Guarantees',
    journeyTitle: 'Our Journey',
    districtsTitle: 'District Organization Focus',
    talksTitle: 'Vijay Talks on YouTube',
    talkWatch: 'Watch on YouTube',
    compareTitle: 'Why TVK Over DMK and AIADMK',
    compareNote:
      'The case for TVK is framed around fresh leadership, movement politics, and stronger accountability, contrasted with the fatigue many voters feel toward long-running party cycles.',
    pollTitle: 'Tamil Nadu Politics Pulse Poll',
    pollLead: 'If election were held today, who would you vote for?',
    pollChoose: 'Choose a party',
    pollSubmit: 'Submit Poll Vote',
    pollTotal: 'Total votes',
    pollSuccess: 'Thanks. Your vote has been recorded.',
    pollFailure: 'Unable to save poll vote now. Please try again.',
    joinTitle: 'Commit as a Member of the Movement',
    joinLead:
      'Join, volunteer, organize local meetings, and add your voice to a structured people-first political movement.',
    nameLabel: 'Full Name',
    phoneLabel: 'Phone Number',
    districtLabel: 'District',
    reasonLabel: 'Why do you support Vijay?',
    submit: 'Post My Support Message',
    supportersTitle: 'People Supporting Vijay',
    loading: 'Loading supporter messages...',
    empty: 'Be the first to post your support message.',
    success: 'Your support message has been saved and published.',
    failure: 'Could not submit right now. Please try again.',
    by: 'From',
    footerMembership: 'Become a committed party member',
    footerInfo: 'Party, policy, leadership, district organization, resolutions, announcements, and events.',
  },
  ta: {
    brand: 'VoteForVijay',
    brandSubline: 'தமிழக வெற்றிக் கழகம்',
    disclaimer: 'ரசிகர் இணையதள அறிவிப்பு: இது அதிகாரப்பூர்வ TVK அல்லது விஜய் அமைப்பால் நடத்தப்படாத, ரசிகர்களால் உருவாக்கப்பட்ட அதிகாரப்பூர்வமற்ற இணையதளம்.',
    disclaimerShort: 'அதிகாரப்பூர்வமற்ற ரசிகர் இணையதளம்',
    logoMissing: 'அதிகாரப்பூர்வ TVK லோகோ கோப்பு இன்னும் சேர்க்கப்படவில்லை. தற்போது தற்காலிக ரசிகர் அடையாளக் குறி காட்டப்படுகிறது.',
    navIdeology: 'கொள்கை',
    navPlan: 'செயல்திட்டம்',
    navJourney: 'பயணம்',
    navPoll: 'தமிழ்நாடு வாக்கு கணிப்பு',
    navJoin: 'இணையுங்கள்',
    heroTitle: 'தமிழ்நாட்டுக்கான மக்களரசியல் இயக்கம்',
    heroLead:
      'தமிழ்நாடு மற்றும் தமிழ்நாட்டு மக்கள் நலனை மையமாகக் கொண்டு, சமூக நீதி, சமத்துவம், மனித மரியாதை மற்றும் பொறுப்புணர்வு கொண்ட ஆட்சியை முன்னிறுத்தும் மாற்று அரசியல் அமைப்பாக TVK உருவாக்கப்படுகிறது.',
    heroPledge: 'உழைத்திடு. உயர்ந்திடு. மாற்றம் சாத்தியமே என நம்பு.',
    ideologyTitle: 'இயக்கக் கொள்கை',
    actionTitle: 'ஆட்சிக்கான செயல்திட்டம்',
    guaranteesTitle: 'மக்களுக்கான உறுதிப்பாடுகள்',
    journeyTitle: 'எங்கள் பயணம்',
    districtsTitle: 'மாவட்ட அமைப்பு நோக்கு',
    talksTitle: 'யூடியூப்பில் விஜய் பேச்சுகள்',
    talkWatch: 'யூடியூப்பில் பார்க்க',
    compareTitle: 'DMK மற்றும் AIADMK-ஐ விட ஏன் TVK',
    compareNote:
      'பழைய கட்சி சுழற்சிகளால் உருவான சோர்வுக்கு மாற்றாக புதிய தலைமையும் மக்கள்மைய ஆட்சியும் தேவை என்பதே TVK வலியுறுத்தும் நிலைப்பாடு.',
    pollTitle: 'தமிழ்நாடு அரசியல் கருத்துக் கணிப்பு',
    pollLead: 'இன்று தேர்தல் நடந்தால் நீங்கள் யாருக்கு வாக்களிப்பீர்கள்?',
    pollChoose: 'ஒரு கட்சியை தேர்வு செய்யவும்',
    pollSubmit: 'வாக்கை பதிவு செய்',
    pollTotal: 'மொத்த வாக்குகள்',
    pollSuccess: 'நன்றி. உங்கள் வாக்கு பதிவு செய்யப்பட்டது.',
    pollFailure: 'இப்போது வாக்கை சேமிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    joinTitle: 'கழக உறுப்பினராக உறுதிபூணுங்கள்',
    joinLead:
      'இணையுங்கள், தன்னார்வமாகச் செயல்படுங்கள், உள்ளூர் அமைப்புகளை கட்டியெழுப்புங்கள், மக்களரசியல் இயக்கத்தில் உங்கள் பங்கைக் குறிப்பிடுங்கள்.',
    nameLabel: 'முழு பெயர்',
    phoneLabel: 'தொலைபேசி எண்',
    districtLabel: 'மாவட்டம்',
    reasonLabel: 'நீங்கள் ஏன் விஜயை ஆதரிக்கிறீர்கள்?',
    submit: 'என் ஆதரவை பதிவு செய்',
    supportersTitle: 'விஜயை ஆதரிக்கும் மக்கள்',
    loading: 'ஆதரவு செய்திகள் ஏற்றப்படுகிறது...',
    empty: 'முதல் ஆதரவு செய்தியை நீங்கள் பதிவு செய்யுங்கள்.',
    success: 'உங்கள் ஆதரவு செய்தி சேமிக்கப்பட்டு வெளியிடப்பட்டது.',
    failure: 'இப்போது பதிவு செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    by: 'அனுப்பியது',
    footerMembership: 'கழக உறுப்பினராகுங்கள்',
    footerInfo: 'கழகம், கொள்கை, செயல்திட்டம், தலைமைத்துவம், மாவட்ட அமைப்பு, தீர்மானங்கள், அறிவிப்புகள், நிகழ்ச்சிகள்.',
  },
}

const ideologyItems = [
  {
    id: '01',
    enTitle: 'Social Justice and Equality',
    enBody: 'Policy rooted in equal dignity, fair opportunity, and representation for all sections of society.',
    taTitle: 'சமூக நீதி மற்றும் சமத்துவம்',
    taBody: 'அனைத்து தரப்பினருக்கும் சம வாய்ப்பு, மரியாதை, பிரதிநிதித்துவம் வழங்கும் அரசியல் அணுகுமுறை.',
  },
  {
    id: '02',
    enTitle: 'People Before Power',
    enBody: 'Politics treated as public service, not merely electoral arithmetic or patronage.',
    taTitle: 'அதிகாரத்திற்கு முன் மக்கள்',
    taBody: 'அரசியலை வெறும் அதிகாரப் போட்டியாக அல்லாமல், மக்களுக்கான பணியாக நடத்தும் நிலைப்பாடு.',
  },
  {
    id: '03',
    enTitle: 'Tamil Nadu First Governance',
    enBody: 'State welfare, local development, and policies measured against the interests of Tamil Nadu’s people.',
    taTitle: 'தமிழ்நாடு முதன்மை ஆட்சி',
    taBody: 'தமிழ்நாட்டு மக்கள் நலன், மாநில வளர்ச்சி, உள்ளூர் தேவைகள் ஆகியவற்றை மையமாகக் கொண்ட நிர்வாக நோக்கு.',
  },
  {
    id: '04',
    enTitle: 'Structured Movement Politics',
    enBody: 'Organization, resolutions, district leadership, and long-term movement building instead of event-only politics.',
    taTitle: 'கட்டமைப்புள்ள மக்களரசியல்',
    taBody: 'நிகழ்ச்சி சார்ந்த அரசியலைத் தாண்டி, மாவட்ட அமைப்பு மற்றும் தீர்மானங்களுடன் கூடிய நிலையான இயக்கம்.',
  },
]

const actionItems = [
  {
    id: 'A1',
    enTitle: 'Transparent Accountability Dashboard',
    enBody: 'Track promises, budgets, implementation stages, and district delivery in public view.',
    taTitle: 'வெளிப்படையான பொறுப்புணர்வு டாஷ்போர்டு',
    taBody: 'வாக்குறுதி, பட்ஜெட், நிறைவேற்றம், மாவட்ட முன்னேற்றம் ஆகியவற்றை திறந்த கண்காணிப்பு.',
  },
  {
    id: 'A2',
    enTitle: 'District Jobs and Skills Mission',
    enBody: 'Practical employment pipelines through industry, college, and district-level skill networks.',
    taTitle: 'மாவட்ட வேலை மற்றும் திறன் திட்டம்',
    taBody: 'தொழில், கல்வி, மாவட்ட திறன் மையங்கள் மூலம் வேலை வாய்ப்பு வழித்தடம் உருவாக்குதல்.',
  },
  {
    id: 'A3',
    enTitle: 'Healthcare and Welfare Access',
    enBody: 'Strengthen primary care, medicine access, and targeted family support systems.',
    taTitle: 'மருத்துவம் மற்றும் நலன்சார் அணுகல்',
    taBody: 'முதன்மை சுகாதாரம், மருந்து கிடைக்கும் நிலை, குடும்ப நல ஆதரவு ஆகியவற்றை வலுப்படுத்துதல்.',
  },
  {
    id: 'A4',
    enTitle: 'Education to Opportunity Pipeline',
    enBody: 'Career guidance, placements, and modernized learning aligned to employment realities.',
    taTitle: 'கல்வி முதல் வாய்ப்பு வரை',
    taBody: 'தொழில் வழிகாட்டல், வேலை அமர்த்தல், நவீன பாடத்திட்ட இணைப்பு மூலம் வாய்ப்புகளை உருவாக்குதல்.',
  },
]

const guarantees = [
  {
    en: 'Clean governance and public accountability',
    ta: 'சுத்தமான நிர்வாகம் மற்றும் பொது பொறுப்புணர்வு',
  },
  {
    en: 'Youth-first employment and enterprise support',
    ta: 'இளைஞர் மைய வேலை வாய்ப்பு மற்றும் தொழில் ஆதரவு',
  },
  {
    en: 'Equal dignity across districts and communities',
    ta: 'அனைத்து மாவட்டங்களுக்கும் சமூகங்களுக்கும் சம மரியாதை',
  },
  {
    en: 'Transparent delivery of welfare and public services',
    ta: 'நலத்திட்டங்களும் பொது சேவைகளும் வெளிப்படையாக வழங்குதல்',
  },
]

const journey = [
  { year: '1992', en: 'Service-oriented fan movement roots', ta: 'சமூக சேவை சார்ந்த ஆரம்ப இயக்கம்' },
  { year: '2008', en: 'Grassroots organization deepens', ta: 'அடித்தள அமைப்பு வலுப்பெறுதல்' },
  { year: '2017', en: 'Public-facing movement identity grows', ta: 'மக்கள் நோக்கிய இயக்க அடையாளம் விரிவடைதல்' },
  { year: '2024', en: 'Formal party launch and political consolidation', ta: 'கட்சித் துவக்கம் மற்றும் அரசியல் ஒருங்கிணைப்பு' },
  { year: '2026', en: 'Election-facing structured movement politics', ta: 'தேர்தலை நோக்கிய கட்டமைப்பான மக்களரசியல்' },
]

const districtHighlights = [
  {
    enTitle: 'District leadership visibility',
    enBody: 'Local responsibility and district-level coordination are treated as core to the movement.',
    taTitle: 'மாவட்டத் தலைமை வெளிப்படைத்தன்மை',
    taBody: 'மாவட்ட பொறுப்புகள் மற்றும் உள்ளூர் ஒருங்கிணைப்பு இயக்கத்தின் மையமாகக் கருதப்படுகிறது.',
  },
  {
    enTitle: 'Events, announcements, and resolutions',
    enBody: 'The structure is built to connect ideology with activity on the ground.',
    taTitle: 'நிகழ்ச்சி, அறிவிப்பு, தீர்மான இணைப்பு',
    taBody: 'கொள்கையும் நிலத்தளச் செயல்பாடுகளும் ஒன்றோடொன்று இணையும் அமைப்பு.',
  },
  {
    enTitle: 'Membership to field organization',
    enBody: 'The model emphasizes turning supporters into organized contributors.',
    taTitle: 'உறுப்பினர் அமைப்பிலிருந்து பணி அமைப்பு வரை',
    taBody: 'ஆதரவாளர்களை ஒழுங்கமைக்கப்பட்ட செயற்பாட்டாளர்களாக மாற்றும் அணுகுமுறை.',
  },
]

const talks = [
  {
    id: '1',
    type: 'embed',
    titleEn: 'Tamil Nadu 2026 Election Manifesto Release Live',
    titleTa: 'தமிழ்நாடு 2026 தேர்தல் அறிக்கை வெளியீடு நேரலை',
    url: 'https://www.youtube.com/embed/X57i52Dwtg4',
  },
  {
    id: '2',
    type: 'link',
    titleEn: 'Official TVK Vijay HQ YouTube Channel',
    titleTa: 'அதிகாரப்பூர்வ TVK Vijay HQ யூடியூப் சேனல்',
    url: 'https://www.youtube.com/@TVKVijayHQ-Offl',
  },
  {
    id: '3',
    type: 'link',
    titleEn: 'Official TVK Vijay HQ Videos',
    titleTa: 'அதிகாரப்பூர்வ TVK Vijay HQ வீடியோக்கள்',
    url: 'https://www.youtube.com/@TVKVijayHQ-Offl/videos',
  },
]

const pollParties = ['TVK', 'DMK', 'AIADMK', 'NTK', 'BJP', 'Others']

function App() {
  const [useFallbackLogo, setUseFallbackLogo] = useState(false)
  const [lang, setLang] = useState('en')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    district: '',
    reason: '',
  })
  const [supporters, setSupporters] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState('')
  const [pollStats, setPollStats] = useState({ total: 0, counts: {} })
  const [pollChoice, setPollChoice] = useState('TVK')
  const [pollSubmitting, setPollSubmitting] = useState(false)
  const [pollStatus, setPollStatus] = useState('')
  const talksRef = useRef(null)

  const text = useMemo(() => copy[lang] || copy.en, [lang])
  const apiBase = import.meta.env.VITE_API_BASE || ''
  const logoSrc = useFallbackLogo ? tvkLogo : '/branding/tvk-party-logo.png'

  async function loadSupporters() {
    try {
      const res = await fetch(`${apiBase}/api/supporters`)
      if (!res.ok) {
        throw new Error('Failed to fetch supporters')
      }
      const data = await res.json()
      setSupporters(Array.isArray(data.supporters) ? data.supporters : [])
    } catch {
      setSupporters([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSupporters()
    loadPoll()
  }, [])

  async function loadPoll() {
    try {
      const res = await fetch(`${apiBase}/api/poll`)
      if (!res.ok) {
        throw new Error('Failed to fetch poll')
      }
      const data = await res.json()
      setPollStats({ total: data.total || 0, counts: data.counts || {} })
    } catch {
      setPollStats({ total: 0, counts: {} })
    }
  }

  function onInputChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function onPollSubmit(event) {
    event.preventDefault()
    setPollSubmitting(true)
    setPollStatus('')

    try {
      const res = await fetch(`${apiBase}/api/poll-vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          party: pollChoice,
          district: form.district,
        }),
      })

      if (!res.ok) {
        throw new Error('Poll submit failed')
      }

      const data = await res.json()
      setPollStats({ total: data.total || 0, counts: data.counts || {} })
      setPollStatus(text.pollSuccess)
    } catch {
      setPollStatus(text.pollFailure)
    } finally {
      setPollSubmitting(false)
    }
  }

  function scrollTalks(direction) {
    if (!talksRef.current) {
      return
    }
    talksRef.current.scrollBy({
      left: direction * Math.max(320, talksRef.current.clientWidth * 0.8),
      behavior: 'smooth',
    })
  }

  async function onSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setStatus('')

    try {
      const res = await fetch(`${apiBase}/api/supporters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          language: lang,
        }),
      })

      if (!res.ok) {
        throw new Error('Submit failed')
      }

      const data = await res.json()
      setSupporters((prev) => [data.supporter, ...prev])
      setForm({ name: '', phone: '', district: '', reason: '' })
      setStatus(text.success)
    } catch {
      setStatus(text.failure)
    } finally {
      setSubmitting(false)
    }
  }

  function formatDate(iso) {
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) {
      return ''
    }
    return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date)
  }

  return (
    <div className="page">
      <div className="disclaimer-banner">{text.disclaimer}</div>
      <div className="vote-banner">
        🎺 Vote for <strong>Whistle</strong> — Tamilaga Vettri Kazhagam (TVK) &nbsp;|&nbsp; Humble request from <strong>Raj</strong> 🙏
      </div>
      <header className="topbar">
        <div className="brand-wrap">
          <img
            src={logoSrc}
            alt={text.disclaimerShort}
            className="brand-logo"
            onError={() => setUseFallbackLogo(true)}
          />
          <div className="brand-copy">
            <div className="brand">{text.brand}</div>
            <p className="brand-subline">{text.brandSubline}</p>
            {useFallbackLogo ? <p className="logo-note">{text.logoMissing}</p> : null}
          </div>
        </div>
        <div className="actions">
          <a href="#ideology" className="jump-link">
            {text.navIdeology}
          </a>
          <a href="#plan" className="jump-link">
            {text.navPlan}
          </a>
          <a href="#journey" className="jump-link">
            {text.navJourney}
          </a>
          <a href="#poll" className="jump-link">
            {text.navPoll}
          </a>
          <a href="#join" className="jump-link">
            {text.navJoin}
          </a>
          <div className="lang-toggle" aria-label="Language switch">
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'ta' ? 'active' : ''}
              onClick={() => setLang('ta')}
            >
              தமிழ்
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="kicker">Tamil Nadu Election Campaign</p>
            <h1>{text.heroTitle}</h1>
            <p className="lead">{text.heroLead}</p>
            <p className="hero-pledge">{text.heroPledge}</p>
          </div>
          <div className="hero-logo-shell">
            <img
              src={logoSrc}
              alt={text.disclaimerShort}
              className="hero-logo"
              onError={() => setUseFallbackLogo(true)}
            />
          </div>
        </div>
      </section>

      <section id="ideology" className="section card">
        <h2>{text.ideologyTitle}</h2>
        <div className="agenda-grid">
          {ideologyItems.map((item) => (
            <article className="agenda-item" key={item.id}>
              <p className="agenda-id">{item.id}</p>
              <h3>{lang === 'ta' ? item.taTitle : item.enTitle}</h3>
              <p>{lang === 'ta' ? item.taBody : item.enBody}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="plan" className="section card">
        <h2>{text.actionTitle}</h2>
        <div className="agenda-grid">
          {actionItems.map((item) => (
            <article className="agenda-item plan-item" key={item.id}>
              <p className="agenda-id">{item.id}</p>
              <h3>{lang === 'ta' ? item.taTitle : item.enTitle}</h3>
              <p>{lang === 'ta' ? item.taBody : item.enBody}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card guarantees-section">
        <h2>{text.guaranteesTitle}</h2>
        <div className="guarantee-grid">
          {guarantees.map((item) => (
            <article className="guarantee-card" key={item.en}>
              <span className="guarantee-dot" aria-hidden="true"></span>
              <p>{lang === 'ta' ? item.ta : item.en}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="talks" className="section card">
        <div className="talks-header">
          <h2>{text.talksTitle}</h2>
          <div className="talk-btns">
            <button type="button" onClick={() => scrollTalks(-1)}>
              {'<'}
            </button>
            <button type="button" onClick={() => scrollTalks(1)}>
              {'>'}
            </button>
          </div>
        </div>
        <div className="talks-row" ref={talksRef}>
          {talks.map((talk) => (
            <article key={talk.id} className="talk-card">
              {talk.type === 'embed' ? (
                <>
                  <div className="video-wrap">
                    <iframe
                      src={talk.url}
                      title={lang === 'ta' ? talk.titleTa : talk.titleEn}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p>{lang === 'ta' ? talk.titleTa : talk.titleEn}</p>
                </>
              ) : (
                <a className="talk-link-card" href={talk.url} target="_blank" rel="noreferrer">
                  <div className="talk-link-badge">TVK</div>
                  <p>{lang === 'ta' ? talk.titleTa : talk.titleEn}</p>
                  <span>{text.talkWatch}</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="compare" className="section card">
        <h2>{text.compareTitle}</h2>
        <p>{text.compareNote}</p>
        <div className="compare-grid">
          <article className="compare-box strong">
            <h3>TVK</h3>
            <ul>
              <li>Fresh leadership model around accountability</li>
              <li>Youth-first jobs and skill roadmap</li>
              <li>Public dashboard governance approach</li>
            </ul>
          </article>
          <article className="compare-box">
            <h3>DMK / AIADMK Concerns</h3>
            <ul>
              <li>Recurring bribery and corruption allegations in public discourse</li>
              <li>Vote-buying and patronage politics concerns</li>
              <li>Dynasty politics and slower accountability concerns</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="journey" className="section card">
        <h2>{text.journeyTitle}</h2>
        <div className="journey-grid">
          {journey.map((item) => (
            <article className="journey-card" key={item.year}>
              <p className="journey-year">{item.year}</p>
              <p>{lang === 'ta' ? item.ta : item.en}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card districts-section">
        <h2>{text.districtsTitle}</h2>
        <div className="district-grid">
          {districtHighlights.map((item) => (
            <article className="district-card" key={item.enTitle}>
              <h3>{lang === 'ta' ? item.taTitle : item.enTitle}</h3>
              <p>{lang === 'ta' ? item.taBody : item.enBody}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="poll" className="section card">
        <h2>{text.pollTitle}</h2>
        <p>{text.pollLead}</p>
        <form className="poll-form" onSubmit={onPollSubmit}>
          <label>
            <span>{text.pollChoose}</span>
            <select value={pollChoice} onChange={(event) => setPollChoice(event.target.value)}>
              {pollParties.map((party) => (
                <option key={party} value={party}>
                  {party}
                </option>
              ))}
            </select>
          </label>
          <button className="primary-btn" type="submit" disabled={pollSubmitting}>
            {pollSubmitting ? '...' : text.pollSubmit}
          </button>
          {pollStatus ? <p className="status">{pollStatus}</p> : null}
        </form>
        <p className="poll-total">
          {text.pollTotal}: <strong>{pollStats.total}</strong>
        </p>
        <div className="poll-results">
          {pollParties.map((party) => {
            const count = pollStats.counts?.[party] || 0
            const percent = pollStats.total ? Math.round((count / pollStats.total) * 100) : 0
            return (
              <div className="poll-row" key={party}>
                <div className="poll-row-head">
                  <span>{party}</span>
                  <span>
                    {count} ({percent}%)
                  </span>
                </div>
                <div className="poll-bar-bg">
                  <div className="poll-bar-fill" style={{ width: `${percent}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="join" className="join-layout">
        <article className="card form-card">
          <h2>{text.joinTitle}</h2>
          <p>{text.joinLead}</p>

          <form className="support-form" onSubmit={onSubmit}>
            <label>
              <span>{text.nameLabel}</span>
              <input
                name="name"
                value={form.name}
                onChange={onInputChange}
                required
                maxLength={80}
              />
            </label>

            <label>
              <span>{text.phoneLabel}</span>
              <input
                name="phone"
                value={form.phone}
                onChange={onInputChange}
                maxLength={20}
              />
            </label>

            <label>
              <span>{text.districtLabel}</span>
              <input
                name="district"
                value={form.district}
                onChange={onInputChange}
                required
                maxLength={80}
              />
            </label>

            <label>
              <span>{text.reasonLabel}</span>
              <textarea
                name="reason"
                value={form.reason}
                onChange={onInputChange}
                required
                rows={4}
                maxLength={500}
              />
            </label>

            <button className="primary-btn" type="submit" disabled={submitting}>
              {submitting ? '...' : text.submit}
            </button>
            {status ? <p className="status">{status}</p> : null}
          </form>
        </article>

        <article className="card supporters-card">
          <h2>{text.supportersTitle}</h2>

          {loading ? <p>{text.loading}</p> : null}
          {!loading && supporters.length === 0 ? <p>{text.empty}</p> : null}

          <div className="messages">
            {supporters.map((entry) => (
              <div className="message" key={entry.id}>
                <p className="reason">"{entry.reason}"</p>
                <p className="meta">
                  {text.by} <strong>{entry.name}</strong> · {entry.district}
                </p>
                <p className="date">{formatDate(entry.createdAt)}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="site-footer card">
        <div>
          <h2>{text.footerMembership}</h2>
          <p>{text.joinLead}</p>
          <p className="footer-disclaimer">{text.disclaimer}</p>
        </div>
        <p className="footer-meta">{text.footerInfo}</p>
      </footer>
    </div>
  )
}

export default App
