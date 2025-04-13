document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            category: "topping",
            title: "Топинги",
            prod: [
                {
                    title: 'Овощи на мангале',
                    disc: "Икра из свежих овощей приготовленная на открытом огне, с луком зеленью и оливковым маслом",
                    price: "35",
                    image: "DSC09612-2"
                },
                {
                    title: 'Помидоры слабосоленые с укропом и чесноком',
                    disc: "Икра из свежих овощей приготовленная на открытом огне, с луком зеленью и оливковым маслом",
                    price: "22",
                    image: "DSC09612-3"
                },
                {
                    title: 'Ташкент',
                    disc: "Этничный салат с сочной зеленой редькой, жаренным луком и говядиной",
                    price: "35",
                    image: "DSC09612-1"
                },
                {
                    title: 'Семург',
                    disc: "Закуска из жаренных овощей, говядины и свежей зелени",
                    price: "35",
                    image: "DSC09612"
                },
                {
                    title: 'Лук на грле',
                    disc: "Лук на гриле мариновынный в бальзамическом уксусе, оливковом масле с прованскими травами",
                    price: "22",
                    image: "DSC09612-4"
                },
                {
                    title: 'Молодая свекла',
                    disc: "Запеченная молодая свекла маринованная медом, бальзамическим уксусом и травами. Подается с кремовым козьим сыром, создавая уникальное сочетание",
                    price: "22",
                    image: "DSC09612-5"
                },
                {
                    title: 'Гурийская капуста',
                    disc: "Маринованная капуста со свеклой, сельдереем, чесноком и пряностями",
                    price: "22",
                    image: "DSC09592-1"
                },
                {
                    title: 'Битые огурцы',
                    disc: "Пикантные маринованные огурцы в азиатском стиле",
                    price: "22",
                    image: "DSC09592-4"
                },
                {
                    title: 'Квашенная капуста',
                    disc: "Квашенная капуста собственного приготовления",
                    price: "22",
                    image: "DSC09592-6"
                },
                {
                    title: 'Вешенки с красным луком',
                    disc: "маринованные вешенки с луком и растительным маслом",
                    price: "28",
                    image: "DSC09592-5"
                },
                {
                    title: 'Огурцы малосольные',
                    disc: "Слабосольные огурцы с чесноком, укропом и пряностями",
                    price: "22",
                    image: "DSC09592-3"
                },
                {
                    title: 'Домашняя овощная икра',
                    disc: "Жареная овощная икра, настоящий вкус из детства",
                    price: "22",
                    image: "DSC09592-2"
                },
            ]
        },
        {
            title: "Молочные продукты",
            category: "milk_product",
            prod: [
                {
                    title: 'Айран',
                    disc: "Традиционный узбекский напиток на основе сузьмы, зеленых яблок и редиса, он не только утоляет жажду, но и прекрасно дополняет наши закуски",
                    price: "35",
                    image: "iranjpg"
                },
                {
                    title: 'Домашний козий сыр',
                    disc: "Мягкий козий сыр из натурального козьего молока",
                    price: "80",
                    image: "DSC09579"
                },
                {
                    title: 'Домашняя брынза',
                    disc: "Брынза собственного приготовления из натурального коровьего молока",
                    price: "35",
                    image: "DSC09579-1"
                },
                {
                    title: 'Сузьма',
                    disc: "Молочный продукт с однородной текстурой, обладает нежным сливочным вкусом. Идеально сочетается с мясом, зеленью, и овощами",
                    price: "28",
                    image: "DSC09579-2"
                },
                {
                    title: 'Мацони',
                    disc: "Традиционный продукт кавказких народов с более наасыщенным, сливочным вкусом и повышенным процентом жирности",
                    price: "28",
                    image: "matsonijpg"
                },
            ]
        },
        {
            title: "Холодные закуски",
            category: "cold_snaks",
            prod: [
                {
                    title: 'Тунец слабосоленый',
                    disc: "Подкопченный тунец слабой соли",
                    price: "65",
                    image: "DSC09554"
                },
                {
                    title: 'Сельдь бочковая',
                    disc: "Слабосоленая сельдь, с картофелем и красным луком",
                    price: "35",
                    image: "DSC09554-1"
                },
                {
                    title: 'Национальная форель домашнего слабого посола',
                    disc: "Слабосоленая форель, с лимоном и сливочным сыром",
                    price: "80",
                    image: "DSC09554-2"
                },
                {
                    title: 'Сыроваленая говядина с молодой рукколой и выдержанным сыром',
                    disc: "Слайсы сыроваленой говядины, с молодой рукколой и выдержанным сыром",
                    price: "55",
                    image: "DSC09528"
                },
                {
                    title: 'Казы',
                    disc: "Колбаса из конины, с белым луком и свежей кинзой",
                    price: "80",
                    image: "DSC09528-1"
                },
                {
                    title: 'Бекон из говядины',
                    disc: "Варено-копченая говядина, с бородинчскими хлебцами и мариновынным луком",
                    price: "60",
                    image: "DSC09528-2"
                },
                {
                    title: 'Свежая зелены',
                    disc: "Редис, перец чили, чеснок, лук зеленый, укроп, кинза, щавель",
                    price: "28",
                    image: "DSC09638"
                },
                {
                    title: 'Пряный бараний курдюк собственного копчения',
                    disc: "Нежнейшая закуска, пропитанная дымом и ароматными пряностями",
                    price: "80",
                    image: "DSC09638-1"
                },
                {
                    title: 'Телячий язык',
                    disc: "Отварной язык с соусом чимичури и сальсой",
                    price: "70",
                    image: "DSC09638-2"
                },
                {
                    title: 'Свежие овощи и зелень',
                    disc: "Огурцы, томаты, перец сладкий, редис, перец чили, чеснок, лук зеленый, укроп, кинза, щавель",
                    price: "35",
                    image: "DSC09638-3"
                },
            ]
        },
        {
            title: "салаты",
            category: "salads",
            prod: [
                {
                    title: 'Шакароб',
                    disc: "Легкий салат из свежих овощей и зелени, приправлен растительным маслом и морской солью",
                    price: "35",
                    image: "DSC09675"
                },
                {
                    title: 'Хрустящие баклажаны с карпаччо из томатов',
                    disc: "Салат из хрустящих баклажан с розовыми томатами, свежей зеленью и азиатским соусом",
                    price: "45",
                    image: "DSC09675-1"
                },
                {
                    title: 'Салат бахор',
                    disc: "Легкий салат из куриного филе, молодого щавеля, редиса и огурцов",
                    price: "38",
                    image: "DSC09675-2"
                },
                {
                    title: 'Теплый салат из ягненка и овощей',
                    disc: "Теплый салат из ягненка, баклажанов, грибов и микса зелени",
                    price: "55",
                    image: "DSC09927"
                },
                {
                    title: 'Цезарь с курицей',
                    disc: "Классический салат, с айсбергом, томатами черри, курицей и выдержанным сыром",
                    price: "45",
                    image: "DSC09927-3"
                },
                {
                    title: 'Салат из маринованной говядины',
                    disc: "Салат из маринованной говядины на грле, красного лука и феты",
                    price: "55",
                    image: "DSC09927-1"
                },
                {
                    title: 'Теплый салат из телятины и овощей',
                    disc: "Теплый салат из телятины, баклажанов, грибов и микса из зелени",
                    price: "55",
                    image: "DSC09927-2"
                },
                {
                    title: 'Салат греческий',
                    disc: "Классический греческий салат, со свежими овощами, фетой и оливками",
                    price: "38",
                    image: "DSC09898"
                },
                {
                    title: 'Табуле',
                    disc: "Салат из булура, свежей зелени и лимоного сока",
                    price: "35",
                    image: "DSC09898-2"
                },
                {
                    title: 'Салат из рукколы и валеной говядины',
                    disc: "Легкий салат из рукколы, валенной говядины и гранатового соуса",
                    price: "55",
                    image: "DSC09898-1"
                },
                {
                    title: 'Джиз из куриных крылышек',
                    disc: "Жаренная курица на косточке, подается с луком и зеленью",
                    price: "55",
                    image: "DSC09947"
                },
                {
                    title: 'Джиз из бараньих семечек',
                    disc: "Жареная баранина на косточке, подается с луком и зеленью",
                    price: "55",
                    image: "DSC09947-1"
                },
            ]
        },
        {
            title: "горячие закуски",
            category: "hot_snaks",
            prod: [
                {
                    title: 'Кеци из говядины',
                    disc: "Жаркое из говядины и овощей, запеченное в дровяной печи",
                    price: "70",
                    image: "DSC09963"
                },
                {
                    title: 'Кеци из баранины',
                    disc: "Жаркое из баранины и овощей, запеченное в дровянной печи",
                    price: "52",
                    image: "DSC09963-1"
                },
                {
                    title: 'Кеци из курицы',
                    price: "45",
                    disc: "Жаркое из курицы и овощей, запеченное в дровяной печи",
                    image: "DSC09963-2"
                },
                {
                    title: 'Чучвара с овощами',
                    disc: "Отвареные пельмени из говядины, с жареными овощами",
                    price: "35",
                    image: "DSC09991"
                },
                {
                    title: 'Цыпленок тапака',
                    disc: "Традиционный цыпленок жареный в растительном масле, подается с соусом из свежих томатов",
                    price: "70",
                    image: "DSC09991-1"
                },
                {
                    title: 'Чучвара жареная',
                    disc: "Жареные пельмени из говядины",
                    price: "35",
                    image: "DSC09991-2"
                },

            ]
        },
        {
            title: "Пицца национальная",
            category: "pizza",
            prod: [
                {
                    title: 'с ветчиной и грибами',
                    price: "85",
                    image: "DSC00131"
                },
                {
                    title: 'с колбасой',
                    price: "85",
                    image: "DSC00131-1"
                },
                {
                    title: 'с костным мозгом и каперсами',
                    price: "70",
                    image: "DSC00131-2"
                },
                {
                    title: 'с казы и красным луком',
                    price: "110",
                    image: "DSC00131-3"
                },
                {
                    title: 'цезарь',
                    price: "85",
                    image: "DSC00162"
                },
                {
                    title: 'с джизом из говядины',
                    price: "110",
                    image: "DSC00162-1"
                },
                {
                    title: 'с говяжьими фрикадельками',
                    price: "98",
                    image: "DSC00162-2"
                },
                {
                    title: 'пицца с дизом из баранины',
                    price: "85",
                    image: "DSC00162-3"
                },
            ]
        },
        {
            title: "Супы / горячие блюда",
            category: "sup_and_hot_meal",
            prod: [
                {
                    title: 'Лагман по-уйгурски',
                    price: "45",
                    image: "DSC09743"
                },
                {
                    title: 'ЧУЧвара шурпа',
                    disc: "Легкий куриный бульон с домашними пельменями, сметаной и укропом",
                    price: "28",
                    image: "DSC09743-1"
                },
                {
                    title: 'питти',
                    disc: "Насыщенный суп из баранины, гороха и зелени, приготвленный в дровяной печи",
                    price: "45",
                    image: "DSC09743-2"
                },
                {
                    title: 'куриный бульон с лапшой и фрикадельками',
                    disc: "Легкий куриный бульон с домашней лапшой и фрикадельками",
                    price: "28",
                    image: "DSC09718"
                },
                {
                    title: 'мастава ташкентская',
                    disc: "Традиционный суп, с бараниной на косточке, рисом и овощами",
                    price: "45",
                    image: "DSC09718-1"
                },
                {
                    title: 'щавельный суп с фрикадельками',
                    disc: "Насыщенный суп, на основе говяжьего бульона с овощами и фрикадельками",
                    price: "28",
                    image: "DSC09718-2"
                },
                {
                    title: 'говяжья вырезка с овощами сай',
                    disc: "Говяжья вырезка с овощами",
                    price: "80",
                    image: "DSC00019"
                },
                {
                    title: 'нохат шурак',
                    disc: "Баранья ножка томленная с горохом нут, подается с репчатым луком",
                    price: "120",
                    image: "DSC00019-1"
                },
                {
                    title: 'лукум из говядины',
                    disc: "Нежная говяжья вырезка с багетом, собственного приготовления овощами и топленым маслом",
                    price: "70",
                    image: "DSC00019-2"
                },
                {
                    title: 'говяжьи ребра',
                    disc: "Говяжья ребра, томленые в дровяной печи, подается с рукколой и томатами черри",
                    price: "250",
                    image: "DSC00052"
                },
                {
                    title: 'куртоб из бараньей шеи',
                    disc: "Томленая баранья шея, с хручтящей лепешкой, свежими овощами и соус из сухого молока",
                    price: "250",
                    image: "DSC00052-2"
                },
                {
                    title: 'томленая баранья лопатка',
                    disc: "Говяжья вырезка с овощами",
                    price: "380",
                    image: "DSC00052-1"
                },
            ]
        },
        {
            title: "блюда на углях",
            category: "coal",
            prod: [
                {
                    title: 'выерзка',
                    price: "48",
                    image: "DSC00197-3"
                },
                {
                    title: 'баранина корейка',
                    price: "60",
                    image: "DSC00197"
                },
                {
                    title: 'шашлык из бараньих ребер',
                    price: "38",
                    image: "DSC00197-4"
                },
                {
                    title: 'шашлык из баранины',
                    price: "38",
                    image: "DSC00197-1"
                },
                {
                    title: 'томаты',
                    price: "18",
                    image: "DSC00197-5"
                },
                {
                    title: 'молотый',
                    price: "28",
                    image: "DSC00197-2"
                },
                {
                    title: 'куриные крылья',
                    price: "28",
                    image: "DSC00209"
                },
                {
                    title: 'цыпленок на углях',
                    price: "70",
                    image: "DSC00209-2"
                },
                {
                    title: 'бикин',
                    price: "48",
                    image: "DSC00209-1"
                },
                {
                    title: 'куриная голень',
                    price: "35",
                    image: "DSC00209-3"
                },
                {
                    title: 'шышлык из языка',
                    price: "35",
                    image: "DSC00202"
                },
                {
                    title: 'курдюк',
                    price: "22",
                    image: "DSC00202-2"
                },
                {
                    title: 'шашлык из овощей',
                    price: "18",
                    image: "DSC00202-1"
                },
                {
                    title: 'шащлык из лосося',
                    price: "65",
                    image: "DSC00202-3"
                },
            ]
        },
        {
            title: "Гарнир",
            category: "garnir",
            prod: [
                {
                    title: 'картофель по-деревенски с чесноком и травами',
                    price: "30",
                    image: "DSC00217"
                },
                {
                    title: 'рис на пару',
                    price: "30",
                    image: "DSC00217-2"
                },
                {
                    title: 'припущенный шпинат с валеными томатами',
                    price: "30",
                    image: "DSC00217-1"
                },
                {
                    title: 'картофель фри',
                    price: "30",
                    image: "DSC00217-3"
                },
            ]
        },
        {
            title: "десерты",
            category: "deserts",
            prod: [
                {
                    title: 'чизкейк классический',
                    price: "38",
                    image: "DSC00235"
                },
                {
                    title: 'чизкейк фисташковый',
                    price: "38",
                    image: "DSC00235-1"
                },
                {
                    title: 'чизкейк черная смородина',
                    price: "38",
                    image: "DSC00235-2"
                },
                {
                    title: 'рулет из профетролей',
                    price: "38",
                    image: "DSC00235-4"
                },
                {
                    title: 'медовик',
                    price: "38",
                    image: "DSC00235-3"
                },
            ]
        },
    ];

    const container = document.getElementById('menu-sections');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDisc = document.getElementById('modal-disc');
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.getElementById('modal-close');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    menuItems.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'menu-section';

        const title = document.createElement('h2');
        title.textContent = section.title.toUpperCase()
        sectionEl.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        section.prod.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
          <img src="./assets/images/menu/${section.category}/${item.image}.jpg" alt="${item.title}" />
          <div class="info">
            <h3>${item.title.toUpperCase()}</h3>
            <h4>${item.disc ? item.disc : ""}</h4>
            <p class="price">${item.price} 000</p>
          </div>
        `;

            card.addEventListener('click', () => {
                modalImg.src = `./assets/images/menu/${section.category}/${item.image}.jpg`;
                modalImg.alt = item.title;
                modalTitle.textContent = item.title.toUpperCase();
                if(item.disc){
                    modalDisc.textContent = item.disc
                }
                modalPrice.textContent = item.price + ' 000';
                modal.classList.add('open');
            });

            grid.appendChild(card);
        });

        sectionEl.appendChild(grid);
        container.appendChild(sectionEl);
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
});
