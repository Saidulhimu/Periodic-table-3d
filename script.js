/* =========================================================================
   ATOMIC LATTICE — INTERACTIVE 3D PERIODIC TABLE
   Built with Three.js (CSS3DRenderer), Tween.js & Web Audio API
   High-Speed Responsive 3D Physics & Interactive Learning
   ========================================================================= */

/* =========================================================================
   1. ELEMENT DATASET (118 CHEMICAL ELEMENTS)
   ========================================================================= */
const ELEMENTS = [
  [
    1,
    "H",
    "Hydrogen",
    1.008,
    "nonmetal",
    1,
    1,
    "gas",
    "s",
    "1s¹",
    [
      1
    ],
    "Lightest and most abundant chemical element in the universe."
  ],
  [
    2,
    "He",
    "Helium",
    4.003,
    "noble",
    1,
    18,
    "gas",
    "s",
    "1s²",
    [
      2
    ],
    "Colorless, odorless noble gas used in cryogenics and balloons."
  ],
  [
    3,
    "Li",
    "Lithium",
    6.94,
    "alkali",
    2,
    1,
    "solid",
    "s",
    "[He] 2s¹",
    [
      2,
      1
    ],
    "Least dense solid metal, widely used in rechargeable batteries."
  ],
  [
    4,
    "Be",
    "Beryllium",
    9.012,
    "alkaline",
    2,
    2,
    "solid",
    "s",
    "[He] 2s²",
    [
      2,
      2
    ],
    "Strong, lightweight metal used in aerospace and X-ray windows."
  ],
  [
    5,
    "B",
    "Boron",
    10.81,
    "metalloid",
    2,
    13,
    "solid",
    "p",
    "[He] 2s² 2p¹",
    [
      2,
      3
    ],
    "Metalloid used extensively in fiberglass and heat-resistant borosilicate glass."
  ],
  [
    6,
    "C",
    "Carbon",
    12.011,
    "nonmetal",
    2,
    14,
    "solid",
    "p",
    "[He] 2s² 2p²",
    [
      2,
      4
    ],
    "Basis of all organic life, found as graphite, diamond, and graphene."
  ],
  [
    7,
    "N",
    "Nitrogen",
    14.007,
    "nonmetal",
    2,
    15,
    "gas",
    "p",
    "[He] 2s² 2p³",
    [
      2,
      5
    ],
    "Makes up roughly 78% of Earth's atmosphere; essential for amino acids."
  ],
  [
    8,
    "O",
    "Oxygen",
    15.999,
    "nonmetal",
    2,
    16,
    "gas",
    "p",
    "[He] 2s² 2p⁴",
    [
      2,
      6
    ],
    "Highly reactive nonmetal vital for cellular respiration and combustion."
  ],
  [
    9,
    "F",
    "Fluorine",
    18.998,
    "halogen",
    2,
    17,
    "gas",
    "p",
    "[He] 2s² 2p⁵",
    [
      2,
      7
    ],
    "Extremely electronegative and reactive halogen, used in teflon and dental care."
  ],
  [
    10,
    "Ne",
    "Neon",
    20.18,
    "noble",
    2,
    18,
    "gas",
    "p",
    "[He] 2s² 2p⁶",
    [
      2,
      8
    ],
    "Noble gas renowned for glowing with a brilliant reddish-orange discharge in signs."
  ],
  [
    11,
    "Na",
    "Sodium",
    22.99,
    "alkali",
    3,
    1,
    "solid",
    "s",
    "[Ne] 3s¹",
    [
      2,
      8,
      1
    ],
    "Soft, silvery alkali metal found in table salt; vital for biological nerve signaling."
  ],
  [
    12,
    "Mg",
    "Magnesium",
    24.305,
    "alkaline",
    3,
    2,
    "solid",
    "s",
    "[Ne] 3s²",
    [
      2,
      8,
      2
    ],
    "Light structural metal, burns with a bright white flame; essential for chlorophyll."
  ],
  [
    13,
    "Al",
    "Aluminium",
    26.982,
    "post",
    3,
    13,
    "solid",
    "p",
    "[Ne] 3s² 3p¹",
    [
      2,
      8,
      3
    ],
    "Corrosion-resistant, lightweight metal used ubiquitously in aviation and packaging."
  ],
  [
    14,
    "Si",
    "Silicon",
    28.085,
    "metalloid",
    3,
    14,
    "solid",
    "p",
    "[Ne] 3s² 3p²",
    [
      2,
      8,
      4
    ],
    "Semiconductor cornerstone of modern electronics, computer chips, and solar cells."
  ],
  [
    15,
    "P",
    "Phosphorus",
    30.974,
    "nonmetal",
    3,
    15,
    "solid",
    "p",
    "[Ne] 3s² 3p³",
    [
      2,
      8,
      5
    ],
    "Essential component of DNA, RNA, ATP, and biological cell membranes."
  ],
  [
    16,
    "S",
    "Sulfur",
    32.06,
    "nonmetal",
    3,
    16,
    "solid",
    "p",
    "[Ne] 3s² 3p⁴",
    [
      2,
      8,
      6
    ],
    "Bright yellow crystalline nonmetal essential for proteins, gunpowder, and sulfuric acid."
  ],
  [
    17,
    "Cl",
    "Chlorine",
    35.45,
    "halogen",
    3,
    17,
    "gas",
    "p",
    "[Ne] 3s² 3p⁵",
    [
      2,
      8,
      7
    ],
    "Yellow-green halogen gas utilized worldwide in water purification and disinfectants."
  ],
  [
    18,
    "Ar",
    "Argon",
    39.948,
    "noble",
    3,
    18,
    "gas",
    "p",
    "[Ne] 3s² 3p⁶",
    [
      2,
      8,
      8
    ],
    "Third most abundant atmospheric gas, provides an inert shielding atmosphere for welding."
  ],
  [
    19,
    "K",
    "Potassium",
    39.098,
    "alkali",
    4,
    1,
    "solid",
    "s",
    "[Ar] 4s¹",
    [
      2,
      8,
      8,
      1
    ],
    "Soft alkali metal that reacts violently with water; critical intracellular electrolyte."
  ],
  [
    20,
    "Ca",
    "Calcium",
    40.078,
    "alkaline",
    4,
    2,
    "solid",
    "s",
    "[Ar] 4s²",
    [
      2,
      8,
      8,
      2
    ],
    "Fifth most abundant element in Earth's crust; vital for bones, teeth, and muscles."
  ],
  [
    21,
    "Sc",
    "Scandium",
    44.956,
    "transition",
    4,
    3,
    "solid",
    "d",
    "[Ar] 3d¹ 4s²",
    [
      2,
      8,
      9,
      2
    ],
    "Light transition metal used in aerospace alloys and high-intensity stadium lamps."
  ],
  [
    22,
    "Ti",
    "Titanium",
    47.867,
    "transition",
    4,
    4,
    "solid",
    "d",
    "[Ar] 3d² 4s²",
    [
      2,
      8,
      10,
      2
    ],
    "Renowned for its high strength-to-weight ratio, biocompatibility, and corrosion resistance."
  ],
  [
    23,
    "V",
    "Vanadium",
    50.942,
    "transition",
    4,
    5,
    "solid",
    "d",
    "[Ar] 3d³ 4s²",
    [
      2,
      8,
      11,
      2
    ],
    "Hard transition metal used to produce high-strength shock-resistant steel alloys."
  ],
  [
    24,
    "Cr",
    "Chromium",
    51.996,
    "transition",
    4,
    6,
    "solid",
    "d",
    "[Ar] 3d⁵ 4s¹",
    [
      2,
      8,
      13,
      1
    ],
    "Steely-gray lustrous metal that gives stainless steel its corrosion resistance."
  ],
  [
    25,
    "Mn",
    "Manganese",
    54.938,
    "transition",
    4,
    7,
    "solid",
    "d",
    "[Ar] 3d⁵ 4s²",
    [
      2,
      8,
      13,
      2
    ],
    "Essential transition metal in industrial steelmaking and aluminum alloys."
  ],
  [
    26,
    "Fe",
    "Iron",
    55.845,
    "transition",
    4,
    8,
    "solid",
    "d",
    "[Ar] 3d⁶ 4s²",
    [
      2,
      8,
      14,
      2
    ],
    "Most common element on Earth by mass; forms steel and carries oxygen in hemoglobin."
  ],
  [
    27,
    "Co",
    "Cobalt",
    58.933,
    "transition",
    4,
    9,
    "solid",
    "d",
    "[Ar] 3d⁷ 4s²",
    [
      2,
      8,
      15,
      2
    ],
    "Magnetic transition metal used in lithium-ion battery cathodes and vibrant blue pigments."
  ],
  [
    28,
    "Ni",
    "Nickel",
    58.693,
    "transition",
    4,
    10,
    "solid",
    "d",
    "[Ar] 3d⁸ 4s²",
    [
      2,
      8,
      16,
      2
    ],
    "Silvery-white metal prized for corrosion resistance, electroplating, and superalloys."
  ],
  [
    29,
    "Cu",
    "Copper",
    63.546,
    "transition",
    4,
    11,
    "solid",
    "d",
    "[Ar] 3d¹⁰ 4s¹",
    [
      2,
      8,
      18,
      1
    ],
    "Soft, ductile metal with exceptional thermal and electrical conductivity."
  ],
  [
    30,
    "Zn",
    "Zinc",
    65.38,
    "transition",
    4,
    12,
    "solid",
    "d",
    "[Ar] 3d¹⁰ 4s²",
    [
      2,
      8,
      18,
      2
    ],
    "Used for galvanizing iron to prevent rusting, making brass, and dietary enzyme support."
  ],
  [
    31,
    "Ga",
    "Gallium",
    69.723,
    "post",
    4,
    13,
    "solid",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p¹",
    [
      2,
      8,
      18,
      3
    ],
    "Soft metal that melts in human hands (29.76°C); used in semiconductors and LEDs."
  ],
  [
    32,
    "Ge",
    "Germanium",
    72.63,
    "metalloid",
    4,
    14,
    "solid",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p²",
    [
      2,
      8,
      18,
      4
    ],
    "Lustrous gray metalloid critical in early transistors and modern fiber-optic systems."
  ],
  [
    33,
    "As",
    "Arsenic",
    74.922,
    "metalloid",
    4,
    15,
    "solid",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p³",
    [
      2,
      8,
      18,
      5
    ],
    "Infamous toxic metalloid used in gallium arsenide semiconductor devices and bronze alloys."
  ],
  [
    34,
    "Se",
    "Selenium",
    78.971,
    "nonmetal",
    4,
    16,
    "solid",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p⁴",
    [
      2,
      8,
      18,
      6
    ],
    "Photoconductive nonmetal used in photocopiers, light meters, and dietary supplements."
  ],
  [
    35,
    "Br",
    "Bromine",
    79.904,
    "halogen",
    4,
    17,
    "liquid",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p⁵",
    [
      2,
      8,
      18,
      7
    ],
    "Reddish-brown fuming liquid halogen, used in flame retardants and water treatment."
  ],
  [
    36,
    "Kr",
    "Krypton",
    83.798,
    "noble",
    4,
    18,
    "gas",
    "p",
    "[Ar] 3d¹⁰ 4s² 4p⁶",
    [
      2,
      8,
      18,
      8
    ],
    "Colorless noble gas used in high-efficiency fluorescent lighting and flash lamps."
  ],
  [
    37,
    "Rb",
    "Rubidium",
    85.468,
    "alkali",
    5,
    1,
    "solid",
    "s",
    "[Kr] 5s¹",
    [
      2,
      8,
      18,
      8,
      1
    ],
    "Soft alkali metal that ignites spontaneously in air; used in atomic clocks."
  ],
  [
    38,
    "Sr",
    "Strontium",
    87.62,
    "alkaline",
    5,
    2,
    "solid",
    "s",
    "[Kr] 5s²",
    [
      2,
      8,
      18,
      8,
      2
    ],
    "Alkaline earth metal famous for producing bright crimson-red flames in fireworks."
  ],
  [
    39,
    "Y",
    "Yttrium",
    88.906,
    "transition",
    5,
    3,
    "solid",
    "d",
    "[Kr] 4d¹ 5s²",
    [
      2,
      8,
      18,
      9,
      2
    ],
    "Transition metal used in YAG lasers, camera lenses, and red phosphor TV screens."
  ],
  [
    40,
    "Zr",
    "Zirconium",
    91.224,
    "transition",
    5,
    4,
    "solid",
    "d",
    "[Kr] 4d² 5s²",
    [
      2,
      8,
      18,
      10,
      2
    ],
    "Highly corrosion-resistant metal used for nuclear reactor fuel rod cladding."
  ],
  [
    41,
    "Nb",
    "Niobium",
    92.906,
    "transition",
    5,
    5,
    "solid",
    "d",
    "[Kr] 4d⁴ 5s¹",
    [
      2,
      8,
      18,
      12,
      1
    ],
    "Superconducting metal used in MRI scanners and advanced jet engine components."
  ],
  [
    42,
    "Mo",
    "Molybdenum",
    95.95,
    "transition",
    5,
    6,
    "solid",
    "d",
    "[Kr] 4d⁵ 5s¹",
    [
      2,
      8,
      18,
      13,
      1
    ],
    "Refractory metal with a very high melting point, strengthening steel alloys."
  ],
  [
    43,
    "Tc",
    "Technetium",
    98,
    "transition",
    5,
    7,
    "synthetic",
    "d",
    "[Kr] 4d⁵ 5s²",
    [
      2,
      8,
      18,
      13,
      2
    ],
    "First artificially synthesized element; Tc-99m is widely used in medical imaging scans."
  ],
  [
    44,
    "Ru",
    "Ruthenium",
    101.07,
    "transition",
    5,
    8,
    "solid",
    "d",
    "[Kr] 4d⁷ 5s¹",
    [
      2,
      8,
      18,
      15,
      1
    ],
    "Rare platinum-group metal used in wear-resistant electrical contacts and catalysts."
  ],
  [
    45,
    "Rh",
    "Rhodium",
    102.906,
    "transition",
    5,
    9,
    "solid",
    "d",
    "[Kr] 4d⁸ 5s¹",
    [
      2,
      8,
      18,
      16,
      1
    ],
    "Extremely rare, highly reflective metal primarily used in automotive catalytic converters."
  ],
  [
    46,
    "Pd",
    "Palladium",
    106.42,
    "transition",
    5,
    10,
    "solid",
    "d",
    "[Kr] 4d¹⁰",
    [
      2,
      8,
      18,
      18
    ],
    "Precious metal capable of absorbing up to 900 times its volume in hydrogen gas."
  ],
  [
    47,
    "Ag",
    "Silver",
    107.868,
    "transition",
    5,
    11,
    "solid",
    "d",
    "[Kr] 4d¹⁰ 5s¹",
    [
      2,
      8,
      18,
      18,
      1
    ],
    "Possesses the highest electrical and thermal conductivity and reflectivity of all metals."
  ],
  [
    48,
    "Cd",
    "Cadmium",
    112.414,
    "transition",
    5,
    12,
    "solid",
    "d",
    "[Kr] 4d¹⁰ 5s²",
    [
      2,
      8,
      18,
      18,
      2
    ],
    "Soft toxic metal used in nickel-cadmium batteries and nuclear reactor control rods."
  ],
  [
    49,
    "In",
    "Indium",
    114.818,
    "post",
    5,
    13,
    "solid",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p¹",
    [
      2,
      8,
      18,
      18,
      3
    ],
    "Malleable post-transition metal used as transparent conductive ITO films on touchscreen displays."
  ],
  [
    50,
    "Sn",
    "Tin",
    118.71,
    "post",
    5,
    14,
    "solid",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p²",
    [
      2,
      8,
      18,
      18,
      4
    ],
    "Historical metal used in bronze alloys, soldering electronics, and protective tin plating."
  ],
  [
    51,
    "Sb",
    "Antimony",
    121.76,
    "metalloid",
    5,
    15,
    "solid",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p³",
    [
      2,
      8,
      18,
      18,
      5
    ],
    "Lustrous gray metalloid used in lead-acid batteries and flame-retardant materials."
  ],
  [
    52,
    "Te",
    "Tellurium",
    127.6,
    "metalloid",
    5,
    16,
    "solid",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p⁴",
    [
      2,
      8,
      18,
      18,
      6
    ],
    "Brittle silvery metalloid used in cadmium telluride solar panels and rewritable optical discs."
  ],
  [
    53,
    "I",
    "Iodine",
    126.904,
    "halogen",
    5,
    17,
    "solid",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p⁵",
    [
      2,
      8,
      18,
      18,
      7
    ],
    "Deep purple-black solid that sublimes into purple gas; vital nutrient for thyroid health."
  ],
  [
    54,
    "Xe",
    "Xenon",
    131.293,
    "noble",
    5,
    18,
    "gas",
    "p",
    "[Kr] 4d¹⁰ 5s² 5p⁶",
    [
      2,
      8,
      18,
      18,
      8
    ],
    "Dense noble gas used in xenon arc headlights, general anesthesia, and ion propulsion engines."
  ],
  [
    55,
    "Cs",
    "Caesium",
    132.905,
    "alkali",
    6,
    1,
    "solid",
    "s",
    "[Xe] 6s¹",
    [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "Extremely reactive golden metal; its vibration frequency defines the international standard SI second."
  ],
  [
    56,
    "Ba",
    "Barium",
    137.327,
    "alkaline",
    6,
    2,
    "solid",
    "s",
    "[Xe] 6s²",
    [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "Alkaline earth metal that burns with apple-green flame; used in medical gastrointestinal imaging."
  ],
  [
    57,
    "La",
    "Lanthanum",
    138.905,
    "lanthanide",
    9,
    3,
    "solid",
    "d",
    "[Xe] 5d¹ 6s²",
    [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "First of the lanthanides; used in hybrid car batteries and high-refraction camera lenses."
  ],
  [
    58,
    "Ce",
    "Cerium",
    140.116,
    "lanthanide",
    9,
    4,
    "solid",
    "f",
    "[Xe] 4f¹ 5d¹ 6s²",
    [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "Most abundant rare-earth metal; sparks easily, making it the flint inside cigarette lighters."
  ],
  [
    59,
    "Pr",
    "Praseodymium",
    140.908,
    "lanthanide",
    9,
    5,
    "solid",
    "f",
    "[Xe] 4f³ 6s²",
    [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "Soft rare-earth metal used in high-strength neodymium magnets and yellow-green glass tinting."
  ],
  [
    60,
    "Nd",
    "Neodymium",
    144.242,
    "lanthanide",
    9,
    6,
    "solid",
    "f",
    "[Xe] 4f⁴ 6s²",
    [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "Key component of NdFeB permanent magnets, the strongest commercial magnets in existence."
  ],
  [
    61,
    "Pm",
    "Promethium",
    145,
    "lanthanide",
    9,
    7,
    "synthetic",
    "f",
    "[Xe] 4f⁵ 6s²",
    [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "Radioactive rare-earth metal that emits beta radiation; used in atomic batteries."
  ],
  [
    62,
    "Sm",
    "Samarium",
    150.36,
    "lanthanide",
    9,
    8,
    "solid",
    "f",
    "[Xe] 4f⁶ 6s²",
    [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "Used in samarium-cobalt magnets that maintain magnetic strength at very high temperatures."
  ],
  [
    63,
    "Eu",
    "Europium",
    151.964,
    "lanthanide",
    9,
    9,
    "solid",
    "f",
    "[Xe] 4f⁷ 6s²",
    [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "Most reactive lanthanide; its phosphors provide red color on displays and euro banknote anti-counterfeiting."
  ],
  [
    64,
    "Gd",
    "Gadolinium",
    157.25,
    "lanthanide",
    9,
    10,
    "solid",
    "f",
    "[Xe] 4f⁷ 5d¹ 6s²",
    [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "Ferromagnetic rare earth metal used as an intravenous contrast agent in MRI medical scans."
  ],
  [
    65,
    "Tb",
    "Terbium",
    158.925,
    "lanthanide",
    9,
    11,
    "solid",
    "f",
    "[Xe] 4f⁹ 6s²",
    [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "Used in green phosphors for digital screens and in magnetostrictive naval sonar transducers."
  ],
  [
    66,
    "Dy",
    "Dysprosium",
    162.5,
    "lanthanide",
    9,
    12,
    "solid",
    "f",
    "[Xe] 4f¹⁰ 6s²",
    [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "High thermal neutron absorption; additives stabilize electric vehicle motor magnets against heat."
  ],
  [
    67,
    "Ho",
    "Holmium",
    164.93,
    "lanthanide",
    9,
    13,
    "solid",
    "f",
    "[Xe] 4f¹¹ 6s²",
    [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "Boasts the highest magnetic moment of any element; used in specialized surgical lasers."
  ],
  [
    68,
    "Er",
    "Erbium",
    167.259,
    "lanthanide",
    9,
    14,
    "solid",
    "f",
    "[Xe] 4f¹² 6s²",
    [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "Laser ions amplify transoceanic optical fiber communications; provides pink color in sunglasses."
  ],
  [
    69,
    "Tm",
    "Thulium",
    168.934,
    "lanthanide",
    9,
    15,
    "solid",
    "f",
    "[Xe] 4f¹³ 6s²",
    [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "One of the rarest lanthanides; used as a radiation source in portable X-ray devices."
  ],
  [
    70,
    "Yb",
    "Ytterbium",
    173.045,
    "lanthanide",
    9,
    16,
    "solid",
    "f",
    "[Xe] 4f¹⁴ 6s²",
    [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "Used in high-stability optical atomic clocks, stainless steel stress gauges, and fiber lasers."
  ],
  [
    71,
    "Lu",
    "Lutetium",
    174.967,
    "lanthanide",
    9,
    17,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d¹ 6s²",
    [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "Dense, hard lanthanide used as a catalyst in petroleum cracking and in targeted cancer radiotherapy."
  ],
  [
    72,
    "Hf",
    "Hafnium",
    178.49,
    "transition",
    6,
    4,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d² 6s²",
    [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "Excellent neutron absorber for nuclear submarines; high-k dielectric insulator in modern microprocessors."
  ],
  [
    73,
    "Ta",
    "Tantalum",
    180.948,
    "transition",
    6,
    5,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d³ 6s²",
    [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "Corrosion-proof metal widely used in miniature capacitors for smartphones and electronics."
  ],
  [
    74,
    "W",
    "Tungsten",
    183.84,
    "transition",
    6,
    6,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d⁴ 6s²",
    [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "Possesses the highest melting point of all metals (3422°C); used in incandescent filaments and armor penetrators."
  ],
  [
    75,
    "Re",
    "Rhenium",
    186.207,
    "transition",
    6,
    7,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d⁵ 6s²",
    [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "One of the rarest elements in Earth's crust; critical in nickel-based superalloys for jet engines."
  ],
  [
    76,
    "Os",
    "Osmium",
    190.23,
    "transition",
    6,
    8,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d⁶ 6s²",
    [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "Densest naturally occurring element (22.59 g/cm³); used in electrical contacts and fountain pen tips."
  ],
  [
    77,
    "Ir",
    "Iridium",
    192.217,
    "transition",
    6,
    9,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d⁷ 6s²",
    [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "Most corrosion-resistant metal known; the geological iridium layer marks the dinosaur extinction asteroid."
  ],
  [
    78,
    "Pt",
    "Platinum",
    195.085,
    "transition",
    6,
    10,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "Precious, unreactive transition metal used in automotive catalytic converters, fine jewelry, and chemotherapy drugs."
  ],
  [
    79,
    "Au",
    "Gold",
    196.967,
    "transition",
    6,
    11,
    "solid",
    "d",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "Prized since antiquity for its beauty, malleability, corrosion immunity, and electrical conductivity."
  ],
  [
    80,
    "Hg",
    "Mercury",
    200.592,
    "transition",
    6,
    12,
    "liquid",
    "d",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "Only metallic element liquid at standard temperature and pressure; known as quicksilver."
  ],
  [
    81,
    "Tl",
    "Thallium",
    204.38,
    "post",
    6,
    13,
    "solid",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "Soft gray metal historically notorious as an odorless, tasteless poison; used in infrared detectors."
  ],
  [
    82,
    "Pb",
    "Lead",
    207.2,
    "post",
    6,
    14,
    "solid",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "Heavy, malleable metal used for centuries in construction, weights, car batteries, and radiation shielding."
  ],
  [
    83,
    "Bi",
    "Bismuth",
    208.98,
    "post",
    6,
    15,
    "solid",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "Forms iridescent rainbow hopper crystals; non-toxic heavy metal used in Pepto-Bismol medicine."
  ],
  [
    84,
    "Po",
    "Polonium",
    209,
    "metalloid",
    6,
    16,
    "solid",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "Intensely radioactive element discovered by Marie and Pierre Curie, named after Poland."
  ],
  [
    85,
    "At",
    "Astatine",
    210,
    "halogen",
    6,
    17,
    "solid",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "Rarest naturally occurring element in Earth's crust, with less than 1 gram present at any time."
  ],
  [
    86,
    "Rn",
    "Radon",
    222,
    "noble",
    6,
    18,
    "gas",
    "p",
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "Radioactive, colorless noble gas produced by radium decay; can accumulate inside buildings."
  ],
  [
    87,
    "Fr",
    "Francium",
    223,
    "alkali",
    7,
    1,
    "solid",
    "s",
    "[Rn] 7s¹",
    [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "Extremely unstable radioactive alkali metal; second rarest naturally occurring element."
  ],
  [
    88,
    "Ra",
    "Radium",
    226,
    "alkaline",
    7,
    2,
    "solid",
    "s",
    "[Rn] 7s²",
    [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "Discovered by Marie Curie; historically used in self-luminous glow-in-the-dark watch dials."
  ],
  [
    89,
    "Ac",
    "Actinium",
    227,
    "actinide",
    10,
    3,
    "solid",
    "d",
    "[Rn] 6d¹ 7s²",
    [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "Radioactive metal that glows with a pale blue light; parent of the actinide series."
  ],
  [
    90,
    "Th",
    "Thorium",
    232.038,
    "actinide",
    10,
    4,
    "solid",
    "f",
    "[Rn] 6d² 7s²",
    [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "Weakly radioactive metal researched as an abundant, cleaner alternative nuclear energy fuel."
  ],
  [
    91,
    "Pa",
    "Protactinium",
    231.036,
    "actinide",
    10,
    5,
    "solid",
    "f",
    "[Rn] 5f² 6d¹ 7s²",
    [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "Dense, highly toxic actinide formed through the radioactive decay of uranium."
  ],
  [
    92,
    "U",
    "Uranium",
    238.029,
    "actinide",
    10,
    6,
    "solid",
    "f",
    "[Rn] 5f³ 6d¹ 7s²",
    [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "Primary fuel for commercial nuclear power stations and historic nuclear defense weapons."
  ],
  [
    93,
    "Np",
    "Neptunium",
    237,
    "actinide",
    10,
    7,
    "synthetic",
    "f",
    "[Rn] 5f⁴ 6d¹ 7s²",
    [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "First transuranic element synthesized; named after the planet Neptune."
  ],
  [
    94,
    "Pu",
    "Plutonium",
    244,
    "actinide",
    10,
    8,
    "synthetic",
    "f",
    "[Rn] 5f⁶ 7s²",
    [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "Fissile transuranic metal used in nuclear power reactors and deep space radioisotope generators (RTGs)."
  ],
  [
    95,
    "Am",
    "Americium",
    243,
    "actinide",
    10,
    9,
    "synthetic",
    "f",
    "[Rn] 5f⁷ 7s²",
    [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "Synthetic actinide used in millions of household ionizing smoke detectors worldwide."
  ],
  [
    96,
    "Cm",
    "Curium",
    247,
    "actinide",
    10,
    10,
    "synthetic",
    "f",
    "[Rn] 5f⁷ 6d¹ 7s²",
    [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "Named in honor of Marie and Pierre Curie; used as an alpha source for space rover spectrometers."
  ],
  [
    97,
    "Bk",
    "Berkelium",
    247,
    "actinide",
    10,
    11,
    "synthetic",
    "f",
    "[Rn] 5f⁹ 7s²",
    [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "Synthesized in Berkeley, California; used primarily as a target material for creating heavier elements."
  ],
  [
    98,
    "Cf",
    "Californium",
    251,
    "actinide",
    10,
    12,
    "synthetic",
    "f",
    "[Rn] 5f¹⁰ 7s²",
    [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "Powerful neutron emitter used in nuclear moisture gauges and oil well logging probes."
  ],
  [
    99,
    "Es",
    "Einsteinium",
    252,
    "actinide",
    10,
    13,
    "synthetic",
    "f",
    "[Rn] 5f¹¹ 7s²",
    [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "Discovered in the debris of the Ivy Mike thermonuclear test explosion in 1952."
  ],
  [
    100,
    "Fm",
    "Fermium",
    257,
    "actinide",
    10,
    14,
    "synthetic",
    "f",
    "[Rn] 5f¹² 7s²",
    [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "Heaviest element that can be produced in macroscopic quantities by neutron bombardment."
  ],
  [
    101,
    "Md",
    "Mendelevium",
    258,
    "actinide",
    10,
    15,
    "synthetic",
    "f",
    "[Rn] 5f¹³ 7s²",
    [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "Named in honor of Dmitri Mendeleev, father of the modern periodic table of elements."
  ],
  [
    102,
    "No",
    "Nobelium",
    259,
    "actinide",
    10,
    16,
    "synthetic",
    "f",
    "[Rn] 5f¹⁴ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "Named after Alfred Nobel; synthesized by bombarding curium with carbon ions."
  ],
  [
    103,
    "Lr",
    "Lawrencium",
    266,
    "actinide",
    10,
    17,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 7s² 7p¹",
    [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "Final member of the actinide series; named after cyclotron inventor Ernest Lawrence."
  ],
  [
    104,
    "Rf",
    "Rutherfordium",
    267,
    "transition",
    7,
    4,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d² 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "Superheavy synthetic element; named in honor of nuclear physicist Ernest Rutherford."
  ],
  [
    105,
    "Db",
    "Dubnium",
    268,
    "transition",
    7,
    5,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d³ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "Named after Dubna, Russia, home to the Joint Institute for Nuclear Research."
  ],
  [
    106,
    "Sg",
    "Seaborgium",
    269,
    "transition",
    7,
    6,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁴ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "Named after Glenn Seaborg, the first living person to have an element named for him."
  ],
  [
    107,
    "Bh",
    "Bohrium",
    270,
    "transition",
    7,
    7,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁵ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "Named after Danish quantum pioneer Niels Bohr; created by bombarding bismuth with chromium."
  ],
  [
    108,
    "Hs",
    "Hassium",
    269,
    "transition",
    7,
    8,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁶ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "Named after Hesse, the German state where GSI Helmholtz Centre is located."
  ],
  [
    109,
    "Mt",
    "Meitnerium",
    278,
    "unknown",
    7,
    9,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁷ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "Named after Austrian physicist Lise Meitner, co-discoverer of nuclear fission."
  ],
  [
    110,
    "Ds",
    "Darmstadtium",
    281,
    "unknown",
    7,
    10,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁸ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      16,
      2
    ],
    "Synthesized in Darmstadt, Germany; decays via alpha emission within milliseconds."
  ],
  [
    111,
    "Rg",
    "Roentgenium",
    282,
    "unknown",
    7,
    11,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d⁹ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      17,
      2
    ],
    "Named after Wilhelm Röntgen, discoverer of X-rays."
  ],
  [
    112,
    "Cn",
    "Copernicium",
    285,
    "transition",
    7,
    12,
    "synthetic",
    "d",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "Named in honor of astronomer Nicolaus Copernicus; extremely volatile metallic gas."
  ],
  [
    113,
    "Nh",
    "Nihonium",
    286,
    "unknown",
    7,
    13,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "First element discovered in Asia, named after Nihon (Japan) by RIKEN scientists."
  ],
  [
    114,
    "Fl",
    "Flerovium",
    289,
    "post",
    7,
    14,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "Named after Flerov Laboratory of Nuclear Reactions; shows relativistic gas-like behavior."
  ],
  [
    115,
    "Mc",
    "Moscovium",
    290,
    "unknown",
    7,
    15,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "Named after the Moscow region where it was synthesized at the Joint Institute in Dubna."
  ],
  [
    116,
    "Lv",
    "Livermorium",
    293,
    "unknown",
    7,
    16,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "Named in honor of Lawrence Livermore National Laboratory in California."
  ],
  [
    117,
    "Ts",
    "Tennessine",
    294,
    "unknown",
    7,
    17,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "Superheavy synthetic halogen named after the state of Tennessee (Oak Ridge & Vanderbilt)."
  ],
  [
    118,
    "Og",
    "Oganesson",
    294,
    "noble",
    7,
    18,
    "synthetic",
    "p",
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "Heaviest known chemical element, atomic number 118; named after physicist Yuri Oganessian."
  ]
];

const CATEGORY_LABEL = {
  alkali: "Alkali Metal",
  alkaline: "Alkaline Earth Metal",
  transition: "Transition Metal",
  post: "Post-Transition Metal",
  metalloid: "Metalloid",
  nonmetal: "Reactive Nonmetal",
  halogen: "Halogen",
  noble: "Noble Gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
  unknown: "Unknown Properties"
};

const CATEGORY_VAR = {
  alkali: "--cat-alkali",
  alkaline: "--cat-alkaline",
  transition: "--cat-transition",
  post: "--cat-post",
  metalloid: "--cat-metalloid",
  nonmetal: "--cat-nonmetal",
  halogen: "--cat-halogen",
  noble: "--cat-noble",
  lanthanide: "--cat-lanthanide",
  actinide: "--cat-actinide",
  unknown: "--cat-unknown"
};

const PHASE_LABEL = {
  solid: "Solid",
  liquid: "Liquid",
  gas: "Gas",
  synthetic: "Synthetic"
};

/* =========================================================================
   2. SYNTHESIZED SOUND FX (WEB AUDIO API - ZERO ASSET DEPENDENCY)
   ========================================================================= */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('atomic_sound') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('atomic_sound', this.enabled);
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playWhoosh() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(680, this.ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {}
  }

  playModalOpen() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.035);
        gain.gain.setValueAtTime(0.05, now + idx * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.035 + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.035);
        osc.stop(now + idx * 0.035 + 0.22);
      });
    } catch (e) {}
  }
}

const sfx = new SoundEngine();

/* =========================================================================
   3. THREE.JS SCENE SETUP & RESPONSIVE CAMERA
   ========================================================================= */
let camera, scene, renderer, controls;
const objects = [];               // CSS3DObject instances
const targets = { table: [], sphere: [], helix: [], grid: [] };
let activeFilterCategory = null;
let currentElementIndex = 0;

function getOptimalCameraDistance() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;

  if (width < 480) {
    return 5400; // Small mobile portrait: fits all 18 periodic table columns
  } else if (width < 768) {
    return 4400; // Large phones / small tablets
  } else if (width < 1024) {
    return 3500; // Tablet / iPad
  } else if (aspect < 1.35) {
    return 3200; // Narrow desktop
  }
  return 2800; // Standard 16:9 widescreen
}

init();
animate();

function init() {
  const stage = document.getElementById('stage');

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = getOptimalCameraDistance();

  scene = new THREE.Scene();

  // ---- Build DOM Element Cards -------------------------------------------
  ELEMENTS.forEach((data, index) => {
    const [num, sym, name, mass, cat, row, col] = data;

    const el = document.createElement('div');
    el.className = 'element';
    el.id = `el-${num}`;
    el.style.setProperty('--cat-color', `var(${CATEGORY_VAR[cat]})`);
    el.setAttribute('data-index', index);
    el.setAttribute('data-num', num);
    el.setAttribute('data-sym', sym.toLowerCase());
    el.setAttribute('data-name', name.toLowerCase());
    el.setAttribute('data-cat', cat);

    el.innerHTML = `
      <div class="dot"></div>
      <div class="num">${num}</div>
      <div class="sym">${sym}</div>
      <div class="name">${name}</div>
      <div class="mass">${mass}</div>
    `;

    // Smart touch vs drag detection (handles finger taps reliably on mobile)
    let downX = 0, downY = 0;
    el.addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; });
    el.addEventListener('pointerup', e => {
      const dist = Math.hypot(e.clientX - downX, e.clientY - downY);
      const maxThreshold = (e.pointerType === 'touch') ? 10 : 5;
      if (dist < maxThreshold) {
        sfx.playModalOpen();
        openDetailByIndex(index);
      }
    });

    const object = new THREE.CSS3DObject(el);
    object.position.x = (col * 140) - 1330;
    object.position.y = - (row + (row >= 9 ? 0.6 : 0)) * 180 + 990;
    object.position.z = 0;
    scene.add(object);
    objects.push(object);
  });

  computeAllTargets();

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  stage.appendChild(renderer.domElement);

  // Orbit controls with smooth damping & full mobile touch support
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.6;
  controls.minDistance = 400;
  controls.maxDistance = 8000;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };

  window.addEventListener('resize', onWindowResize);

  // Setup UI components
  setupModes();
  setupControlsBar();
  setupSearchAndFilters();
  setupLegend();
  setupModal();
  setupKeyboardShortcuts();
}

/* =========================================================================
   4. LAYOUT TARGET COMPUTATIONS
   ========================================================================= */
function computeAllTargets() {
  // 1. TABLE: Standard 2D periodic table layout
  ELEMENTS.forEach(data => {
    const [, , , , , row, col] = data;
    const o = new THREE.Object3D();
    o.position.x = (col * 140) - 1330;
    o.position.y = - (row + (row >= 9 ? 0.6 : 0)) * 180 + 990;
    o.position.z = 0;
    targets.table.push(o);
  });

  // 2. SPHERE: Fibonacci spherical distribution
  const vector = new THREE.Vector3();
  ELEMENTS.forEach((data, i) => {
    const phi = Math.acos(-1 + (2 * i) / ELEMENTS.length);
    const theta = Math.sqrt(ELEMENTS.length * Math.PI) * phi;
    const o = new THREE.Object3D();
    o.position.setFromSphericalCoords(900, phi, theta);
    vector.copy(o.position).multiplyScalar(2);
    o.lookAt(vector);
    targets.sphere.push(o);
  });

  // 3. HELIX: Cylindrical double-helix spiral
  ELEMENTS.forEach((data, i) => {
    const theta = i * 0.35 + Math.PI;
    const y = - (i * 8) + 450;
    const o = new THREE.Object3D();
    o.position.setFromCylindricalCoords(950, theta, y);
    const vec = new THREE.Vector3(o.position.x * 2, o.position.y, o.position.z * 2);
    o.lookAt(vec);
    targets.helix.push(o);
  });

  // 4. GRID: 5x5x5 volumetric cube matrix
  ELEMENTS.forEach((data, i) => {
    const o = new THREE.Object3D();
    o.position.x = ((i % 5) * 420) - 840;
    o.position.y = (- Math.floor(i / 5) % 5) * 420 + 840;
    o.position.z = (Math.floor(i / 25)) * 420 - 840;
    targets.grid.push(o);
  });
}

/* =========================================================================
   5. ULTRA-FAST & SMOOTH VIEW TRANSITIONS (TWEEN.JS OPTIMIZED)
   ========================================================================= */
function transform(targetArray, baseDuration = 800) {
  TWEEN.removeAll();
  sfx.playWhoosh();

  // Temporarily disable pointer events during motion for maximum FPS
  const stage = document.getElementById('stage');
  if (stage) stage.classList.add('is-transforming');

  objects.forEach((object, i) => {
    const target = targetArray[i];
    // Snappy, organic duration between 650ms and 900ms
    const itemDuration = Math.random() * 250 + 650;

    new TWEEN.Tween(object.position)
      .to({ x: target.position.x, y: target.position.y, z: target.position.z }, itemDuration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, itemDuration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();
  });

  setTimeout(() => {
    if (stage) stage.classList.remove('is-transforming');
  }, 920);
}

function switchView(modeName) {
  const btn = document.querySelector(`.mode-btn[data-mode="${modeName}"]`);
  if (!btn) return;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  transform(targets[modeName]);
}

function setupModes() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      switchView(btn.dataset.mode);
    });
  });
}

/* =========================================================================
   6. CONTROLS BAR (FILTER TOGGLE, SOUND, SHORTCUTS)
   ========================================================================= */
function setupControlsBar() {
  // Filter toggle (especially for mobile/tablet drawer)
  const legendToggle = document.getElementById('btn-legend-toggle');
  const legend = document.getElementById('legend');
  const legendClose = document.getElementById('legend-close');

  if (legendToggle && legend) {
    legendToggle.addEventListener('click', () => {
      sfx.playClick();
      legend.classList.toggle('open');
      legendToggle.classList.toggle('active', legend.classList.contains('open'));
    });
  }

  if (legendClose && legend) {
    legendClose.addEventListener('click', () => {
      sfx.playClick();
      legend.classList.remove('open');
      if (legendToggle) legendToggle.classList.remove('active');
    });
  }

  // Sound FX toggle
  const soundBtn = document.getElementById('btn-sound');
  const soundIcon = document.getElementById('sound-icon');
  if (!sfx.enabled) {
    soundBtn.classList.remove('active');
    soundIcon.textContent = '🔇';
  }
  soundBtn.addEventListener('click', () => {
    const enabled = sfx.toggle();
    soundBtn.classList.toggle('active', enabled);
    soundIcon.textContent = enabled ? '🔊' : '🔇';
    if (enabled) sfx.playClick();
  });

  // Shortcuts modal toggle
  const shortcutsBtn = document.getElementById('btn-shortcuts');
  const shortcutsOverlay = document.getElementById('shortcuts-overlay');
  const shortcutsClose = document.getElementById('shortcuts-close-btn');

  shortcutsBtn.addEventListener('click', () => {
    sfx.playClick();
    shortcutsOverlay.classList.add('open');
  });
  shortcutsClose.addEventListener('click', () => {
    shortcutsOverlay.classList.remove('open');
  });
  shortcutsOverlay.addEventListener('click', e => {
    if (e.target === shortcutsOverlay) shortcutsOverlay.classList.remove('open');
  });
}

function resetCamera() {
  const targetZ = getOptimalCameraDistance();
  new TWEEN.Tween(camera.position)
    .to({ x: 0, y: 0, z: targetZ }, 800)
    .easing(TWEEN.Easing.Cubic.Out)
    .start();

  new TWEEN.Tween(controls.target)
    .to({ x: 0, y: 0, z: 0 }, 800)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => controls.update())
    .start();
}

/* =========================================================================
   7. REAL-TIME SEARCH & CATEGORY FILTER
   ========================================================================= */
function setupSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchClear.style.display = query ? 'block' : 'none';
    filterElements();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    filterElements();
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const visibleIndices = getMatchingIndices();
      if (visibleIndices.length === 1) {
        sfx.playModalOpen();
        openDetailByIndex(visibleIndices[0]);
      }
    }
  });
}

function getMatchingIndices() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();
  const indices = [];

  ELEMENTS.forEach((data, index) => {
    const [num, sym, name, , cat] = data;
    const matchesSearch = !query ||
      sym.toLowerCase().includes(query) ||
      name.toLowerCase().includes(query) ||
      num.toString() === query;

    const matchesCat = !activeFilterCategory || cat === activeFilterCategory;

    if (matchesSearch && matchesCat) {
      indices.push(index);
    }
  });
  return indices;
}

function filterElements() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();
  const searchCount = document.getElementById('search-count');
  let matchCount = 0;

  objects.forEach((object, index) => {
    const data = ELEMENTS[index];
    const [num, sym, name, , cat] = data;
    const el = object.element;

    const matchesSearch = !query ||
      sym.toLowerCase().includes(query) ||
      name.toLowerCase().includes(query) ||
      num.toString() === query;

    const matchesCat = !activeFilterCategory || cat === activeFilterCategory;
    const isVisible = matchesSearch && matchesCat;

    if (isVisible) {
      matchCount++;
      el.classList.remove('dimmed');
      if (query || activeFilterCategory) {
        el.classList.add('highlighted');
      } else {
        el.classList.remove('highlighted');
      }
    } else {
      el.classList.remove('highlighted');
      el.classList.add('dimmed');
    }
  });

  searchCount.textContent = `${matchCount} / ${ELEMENTS.length}`;
}

/* =========================================================================
   8. INTERACTIVE LEGEND (CATEGORY FILTER)
   ========================================================================= */
function setupLegend() {
  const legendItems = document.getElementById('legend-items');
  const legendReset = document.getElementById('legend-reset');
  const rootStyles = getComputedStyle(document.documentElement);

  Object.keys(CATEGORY_LABEL).forEach(key => {
    const color = rootStyles.getPropertyValue(CATEGORY_VAR[key]).trim();
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.cat = key;
    item.innerHTML = `<span class="swatch" style="background:${color};color:${color}"></span>${CATEGORY_LABEL[key]}`;

    item.addEventListener('click', () => {
      sfx.playClick();
      if (activeFilterCategory === key) {
        activeFilterCategory = null;
        item.classList.remove('active');
      } else {
        document.querySelectorAll('#legend .item').forEach(i => i.classList.remove('active'));
        activeFilterCategory = key;
        item.classList.add('active');
      }
      filterElements();
    });

    legendItems.appendChild(item);
  });

  legendReset.addEventListener('click', () => {
    sfx.playClick();
    activeFilterCategory = null;
    document.querySelectorAll('#legend .item').forEach(i => i.classList.remove('active'));
    document.getElementById('search-input').value = '';
    document.getElementById('search-clear').style.display = 'none';
    filterElements();
  });
}

/* =========================================================================
   9. BOHR ATOM MODEL SIMULATOR (CANVAS 2D)
   ========================================================================= */
let bohrAnimId = null;
let bohrAngle = 0;

function drawBohrModel(shells, color) {
  const canvas = document.getElementById('bohr-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const centerX = w / 2;
  const centerY = h / 2;

  const maxRadius = Math.min(centerX, centerY) - 18;
  const numShells = shells.length;
  const shellStep = maxRadius / (numShells + 1.2);

  function renderFrame() {
    ctx.clearRect(0, 0, w, h);

    // Glowing nucleus
    const nucleusGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 14);
    nucleusGrad.addColorStop(0, '#ffffff');
    nucleusGrad.addColorStop(0.5, color);
    nucleusGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = nucleusGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
    ctx.fill();

    // Solid core
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Concentric electron shells
    shells.forEach((electronCount, shellIdx) => {
      const radius = (shellIdx + 1) * shellStep + 10;

      // Orbit track line
      ctx.strokeStyle = 'rgba(140, 255, 225, 0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating electrons
      const speed = (shellIdx % 2 === 0 ? 1 : -1) * (0.014 / (shellIdx * 0.4 + 1));
      const currentOrbitAngle = bohrAngle * speed;

      for (let e = 0; e < electronCount; e++) {
        const angle = currentOrbitAngle + (e * (Math.PI * 2 / electronCount));
        const ex = centerX + Math.cos(angle) * radius;
        const ey = centerY + Math.sin(angle) * radius;

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });

    bohrAngle += 1;
    bohrAnimId = requestAnimationFrame(renderFrame);
  }

  if (bohrAnimId) cancelAnimationFrame(bohrAnimId);
  bohrAngle = 0;
  renderFrame();
}

/* =========================================================================
   10. ENHANCED DETAIL MODAL
   ========================================================================= */
function setupModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('m-prev');
  const nextBtn = document.getElementById('m-next');

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeDetail();
  });
  closeBtn.addEventListener('click', closeDetail);

  prevBtn.addEventListener('click', () => {
    sfx.playClick();
    currentElementIndex = (currentElementIndex - 1 + ELEMENTS.length) % ELEMENTS.length;
    openDetailByIndex(currentElementIndex);
  });

  nextBtn.addEventListener('click', () => {
    sfx.playClick();
    currentElementIndex = (currentElementIndex + 1) % ELEMENTS.length;
    openDetailByIndex(currentElementIndex);
  });
}

function openDetailByIndex(index) {
  currentElementIndex = index;
  const data = ELEMENTS[index];
  const [num, sym, name, mass, cat, row, col, phase, block, config, shells, summary] = data;

  const rootStyles = getComputedStyle(document.documentElement);
  const color = rootStyles.getPropertyValue(CATEGORY_VAR[cat]).trim();

  const modal = document.getElementById('modal');
  modal.style.setProperty('--cat-color', color);

  document.getElementById('m-sym').textContent = sym;
  document.getElementById('m-name').textContent = name;
  document.getElementById('m-num').textContent = `Element #${num}`;
  document.getElementById('m-mass').textContent = mass;
  document.getElementById('m-cat').textContent = CATEGORY_LABEL[cat];
  document.getElementById('m-row').textContent = row <= 7 ? row : (row === 9 ? '6 (f-block)' : '7 (f-block)');
  document.getElementById('m-col').textContent = col;
  document.getElementById('m-block').textContent = `${block.toUpperCase()}-block`;
  document.getElementById('m-config').textContent = config;
  document.getElementById('m-shells').textContent = shells.join(', ');
  document.getElementById('m-summary').textContent = summary;
  document.getElementById('m-counter').textContent = `${num} of ${ELEMENTS.length}`;

  // Phase badge
  const phaseText = document.getElementById('m-phase-text');
  const phaseDot = document.querySelector('.phase-dot');
  phaseText.textContent = PHASE_LABEL[phase] || phase;
  const phaseColorVar = rootStyles.getPropertyValue(`--phase-${phase}`).trim() || color;
  phaseDot.style.background = phaseColorVar;
  phaseDot.style.boxShadow = `0 0 6px ${phaseColorVar}`;

  // Shell breakdown pills
  const shellContainer = document.getElementById('shell-breakdown');
  const shellLetters = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
  shellContainer.innerHTML = shells.map((count, i) => `
    <span class="shell-pill"><b>${shellLetters[i]}:</b> ${count} e⁻</span>
  `).join('');

  // Start animated Bohr atom simulation
  drawBohrModel(shells, color);

  document.getElementById('modal-overlay').classList.add('open');
}

function closeDetail() {
  document.getElementById('modal-overlay').classList.remove('open');
  if (bohrAnimId) {
    cancelAnimationFrame(bohrAnimId);
    bohrAnimId = null;
  }
}

/* =========================================================================
   11. KEYBOARD SHORTCUTS
   ========================================================================= */
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', e => {
    const searchInput = document.getElementById('search-input');
    const isSearching = document.activeElement === searchInput;

    if (e.key === 'Escape') {
      closeDetail();
      document.getElementById('shortcuts-overlay').classList.remove('open');
      const legend = document.getElementById('legend');
      if (legend) legend.classList.remove('open');
      const legendToggle = document.getElementById('btn-legend-toggle');
      if (legendToggle) legendToggle.classList.remove('active');
      if (searchInput.value) {
        searchInput.value = '';
        document.getElementById('search-clear').style.display = 'none';
        filterElements();
      }
      searchInput.blur();
      return;
    }

    if (isSearching) return;

    if (e.key === '1') switchView('table');
    else if (e.key === '2') switchView('sphere');
    else if (e.key === '3') switchView('helix');
    else if (e.key === '4') switchView('grid');
    else if (e.key === 'r' || e.key === 'R') {
      resetCamera();
    }
    else if (e.key === 'm' || e.key === 'M') {
      document.getElementById('btn-sound').click();
    }
    else if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
      e.preventDefault();
      searchInput.focus();
    }
    else if (e.key === 'ArrowLeft') {
      if (document.getElementById('modal-overlay').classList.contains('open')) {
        document.getElementById('m-prev').click();
      }
    }
    else if (e.key === 'ArrowRight') {
      if (document.getElementById('modal-overlay').classList.contains('open')) {
        document.getElementById('m-next').click();
      }
    }
  });
}

/* =========================================================================
   12. RENDER LOOP
   ========================================================================= */
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
