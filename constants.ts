import { Product, Category, NotificationData } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, title: "3 ADET TESETTÜR ALT-ÜST TAKIM", subtitle: "Seçeceğin 3 Adet Tesettür Alt-Üst Takım", price: 899, active: true, maxSelection: 3 },
  { id: 2, title: "2 ADET TRİKO TAKIM", subtitle: "Seçeceğin 2 Adet Triko Takım", price: 799, active: false, maxSelection: 2 },
  { id: 3, title: "2 ADET PANÇO", subtitle: "Seçeceğin 2 Adet Ferace, Mont, Kaban", price: 699, active: false, maxSelection: 2 },
  { id: 4, title: "3 ADET TUNİK&SWEAT", subtitle: "Seçeceğin 3 Adet Tunik yada Sweat Modelleri", price: 599, active: false, maxSelection: 3 },
];

export const PRODUCTS: Product[] = [
  // CATEGORY 1: ALT-ÜST TAKIM
  {
    id: 101,
    title: "Tunik Pantolon İkili Takım",
    description: "[Oversize kalıp] [Ürün Uzunluk 80cm]",
    sizeInfo: "[38-46 Beden Aralığı Uyumlu]",
    price: 300,
    image: "https://picsum.photos/seed/fashion1/600/800",
    cartCount: 292,
    isFreeShipping: true,
    colors: ['gray', 'black'],
    categoryId: 1
  },
  {
    id: 102,
    title: "Tunik Pantolon İkili Takım",
    description: "[Oversize kalıp] [Ürün Uzunluk 80cm]",
    sizeInfo: "[38-46 Beden Aralığı Uyumlu]",
    price: 300,
    image: "https://picsum.photos/seed/fashion2/600/800",
    cartCount: 389,
    isFreeShipping: true,
    colors: ['red'],
    categoryId: 1
  },
  {
    id: 103,
    title: "Tunik Pantolon İkili Takım",
    description: "[Oversize kalıp] [Ürün Uzunluk 80cm]",
    sizeInfo: "[38-46 Beden Aralığı Uyumlu]",
    price: 300,
    image: "https://picsum.photos/seed/fashion3/600/800",
    cartCount: 217,
    isFreeShipping: true,
    colors: ['teal'],
    categoryId: 1
  },
  {
    id: 104,
    title: "Tunik Pantolon İkili Takım",
    description: "[Oversize kalıp] [Ürün Uzunluk 80cm]",
    sizeInfo: "[38-46 Beden Aralığı Uyumlu]",
    price: 300,
    image: "https://picsum.photos/seed/fashion4/600/800",
    cartCount: 294,
    isFreeShipping: true,
    colors: ['brown'],
    categoryId: 1
  },
  {
    id: 105,
    title: "Armalı Çift Cepli Vortex İkili Takım",
    description: "Ürün Uzunluk: 75cm.",
    sizeInfo: "Pantolon Uzunluk: 100cm.",
    price: 300,
    image: "https://picsum.photos/seed/fashion5/600/800",
    cartCount: 175,
    isFreeShipping: true,
    colors: ['black'],
    categoryId: 1
  },
  {
    id: 106,
    title: "Tunik Pantolon İkili Takım",
    description: "[Oversize kalıp] [Ürün Uzunluk 80cm]",
    sizeInfo: "[38-46 Beden Aralığı Uyumlu]",
    price: 300,
    image: "https://picsum.photos/seed/fashion6/600/800",
    cartCount: 241,
    isFreeShipping: true,
    colors: ['black'],
    categoryId: 1
  },
  {
    id: 107,
    title: "Armalı Çift Cepli Vortex İkili Takım",
    description: "Ürün Uzunluk: 75cm.",
    sizeInfo: "Pantolon Uzunluk: 100cm.",
    price: 300,
    image: "https://picsum.photos/seed/fashion7/600/800",
    cartCount: 382,
    isFreeShipping: true,
    colors: ['beige'],
    categoryId: 1
  },
  {
    id: 108,
    title: "Armalı Çift Cepli Vortex İkili Takım",
    description: "Ürün Uzunluk: 75cm.",
    sizeInfo: "Pantolon Uzunluk: 100cm.",
    price: 300,
    image: "https://picsum.photos/seed/fashion8/600/800",
    cartCount: 328,
    isFreeShipping: true,
    colors: ['maroon'],
    categoryId: 1
  },
  {
    id: 109,
    title: "Armalı Çift Cepli Vortex İkili Takım",
    description: "Ürün Uzunluk: 75cm.",
    sizeInfo: "Pantolon Uzunluk: 100cm.",
    price: 300,
    image: "https://picsum.photos/seed/fashion9/600/800",
    cartCount: 166,
    isFreeShipping: true,
    colors: ['green'],
    categoryId: 1
  },
  {
    id: 110,
    title: "Polo Yaka Fitilli Kaşkorse İkili Takım",
    description: "Ürün Uzunluk: 75cm",
    sizeInfo: "Pantolon Uzunluk: 105cm",
    price: 300,
    image: "https://picsum.photos/seed/fashion10/600/800",
    cartCount: 374,
    isFreeShipping: true,
    colors: ['gray'],
    categoryId: 1
  },
  {
    id: 111,
    title: "Polo Yaka Fitilli Kaşkorse İkili Takım",
    description: "Ürün Uzunluk: 75cm",
    sizeInfo: "Pantolon Uzunluk: 105cm",
    price: 300,
    image: "https://picsum.photos/seed/fashion11/600/800",
    cartCount: 281,
    isFreeShipping: true,
    colors: ['burgundy'],
    categoryId: 1
  },
  {
    id: 112,
    title: "Polo Yaka Fitilli Kaşkorse İkili Takım",
    description: "Ürün Uzunluk: 75cm",
    sizeInfo: "Pantolon Uzunluk: 105cm",
    price: 300,
    image: "https://picsum.photos/seed/fashion12/600/800",
    cartCount: 57,
    isFreeShipping: true,
    colors: ['gray'],
    categoryId: 1
  },

  // CATEGORY 2: TRİKO TAKIM
  {
    id: 201,
    title: "Balıkçı Yaka Triko Takım",
    description: "Yumuşak dokulu kışlık triko.",
    sizeInfo: "Standart Beden (36-42 Uyumlu)",
    price: 400,
    image: "https://picsum.photos/seed/triko1/600/800",
    cartCount: 150,
    isFreeShipping: true,
    colors: ['beige'],
    categoryId: 2
  },
  {
    id: 202,
    title: "Desenli Triko Etekli Takım",
    description: "Etek ve Kazak kombin.",
    sizeInfo: "Standart Beden (36-42 Uyumlu)",
    price: 400,
    image: "https://picsum.photos/seed/triko2/600/800",
    cartCount: 89,
    isFreeShipping: true,
    colors: ['black'],
    categoryId: 2
  },
  {
    id: 203,
    title: "Oversize Çizgili Triko Takım",
    description: "Salaş kesim rahat kullanım.",
    sizeInfo: "Standart Beden",
    price: 400,
    image: "https://picsum.photos/seed/triko3/600/800",
    cartCount: 210,
    isFreeShipping: true,
    colors: ['blue'],
    categoryId: 2
  },
  {
    id: 204,
    title: "Fitilli Triko Pantolon Takım",
    description: "Esnek yapılı, günlük kullanım.",
    sizeInfo: "S-M-L Beden seçenekli",
    price: 400,
    image: "https://picsum.photos/seed/triko4/600/800",
    cartCount: 340,
    isFreeShipping: true,
    colors: ['green'],
    categoryId: 2
  },
  {
    id: 205,
    title: "Balıkçı Yaka Düğmeli Triko",
    description: "Şık düğme detaylı.",
    sizeInfo: "Standart Beden",
    price: 400,
    image: "https://picsum.photos/seed/triko5/600/800",
    cartCount: 112,
    isFreeShipping: true,
    colors: ['gray'],
    categoryId: 2
  },

  // CATEGORY 3: PANÇO & FERACE
  {
    id: 301,
    title: "Kaşe Kumaş Panço",
    description: "Kışlık kalın kumaş, astarlı.",
    sizeInfo: "Standart Beden",
    price: 350,
    image: "https://picsum.photos/seed/panco1/600/800",
    cartCount: 95,
    isFreeShipping: true,
    colors: ['brown'],
    categoryId: 3
  },
  {
    id: 302,
    title: "Kürklü Kapüşonlu Ferace",
    description: "Su geçirmez dış yüzey.",
    sizeInfo: "38-48 Beden Aralığı",
    price: 350,
    image: "https://picsum.photos/seed/panco2/600/800",
    cartCount: 180,
    isFreeShipping: true,
    colors: ['black'],
    categoryId: 3
  },
  {
    id: 303,
    title: "Desenli Triko Panço",
    description: "Mevsimlik kullanım için ideal.",
    sizeInfo: "Standart Beden",
    price: 350,
    image: "https://picsum.photos/seed/panco3/600/800",
    cartCount: 65,
    isFreeShipping: true,
    colors: ['red'],
    categoryId: 3
  },
  {
    id: 304,
    title: "Düğmeli Kaban Ferace",
    description: "Uzun boy, tam tesettür.",
    sizeInfo: "38-50 Beden Aralığı",
    price: 350,
    image: "https://picsum.photos/seed/panco4/600/800",
    cartCount: 220,
    isFreeShipping: true,
    colors: ['navy'],
    categoryId: 3
  },

  // CATEGORY 4: TUNİK & SWEAT
  {
    id: 401,
    title: "Kapüşonlu Sweat Tunik",
    description: "Üç iplik şardonlu kumaş.",
    sizeInfo: "S-M-L-XL",
    price: 200,
    image: "https://picsum.photos/seed/sweat1/600/800",
    cartCount: 410,
    isFreeShipping: true,
    colors: ['pink'],
    categoryId: 4
  },
  {
    id: 402,
    title: "Baskılı Uzun Tunik",
    description: "Yazlık terletmeyen kumaş.",
    sizeInfo: "38-46 Beden",
    price: 200,
    image: "https://picsum.photos/seed/sweat2/600/800",
    cartCount: 330,
    isFreeShipping: true,
    colors: ['white'],
    categoryId: 4
  },
  {
    id: 403,
    title: "Fermuarlı Spor Tunik",
    description: "Günlük spor giyim için.",
    sizeInfo: "38-44 Beden",
    price: 200,
    image: "https://picsum.photos/seed/sweat3/600/800",
    cartCount: 155,
    isFreeShipping: true,
    colors: ['gray'],
    categoryId: 4
  },
  {
    id: 404,
    title: "Kanguru Cep Sweat",
    description: "Rahat kalıp.",
    sizeInfo: "Standart Beden",
    price: 200,
    image: "https://picsum.photos/seed/sweat4/600/800",
    cartCount: 290,
    isFreeShipping: true,
    colors: ['blue'],
    categoryId: 4
  },
  {
    id: 405,
    title: "Basic Uzun Tunik",
    description: "Her dolapta olması gereken parça.",
    sizeInfo: "36-44 Beden",
    price: 200,
    image: "https://picsum.photos/seed/sweat5/600/800",
    cartCount: 500,
    isFreeShipping: true,
    colors: ['black'],
    categoryId: 4
  },
];

export const NOTIFICATIONS: NotificationData[] = [
  {
    id: 1,
    name: "Derya At***",
    location: "Ankara, Etimesgut",
    timeAgo: "1 dakika önce",
    productImage: "https://picsum.photos/seed/fashion1/100/100"
  },
  {
    id: 2,
    name: "Ayşe Yıl***",
    location: "İstanbul, Ümraniye",
    timeAgo: "2 dakika önce",
    productImage: "https://picsum.photos/seed/fashion2/100/100"
  },
  {
    id: 3,
    name: "Fatma De***",
    location: "İzmir, Karşıyaka",
    timeAgo: "Az önce",
    productImage: "https://picsum.photos/seed/fashion3/100/100"
  },
  {
    id: 4,
    name: "Emine Ko***",
    location: "Bursa, Nilüfer",
    timeAgo: "4 dakika önce",
    productImage: "https://picsum.photos/seed/fashion5/100/100"
  },
  {
    id: 5,
    name: "Hatice Çe***",
    location: "Antalya, Muratpaşa",
    timeAgo: "3 dakika önce",
    productImage: "https://picsum.photos/seed/fashion7/100/100"
  }
];