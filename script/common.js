apiready = function() {
  function ExitApp() {
      var ci = 0;
      var time1, time2;
      api.addEventListener({
          name: 'keyback'
      }, function(ret, err) {
          if (ci == 0) {
              time1 = new Date().getTime();
              ci = 1;

              api.toast({
                  msg: '再按一次返回键退出'
              });

          } else if (ci == 1) {
              time2 = new Date().getTime();
              if (time2 - time1 < 3000) {
                  api.closeWidget({
                      id: api.appId,
                      retData: {
                          name: 'closeWidget'
                      },
                      silent: true
                  });
              } else {
                  ci = 0;
                  api.toast({
                      msg: '再按一次返回键退出'
                  });
              }
          }
      });
  }
  ExitApp();

    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        //  alert('按了返回键');
    });
    api.addEventListener({
        name: 'viewdisappear'
    }, function(ret, err) {
        // 你的代码
    });
    api.setStatusBarStyle({
        style: 'light',
    })
}


function tiaozhuan(index) {
    if (index == '1') {
        setTimeout(function(){
          api.openWin({
              //我的页面
              name: 'main',
              url: './zhuye.html',
            });
          },100)
    }  else if (index == '2') {
        api.openWin({
            //我的页面
            name: 'datalist',
            url: './datalist.html',
        });
    } else if (index == '3') {
        api.openWin({
            //我的页面
            name: 'local_map',
            url: './local_map.html',
        });
    }else if (index == '4') {
        api.openWin({
            //我的页面
            name: 'mine',
            url: './mine.html',
        });
    }
}

function pumping_station(){
    api.openFrame({
        name: 'pumping_station',
        url: './pumping_station.html',
    });
}

function waterworks(){
    api.openFrame({
        name: 'waterworks',
        url: './waterworks.html',
    });
}

function area_monitoring(){
    api.openFrame({
        name: 'area_monitoring',
        url: './area_monitoring.html',
    });
}

function flow_monitoring(){
    api.openFrame({
        name: 'flow_monitoring',
        url: './flow_monitoring.html',
    });
}

function water_quality_monitoring1(){
    api.openFrame({
        name: 'water_quality_monitoring1',
        url: './water_quality_monitoring1.html',
    });
}

function water_quality_monitoring2(){
    api.openFrame({
        name: 'water_quality_monitoring2',
        url: './water_quality_monitoring2.html',
    });
}

function water_quality_monitoring3(){
    api.openFrame({
        name: 'water_quality_monitoring3',
        url: './water_quality_monitoring3.html',
    });
}

function cFrame(){
    api.closeFrame();
}
  
