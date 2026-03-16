export const timelineData = [
  { year: '1947', text: 'Avusturya Bregenz\'te, Kafkasyalı Karaçay kökenli bir göçmen ailenin çocuğu olarak dünyaya geldi.' },
  { year: '1949', text: 'Ailesiyle birlikte Türkiye\'ye göç etti. Evde Türkçe, Almanca ve Rusça konuşulan çok kültürlü bir ortamda büyüdü.' },
  { year: '1965', text: 'İstanbul Avusturya Lisesi\'nde başlayan eğitimini Ankara Atatürk Lisesi\'nde tamamladı.' },
  { year: '1968', text: 'Ankara Üniversitesi DTCF Tarih Bölümü\'nden mezun oldu. Halil İnalcık, Şerif Mardin gibi dev isimlerin öğrencisi oldu.' },
  { year: '1970\'ler', text: 'Viyana Üniversitesi\'nde Slav dilleri ve oryantalistik okudu. Chicago Üniversitesi\'nde Halil İnalcık gözetiminde yüksek lisansını tamamladı.' },
  { year: '1974', text: 'Ankara Üniversitesi SBF\'de "Tanzimat Sonrası Mahallî İdareler" teziyle tarih doktorasını aldı.' },
  { year: '1979', text: '"Osmanlı İmparatorluğu\'nda Alman Nüfuzu" çalışmasıyla doçent unvanını kazandı.' },
  { year: '1982', text: 'Askeri darbe sonrası üniversite üzerindeki siyasi baskılara tepki göstererek görevinden istifa etti. Bu onurlu duruş, küresel akademik kariyerinin kapısını açtı.' },
  { year: '1982-89', text: 'Viyana, Berlin, Paris, Princeton, Moskova, Roma, Cambridge, Oxford ve Tunus\'ta misafir öğretim üyeliği yaptı.' },
  { year: '1989', text: 'Profesörlük kadrosuna yükseldi.' },
  { year: '2001', text: 'Tarih bilimini geniş kitlelere sevdirme çabaları Aydın Doğan Ödülü ile taçlandırıldı.' },
  { year: '2005-2012', text: 'Topkapı Sarayı Müzesi Başkanlığı. Müzenin uluslararası standartlara kavuşması için devrim niteliğinde adımlar attı.' },
  { year: '2006', text: 'İtalya\'da Akdeniz Festivali kapsamında Lazio Ödülü\'nü aldı.' },
  { year: '2007', text: 'Rus dili ve kültürüne katkılarından dolayı Vladimir Putin tarafından takdim edilen Puşkin Madalyası\'nı aldı.' },
  { year: '2017', text: 'Cumhurbaşkanlığı Kültür ve Sanat Büyük Ödülü.' },
  { year: '2018', text: 'Kültür ve Turizm Bakanlığı danışmanlığı görevini üstlendi.' },
  { year: '13 Mart 2026', text: 'İstanbul Koç Üniversitesi Hastanesi\'nde hayata veda etti. Yeri doldurulamaz bir boşluk bıraktı.' }
];

export const quotesData = [
  { text: 'Tarih bir nostalji konusu değildir.', category: 'tarih' as const },
  { text: 'Tarih yazıp da onu okumamak ve bilimsel metotlarla yazmamakta ısrar etmek en utanç verici özelliğimizdir.', category: 'tarih' as const },
  { text: 'Yunan, Roma ve Avrupa tarihini kendimizi bilmek ve anlamak için öğrenmeliyiz; çünkü biz onun içindeyiz.', category: 'tarih' as const },
  { text: 'Balkanlar\'da Atatürk bir efsanedir. Balkanlı olmanın toplumumuzun bir parçası olduğu çok açıktır.', category: 'tarih' as const },
  { text: 'Cehaletin eyleme geçmiş hali çok tehlikelidir.', category: 'egitim' as const },
  { text: 'Yarı cahillik bir toplumu içeriden çürütmenin en sinsi yoludur.', category: 'egitim' as const },
  { text: 'Üniversite öğrencileri salt diploma adayları değil, geleceğin münevverleri olarak konumlandırılmalıdır.', category: 'egitim' as const },
  { text: 'İyi bir altyapı eğitiminin yanı sıra, bireyin yalnızlıkla barışık olması okuma eyleminin en temel şartıdır.', category: 'egitim' as const },
  { text: 'Mektebi bitirir bitirmez evlenip de mobilyacı dükkânı gezeceğinize, dünyayı gezin derim. Dünyayı görmeden hiçbir şey ifade edemezsiniz.', category: 'yasam' as const },
  { text: 'Korkuyu bilmeyen kişi cesur da olamaz. Çünkü cesaretin yolu korkuyu tanımaktan geçer.', category: 'yasam' as const },
  { text: 'Her nefis ölümü tadacaktır ayeti tabutların veya mezarlıkların üzerine değil, bankalara ve makam koltuklarına yazılmalıdır.', category: 'yasam' as const },
  { text: 'Kendinizden farklı düşünenleri mutlaka dinleyin. O cümledeki "düşünen" kelimesine özellikle dikkat edin.', category: 'yasam' as const },
  { text: 'İşe yaramayan müttefik, düşmandan beterdir.', category: 'jeopolitik' as const },
  { text: 'Üçüncü Dünya\'nın tarifi ne fakirlik ne endüstrinin gelişmemişliğidir. Üçüncü Dünya yarını düşünmeyen toplumlardan oluşur.', category: 'jeopolitik' as const },
];

