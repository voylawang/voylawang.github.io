const languageSelect = document.getElementById('language-select');
const elementsToTranslate = document.querySelectorAll('[data-lang]');

const translations = {
    en: {
        discover: 'Discover Seed Paper',
        contact: 'Contact Us',
        custom: 'We offer custom seed paper products tailored to your needs. Let\'s create something beautiful together!'
    },
    ru: {
        discover: 'Откройте для себя Seed Paper',
        contact: 'Свяжитесь с нами',
        custom: 'Мы предлагаем индивидуальные изделия из семенной бумаги. Давайте создадим что-то красивое вместе!'
    },
    zh: {
        discover: '探索种子纸',
        contact: '联系我们',
        custom: '我们提供定制种子纸制品，满足您的需求。让我们一起创造美丽的东西！'
    },
    ja: {
        discover: 'シードペーパーを発見',
        contact: 'お問い合わせ',
        custom: '私たちは、お客様のニーズに合わせたカスタムシードペーパー製品を提供します。一緒に美しいものを作りましょう！'
    },
    ko: {
        discover: '씨드 페이퍼 발견',
        contact: '문의하기',
        custom: '우리는 고객의 요구에 맞춘 맞춤형 씨드 페이퍼 제품을 제공합니다. 함께 아름다운 것을 만들어 봅시다!'
    }
};

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
} 