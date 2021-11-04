// 定義兩個 route 元件，分別是 Home 與 About
const Home = { template: '<div>新歌排行榜</div>' }
const Favorite = { template: '<div>已收藏的歌曲</div>' }
const Search = { template: '<div>搜尋</div>' }


// 指定 URL 與對應的元件
const routes = [
    { path: '/home', component: Home },
    { path: '/favorite', component: Favorite },
    { path: '/search', component: Search },
]

