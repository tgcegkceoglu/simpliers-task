import io from "socket.io-client";
import Login from "../pages/Login";
import Chat from "../pages/Chat";
import Page404 from "../pages/Page404";
import PrivateRoute from "../components/route/PrivateRoute";

const socket = io("http://localhost:3001"); /// Socket.IO istemcisini kullanarak belirtilen sunucu adresine bir soket bağlantısı oluşturmaktadır.

/// Kullanıcının belirli sayfalara yönlendirilmesini sağlıyoruz.
const router = [
  {
    index: true,
    path: "/",
    element: <Login socket={socket} />,
  },
  {
    path: "/chat",
    element: <Chat socket={socket} />,
    auth: true,
  },

  {
    path: "*",
    element: <Page404 />,
  },
];

 /// Eğer kullanıcı girişi gerekliyse  'PrivateRoute' bileşeni aracılığıyla yetkilendirme kontrolü yaparak sayfa yönlendirmesi yapıyoruz. 
 /// Eğer kullanıcı girişi gerekli değilse direk sayfaya yönlendiriyoruz
function mapAuth(routes) {
  return routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route.children) {
      route.children = mapAuth(route.children);
    }
    return route;
  });
}

const updatedRouter = mapAuth(router);

export default updatedRouter;
