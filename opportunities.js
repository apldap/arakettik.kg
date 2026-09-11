const opportunities = [
  {
    title:'Stipendium Hungaricum', category:'scholarship', type:'Стипендия', icon:'fa-graduation-cap', country:'Венгрия', level:'Бакалавриат / магистратура / докторантура', eligibility:'Граждане Кыргызстана — Кыргызстан есть среди партнёрских стран',
    deadline:'Следующий цикл ожидается в конце 2026 — начале 2027', status:'Следующий набор', funding:'Бесплатное обучение + стипендия + вклад в проживание + медстраховка',
    desc:'Одна из главных государственных стипендиальных программ Венгрии для иностранных студентов. Для Кыргызстана действует партнёрский канал подачи.',
    url:'https://stipendiumhungaricum.hu/', source:'Официальный сайт программы'
  },
  {
    title:'FLEX 2027–2028', category:'exchange', type:'Обмен', icon:'fa-plane', country:'США', level:'9–10 класс (по предварительным требованиям 2027–28)', eligibility:'Граждане КР, обучающиеся в школе Кыргызстана',
    deadline:'Сентябрь 2026 — открытие анкеты', status:'Открывается скоро', funding:'Полностью финансируемый школьный обмен на 1 учебный год',
    desc:'Год обучения в американской школе и проживания в принимающей семье. Участие бесплатное; отбор проходит в несколько этапов.',
    url:'https://kyrgyzstan.americancouncils.org/flex', source:'American Councils Kyrgyzstan'
  },
  {
    title:'Global UGRAD', category:'exchange', type:'Обмен', icon:'fa-earth-americas', country:'США', level:'Студенты бакалавриата', eligibility:'Кыргызстан входит в официальный список участвующих стран',
    deadline:'Ежегодный набор; точную дату проверять у Посольства США в КР', status:'Ежегодно', funding:'1 семестр обучения в США; программа не ведёт к получению степени',
    desc:'Конкурсный обмен для студентов бакалавриата. Кыргызстан прямо указан среди участвующих стран программы.',
    url:'https://www.globalugrad.org/participating-countries/', source:'Global UGRAD'
  },
  {
    title:'Fulbright Foreign Student Program', category:'scholarship', type:'Стипендия', icon:'fa-building-columns', country:'США', level:'Выпускники вузов / магистратура', eligibility:'Для граждан КР подача идёт через Посольство США / Fulbright в Кыргызстане',
    deadline:'Цикл 2026–27 закрыт; новый локальный дедлайн нужно проверять отдельно', status:'Следить за новым набором', funding:'Полное финансирование магистратуры в США по условиям программы',
    desc:'Программа для иностранных студентов из Кыргызстана, ориентированная на обучение в США. Требования и дедлайн устанавливаются для локального конкурса.',
    url:'https://kg.usembassy.gov/education-culture/exchange-programs/fulbright-foreign-student-program-central-asia/', source:'Посольство США в КР'
  },
  {
    title:'U.S.-CAEF Enterprise Student Fellowship', category:'scholarship', type:'Стипендия', icon:'fa-coins', country:'Кыргызстан / AUCA', level:'Бакалавриат', eligibility:'Граждане КР и других стран-участниц; абитуриенты AUCA, не текущие студенты',
    deadline:'Обычно октябрь — январь; даты 2026–27 необходимо подтвердить после публикации нового цикла', status:'Ежегодно', funding:'Полное покрытие обучения + жильё + ежемесячная поддержка + другие виды поддержки',
    desc:'Финансируемое обучение в AUCA по направлениям бизнес, экономика, software engineering и applied math & informatics. Требуются академическая успеваемость и финансовая потребность.',
    url:'https://uscaef.org/apply/', source:'U.S.-CAEF'
  },
  {
    title:'AIESEC Global Talent', category:'internship', type:'Стажировка', icon:'fa-briefcase', country:'Международный', level:'Студенты и недавние выпускники — зависит от конкретной вакансии', eligibility:'Eligibility определяется каждой конкретной стажировкой',
    deadline:'Постоянный набор: дедлайн зависит от вакансии', status:'Постоянно', funding:'Зависит от позиции: зарплата или другие условия; возможна логистическая поддержка',
    desc:'Международная платформа профессиональных стажировок. Сейчас на платформе есть вакансии в бизнесе, IT, маркетинге, финансах, инженерии и других сферах.',
    url:'https://aiesec.org/global-talent', source:'AIESEC'
  },
  {
    title:'Sur Place — стипендия Фонда Конрада Аденауэра', category:'scholarship', type:'Стипендия', icon:'fa-award', country:'Кыргызстан', level:'Студенты', eligibility:'Талантливые и социально активные студенты Кыргызстана',
    deadline:'Ноябрь — декабрь; следите за объявлением нового набора', status:'Следующий набор', funding:'Стипендиальная поддержка по условиям программы',
    desc:'Программа для активных студентов, которые участвуют в общественной и волонтёрской деятельности, реализуют социальные инициативы и проявляют лидерство.',
    url:'https://www.instagram.com/p/DcQcOMIjUaL/', source:'Фонд Конрада Аденауэра'
  },
  {
    title:'Chevening Scholarship 2027–2028', category:'scholarship', type:'Стипендия', icon:'fa-graduation-cap', country:'Великобритания', level:'Магистратура (1 год)', eligibility:'Выпускники бакалавриата с опытом работы от 2 лет',
    deadline:'6 октября 2026, 11:00 UTC', status:'Открыт набор', funding:'Обучение, проживание, перелёт, визовые сборы и другие расходы',
    desc:'Полностью финансируемая стипендия правительства Великобритании для обучения на taught master’s в британском университете.',
    url:'https://www.chevening.org/scholarships/', source:'Chevening'
  }
];

