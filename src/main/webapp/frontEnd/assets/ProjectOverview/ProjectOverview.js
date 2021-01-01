    function getTotalProjectInfo(User) {
        var UserData = {}; //User的資料，填入空物件
        var TotalProjectInfo = {}; //該User下的Project資料

        //建立請求
        var xhr = new XMLHttpRequest();
        UserData["token"] = User.token;
        xhr.open(
            "get",
            "https://我們的api-web-address.com/api/TotalProjectInfo",
            true
        );
        xhr.setRequestHeader("Content-type", "application/json");
        var requestForTotalProjectdata = JSON.stringify(UserData); //將UserInputStr轉格式JSON
        xhr.send(requestForTotalProjectdata);
        xhr.onload = function() {
            var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
            TotalProjectInfo = callbackData.message; //巢狀的ProjectInfo Json
            //{{project1},{project2}}
        };
        return TotalProjectInfo;
    }
    function showTotalProjectInfo(ProjectInfo) {
        ProjectName = "專案名稱:" + ProjectInfo.NumberofProject;
        DescriptionofProject = "專案敘述:" + ProjectInfo.DescriptionofProject;
        ProjectMemberInfo = "團隊人數:" + ProjectInfo.NumberofMembers;
        durationofProjectInfo = "開發時間:" + ProjectInfo.durationofProject;

        // console.log(ProjectInfo);
        var ul = document.getElementById("grid-box");
        var newLi = document.createElement("li");
        var ClassofnewLi = "Itemof" + ProjectInfo.NumberofProject;
        newLi.setAttribute("class", ClassofnewLi);
        newLi.setAttribute("onclick", 'ChosenProject(this)'); //設定被點擊的事件
        newLi.style.float = "left";
        newLi.style.width = "calc(99.9999% / 5 )";
        newLi.style.height = "200px";
        newLi.style.margin = "20px";
        newLi.style.background = "rgba(176, 185, 184, 0.89)";
        newLi.style.boxshadow = "0 2px 4px rgba(0, 0, 0, 5)";
        newLi.style.listStyleType = "none"; //不顯示小黑點
        newLi.style.fontFamily = "微軟正黑體 , sans-serif";
        newLi.style.fontSize = "20px";


        var textProjectNameNode = document.createTextNode(ProjectName);
        var textDescriptionofProjectNode = document.createTextNode(DescriptionofProject);
        var textMemberNode = document.createTextNode(ProjectMemberInfo);
        var textdurationNode = document.createTextNode(durationofProjectInfo);


        newLi.appendChild(textProjectNameNode);
        newLi.appendChild(document.createElement('br'));
        newLi.appendChild(textDescriptionofProjectNode);
        newLi.appendChild(document.createElement('br'));
        newLi.appendChild(textMemberNode);
        newLi.appendChild(document.createElement('br'));
        newLi.appendChild(textdurationNode);

        console.log(newLi)
        ul.appendChild(newLi);

    }
    function ChosenProject(el) {
          // ref:https://stackoverflow.com/questions/52973660/how-to-highlight-selected-li-item-only
          // find all the elements in your channel list and loop over them
          Array.prototype.slice.call(
              document.querySelectorAll('ul[data-tag="ProjectList"] li')).forEach(function(element) {
              element.classList.remove('selected'); // remove the selected class
          });
          // add the selected class to the element that was clicked
          el.classList.add('selected');
    }

    //網頁載入後立刻執行的動作
    window.onload = function() {
        var TotalProjectList = {
            "Username": "George",
            "NumbersOfTotalProject": 3,
            "TotalProjectsInfo": [{
                "NumberofProject": "Project1",
                "DescriptionofProject": "這是一個很棒的專案，軟工棒",
                'NumberofMembers': 20,
                'durationofProject': 22
            }, {
                'NumberofProject': "Project2",
                "DescriptionofProject": "這也是一個很棒的專案，敏捷讚讚",
                'NumberofMembers': 10,
                'durationofProject': 30
            }, {
                'NumberofProject': "Project3",
                "DescriptionofProject": "這還是一個很棒的專案，POSD讚讚讚",
                'NumberofMembers': 4,
                'durationofProject': 50
            }]
        };

        // var obj = JSON.parse(TotalProjectInfo);
        var totalProject = TotalProjectList.TotalProjectsInfo;
        for (item in totalProject) {
            console.log(totalProject[item])
            showTotalProjectInfo(totalProject[item]);
        }
    };
