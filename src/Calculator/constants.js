import i18next from "i18next";

export const INITIAL_ITEMS = [
  {
    name: i18next.t("objects.chair"),
    stickers: 1,
    img: `${process.env.PUBLIC_URL}/img/chair.svg`,
  },
  {
    name: i18next.t("objects.smallSofa"),
    stickers: 1,
    img: `${process.env.PUBLIC_URL}/img/small-sofa.svg`,
  },
  {
    name: i18next.t("objects.bigSofa"),
    stickers: 2,
    img: `${process.env.PUBLIC_URL}/img/big-sofa.svg`,
  },
  {
    name: i18next.t("objects.cupboard"),
    stickers: 1,
    img: `${process.env.PUBLIC_URL}/img/cupboard.svg`,
  },
  {
    name: i18next.t("objects.wardrobe"),
    stickers: 2,
    img: `${process.env.PUBLIC_URL}/img/wardrobe.svg`,
  },
  {
    name: i18next.t("objects.bag120l"),
    stickers: 1,
    img: `${process.env.PUBLIC_URL}/img/trash.png`,
  },
  {
    name: i18next.t("objects.singleMattress"),
    stickers: 1,
    img: `${process.env.PUBLIC_URL}/img/small-mattress.png`,
  },
  {
    name: i18next.t("objects.doubleMattress"),
    stickers: 2,
    img: `${process.env.PUBLIC_URL}/img/big-mattress.png`,
  },
];

export const STAMP_PRICE = 8.6;
