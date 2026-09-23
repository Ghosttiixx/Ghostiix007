// Переводы
const i18n = {
    ua: {
        nav_about: "Про мене",
        nav_skills: "Стек",
        nav_services: "Послуги",
        nav_contact: "Контакти",
        hero_status: "Готовий до нових проєктів & фрилансу",
        hero_title: "Створюю швидкі веб-сайти, API та інструменти автоматизації",
        hero_sub: "Розробка чистих веб-інтерфейсів, розробка парсерів даних на Python, Telegram-ботів та бекенд-сервісів на C# / ASP.NET.",
        btn_primary: "Написати мені",
        tag_stack: "Технології",
        stack_h2: "Мій інструментарій",
        stack_frontend: "Адаптивна верстка, швидкі веб-інтерфейси, оптимізація швидкості завантаження.",
        stack_backend: "Проєктування REST API, обробка даних, побудова надійної архітектури.",
        stack_auto: "Скрипти збору даних з сайтів, парсери, боти та системні утиліти.",
        tag_services: "Послуги",
        services_h2: "Чим можу допомогти вашому бізнесу",
        srv_1_h3: "Веб-верстка та UI-розробка",
        srv_1_p: "Перенесення макетів з Figma у чистий, адаптивний HTML/CSS/JS або React-код. Сайт буде чудово виглядати на смартфонах та планшетах.",
        srv_2_h3: "Парсинг даних та Автоматизація",
        srv_2_p: "Автоматичний збір інформації з будь-яких сайтів чи маркетплейсів. Вигрузка результатів у Excel, JSON, CSV або базу даних.",
        srv_3_h3: "Telegram-боти та Інтеграція API",
        srv_3_p: "Розробка ботів для прийому заявок, сповіщень чи автоматизації роботи з клієнтами. Связка сайтів зі сторонніми сервісами.",
        srv_4_h3: "Доопрацювання та Виправлення багів",
        srv_4_p: "Усунення помилок у верстці, виправлення скриптів на JavaScript/Python, оптимізація швидкості роботи існуючого сайту.",
        contact_h2: "Потрібно виконати задачу?",
        contact_sub: "Напишіть мені в Telegram або Instagram — обговоримо деталі, терміни та вартість.",
        btn_tg: "Написати в Telegram"
    },
    en: {
        nav_about: "About",
        nav_skills: "Stack",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_status: "Available for new projects & freelance",
        hero_title: "Building Fast Websites, APIs & Automation Tools",
        hero_sub: "Developing clean web interfaces, Python scrapers, Telegram bots, and backend services with C# / ASP.NET.",
        btn_primary: "Get in Touch",
        tag_stack: "Technologies",
        stack_h2: "My Tech Stack",
        stack_frontend: "Responsive layout, fast web interfaces, loading speed optimization.",
        stack_backend: "REST API design, data processing, reliable backend architecture.",
        stack_auto: "Web scraping scripts, data extraction, bots, and system utilities.",
        tag_services: "Services",
        services_h2: "How I Can Help Your Business",
        srv_1_h3: "Web Development & UI",
        srv_1_p: "Converting Figma designs into clean, responsive HTML/CSS/JS or React code that looks great on mobile devices.",
        srv_2_h3: "Data Scraping & Automation",
        srv_2_p: "Automated data extraction from any website or marketplace, exporting directly to Excel, JSON, CSV, or DB.",
        srv_3_h3: "Telegram Bots & API Integration",
        srv_3_p: "Building bots for lead generation, notifications, and client interaction. Connecting third-party APIs.",
        srv_4_h3: "Bug Fixing & Code Optimization",
        srv_4_p: "Fixing UI bugs, updating Python/JS scripts, and improving overall website performance.",
        contact_h2: "Have a Project in Mind?",
        contact_sub: "Message me on Telegram or Instagram to discuss scope, timeline, and pricing.",
        btn_tg: "Message on Telegram"
    },
    ru: {
        nav_about: "О себе",
        nav_skills: "Стек",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        hero_status: "Готов к новым проектам & фрилансу",
        hero_title: "Создаю быстрые веб-сайты, API и инструменты автоматизации",
        hero_sub: "Разработка чистых веб-интерфейсов, парсеров данных на Python, Telegram-ботов и бэкенд-сервисов на C# / ASP.NET.",
        btn_primary: "Написать мне",
        tag_stack: "Технологии",
        stack_h2: "Мой инструментарий",
        stack_frontend: "Адаптивная верстка, быстрые веб-интерфейсы, оптимизация скорости загрузки.",
        stack_backend: "Проектирование REST API, обработка данных, построение надежной архитектуры.",
        stack_auto: "Скрипты сбора данных с сайтов, парсеры, боты и системные утилиты.",
        tag_services: "Услуги",
        services_h2: "Чем могу помочь вашему бизнесу",
        srv_1_h3: "Веб-верстка и UI-разработка",
        srv_1_p: "Перенос макетов из Figma в чистый, адаптивный HTML/CSS/JS или React-код. Сайт будет отлично выглядеть на смартфонах.",
        srv_2_h3: "Парсинг данных и Автоматизация",
        srv_2_p: "Автоматический сбор информации с любых сайтов или маркетплейсов. Выгрузка результатов в Excel, JSON, CSV или базу данных.",
        srv_3_h3: "Telegram-боты и Интеграция API",
        srv_3_p: "Разработка ботов для приёма заявок, уведомлений или автоматизации работы с клиентами. Связка сайтов со сторонними сервисами.",
        srv_4_h3: "Доработка и Исправление багов",
        srv_4_p: "Устранение ошибок в верстке, исправление скриптов на JavaScript/Python, оптимизация скорости работы существующего сайта.",
        contact_h2: "Нужно выполнить задачу?",
        contact_sub: "Напишите мне в Telegram или Instagram — обсудим детали, сроки и стоимость.",
        btn_tg: "Написать в Telegram"
    }
};

// Смена языка
function setLanguage(lang) {
    if (!i18n[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            element.textContent = i18n[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('preferred_lang', lang);
}

// Смена темы (Dark / Light)
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
    });
}

// Инициализация событий
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'ua';
    setLanguage(savedLang);
    initTheme();
});