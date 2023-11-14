import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/not-found.png";

export default function Page404() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img className="object-contain w-7/12" src={NotFoundImage} />
      <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link
        to="/"
        className="bg-slate-800 px-5 py-3 text-white rounded-md mt-4 block hover:bg-slate-900 transition-all duration-300 ease-in-out "
      >
        Anasayfa
      </Link>
    </div>
  );
}
