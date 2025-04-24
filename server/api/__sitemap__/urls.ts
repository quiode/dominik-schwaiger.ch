export default defineSitemapEventHandler(async () => {
  const images = (await getJSON()).map((image) => image.name);

  return [
    {
      loc: "/gallery",
      _i18nTransform: true,
      images: images.map((image) => {
        return {
          loc: `/images/${image}.webp`,
        };
      }),
    },
    {
      loc: "/",
      _i18nTransform: true,
      images: [
        {
          loc: "/avatar.jpg",
          title: "Image of Dominik Schwaiger",
        },
      ],
    },
    {
      loc: "/de/cv",
      _i18nTransform: false,
      images: [
        {
          loc: "CV-de.svg",
          title: "CV von Dominik Schwaiger",
        },
      ],
    },
    {
      loc: "/cv",
      _i18nTransform: false,
      images: [
        {
          loc: "CV-en.svg",
          title: "CV of Dominik Schwaiger",
        },
      ],
    },
    ...images.map((image) => {
      return {
        loc: `/gallery/${image}`,
        _i18nTransform: true,
        images: [
          {
            loc: `/images/${image}.webp`,
          },
        ],
      };
    }),
  ];
});