export const categoryLabels: Record<string, string> = {
  tarih: 'Tarih ve Hafıza',
  egitim: 'Eğitim ve Cehalet',
  yasam: 'Yaşam ve Cesaret',
  jeopolitik: 'Jeopolitik'
};

export const worldCities = [
  {
    name: 'İstanbul',
    slug: 'istanbul',
    lat: 41.0082,
    lng: 28.9784,
    route: 'europe' as const,
    season: 'Nisan-Haziran, Eylül-Ekim',
    layer: 'Bizans-Osmanlı Sentezi',
    desc: 'Avrupa ve Asya\'nın birleşme noktası. Ortaylı\'ya göre İstanbul, sadece Türklerin değil, evrensel imparatorluk miraslarının merkezidir. Şehrin tarihi katmanlarını anlamak için semt semt yürünmesi elzemdir. Ayasofya Justinianus\'un mirası, Topkapı Sarayı Osmanlı idare merkezi, Süleymaniye Külliyesi ve Kapalıçarşı bu mirasın kalbidir.',
    highlights: ['Ayasofya', 'Topkapı Sarayı', 'Süleymaniye Külliyesi', 'Kapalıçarşı', 'Arkeoloji Müzesi', 'Türk ve İslam Eserleri Müzesi'],
    color: '#c9a84c'
  },
  {
    name: 'Atina',
    slug: 'atina',
    lat: 37.9838,
    lng: 23.7275,
    route: 'europe' as const,
    season: 'Mart-Haziran, Eylül-Kasım',
    layer: 'Klasik Yunan ve Felsefe',
    desc: 'Batı medeniyetinin ontolojik beşiği. Akropolis tapınakları, Agora ve Ulusal Arkeoloji Müzesi, antik dünyanın temelini, felsefenin doğuşunu ve pagan inançlarını kavramak için şarttır. Plaka ve Monastiraki bölgelerindeki yürüyüşler, modern Yunanistan ile Osmanlı geçmişi arasındaki sivil mimari bağlarını okumak için idealdir.',
    highlights: ['Akropolis', 'Agora', 'Ulusal Arkeoloji Müzesi', 'Plaka', 'Monastiraki'],
    color: '#4a90d9'
  },
  {
    name: 'Roma',
    slug: 'roma',
    lat: 41.9028,
    lng: 12.4964,
    route: 'europe' as const,
    season: 'Mart-Haziran, Eylül-Kasım',
    layer: 'Antik-Rönesans-Barok Katmanları',
    desc: 'Hukukun ve mimarinin başkenti. Roma Forumu, Kolezyum ve Palatin Tepesi üçlemesi, yıkılmış bir cihan imparatorluğunun antik gücünü; binlerce yıllık kubbesiyle Pantheon ve devasa Vatikan Müzeleri ile Sistina Şapeli ise Hristiyanlığın ve Rönesans\'ın sanatsal otoritesini açığa çıkarır.',
    highlights: ['Roma Forumu', 'Kolezyum', 'Pantheon', 'Vatikan Müzeleri', 'Sistina Şapeli'],
    color: '#d4a853'
  },
  {
    name: 'Viyana',
    slug: 'viyana',
    lat: 48.2082,
    lng: 16.3738,
    route: 'europe' as const,
    season: 'Mayıs-Eylül, Aralık',
    layer: 'Habsburg Mirası ve Müzik',
    desc: 'Orta Avrupa\'nın aristokratik kalbi. Hofburg ve Schönbrunn sarayları imparatorluk estetiğini sunar. Sanat Tarihi Müzesi, Albertina, Belvedere ve Ephesus müzeleri Avrupa sanatını eşsiz bir tasnifle sergiler. Ortaylı bu kentin sadece gözle değil, klasik müzik konserleriyle kulakla da "işitilmesi" gerektiğini belirtir.',
    highlights: ['Hofburg Sarayı', 'Schönbrunn', 'Sanat Tarihi Müzesi', 'Albertina', 'Belvedere'],
    color: '#e8c547'
  },
  {
    name: 'Paris',
    slug: 'paris',
    lat: 48.8566,
    lng: 2.3522,
    route: 'europe' as const,
    season: 'Nisan-Haziran, Eylül-Ekim',
    layer: 'Devrim, Sanat ve Entelektüel Tarih',
    desc: 'Modernizmin başkenti. Sorbonne\'un bulunduğu Latin Mahallesi, Seine nehrindeki Île de la Cité şehrin aydınlanma sürecini yansıtır. Devrimin saraydan müzeye dönüştürdüğü devasa Louvre ve 19. yüzyıl sanatının zirvesi Musée D\'Orsay mutlaka gezilmelidir.',
    highlights: ['Louvre', 'Musée d\'Orsay', 'Latin Mahallesi', 'Île de la Cité', 'Montmartre'],
    color: '#7b68ee'
  },
  {
    name: 'Londra',
    slug: 'londra',
    lat: 51.5074,
    lng: -0.1278,
    route: 'europe' as const,
    season: 'Mayıs-Eylül',
    layer: 'İmparatorluk İzleri ve Kütüphane Geleneği',
    desc: 'Güneş batmayan imparatorluğun kültürel birikim merkezi. British Museum, National Gallery ve Tate Gallery sanat tarihinin duraklarıdır. British Library, Ortaylı\'nın her fırsatta işaret ettiği "müze-kütüphane" geleneğinin en muazzam örneğidir.',
    highlights: ['British Museum', 'National Gallery', 'Tate Gallery', 'British Library'],
    color: '#cd853f'
  },
  {
    name: 'Kudüs',
    slug: 'kudus',
    lat: 31.7683,
    lng: 35.2137,
    route: 'east' as const,
    season: 'Mart-Mayıs, Ekim-Kasım',
    layer: 'Semavi Dinler Kavşağı',
    desc: 'Dünyanın en kutsal ve en tartışmalı toprağı. Eski Şehir surları içerisindeki Hıristiyan, Yahudi, Ermeni ve Müslüman mahallelerinin yan yana yaşayışı, üç tektanrılı dinin tarihi kesişimini gösterir.',
    highlights: ['Ağlama Duvarı', 'Mescid-i Aksa', 'Kutsal Kabir Kilisesi', 'Zeytin Dağı', 'İsrail Müzesi'],
    color: '#daa520'
  },
  {
    name: 'Kahire',
    slug: 'kahire',
    lat: 30.0444,
    lng: 31.2357,
    route: 'east' as const,
    season: 'Kasım-Mart',
    layer: 'Mısır Medeniyeti ve İslam Sanatı',
    desc: 'Zamanın donduğu şehir. Devasa Giza Piramitleri ve Büyük Mısır Müzesi antik dönemin ölümsüzlük arayışına kapı açar. Bin yıllık El-Ezher Üniversitesi bölgesi ve İslami Kahire sokakları Memlük ve Osmanlı\'nın farklı bir çağ hafızasını yansıtır.',
    highlights: ['Giza Piramitleri', 'Büyük Mısır Müzesi', 'El-Ezher Üniversitesi', 'İslami Kahire'],
    color: '#b8860b'
  },
  {
    name: 'Moskova',
    slug: 'moskova',
    lat: 55.7558,
    lng: 37.6173,
    route: 'east' as const,
    season: 'Mayıs-Eylül',
    layer: 'Rus Devleti ve Ortodoks Mirası',
    desc: 'Çarlık ve Sovyet gücünün sembolü. Devasa surlarıyla Kremlin Sarayı, Katedral Meydanı\'ndaki soğan kubbeli kiliseler, Tretyakov Galerisi ve Puşkin Müzesi Rusların Slav kimliği inşasını anlatır. Metro istasyonları Sovyet modernleşme hikayesinin yeraltı sahneleridir.',
    highlights: ['Kremlin', 'Katedral Meydanı', 'Tretyakov Galerisi', 'Puşkin Müzesi', 'Metro İstasyonları'],
    color: '#8b0000'
  },
  {
    name: 'St. Petersburg',
    slug: 'st-petersburg',
    lat: 59.9311,
    lng: 30.3609,
    route: 'east' as const,
    season: 'Haziran (Beyaz Geceler), Temmuz',
    layer: 'Deli Petro\'nun Aydınlanma Rüyası',
    desc: 'Rusya\'nın Batı\'ya açılan penceresi. Dünyanın en büyük müzelerinden Hermitage Müzesi ve Rus Devlet Müzesi\'ndeki milyonlarca eser, Aydınlanma etkisindeki Batı mimarisi, Rusya\'nın Avrupa ile entegrasyon çabasının muazzam laboratuvarıdır.',
    highlights: ['Hermitage Müzesi', 'Rus Devlet Müzesi', 'Nevsky Prospekt'],
    color: '#4169e1'
  },
  {
    name: 'Berlin',
    slug: 'berlin',
    lat: 52.5200,
    lng: 13.4050,
    route: 'europe' as const,
    season: 'Mayıs-Eylül',
    layer: 'Prusya ve Soğuk Savaş Katmanları',
    desc: 'Prusya militarizminden Weimar entelektüelliğine, Nazi barbarlığından Soğuk Savaş bölünmüşlüğüne kadar Avrupa\'nın en travmatik yüzyılını tek bir şehirde okumak mümkündür. Pergamon Müzesi, Anadolu\'dan götürülen eserlerin acı hikayesini barındırır. Brandenburg Kapısı imparatorluk ve bölünme sembolü, Berlin Duvarı kalıntıları ise ideolojik çatışmanın somut hafızasıdır. Ortaylı\'nın sıklıkla vurguladığı Alman entelektüel geleneğini kavramak için bu şehir vazgeçilmezdir.',
    highlights: ['Pergamon Müzesi', 'Brandenburg Kapısı', 'Berlin Duvarı Anıtı', 'Museumsinsel', 'Charlottenburg Sarayı'],
    color: '#6b8e23'
  },
  {
    name: 'Selanik',
    slug: 'selanik',
    lat: 40.6401,
    lng: 22.9444,
    route: 'europe' as const,
    season: 'Nisan-Haziran, Eylül-Kasım',
    layer: 'Osmanlı-Rum-Yahudi Mozaiği',
    desc: 'Osmanlı Balkanlardaki çok kültürlü yaşamın en canlı laboratuvarıydı ve Selanik bu mozaiğin başkentiydi. Atatürk\'ün doğduğu ev, modern Türkiye\'nin kuruluş hikayesinin başlangıç noktasıdır. Beyaz Kule sahil şeridinde Bizans ve Osmanlı surları yan yana durur. Arkeoloji müzesi Makedonya\'nın altın çağını, Yahudi mirası ise şehrin kozmopolit ruhunu yansıtır. Ortaylı, Balkan şehirlerini anlamadan Osmanlı\'yı anlamanın mümkün olmadığını her fırsatta belirtir.',
    highlights: ['Atatürk\'ün Doğduğu Ev', 'Beyaz Kule', 'Selanik Arkeoloji Müzesi', 'Rotonda', 'Ladadika Bölgesi'],
    color: '#c97043'
  },
  {
    name: 'Floransa',
    slug: 'floransa',
    lat: 43.7696,
    lng: 11.2558,
    route: 'europe' as const,
    season: 'Nisan-Haziran, Eylül-Ekim',
    layer: 'Rönesans ve Medici Mirası',
    desc: 'Rönesans\'ın doğduğu, insanlığın karanlık çağdan aydınlığa yürüyüşünün başladığı şehir. Uffizi Galerisi Botticelli\'den Caravaggio\'ya Batı sanatının en kritik eserlerini barındırır. Medici ailesinin patronaj geleneği, sanat ile iktidar arasındaki organik bağın en zarif örneğidir. Brunelleschi\'nin Duomo kubbesi mühendislik dehasının simgesi, Ponte Vecchio ise şehrin Arno nehri üzerindeki ticari hafızasıdır.',
    highlights: ['Uffizi Galerisi', 'Duomo', 'Ponte Vecchio', 'Palazzo Pitti', 'Accademia Galerisi'],
    color: '#9b59b6'
  },
  {
    name: 'Prag',
    slug: 'prag',
    lat: 50.0755,
    lng: 14.4378,
    route: 'europe' as const,
    season: 'Nisan-Haziran, Eylül-Ekim',
    layer: 'Bohemya Gotik-Barok Sentezi',
    desc: 'Orta Avrupa\'nın en iyi korunmuş ortaçağ şehri. Gotik, Rönesans ve Barok katmanlarının üst üste bindiği Prag, Habsburg dünyasının Viyana\'dan sonraki ikinci entelektüel merkezidir. Karl Köprüsü\'nün heykelleri bir açık hava müzesi, Yahudi Mahallesi Avrupa\'nın en eski sinagoglarını ve pogrom hafızasını barındırır. Prag Kalesi kompleksi bin yıllık Bohemya krallığının tanığıdır.',
    highlights: ['Karl Köprüsü', 'Prag Kalesi', 'Yahudi Mahallesi', 'Eski Şehir Meydanı', 'Astronomik Saat'],
    color: '#2ecc71'
  },
  {
    name: 'Semerkant',
    slug: 'semerkant',
    lat: 39.6542,
    lng: 66.9597,
    route: 'east' as const,
    season: 'Nisan-Haziran, Eylül-Ekim',
    layer: 'Timurlu Mimarisi ve İpek Yolu',
    desc: 'Timur\'un dünya başkenti yapma hayaliyle inşa ettirdiği, İpek Yolu\'nun en görkemli durağı. Registan Meydanı\'ndaki üç medrese kompleksi İslam mimarisinin en muhteşem açık hava kompozisyonudur. Şah-ı Zinde nekropolü çini sanatının doruğunu sergiler. Uluğ Bey\'in rasathanesi ortaçağ bilim tarihinin en ileri astronomik gözlemeviydi. Ortaylı, Orta Asya\'yı görmeden Türk tarihini kavramanın eksik kalacağını vurgular.',
    highlights: ['Registan Meydanı', 'Şah-ı Zinde', 'Uluğ Bey Rasathanesi', 'Gur-i Emir Türbesi', 'Bibi Hanım Camii'],
    color: '#e67e22'
  },
  {
    name: 'Tahran',
    slug: 'tahran',
    lat: 35.6892,
    lng: 51.3890,
    route: 'east' as const,
    season: 'Nisan-Haziran, Eylül-Kasım',
    layer: 'Pers Medeniyeti ve Şii Mirası',
    desc: 'Kadim Fars uygarlığının modern başkenti. Ulusal Müze, Elamlardan Safevilere uzanan binlerce yıllık İran tarihini tek çatı altında sunar. Gülistan Sarayı Kaçar hanedanının ihtişamını yansıtır. Elburz Dağları\'nın eteklerindeki bu dev metropol, Ortaylı\'nın Farsça bilgisi ve İran tarihine duyduğu derin saygıyla sıkça referans verdiği bir coğrafyadır. Tahran\'ın kitapçıları ve çay evleri İran entelektüel yaşamının nabzını tutar.',
    highlights: ['İran Ulusal Müzesi', 'Gülistan Sarayı', 'Hazine-i Milli', 'Tahran Büyük Çarşısı', 'Sa\'dabad Saray Kompleksi'],
    color: '#1abc9c'
  }
];

