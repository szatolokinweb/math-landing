export type NavLink = {
  title: string;
  url: {
    pathname: string;
    hash?: string;
  };
};

export const globalNavLinks: NavLink[] = [
  {
    title: "ЕГЭ",
    url: {
      pathname: "/ege",
    },
  },
  {
    title: "ОГЭ",
    url: {
      pathname: "/oge",
    },
  },
  {
    title: "5-8",
    url: {
      pathname: "/5-8",
    },
  },
  {
    title: "Олимпиады",
    url: {
      pathname: "/olympic",
    },
  },
  {
    title: "ДВИ",
    url: {
      pathname: "/dvi",
    },
  },
  {
    title: "Материалы",
    url: {
      pathname: "/worksheets",
    },
  },
  {
    title: "Обо мне",
    url: {
      pathname: "/",
      hash: "about",
    },
  },
  {
    title: "Документы",
    url: {
      pathname: "/documents",
    },
  },
  {
    title: "Контакты",
    url: {
      pathname: "/",
      hash: "contacts",
    },
  },
];
