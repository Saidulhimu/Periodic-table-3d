/* =========================================================================
   ELEMENT DATA
   Each entry: [ atomicNumber, symbol, name, atomicMass, category, row, col ]
   row/col follow the conventional periodic-table grid (period, group), with
   the lanthanide (row 9) and actinide (row 10) series broken out below the
   main body, exactly as printed periodic tables do.
   ========================================================================= */
const ELEMENTS = [
    [1, "H", "Hydrogen", 1.008, "nonmetal", 1, 1],
    [2, "He", "Helium", 4.003, "noble", 1, 18],
    [3, "Li", "Lithium", 6.94, "alkali", 2, 1],
    [4, "Be", "Beryllium", 9.012, "alkaline", 2, 2],
    [5, "B", "Boron", 10.81, "metalloid", 2, 13],
    [6, "C", "Carbon", 12.011, "nonmetal", 2, 14],
    [7, "N", "Nitrogen", 14.007, "nonmetal", 2, 15],
    [8, "O", "Oxygen", 15.999, "nonmetal", 2, 16],
    [9, "F", "Fluorine", 18.998, "halogen", 2, 17],
    [10, "Ne", "Neon", 20.180, "noble", 2, 18],
    [11, "Na", "Sodium", 22.990, "alkali", 3, 1],
    [12, "Mg", "Magnesium", 24.305, "alkaline", 3, 2],
    [13, "Al", "Aluminium", 26.982, "post", 3, 13],
    [14, "Si", "Silicon", 28.085, "metalloid", 3, 14],
    [15, "P", "Phosphorus", 30.974, "nonmetal", 3, 15],
    [16, "S", "Sulfur", 32.06, "nonmetal", 3, 16],
    [17, "Cl", "Chlorine", 35.45, "halogen", 3, 17],
    [18, "Ar", "Argon", 39.948, "noble", 3, 18],
    [19, "K", "Potassium", 39.098, "alkali", 4, 1],
    [20, "Ca", "Calcium", 40.078, "alkaline", 4, 2],
    [21, "Sc", "Scandium", 44.956, "transition", 4, 3],
    [22, "Ti", "Titanium", 47.867, "transition", 4, 4],
    [23, "V", "Vanadium", 50.942, "transition", 4, 5],
    [24, "Cr", "Chromium", 51.996, "transition", 4, 6],
    [25, "Mn", "Manganese", 54.938, "transition", 4, 7],
    [26, "Fe", "Iron", 55.845, "transition", 4, 8],
    [27, "Co", "Cobalt", 58.933, "transition", 4, 9],
    [28, "Ni", "Nickel", 58.693, "transition", 4, 10],
    [29, "Cu", "Copper", 63.546, "transition", 4, 11],
    [30, "Zn", "Zinc", 65.38, "transition", 4, 12],
    [31, "Ga", "Gallium", 69.723, "post", 4, 13],
    [32, "Ge", "Germanium", 72.630, "metalloid", 4, 14],
    [33, "As", "Arsenic", 74.922, "metalloid", 4, 15],
    [34, "Se", "Selenium", 78.971, "nonmetal", 4, 16],
    [35, "Br", "Bromine", 79.904, "halogen", 4, 17],
    [36, "Kr", "Krypton", 83.798, "noble", 4, 18],
    [37, "Rb", "Rubidium", 85.468, "alkali", 5, 1],
    [38, "Sr", "Strontium", 87.62, "alkaline", 5, 2],
    [39, "Y", "Yttrium", 88.906, "transition", 5, 3],
    [40, "Zr", "Zirconium", 91.224, "transition", 5, 4],
    [41, "Nb", "Niobium", 92.906, "transition", 5, 5],
    [42, "Mo", "Molybdenum", 95.95, "transition", 5, 6],
    [43, "Tc", "Technetium", 98, "transition", 5, 7],
    [44, "Ru", "Ruthenium", 101.07, "transition", 5, 8],
    [45, "Rh", "Rhodium", 102.906, "transition", 5, 9],
    [46, "Pd", "Palladium", 106.42, "transition", 5, 10],
    [47, "Ag", "Silver", 107.868, "transition", 5, 11],
    [48, "Cd", "Cadmium", 112.414, "transition", 5, 12],
    [49, "In", "Indium", 114.818, "post", 5, 13],
    [50, "Sn", "Tin", 118.710, "post", 5, 14],
    [51, "Sb", "Antimony", 121.760, "metalloid", 5, 15],
    [52, "Te", "Tellurium", 127.60, "metalloid", 5, 16],
    [53, "I", "Iodine", 126.904, "halogen", 5, 17],
    [54, "Xe", "Xenon", 131.293, "noble", 5, 18],
    [55, "Cs", "Caesium", 132.905, "alkali", 6, 1],
    [56, "Ba", "Barium", 137.327, "alkaline", 6, 2],
    [57, "La", "Lanthanum", 138.905, "lanthanide", 9, 3],
    [58, "Ce", "Cerium", 140.116, "lanthanide", 9, 4],
    [59, "Pr", "Praseodymium", 140.908, "lanthanide", 9, 5],
    [60, "Nd", "Neodymium", 144.242, "lanthanide", 9, 6],
    [61, "Pm", "Promethium", 145, "lanthanide", 9, 7],
    [62, "Sm", "Samarium", 150.36, "lanthanide", 9, 8],
    [63, "Eu", "Europium", 151.964, "lanthanide", 9, 9],
    [64, "Gd", "Gadolinium", 157.25, "lanthanide", 9, 10],
    [65, "Tb", "Terbium", 158.925, "lanthanide", 9, 11],
    [66, "Dy", "Dysprosium", 162.500, "lanthanide", 9, 12],
    [67, "Ho", "Holmium", 164.930, "lanthanide", 9, 13],
    [68, "Er", "Erbium", 167.259, "lanthanide", 9, 14],
    [69, "Tm", "Thulium", 168.934, "lanthanide", 9, 15],
    [70, "Yb", "Ytterbium", 173.045, "lanthanide", 9, 16],
    [71, "Lu", "Lutetium", 174.967, "lanthanide", 9, 17],
    [72, "Hf", "Hafnium", 178.49, "transition", 6, 4],
    [73, "Ta", "Tantalum", 180.948, "transition", 6, 5],
    [74, "W", "Tungsten", 183.84, "transition", 6, 6],
    [75, "Re", "Rhenium", 186.207, "transition", 6, 7],
    [76, "Os", "Osmium", 190.23, "transition", 6, 8],
    [77, "Ir", "Iridium", 192.217, "transition", 6, 9],
    [78, "Pt", "Platinum", 195.085, "transition", 6, 10],
    [79, "Au", "Gold", 196.967, "transition", 6, 11],
    [80, "Hg", "Mercury", 200.592, "transition", 6, 12],
    [81, "Tl", "Thallium", 204.38, "post", 6, 13],
    [82, "Pb", "Lead", 207.2, "post", 6, 14],
    [83, "Bi", "Bismuth", 208.980, "post", 6, 15],
    [84, "Po", "Polonium", 209, "metalloid", 6, 16],
    [85, "At", "Astatine", 210, "halogen", 6, 17],
    [86, "Rn", "Radon", 222, "noble", 6, 18],
    [87, "Fr", "Francium", 223, "alkali", 7, 1],
    [88, "Ra", "Radium", 226, "alkaline", 7, 2],
    [89, "Ac", "Actinium", 227, "actinide", 10, 3],
    [90, "Th", "Thorium", 232.038, "actinide", 10, 4],
    [91, "Pa", "Protactinium", 231.036, "actinide", 10, 5],
    [92, "U", "Uranium", 238.029, "actinide", 10, 6],
    [93, "Np", "Neptunium", 237, "actinide", 10, 7],
    [94, "Pu", "Plutonium", 244, "actinide", 10, 8],
    [95, "Am", "Americium", 243, "actinide", 10, 9],
    [96, "Cm", "Curium", 247, "actinide", 10, 10],
    [97, "Bk", "Berkelium", 247, "actinide", 10, 11],
    [98, "Cf", "Californium", 251, "actinide", 10, 12],
    [99, "Es", "Einsteinium", 252, "actinide", 10, 13],
    [100, "Fm", "Fermium", 257, "actinide", 10, 14],
    [101, "Md", "Mendelevium", 258, "actinide", 10, 15],
    [102, "No", "Nobelium", 259, "actinide", 10, 16],
    [103, "Lr", "Lawrencium", 266, "actinide", 10, 17],
    [104, "Rf", "Rutherfordium", 267, "transition", 7, 4],
    [105, "Db", "Dubnium", 268, "transition", 7, 5],
    [106, "Sg", "Seaborgium", 269, "transition", 7, 6],
    [107, "Bh", "Bohrium", 270, "transition", 7, 7],
    [108, "Hs", "Hassium", 269, "transition", 7, 8],
    [109, "Mt", "Meitnerium", 278, "unknown", 7, 9],
    [110, "Ds", "Darmstadtium", 281, "unknown", 7, 10],
    [111, "Rg", "Roentgenium", 282, "unknown", 7, 11],
    [112, "Cn", "Copernicium", 285, "transition", 7, 12],
    [113, "Nh", "Nihonium", 286, "unknown", 7, 13],
    [114, "Fl", "Flerovium", 289, "post", 7, 14],
    [115, "Mc", "Moscovium", 290, "unknown", 7, 15],
    [116, "Lv", "Livermorium", 293, "unknown", 7, 16],
    [117, "Ts", "Tennessine", 294, "unknown", 7, 17],
    [118, "Og", "Oganesson", 294, "noble", 7, 18],
];

