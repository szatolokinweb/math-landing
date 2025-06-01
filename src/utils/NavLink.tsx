export type NavLink = {
  title: string;
  url: {
    pathname: string;
    hash?: string;
  };
  shouldHighlight?: boolean;
};

export const globalNavLinks: NavLink[] = [
  {
    title: "Главная",
    url: {
      pathname: "/",
    },
    shouldHighlight: true,
  },
  {
    title: "ЕГЭ",
    url: {
      pathname: "/ege",
    },
    shouldHighlight: true,
  },
  {
    title: "ОГЭ",
    url: {
      pathname: "/oge",
    },
    shouldHighlight: true,
  },
  {
    title: "5-8",
    url: {
      pathname: "/5-8",
    },
    shouldHighlight: true,
  },
  {
    title: "Олимпиады",
    url: {
      pathname: "/olympic",
    },
    shouldHighlight: true,
  },
  {
    title: "ДВИ",
    url: {
      pathname: "/dvi",
    },
    shouldHighlight: true,
  },
  {
    title: "Материалы",
    url: {
      pathname: "/worksheets",
    },
    shouldHighlight: true,
  },
  {
    title: "Документы",
    url: {
      pathname: "/documents",
    },
    shouldHighlight: true,
  },
];
