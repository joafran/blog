export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.source": "Source",
    "home.hello": "Hey there! 👋",
    "home.latest": "Latest posts",
    "post.tags": {
      experience: "Experience",
      advice: "Advice",
    },

    "footer.text": "All rights reserved",
  },
  es: {
    "nav.source": "Repo",
    "home.hello": "Hola! 👋",
    "home.latest": "Ultimas publicaciones",
    "post.tags": {
      experience: "Experiencia",
      advice: "Consejo",
    },

    "footer.text": "Todos los derechos reservados",
  },
} as const;