export const monuments = [
  { name: 'Ayasofya', location: 'İstanbul', lat: 41.0086, lng: 28.9802, period: '532-537, Bizans', desc: 'İmparator I. Justinianus\'un yaptırdığı dönemin bilinen dünyasının en büyük kapalı mekanı. Hem Bizans\'ın hem de Osmanlı\'nın emperyal gücünün simgesi.' },
  { name: 'Süleymaniye Camii', location: 'İstanbul', lat: 41.0163, lng: 28.9644, period: '1551-1557, Osmanlı', desc: 'Mimar Sinan\'ın kalfalık eseri. Kanuni Sultan Süleyman adına inşa edilen, akustiği ve statik dengesi ile Klasik Osmanlı mimarisinin zirvesi.' },
  { name: 'Selimiye Camii', location: 'Edirne', lat: 41.6782, lng: 26.5596, period: '16. yüzyıl, Osmanlı', desc: 'Mimar Sinan\'ın 90 yaşında tamamladığı "ustalık eserim". Devasa tek kubbesiyle mimarlık tarihinin sınırlarını zorlayan dünya şaheseri.' },
  { name: 'Sultanhanı', location: 'Aksaray', lat: 38.2479, lng: 33.5471, period: '1229, Selçuklu', desc: 'I. Alaeddin Keykubad\'ın yaptırdığı, Selçuklu\'nun İpek Yolu ticaretine verdiği önemi gösteren devasa kervansaray.' },
  { name: 'Divriği Ulu Camii ve Darüşşifası', location: 'Sivas', lat: 39.3724, lng: 38.1183, period: '1228, Mengücekler', desc: 'UNESCO Dünya Miras Listesi\'nde. Asimetrik, benzersiz bitkisel motifleri ve su sesiyle tedavi yöntemiyle eşsiz bir kompleks.' },
  { name: 'Surp Haç Kilisesi', location: 'Van / Akdamar Adası', lat: 38.3345, lng: 43.0893, period: '10. yüzyıl, Ermeni', desc: 'Van Gölü\'ndeki Akdamar Adası\'nda İncil ve Tevrat tasvirli rölyefleriyle Orta Çağ Ermeni mimarisinin en görkemli örneği.' },
  { name: 'İshakpaşa Sarayı', location: 'Ağrı / Doğubeyazıt', lat: 39.7942, lng: 44.0125, period: '18. yüzyıl, Osmanlı-Fars-Selçuklu sentezi', desc: 'Ağrı Dağı eteklerinde 116 odalı, kalorifer sistemine sahip, Ahmed-i Hani\'nin kâtiplik yaptığı masalsı bir sınır sarayı.' },
  { name: 'İtalyan Sefarethanesi', location: 'İstanbul', lat: 41.0414, lng: 28.9938, period: '20. yüzyıl, Neo-klasik', desc: 'Mimar Giulio Mongeri\'nin eseri. Beyoğlu ve Şişli bölgesinin çok uluslu diplomatik tarihini simgeler.' },
  { name: 'Rüstem Paşa Camii', location: 'İstanbul', lat: 41.0165, lng: 28.9699, period: '16. yüzyıl, Osmanlı', desc: 'Mimar Sinan\'ın İznik çini sanatının her renkte doruğa ulaştığı efsanevi iç mekana sahip eseri.' },
  { name: 'Bergama Zeus Altar', location: 'İzmir / Berlin', lat: 39.1218, lng: 27.1834, period: 'M.Ö. 2. yüzyıl, Helenistik', desc: 'Anadolu\'nun yitirilen Helenistik mirasını ve batılıların eser kaçırma zihniyetini simgeleyen acı bir ders.' },
  { name: 'Mahmutbey Camii', location: 'Kastamonu', lat: 41.5156, lng: 33.4367, period: '1366, Candaroğulları', desc: 'Çivi kullanmadan ahşap bindirme tekniğiyle yapılan nadide Anadolu ahşap sivil mimarisi örneği.' },
  { name: 'Büyükçekmece Köprüsü', location: 'İstanbul', lat: 41.0197, lng: 28.5807, period: 'Kanuni devri, Osmanlı', desc: 'Mimar Sinan\'ın Zigetvar seferine çıkarken ordunun geçmesini sağlamak için yaptığı 636 metrelik su mühendisliği başyapıtı.' },
  { name: 'Birgi Çakırağa Konağı', location: 'İzmir / Ödemiş', lat: 38.2261, lng: 28.0986, period: '18. yüzyıl, Osmanlı sivil mimari', desc: 'Üç katlı ahşap mimari, harem-selamlık yapısı ve kalem işi süslemeleriyle Ege kırsal mimarisinin en özgün örneği.' },
  { name: 'Alanya Kalesi', location: 'Antalya', lat: 36.5335, lng: 32.0006, period: 'Helenistik-Selçuklu', desc: 'I. Alaeddin Keykubad\'ın 1221\'de fethiyle Selçuklu kışlık başkenti olan muazzam Akdeniz savunma yapısı.' },
  { name: 'Gazanfer Ağa Medresesi', location: 'İstanbul', lat: 41.0120, lng: 28.9560, period: '17. yüzyıl başı, Osmanlı', desc: 'Mimar Davut Ağa\'nın 1782 yangınına rağmen zarafetini koruyan eğitim ve kültür kurumu.' },
  { name: 'Selimiye Kışlası', location: 'İstanbul / Üsküdar', lat: 41.0015, lng: 29.0167, period: '19. yüzyıl, Osmanlı modernleşme', desc: 'Ermeni mimar Krikor Balyan\'ın III. Selim için yaptığı, askeri modernleşmesini simgeleyen anıtsal yapı.' },
  { name: 'DTCF Binası', location: 'Ankara', lat: 39.9425, lng: 32.8587, period: '1936, Cumhuriyet', desc: 'Nazizm\'den kaçan Bruno Taut\'un tasarladığı, Atatürk\'ün ismini verdiği Cumhuriyet aydınlanmasının kalesi.' },
  { name: 'Göbekli Tepe', location: 'Şanlıurfa', lat: 37.2231, lng: 38.9225, period: 'M.Ö. ~9600, Neolitik', desc: 'Bilinen dünyanın en eski tapınak kompleksi. Tarımdan ve yerleşik hayattan önce inşa edilmiş olması, insanlık tarihinin "önce inanç, sonra medeniyet" şeklinde yeniden yazılmasını zorunlu kıldı. T biçimli devasa dikilitaşları ve hayvan kabartmaları, Neolitik insanın kozmolojik dünyasına eşsiz bir pencere açar.' },
  { name: 'Nemrut Dağı', location: 'Adıyaman', lat: 37.9812, lng: 38.7413, period: 'M.Ö. 1. yüzyıl, Kommagene', desc: 'Kommagene Kralı I. Antiokhos\'un 2.150 metre yükseklikte yaptırdığı tanrı heykellerinin bulunduğu tümülüs. Pers ve Yunan panteonunu sentezleyen dev başlar, Hellenistik dünyanın Anadolu\'daki en dramatik sahnesini oluşturur. Gün doğumu ve batımında ışığın heykeller üzerindeki oyunu, zamansız bir estetik deneyim sunar.' },
  { name: 'Hattuşa', location: 'Çorum', lat: 40.0200, lng: 34.6153, period: 'M.Ö. 1600-1200, Hitit', desc: 'Hitit İmparatorluğu\'nun başkenti ve tarihte bilinen ilk yazılı barış antlaşması Kadeş\'in imzalandığı medeniyet merkezi. Aslankaya, Yazılıkaya açık hava tapınağı ve Büyükkale\'deki kraliyet arşivi, Anadolu\'nun Tunç Çağı\'ndaki süper güç statüsünü belgeler. Ortaylı, Hititlerin diplomasi ve hukuk alanındaki öncülüğünü sıklıkla vurgular.' },
  { name: 'Efes Antik Kenti', location: 'İzmir', lat: 37.9394, lng: 27.3413, period: 'M.Ö. 6. yüzyıl, İon-Roma', desc: 'Antik dünyanın yedi harikasından Artemis Tapınağı\'nın bulunduğu, Roma döneminde Asya eyaletinin başkenti olan devasa kent. Celsus Kütüphanesi antik dünyanın bilgi mimarisini, büyük tiyatro ise 25.000 kişilik kapasitesiyle Roma mühendisliğinin gücünü gösterir. Anadolu\'nun Yunan-Roma katmanını anlamak için vazgeçilmezdir.' },
  { name: 'Sümela Manastırı', location: 'Trabzon', lat: 40.6907, lng: 39.6569, period: '386 AD, Bizans', desc: 'Karadağ\'ın sarp kayalıklarına tutunmuş bin altı yüz yıllık Bizans manastırı. Trabzon\'un Pontus Rum mirası ve Bizans\'ın Anadolu\'daki dini yayılımının en dramatik mimari kanıtıdır. Freskleri, kaya oyma odaları ve bulutların arasındaki konumuyla hem sanat tarihi hem de doğa harikası olarak eşsiz bir deneyim sunar.' }
];

