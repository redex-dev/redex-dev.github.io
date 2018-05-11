// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.flexDirection(TypedGlamor.column),
        /* :: */[
          TypedGlamor.backgroundColor(Theme.Inverted[/* Color */0][/* background */0]),
          /* :: */[
            TypedGlamor.minHeight(TypedGlamor.vh(100)),
            /* :: */[
              TypedGlamor.color(Theme.Inverted[/* Color */0][/* text */1]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

function topNav(showWhenBurger) {
  return TypedGlamor.css(/* None */0, /* :: */[
              TypedGlamor.label("topNav"),
              /* :: */[
                TypedGlamor.select("& > div", /* :: */[
                      TypedGlamor.display(TypedGlamor.flex),
                      /* :: */[
                        TypedGlamor.textAlign(TypedGlamor.center),
                        /* :: */[
                          TypedGlamor.padding2(TypedGlamor.em(0.5), TypedGlamor.em(1.45)),
                          /* :: */[
                            TypedGlamor.select("& > .left", /* :: */[
                                  TypedGlamor.flex_(TypedGlamor.$$int(1)),
                                  /* [] */0
                                ]),
                            /* :: */[
                              TypedGlamor.select("& > .right", /* :: */[
                                    TypedGlamor.flex_(TypedGlamor.$$int(1)),
                                    /* :: */[
                                      TypedGlamor.textAlign(TypedGlamor.right),
                                      /* [] */0
                                    ]
                                  ]),
                              /* :: */[
                                TypedGlamor.select("& a", /* :: */[
                                      TypedGlamor.fontVariant(TypedGlamor.smallCaps),
                                      /* :: */[
                                        TypedGlamor.textDecoration(TypedGlamor.none),
                                        /* :: */[
                                          TypedGlamor.textTransform(TypedGlamor.lowercase),
                                          /* :: */[
                                            TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.em(1)),
                                            /* :: */[
                                              TypedGlamor.opacity(0.75),
                                              /* :: */[
                                                TypedGlamor.select("&:hover", /* :: */[
                                                      TypedGlamor.opacity(1),
                                                      /* [] */0
                                                    ]),
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]),
                                /* :: */[
                                  TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                                        showWhenBurger ? TypedGlamor.transforms(/* :: */[
                                                TypedGlamor.translateY(TypedGlamor.zero),
                                                /* [] */0
                                              ]) : TypedGlamor.transforms(/* :: */[
                                                TypedGlamor.translateY(TypedGlamor.pct(-100)),
                                                /* [] */0
                                              ]),
                                        /* :: */[
                                          TypedGlamor.position(TypedGlamor.absolute),
                                          /* :: */[
                                            TypedGlamor.zIndex(TypedGlamor.$$int(150)),
                                            /* :: */[
                                              TypedGlamor.paddingRight(TypedGlamor.em(3.5)),
                                              /* :: */[
                                                TypedGlamor.transitions(/* :: */[
                                                      /* tuple */[
                                                        TypedGlamor.AnimatableProperty[/* transform */101],
                                                        TypedGlamor.ms(250),
                                                        TypedGlamor.easeInOut,
                                                        TypedGlamor.ms(0)
                                                      ],
                                                      /* [] */0
                                                    ]),
                                                /* :: */[
                                                  TypedGlamor.flexDirection(TypedGlamor.column),
                                                  /* :: */[
                                                    TypedGlamor.backgroundColor(Theme.Color[/* darkPrimary */1]),
                                                    /* :: */[
                                                      TypedGlamor.select("& > .left", /* :: */[
                                                            TypedGlamor.display(TypedGlamor.none),
                                                            /* [] */0
                                                          ]),
                                                      /* :: */[
                                                        TypedGlamor.select("& > *", /* :: */[
                                                              TypedGlamor.textAlign(TypedGlamor.right),
                                                              /* :: */[
                                                                TypedGlamor.fontSize(TypedGlamor.em(1.25)),
                                                                /* :: */[
                                                                  TypedGlamor.lineHeight(TypedGlamor.em(1.5)),
                                                                  /* [] */0
                                                                ]
                                                              ]
                                                            ]),
                                                        /* :: */[
                                                          TypedGlamor.select("& > .right", /* :: */[
                                                                TypedGlamor.marginTop(TypedGlamor.em(0.75)),
                                                                /* :: */[
                                                                  TypedGlamor.marginBottom(TypedGlamor.em(0.75)),
                                                                  /* [] */0
                                                                ]
                                                              ]),
                                                          /* [] */0
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]),
                /* [] */0
              ]
            ]);
}

var burger = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.absolute),
      /* :: */[
        TypedGlamor.offsetRight(TypedGlamor.zero),
        /* :: */[
          TypedGlamor.zIndex(TypedGlamor.$$int(200)),
          /* :: */[
            TypedGlamor.display(TypedGlamor.none),
            /* :: */[
              TypedGlamor.padding2(TypedGlamor.em(0.5), TypedGlamor.em(0.7)),
              /* :: */[
                TypedGlamor.fontSize(TypedGlamor.em(1.5)),
                /* :: */[
                  TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                        TypedGlamor.display(TypedGlamor.block),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var inactiveLink = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.unsafe("opacity", "0.25 !important"),
      /* :: */[
        TypedGlamor.cursor(TypedGlamor.$$default),
        /* [] */0
      ]
    ]);

var publishLink = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.flex_(TypedGlamor.$$int(1)),
      /* :: */[
        TypedGlamor.fontSize(TypedGlamor.em(0.85)),
        /* :: */[
          TypedGlamor.whiteSpace(TypedGlamor.nowrap),
          /* :: */[
            TypedGlamor.outline3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Inverted[/* Color */0][/* text */1]),
            /* :: */[
              TypedGlamor.padding2(TypedGlamor.ex(0.5), TypedGlamor.ex(1.5)),
              /* :: */[
                TypedGlamor.hover(/* :: */[
                      TypedGlamor.outline3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Inverted[/* Color */0][/* text */1]),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var header = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.margin(TypedGlamor.em(1.45)),
      /* [] */0
    ]);

var title = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.margin3(TypedGlamor.em(1), TypedGlamor.zero, TypedGlamor.zero),
      /* :: */[
        TypedGlamor.textAlign(TypedGlamor.center),
        /* :: */[
          TypedGlamor.fontVariant(TypedGlamor.smallCaps),
          /* :: */[
            TypedGlamor.fontSize(TypedGlamor.rem(2.5)),
            /* :: */[
              TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
              /* :: */[
                TypedGlamor.color(TypedGlamor.hex("fff6")),
                /* :: */[
                  TypedGlamor.select("& > em", /* :: */[
                        TypedGlamor.fontStyle(TypedGlamor.normal),
                        /* :: */[
                          TypedGlamor.color(TypedGlamor.white),
                          /* [] */0
                        ]
                      ]),
                  /* :: */[
                    TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                          TypedGlamor.fontSize(TypedGlamor.rem(2)),
                          /* [] */0
                        ]),
                    /* :: */[
                      TypedGlamor.select("@media (max-width: 450px)", /* :: */[
                            TypedGlamor.fontSize(TypedGlamor.rem(1.5)),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var logo = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.block),
      /* :: */[
        TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.auto),
        /* :: */[
          TypedGlamor.height(TypedGlamor.em(3)),
          /* :: */[
            TypedGlamor.unsafe("fill", Theme.Inverted[/* Color */0][/* text */1]),
            /* [] */0
          ]
        ]
      ]
    ]);

exports.root = root;
exports.topNav = topNav;
exports.burger = burger;
exports.inactiveLink = inactiveLink;
exports.publishLink = publishLink;
exports.header = header;
exports.title = title;
exports.logo = logo;
/* root Not a pure module */
