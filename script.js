const i18n = {
    ua: {
        nav_about: "Про мене",
        nav_stack: "Стек",
        nav_solutions: "Рішення",
        nav_contact: "Контакти",
        hero_badge: "Відкритий до нових проєктів та співпраці",
        hero_title: "Розробка програмного забезпечення: Десктоп, Бекенд та Веб-рішення",
        hero_desc: "Я розробник з 5-річним досвідом, студент академії ІТ СТЕП. Створюю комплексне ПЗ: від десктопних додатків на C++/C# та алгоритмів до сучасних фулстек веб-платформ.",
        btn_discuss: "Зв'язатися",
        stack_title: "Мій технологічний стек",
        stack_desktop_desc: "Вирішення складних алгоритмічних задач, розробка багатопотокових утиліт під Windows та глибоке розуміння об'єктно-орієнтованого програмування.",
        stack_backend_desc: "Проєктування REST API, клієнт-серверної архітектури, управління базами даних та створення надійної серверної логіки.",
        stack_frontend_desc: "Адаптивна верстка, створення інтерактивних веб-інтерфейсів та сучасної архітектури фронтенду.",
        solutions_title: "Що я можу розробити",
        sol_1_desc: "Розробка багатопотокових Windows-додатків, інструментів для моніторингу системи та швидких локальних утиліт з використанням C# та WinForms.",
        sol_2_desc: "Проєктування надійної серверної логіки, розробка REST API на Node.js або ASP.NET Core MVC, а також безпечна інтеграція з базами даних.",
        sol_3_desc: "Вирішення складних обчислювальних задач, застосування глибоких концепцій ООП на C++ та Python, автоматизація обробки даних.",
        sol_4_desc: "Створення сучасних, адаптивних веб-сайтів та платформ з нуля, використовуючи React, HTML/CSS та повноцінні бекенд-рішення.",
        contact_title: "Є проєкт на прикметі?",
        contact_desc: "Напишіть мені в Telegram, Instagram або перегляньте мій код на GitHub, щоб обговорити завдання та терміни.",
        btn_tg: "Написати в Telegram"
    },
    en: {
        nav_about: "About",
        nav_stack: "Stack",
        nav_solutions: "Solutions",
        nav_contact: "Contact",
        hero_badge: "Available for new projects & freelance",
        hero_title: "Software Developer: Web, Desktop & Backend Solutions",
        hero_desc: "I am a developer studying at IT Step with 5 years of programming experience. I build complex software, from C++/C# desktop applications and algorithms to modern full-stack web platforms.",
        btn_discuss: "Get in Touch",
        stack_title: "My Tech Stack",
        stack_desktop_desc: "Complex algorithmic problem solving, multi-threaded Windows utilities, and deep object-oriented programming.",
        stack_backend_desc: "REST API design, client-server architecture, database management, and reliable backend logic.",
        stack_frontend_desc: "Responsive layouts, interactive web interfaces, and modern frontend architecture.",
        solutions_title: "What I Can Build For You",
        sol_1_desc: "Developing multi-threaded Windows applications, system monitoring tools, and fast local utilities using C# and WinForms.",
        sol_2_desc: "Designing robust server logic, REST APIs with Node.js or ASP.NET Core MVC, and setting up reliable database integrations.",
        sol_3_desc: "Solving complex computational tasks, applying deep OOP concepts in C++ and Python, and automating data processing.",
        sol_4_desc: "Building modern, responsive websites and web applications from scratch using React, HTML/CSS, and custom backend solutions.",
        contact_title: "Have a Project in Mind?",
        contact_desc: "Message me on Telegram, Instagram or check my code on GitHub to discuss scope, timeline, and pricing.",
        btn_tg: "Message on Telegram"
    },
    ru: {
        nav_about: "О себе",
        nav_stack: "Стек",
        nav_solutions: "Решения",
        nav_contact: "Контакты",
        hero_badge: "Открыт для новых проектов и фриланса",
        hero_title: "Разработка ПО: Десктоп, Бэкенд и Веб-решения",
        hero_desc: "Я разработчик с 5-летним опытом, студент академии ИТ СТЕП. Создаю комплексное ПО: от десктопных приложений на C++/C# и алгоритмов до современных фуллстек веб-платформ.",
        btn_discuss: "Связаться",
        stack_title: "Мой технологический стек",
        stack_desktop_desc: "Решение сложных алгоритмических задач, разработка многопоточных утилит под Windows и глубокое понимание объектно-ориентированного программирования.",
        stack_backend_desc: "Проектирование REST API, клиент-серверной архитектуры, управление базами данных и создание надежной серверной логики.",
        stack_frontend_desc: "Адаптивная верстка, создание интерактивных веб-интерфейсов и современной архитектуры фронтенда.",
        solutions_title: "Что я могу разработать",
        sol_1_desc: "Разработка многопоточных Windows-приложений, инструментов для мониторинга системы и быстрых локальных утилит с использованием C# и WinForms.",
        sol_2_desc: "Проектирование надежной серверной логики, разработка REST API на Node.js или ASP.NET Core MVC и безопасная интеграция с базами данных.",
        sol_3_desc: "Решение сложных вычислительных задач, применение глубоких концепций ООП на C++ и Python, автоматизация обработки данных.",
        sol_4_desc: "Создание современных, адаптивных веб-сайтов и платформ с нуля, используя React, HTML/CSS и полноценные бэкенд-решения.",
        contact_title: "Есть проект на примете?",
        contact_desc: "Напишите мне в Telegram, Instagram или посмотрите мой код на GitHub, чтобы обсудить задачу, сроки и стоимость.",
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

document.querySelectorAll('.lang-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        
        btn.parentElement.style.setProperty('--active-index', index);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'ua';
    setLanguage(savedLang);
    
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (activeBtn) {
        const index = Array.from(activeBtn.parentElement.children).indexOf(activeBtn);
        activeBtn.parentElement.style.setProperty('--active-index', index);
    }
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