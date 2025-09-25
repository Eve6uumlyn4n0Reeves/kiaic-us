export const languages = {
  en: "English",
  ky: "Кыргызча",
  zh: "中文",
  ru: "Русский",
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "en"

// Translation keys for the website
export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.academics": "Academics",
    "nav.admissions": "Admissions",
    "nav.research": "Research",
    "nav.news": "News",
    "nav.contact": "Contact",

    // University Names
    "university.name": "Kyrgyz Institute of Advanced AI and Cybernetics",
    "university.acronym": "KIAIC",

    // Homepage
    "hero.title": "Pioneering the Future of Artificial Intelligence",
    "hero.subtitle": "Leading Central Asia in AI research, cybernetics, and emerging technologies",
    "hero.cta.apply": "Apply Now",
    "hero.cta.explore": "Explore Programs",

    "mission.title": "Our Mission",
    "mission.text":
      "To advance human knowledge and capability through cutting-edge research in artificial intelligence, cybernetics, and emerging technologies while fostering innovation and ethical leadership.",

    "stats.students": "Students",
    "stats.faculty": "Faculty Members",
    "stats.programs": "Academic Programs",
    "stats.research": "Research Centers",

    // Programs
    "programs.title": "Academic Programs",
    "programs.undergraduate": "Undergraduate",
    "programs.graduate": "Graduate",
    "programs.professional": "Professional",

    // News
    "news.title": "Latest News",
    "news.filter.all": "All News",
    "news.filter.research": "Research",
    "news.filter.academic": "Academic",
    "news.filter.events": "Events",

    // Admissions
    "admissions.title": "Admissions",
    "admissions.undergraduate": "Undergraduate Admissions",
    "admissions.graduate": "Graduate Admissions",
    "admissions.requirements": "Requirements",
    "admissions.deadlines": "Application Deadlines",

    // Footer
    "footer.contact": "Contact Information",
    "footer.address": "Bishkek, Kyrgyzstan",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.follow": "Follow Us",
    "footer.copyright": "© 2025 Kyrgyz Institute of Advanced AI and Cybernetics. All rights reserved.",

    // Common
    "common.learn_more": "Learn More",
    "common.apply_now": "Apply Now",
    "common.read_more": "Read More",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.loading": "Loading...",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.all": "All",
  },
  ky: {
    // Navigation
    "nav.home": "Башкы бет",
    "nav.about": "Биз жөнүндө",
    "nav.academics": "Академиялык",
    "nav.admissions": "Кабыл алуу",
    "nav.research": "Изилдөө",
    "nav.news": "Жаңылыктар",
    "nav.contact": "Байланыш",

    // University Names
    "university.name": "Кыргыз Жасалма Интеллект жана Кибернетика Жогорку Институту",
    "university.acronym": "КЖИКЖИ",

    // Homepage
    "hero.title": "Жасалма Интеллекттин Келечегин Алдыга жылдыруу",
    "hero.subtitle": "Борбордук Азияда ЖИ изилдөөлөрү, кибернетика жана жаңы технологиялар боюнча лидер",
    "hero.cta.apply": "Азыр арыз бер",
    "hero.cta.explore": "Программаларды изилде",

    "mission.title": "Биздин миссия",
    "mission.text":
      "Жасалма интеллект, кибернетика жана жаңы технологиялар тармагында алдыңкы изилдөөлөр аркылуу адамзаттын билимин жана мүмкүнчүлүктөрүн өнүктүрүү, ошондой эле инновацияларды жана этикалык лидерликти колдоо.",

    "stats.students": "Студенттер",
    "stats.faculty": "Факультет мүчөлөрү",
    "stats.programs": "Академиялык программалар",
    "stats.research": "Изилдөө борборлору",

    // Programs
    "programs.title": "Академиялык программалар",
    "programs.undergraduate": "Бакалавриат",
    "programs.graduate": "Магистратура",
    "programs.professional": "Кесиптик",

    // News
    "news.title": "Акыркы жаңылыктар",
    "news.filter.all": "Бардык жаңылыктар",
    "news.filter.research": "Изилдөө",
    "news.filter.academic": "Академиялык",
    "news.filter.events": "Иш-чаралар",

    // Admissions
    "admissions.title": "Кабыл алуу",
    "admissions.undergraduate": "Бакалавриатка кабыл алуу",
    "admissions.graduate": "Магистратурага кабыл алуу",
    "admissions.requirements": "Талаптар",
    "admissions.deadlines": "Арыз берүү мөөнөттөрү",

    // Footer
    "footer.contact": "Байланыш маалыматы",
    "footer.address": "Бишкек, Кыргызстан",
    "footer.phone": "Телефон",
    "footer.email": "Электрондук почта",
    "footer.follow": "Бизди ээрчи",
    "footer.copyright": "© 2025 Кыргыз Жасалма Интеллект жана Кибернетика Жогорку Институту. Бардык укуктар корголгон.",

    // Common
    "common.learn_more": "Көбүрөөк үйрөн",
    "common.apply_now": "Азыр арыз бер",
    "common.read_more": "Көбүрөөк окуу",
    "common.back": "Артка",
    "common.next": "Кийинки",
    "common.previous": "Мурунку",
    "common.loading": "Жүктөлүүдө...",
    "common.search": "Издөө",
    "common.filter": "Чыпкала",
    "common.all": "Баары",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.academics": "学术项目",
    "nav.admissions": "招生信息",
    "nav.research": "研究",
    "nav.news": "新闻",
    "nav.contact": "联系我们",

    // University Names
    "university.name": "吉尔吉斯斯坦高等人工智能与控制论学院",
    "university.acronym": "KIAIC",

    // Homepage
    "hero.title": "开创人工智能的未来",
    "hero.subtitle": "引领中亚地区人工智能研究、控制论和新兴技术发展",
    "hero.cta.apply": "立即申请",
    "hero.cta.explore": "探索项目",

    "mission.title": "我们的使命",
    "mission.text":
      "通过人工智能、控制论和新兴技术领域的前沿研究，推进人类知识和能力的发展，同时培养创新精神和道德领导力。",

    "stats.students": "学生",
    "stats.faculty": "教职员工",
    "stats.programs": "学术项目",
    "stats.research": "研究中心",

    // Programs
    "programs.title": "学术项目",
    "programs.undergraduate": "本科",
    "programs.graduate": "研究生",
    "programs.professional": "专业发展",

    // News
    "news.title": "最新新闻",
    "news.filter.all": "所有新闻",
    "news.filter.research": "研究",
    "news.filter.academic": "学术",
    "news.filter.events": "活动",

    // Admissions
    "admissions.title": "招生信息",
    "admissions.undergraduate": "本科招生",
    "admissions.graduate": "研究生招生",
    "admissions.requirements": "申请要求",
    "admissions.deadlines": "申请截止日期",

    // Footer
    "footer.contact": "联系信息",
    "footer.address": "吉尔吉斯斯坦比什凯克",
    "footer.phone": "电话",
    "footer.email": "邮箱",
    "footer.follow": "关注我们",
    "footer.copyright": "© 2025 吉尔吉斯斯坦高等人工智能与控制论学院。保留所有权利。",

    // Common
    "common.learn_more": "了解更多",
    "common.apply_now": "立即申请",
    "common.read_more": "阅读更多",
    "common.back": "返回",
    "common.next": "下一个",
    "common.previous": "上一个",
    "common.loading": "加载中...",
    "common.search": "搜索",
    "common.filter": "筛选",
    "common.all": "全部",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.academics": "Академические программы",
    "nav.admissions": "Поступление",
    "nav.research": "Исследования",
    "nav.news": "Новости",
    "nav.contact": "Контакты",

    // University Names
    "university.name": "Кыргызский Высший Институт Искусственного Интеллекта и Кибернетики",
    "university.acronym": "КВИИИК",

    // Homepage
    "hero.title": "Пионеры будущего искусственного интеллекта",
    "hero.subtitle": "Лидер Центральной Азии в исследованиях ИИ, кибернетики и новых технологий",
    "hero.cta.apply": "Подать заявку",
    "hero.cta.explore": "Изучить программы",

    "mission.title": "Наша миссия",
    "mission.text":
      "Продвигать человеческие знания и возможности через передовые исследования в области искусственного интеллекта, кибернетики и новых технологий, способствуя инновациям и этическому лидерству.",

    "stats.students": "Студенты",
    "stats.faculty": "Преподаватели",
    "stats.programs": "Академические программы",
    "stats.research": "Исследовательские центры",

    // Programs
    "programs.title": "Академические программы",
    "programs.undergraduate": "Бакалавриат",
    "programs.graduate": "Магистратура",
    "programs.professional": "Профессиональное развитие",

    // News
    "news.title": "Последние новости",
    "news.filter.all": "Все новости",
    "news.filter.research": "Исследования",
    "news.filter.academic": "Академические",
    "news.filter.events": "События",

    // Admissions
    "admissions.title": "Поступление",
    "admissions.undergraduate": "Поступление на бакалавриат",
    "admissions.graduate": "Поступление в магистратуру",
    "admissions.requirements": "Требования",
    "admissions.deadlines": "Сроки подачи заявок",

    // Footer
    "footer.contact": "Контактная информация",
    "footer.address": "Бишкек, Кыргызстан",
    "footer.phone": "Телефон",
    "footer.email": "Электронная почта",
    "footer.follow": "Следите за нами",
    "footer.copyright":
      "© 2025 Кыргызский Высший Институт Искусственного Интеллекта и Кибернетики. Все права защищены.",

    // Common
    "common.learn_more": "Узнать больше",
    "common.apply_now": "Подать заявку",
    "common.read_more": "Читать далее",
    "common.back": "Назад",
    "common.next": "Далее",
    "common.previous": "Предыдущий",
    "common.loading": "Загрузка...",
    "common.search": "Поиск",
    "common.filter": "Фильтр",
    "common.all": "Все",
  },
}

export function getTranslation(key: string, language: Language = defaultLanguage): string {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
