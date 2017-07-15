const menu = [{
        "name": "首页",
        "path": "index",
        "level": "1",
        "state": false,
        "menuId": 0,
        "icon": "",
        "list":[]
    },

    {
        "name": "内容管理",
        "path": "contentMG",
        "level": "1",
        "state": false,
        "menuId": 1,
        "list": [{
                "name": "文章管理",
                "path": "articleManage",
                "level": "2",
                "state": false,
                "list":[]
            },

            {
                "name": "banner管理",
                "path": "bannerManage",
                "level": "2",
                "state": false,
                "list": [{
                    "name": "首屏",
                    "level": "3",
                    "state": false
                }, {
                    "name": "咨询页",
                    "level": "3",
                    "state": false
                }, {
                    "name": "心友圈",
                    "level": "3",
                    "state": false
                }]
            }

        ]

    }

    
]

export default menu
