let takawoColorPalettes = [
  ["#f19b4e", "#7f6640", "#dc5845", "#637055", "#e4d6c8", "#929e79"],
  ["#e6bc8a", "#da4742", "#202125", "#909062", "#dba380", "#dcc6b9"],
  ["#151015", "#511a28", "#8e563a", "#fcfbfa", "#bf9969", "#718282"],
  ["#e3cfb7", "#dba260", "#887d41", "#938d47", "#c46148"],
  ["#73924d", "#eb9f48", "#b19564", "#aabcb2", "#f0e3d7", "#6b4b2b"],
  ["#cec6bf", "#363021", "#c3a369", "#be1a23"],
  ["#e3d2c7", "#c91b34", "#f9c784", "#d9a068"],
  ["#eadfde", "#f13641", "#445168", "#fccd50", "#d89150"],
  ["#f0ebe1", "#d8ccb3", "#cd2a41", "#8bc08f", "#f69fac", "#c4714c"],
  ["#e8e4d4", "#e3c585", "#344e18", "#d1c2c3", "#503d4b"],
  ["#f9f5ec", "#d8ae6a", "#d4824b", "#588c92", "#89bfb3", "#b55847"],
  ["#dad7c3", "#c7895a", "#343530", "#899c63", "#60827d", "#d6b58a"],
  ["#cb4c42", "#786b3d", "#7b5b44", "#f5f4ed", "#687266", "#ca8b84"],
  ["#e5e9e9", "#da2034", "#8db4bb", "#4f6a31", "#6ab26d", "#e4bc89"],
  ["#efb984", "#f6a56b", "#98473f", "#544354", "#db6349"],
  ["#3c3e46", "#ddded7", "#c07552", "#5b6984", "#809c73", "#c3ae98"],
  ["#e22a42", "#fcb518", "#7cb360", "#9d91cc"],
  ["#fdf8f1", "#914954", "#f59363", "#a8a78b", "#1e1f1f"],
  ["#f7f8f9", "#c1434f", "#a6dab9", "#3a4d79"],
  ["#585046", "#eadaaf", "#d06f55"],
  ["#362b27", "#f5f2ee", "#623132", "#dba258", "#baa463"],
  ["#92c093", "#b7a6d2"],
  ["#646d4d", "#fac71a", "#e94943", "#8accd8"],
  ["#f69356", "#fcc982", "#9caba3", "#f2f1e1", "#524d35"],
  ["#bf473a", "#ed3b31", "#f8ca1b", "#8c874b"],
  ["#fffbf4", "#313f5f", "#cd464c", "#fca8bd", "#fa718d"],
  ["#ff8978", "#fccc6f", "#4facc2", "#3292b7", "#7879ab"],
  ["#f7cfd6", "#fd8591", "#fadfe3", "#3a7147", "#2b2828"],
  ["#f6a769", "#3e654d", "#4561a6", "#404e99"],
  ["#ffffff", "#516940", "#e9566d"],
  ["#fda9b9", "#82ccd0", "#3cb1de"],
  ["#fb6953", "#a37a4a", "#4899c8", "#356a85"],
  ["#4d5948", "#a79955", "#ef382d"],
  ["#c4413b", "#f35a2e", "#7db481", "#39436b"],
  ["#ddd453", "#addfba", "#4da57f"],
  ["#ecdfac", "#436775", "#458d7f", "#795446"],
  ["#e9ecf3", "#4ba3bc", "#db482e", "#33aa92"],
  ["#f98c25", "#68afa6", "#a2576e", "#faf4e5"],
  ["#62aa75", "#5d5f60", "#2e6345", "#e7e3d8", "#6c4e3d"],
  ["#ebe7e0", "#68bdc1", "#f8be44", "#5c6a92", "#a9625e"],
  ["#e9f1f6", "#db353d", "#6a8e89", "#34504a", "#6a87cc"],
  ["#efc4ab", "#2e241c", "#ea7843", "#ab9948", "#f6e7de"],
  ["#d3dedc", "#5ab9d6", "#2988ac", "#f3612c", "#daab82"],
  ["#4d4638", "#f77843", "#fbc836", "#d8b85a", "#6c6e47", "#b0e3ee"],
  ["#fefbf9", "#db5b44", "#87b4af", "#39446f", "#f7db8b"],
  ["#d1d0c9", "#353724", "#42415e", "#bf3e30", "#c8b757"],
  ["#f5da30", "#338ab6", "#8a8740", "#73563f", "#332321", "#e0dfdf"],
  ["#f7f6e5", "#9ad6f5", "#678970", "#a14453"],
  ["#ec4c38", "#aa5f3c", "#385645", "#2d5b6c"],
  ["#e84343", "#c38d73", "#b68542", "#bbc273", "#4395c7", "#7186c0"],
  ["#9781c3", "#90cb74", "#fed855", "#eb2039"],
  ["#fabc65", "#8e7f54", "#6f9598", "#3e64b1", "#30463d", "#1d1d2e"],
  ["#ba3f4c", "#eb213b", "#e2d1a5", "#fccb7d", "#80cddd"],
  ["#e54644", "#faf9f8", "#1a1a17"],
  ["#337544", "#e8d8cd", "#f8e3e1", "#f5f6f7"],
  ["#f9fafc", "#fac0d9", "#95bc7c", "#4eb7e7"],
  ["#f0ebe2", "#48a076", "#856fb1", "#55604f"],
  ["#f1e5d5", "#8d73ad", "#fb939d"],
  ["#f5e5d4", "#ac98c4", "#f19f49", "#e63b26", "#7aaf4f"],
  ["#f6fbf7", "#8fceea", "#be5b41", "#5d75aa"],
  ["#f7b4b3", "#cdd2c5", "#95b0a0", "#f9836f", "#6898a0"],
  ["#e2d7b9", "#7f5a41", "#7a3d38", "#616a6a", "#a97950", "#1a1316"],
  ["#83834f", "#e0c786", "#30363d", "#db2f38", "#66989c", "#e9ded1"],
  ["#abb163", "#e9e1cb", "#9b7c4a", "#74a7a0", "#e46641", "#5a5925"],
  ["#7aa467", "#695643", "#9a7b55", "#d4393a", "#ddb19e", "#394b3a"],
  ["#f6532d", "#cec4a4", "#3d4532", "#5e9682", "#becbbc", "#f7ac66"],
  ["#dd8458", "#76b661", "#ddd66d", "#0f0b0c", "#4d493b", "#f3f4ee"],
  ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"],
  ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"],
];

