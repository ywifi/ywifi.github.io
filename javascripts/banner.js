	//首页幻灯片自动播放插件
        jQuery.fn.runBanner = function (params) {

            var pb = params || {
                className: "show",//样式名称
                child: "flashBanner"//对象ID名称
            };

            var _className = pb.className;
            var _child = $("#" + pb.child);
            var _runTime;
            var _showNum = 0;
            var _bannerNum = _child.children('ul').children().length;

            var runBanner = function () {
                _child.children('ol').children().each(function (index) {
                    $(this).click(function () {
                        bindTime = setTimeout(function () {
                            _showNum = index;
                            clearTimeout(_runTime);
                            showRunBnner(_showNum);
                            clearTimeout(_runTime);
                        }, 300);
                    });
                });
                showRunBnner(_showNum);

            }

            var showRunBnner = function () {
                _child.children('ul').children().eq(_showNum).fadeIn("slow").siblings().hide();
                _child.children('ol').children().eq(_showNum).addClass(_className).siblings().removeClass(_className);
                _showNum++;

                if (_showNum >= _bannerNum || _showNum < 0) {
                    _showNum = 0;
                }
                _runTime = setTimeout(showRunBnner, 5000);

            }

            runBanner();
        }

        $("#indexBan").runBanner({
            className: "on", //样式名称
            child: "indexBan"  //对象ID名称
        });

		
		
		var pagecover=document.getElementById("pagewholecover");
		pagecover.style.width=document.documentElement.scrollWidth+"px";
		pagecover.style.height=document.documentElement.scrollHeight+"px";
		//var downbox=document.getElementById("downbox");
		//downbox.style.left=(document.documentElement.clientWidth-450)/2+"px";
		//downbox.style.top=(document.documentElement.clientHeight-300)/2+"px";
		function showdownDialog(){
			pagecover.style.display="block";
			//downbox.style.display="block";
		}
		function hidedownDialog(){
			pagecover.style.display="none";
			//downbox.style.display="none";
		}
