import { Link } from "../Links";

const i18n = {
  es: {
    title: "Sobre nosotros",
    buttton: "Ir a pagina inicial",
    descripcion:
      "Hola soy Julio Sierra y estoy haciendo un clon de React Router",
  },
  en: {
    title: "About Us",
    buttton: "Go to home page",
    descripcion:
      "Hi! My name is Julio Sierra and i am creating a clone of React Router",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.es;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");
  return (
    <>
      <h2>{i18n.title}</h2>
      <div>
        <img
          src="https://randomuser.me/api/portraits/men/57.jpg"
          alt="Foto de muestra"
        />
        <p>{i18n.descripcion}</p>
      </div>
      <Link to="/">{i18n.buttton}</Link>
    </>
  );
}