export const readingList = [
  {
    category: 'Doğu-Batı Sentezi ve Felsefe',
    icon: '◎',
    books: [
      { title: 'Batı-Doğu Divanı', author: 'Johann W. von Goethe', desc: 'Batı\'nın Doğu\'ya bakışını, oryantalizmin ötesine geçen "Dünya Edebiyatı" kavramını anlamak için şart.' },
      { title: 'Hafız Divanı', author: 'Hafız Şirazi', desc: 'İran ve Türk-İslam coğrafyasına seyahat etmeden önce kelimelerin mimarisiyle mistik altyapı hazırlanmalı.' },
      { title: 'Fuzûlî Dîvânı', author: 'Fuzûlî', desc: 'Doğu mistisizminin ve Türk-İslam şiir geleneğinin doruk noktası.' }
    ]
  },
  {
    category: 'Anadolu Sosyolojisi',
    icon: '▲',
    books: [
      { title: 'İnce Memed (1-2-3-4)', author: 'Yaşar Kemal', desc: 'Çukurova özelinde tüm Anadolu\'nun sosyolojik isyanları, ağalık-köylülük diyalektiği, coğrafyanın insan karakteri üzerindeki etkisi.' },
      { title: 'Bizim Köy', author: 'Mahmut Makal', desc: 'Cumhuriyet\'in köy gerçekliğini ilk kez çıplak gözle anlatan, köy enstitülü bir öğretmenin tanıklığı. Anadolu\'nun unutulan yüzü.' },
      { title: 'Bereketli Topraklar Üzerinde', author: 'Orhan Kemal', desc: 'Köyden kente göçün acı hikayesi, Çukurova\'nın pamuk tarlalarında sömürülen emekçilerin romanı.' }
    ]
  },
  {
    category: 'Avrupa Tarihi ve İnsan Doğası',
    icon: '◇',
    books: [
      { title: 'Savaş ve Barış', author: 'Lev Tolstoy', desc: 'Avrupa\'nın Napolyon savaşlarıyla geçirdiği sarsıntı, Rus ruhu ve aristokrasisi.' },
      { title: 'Kral Lear', author: 'William Shakespeare', desc: 'İnsanın güç, ihanet ve delilikle olan evrensel imtihanı.' },
      { title: 'Buddenbrooklar', author: 'Thomas Mann', desc: 'Bir Alman burjuva ailesinin dört kuşak boyunca çöküşü. Avrupa\'nın 19. yüzyıl sonu toplumsal dönüşümünün ve değerler erozyonunun edebiyattaki en güçlü yansıması.' }
    ]
  },
  {
    category: 'Ortadoğu, İslam Tarihi ve Jeopolitik',
    icon: '◆',
    books: [
      { title: 'İslâm Uygarlıkları Tarihi', author: 'Jurji Zaydan', desc: 'İslam dünyasının Altın Çağı\'nı kavramak için.' },
      { title: 'Notes on a Century', author: 'Bernard Lewis', desc: 'Ortadoğu\'nun modern çağdaki sınır çizişleri, etnik ve dinsel çatışmalar.' },
      { title: 'Semerkant', author: 'Amin Maalouf', desc: 'Haçlı Seferleri dönemindeki entelektüel buhranlar ve Doğu-Batı gerilimi.' }
    ]
  },
  {
    category: 'Osmanlı Kurumları ve Modernleşme',
    icon: '§',
    books: [
      { title: 'Devlet-i Aliyye', author: 'Halil İnalcık', desc: 'Osmanlı bürokratik yapısı ve devlet anatomisi.' },
      { title: 'Yavuz Sultan Selim', author: 'Feridun M. Emecen', desc: 'Liderliğin kriz anlarındaki vizyonu.' },
      { title: 'Yeniçeriler', author: 'Reşad Ekrem Koçu', desc: 'Ordunun toplumsal rolü ve askeri yapı.' },
      { title: 'Osmanlı\'yı Yeniden Keşfetmek & Cumhuriyetin İlk Sabahı', author: 'İlber Ortaylı', desc: 'Osmanlı mirasını ve Cumhuriyet\'e geçişteki sancıları anlamak için.' }
    ]
  },
  {
    category: 'Asya Stepleri ve Türklerin Kökeni',
    icon: '◈',
    books: [
      { title: 'Gökbörü\'nün İzinde', author: 'Ahmet Taşağıl', desc: 'Altaylardan Çin Seddi\'ne göçebe imparatorlukların psikolojisi.' },
      { title: 'Timurlenk', author: 'Beatrice Forbes Manz', desc: 'Timur\'un askeri dehası ve Orta Asya\'nın dönüşümü.' },
      { title: 'Moğolistan Seyahatnamesi', author: 'J. De Plano Carpini', desc: 'Moğol istilasının Avrupa\'da yarattığı dehşet, birinci el kaynak.' },
      { title: 'İran Seyahatnamesi', author: 'Ebu Dülef', desc: 'İran ve Kafkasya coğrafyasının erken dönem gözlemleri.' }
    ]
  },
  {
    category: 'Dünya Vizyonu ve Bilim Tarihi',
    icon: '⊕',
    books: [
      { title: 'Einstein Seyahatnamesi', author: 'Albert Einstein', desc: '1922-1923\'te Uzakdoğu, Ortadoğu ve Akdeniz\'de tutulan günlükler.' },
      { title: 'Sapiens', author: 'Yuval Noah Harari', desc: 'İnsanlığın Bilişsel Devrim\'den yapay zekaya uzanan 70.000 yıllık serüveni. Tarih, biyoloji ve antropolojiyi birleştiren çağdaş bir büyük anlatı.' },
      { title: 'Tarihin Sonu ve Son İnsan', author: 'Francis Fukuyama', desc: 'Soğuk Savaş sonrası liberal demokrasinin nihai zaferini ilan eden tartışmalı tez. Ortaylı\'nın eleştirdiği ancak bilinmesini zorunlu gördüğü bir dünya vizyonu.' }
    ]
  }
];

