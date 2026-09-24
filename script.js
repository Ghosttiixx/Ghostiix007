
const i18n = {
    ua: {
        nav_about: "Про мене",
        nav_stack: "Стек",
        nav_solutions: "Рішення",
        nav_contact: "Контакти",
        hero_badge: "Відкритий до нових проєктів та фрилансу",
        hero_title: "Розробка веб-сайтів, API та інструментів автоматизації",
        hero_desc: "Створюю чисті веб-інтерфейси, парсери на Python, Telegram-ботів та бэкенд-сервіси на C# / ASP.NET.",
        btn_discuss: "Зв'язатися",
        stack_title: "Мій технологічний стек",
        stack_frontend_desc: "Адаптивна верстка, швидкі веб-інтерфейси, оптимізація швидкості завантаження.",
        stack_backend_desc: "Проєктування REST API, обробка даних, надійна архітектура бэкенду.",
        stack_auto_desc: "Скрипти для парсингу даних, збір інформації, боти та системні утиліти.",
        solutions_title: "Як я можу допомогти вашому бізнесу",
        sol_1_desc: "Перенесення макетів з Figma в чистий, адаптивний код на HTML/CSS/JS або React, який відмінно працює на мобільних пристроях.",
        sol_2_desc: "Автоматизований збір даних з будь-яких сайтів чи маркетплейсів із прямим експортом у Excel, JSON, CSV або базу даних.",
        sol_3_desc: "Створення ботів для генерації лідів, сповіщень та взаємодії з клієнтами. Інтеграція сторонніх API.",
        sol_4_desc: "Виправлення помилок інтерфейсу (UI), оновлення скриптів на Python/JS та покращення загальної продуктивності сайту.",
        contact_title: "Є проєкт на прикметі?",
        contact_desc: "Напишіть мені в Telegram або Instagram, щоб обговорити завдання, терміни та вартість.",
        btn_tg: "Написати в Telegram"
    },
    en: {
        nav_about: "About",
        nav_stack: "Stack",
        nav_solutions: "Solutions",
        nav_contact: "Contact",
        hero_badge: "Available for new projects & freelance",
        hero_title: "Building Fast Websites, APIs & Automation Tools",
        hero_desc: "Developing clean web interfaces, Python scrapers, Telegram bots, and backend services with C# / ASP.NET.",
        btn_discuss: "Get in Touch",
        stack_title: "My Tech Stack",
        stack_frontend_desc: "Responsive layout, fast web interfaces, loading speed optimization.",
        stack_backend_desc: "REST API design, data processing, reliable backend architecture.",
        stack_auto_desc: "Web scraping scripts, data extraction, bots, and system utilities.",
        solutions_title: "How I Can Help Your Business",
        sol_1_desc: "Converting Figma designs into clean, responsive HTML/CSS/JS or React code that looks great on mobile devices.",
        sol_2_desc: "Automated data extraction from any website or marketplace, exporting directly to Excel, JSON, CSV, or DB.",
        sol_3_desc: "Building bots for lead generation, notifications, and client interaction. Connecting third-party APIs.",
        sol_4_desc: "Fixing UI bugs, updating Python/JS scripts, and improving overall website performance.",
        contact_title: "Have a Project in Mind?",
        contact_desc: "Message me on Telegram or Instagram to discuss scope, timeline, and pricing.",
        btn_tg: "Message on Telegram"
    },
    ru: {
        nav_about: "О себе",
        nav_stack: "Стек",
        nav_solutions: "Решения",
        nav_contact: "Контакты",
        hero_badge: "Открыт для новых проектов и фриланса",
        hero_title: "Разработка веб-сайтов, API и инструментов автоматизации",
        hero_desc: "Создаю чистые веб-интерфейсы, парсеры на Python, Telegram-ботов и бэкенд-сервисы на C# / ASP.NET.",
        btn_discuss: "Связаться",
        stack_title: "Мой технологический стек",
        stack_frontend_desc: "Адаптивная верстка, быстрые веб-интерфейсы, оптимизация скорости загрузки.",
        stack_backend_desc: "Проектирование REST API, обработка данных, надежная архитектура бэкенда.",
        stack_auto_desc: "Скрипты для парсинга данных, сбор информации, боты и системные утилиты.",
        solutions_title: "Как я могу помочь вашему бизнесу",
        sol_1_desc: "Перенос макетов из Figma в чистый, адаптивный код на HTML/CSS/JS или React, который отлично работает на мобильных устройствах.",
        sol_2_desc: "Автоматизированный сбор данных с любых сайтов или маркетплейсов с прямым экспортом в Excel, JSON, CSV или базу данных.",
        sol_3_desc: "Создание ботов для генерации лидов, уведомлений и взаимодействия с клиентами. Интеграция сторонних API.",
        sol_4_desc: "Исправление ошибок интерфейса (UI), обновление скриптов на Python/JS и повышение общей производительности сайта.",
        contact_title: "Есть проект на примете?",
        contact_desc: "Напишите мне в Telegram или Instagram, чтобы обсудить задачу, сроки и стоимость.",
        btn_tg: "Написать в Telegram"
    }
};


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


document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'ua';
    setLanguage(savedLang);
});