let brightColorpalettes = [
  ["#ff6f61", "#6f4c3e", "#88b04b", "#f7cac9", "#92a8d1", "#955251"],
  ["#ffcc00", "#ff6699", "#c2c2f0", "#ffb3e6", "#ff7f50", "#ffa07a"],
  ["#00bfff", "#ff1493", "#ff6347", "#3cb371", "#ff69b4", "#ffd700"],
  ["#ff4500", "#32cd32", "#00bfff", "#9370db", "#ff6347", "#ff8c00"],
  ["#ff1493", "#00fa9a", "#40e0d0", "#1e90ff", "#ffa07a", "#ffd700"],
  ["#ff8c00", "#00bfff", "#d2691e", "#7b68ee", "#ff69b4", "#8b0000"],
  ["#ff7f50", "#00fa9a", "#4682b4", "#da70d6", "#ffa07a", "#ffcc00"],
  ["#ff4500", "#7fff00", "#6495ed", "#ff1493", "#ffd700", "#ffb6c1"],
  ["#f08080", "#98fb98", "#add8e6", "#ff69b4", "#ffa07a", "#ff6347"],
  ["#00fa9a", "#ff6347", "#1e90ff", "#ff1493", "#ffcc00", "#ff4500"],
];

let cohesiveColorPalettes = [
  ["#ff6f61", "#f7cac9", "#88b04b", "#92a8d1", "#ffcc00"],
  ["#ff7f50", "#ff4500", "#ffa07a", "#00bfff", "#ffd700"],
  ["#ff69b4", "#ff1493", "#c2c2f0", "#ff6347", "#00fa9a"],
  ["#32cd32", "#ffa07a", "#ff8c00", "#4682b4", "#ff6347"],
  ["#00fa9a", "#7b68ee", "#1e90ff", "#ffb3e6", "#ff4500"],
  ["#ffcc00", "#d2691e", "#ff1493", "#40e0d0", "#9370db"],
  ["#ff6347", "#8b0000", "#ff8c00", "#f08080", "#00bfff"],
  ["#6495ed", "#ff4500", "#00fa9a", "#ffcc00", "#ff69b4"],
  ["#da70d6", "#ff6347", "#ffa07a", "#add8e6", "#ff7f50"],
  ["#ff6f61", "#f0e68c", "#ffb6c1", "#32cd32", "#ff1493"],
];

// Wado Sanzo gpt
let wadoColorPalettes = [
  // Palette 1
  [
    "#2E4C6E",  // Background (dark blue)
    "#F2A900",  // Bright yellow
    "#B94D5C",  // Soft red
    "#FF7F50",  // Coral
    "#56C7D9",  // Turquoise
    "#E3C7A0"   // Light tan
  ],
  // Palette 2
  [
    "#1B2D4D",  // Background (deep navy)
    "#F24E1E",  // Vibrant orange
    "#8FBA39",  // Lime green
    "#D9B80E",  // Gold
    "#1D9A99",  // Teal
    "#EAE0B2"   // Cream
  ],
  // Palette 3
  [
    "#4C3B56",  // Background (dark purple)
    "#D88F8F",  // Light pink
    "#FFD700",  // Bright gold
    "#A4D65E",  // Fresh green
    "#FF6F61",  // Salmon
    "#B3D8C9"   // Soft aqua
  ],
  // Palette 4
  [
    "#3C3F41",  // Background (charcoal gray)
    "#FFB500",  // Bright amber
    "#D8363D",  // Crimson
    "#5DBB7A",  // Emerald green
    "#FFA07A",  // Light salmon
    "#E2E8B2"   // Pale olive
  ],
  // Palette 5
  [
    "#2A2E31",  // Background (dark slate)
    "#F57F20",  // Vibrant tangerine
    "#B63D66",  // Bright raspberry
    "#4FC3F7",  // Sky blue
    "#C6DBA9",  // Soft sage
    "#FFDAB9"   // Light peach
  ],
  // Palette 6
  [
    "#1D2125",  // Background (jet black)
    "#FBBF24",  // Sunflower yellow
    "#D61C4E",  // Cherry red
    "#0ABAB5",  // Caribbean blue
    "#FFD3B6",  // Light apricot
    "#FFE9E6"   // Pale blush
  ],
  // Palette 7
  [
    "#212F35",  // Background (deep teal)
    "#F5A623",  // Bright saffron
    "#D50032",  // Bold red
    "#00695C",  // Deep teal
    "#FF6B6B",  // Light coral
    "#BFD3C1"   // Light olive
  ]
];

let colorPalettes = cohesiveColorPalettes