export const travelPrinciples = [
  {
    number: '01',
    title: 'Yaya Keşfin Epistemolojisi',
    quote: '"Yürüyeceksiniz. Gençseniz ve bir şehirde gönlünüzce yürümüyorsanız orayı gezdiğinizi söylemeyiniz."',
    detail: 'Sokak sokak dolaşın, çarşılara karışın, esnafla temas kurun. Bir şehrin ruhu taksi camlarından anlaşılamaz.'
  },
  {
    number: '02',
    title: 'Dinamizm ve Disiplin',
    quote: 'Bir şehri ilk defa gören kişinin bir dakika bile dinlenmeye hakkı yoktur.',
    detail: 'Askeri bir disiplinle program yapın. Harita okuyun, fotoğraf çekin, akşamları titizlikle not tutun.'
  },
  {
    number: '03',
    title: 'Gece Gözlemi',
    quote: 'Tarihi yapıların asıl heybeti, şehrin antik ruhu, gece ortaya çıkar.',
    detail: 'Toledo, Semerkant, Barselona, Yezd... Kadim şehirlerin mistik aurasını solumak için muhakkak gece gezilmeli.'
  },
  {
    number: '04',
    title: 'Zaman-Mekan Optimizasyonu',
    quote: 'Müzeleri sendromsuz, sindirerek gezebilmek için 20-30 günlük planlamalar yapın.',
    detail: 'Sabahın erken saatlerinde gidin, online rezervasyon yapın, müze kartlarını kullanın.'
  },
  {
    number: '05',
    title: 'Eşzamanlı Okuma Disiplini',
    quote: '"20 saat geziyorsanız, 2 saat de okuyacaksınız."',
    detail: 'Gidilen coğrafyanın tarihini bilmeden bakılan her taş dilsizdir. Seyahat öncesi, sırası ve sonrası mutlaka okuyun.'
  }
];

export const languages = [
  'Türkçe', 'Almanca', 'Rusça', 'İngilizce', 'Fransızca', 'İtalyanca', 'Farsça', 'Latince'
];

export const universities = {
  fullTime: [
    { name: 'Ankara Üniversitesi SBF', aka: 'Mülkiye' },
    { name: 'ODTÜ' },
    { name: 'Galatasaray Üniversitesi' },
    { name: 'Bilkent Üniversitesi' },
    { name: 'MEF Üniversitesi' },
    { name: 'İstanbul Medipol Üniversitesi' },
  ],
  visiting: [
    'Viyana', 'Berlin', 'Paris', 'Princeton', 'Moskova', 'Roma', 'Cambridge', 'Oxford', 'Tunus'
  ]
};
