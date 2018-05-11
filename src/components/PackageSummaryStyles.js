// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");

function root(isFlagged) {
  return TypedGlamor.css(/* None */0, /* :: */[
              TypedGlamor.padding2(TypedGlamor.em(0.75), TypedGlamor.em(1.5)),
              /* :: */[
                TypedGlamor.marginBottom(TypedGlamor.em(0.5)),
                /* :: */[
                  TypedGlamor.lineHeight(TypedGlamor.em(1.45)),
                  /* :: */[
                    isFlagged ? TypedGlamor.add(/* :: */[
                            TypedGlamor.opacity(0.5),
                            /* [] */0
                          ]) : TypedGlamor.add(/* :: */[
                            TypedGlamor.boxShadows(/* :: */[
                                  Theme.Shadow[/* panel */1],
                                  /* [] */0
                                ]),
                            /* :: */[
                              TypedGlamor.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
                              /* [] */0
                            ]
                          ]),
                    /* :: */[
                      TypedGlamor.hover(/* :: */[
                            TypedGlamor.opacity(1),
                            /* [] */0
                          ]),
                      /* :: */[
                        TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                              TypedGlamor.select("& .version", /* :: */[
                                    TypedGlamor.display(TypedGlamor.none),
                                    /* [] */0
                                  ]),
                              /* :: */[
                                TypedGlamor.select("& .platforms", /* :: */[
                                      TypedGlamor.display(TypedGlamor.none),
                                      /* [] */0
                                    ]),
                                /* [] */0
                              ]
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var header = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.alignItems(TypedGlamor.baseline),
        /* [] */0
      ]
    ]);

var name = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.color(Theme.Color[/* link */5]),
      /* :: */[
        TypedGlamor.fontSize(TypedGlamor.em(1.1)),
        /* :: */[
          TypedGlamor.textDecoration(TypedGlamor.none),
          /* :: */[
            TypedGlamor.hover(/* :: */[
                  TypedGlamor.textDecoration(TypedGlamor.underline),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var props = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.justifyContent(TypedGlamor.flexEnd),
        /* :: */[
          TypedGlamor.alignItems(TypedGlamor.baseline),
          /* :: */[
            TypedGlamor.marginLeft(TypedGlamor.auto),
            /* :: */[
              TypedGlamor.select("& > *", /* :: */[
                    TypedGlamor.marginLeft(TypedGlamor.em(1)),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var updated = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* :: */[
          TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                TypedGlamor.display(TypedGlamor.none),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var license = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.inlineBlock),
      /* :: */[
        TypedGlamor.fontSize(TypedGlamor.em(0.85)),
        /* :: */[
          TypedGlamor.whiteSpace(TypedGlamor.nowrap),
          /* :: */[
            TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Color[/* text */4]),
            /* :: */[
              TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
              /* :: */[
                TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                      TypedGlamor.display(TypedGlamor.none),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var nolicense = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.color(Theme.Color[/* bad */7]),
      /* :: */[
        TypedGlamor.fontSize(TypedGlamor.em(0.85)),
        /* :: */[
          TypedGlamor.whiteSpace(TypedGlamor.nowrap),
          /* :: */[
            TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Color[/* bad */7]),
            /* :: */[
              TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
              /* :: */[
                TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                      TypedGlamor.display(TypedGlamor.none),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var stars = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* :: */[
          TypedGlamor.select("@media (max-width: 450px)", /* :: */[
                TypedGlamor.display(TypedGlamor.none),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var starIcon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.marginLeft(TypedGlamor.em(0.25)),
      /* :: */[
        TypedGlamor.transforms(/* :: */[
              TypedGlamor.translateY(TypedGlamor.px(-1)),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var description = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.unsafe("textOverflow", "ellipsis"),
      /* :: */[
        TypedGlamor.overflow(TypedGlamor.hidden),
        /* :: */[
          TypedGlamor.margin3(TypedGlamor.ex(0.5), TypedGlamor.zero, TypedGlamor.ex(1)),
          /* [] */0
        ]
      ]
    ]);

var tags = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.color(Theme.Color[/* link */5]),
      /* :: */[
        TypedGlamor.select("& a", /* :: */[
              TypedGlamor.backgroundColor(TypedGlamor.hsla(TypedGlamor.num(6.9), 90, 90, 0.4)),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var tagsIcon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.opacity(0.25),
      /* [] */0
    ]);

exports.root = root;
exports.header = header;
exports.name = name;
exports.props = props;
exports.updated = updated;
exports.license = license;
exports.nolicense = nolicense;
exports.stars = stars;
exports.starIcon = starIcon;
exports.description = description;
exports.tags = tags;
exports.tagsIcon = tagsIcon;
/* header Not a pure module */
