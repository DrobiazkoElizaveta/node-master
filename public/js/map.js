ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [60.7131, 28.7329], // Координаты города Выборг
        zoom: 15
    });
    var alvarAaltoLibrary = new ymaps.Placemark([60.709027, 28.747385], {
        balloonContentHeader: 'Библиотека Алвара Аалто',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/Библиотека АА.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var tram = new ymaps.Placemark([60.711693, 28.736899], {
        balloonContentHeader: 'Выборгский трамвай',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/трамвай.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var сathedralOfPeterAndPaul = new ymaps.Placemark([60.712087, 28.738353], {
        balloonContentHeader: 'Выборгский трамвай',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/церковьПП.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var elk = new ymaps.Placemark([60.709627, 28.747111], {
        balloonContentHeader: 'Лось',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/лось.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var cathedralOfTheTransfigurationOfTheLord = new ymaps.Placemark([60.710152, 28.739217], {
        balloonContentHeader: 'Кафедральный собор Преображения Господня',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/собор.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var hermitageVyborg = new ymaps.Placemark([60.708605, 28.737303], {
        balloonContentHeader: 'Эрмитаж-Выборг',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/эрмитаж.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var roundTower = new ymaps.Placemark([60.712969, 28.737378], {
        balloonContentHeader: 'Круглая башня',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/круглаябашня.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var lelin = new ymaps.Placemark([60.710730, 28.750156], {
        balloonContentHeader: 'Ленин',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/Ленин.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
    var batteryMountain = new ymaps.Placemark([60.705084, 28.755370], {
        balloonContentHeader: 'Батарейная',
        balloonContentBody: 'Текст о библиотеке',
        iconContent: '<img src="./img/img2/Батарейная.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });

    myMap.geoObjects.add(alvarAaltoLibrary);
    myMap.geoObjects.add(tram);
    myMap.geoObjects.add(сathedralOfPeterAndPaul);
    myMap.geoObjects.add(elk);
    myMap.geoObjects.add(cathedralOfTheTransfigurationOfTheLord);
    myMap.geoObjects.add(hermitageVyborg);
    myMap.geoObjects.add(roundTower);
    myMap.geoObjects.add(lelin);
    myMap.geoObjects.add(batteryMountain);

}