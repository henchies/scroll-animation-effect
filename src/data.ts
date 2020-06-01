export interface HotspotImage {
  source: string;
  alt: string;
  width: number;
  height: number;
}

export interface HotspotVideoSource {
  mp4: string;
  webm?: string;
  alt: string;
}

export interface HotspotVideo {
  source: HotspotVideoSource;
}

export interface HotspotContentBlock {
  id: string;
  text?: string;
  image?: HotspotImage;
  video?: HotspotVideo;
}

export interface HotspotCoordinates {
  top: string;
  left: string;
}

export interface Hotspot {
  id: number;
  title: string;
  content: {
    type: "text" | "picture" | "video";
    blocks: HotspotContentBlock[];
  };
  hotspot: {
    coordinates: HotspotCoordinates;
  };
}

export const exteriorHotspots: Hotspot[] = [
  {
    id: 1,
    title: "“The Grid” and emblem",
    content: {
      type: "picture",
      blocks: [
        {
          id: "573a3b8d-4203-4f5e-8d8a-f4b63bf6e01a",
          text:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          image: {
            source: "http://dummyimage.com/189x168.png/ff4444/ffffff",
            alt: "knowledge user",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "well-modulated"
            }
          }
        },
        {
          id: "c873e9ba-be80-4666-b9c3-47988a761e36",
          text:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: {
            source: "http://dummyimage.com/184x137.bmp/ff4444/ffffff",
            alt: "encompassing",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "extranet"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "54%", left: "6%" } }
  },
  {
    id: 2,
    title: "erat fermentum justo nec condimentum neque",
    content: {
      type: "picture",
      blocks: [
        {
          id: "43807ab4-006f-44ae-b677-f05fd3c49ad9",
          text:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          image: {
            source: "http://dummyimage.com/218x105.png/cc0000/ffffff",
            alt: "migration",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "systematic"
            }
          }
        },
        {
          id: "9b695ab9-973f-4fcc-9c16-46d6e8003238",
          text:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          image: {
            source: "http://dummyimage.com/236x107.png/5fa2dd/ffffff",
            alt: "zero administration",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "pricing structure"
            }
          }
        },
        {
          id: "5ac0a82a-d22d-47e9-92b9-5a60a83f9bb7",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
          image: {
            source: "http://dummyimage.com/225x133.png/ff4444/ffffff",
            alt: "migration",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "capability"
            }
          }
        },
        {
          id: "243334be-1d98-40f5-a6d3-499ceff2df55",
          text:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          image: {
            source: "http://dummyimage.com/125x227.jpg/ff4444/ffffff",
            alt: "object-oriented",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "uniform"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "36%", left: "18%" } }
  },
  {
    id: 3,
    title: "luctus cum",
    content: {
      type: "picture",
      blocks: [
        {
          id: "0d63a964-bbea-409d-a92a-9c587c4700ce",
          text:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          image: {
            source: "http://dummyimage.com/229x212.png/dddddd/000000",
            alt: "Streamlined",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Implemented"
            }
          }
        },
        {
          id: "66215748-76d0-47eb-9814-20a17eb8dd3e",
          text:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          image: {
            source: "http://dummyimage.com/152x101.png/dddddd/000000",
            alt: "needs-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "maximized"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "77%", left: "39%" } }
  },
  {
    id: 4,
    title: "vestibulum sagittis sapien",
    content: {
      type: "text",
      blocks: [
        {
          id: "6c8f091e-2fc3-42b5-b03e-62a3c8388ae6",
          text:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          image: {
            source: "http://dummyimage.com/101x150.png/ff4444/ffffff",
            alt: "Triple-buffered",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "user-facing"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "52%", left: "51%" } }
  },
  {
    id: 5,
    title: "pede posuere nonummy integer non velit donec",
    content: {
      type: "text",
      blocks: [
        {
          id: "7246d284-da42-4d9f-8f83-d209042a44f5",
          text:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          image: {
            source: "http://dummyimage.com/126x193.png/ff4444/ffffff",
            alt: "Managed",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "initiative"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "52%", left: "18%" } }
  },
  {
    id: 6,
    title: "pede justo eu",
    content: {
      type: "video",
      blocks: [
        {
          id: "7412a806-5af7-465f-b4da-37cbec85b003",
          text:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          image: {
            source: "http://dummyimage.com/187x101.bmp/dddddd/000000",
            alt: "empowering",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Team-oriented"
            }
          }
        },
        {
          id: "fa4c9320-4a9a-4924-8e10-27fc57e37698",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          image: {
            source: "http://dummyimage.com/100x226.png/cc0000/ffffff",
            alt: "protocol",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "4th generation"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "19%", left: "51%" } }
  },
  {
    id: 7,
    title: "donec vitae nisi nam ultrices",
    content: {
      type: "picture",
      blocks: [
        {
          id: "be30ed4a-9246-43ec-ae85-6429ab916334",
          text:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          image: {
            source: "http://dummyimage.com/112x173.png/ff4444/ffffff",
            alt: "Balanced",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "mobile"
            }
          }
        },
        {
          id: "ff68015c-3aa6-4283-a3d1-66d2c4a887f7",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          image: {
            source: "http://dummyimage.com/130x137.bmp/cc0000/ffffff",
            alt: "hub",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "service-desk"
            }
          }
        },
        {
          id: "d23c2851-7eb7-4451-86a1-4be44562ffb7",
          text:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          image: {
            source: "http://dummyimage.com/128x215.png/ff4444/ffffff",
            alt: "Function-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Stand-alone"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "53%", left: "7%" } }
  },
  {
    id: 8,
    title: "ultrices aliquet maecenas",
    content: {
      type: "picture",
      blocks: [
        {
          id: "3fec580b-d17e-493f-9e63-79a4b4be7ff0",
          text:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          image: {
            source: "http://dummyimage.com/230x236.jpg/cc0000/ffffff",
            alt: "Organic",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "contextually-based"
            }
          }
        },
        {
          id: "5b7634b5-12a2-42f8-93e8-a530f04a1f2c",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          image: {
            source: "http://dummyimage.com/174x184.png/ff4444/ffffff",
            alt: "bifurcated",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "system-worthy"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "81%", left: "45%" } }
  },
  {
    id: 9,
    title: "dapibus duis",
    content: {
      type: "picture",
      blocks: [
        {
          id: "a203cf7c-93e0-4348-9da4-9dc5e5132ed3",
          text:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          image: {
            source: "http://dummyimage.com/178x129.bmp/ff4444/ffffff",
            alt: "Configurable",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "solution-oriented"
            }
          }
        },
        {
          id: "316de5a3-0ded-43b2-b1c8-eeca0db6777b",
          text:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          image: {
            source: "http://dummyimage.com/206x234.png/dddddd/000000",
            alt: "scalable",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "hybrid"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "38%", left: "34%" } }
  },
  {
    id: 10,
    title: "non velit nec",
    content: {
      type: "picture",
      blocks: [
        {
          id: "e0e1ca9e-4046-4cae-ae8a-f7533d4310fd",
          text:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: {
            source: "http://dummyimage.com/106x238.png/5fa2dd/ffffff",
            alt: "web-enabled",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "methodical"
            }
          }
        },
        {
          id: "a0512ec7-9cab-4c00-a603-78632e56d5d5",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          image: {
            source: "http://dummyimage.com/207x197.jpg/cc0000/ffffff",
            alt: "discrete",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Polarised"
            }
          }
        },
        {
          id: "6615d221-7ed3-4c94-9ed7-cb8589a75cc9",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          image: {
            source: "http://dummyimage.com/167x169.png/5fa2dd/ffffff",
            alt: "needs-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Fully-configurable"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "82%", left: "18%" } }
  },
  {
    id: 11,
    title: "duis consequat dui nec",
    content: {
      type: "text",
      blocks: [
        {
          id: "2c45c443-d14c-4712-ad88-8d2c7c622f10",
          text:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          image: {
            source: "http://dummyimage.com/164x165.bmp/dddddd/000000",
            alt: "holistic",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "fresh-thinking"
            }
          }
        },
        {
          id: "60eb160e-6b0c-4b1a-a690-59ab09682192",
          text:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          image: {
            source: "http://dummyimage.com/139x227.bmp/dddddd/000000",
            alt: "leverage",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "time-frame"
            }
          }
        },
        {
          id: "85afb011-ba30-4e14-886d-7c5f876c606e",
          text:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          image: {
            source: "http://dummyimage.com/245x203.jpg/ff4444/ffffff",
            alt: "discrete",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "client-server"
            }
          }
        },
        {
          id: "5ca0a1d6-7f7d-4cc5-924d-af1d6f7a3548",
          text:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          image: {
            source: "http://dummyimage.com/150x199.png/dddddd/000000",
            alt: "Reduced",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "monitoring"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "6%", left: "41%" } }
  },
  {
    id: 12,
    title: "suscipit ligula in lacus curabitur at",
    content: {
      type: "picture",
      blocks: [
        {
          id: "47776c3f-8552-45fc-8f20-4a4a90150837",
          text:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: {
            source: "http://dummyimage.com/163x133.png/cc0000/ffffff",
            alt: "maximized",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "contingency"
            }
          }
        },
        {
          id: "1af86d34-4627-49d6-bacb-64163913c760",
          text:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          image: {
            source: "http://dummyimage.com/250x214.png/cc0000/ffffff",
            alt: "Synchronised",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Mandatory"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "98%", left: "79%" } }
  },
  {
    id: 13,
    title: "tristique in tempus sit amet sem fusce",
    content: {
      type: "video",
      blocks: [
        {
          id: "881d7fa9-0f0f-431e-9cbe-849095bd19e6",
          text:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          image: {
            source: "http://dummyimage.com/108x150.png/cc0000/ffffff",
            alt: "needs-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "adapter"
            }
          }
        },
        {
          id: "7e80022d-07ff-4c19-b644-b48fa9ad407b",
          text:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: {
            source: "http://dummyimage.com/103x110.png/dddddd/000000",
            alt: "Adaptive",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Pre-emptive"
            }
          }
        },
        {
          id: "92b5d608-11ba-4fee-b456-74d0b7f7a9df",
          text:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: {
            source: "http://dummyimage.com/107x166.png/dddddd/000000",
            alt: "intermediate",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "monitoring"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "76%", left: "6%" } }
  },
  {
    id: 14,
    title: "lorem quisque ut",
    content: {
      type: "video",
      blocks: [
        {
          id: "9a8ac6c5-cf2a-47f0-9e84-bbc0c6f08ab2",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: {
            source: "http://dummyimage.com/223x142.png/5fa2dd/ffffff",
            alt: "Decentralized",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Face to face"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "55%", left: "23%" } }
  },
  {
    id: 15,
    title: "sit amet justo morbi ut odio",
    content: {
      type: "text",
      blocks: [
        {
          id: "20d2bea3-d64a-4106-b47c-f35cd00c52a9",
          text:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          image: {
            source: "http://dummyimage.com/161x174.png/cc0000/ffffff",
            alt: "initiative",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "client-driven"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "54%", left: "83%" } }
  },
  {
    id: 16,
    title: "orci luctus et ultrices posuere cubilia curae",
    content: {
      type: "text",
      blocks: [
        {
          id: "6d20f1d4-0604-459d-80fd-7f147e2d34cd",
          text:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          image: {
            source: "http://dummyimage.com/162x188.png/5fa2dd/ffffff",
            alt: "orchestration",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "focus group"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "5%", left: "16%" } }
  },
  {
    id: 17,
    title: "ipsum primis in faucibus orci",
    content: {
      type: "video",
      blocks: [
        {
          id: "88dcda7f-573a-4681-b2b2-d9541535dc1c",
          text:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          image: {
            source: "http://dummyimage.com/163x241.png/cc0000/ffffff",
            alt: "Balanced",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Multi-lateral"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "47%", left: "31%" } }
  },
  {
    id: 18,
    title: "porttitor id consequat in consequat ut",
    content: {
      type: "picture",
      blocks: [
        {
          id: "87cbcce4-2bdb-4a40-89ec-140f82fa8b96",
          text:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          image: {
            source: "http://dummyimage.com/118x243.jpg/ff4444/ffffff",
            alt: "clear-thinking",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "systemic"
            }
          }
        },
        {
          id: "9e0ec74a-4a4d-46f3-a672-1b3998b095f2",
          text:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          image: {
            source: "http://dummyimage.com/125x117.bmp/dddddd/000000",
            alt: "Programmable",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "complexity"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "73%", left: "39%" } }
  },
  {
    id: 19,
    title: "sociis natoque penatibus et magnis",
    content: {
      type: "picture",
      blocks: [
        {
          id: "a67ac892-d04c-40a5-97b5-4c73b8934d64",
          text:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
          image: {
            source: "http://dummyimage.com/148x132.png/5fa2dd/ffffff",
            alt: "website",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Enhanced"
            }
          }
        },
        {
          id: "17a3e163-e309-4697-9579-7dbb7088280c",
          text:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          image: {
            source: "http://dummyimage.com/200x199.jpg/dddddd/000000",
            alt: "impactful",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "systemic"
            }
          }
        },
        {
          id: "df92e12a-29f6-4b35-a6cd-454f2d1e9e77",
          text:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          image: {
            source: "http://dummyimage.com/173x218.bmp/ff4444/ffffff",
            alt: "Total",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "user-facing"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "59%", left: "91%" } }
  },
  {
    id: 20,
    title: "semper interdum mauris",
    content: {
      type: "video",
      blocks: [
        {
          id: "eb41fb2e-66b5-4342-8178-b53acf612a0e",
          text:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          image: {
            source: "http://dummyimage.com/162x125.jpg/5fa2dd/ffffff",
            alt: "Cross-group",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "national"
            }
          }
        },
        {
          id: "0d157629-e34f-473f-84bb-220633ae2f76",
          text:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: {
            source: "http://dummyimage.com/136x204.jpg/dddddd/000000",
            alt: "Streamlined",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "algorithm"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "42%", left: "9%" } }
  },
  {
    id: 21,
    title: "eleifend pede libero quis",
    content: {
      type: "text",
      blocks: [
        {
          id: "8562692f-7445-448c-a749-b2050bfaafde",
          text:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          image: {
            source: "http://dummyimage.com/170x181.jpg/dddddd/000000",
            alt: "incremental",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Progressive"
            }
          }
        },
        {
          id: "82641bb7-6618-48a3-ac1f-849db02ada9b",
          text:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          image: {
            source: "http://dummyimage.com/178x162.png/5fa2dd/ffffff",
            alt: "Face to face",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Triple-buffered"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "72%", left: "17%" } }
  },
  {
    id: 22,
    title: "hac habitasse platea",
    content: {
      type: "picture",
      blocks: [
        {
          id: "039d28dc-96ae-48bc-9d2c-b187e1713d0b",
          text:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: {
            source: "http://dummyimage.com/155x140.bmp/ff4444/ffffff",
            alt: "24 hour",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Phased"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "90%", left: "35%" } }
  },
  {
    id: 23,
    title: "donec ut",
    content: {
      type: "video",
      blocks: [
        {
          id: "546900af-d658-44e8-b557-b1b83f98e8f7",
          text:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          image: {
            source: "http://dummyimage.com/145x171.bmp/ff4444/ffffff",
            alt: "Networked",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "solution"
            }
          }
        },
        {
          id: "d3dcd02b-e918-4092-8bd7-d22ab3b8a82d",
          text:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          image: {
            source: "http://dummyimage.com/129x187.png/5fa2dd/ffffff",
            alt: "Quality-focused",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Streamlined"
            }
          }
        },
        {
          id: "3a12c089-d544-489e-bb79-308b108b1a65",
          text:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          image: {
            source: "http://dummyimage.com/242x232.jpg/dddddd/000000",
            alt: "middleware",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Re-contextualized"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "18%", left: "93%" } }
  },
  {
    id: 24,
    title: "urna ut tellus nulla",
    content: {
      type: "video",
      blocks: [
        {
          id: "43d6246d-2b0d-4935-b310-d9da98f6c435",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          image: {
            source: "http://dummyimage.com/135x178.bmp/cc0000/ffffff",
            alt: "content-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "dedicated"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "6%", left: "60%" } }
  }
];

export const interiorHotspots: Hotspot[] = [
  {
    id: 25,
    title: "hendrerit at vulputate vitae nisl aenean",
    content: {
      type: "video",
      blocks: [
        {
          id: "e93f4105-ebf5-44bd-9ce7-e02214e196a5",
          text:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          image: {
            source: "http://dummyimage.com/158x106.png/dddddd/000000",
            alt: "adapter",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "context-sensitive"
            }
          }
        },
        {
          id: "3550569b-22df-468d-a1e4-2084b5e55ed2",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: {
            source: "http://dummyimage.com/241x192.bmp/dddddd/000000",
            alt: "focus group",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "grid-enabled"
            }
          }
        },
        {
          id: "dcc31f5d-a417-4980-97cd-7c4d157d7029",
          text:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          image: {
            source: "http://dummyimage.com/169x238.jpg/cc0000/ffffff",
            alt: "algorithm",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "background"
            }
          }
        },
        {
          id: "c9b00a3b-727e-4c9c-9b31-f089124928ed",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
          image: {
            source: "http://dummyimage.com/161x208.bmp/dddddd/000000",
            alt: "fresh-thinking",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "open system"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "27%", left: "55%" } }
  },
  {
    id: 26,
    title: "neque libero convallis eget eleifend luctus",
    content: {
      type: "video",
      blocks: [
        {
          id: "bc6550d8-eb12-430a-90f0-3e7cc171890b",
          text:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          image: {
            source: "http://dummyimage.com/196x185.bmp/cc0000/ffffff",
            alt: "discrete",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "local"
            }
          }
        },
        {
          id: "53d51894-0c54-4a57-bfd7-339ef9dee37c",
          text:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          image: {
            source: "http://dummyimage.com/118x214.bmp/dddddd/000000",
            alt: "Fundamental",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Reduced"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "15%", left: "78%" } }
  },
  {
    id: 27,
    title: "nibh ligula nec sem duis aliquam",
    content: {
      type: "video",
      blocks: [
        {
          id: "142e6603-32c8-4218-88eb-f33d3540ab49",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: {
            source: "http://dummyimage.com/180x177.bmp/5fa2dd/ffffff",
            alt: "functionalities",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "initiative"
            }
          }
        },
        {
          id: "ddd62d15-636e-4921-8e6d-2b1a64240cdb",
          text:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          image: {
            source: "http://dummyimage.com/243x238.bmp/cc0000/ffffff",
            alt: "Object-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "project"
            }
          }
        },
        {
          id: "1419592a-0d14-4a2e-a691-0437567e047a",
          text:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          image: {
            source: "http://dummyimage.com/135x201.jpg/5fa2dd/ffffff",
            alt: "Enterprise-wide",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Triple-buffered"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "20%", left: "20%" } }
  },
  {
    id: 28,
    title: "id consequat in",
    content: {
      type: "picture",
      blocks: [
        {
          id: "ab8ef546-0a10-4437-a858-9612778f2e5a",
          text:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: {
            source: "http://dummyimage.com/157x163.bmp/cc0000/ffffff",
            alt: "Total",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "solution-oriented"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "58%", left: "100%" } }
  },
  {
    id: 29,
    title: "tincidunt eget tempus vel",
    content: {
      type: "picture",
      blocks: [
        {
          id: "17e2e29b-af91-4318-ae71-c7fb96ff34ea",
          text:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: {
            source: "http://dummyimage.com/128x224.bmp/cc0000/ffffff",
            alt: "real-time",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "flexibility"
            }
          }
        },
        {
          id: "0b4a433f-11a1-46b8-89dc-2ec326326006",
          text:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          image: {
            source: "http://dummyimage.com/106x235.jpg/dddddd/000000",
            alt: "asymmetric",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "infrastructure"
            }
          }
        },
        {
          id: "dd1cd29f-f8e1-4f73-9902-294835bf9929",
          text:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          image: {
            source: "http://dummyimage.com/243x198.png/5fa2dd/ffffff",
            alt: "executive",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "next generation"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "57%", left: "69%" } }
  },
  {
    id: 30,
    title: "vivamus tortor duis mattis egestas metus aenean",
    content: {
      type: "picture",
      blocks: [
        {
          id: "dce7ea57-76e9-409f-b6b2-a0d39724f083",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: {
            source: "http://dummyimage.com/184x144.png/ff4444/ffffff",
            alt: "Function-based",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "instruction set"
            }
          }
        },
        {
          id: "11edf823-01ee-4024-a90f-9ccb786c26ba",
          text:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          image: {
            source: "http://dummyimage.com/177x117.png/cc0000/ffffff",
            alt: "local",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "productivity"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "8%", left: "39%" } }
  },
  {
    id: 31,
    title: "tortor quis turpis",
    content: {
      type: "picture",
      blocks: [
        {
          id: "e9f855d5-8d4a-4850-ae2f-7759d551f052",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          image: {
            source: "http://dummyimage.com/218x193.png/cc0000/ffffff",
            alt: "hub",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "pricing structure"
            }
          }
        },
        {
          id: "3baa31c1-6e83-422f-b660-a84c76ab99e7",
          text:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          image: {
            source: "http://dummyimage.com/190x179.jpg/ff4444/ffffff",
            alt: "frame",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "impactful"
            }
          }
        },
        {
          id: "d7d46bfc-b839-415e-8907-e2ba866d7776",
          text:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: {
            source: "http://dummyimage.com/152x109.bmp/cc0000/ffffff",
            alt: "Right-sized",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Mandatory"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "62%", left: "98%" } }
  },
  {
    id: 32,
    title: "quam pharetra magna ac consequat",
    content: {
      type: "text",
      blocks: [
        {
          id: "51c5fd3c-fcaf-4328-b782-7ab88ff2cdfd",
          text:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          image: {
            source: "http://dummyimage.com/235x234.png/ff4444/ffffff",
            alt: "3rd generation",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "secondary"
            }
          }
        },
        {
          id: "501f845f-755a-4a6a-a7ca-f38b96105db1",
          text:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: {
            source: "http://dummyimage.com/211x190.png/dddddd/000000",
            alt: "systemic",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Organic"
            }
          }
        },
        {
          id: "7a735722-873d-49bc-ab3f-3c08f681aa7d",
          text:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          image: {
            source: "http://dummyimage.com/170x140.bmp/cc0000/ffffff",
            alt: "Self-enabling",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "executive"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "6%", left: "1%" } }
  },
  {
    id: 33,
    title: "viverra diam vitae",
    content: {
      type: "text",
      blocks: [
        {
          id: "edac30a7-1ea5-4a11-be8f-2a1886b85931",
          text:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          image: {
            source: "http://dummyimage.com/123x113.jpg/cc0000/ffffff",
            alt: "Cloned",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Grass-roots"
            }
          }
        },
        {
          id: "690a255b-cf0e-4665-bec2-d1345fcfedd5",
          text:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          image: {
            source: "http://dummyimage.com/208x102.png/dddddd/000000",
            alt: "tertiary",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "motivating"
            }
          }
        },
        {
          id: "0418e60b-e0ce-4a2a-a742-ee845c9c09b5",
          text:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: {
            source: "http://dummyimage.com/198x178.bmp/ff4444/ffffff",
            alt: "zero tolerance",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Centralized"
            }
          }
        },
        {
          id: "b8ac4789-ea96-4824-abd7-09ca941be931",
          text:
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          image: {
            source: "http://dummyimage.com/161x109.jpg/dddddd/000000",
            alt: "Profit-focused",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Organic"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "63%", left: "3%" } }
  },
  {
    id: 34,
    title: "varius ut blandit non interdum",
    content: {
      type: "video",
      blocks: [
        {
          id: "58a3ef43-fadd-42d8-a34e-9c74802b907c",
          text:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          image: {
            source: "http://dummyimage.com/236x225.bmp/ff4444/ffffff",
            alt: "Persevering",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "workforce"
            }
          }
        },
        {
          id: "c6c27aa8-545d-40b8-b4b9-435aaed6c1e2",
          text:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          image: {
            source: "http://dummyimage.com/192x153.bmp/5fa2dd/ffffff",
            alt: "user-facing",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "bifurcated"
            }
          }
        },
        {
          id: "c49a46fe-4dd8-4f21-8a7a-df2478a3ce1d",
          text:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          image: {
            source: "http://dummyimage.com/231x213.jpg/ff4444/ffffff",
            alt: "Cross-platform",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "flexibility"
            }
          }
        },
        {
          id: "7c7331cc-121f-4055-b858-26ea3b0c2fbf",
          text:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: {
            source: "http://dummyimage.com/187x170.bmp/ff4444/ffffff",
            alt: "Reduced",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Public-key"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "39%", left: "87%" } }
  },
  {
    id: 35,
    title: "id turpis integer aliquet massa",
    content: {
      type: "picture",
      blocks: [
        {
          id: "1a86a4bb-433a-4f42-b082-1c25795ef8ae",
          text:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          image: {
            source: "http://dummyimage.com/193x124.png/5fa2dd/ffffff",
            alt: "moratorium",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "portal"
            }
          }
        },
        {
          id: "6e59120e-9d92-478d-88a0-96e9c1056792",
          text:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          image: {
            source: "http://dummyimage.com/246x147.bmp/cc0000/ffffff",
            alt: "Programmable",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "approach"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "50%", left: "72%" } }
  },
  {
    id: 36,
    title: "in hac habitasse platea",
    content: {
      type: "text",
      blocks: [
        {
          id: "35f26938-94c6-4658-a7cf-df57414b6de3",
          text:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          image: {
            source: "http://dummyimage.com/162x137.jpg/dddddd/000000",
            alt: "alliance",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Decentralized"
            }
          }
        },
        {
          id: "716d90b5-76cb-4f60-8ee8-a84ddc987559",
          text:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          image: {
            source: "http://dummyimage.com/144x187.png/5fa2dd/ffffff",
            alt: "pricing structure",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "explicit"
            }
          }
        },
        {
          id: "f30c18ed-c1f2-482c-93e2-e0d0dd7d0fa3",
          text:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          image: {
            source: "http://dummyimage.com/224x171.bmp/5fa2dd/ffffff",
            alt: "Profit-focused",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Distributed"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "70%", left: "57%" } }
  },
  {
    id: 37,
    title: "sed justo pellentesque viverra pede ac diam",
    content: {
      type: "video",
      blocks: [
        {
          id: "b03622b4-01b0-4c2d-924b-2997a4c95b99",
          text:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          image: {
            source: "http://dummyimage.com/177x213.png/dddddd/000000",
            alt: "empowering",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Synergistic"
            }
          }
        },
        {
          id: "d1d3ea16-0049-42d7-8c19-7e74b3b6e742",
          text:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          image: {
            source: "http://dummyimage.com/198x224.bmp/5fa2dd/ffffff",
            alt: "Distributed",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "productivity"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "31%", left: "23%" } }
  },
  {
    id: 38,
    title: "posuere cubilia curae",
    content: {
      type: "video",
      blocks: [
        {
          id: "139cc922-9329-431c-8685-5088f61c7b88",
          text:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          image: {
            source: "http://dummyimage.com/207x106.png/ff4444/ffffff",
            alt: "Synergized",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Multi-layered"
            }
          }
        },
        {
          id: "915a4a62-f488-461a-88ff-b8e7daa25c8d",
          text:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: {
            source: "http://dummyimage.com/166x248.jpg/dddddd/000000",
            alt: "utilisation",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Compatible"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "76%", left: "67%" } }
  },
  {
    id: 39,
    title: "turpis integer aliquet massa id",
    content: {
      type: "picture",
      blocks: [
        {
          id: "7aaab0d8-fac1-4dc6-9e6c-44af5bcf245b",
          text:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: {
            source: "http://dummyimage.com/144x129.png/ff4444/ffffff",
            alt: "5th generation",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "initiative"
            }
          }
        },
        {
          id: "66ef5b21-86c7-45a8-ae5a-d8cff25d05a5",
          text:
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          image: {
            source: "http://dummyimage.com/154x127.bmp/ff4444/ffffff",
            alt: "Reactive",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "leverage"
            }
          }
        },
        {
          id: "e532e0ca-9f8f-4016-b446-1d7fd7a7072a",
          text:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          image: {
            source: "http://dummyimage.com/147x133.bmp/cc0000/ffffff",
            alt: "eco-centric",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "De-engineered"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "15%", left: "92%" } }
  },
  {
    id: 40,
    title: "in hac habitasse platea dictumst morbi vestibulum",
    content: {
      type: "picture",
      blocks: [
        {
          id: "5d7a4e6c-c997-4965-802b-fe0b533b1532",
          text:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          image: {
            source: "http://dummyimage.com/200x114.png/dddddd/000000",
            alt: "Re-engineered",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Ergonomic"
            }
          }
        },
        {
          id: "8f9229aa-18a7-418e-92a3-001f436dc8f9",
          text:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          image: {
            source: "http://dummyimage.com/145x232.jpg/cc0000/ffffff",
            alt: "focus group",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Operative"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "56%", left: "94%" } }
  },
  {
    id: 41,
    title: "dis parturient montes nascetur ridiculus mus",
    content: {
      type: "text",
      blocks: [
        {
          id: "6c85f65e-fa84-4e02-8580-37972517f189",
          text:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          image: {
            source: "http://dummyimage.com/136x248.png/cc0000/ffffff",
            alt: "capacity",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Right-sized"
            }
          }
        },
        {
          id: "e1863163-89dc-4130-97f6-f3d19a9c82cb",
          text:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          image: {
            source: "http://dummyimage.com/208x166.png/ff4444/ffffff",
            alt: "Intuitive",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "data-warehouse"
            }
          }
        },
        {
          id: "a456e071-eea9-44b1-a702-8f8b38abf38e",
          text:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          image: {
            source: "http://dummyimage.com/120x130.bmp/cc0000/ffffff",
            alt: "focus group",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "bi-directional"
            }
          }
        },
        {
          id: "d5ff53d3-15d6-44ed-a891-4c21b7e83294",
          text:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          image: {
            source: "http://dummyimage.com/143x242.jpg/ff4444/ffffff",
            alt: "paradigm",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "Balanced"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "10%", left: "11%" } }
  },
  {
    id: 42,
    title: "lectus aliquam sit amet diam in",
    content: {
      type: "picture",
      blocks: [
        {
          id: "9e154f7e-d176-401b-af1f-174ac38a7f19",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          image: {
            source: "http://dummyimage.com/233x178.bmp/ff4444/ffffff",
            alt: "5th generation",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "disintermediate"
            }
          }
        },
        {
          id: "3ebd623a-bc91-4a92-ac42-ca56742b8d09",
          text:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          image: {
            source: "http://dummyimage.com/238x152.png/5fa2dd/ffffff",
            alt: "system engine",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "User-friendly"
            }
          }
        },
        {
          id: "621a0b94-c945-4634-8881-b1e82edc5282",
          text:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: {
            source: "http://dummyimage.com/219x149.bmp/dddddd/000000",
            alt: "Extended",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "infrastructure"
            }
          }
        },
        {
          id: "2785c9e0-8e90-44d3-a88e-97835c75ca17",
          text:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          image: {
            source: "http://dummyimage.com/118x105.png/5fa2dd/ffffff",
            alt: "neural-net",
            width: 1280,
            height: 720
          },
          video: {
            source: {
              mp4: "https://player.vimeo.com/video/1084537",
              alt: "strategy"
            }
          }
        }
      ]
    },
    hotspot: { coordinates: { top: "4%", left: "18%" } }
  }
];

export const hotspots: Hotspot[] = [...exteriorHotspots, ...interiorHotspots];
