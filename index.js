document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            category: "topping",
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
            category: "milk_product",
            prod: [
                {
                    title: 'Айран',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Домашний козий сыр',
                    price: "80",
                    image: "title_of_path"
                },
                {
                    title: 'Домашняя брынза',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Сузьма',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'Мацони',
                    price: "28",
                    image: "matsoni"
                },
            ]
        },
        {
            category: "cold_snaks",
            prod: [
                {
                    title: 'Тунец',
                    price: "65",
                    image: "title_of_path"
                },
                {
                    title: 'Сельдь бочковая',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Национальная форель домашнего слабого посола',
                    price: "80",
                    image: "title_of_path"
                },
                {
                    title: 'Сыроваленая говядина с молодой рукколой и выдержанным сыром',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Казы',
                    price: "80",
                    image: "title_of_path"
                },
                {
                    title: 'Бекон из говядины',
                    price: "60",
                    image: "title_of_path"
                },
                {
                    title: 'Свежая зелены',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'Пряный бараний курдюк собственного копчения',
                    price: "80",
                    image: "title_of_path"
                },
                {
                    title: 'Телячий язык',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'Свежие овощи и зелень',
                    price: "35",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "salads",
            prod: [
                {
                    title: 'Шакароб',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Хрустящие баклажаны с карпаччо из томатов',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'Салат бахор',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'Теплый салат из ягненка и овощей',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Цезарь с курицей',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'Салат из маринованной говядины',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Теплый салат из телятины и овощей',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Салат греческий',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'Табуле',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Салат из рукколы и валеной говядины',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Джиз из куриных крылышек',
                    price: "55",
                    image: "title_of_path"
                },
                {
                    title: 'Джиз из бараньих семечек',
                    price: "55",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "hot_snaks",
            prod: [
                {
                    title: 'Кеци из говядины',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'Кеци из баранины',
                    price: "52",
                    image: "title_of_path"
                },
                {
                    title: 'Кеци из курицы',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'Чучвара с овощами',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'Цыпленок тапака',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'Чучвара жареная',
                    price: "35",
                    image: "title_of_path"
                },
                
            ]
        },
        {
            category: "pizza",
            prod: [
                {
                    title: 'с ветчиной и грибами',
                    price: "85",
                    image: "title_of_path"
                },
                {
                    title: 'с колбасой',
                    price: "85",
                    image: "title_of_path"
                },
                {
                    title: 'с костным мозгом и каперсами',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'с казы и красным луком',
                    price: "110",
                    image: "title_of_path"
                },
                {
                    title: 'цезарь',
                    price: "85",
                    image: "title_of_path"
                },
                {
                    title: 'с джизом из говядины',
                    price: "110",
                    image: "title_of_path"
                },
                {
                    title: 'с говяжьими фрикадельками',
                    price: "98",
                    image: "title_of_path"
                },
                {
                    title: 'пицца с дизом из баранины',
                    price: "85",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "sup_and_hot_meal",
            prod: [
                {
                    title: 'Лагман по-уйгурски',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'ЧУЧвара шурпа',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'питти',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'куриный бульон с лапшой и фрикадельками',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'мастава ташкентская',
                    price: "45",
                    image: "title_of_path"
                },
                {
                    title: 'щавельный суп с фрикадельками',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'говяжбя вырезка с овощами сай',
                    price: "80",
                    image: "title_of_path"
                },
                {
                    title: 'нохат шурак',
                    price: "120",
                    image: "title_of_path"
                },
                {
                    title: 'лукум из говядины',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'говяжьи ребра',
                    price: "250",
                    image: "title_of_path"
                },
                {
                    title: 'куртоб из бараньей шеи',
                    price: "250",
                    image: "title_of_path"
                },
                {
                    title: 'томленая баранья лопатка',
                    price: "380",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "coal",
            prod: [
                {
                    title: 'выерзка',
                    price: "48",
                    image: "title_of_path"
                },
                {
                    title: 'баранина корейка',
                    price: "60",
                    image: "title_of_path"
                },
                {
                    title: 'шашлык из бараньих ребер',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'шашлык из баранины',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'томаты',
                    price: "18",
                    image: "title_of_path"
                },
                {
                    title: 'молотый',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'куриные крылья',
                    price: "28",
                    image: "title_of_path"
                },
                {
                    title: 'цыпленок на углях',
                    price: "70",
                    image: "title_of_path"
                },
                {
                    title: 'бикин',
                    price: "48",
                    image: "title_of_path"
                },
                {
                    title: 'куриная голень',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'шышлык из языка',
                    price: "35",
                    image: "title_of_path"
                },
                {
                    title: 'курдюк',
                    price: "22",
                    image: "title_of_path"
                },
                {
                    title: 'шашлык из овощей',
                    price: "18",
                    image: "title_of_path"
                },
                {
                    title: 'шащлык из лосося',
                    price: "65",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "garnir",
            prod: [
                {
                    title: 'картофель по-деревенски с чесноком и травами',
                    price: "30",
                    image: "title_of_path"
                },
                {
                    title: 'рис на пару',
                    price: "30",
                    image: "title_of_path"
                },
                {
                    title: 'припущенный шпинат с валеными томатами',
                    price: "30",
                    image: "title_of_path"
                },
                {
                    title: 'картофель фри',
                    price: "30",
                    image: "title_of_path"
                },
            ]
        },
        {
            category: "deserts",
            prod: [
                {
                    title: 'чизкейк классический',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'чизкейк фисташковый',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'чизкейк черная смородина',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'рулет из профетролей',
                    price: "38",
                    image: "title_of_path"
                },
                {
                    title: 'медовик',
                    price: "38",
                    image: "title_of_path"
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
      title.textContent = section.category.replaceAll('_', ' ').toUpperCase();
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
  