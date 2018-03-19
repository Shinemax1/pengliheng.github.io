import React from 'react';
import PrismCode from '../../feature/Prism.js';

// const columns = [{
//   title: '特性',
//   dataIndex: 'characteristic',
//   key: 'characteristic',
//   width: 120,
// }, {
//   title: 'Cookis',
//   dataIndex: 'Cookis',
//   key: 'Cookis',
//   width: 310,
// }, {
//   title: 'LocalStorage',
//   dataIndex: 'localStorage',
//   key: 'localStorage',
//   width: 240,
// }, {
//   title: 'SessionStorage',
//   dataIndex: 'sessionStorage',
//   key: 'sessionStorage',
//   width: 230,
// }];

// const dataSource = [
//   {
//     key: '1',
//     characteristic: '数据的生命期',
//     Cookis: '一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效',
//     localStorage: '除非被清除，否则永久保存',
//     sessionStorage: '仅在当前会话下有效，关闭页面或浏览器后被清除',
//   }, {
//     key: '2',
//     characteristic: '存放数据大小',
//     Cookis: '4K左右',
//     localStorage: '5M',
//     sessionStorage: '5M',
//   }, {
//     key: '3',
//     characteristic: '与服务器端通信',
//     Cookis: '每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题',
//     localStorage: '仅在客户端（即浏览器）中保存，不参与和服务器的通信',
//     sessionStorage: '仅在客户端（即浏览器）中保存，不参与和服务器的通信',
//   }, {
//     key: '4',
//     characteristic: '易用性',
//     Cookis: '需要程序员自己封装，源生的Cookie接口不友好',
//     localStorage: '源生接口可以接受，亦可再次封装来对Object和Array有更好的支持',
//     sessionStorage: '源生接口可以接受，亦可再次封装来对Object和Array有更好的支持',
//   },
// ];

const sessionCookie = () => (
  <div>
    <h3>back-end-Session && front-end-Cookie</h3>
    <h4>Session(会话)</h4>
    <p>websites backend use it to store the custom's personal token or theirs secret or token,always save it in server.you can save it in database && RAM.the session only can be store in back-end.if you need to send it to front-end. store it into cookies and front-end got it throught cookie.</p>
    <h4>Cookies(曲奇饼干？)</h4>
    <p>in my mind ,cookies is the bridge between back-end-session and front-end-(localstorage && sessionStorage),cookies only can store 5kb.</p>
    <PrismCode lang="js" >{`
      //front-end
      //get
      document.cookie
      //set
      document.cookie = "XXX"
      //back-end
      //socket.io
      io.use((socket, next) => {
        if (socket.request.headers.cookie) {
          console.log('socket.request.headers.cookie',socket.request.headers.cookie);
        };
      });
    `}
    </PrismCode>
    <h4>Local Storage</h4>
    <p>
      the usage is just like its name, local Store,
      because it will not delete while your leave the page ,
      so you can store some info like shopping list or HTML5 Games storage info,
      next time your visit this page you can got the info
    </p>
    <p>it only can be set in front-end with follow code.</p>
    <PrismCode lang="js" >{`
      //get
      window.localStorage
      //set
      localStorage = 'XXX'
    `}
    </PrismCode>
    <h4>Session Storage</h4>
    <p>
      the usage is just like its name session(对话) storage,
      if your need Guide the user step by step to fill.
      you can store some info in sessionStorage,
      while the user refresh their page
      they can goback to the right step to fill their info.
    </p>
    <PrismCode lang="js" >{`
      //get
      window.sessionStorage
      //set
      sessionStorage = 'XXX'
    `}
    </PrismCode>
    <h4>Different between Cookies && LocalStorage && SessionStorage</h4>
    <p>refrence: <a href="http://jerryzou.com/posts/cookie-and-web-storage/">详说 Cookie, LocalStorage 与 SessionStorage</a></p>
  </div>
);


export default sessionCookie;