const grid=document.getElementById('opportunitiesGrid');
const search=document.getElementById('oppSearch');
const count=document.getElementById('oppCount');
let activeFilter='all';
const translations={
  ru:{about:'Главная',events:'Ивенты',organizations:'Организации',knowledge:'База знаний',opportunities:'Возможности',organizers:'Организаторам',heroTitle:'Гранты, стипендии и <span class="gradient-text">новые возможности</span>',heroText:'Подборка программ, которые могут быть интересны гражданам Кыргызстана: обучение, обмены, стажировки, волонтёрство и финансовая поддержка.',sourceNote:'<strong>Мы не смешиваем всё подряд.</strong><span>В базу попадают программы с официальным источником или подтверждённой страницей программы. Перед подачей всегда проверяй условия на сайте организатора.</span>',findTitle:'Найди возможность <span class="gradient-text">под себя</span>',findText:'Фильтруй по типу, уровню и статусу набора.',search:'Поиск по названию, стране или направлению...',all:'Все',scholarships:'Стипендии',exchanges:'Обмены',internships:'Стажировки',volunteering:'Волонтёрство',disclaimer:'<strong>Важно</strong><p>Дедлайн и условия могут меняться. Arakettik не принимает заявки и не гарантирует участие. Ссылка в карточке ведёт на официальный источник программы.</p>',footer:'© 2026 Arakettik — платформа возможностей для молодежи Кыргызстана',official:'Официальная страница',source:'Источник',empty:'По этому запросу возможностей не найдено.',item:'возможность',items:'возможностей'},
  kg:{about:'Долбоор жөнүндө',events:'Иш-чаралар',organizations:'Уюмдар',knowledge:'Билим базасы',opportunities:'Мүмкүнчүлүктөр',organizers:'Уюштуруучуларга',heroTitle:'Гранттар, стипендиялар жана <span class="gradient-text">жаңы мүмкүнчүлүктөр</span>',heroText:'Кыргызстандын жарандары үчүн кызыктуу болушу мүмкүн болгон программалар: окуу, алмашуу, стажировка, ыктыярчылык жана каржылык колдоо.',sourceNote:'<strong>Биз баарын аралаштырбайбыз.</strong><span>Базага расмий булагы же программанын тастыкталган баракчасы бар программалар гана кирет. Арыз берерден мурун шарттарды уюштуруучунун сайтынан текшер.</span>',findTitle:'Өзүңө ылайык <span class="gradient-text">мүмкүнчүлүк тап</span>',findText:'Түрү, деңгээли жана кабыл алуу макамы боюнча чыпкала.',search:'Аталышы, өлкө же багыты боюнча издөө...',all:'Баары',scholarships:'Стипендиялар',exchanges:'Алмашуулар',internships:'Стажировкалар',volunteering:'Ыктыярчылык',disclaimer:'<strong>Маанилүү</strong><p>Дедлайн жана шарттар өзгөрүшү мүмкүн. Arakettik арыздарды кабыл албайт жана катышууга кепилдик бербейт. Карточкадагы шилтеме программанын расмий булагына алып барат.</p>',footer:'© 2026 Arakettik — Кыргызстандын жаштары үчүн мүмкүнчүлүктөр платформасы',official:'Расмий баракча',source:'Булак',empty:'Бул суроо боюнча мүмкүнчүлүк табылган жок.',item:'мүмкүнчүлүк',items:'мүмкүнчүлүк'},
  en:{about:'About',events:'Events',organizations:'Organizations',knowledge:'Knowledge Hub',opportunities:'Opportunities',organizers:'For organizers',heroTitle:'Grants, scholarships and <span class="gradient-text">new opportunities</span>',heroText:'A selection of programmes relevant to citizens of Kyrgyzstan: education, exchanges, internships, volunteering and financial support.',sourceNote:'<strong>We do not mix everything together.</strong><span>The database includes programmes with an official source or verified programme page. Always check the conditions on the organiser’s website before applying.</span>',findTitle:'Find an opportunity <span class="gradient-text">for you</span>',findText:'Filter by type, level and application status.',search:'Search by title, country or field...',all:'All',scholarships:'Scholarships',exchanges:'Exchanges',internships:'Internships',volunteering:'Volunteering',disclaimer:'<strong>Important</strong><p>Deadlines and conditions may change. Arakettik does not accept applications and cannot guarantee participation. Each card links to the programme’s official source.</p>',footer:'© 2026 Arakettik — a platform of opportunities for young people in Kyrgyzstan',official:'Official page',source:'Source',empty:'No opportunities match your search.',item:'opportunity',items:'opportunities'}
};
const languageOrder=['ru','kg','en'];
let currentLanguage=localStorage.getItem('arakettikLanguage')||'ru';
const t=(key)=>translations[currentLanguage]?.[key]||translations.ru[key]||key;
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function render(){
  const q=(search.value||'').trim().toLowerCase();
  const items=opportunities.filter(o=>{
    const filterOk=activeFilter==='all'||o.category===activeFilter;
    const text=[o.title,o.type,o.country,o.level,o.eligibility,o.desc].join(' ').toLowerCase();
    return filterOk&&(!q||text.includes(q));
  });
  count.textContent=`${items.length} ${items.length===1?t('item'):t('items')}`;
  grid.innerHTML=items.length?items.map(o=>`<article class="opp-card">
    <div class="opp-top"><div class="opp-icon"><i class="fa-solid ${esc(o.icon)}"></i></div><span class="opp-status">${esc(o.status)}</span></div>
    <div class="opp-type">${esc(o.type)} · ${esc(o.country)}</div>
    <h3>${esc(o.title)}</h3>
    <p class="opp-desc">${esc(o.desc)}</p>
    <div class="opp-meta">
      <div><i class="fa-solid fa-user-graduate"></i><span>${esc(o.level)}</span></div>
      <div><i class="fa-solid fa-user-check"></i><span>${esc(o.eligibility)}</span></div>
      <div class="opp-deadline"><i class="fa-regular fa-calendar"></i><span>${esc(o.deadline)}</span></div>
    </div>
    <div class="opp-funding"><i class="fa-solid fa-wallet"></i> ${esc(o.funding)}</div>
    <div class="opp-actions"><a class="btn btn-primary" href="${o.url}" target="_blank" rel="noopener noreferrer">${t('official')}</a></div>
    <div class="opp-source">${t('source')}: ${esc(o.source)} · 29.08.2026</div>
  </article>`).join(''):`<div class="opp-empty">${t('empty')}</div>`;
}
document.querySelectorAll('.opp-filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.opp-filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;render();}));
search.addEventListener('input',render);
function applyLanguage(lang){
  currentLanguage=lang;
  const dict=translations[lang]||translations.ru;
  document.documentElement.lang=lang==='kg'?'ky':lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{if(dict[el.dataset.i18n]!==undefined)el.innerHTML=dict[el.dataset.i18n];});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{if(dict[el.dataset.i18nPlaceholder]!==undefined)el.placeholder=dict[el.dataset.i18nPlaceholder];});
  const button=document.getElementById('languageToggle'); if(button) button.textContent=lang==='ru'?'RU':lang==='kg'?'KG':'EN';
  localStorage.setItem('arakettikLanguage',lang); render();
}
const languageToggle=document.getElementById('languageToggle');
languageToggle?.addEventListener('click',()=>applyLanguage(languageOrder[(languageOrder.indexOf(currentLanguage)+1)%languageOrder.length]));
const themeToggle=document.getElementById('themeToggle');
const theme=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',theme);themeToggle.querySelector('i').className=theme==='dark'?'fa-solid fa-sun':'fa-solid fa-moon';
themeToggle.addEventListener('click',()=>{const next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);localStorage.setItem('theme',next);themeToggle.querySelector('i').className=next==='dark'?'fa-solid fa-sun':'fa-solid fa-moon';});
const menuToggle=document.getElementById('menuToggle');const menu=document.getElementById('menu');
menuToggle.addEventListener('click',()=>{menu.classList.toggle('open');menuToggle.querySelector('i').className=menu.classList.contains('open')?'fa-solid fa-xmark':'fa-solid fa-bars';});
document.querySelectorAll('#menu .nav-link').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
applyLanguage(currentLanguage);
