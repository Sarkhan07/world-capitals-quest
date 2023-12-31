const worldCountries = {
    'Афганистан (континент: Азия)': 'Кабул',
    'Албания (континент: Европа)': 'Тирана',
    'Алжир (континент: Африка)': 'Алжир',
    'Андорра (континент: Европа)': 'Андорра-ла-Велья',
    'Ангола (континент: Африка)': 'Луанда',
    'Антигуа и Барбуда (континент: Северная Америка)': 'Сент-Джонс',
    'Аргентина (континент: Южная Америка)': 'Буэнос-Айрес',
    'Армения (континент: Азия)': 'Ереван',
    'Австралия (континент: Австралия)': 'Канберра',
    'Австрия (континент: Европа)': 'Вена',
    'Азербайджан (континент: Азия)': 'Баку',
    'Багамы (континент: Северная Америка)': 'Нассау',
    'Бахрейн (континент: Азия)': 'Манама',
    'Бангладеш (континент: Азия)': 'Дакка',
    'Барбадос (континент: Северная Америка)': 'Бриджтаун',
    'Беларусь (континент: Европа)': 'Минск',
    'Бельгия (континент: Европа)': 'Брюссель',
    'Белиз (континент: Северная Америка)': 'Бельмопан',
    'Бенин (континент: Африка)': 'Порто-Ново',
    'Бутан (континент: Азия)': 'Тхимпху',
    'Боливия (континент: Южная Америка)': 'Сукре',
    'Босния и Герцеговина (континент: Европа)': 'Сараево',
    'Ботсвана (континент: Африка)': 'Габороне',
    'Бразилия (континент: Южная Америка)': 'Бразилиа',
    'Бруней (континент: Азия)': 'Бандар-Сери-Бегаван',
    'Болгария (континент: Европа)': 'София',
    'Буркина-Фасо (континент: Африка)': 'Уагадугу',
    'Бурунди (континент: Африка)': 'Гитега',
    'Камбоджа (континент: Азия)': 'Пномпень',
    'Камерун (континент: Африка)': 'Яунде',
    'Канада (континент: Северная Америка)': 'Оттава',
    'Кабо-Верде (континент: Африка)': 'Прая',
    'Центральноафриканская Республика (континент: Африка)': 'Банги',
    'Чад (континент: Африка)': 'Нджамена',
    'Чили (континент: Южная Америка)': 'Сантьяго',
    'Китай (континент: Азия)': 'Пекин',
    'Колумбия (континент: Южная Америка)': 'Богота',
    'Коморы (континент: Африка)': 'Морони',
    'Коста-Рика (континент: Северная Америка)': 'Сан-Хосе',
    'Хорватия (континент: Европа)': 'Загреб',
    'Куба (континент: Северная Америка)': 'Гавана',
    'Кипр (континент: Европа)': 'Никосия',
    'Чехия (континент: Европа)': 'Прага',
    'Демократическая Республика Конго (континент: Африка)': 'Киншаса',
    'Дания (континент: Европа)': 'Копенгаген',
    'Джибути (континент: Африка)': 'Джибути',
    'Доминика (континент: Северная Америка)': 'Розо',
    'Доминиканская Республика (континент: Северная Америка)': 'Санто-Доминго',
    'Восточный Тимор (Тимор-Лешти) (континент: Азия)': 'Дили',
    'Эквадор (континент: Южная Америка)': 'Кито',
    'Египет (континент: Африка)': 'Каир',
    'Сальвадор (континент: Северная Америка)': 'Сан-Сальвадор',
    'Экваториальная Гвинея (континент: Африка)': 'Малабо',
    'Эритрея (континент: Африка)': 'Асмэра',
    'Эстония (континент: Европа)': 'Таллинн',
    'Эфиопия (континент: Африка)': 'Аддис-Абеба',
    'Фиджи (континент: Океания)': 'Сува',
    'Финляндия (континент: Европа)': 'Хельсинки',
    'Франция (континент: Европа)': 'Париж',
    'Габон (континент: Африка)': 'Либревиль',
    'Гамбия (континент: Африка)': 'Банжул',
    'Грузия (континент: Азия)': 'Тбилиси',
    'Германия (континент: Европа)': 'Берлин',
    'Гана (континент: Африка)': 'Аккра',
    'Греция (континент: Европа)': 'Афины',
    'Гренада (континент: Северная Америка)': 'Сент-Джорджес',
    'Гватемала (континент: Северная Америка)': 'Гватемала-Сити',
    'Гвинея (континент: Африка)': 'Конакри',
    'Гвинея-Бисау (континент: Африка)': 'Бисау',
    'Гайана (континент: Южная Америка)': 'Джорджтаун',
    'Гаити (континент: Северная Америка)': 'Порт-о-Пренс',
    'Гондурас (континент: Северная Америка)': 'Тегусигальпа',
    'Венгрия (континент: Европа)': 'Будапешт',
    'Исландия (континент: Европа)': 'Рейкьявик',
    'Индия (континент: Азия)': 'Нью-Дели',
    'Индонезия (континент: Азия)': 'Джакарта',
    'Иран (континент: Азия)': 'Тегеран',
    'Ирак (континент: Азия)': 'Багдад',
    'Ирландия (континент: Европа)': 'Дублин',
    'Израиль (континент: Азия)': 'Иерусалим',
    'Италия (континент: Европа)': 'Рим',
    "Кот-д'Ивуар (континент: Африка)": 'Ямусукро',
    'Ямайка (континент: Северная Америка)': 'Кингстон',
    'Япония (континент: Азия)': 'Токио',
    'Иордания (континент: Азия)': 'Амман',
    'Казахстан (континент: Азия)': 'Астана',
    'Кения (континент: Африка)': 'Найроби',
    'Кирибати (континент: Океания)': 'Южная Тарава',
    'Косово (континент: Европа)': 'Приштина',
    'Кувейт (континент: Азия)': 'Кувейт',
    'Киргизия (континент: Азия)': 'Бишкек',
    'Лаос (континент: Азия)': 'Вьентьян',
    'Латвия (континент: Европа)': 'Рига',
    'Ливан (континент: Азия)': 'Бейрут',
    'Лесото (континент: Африка)': 'Масеру',
    'Либерия (континент: Африка)': 'Монровия',
    'Ливия (континент: Африка)': 'Триполи',
    'Лихтенштейн (континент: Европа)': 'Вадуц',
    'Литва (континент: Европа)': 'Вильнюс',
    'Люксембург (континент: Европа)': 'Люксембург',
    'Македония (континент: Европа)': 'Скопье',
    'Мадагаскар (континент: Африка)': 'Антананариву',
    'Малави (континент: Африка)': 'Лилонгве',
    'Малайзия (континент: Азия)': 'Куала-Лумпур',
    'Мальдивы (континент: Азия)': 'Мале',
    'Мали (континент: Африка)': 'Бамако',
    'Мальта (континент: Европа)': 'Валлетта',
    'Маршалловы Острова (континент: Океания)': 'Маджуро',
    'Мавритания (континент: Африка)': 'Нуакшот',
    'Маврикий (континент: Африка)': 'Порт-Луи',
    'Мексика (континент: Северная Америка)': 'Мехико',
    'Микронезия (континент: Океания)': 'Паликир',
    'Молдова (континент: Европа)': 'Кишинев',
    'Монако (континент: Европа)': 'Монако',
    'Монголия (континент: Азия)': 'Улан-Батор',
    'Черногория (континент: Европа)': 'Подгорица',
    'Марокко (континент: Африка)': 'Рабат',
    'Мозамбик (континент: Африка)': 'Мапуту',
    'Мьянма (континент: Азия)': 'Нейпьидо',
    'Намибия (континент: Африка)': 'Виндхук',
    'Науру (континент: Океания)': 'Ярен',
    'Непал (континент: Азия)': 'Катманду',
    'Нидерланды (континент: Европа)': 'Амстердам',
    'Новая Зеландия (континент: Океания)': 'Веллингтон',
    'Никарагуа (континент: Северная Америка)': 'Манагуа',
    'Нигер (континент: Африка)': 'Ниамей',
    'Нигерия (континент: Африка)': 'Абуджа',
    'Северная Корея (континент: Азия)': 'Пхеньян',
    'Норвегия (континент: Европа)': 'Осло',
    'Оман (континент: Азия)': 'Маскат',
    'Пакистан (континент: Азия)': 'Исламабад',
    'Палау (континент: Океания)': 'Нгерулмуд',
    'Панама (континент: Северная Америка)': 'Панама',
    'Папуа-Новая Гвинея (континент: Океания)': 'Порт-Морсби',
    'Парагвай (континент: Южная Америка)': 'Асунсьон',
    'Перу (континент: Южная Америка)': 'Лима',
    'Филиппины (континент: Азия)': 'Манила',
    'Польша (континент: Европа)': 'Варшава',
    'Португалия (континент: Европа)': 'Лиссабон',
    'Катар (континент: Азия)': 'Доха',
    'Республика Конго (континент: Африка)': 'Браззавиль',
    'Румыния (континент: Европа)': 'Бухарест',
    'Россия (континент: Европа)': 'Москва',
    'Руанда (континент: Африка)': 'Кигали',
    'Сент-Китс и Невис (континент: Северная Америка)': 'Бастер',
    'Сент-Люсия (континент: Северная Америка)': 'Кастри',
    'Сент-Винсент и Гренадины (континент: Северная Америка)': 'Кингстаун',
    'Самоа (континент: Океания)': 'Апиа',
    'Сан-Марино (континент: Европа)': 'Сан-Марино',
    'Сан-Томе и Принсипи (континент: Африка)': 'Сан-Томе',
    'Саудовская Аравия (континент: Азия)': 'Эр-Рияд',
    'Сенегал (континент: Африка)': 'Дакар',
    'Сербия (континент: Европа)': 'Белград',
    'Сейшелы (континент: Африка)': 'Виктория',
    'Сьерра-Леоне (континент: Африка)': 'Фритаун',
    'Сингапур (континент: Азия)': 'Сингапур',
    'Словакия (континент: Европа)': 'Братислава',
    'Словения (континент: Европа)': 'Любляна',
    'Соломоновы Острова (континент: Океания)': 'Хониара',
    'Сомали (континент: Африка)': 'Могадишо',
    'Южная Корея (континент: Азия)': 'Сеул',
    'Южный Судан (континент: Африка)': 'Джуба',
    'Испания (континент: Европа)': 'Мадрид',
    'Шри-Ланка (континент: Азия)': 'Коломбо',
    'Судан (континент: Африка)': 'Хартум',
    'Суринам (континент: Южная Америка)': 'Парамарибо',
    'Швеция (континент: Европа)': 'Стокгольм',
    'Швейцария (континент: Европа)': 'Берн',
    'Сирия (континент: Азия)': 'Дамаск',
    'Таджикистан (континент: Азия)': 'Душанбе',
    'Танзания (континент: Африка)': 'Додома',
    'Таиланд (континент: Азия)': 'Бангкок',
    'Того (континент: Африка)': 'Ломе',
    'Тонга (континент: Океания)': 'Нукуалофа',
    'Тринидад и Тобаго (континент: Северная Америка)': 'Порт-оф-Спейн',
    'Тунис (континент: Африка)': 'Тунис',
    'Турция (континент: Азия)': 'Анкара',
    'Туркменистан (континент: Азия)': 'Ашхабад',
    'Тувалу (континент: Океания)': 'Фунафути',
    'Уганда (континент: Африка)': 'Кампала',
    'Украина (континент: Европа)': 'Киев',
    'Объединенные Арабские Эмираты (континент: Азия)': 'Абу-Даби',
    'Соединенное Королевство (Великобритания) (континент: Европа)': 'Лондон',
    'Соединенные Штаты Америки (континент: Северная Америка)':
        'Вашингтон, округ Колумбия',
    'Уругвай (континент: Южная Америка)': 'Монтевидео',
    'Узбекистан (континент: Азия)': 'Ташкент',
    'Вануату (континент: Океания)': 'Порт-Вила',
    'Ватикан (континент: Европа)': 'Ватикан',
    'Венесуэла (континент: Южная Америка)': 'Каракас',
    'Вьетнам (континент: Азия)': 'Ханой',
    'Йемен (континент: Азия)': 'Сана',
    'Замбия (континент: Африка)': 'Лусака',
    'Зимбабве (континент: Африка)': 'Хараре',
};

