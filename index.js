document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            category: "topping",
            title: "Топинги",
            prod: [
                {
                    title: 'Овощи на мангале',
                    price: "35",
                    image: "DSC09612-2"
                },
                {
                    title: 'Помидоры слабосоленые с укропом и чесноком',
                    price: "22",
                    image: "DSC09612-3"
                },
                {
                    title: 'Ташкент',
                    price: "35",
                    image: "DSC09612-1"
                },
                {
                    title: 'Семург',
                    price: "35",
                    image: "DSC09612"
                },
                {
                    title: 'Лук на грле',
                    price: "22",
                    image: "DSC09612-4"
                },
                {
                    title: 'Молодая свекла',
                    price: "22",
                    image: "DSC09612-5"
                },
                {
                    title: 'Гурийская капуста',
                    price: "22",
                    image: "DSC09592-1"
                },
                {
                    title: 'Битые огурцы',
                    price: "22",
                    image: "DSC09592-4"
                },
                {
                    title: 'Квашенная капуста',
                    price: "22",
                    image: "DSC09592-6"
                },
                {
                    title: 'Вешенки с красным луком',
                    price: "28",
                    image: "DSC09592-5"
                },
                {
                    title: 'Огурцы малосольные',
                    price: "22",
                    image: "DSC09592-3"
                },
                {
                    title: 'Домашняя овощная икра',
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
                    price: "35",
                    image: "iranjpg"
                },
                {
                    title: 'Домашний козий сыр',
                    price: "80",
                    image: "DSC09579"
                },
                {
                    title: 'Домашняя брынза',
                    price: "35",
                    image: "DSC09579-1"
                },
                {
                    title: 'Сузьма',
                    price: "28",
                    image: "DSC09579-2"
                },
                {
                    title: 'Мацони',
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
                    title: 'Тунец',
                    price: "65",
                    image: "DSC09554"
                },
                {
                    title: 'Сельдь бочковая',
                    price: "35",
                    image: "DSC09554-1"
                },
                {
                    title: 'Национальная форель домашнего слабого посола',
                    price: "80",
                    image: "DSC09554-2"
                },
                {
                    title: 'Сыроваленая говядина с молодой рукколой и выдержанным сыром',
                    price: "55",
                    image: "DSC09528"
                },
                {
                    title: 'Казы',
                    price: "80",
                    image: "DSC09528-1"
                },
                {
                    title: 'Бекон из говядины',
                    price: "60",
                    image: "DSC09528-2"
                },
                {
                    title: 'Свежая зелены',
                    price: "28",
                    image: "DSC09638"
                },
                {
                    title: 'Пряный бараний курдюк собственного копчения',
                    price: "80",
                    image: "DSC09638-1"
                },
                {
                    title: 'Телячий язык',
                    price: "70",
                    image: "DSC09638-2"
                },
                {
                    title: 'Свежие овощи и зелень',
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
                    price: "35",
                    image: "DSC09675"
                },
                {
                    title: 'Хрустящие баклажаны с карпаччо из томатов',
                    price: "45",
                    image: "DSC09675-1"
                },
                {
                    title: 'Салат бахор',
                    price: "38",
                    image: "DSC09675-2"
                },
                {
                    title: 'Теплый салат из ягненка и овощей',
                    price: "55",
                    image: "DSC09927"
                },
                {
                    title: 'Цезарь с курицей',
                    price: "45",
                    image: "DSC09927-3"
                },
                {
                    title: 'Салат из маринованной говядины',
                    price: "55",
                    image: "DSC09927-1"
                },
                {
                    title: 'Теплый салат из телятины и овощей',
                    price: "55",
                    image: "DSC09927-2"
                },
                {
                    title: 'Салат греческий',
                    price: "38",
                    image: "DSC09898"
                },
                {
                    title: 'Табуле',
                    price: "35",
                    image: "DSC09898-2"
                },
                {
                    title: 'Салат из рукколы и валеной говядины',
                    price: "55",
                    image: "DSC09898-1"
                },
                {
                    title: 'Джиз из куриных крылышек',
                    price: "55",
                    image: "DSC09947"
                },
                {
                    title: 'Джиз из бараньих семечек',
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
                    price: "70",
                    image: "DSC09963"
                },
                {
                    title: 'Кеци из баранины',
                    price: "52",
                    image: "DSC09963-1"
                },
                {
                    title: 'Кеци из курицы',
                    price: "45",
                    image: "DSC09963-2"
                },
                {
                    title: 'Чучвара с овощами',
                    price: "35",
                    image: "DSC09991"
                },
                {
                    title: 'Цыпленок тапака',
                    price: "70",
                    image: "DSC09991-1"
                },
                {
                    title: 'Чучвара жареная',
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
                    price: "28",
                    image: "DSC09743-1"
                },
                {
                    title: 'питти',
                    price: "45",
                    image: "DSC09743-2"
                },
                {
                    title: 'куриный бульон с лапшой и фрикадельками',
                    price: "28",
                    image: "DSC09718"
                },
                {
                    title: 'мастава ташкентская',
                    price: "45",
                    image: "DSC09718-1"
                },
                {
                    title: 'щавельный суп с фрикадельками',
                    price: "28",
                    image: "DSC09718-2"
                },
                {
                    title: 'говяжбя вырезка с овощами сай',
                    price: "80",
                    image: "DSC00019"
                },
                {
                    title: 'нохат шурак',
                    price: "120",
                    image: "DSC00019-1"
                },
                {
                    title: 'лукум из говядины',
                    price: "70",
                    image: "DSC00019-2"
                },
                {
                    title: 'говяжьи ребра',
                    price: "250",
                    image: "DSC00052"
                },
                {
                    title: 'куртоб из бараньей шеи',
                    price: "250",
                    image: "DSC00052-2"
                },
                {
                    title: 'томленая баранья лопатка',
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
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.getElementById('modal-close');
  
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
            <p class="price">${item.price} 000</p>
          </div>
        `;
  
        card.addEventListener('click', () => {
          modalImg.src = `./assets/images/menu/${section.category}/${item.image}.jpg`;
          modalImg.alt = item.title;
          modalTitle.textContent = item.title.toUpperCase();
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
  
    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
  