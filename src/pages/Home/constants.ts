import wheatImg from "src/assets/images/products/wheat.jpg";
import barleyImg from "src/assets/images/products/barley.jpg";
import cornImg from "src/assets/images/products/corn.jpg";

export const GRAIN_PRODUCTS = [
  {
    id: 1,
    title: "Зерно пшениці",
    description:
      "Для продовольчих, кормових цілей та на експорт згідно ДСТУ 3768:2010",
    price: "Ціна договірна",
    img: wheatImg,
    contacts: {
      title: "Контакти: Валентина Резнік",
      links: [
        {
          label: "+38 050 332 26 450",
          href: "tel:3805033226450",
        },

        {
          label: "vp.reznik@upi-agro.com.ua",
          href: "mailto:vp.reznik@upi-agro.com.ua",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Зерно ячменю",
    description:
      "Для кормових цілей та експорту у відповідності до ДСТУ 3769-98",
    price: "Ціна договірна",
    img: barleyImg,
    contacts: {
      title: "Контакти: Валентина Резнік",
      links: [
        {
          label: "+38 050 332 26 450",
          href: "tel:3805033226450",
        },

        {
          label: "vp.reznik@upi-agro.com.ua",
          href: "mailto:vp.reznik@upi-agro.com.ua",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Зерно кукурудзи",
    description:
      "Для переробки на комбікорм, кормових цілей та на експорт згідно ДСТУ 4525:2006",
    price: "Ціна договірна",
    img: cornImg,
    contacts: {
      title: "Контакти: Валентина Резнік",
      links: [
        {
          label: "+38 050 332 26 450",
          href: "tel:3805033226450",
        },

        {
          label: "vp.reznik@upi-agro.com.ua",
          href: "mailto:vp.reznik@upi-agro.com.ua",
        },
      ],
    },
  },
];
