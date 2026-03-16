export interface IstanbulStop {
  num: number;
  name: string;
  lat: number;
  lng: number;
  desc: string;
}

export const istanbulStops: IstanbulStop[] = [
  { num: 1, name: 'Eminönü', lat: 41.0175, lng: 28.9714, desc: 'Başlangıç noktası. Haliç\'in girişi, Yeni Cami ve Mısır Çarşısı\'nın buluştuğu tarihi liman.' },
  { num: 2, name: 'Rıza Paşa Yokuşu', lat: 41.0164, lng: 28.9680, desc: 'Süleymaniye\'ye tırmanan tarihi yokuş. Osmanlı sivil mimarisinin izleri.' },
  { num: 3, name: 'Süleymaniye Camii', lat: 41.0163, lng: 28.9644, desc: 'Mimar Sinan\'ın kalfalık eseri. İstanbul silüetinin tacı, Klasik Osmanlı mimarisinin zirvesi.' },
  { num: 4, name: 'Küçükpazar', lat: 41.0188, lng: 28.9620, desc: 'Haliç kıyısındaki kadim ticaret noktası. Bizans döneminden kalma altyapı izleri.' },
  { num: 5, name: 'Zeyrek', lat: 41.0210, lng: 28.9580, desc: 'Pantokrator Manastırı (Zeyrek Camii). İstanbul\'un en eski Bizans yapılarından biri, UNESCO listesinde.' },
  { num: 6, name: 'Çarşamba', lat: 41.0260, lng: 28.9520, desc: 'Fatih\'in kalbi. Geleneksel mahalle dokusu, tarihi çarşamba pazarı ve Osmanlı sivil yaşamının izleri.' },
  { num: 7, name: 'Balat', lat: 41.0305, lng: 28.9490, desc: 'Musevi, Rum ve Osmanlı kültürlerinin iç içe geçtiği kozmopolit mahalle. Renkli ahşap evler ve tarihi sinagoglar.' },
  { num: 8, name: 'Ayvansaray', lat: 41.0345, lng: 28.9420, desc: 'Haliç\'in en dar noktası. Bizans surlarının denizle buluştuğu yer, Blakhernai Sarayı kalıntıları.' },
  { num: 9, name: 'Edirnekapı', lat: 41.0330, lng: 28.9340, desc: 'Fatih Sultan Mehmed\'in 1453\'te şehre girdiği tarihi kapı. Teodosyus surlarının en anıtsal noktası.' },
  { num: 10, name: 'Kariye Camii', lat: 41.0318, lng: 28.9390, desc: 'Bizans mozaik ve fresklerinin dünya çapındaki başyapıtı. Chora Manastırı\'nın eşsiz sanat hazinesi.' },
  { num: 11, name: 'Yedikule Hisarı', lat: 41.0035, lng: 28.9220, desc: 'Bizans Altın Kapısı ve Osmanlı zindan kulelerinin birleştiği muazzam kale. İstanbul\'un güney savunma hattı.' },
  { num: 12, name: 'Beyazıt', lat: 41.0115, lng: 28.9650, desc: 'Beyazıt Meydanı, İstanbul Üniversitesi kapısı ve Sahaflar Çarşısı. Osmanlı\'nın entelektüel merkezi.' },
  { num: 13, name: 'Sultanahmet', lat: 41.0054, lng: 28.9768, desc: 'Rota finali. Ayasofya, Sultanahmet Camii, Hipodrom ve Yerebatan Sarnıcı. Üç imparatorluğun kalbi.' },
];

// Route polyline coordinates (approximated walking path)
export const istanbulRouteCoords: [number, number][] = [
  [41.0175, 28.9714], // 1 - Eminönü
  [41.0164, 28.9680], // 2 - Rıza Paşa Yokuşu
  [41.0163, 28.9644], // 3 - Süleymaniye
  [41.0188, 28.9620], // 4 - Küçükpazar
  [41.0210, 28.9580], // 5 - Zeyrek
  [41.0260, 28.9520], // 6 - Çarşamba
  [41.0305, 28.9490], // 7 - Balat
  [41.0345, 28.9420], // 8 - Ayvansaray
  [41.0330, 28.9340], // 9 - Edirnekapı
  [41.0318, 28.9390], // 10 - Kariye
  [41.0310, 28.9330], // Edirnekapı'ya geri
  [41.0220, 28.9250], // Sur boyunca güneye
  [41.0100, 28.9220], // Güneye iniş
  [41.0035, 28.9220], // 11 - Yedikule
  [41.0040, 28.9380], // Doğuya dönüş
  [41.0080, 28.9520], // Kuzey-doğu
  [41.0115, 28.9650], // 12 - Beyazıt
  [41.0090, 28.9700], // Güneye
  [41.0054, 28.9768], // 13 - Sultanahmet
];
