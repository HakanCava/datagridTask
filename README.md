

# Task- Datagrid

## Açıklama

- Bu projemizde bir data tablosu oluşturuyoruz. Ekranda gelen ilk dört veri mockapi olarak "table_row_data" dosyasından alıyoruz.
- Sonraki verileri kullanıcı "yeni hesap ekle" butonuna tıklayarak yeni bir veri ekleyebilir. Eklenen veri local storage da tutulur ve ekrana basılır.



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

**<p align="center">&#9786; Happy Coding &#9997;</p>**