const CATEGORY_LABEL = {
    alkali: "Alkali Metal", alkaline: "Alkaline Earth Metal", transition: "Transition Metal",
    post: "Post-Transition Metal", metalloid: "Metalloid", nonmetal: "Reactive Nonmetal",
    halogen: "Halogen", noble: "Noble Gas", lanthanide: "Lanthanide", actinide: "Actinide",
    unknown: "Unknown Properties"
};
const CATEGORY_VAR = {
    alkali: "--cat-alkali", alkaline: "--cat-alkaline", transition: "--cat-transition",
    post: "--cat-post", metalloid: "--cat-metalloid", nonmetal: "--cat-nonmetal",
    halogen: "--cat-halogen", noble: "--cat-noble", lanthanide: "--cat-lanthanide",
    actinide: "--cat-actinide", unknown: "--cat-unknown"
};

/* =========================================================================
   BUILD LEGEND
   ========================================================================= */
(function buildLegend() {
    const legend = document.getElementById('legend');
    const rootStyles = getComputedStyle(document.documentElement);
    Object.keys(CATEGORY_LABEL).forEach(key => {
        const color = rootStyles.getPropertyValue(CATEGORY_VAR[key]).trim();
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `<span class="swatch" style="background:${color};color:${color}"></span>${CATEGORY_LABEL[key]}`;
        legend.appendChild(item);
    });
})();

