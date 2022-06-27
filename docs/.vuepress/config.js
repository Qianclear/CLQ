module.exports = {
  title: "QJH's Blog",
  description: '个人博客',
  base:'/CLQ/', 
  dest: './docs/.vuepress/dist/',
  head: [
    ['link', { rel: 'icon', href: '/img/avatar.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: '联系', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/Qianclear', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
    	'/blogs/学习笔记/Java/':[
    		'JavaHSP1', 
    		'JavaHSP2', 
    		'JavaHSP3', 
    		'JavaSHK', 
    		'JavaSHK02', 
    		'JavaSHK03', 
    		'JavaSHK04', 
    		'JavaSHK05', 
    		'JavaSHK06', 
    		'JavaSHK07', 
    		'JavaSHK08', 
    		'JavaSHK09', 
    		'JavaSHK10', 
    		'JavaSHK11', 
    		'JavaSHK12', 
    	], 
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
      
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '齐雅纳的小屋',
        desc: '琪亚娜的迷弟',
        logo: "https://qlogo1.store.qq.com/qzone/1924037752/1924037752/100.jpg",
        link: 'https://www.qykyn.top'
      },
      {
        title: 'null',
        desc: 'null',
        logo: "null",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/img/ayaka.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'QJH',
    // 作者头像
    authorAvatar: '/img/zl.ico',
    // 备案号
    //record: 'xxxx',
    // 项目开始时间
    startYear: '2022-6'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
