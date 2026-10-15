// ==========================================================================
// 1. ДАННЫЕ (АКТУАЛЬНЫЕ ИВЕНТЫ ДЛЯ МОЛОДЕЖИ БИШКЕКА)
// Здесь вы можете легко добавлять, удалять или менять мероприятия.
// ==========================================================================
const organizationsData = [
    {"id":1,"region":"bishkek","regionName":"Бишкек","name":"AIESEC","description":"Международная молодежная организация, развивающая лидерство, профессиональные навыки и международный опыт через проекты и обмены.","details":"Международная молодежная организация, развивающая лидерство, профессиональные навыки и международный опыт через проекты и обмены.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Лидерство • Международные программы • Образование","contacts":"Контакты не опубликованы","address":"Бишкек","history":"1990-е","source":"https://volunteer.kg/2025/01/nabor-v-komandu-aiesec/"},
    {"id":2,"region":"bishkek","regionName":"Бишкек","name":"Национальное общество Красного Полумесяца Кыргызстана","description":"Гуманитарная организация, работающая во всех регионах Кыргызстана и привлекающая добровольцев к социальной, гуманитарной и чрезвычайной деятельности.","details":"Гуманитарная организация, работающая во всех регионах Кыргызстана и привлекающая добровольцев к социальной, гуманитарной и чрезвычайной деятельности.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • ЧС • Здравоохранение • Волонтерство","contacts":"+996 (312) 300-190 • info@redcrescent.kg","address":"г. Бишкек, бульвар Эркиндик, 10","history":"1926","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":3,"region":"bishkek","regionName":"Бишкек","name":"MoveGreen","description":"Молодежная экологическая инициатива, ориентированная на качество городской среды, экологическую культуру и участие граждан в решении экологических проблем.","details":"Молодежная экологическая инициатива, ориентированная на качество городской среды, экологическую культуру и участие граждан в решении экологических проблем.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Экология • Городская среда • Климат • Гражданская активность","contacts":"Контакты не опубликованы","address":"Бишкек","history":"","source":""},
    {"id":4,"region":"bishkek","regionName":"Бишкек","name":"Институт Развития Молодежи (YDI)","description":"Молодежная организация, создающая возможности для развития навыков, проектной работы и гражданской активности молодых людей.","details":"Молодежная организация, создающая возможности для развития навыков, проектной работы и гражданской активности молодых людей.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Проектная деятельность • PR/SMM • Гражданский активизм","contacts":"+996 (707) 894-669 — контакт, опубликованный в Volunteer.kg","address":"Бишкек","history":"","source":"https://volunteer.kg/2024/10/nabor-na-volontjorstvo-v-irm/"},
    {"id":5,"region":"bishkek","regionName":"Бишкек","name":"Y-PEER","description":"Молодежная сеть, связанная с неформальным образованием, равным обучением и развитием молодежных инициатив.","details":"Молодежная сеть, связанная с неформальным образованием, равным обучением и развитием молодежных инициатив.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Peer education • Образование • ЗОЖ","contacts":"Контакты не опубликованы","address":"Бишкек","history":"","source":""},
    {"id":6,"region":"chuy","regionName":"Чуйская область","name":"Американский Уголок (Кант)","description":"Молодежное образовательное пространство для языковой практики, встреч, дискуссий, цифровых и образовательных мероприятий.","details":"Молодежное образовательное пространство для языковой практики, встреч, дискуссий, цифровых и образовательных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежные события","contacts":"Контакты не опубликованы","address":"г. Кант","history":"","source":""},
    {"id":7,"region":"chuy","regionName":"Чуйская область","name":"Молодёжный центр (Токмок)","description":"Локальная площадка для молодежных инициатив, мероприятий, обучения и общественной активности в Токмоке.","details":"Локальная площадка для молодежных инициатив, мероприятий, обучения и общественной активности в Токмоке.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Образование • События • Гражданская активность","contacts":"Контакты не опубликованы","address":"г. Токмок","history":"","source":""},
    {"id":8,"region":"chuy","regionName":"Чуйская область","name":"Чуйский филиал Красного Полумесяца","description":"Региональное подразделение Национального общества Красного Полумесяца, вовлекающее добровольцев в гуманитарную и социальную работу.","details":"Региональное подразделение Национального общества Красного Полумесяца, вовлекающее добровольцев в гуманитарную и социальную работу.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Чуйская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":9,"region":"chuy","regionName":"Чуйская область","name":"Жаштар Вектору","description":"Молодежная инициатива в Кара-Балте, ориентированная на развитие активной молодежи и локальных общественных проектов.","details":"Молодежная инициатива в Кара-Балте, ориентированная на развитие активной молодежи и локальных общественных проектов.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Волонтерство • Проекты","contacts":"Контакты не опубликованы","address":"г. Кара-Балта","history":"","source":""},
    {"id":10,"region":"chuy","regionName":"Чуйская область","name":"Жашыл Аймак","description":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и вовлечением молодежи.","details":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и вовлечением молодежи.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Экология • Благоустройство • Волонтерство","contacts":"Контакты не опубликованы","address":"Чуйская область","history":"","source":""},
    {"id":11,"region":"osh","regionName":"Ош и Ошская область","name":"Youth of Osh","description":"Молодежная организация, развивающая лидерство, гражданское участие, образование, творчество и экономические возможности молодежи.","details":"Молодежная организация, развивающая лидерство, гражданское участие, образование, творчество и экономические возможности молодежи.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Лидерство • Образование • Права человека • Волонтерство","contacts":"+996 (553) 455-211 • osh.youth@gmail.com","address":"ул. Молдо-Нияз 67, г. Ош","history":"2008","source":"https://volunteer.kg/organization/obshhestvennoe-obedinenie-youth-of-osh/"},
    {"id":41,"region":"osh","regionName":"Ош и Ошская область","name":"Ошский областной филиал Красного Полумесяца Кыргызстана","description":"Региональный филиал Национального общества Красного Полумесяца Кыргызстана в Оше. Филиал участвует в гуманитарной помощи, социальной поддержке, подготовке к чрезвычайным ситуациям, обучении первой помощи и развитии волонтёрства.","activities":"Гуманитарная помощь • Социальная поддержка • Первая помощь • ЧС • Волонтерство • Работа с молодежью","contacts":"+996 (3222) 22815 • south@redcrescent.kg","address":"г. Ош, ул. Баялинова, 3","history":"Филиал Национального общества Красного Полумесяца Кыргызстана","website":"https://redcrescent.kg/ru/","details":""},
    {"id":13,"region":"osh","regionName":"Ош и Ошская область","name":"Novrimt","description":"Молодежная инициатива, включенная в региональную базу возможностей для молодежи Оша.","details":"Молодежная инициатива, включенная в региональную базу возможностей для молодежи Оша.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Волонтерство • Проекты","contacts":"Контакты не опубликованы","address":"г. Ош","history":"","source":""},
    {"id":14,"region":"osh","regionName":"Ош и Ошская область","name":"Американский Уголок (Ош)","description":"Образовательное пространство для молодежи с языковыми, культурными, цифровыми и дискуссионными мероприятиями.","details":"Образовательное пространство для молодежи с языковыми, культурными, цифровыми и дискуссионными мероприятиями.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Ош","history":"","source":""},
    {"id":15,"region":"osh","regionName":"Ош и Ошская область","name":"Молодёжный центр (Узген)","description":"Региональная молодежная площадка для обучения, инициатив и общественных мероприятий в Узгене.","details":"Региональная молодежная площадка для обучения, инициатив и общественных мероприятий в Узгене.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Образование • События","contacts":"Контакты не опубликованы","address":"г. Узген","history":"","source":""},
    {"id":16,"region":"jalal-abad","regionName":"Джалал-Абадская область","name":"Американский Уголок (Джалал-Абад)","description":"Молодежное образовательное пространство для обучения, языковой практики, дискуссий и культурных мероприятий.","details":"Молодежное образовательное пространство для обучения, языковой практики, дискуссий и культурных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Джалал-Абад","history":"","source":""},
    {"id":17,"region":"jalal-abad","regionName":"Джалал-Абадская область","name":"Джалал-Абадский филиал Красного Полумесяца","description":"Региональное подразделение НОКП КР, участвующее в гуманитарной, социальной и волонтерской работе.","details":"Региональное подразделение НОКП КР, участвующее в гуманитарной, социальной и волонтерской работе.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Джалал-Абадская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":18,"region":"jalal-abad","regionName":"Джалал-Абадская область","name":"Дебатный клуб «Заманбап» (ЖАГУ)","description":"Студенческая дебатная площадка для развития аргументации, публичных выступлений, критического мышления и командной работы.","details":"Студенческая дебатная площадка для развития аргументации, публичных выступлений, критического мышления и командной работы.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Дебаты • Публичные выступления • Образование","contacts":"Контакты не опубликованы","address":"Джалал-Абадская область","history":"","source":"https://jagu.edu.kg/ru/categories/209?parent=204"},
    {"id":19,"region":"jalal-abad","regionName":"Джалал-Абадская область","name":"Молодёжный центр (Таш-Кумыр)","description":"Молодежная площадка для локальных инициатив, образовательных мероприятий и вовлечения молодых людей в общественную жизнь.","details":"Молодежная площадка для локальных инициатив, образовательных мероприятий и вовлечения молодых людей в общественную жизнь.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Образование • События","contacts":"Контакты не опубликованы","address":"г. Таш-Кумыр","history":"","source":""},
    {"id":20,"region":"jalal-abad","regionName":"Джалал-Абадская область","name":"Жашыл Джалал-Абад","description":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и городскими акциями.","details":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и городскими акциями.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Экология • Благоустройство • Волонтерство","contacts":"Контакты не опубликованы","address":"Джалал-Абадская область","history":"","source":""},
    {"id":21,"region":"issyk-kul","regionName":"Иссык-Кульская область","name":"Американский Уголок (Каракол)","description":"Образовательное пространство для молодежи с языковыми клубами, дискуссиями, культурными и цифровыми мероприятиями.","details":"Образовательное пространство для молодежи с языковыми клубами, дискуссиями, культурными и цифровыми мероприятиями.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Каракол","history":"","source":""},
    {"id":22,"region":"issyk-kul","regionName":"Иссык-Кульская область","name":"ОО «Leadership»","description":"Молодежная волонтерская организация, развивающая гражданское участие через волонтерство, проекты, обучение и международное сотрудничество.","details":"Молодежная волонтерская организация, развивающая гражданское участие через волонтерство, проекты, обучение и международное сотрудничество.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Волонтерство • Гражданское участие • Молодежь • Международные программы","contacts":"Официальный сайт: leadership.kg","address":"г. Каракол","history":"1 ноября 2005","source":"https://leadership.kg/index.php/en/about-us/8-2013-04-14-18-19-33.html"},
    {"id":23,"region":"issyk-kul","regionName":"Иссык-Кульская область","name":"Иссык-Кульский филиал Красного Полумесяца","description":"Региональное подразделение НОКП КР, работающее с добровольцами и социальными и гуманитарными программами.","details":"Региональное подразделение НОКП КР, работающее с добровольцами и социальными и гуманитарными программами.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Иссык-Кульская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":24,"region":"issyk-kul","regionName":"Иссык-Кульская область","name":"Американский Уголок (Балыкчы)","description":"Молодежное образовательное пространство для обучения, языковой практики, встреч и культурных мероприятий.","details":"Молодежное образовательное пространство для обучения, языковой практики, встреч и культурных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Балыкчы","history":"","source":""},
    {"id":25,"region":"issyk-kul","regionName":"Иссык-Кульская область","name":"Таза Иссык-Көл","description":"Экологическая инициатива, ориентированная на чистоту региона, экологическую культуру и участие местных сообществ.","details":"Экологическая инициатива, ориентированная на чистоту региона, экологическую культуру и участие местных сообществ.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Экология • Туризм • Благоустройство • Волонтерство","contacts":"Контакты не опубликованы","address":"Иссык-Кульская область","history":"","source":""},
    {"id":26,"region":"naryn","regionName":"Нарынская область","name":"Американский Уголок (Нарын)","description":"Молодежное образовательное пространство для языковой практики, обучения, дискуссий и культурных мероприятий.","details":"Молодежное образовательное пространство для языковой практики, обучения, дискуссий и культурных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Нарын","history":"","source":""},
    {"id":27,"region":"naryn","regionName":"Нарынская область","name":"UCA Youth Volunteers (УЦА)","description":"Молодежное волонтерское направление, связанное с активностями и общественными инициативами студентов Университета Центральной Азии.","details":"Молодежное волонтерское направление, связанное с активностями и общественными инициативами студентов Университета Центральной Азии.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Волонтерство • Студенческие инициативы • Образование","contacts":"Контакты не опубликованы","address":"Нарынская область","history":"","source":""},
    {"id":28,"region":"naryn","regionName":"Нарынская область","name":"Нарынский филиал Красного Полумесяца","description":"Региональное подразделение НОКП КР, вовлекающее добровольцев в гуманитарную и социальную деятельность.","details":"Региональное подразделение НОКП КР, вовлекающее добровольцев в гуманитарную и социальную деятельность.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Нарынская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":29,"region":"naryn","regionName":"Нарынская область","name":"Молодёжный центр (Нарын)","description":"Молодежная площадка для инициатив, образовательных мероприятий и общественной активности в Нарыне.","details":"Молодежная площадка для инициатив, образовательных мероприятий и общественной активности в Нарыне.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Образование • События","contacts":"Контакты не опубликованы","address":"г. Нарын","history":"","source":""},
    {"id":30,"region":"naryn","regionName":"Нарынская область","name":"Клуб «Теңир-Тоо Жаштары»","description":"Молодежное сообщество для развития инициатив, волонтерства и локальных проектов в Нарынской области.","details":"Молодежное сообщество для развития инициатив, волонтерства и локальных проектов в Нарынской области.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Волонтерство • Локальные проекты","contacts":"Контакты не опубликованы","address":"Нарынская область","history":"","source":""},
    {"id":31,"region":"talas","regionName":"Таласская область","name":"Американский Уголок (Талас)","description":"Молодежное образовательное пространство с языковыми, культурными и образовательными мероприятиями.","details":"Молодежное образовательное пространство с языковыми, культурными и образовательными мероприятиями.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Талас","history":"","source":""},
    {"id":32,"region":"talas","regionName":"Таласская область","name":"Таласский филиал Красного Полумесяца","description":"Региональное подразделение НОКП КР, работающее с добровольцами в гуманитарной и социальной сфере.","details":"Региональное подразделение НОКП КР, работающее с добровольцами в гуманитарной и социальной сфере.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Таласская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/volunteer/"},
    {"id":33,"region":"talas","regionName":"Таласская область","name":"Таласский Молодёжный Совет","description":"Площадка для молодежного участия, инициатив и представления интересов молодых людей на местном уровне.","details":"Площадка для молодежного участия, инициатив и представления интересов молодых людей на местном уровне.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежная политика • Гражданское участие • Инициативы","contacts":"Контакты не опубликованы","address":"г. Талас","history":"","source":""},
    {"id":34,"region":"talas","regionName":"Таласская область","name":"Дебатный клуб «Манас Жаштары» (ТалГУ)","description":"Студенческая площадка для развития публичных выступлений, аргументации, критического мышления и дебатной культуры.","details":"Студенческая площадка для развития публичных выступлений, аргументации, критического мышления и дебатной культуры.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Дебаты • Публичные выступления • Образование","contacts":"Контакты не опубликованы","address":"Таласская область","history":"","source":""},
    {"id":35,"region":"talas","regionName":"Таласская область","name":"Жашыл Талас","description":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и вовлечением молодежи.","details":"Экологическая инициатива, связанная с благоустройством, экологическим просвещением и вовлечением молодежи.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Экология • Благоустройство • Волонтерство","contacts":"Контакты не опубликованы","address":"Таласская область","history":"","source":""},
    {"id":36,"region":"batken","regionName":"Баткенская область","name":"Американский Уголок (Баткен)","description":"Молодежное образовательное пространство для языковой практики, обучения, дискуссий и культурных мероприятий.","details":"Молодежное образовательное пространство для языковой практики, обучения, дискуссий и культурных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Баткен","history":"","source":""},
    {"id":37,"region":"batken","regionName":"Баткенская область","name":"Баткенский филиал Красного Полумесяца","description":"Региональное подразделение НОКП КР, привлекающее добровольцев к гуманитарной, социальной и чрезвычайной деятельности.","details":"Региональное подразделение НОКП КР, привлекающее добровольцев к гуманитарной, социальной и чрезвычайной деятельности.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Гуманитарная помощь • Социальная помощь • ЧС • Волонтерство","contacts":"Через Национальное общество Красного Полумесяца КР","address":"Баткенская область","history":"Филиал сети НОКП","source":"https://volunteer.kg/organization/nacionalnoe-obshhestvo-krasnogo-polumesjaca-kyrgystana/"},
    {"id":38,"region":"batken","regionName":"Баткенская область","name":"Молодёжный центр (Кызыл-Кыя)","description":"Молодежная площадка для локальных инициатив, обучения и общественных мероприятий в Кызыл-Кыя.","details":"Молодежная площадка для локальных инициатив, обучения и общественных мероприятий в Кызыл-Кыя.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Образование • События","contacts":"Контакты не опубликованы","address":"г. Кызыл-Кыя","history":"","source":""},
    {"id":39,"region":"batken","regionName":"Баткенская область","name":"Американский Уголок (Раззаков)","description":"Молодежное образовательное пространство для языковой практики, обучения и культурных мероприятий.","details":"Молодежное образовательное пространство для языковой практики, обучения и культурных мероприятий.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Образование • Английский язык • Культура • Молодежь","contacts":"Контакты не опубликованы","address":"г. Раззаков","history":"","source":""},
    {"id":40,"region":"batken","regionName":"Баткенская область","name":"ОО «Баткен Жаштары»","description":"Молодежная организация/инициатива, ориентированная на развитие молодежного участия и локальных общественных проектов.","details":"Молодежная организация/инициатива, ориентированная на развитие молодежного участия и локальных общественных проектов.","forWhom":"Молодым людям, которые интересуются этим направлением, хотят получить практический опыт, участвовать в проектах и развивать полезные навыки.","activities":"Молодежь • Гражданская активность • Волонтерство","contacts":"Контакты не опубликованы","address":"Баткенская область","history":"","source":""}
];

for (const organization of organizationsData) {
    Object.assign(organization, window.ARAKETTIK_ORGANIZATIONS.updates[organization.id] || {});
    if (/Полумесяц|Полумесяца/.test(organization.name)) Object.assign(organization, {
        logo:'assets/organizations/red-crescent.png', logoSource:'https://redcrescent.kg/', logoNote:'Логотип национального общества'
    });
}
organizationsData.push(...window.ARAKETTIK_ORGANIZATIONS.additions);
function organizationAvatar(organization) {
    const initials = organization.name.replace(/[«»()]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
    return organization.logo ? `<img src="${escapeHtml(organization.logo)}" alt="Логотип ${escapeHtml(organization.name)}" loading="lazy">` : `<span class="organization-initials" title="${escapeHtml(organization.name)}">${escapeHtml(initials)}</span>`;
}

const eventsData = [...window.localEventsCatalog, ...window.ARAKETTIK_MANUAL.events];
let approvedEventsData = [];
let approvedOrganizationsData = [];

// ==========================================================================
// 2. БАЗА ЗНАНИЙ (ПОЛНОТЕКСТОВЫЕ СТАТЬИ И ГАЙДЫ)
// ==========================================================================
const knowledgeEscape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const knowledgeSections = sections => sections.map(([heading,text]) => '<h3>'+knowledgeEscape(heading)+'</h3>'+text.split(/\n\n/).map(p=>'<p>'+knowledgeEscape(p)+'</p>').join('')).join('');
const hubData = Object.fromEntries(Object.entries(window.ARAKETTIK_KNOWLEDGE).map(([group,articles]) => [group,articles.map(([title,desc,sections])=>({title,desc,content:'<h2>'+knowledgeEscape(title)+'</h2><p class="reader-lead">'+knowledgeEscape(desc)+'</p>'+knowledgeSections(sections)}))]));
// 2. ОРГАНИЗАЦИИ (ПОИСК, РЕГИОНЫ И ПОДРОБНАЯ КАРТОЧКА)
// ============================================================================
// Все данные организаций хранятся выше в organizationsData.
// Чтобы добавить организацию, достаточно добавить еще один объект в массив.
// ============================================================================
window.openOrganization = function(organizationId) {
    const modal = document.getElementById("organizationModal");
    const body = document.getElementById("organizationModalBody");
    const organization = [...organizationsData, ...approvedOrganizationsData].find(item => item.id === organizationId);

    if (!modal || !body || !organization) return;

    const allOrganizationEvents = [...eventsData, ...approvedEventsData];
    const organizationName = String(organization.name || "").toLowerCase();
    const organizationEvents = allOrganizationEvents.filter(event => {
        const eventOrganization = String(event.organization || "").toLowerCase();
        return eventOrganization && (eventOrganization === organizationName || eventOrganization.includes(organizationName) || organizationName.includes(eventOrganization));
    });
    const website = organization.website || organization.source || "";
    const socialLink = organization.socialLink || organization.social || "";
    const eventCards = organizationEvents.length
        ? organizationEvents.map(event => {
            const viewId = event.approvedId ? `approved-${event.approvedId}` : `local-${event.id}`;
            return `<article class="organization-event-item"><span>${escapeHtml(event.date || "Дата уточняется")}</span><h4>${escapeHtml(event.title || "Мероприятие")}</h4><p>${escapeHtml(event.desc || event.description || "")}</p><button class="read-link" onclick="openEventById('${viewId}')">Подробнее <i class="fa-solid fa-arrow-right"></i></button></article>`;
        }).join("")
        : `<div class="organization-events-empty"><i class="fa-solid fa-calendar-xmark"></i><p>Сейчас у этой организации нет опубликованных ивентов.</p></div>`;

    body.innerHTML = `
        <div class="organization-detail-head">
            <div class="organization-detail-icon">${organizationAvatar(organization)}</div>
            <div>
                <span class="organization-region-label">${organization.regionName}</span>
                <h2>${organization.name}</h2>
                <p>${organization.description}</p>
            </div>
        </div>

        <div class="organization-modal-tabs" role="tablist" aria-label="Разделы организации">
            <button class="organization-tab active" type="button" data-organization-tab="info">Информация</button>
            <button class="organization-tab" type="button" data-organization-tab="events">Ивенты <span>${organizationEvents.length}</span></button>
        </div>

        <div class="organization-tab-panel active" data-organization-panel="info">
            <div class="organization-detail-grid">
                <div class="organization-detail-block">
                    <span class="detail-label"><i class="fa-solid fa-bullseye"></i> Деятельность</span>
                    <p>${organization.activities}</p>
                </div>
                <div class="organization-detail-block">
                    <span class="detail-label"><i class="fa-solid fa-phone"></i> Контакты</span>
                    <p>${organization.contacts}</p>
                </div>
                <div class="organization-detail-block">
                    <span class="detail-label"><i class="fa-solid fa-location-dot"></i> Адрес</span>
                    <p>${organization.address}</p>
                </div>
                ${organization.history ? `<div class="organization-detail-block"><span class="detail-label"><i class="fa-solid fa-clock-rotate-left"></i> История</span><p>${escapeHtml(organization.history)}</p></div>` : ""}
            </div>

            ${(website || socialLink) ? `<div class="organization-links-row">
                ${website ? `<a class="btn btn-secondary" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe"></i> Сайт организации</a>` : ""}
                ${socialLink ? `<a class="btn btn-secondary" href="${escapeHtml(socialLink)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> Социальные сети</a>` : ""}
            </div>` : ""}

            <div class="organization-detail-block organization-detail-wide">
                <span class="detail-label"><i class="fa-solid fa-circle-info"></i> Подробнее</span>
                <p>${organization.details || organization.description}</p>
            </div>
            <div class="organization-detail-block organization-detail-wide">
                <span class="detail-label"><i class="fa-solid fa-user-check"></i> Кому может подойти</span>
                <p>${organization.forWhom || "Молодым людям, которые хотят развиваться, участвовать в проектах и находить новые возможности."}</p>
            </div>
        </div>
        <div class="organization-tab-panel" data-organization-panel="events">${eventCards}</div>

    `;

    body.querySelectorAll(".organization-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            const selected = tab.dataset.organizationTab;
            body.querySelectorAll(".organization-tab").forEach(button => button.classList.toggle("active", button === tab));
            body.querySelectorAll(".organization-tab-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.organizationPanel === selected));
        });
    });

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

function renderOrganizations() {
    const grid = document.getElementById("organizationsGrid");
    const count = document.getElementById("organizationCount");
    const search = document.getElementById("organizationSearch");
    const citySelect = document.getElementById("citySelect");
    const cityLabel = document.getElementById("organizationCityLabel");

    if (!grid) return;

    const selectedCity = citySelect?.value || localStorage.getItem("arakettikCity") || "bishkek";
    const query = (search?.value || "").trim().toLowerCase();

    const filtered = [...organizationsData, ...approvedOrganizationsData].filter(organization => {
        const matchesCity = organization.region === selectedCity;
        const searchableText = [
            organization.name,
            organization.regionName,
            organization.description,
            organization.activities,
            organization.address
        ].join(" ").toLowerCase();
        const direction = document.getElementById('organizationDirection')?.value || '';
        const matchesDirection = !direction || String(organization.activities).toLowerCase().includes(direction);
        return matchesCity && matchesDirection && (!query || searchableText.includes(query));
    });

    if (cityLabel) {
        const option = citySelect?.selectedOptions?.[0];
        cityLabel.textContent = option ? option.textContent : "Бишкека";
    }

    if (count) {
        count.textContent = `${filtered.length} ${filtered.length === 1 ? "организация" : filtered.length < 5 ? "организации" : "организаций"}`;
    }

    if (!filtered.length) {
        grid.innerHTML = `
            <div class="glass-card organizations-empty">
                <div class="organizations-empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>Пока ничего не найдено</h3>
                <p>Для выбранного города пока нет подходящих организаций. Попробуйте изменить поиск или выбрать другой город.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(organization => `
        <article class="glass-card organization-card">
            <div class="organization-card-top">
                <div class="organization-card-icon">${organizationAvatar(organization)}</div>
                <span class="organization-region-badge">${organization.regionName}</span>
            </div>
            <h3>${organization.name}</h3>${organization.logoNote ? `<small class="organization-network">${escapeHtml(organization.logoNote)}</small>` : ""}
            <p class="organization-description">${organization.description}</p>
            <div class="organization-tags">
                ${organization.activities.split(" • ").slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}
            </div>
            <div class="organization-card-footer">
                <span><i class="fa-solid fa-location-dot"></i> ${organization.address.split(" — ")[0]}</span>
                <button class="read-link" onclick="openOrganization(${organization.id})">Подробнее <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </article>
    `).join("");
}

// Глобальная функция открытия всплывающего окна статьи
window.openArticle = function(tabName, articleIndex) {
    const articleModal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    
    if (articleModal && modalBody && hubData[tabName] && hubData[tabName][articleIndex]) {
        const article = hubData[tabName][articleIndex];
        modalBody.classList.add('knowledge-reader');
        const wordCount = article.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
        modalBody.innerHTML = `<p class="reader-meta">${Math.max(2, Math.ceil(wordCount / 150))} мин чтения · ${wordCount} слов</p>${article.content}`;
        const headings = [...modalBody.querySelectorAll('h3')];
        headings.forEach((h,i) => h.id = `reader-heading-${i}`);
        const contents = document.createElement('nav');
        contents.className = 'reader-contents'; contents.setAttribute('aria-label','Содержание статьи');
        contents.innerHTML = headings.map(h => `<a href="#${h.id}">${escapeHtml(h.textContent)}</a>`).join('');
        const table = document.createElement('details'); table.className = 'reader-table-of-contents';
        table.open = window.innerWidth > 640;
        table.innerHTML = '<summary>Содержание статьи</summary>'; table.append(contents);
        (modalBody.querySelector('.reader-lead') || modalBody.querySelector('h2')).after(table);
        contents.addEventListener('click', event => {
            const link = event.target.closest('a'); if (!link) return; event.preventDefault();
            modalBody.querySelector(link.getAttribute('href'))?.scrollIntoView({behavior:'smooth',block:'start'});
        });
        articleModal.classList.remove("hidden");
        articleModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        articleModal.querySelector('.modal-content').scrollTop = 0;
    }
};


function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

window.openEventById = function(viewId) {
    const allEvents = [...eventsData, ...approvedEventsData];
    const event = allEvents.find(item => (item.approvedId ? `approved-${item.approvedId}` : `local-${item.id}`) === viewId);
    if (event) window.openEventDetails(event);
};

window.openEventDetails = function(event) {
    const modal = document.getElementById("articleModal");
    const body = document.getElementById("modalBody");
    if (!modal || !body) return;
    body.classList.remove('knowledge-reader');
    const date = event.date || "Дата уточняется";
    const time = event.time ? `<p><strong>Время:</strong> ${escapeHtml(event.time)}</p>` : "";
    const location = event.location || event.address;
    const image = event.imageData ? `<img class="event-modal-image" src="${escapeHtml(event.imageData)}" alt="${escapeHtml(event.title)}">` : "";
    const registration = event.registrationLink ? `<a class="btn btn-primary" href="${escapeHtml(window.ARAKETTIK.safeUrl(event.registrationLink))}" target="_blank" rel="noopener noreferrer">Перейти к регистрации</a>` : `<span class="event-link-missing">Ссылка на регистрацию или сайт будет добавлена</span>`;
    const social = event.socialLink ? `<a class="btn btn-secondary" href="${escapeHtml(window.ARAKETTIK.safeUrl(event.socialLink))}" target="_blank" rel="noopener noreferrer">Социальные сети</a>` : "";
    const detail = event.localDetails;
    const detailLists = detail ? [['activities','Что делают участники'],['benefits','Что получат участники'],['criteria','Кому подходит'],['documents','Документы'],['steps','Как участвовать']].map(([key,title]) => detail[key]?.length ? `<section class="event-detail-section"><h3>${title}</h3><ul>${detail[key].map(value=>`<li>${escapeHtml(value)}</li>`).join('')}</ul></section>` : '').join('') : '';
    body.innerHTML = `
        ${image}
        <span class="organization-region-label">${escapeHtml(event.cityName || event.city || "")}</span>
        <h2>${escapeHtml(event.title || "Мероприятие")}</h2>
        <p>${escapeHtml(event.description || event.desc || "")}</p>
        <div class="event-detail-info">
            <p><strong>Дата:</strong> ${escapeHtml(date)}</p>
            ${time}
            ${location ? `<p><strong>Место:</strong> ${escapeHtml(location)}</p>` : ""}
            ${event.organization ? `<p><strong>Организатор:</strong> ${escapeHtml(event.organization)}</p>` : ""}
            ${event.contact ? `<p><strong>Контакты:</strong> ${escapeHtml(event.contact)}</p>` : ""}
        </div>
        ${detail ? `<section class="event-detail-section"><h3>О возможности</h3>${detail.overview.map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</section><section class="event-detail-section"><h3>Формат и место</h3><p>${escapeHtml(detail.format)}</p></section>${detailLists}<p class="event-full-description">${escapeHtml(detail.note||'')}</p>` : ''}
        ${event.details ? `<p class="event-full-description">${escapeHtml(event.details)}</p>` : ''}
        ${event.requirements ? `<p class="event-full-description"><strong>Условия:</strong><br>${escapeHtml(event.requirements)}</p>` : ''}
        ${event.fee ? `<p><strong>Стоимость / финансирование:</strong> ${escapeHtml(event.fee)}</p>` : ''}
        ${event.deadlineAt ? `<p><strong>Дедлайн:</strong> ${escapeHtml(new Date(event.deadlineAt).toLocaleString('ru-RU',{timeZone:'Asia/Bishkek'}))} (Бишкек)</p>` : ''}
        <div class="event-detail-actions">${registration}${social}</div>
        ${event.sourceUrl ? `<p><a href="${escapeHtml(window.ARAKETTIK.safeUrl(event.sourceUrl))}" target="_blank" rel="noopener noreferrer">Источник публикации</a></p>` : ''}
    `;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

// ==========================================================================
// 4. ИНИЦИАЛИЗАЦИЯ И ИНТЕРФЕЙС
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    

    // ========================================================================
    // 2. ГОРОД: ЕДИНЫЙ ФИЛЬТР ДЛЯ ИВЕНТОВ И ОРГАНИЗАЦИЙ
    // Город не является обязательным экраном. Он просто хранится в шапке.
    // ========================================================================
    const citySelect = document.getElementById("citySelect");
    const savedCity = localStorage.getItem("arakettikCity") || "bishkek";

    if (citySelect) {
        citySelect.value = [...citySelect.options].some(option => option.value === savedCity)
            ? savedCity
            : "bishkek";

        citySelect.addEventListener("change", () => {
            localStorage.setItem("arakettikCity", citySelect.value);
            renderEvents();
            renderOrganizations();
        });
    }

    // ========================================================================
    // 3. ОРГАНИЗАЦИИ: ПОИСК И ФИЛЬТРАЦИЯ ПО РЕГИОНУ
    // ========================================================================
    const organizationSearch = document.getElementById("organizationSearch");
    const organizationModal = document.getElementById("organizationModal");
    const organizationModalClose = document.getElementById("organizationModalClose");

    if (organizationSearch) {
        organizationSearch.addEventListener("input", renderOrganizations);
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (organizationModalClose && organizationModal) {
        organizationModalClose.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            closeModal(organizationModal);
        });

        organizationModal.addEventListener("click", (event) => {
            if (event.target === organizationModal) closeModal(organizationModal);
        });
    }

    document.getElementById('organizationDirection')?.addEventListener('change', renderOrganizations);
    renderOrganizations();

    // Переключение тем (день/ночь)
    const themeToggleBtn = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            let newTheme = theme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === 'dark'
                ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg>'
                : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/></svg>';
        }
    }

    // Мобильное меню
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const open = navMenu.classList.toggle("open");
            menuToggle.setAttribute('aria-expanded', String(open));
            menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
            menuToggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="${open ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'}"/></svg>`;
        });
        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
            navMenu.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
            menuToggle.setAttribute('aria-label','Открыть меню');
            menuToggle.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
        }));
    }

    // ==========================================================================
    // 4. ИВЕНТЫ (ПОИСК И ФИЛЬТР)
    // ==========================================================================
    const eventsGrid = document.getElementById("eventsGrid");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");
    let currentFilter = "all", searchQuery = "";