/* =========================================================================
   THREE.JS SCENE SETUP (CSS3DRenderer)
   ========================================================================= */
let camera, scene, renderer, controls;
const objects = [];               // CSS3DObject instances, one per element
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {
    const stage = document.getElementById('stage');

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // ---- Build one CSS3DObject per element -------------------------------
    ELEMENTS.forEach(data => {
        const [num, sym, name, mass, cat, row, col] = data;

        const el = document.createElement('div');
        el.className = 'element';
        el.style.setProperty('--cat-color', `var(${CATEGORY_VAR[cat]})`);

        el.innerHTML = `
      <div class="dot"></div>
      <div class="num">${num}</div>
      <div class="sym">${sym}</div>
      <div class="name">${name}</div>
      <div class="mass">${mass}</div>
    `;

        // Distinguish a genuine click from a drag-to-rotate gesture: only open
        // the detail modal if the pointer barely moved between down and up.
        let downX = 0, downY = 0;
        el.addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; });
        el.addEventListener('pointerup', e => {
            const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
            if (moved < 4) openDetail(data);
        });

        const object = new THREE.CSS3DObject(el);
        // Initial placement = table layout so the first frame is correct.
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

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.6;
    controls.minDistance = 600;
    controls.maxDistance = 6000;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    window.addEventListener('resize', onWindowResize);

    // ---- View mode buttons -------------------------------------------------
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            transform(targets[btn.dataset.mode], 1600);
        });
    });

    // ---- Modal close handlers ----------------------------------------------
    const overlay = document.getElementById('modal-overlay');
    overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
    document.querySelector('#modal .close').addEventListener('click', closeDetail);
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
}

