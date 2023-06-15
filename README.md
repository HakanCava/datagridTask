

# Task- Datagrid

## Açıklama

- Bu projemizde bir data tablosu oluşturuyoruz. Ekranda gelen ilk dört veri mockapi olarak "table_row_data" dosyasından alıyoruz.
- Sonraki verileri kullanıcı "yeni hesap ekle" butonuna tıklayarak yeni bir veri ekleyebilir. Eklenen veri local storage da tutulur ve ekrana basılır.
- Bu taski yaparken aşağıdaki adımları izledim:
1. Öncelikle boş bir dosya oluşturup VSCode editöründen açtım ve terminal den __yarn create react-app .__ diyerek react i klasörümüze indiriyoruz. 
2. Daha sonra kullanmayı düşündüğüm üçüncü part kütüphaneleride indiriyorum: 
- __yarn add react-bootstrap bootstrap__
- __yarn add react-router-dom__
- __yarn add react-icons__ bunu indirdim ama kullanmadım 
- Not: bootstrapin index.js deki eklentisini untmuyoruz aksi takdirde çalışmaz
3. Daha sonra projede benden istenileni adım adım yapıyorum:
- Components, context, helpers, pages, router klasörlerini src klasöründe oluşturdum.
- Pages daki dosyalarımı tanımladım sonra bunlara routerda path belirledim ve bunu App.js de çağırdım.
- Navbar componentimi oluşturdum
- Home page imi ve içinde kullanacağım componentlerimi oluşturdum
- Context de global statelerimi tanımladım. Büyük projelerde redux kullanmak daha mantıklıdır.
- Bu adımları izlerken her aşamada css ilede tasarımlarımı yaptım
- En sonda media query ler ile projeme responsivlik kazandırmaya çalıştım.


## Taskin İskeleti

```

├── public
│     └── index.html
├── src
│    |
│    ├── components
│    │     ├── Input.jsx
│    │     ├── Navbar.jsx
│    │     ├── Pagination.jsx
│    │     ├── TableBody.jsx
│    │     ├── TableHead.jsx
│    │     ├── THeadCell.jsx
│    │     └── YeniHesapModel.jsx
│    ├── context
│    │     └── DataProvider.jsx
│    ├── helpers
│    │     └──  home
│    │     |    ├── search_icons.js
│    │     |    └── table_row_data.json
│    │     └── navbar
│    │     |    ├── navbar_center_data.json
│    │     |    ├── rastmobilelogo.js
│    │     |    └── right_icons.js
│    ├── pages
│    │     ├── Hakkımızda.jsx
│    │     ├── Home.jsx
│    │     ├── WordNinja.jsx
│    │     ├── WordPyramids.jsx
│    │     └── Yarisma.jsx
│    ├── router
│    │     └── AppRouter.jsx
│    ├── App.js
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Çalıştırma

- Öncelikle bu repoyu kendi lokalinize  __git clone https://github.com/HakanCava/datagridTask.git__ komutu ile klonlayın.
- Ardından terminalde __yarn__ yazarak node_module dosyasını indirin.
- Ve son olarak terminalde __yarn start__ yazarak localhost:3000 de çalıştırın

## Canlı
- Ve aşağıdaki linkten projemizin canlısını görebilirisiniz:
- https://datagridtaskhcava.netlify.app/



**<p align="center">&#9786; Mutlu Kodlar &#9997;</p>**
