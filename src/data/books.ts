export interface Book {
  title: string;
  year: number | string;
  category: 'osmanli' | 'turkiye' | 'dunya' | 'yasam' | 'sehir' | 'akademik';
  desc: string;
  coAuthor?: string;
}

export const bookCategories: Record<string, string> = {
  osmanli: 'Osmanlı Tarihi',
  turkiye: 'Türkiye ve Cumhuriyet',
  dunya: 'Dünya Tarihi ve Avrupa',
  yasam: 'Yaşam ve Seyahat',
  sehir: 'Şehirler ve Coğrafya',
  akademik: 'Akademik Eserler',
};

export const books: Book[] = [
  // Osmanlı
  {
    title: 'Osmanlı İmparatorluğu\'nda Alman Nüfuzu',
    year: 1983,
    category: 'osmanli',
    desc: 'Doçentlik tezi. Geç Osmanlı döneminin jeopolitik ve askeri dönüşümlerini, Almanya ile kurulan stratejik ilişkileri analiz eden öncü çalışma.'
  },
  {
    title: 'İmparatorluğun En Uzun Yüzyılı',
    year: 1983,
    category: 'osmanli',
    desc: '19. yüzyıl Osmanlı İmparatorluğu\'nun çöküş sürecini, modernleşme sancılarını ve büyük güçlerle ilişkilerini inceleyen başyapıt.'
  },
  {
    title: 'Osmanlı\'yı Yeniden Keşfetmek',
    year: 2006,
    category: 'osmanli',
    desc: 'Osmanlı kurumlarını, bürokratik yapısını ve toplumsal dinamiklerini günümüz okuruna aktaran, geniş kitlelerce okunan popüler tarih eseri.'
  },
  {
    title: 'Son İmparatorluk Osmanlı',
    year: 2006,
    category: 'osmanli',
    desc: 'Osmanlı İmparatorluğu\'nun son dönemine odaklanan, imparatorluğun çözülüş nedenlerini ve Birinci Dünya Savaşı sürecini ele alan kapsamlı çalışma.'
  },
  {
    title: 'Osmanlı Barışı',
    year: 2007,
    category: 'osmanli',
    desc: 'Pax Ottomana kavramını merkeze alarak Osmanlı\'nın farklı etnik ve dini toplulukları yüzyıllarca nasıl bir arada tutabildiğini sorgulayan eser.'
  },
  {
    title: 'Osmanlı Düşünce Dünyası ve Tarih Yazımı',
    year: 2015,
    category: 'osmanli',
    desc: 'Osmanlı entelijansiyasının düşünce yapısını, tarih algısını ve entelektüel üretimini analiz eden akademik çalışma.'
  },
  // Türkiye ve Cumhuriyet
  {
    title: 'Türkiye Teşkilat ve İdare Tarihi',
    year: 1979,
    category: 'turkiye',
    desc: 'Türkiye\'nin idari yapılanmasının tarihsel kökenlerini, Tanzimat\'tan Cumhuriyet\'e uzanan bürokratik dönüşümü inceleyen temel akademik kaynak.'
  },
  {
    title: 'Cumhuriyetin İlk Yüzyılı',
    year: 2012,
    category: 'turkiye',
    desc: 'Cumhuriyet\'in kuruluşundan modern Türkiye\'ye uzanan yüz yıllık dönüşüm hikayesini analitik bir perspektifle ele alan kapsamlı eser.'
  },
  {
    title: 'Gazi Mustafa Kemal Atatürk',
    year: 2018,
    category: 'turkiye',
    desc: 'Atatürk\'ün liderliğini, vizyonunu ve kriz anlarındaki stratejik dehasını tarihsel belgeler ışığında inceleyen biyografik çalışma.'
  },
  {
    title: 'Yakın Tarihin Gerçekleri',
    year: 2007,
    category: 'turkiye',
    desc: 'Türkiye\'nin yakın tarihindeki kırılma noktalarını, siyasi dönüşümleri ve toplumsal değişimleri ele alan derlemeler.'
  },
  {
    title: 'Türklerin Tarihi',
    year: 2015,
    category: 'turkiye',
    desc: 'Orta Asya steplerinden Anadolu\'ya, Osmanlı İmparatorluğu\'ndan Cumhuriyet\'e Türklerin binlerce yıllık serüvenini anlatan kapsamlı tarih eseri.'
  },
  {
    title: 'Cumhuriyetin İlk Sabahı',
    year: 2020,
    category: 'turkiye',
    desc: 'Cumhuriyet\'in kuruluş anının toplumsal, siyasi ve psikolojik atmosferini, o sabahın ruhunu aktaran eser.'
  },
  // Dünya ve Avrupa
  {
    title: 'Avrupa ve Biz',
    year: 2007,
    category: 'dunya',
    desc: 'Türkiye-Avrupa ilişkilerinin tarihsel derinliğini, kültürel etkileşimi ve modernleşme sürecindeki Batı etkisini sorgulayan analitik çalışma.'
  },
  {
    title: 'Tarihimiz ve Biz',
    year: 2008,
    category: 'dunya',
    desc: 'Toplumsal hafızayı, tarih bilincinin önemini ve Türk toplumunun tarihle kurduğu ilişkiyi irdeleyen düşünce eseri.'
  },
  {
    title: 'Eski Dünyaya Yeni Bakış',
    year: 2010,
    category: 'dunya',
    desc: 'Kadim medeniyetlere modern bir perspektiften yaklaşan, Ortaylı\'nın karşılaştırmalı tarih metodolojisini yansıtan eser.'
  },
  {
    title: 'Gelenekten Geleceğe',
    year: 2001,
    category: 'dunya',
    desc: 'Geleneksel değerler ile modernleşme arasındaki gerilimi, toplumların dönüşüm süreçlerini inceleyen düşünce yazıları.'
  },
  // Yaşam ve Seyahat
  {
    title: 'Bir Ömür Nasıl Yaşanır?',
    year: 2019,
    category: 'yasam',
    desc: 'Ortaylı\'nın yaşam felsefesini, seyahat prensiplerini, okuma disiplinini ve gençlere tavsiyelerini bir araya getiren, en çok satan eseri.'
  },
  {
    title: 'Tarihin Sınırlarına Yolculuk',
    year: 2017,
    category: 'yasam',
    desc: 'Dünya genelindeki seyahat deneyimlerini, farklı medeniyetlerin izlerini ve kültürel gözlemlerini aktaran seyahatname.'
  },
  {
    title: 'Tarih Yazıcılık Üzerine',
    year: 2009,
    category: 'yasam',
    desc: 'Tarih biliminin metodolojisini, tarihçinin sorumluluğunu ve tarih yazımının evrensel ilkelerini tartışan akademik deneme.'
  },
  // Şehirler
  {
    title: 'Üç Şehir',
    year: 2015,
    category: 'sehir',
    desc: 'İstanbul, Kudüs ve Roma\'yı karşılaştırmalı bir perspektifle ele alan, üç kadim başkentin medeniyet katmanlarını okuyan eser.'
  },
  {
    title: 'İstanbul\'dan Sayfalar',
    year: 2014,
    category: 'sehir',
    desc: 'İstanbul\'un tarihi dokusunu, mahallelerini, sosyal yapısını ve kültürel hafızasını anlatan şehir monografisi.'
  },
  {
    title: 'Atatürk\'ün Şehri Ankara',
    year: 2020,
    category: 'sehir',
    coAuthor: 'Nevzat Kütük',
    desc: 'Cumhuriyet\'in başkenti Ankara\'nın dönüşümünü, modern şehircilik vizyonunu ve Atatürk ile bağını anlatan eser.'
  },
  // Akademik
  {
    title: 'Tanzimat Devrinde Osmanlı Mahallî İdareleri',
    year: 1974,
    category: 'akademik',
    desc: 'Doktora tezi. Osmanlı İmparatorluğu\'nun modernleşme sürecinde merkezin taşra ile kurduğu bürokratik ilişkileri inceleyen öncü akademik çalışma.'
  },
  {
    title: 'Türkiye İdare Tarihi',
    year: 1979,
    category: 'akademik',
    desc: 'Türkiye\'nin idari yapılanmasının tarihsel evrimini sistematik olarak ele alan temel başvuru eseri.'
  },
  {
    title: 'Hukuk Metodolojisi ve Tarih Metodolojisi',
    year: 2010,
    category: 'akademik',
    desc: 'Hukuk ve tarih bilimlerinin metodolojik kesişim noktalarını, karşılaştırmalı bir perspektifle analiz eden akademik eser.'
  },
  // Ek Osmanlı eserleri
  {
    title: 'Osmanlı Sarayında Hayat',
    year: 2008,
    category: 'osmanli',
    desc: 'Topkapı Sarayı başkanlığı deneyiminden de beslenerek Osmanlı saray yaşamını, harem kurumunu, padişah günlük hayatını ve saray teşrifat kurallarını anlatan benzersiz eser.'
  },
  {
    title: 'Osmanlı\'da Milletler ve Diplomasi',
    year: 2008,
    category: 'osmanli',
    desc: 'Osmanlı İmparatorluğu\'ndaki millet sistemini, gayrimüslim toplulukların idari statüsünü ve imparatorluğun çok kültürlü diplomasi geleneğini inceleyen çalışma.'
  },
  {
    title: 'Osmanlı Mirasından Cumhuriyet Türkiyesine',
    year: 2011,
    category: 'osmanli',
    desc: 'İmparatorluktan ulus devlete geçiş sürecindeki kurumsal, toplumsal ve zihinsel dönüşümü, kopuşlar ve süreklilikler ekseninde inceleyen kapsamlı analiz.'
  },
  // Ek Türkiye eserleri
  {
    title: 'Türkiye\'nin Yakın Tarihi',
    year: 2012,
    category: 'turkiye',
    desc: 'Tek parti döneminden çok partili hayata, askeri müdahalelerden sivil siyasete Türkiye\'nin 20. yüzyıl macerasını belgeleyen derlemeler.'
  },
  {
    title: 'Türkiye Nasıl Modernleşti?',
    year: 2005,
    category: 'turkiye',
    desc: 'Tanzimat\'tan Cumhuriyet\'e uzanan modernleşme sürecini, Batılılaşma hareketlerini ve toplumsal dönüşüm dinamiklerini sorgulayan eser.'
  },
  // Ek Dünya ve Avrupa eserleri
  {
    title: 'Tarih ve Politika',
    year: 2013,
    category: 'dunya',
    desc: 'Tarihin siyasi araç olarak kullanımını, tarih politikalarını ve toplumsal hafıza inşasının jeopolitik boyutlarını irdeleyen düşünce yazıları.'
  },
  {
    title: 'Rusya\'nın Yakın Tarihi',
    year: 2016,
    category: 'dunya',
    desc: 'Çarlık\'tan Sovyet dönemine, Sovyet çöküşünden Putin Rusyası\'na uzanan tarihsel süreci, Türk-Rus ilişkileri perspektifinden inceleyen çalışma.'
  },
  {
    title: 'Habsburgları Anlamak',
    year: 2017,
    category: 'dunya',
    desc: 'Viyana\'daki akademik yıllarından beslenen, Habsburg İmparatorluğu\'nun çok uluslu yapısını ve Orta Avrupa\'nın kültürel mirasını ele alan karşılaştırmalı tarih eseri.'
  },
  // Ek Yaşam ve Seyahat eserleri
  {
    title: 'Evvel Zaman İçinde',
    year: 2010,
    category: 'yasam',
    desc: 'Çocukluk ve gençlik hatıralarını, Ankara\'nın eski günlerini, aile hikayelerini ve kişisel anekdotlarını paylaştığı otobiyografik anlatılar.'
  },
  {
    title: 'İlber Ortaylı ile Konuşmalar',
    year: 2016,
    category: 'yasam',
    desc: 'Farklı konularda yapılan röportaj ve söyleşilerin bir araya getirildiği, Ortaylı\'nın dünya görüşünü, toplumsal eleştirilerini ve tavsiyelerini içeren derlemeler.'
  },
  {
    title: 'Niçin Türkiye',
    year: 2022,
    category: 'yasam',
    desc: 'Türkiye\'nin tarihsel zenginliğini, coğrafi avantajlarını ve kültürel birikimini dünya perspektifinden değerlendiren, ülke tanıtımı niteliğinde eser.'
  },
  // Ek Şehir eserleri
  {
    title: 'Son İmparatorluk İstanbul',
    year: 2021,
    category: 'sehir',
    desc: 'İstanbul\'un Osmanlı\'nın son yüzyılındaki çok kültürlü yapısını, kozmopolit yaşamını ve imparatorluğun başkenti olarak son günlerini anlatan şehir tarihi.'
  },
  {
    title: 'İstanbul: Dünya Tarihinin Başkenti',
    year: 2023,
    category: 'sehir',
    desc: 'İstanbul\'u yalnızca bir Türk şehri olarak değil, dünya tarihinin en kritik kavşak noktası olarak konumlandıran, şehrin evrensel önemini vurgulayan kapsamlı monografi.'
  },
  {
    title: 'Büyük Şehirlerin Kısa Tarihi',
    year: 2019,
    category: 'sehir',
    desc: 'Roma, Viyana, Paris, Moskova ve İstanbul gibi büyük başkentlerin tarihsel gelişimini karşılaştırmalı olarak ele alan, şehir tarihçiliğinin özgün bir örneği.'
  },
  // Ek Akademik eserler
  {
    title: 'Tarih ve Toplum Üzerine',
    year: 2014,
    category: 'akademik',
    desc: 'Sosyal tarih metodolojisi, toplumsal hafıza ve kolektif kimlik inşası üzerine akademik makalelerin bir araya getirildiği derleme eser.'
  },
  {
    title: 'Batılılaşma Yolunda',
    year: 2007,
    category: 'akademik',
    desc: 'Osmanlı-Türk Batılılaşma sürecinin kökenlerini, Tanzimat reformlarını ve modernleşme projelerinin tarihsel analizini sunan akademik çalışma.'
  },
  {
    title: 'Yerel Yönetim Geleneğimiz',
    year: 1985,
    category: 'akademik',
    desc: 'Osmanlı\'dan Cumhuriyet\'e yerel yönetim geleneğinin tarihsel kökenlerini, belediyecilik anlayışının evrimini ve merkez-taşra ilişkilerini inceleyen akademik eser.'
  },
];