/* =========================================================================
   LAYOUT TARGET COMPUTATION
   Each layout is expressed as an array of THREE.Object3D "ghost" targets
   (position + rotation only) that objects are tweened toward.
   ========================================================================= */
function computeAllTargets() {

    // ---- 1. TABLE: standard 2D periodic-table grid ------------------------
    ELEMENTS.forEach((data, i) => {
        const [, , , , , row, col] = data;
        const o = new THREE.Object3D();
        o.position.x = (col * 140) - 1330;
        o.position.y = - (row + (row >= 9 ? 0.6 : 0)) * 180 + 990;
        o.position.z = 0;
        targets.table.push(o);
    });

    // ---- 2. SPHERE: even Fibonacci-style distribution on a sphere ---------
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

    // ---- 3. HELIX: dual spiral wound around a vertical cylinder -----------
    ELEMENTS.forEach((data, i) => {
        const theta = i * 0.35 + Math.PI;
        const y = - (i * 8) + 450;
        const o = new THREE.Object3D();
        o.position.setFromCylindricalCoords(950, theta, y);
        const vec = new THREE.Vector3(o.position.x * 2, o.position.y, o.position.z * 2);
        o.lookAt(vec);
        targets.helix.push(o);
    });

    // ---- 4. GRID: 5x5x5 volumetric cube matrix -----------------------------
    ELEMENTS.forEach((data, i) => {
        const o = new THREE.Object3D();
        o.position.x = ((i % 5) * 420) - 840;
        o.position.y = (- Math.floor(i / 5) % 5) * 420 + 840;
        o.position.z = (Math.floor(i / 25)) * 420 - 840;
        targets.grid.push(o);
    });
}

/* =========================================================================
   ANIMATED TRANSITION BETWEEN LAYOUTS (Tween.js)
   ========================================================================= */
function transform(targetArray, duration) {
    TWEEN.removeAll();

    objects.forEach((object, i) => {
        const target = targetArray[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    });
}

/* =========================================================================
   DETAIL MODAL
   ========================================================================= */
function openDetail(data) {
    const [num, sym, name, mass, cat] = data;
    const [, , , , , row, col] = data;
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue(CATEGORY_VAR[cat]).trim();

    const modal = document.getElementById('modal');
    modal.style.setProperty('--cat-color', color);

    document.getElementById('m-sym').textContent = sym;
    document.getElementById('m-name').textContent = name;
    document.getElementById('m-num').textContent = `Element ${num}`;
    document.getElementById('m-mass').textContent = mass;
    document.getElementById('m-cat').textContent = CATEGORY_LABEL[cat];
    document.getElementById('m-cat2').textContent = CATEGORY_LABEL[cat];
    document.getElementById('m-row').textContent = row <= 7 ? row : (row === 9 ? '6 (f-block)' : '7 (f-block)');
    document.getElementById('m-col').textContent = col;

    document.getElementById('modal-overlay').classList.add('open');
}
function closeDetail() {
    document.getElementById('modal-overlay').classList.remove('open');
}

/* =========================================================================
   RENDER LOOP
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