function isExpiredPublication(item){
 return window.ARAKETTIK.isExpired(item);
}

    function renderEvents() {
        if (!eventsGrid) return;
        eventsGrid.innerHTML = "";
        const selectedCity = document.getElementById("citySelect")?.value || localStorage.getItem("arakettikCity") || "bishkek";
        const allEvents = [...eventsData, ...approvedEventsData];
        const filteredEvents = allEvents.filter(event => !isExpiredPublication(event)).filter(event => {
            const title = String(event.title || "");
            const desc = String(event.desc || event.description || "");
            return (event.city === selectedCity || event.city === "all") &&
                (currentFilter === "all" || event.category === currentFilter) &&
                (title.toLowerCase().includes(searchQuery.toLowerCase()) || desc.toLowerCase().includes(searchQuery.toLowerCase()));
        });

        if (filteredEvents.length === 0) {
            eventsGrid.innerHTML = `<div class="glass-card" style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-muted);">Ничего не найдено 🚀</div>`;
            return;
        }

        eventsGrid.innerHTML = filteredEvents.map(event => {
            const viewId = event.approvedId ? 'approved-'+event.approvedId : 'local-'+event.id;
            return window.ARAKETTIK_EVENT_CARDS.render(event,{viewId});
        }).join('');
    }

    window.__renderEventsNow = renderEvents;
    eventsGrid?.addEventListener('click', event => {
        const button=event.target.closest('[data-event-id]');
        if(button && eventsGrid.contains(button)) window.openEventById(button.dataset.eventId);
    });

    if (searchInput) searchInput.addEventListener("input", (e) => { searchQuery = e.target.value; renderEvents(); });
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderEvents();
        });
    });
    renderEvents();

    // ==========================================================================
    // 5. РЕНДЕР БАЗЫ ЗНАНИЙ (ХАБА)
    // ==========================================================================
    const hubContent = document.getElementById("hubContent");
    const hubTabBtns = document.querySelectorAll(".hub-tab-btn");

    function renderHub(tabName) {
        if (!hubContent) return;
        hubContent.innerHTML = "";
        const organizationsPane = document.getElementById("organizations");
        if (organizationsPane && organizationsPane.parentElement !== hubContent.parentElement) hubContent.after(organizationsPane);
        if (organizationsPane) organizationsPane.style.display = tabName === "organizations" ? "block" : "none";
        if (tabName === "organizations") return;
        hubData[tabName].forEach((article, index) => {
            let iconClass = tabName === "mun" ? "fa-solid fa-globe" : tabName === "debates" ? "fa-solid fa-comments" : tabName === "admissions" ? "fa-solid fa-graduation-cap" : "fa-solid fa-brain";
            
            hubContent.innerHTML += `
                <div class="glass-card article-card">
                    <div class="article-icon"><i class="${iconClass}"></i></div>
                    <h3>${article.title}</h3>
                    <p>${article.desc}</p>
                    <button class="read-link" onclick="openArticle('${tabName}', ${index})">
                        Читать гайд <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;
        });
    }

    hubTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            hubTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderHub(btn.getAttribute("data-tab"));
        });
    });

    renderHub("mun");

    // ==========================================================================
    // 6. ФОРМА ОРГАНИЗАТОРА: МЕРОПРИЯТИЕ ИЛИ ОРГАНИЗАЦИЯ
    // ==========================================================================
    // Static catalogue: re-check deadlines while the page is open or resumes.
    setInterval(() => { if (!document.hidden) window.__renderEventsNow?.(); }, 30000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) window.__renderEventsNow?.(); });

    const articleModal = document.getElementById("articleModal");
    const modalClose = document.getElementById("modalClose");

    if (modalClose && articleModal) {
        modalClose.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            closeModal(articleModal);
        });

        articleModal.addEventListener("click", (event) => {
            if (event.target === articleModal) closeModal(articleModal);
        });
    }

    // ========================================================================
    // 9. ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН ПО ESC
    // ========================================================================
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        const openModals = document.querySelectorAll(".modal:not(.hidden)");
        openModals.forEach(modal => closeModal(modal));
    });

    // ========================================================================
    // ========================================================================
    // 10. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА: RU -> KG -> EN
    // ========================================================================
    const translations = {
        ru: { about:"О проекте", events:"Кыргызстан", organizations:"Организации", knowledge:"База знаний", organizers:"Контакты", heroBadge:"Платформа возможностей для молодежи", heroTitle:"Возможности для учёбы и развития вместе с <span class=\"gradient-text\">Arakettik</span>", heroText:"Находи лучшие волонтерские проекты, участвуй в Моделях ООН, побеждай в дебатах, проходи топовые курсы и прокачивай себя каждый день. Все возможности вашего города в одном месте!", findEvent:"Найти возможность", eventsTitle:"Возможности в <span class=\"gradient-text\">Кыргызстане</span>", eventsSubtitle:"Мероприятия и возможности, которые проходят в Кыргызстане", all:"Все", volunteering:"Волонтерство", webinars:"Вебинары & Тренинги", ecology:"Экология", orgTitle:"Организации <span class=\"gradient-text\">рядом с вами</span>", orgSubtitle:"Находи молодежные, волонтерские, образовательные и экологические организации по регионам Кыргызстана.", showingOrganizations:"Показываем организации для <strong id=\"organizationCityLabel\">Бишкека</strong>", cityHint:"Город выбирается в шапке сайта и фильтрует местные мероприятия и организации.", hubTitle:"Образовательный <span class=\"gradient-text\">Хаб</span>", hubSubtitle:"Гайды, статьи и полезные подборки для вашего развития", eventSearch:"Поиск мероприятий по названию...", orgSearch:"Поиск организации или направления..." },
        kg: { about:"Долбоор жөнүндө", events:"Кыргызстан", organizations:"Уюмдар", knowledge:"Билим базасы", organizers:"Байланыш", heroBadge:"Жаштар үчүн мүмкүнчүлүктөр платформасы", heroTitle:"Arakettik менен жаркын келечекке биринчи кадамың", heroText:"Эң мыкты волонтердук долбоорлорду тап, БУУнун моделдерине катыш, дебаттарда жеңишке жет, пайдалуу курстардан өт жана өзүңдү өнүктүр. Шаарыңдагы мүмкүнчүлүктөрдүн баары бир жерде!", findEvent:"Иш-чара табуу", eventsTitle:"Кыргызстандагы <span class=\"gradient-text\">мүмкүнчүлүктөр</span>", eventsSubtitle:"Кызыккан багыттарыңды тандап, азыр эле арыз бер", all:"Баары", volunteering:"Волонтердук", webinars:"Вебинарлар жана тренингдер", ecology:"Экология", orgTitle:"Сага жакын <span class=\"gradient-text\">уюмдар</span>", orgSubtitle:"Кыргызстандын аймактарындагы жаштар, волонтердук, билим берүү жана экологиялык уюмдарды тап.", showingOrganizations:"Бул шаардагы уюмдар: <strong id=\"organizationCityLabel\">Бишкек</strong>", cityHint:"Шаар сайттын жогорку бөлүгүнөн тандалат жана жергиликтүү иш-чараларды чыпкалайт.", hubTitle:"Билим берүүчү <span class=\"gradient-text\">хаб</span>", hubSubtitle:"Өнүгүүң үчүн гайддар, макалалар жана пайдалуу материалдар", eventSearch:"Иш-чаранын аталышы боюнча издөө...", orgSearch:"Уюм же багыт боюнча издөө..." },
        en: { about:"About", events:"Kyrgyzstan", organizations:"Organizations", knowledge:"Knowledge Hub", organizers:"Contacts", heroBadge:"A platform of opportunities for young people", heroTitle:"Your start toward a great future with <span class=\"gradient-text\">Arakettik</span>", heroText:"Find volunteer projects, join Model UN, compete in debates, take useful courses and grow every day. All opportunities in your city in one place!", findEvent:"Find an event", eventsTitle:"Opportunities in <span class=\"gradient-text\">Kyrgyzstan</span>", eventsSubtitle:"Choose an area you like and apply right now", all:"All", volunteering:"Volunteering", webinars:"Webinars & Training", ecology:"Ecology", orgTitle:"Organizations <span class=\"gradient-text\">near you</span>", orgSubtitle:"Find youth, volunteer, educational and environmental organizations across Kyrgyzstan.", showingOrganizations:"Showing organizations for <strong id=\"organizationCityLabel\">Bishkek</strong>", cityHint:"Choose a city in the header to filter local events and organisations.", hubTitle:"Educational <span class=\"gradient-text\">Hub</span>", hubSubtitle:"Guides, articles and useful resources for your growth", eventSearch:"Search events by name...", orgSearch:"Search organization or area..." }
    };

    Object.assign(translations.ru, {opportunities:'Международный', opportunitiesShort:'Международный'});
    Object.assign(translations.kg, {opportunities:'Эл аралык', opportunitiesShort:'Эл аралык'});
    Object.assign(translations.en, {opportunities:'International', opportunitiesShort:'International'});

    const languageButton = document.getElementById("languageToggle");
    const languageOrder = ["ru", "kg", "en"];
    let currentLanguage = localStorage.getItem("arakettikLanguage") || "ru";

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.ru;
        document.documentElement.lang = lang === "kg" ? "ky" : lang;
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) el.placeholder = dict[key];
        });
        const cityLabel = document.getElementById("organizationCityLabel");
        const citySelect = document.getElementById("citySelect");
        if (cityLabel && citySelect?.selectedOptions?.[0]) cityLabel.textContent = citySelect.selectedOptions[0].textContent;
        if (languageButton) languageButton.textContent = lang === "ru" ? "RU" : lang === "kg" ? "KG" : "EN";
        localStorage.setItem("arakettikLanguage", lang);
    }

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            const nextIndex = (languageOrder.indexOf(currentLanguage) + 1) % languageOrder.length;
            currentLanguage = languageOrder[nextIndex];
            applyLanguage(currentLanguage);
        });
    }
    applyLanguage(currentLanguage);

    // ========================================================================
    // 11. АКТИВНЫЙ РАЗДЕЛ В ШАПКЕ
    // ========================================================================
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const sections = navLinks.filter(link => link.getAttribute('href')?.startsWith('#'))
        .map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    const setActiveNav = (id) => {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
    };
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) setActiveNav(visible[0].target.id);
        }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] });
        sections.forEach(section => observer.observe(section));
    }
    navLinks.forEach(link => link.addEventListener("click", () => setActiveNav(link.getAttribute("href").slice(1))));

    document.querySelectorAll(".footer-faq .faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const item = question.closest(".faq-item");
            const answer = item?.querySelector(".faq-answer");
            if (!item || !answer) return;

            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".footer-faq .faq-item").forEach(other => {
                other.classList.remove("open");
                const otherAnswer = other.querySelector(".faq-answer");
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add("open");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});
