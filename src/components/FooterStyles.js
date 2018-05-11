// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");

function root(context) {
  return TypedGlamor.css(/* None */0, /* :: */[
              TypedGlamor.backgroundColor(context >= 431720585 ? Theme.Color[/* darkPrimary */1] : Theme.Color[/* darkBackground */3]),
              /* :: */[
                TypedGlamor.marginTop(TypedGlamor.auto),
                /* :: */[
                  TypedGlamor.select("& > div", /* :: */[
                        TypedGlamor.display(TypedGlamor.flex),
                        /* :: */[
                          TypedGlamor.padding(TypedGlamor.em(1.45)),
                          /* :: */[
                            TypedGlamor.paddingTop(TypedGlamor.em(1)),
                            /* :: */[
                              TypedGlamor.select("& > section", /* :: */[
                                    TypedGlamor.opacity(0.65),
                                    /* :: */[
                                      TypedGlamor.transitions(/* :: */[
                                            /* tuple */[
                                              TypedGlamor.AnimatableProperty[/* opacity */76],
                                              TypedGlamor.ms(500),
                                              TypedGlamor.linear,
                                              TypedGlamor.ms(0)
                                            ],
                                            /* [] */0
                                          ]),
                                      /* :: */[
                                        TypedGlamor.width(TypedGlamor.pct(20)),
                                        /* :: */[
                                          TypedGlamor.select("&:last-child", /* :: */[
                                                TypedGlamor.opacity(0.75),
                                                /* :: */[
                                                  TypedGlamor.marginLeft(TypedGlamor.auto),
                                                  /* :: */[
                                                    TypedGlamor.alignSelf(TypedGlamor.flexEnd),
                                                    /* :: */[
                                                      TypedGlamor.textAlign(TypedGlamor.right),
                                                      /* [] */0
                                                    ]
                                                  ]
                                                ]
                                              ]),
                                          /* :: */[
                                            TypedGlamor.hover(/* :: */[
                                                  TypedGlamor.opacity(1),
                                                  /* [] */0
                                                ]),
                                            /* :: */[
                                              TypedGlamor.select("& h1", /* :: */[
                                                    TypedGlamor.fontSize(TypedGlamor.em(0.85)),
                                                    /* :: */[
                                                      TypedGlamor.textTransform(TypedGlamor.lowercase),
                                                      /* :: */[
                                                        TypedGlamor.fontVariant(TypedGlamor.smallCaps),
                                                        /* :: */[
                                                          TypedGlamor.opacity(0.5),
                                                          /* :: */[
                                                            TypedGlamor.marginBottom(TypedGlamor.em(0.35)),
                                                            /* [] */0
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]),
                                              /* :: */[
                                                TypedGlamor.select("& a", /* :: */[
                                                      TypedGlamor.textDecoration(TypedGlamor.none),
                                                      /* :: */[
                                                        TypedGlamor.fontSize(TypedGlamor.rem(0.85)),
                                                        /* :: */[
                                                          TypedGlamor.opacity(0.75),
                                                          /* :: */[
                                                            TypedGlamor.paddingRight(TypedGlamor.em(0.5)),
                                                            /* :: */[
                                                              TypedGlamor.hover(/* :: */[
                                                                    TypedGlamor.opacity(1),
                                                                    /* [] */0
                                                                  ]),
                                                              /* [] */0
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
                              /* :: */[
                                TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                                      TypedGlamor.select("& > section", /* :: */[
                                            TypedGlamor.width(TypedGlamor.pct(25)),
                                            /* [] */0
                                          ]),
                                      /* [] */0
                                    ]),
                                /* :: */[
                                  TypedGlamor.select("@media (max-width: 450px)", /* :: */[
                                        TypedGlamor.flexDirection(TypedGlamor.column),
                                        /* :: */[
                                          TypedGlamor.select("& > section", /* :: */[
                                                TypedGlamor.width(TypedGlamor.auto),
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
                      ]),
                  /* [] */0
                ]
              ]
            ]);
}

var algoliaLogo = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.height(TypedGlamor.em(1)),
      /* :: */[
        TypedGlamor.opacity(0.75),
        /* [] */0
      ]
    ]);

exports.root = root;
exports.algoliaLogo = algoliaLogo;
/* algoliaLogo Not a pure module */