let timeRemaining = 60;
let questionCount = 1;
let correctAnswers = 0;
let timerInterval;
let selectedContinent = '';
let usedCountries = [];

let newGameBtn = document.getElementById('newGameBtn');
document.getElementById('time').style.backgroundColor = 'transparent';
document.getElementById('result').style.backgroundColor = 'transparent';
document.getElementById('question').style.backgroundColor = 'transparent';

async function startNewGame() {
    const continentSelect = document.getElementById('continentSelect');
    selectedContinent = continentSelect.value;
    timeRemaining = 60;
    questionCount = 1;
    correctAnswers = 0;
    clearInterval(timerInterval);
    document.getElementById('time').innerText = '';
    document.getElementById('time').style.backgroundColor =
        'rgba(5, 5, 5, 0.685)';
    document.getElementById('result').style.backgroundColor =
        ' rgba(0, 58, 5, 0.685)';
    document.getElementById('question').style.backgroundColor =
        'rgba(5, 5, 5, 0.685)';

    usedCountries = [];
    await startGame();
}

function startGame() {
    if (questionCount === 1) {
        timerInterval = setInterval(() => {
            timeRemaining--;
            document.getElementById(
                'time'
            ).innerText = `Общее время выполнения тестов 60 секунд. Тест выполнен за: ${
                60 - timeRemaining
            } секунд`;
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                displayResult();
                const buttons = document.querySelectorAll('#options button');
                buttons.forEach((button) => {
                    button.disabled = true;
                });
            }
        }, 1000);
    }

    if (questionCount <= 10) {
        const { country, capital } =
            getRandomCountryForContinent(selectedContinent);
        const options = [capital];

        while (options.length < 5) {
            const randomCountry =
                getRandomCountryForContinent(selectedContinent);

            if (!options.includes(randomCountry.capital)) {
                options.push(randomCountry.capital);
            }
        }

        shuffleArray(options);
        displayQuestion({ country, capital }, options);
    } else {
        displayResult();
        clearInterval(timerInterval);
        newGameBtn.disabled = false;
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function getRandomCountryForContinent(continent) {
    const availableCountries = Object.keys(worldCountries).filter(
        (country) =>
            worldCountries[country] &&
            country.includes(continent) &&
            !usedCountries.includes(country)
    );

    if (availableCountries.length === 0) {
        usedCountries = [];
        return getRandomCountryForContinent(continent);
    }

    let randomIndex = Math.floor(Math.random() * availableCountries.length);
    const randomCountryKey = availableCountries[randomIndex];
    usedCountries.push(randomCountryKey);

    const capital = worldCountries[randomCountryKey];

    return { country: randomCountryKey, capital: capital };
}

function displayQuestion(question, options) {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const result = document.getElementById('result');

    questionElement.textContent = `Столица страны ${question.country}:`;
    optionsContainer.innerHTML = '';

    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1}. ${option}`;
        button.addEventListener('click', () =>
            checkAnswer(
                index + 1,
                options.indexOf(question.capital),
                button,
                options
            )
        );
        optionsContainer.appendChild(button);
    });

    questionCount++;
    result.textContent = `Вопрос ${questionCount - 1} из 10`;
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkAnswer(selectedIndex, correctCapitalIndex, selectedButton) {
    if (questionCount < 12) {
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach((button, index) => {
            if (index === correctCapitalIndex) {
                button.style.backgroundColor = 'green';
                button.style.color = 'white';
            }
        });

        if (selectedIndex === correctCapitalIndex + 1) {
            selectedButton.style.border = '5px solid green';
            correctAnswers++;
        } else {
            selectedButton.style.backgroundColor = 'red';
            selectedButton.style.color = 'white';
        }

        await delay(500);
        startGame();
    }
}

function displayResult() {
    const result = document.getElementById('result');
    result.textContent = `Игра закончена. Правильных ответов: ${correctAnswers} из 10`;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
