const selectedParts = {};
const cartItems = {};
const editedInformation = {};

const partImages = {
  "Intel Core i9 14900KF": "f7d3a024-e447-4bac-aeff-d7d3db01d7e3.webp",
  "AMD Ryzen 7 7800X3D": "2505503-ryzen-7-7800x3d-og.avif",
  "Intel Ultra 9 285K": "INTEL-CORE-ULTRA-9-285K-BOX-HERO-1-1200x624-1.jpg",
  "AMD Ryzen 9 9950X3D": "images (2).jpg",
  "ASUS ROG STRIX 5090": "ROG.webp",
  "Gigabyte RTX 5090 XTREME WATERFORCE": "GIGA.jpg",
  "ASUS ROG Astral RTX 5080": "ROG50.webp",
  "MSI RTX 5080 SUPRIM OC": "5080.webp",
  "PowerColor Hellhound RX 9070 XT": "POWER.webp",
  "ASUS TUF Gaming RX 9070 XT OC Black Ops 7": "907.jpg",
  "Trident G-SKILL 2x16 6000Mhz": "TR.webp",
  "Kingston ARGB 2X16 5600Mhz": "KIN.jpg",
  "T-FORCE DELTA 2x32 6000Mhz": "DEL.webp",
  "CORSAIR VENGEANCE 2x16 6000Mhz": "COR.webp",
  "Patriot Viper 2x16 6000Mhz": "PAT.jpg",
  "Micron Crucial P510": "CRUC.webp",
  "WD BLACK SN8100": "WD.jpg",
  "SAMSUNG SSD990 EVO": "SAMS.jpg",
  "Superflower": "supper.jpg",
  "Gigabyte": "giga%20ps.jpg",
  "MSI MAG": "msi%20mag.webp",
  "ASUS ROG": "THOR.png",
  "Fractal Design North": "north.webp",
  "Phanteks XT Pro Ultra": "PHAN.webp",
  "Lian Li Lancool": "LIAN.jpg"
};

const partSpecifications = {
  "Intel Core i9 14900KF": "Cores: 24\nThreads: 32\nTurbo Clock: 6 Ghz\nBase Clock: 3.2 GHz\nSocket: LGA1700\nGeneration: 14th Gen Intel Core",
  "AMD Ryzen 7 7800X3D": "Cores: 8\nThreads: 16\nBoost Clock: Up to 5.0 GHz\nSocket: AM5\nCache: 96 MB L3",
  "Intel Ultra 9 285K": "Cores: 24\nThreads: 24\nBoost Clock: Up to 5.7 GHz\nSocket: LGA1851\nGeneration: Intel Core Ultra",
  "AMD Ryzen 9 9950X3D": "Cores: 16\nThreads: 32\nBoost Clock: Up to 5.7 GHz\nSocket: AM5\nCache: 144 MB",

  "ASUS ROG STRIX 5090": "GPU Memory: 32 GB GDDR7\nMemory Interface: 512-bit\nRay Tracing: Supported\nCooling: Triple Fan\nInterface: PCIe 5.0",
  "Gigabyte RTX 5090 XTREME WATERFORCE": "GPU Memory: 32 GB GDDR7\nCooling: Water Cooling\nMemory Interface: 512-bit\nRay Tracing: Supported\nInterface: PCIe 5.0",
  "ASUS ROG Astral RTX 5080": "GPU Memory: 16 GB GDDR7\nMemory Interface: 256-bit\nCooling: Quad Fan\nRay Tracing: Supported\nInterface: PCIe 5.0",
  "MSI RTX 5080 SUPRIM OC": "GPU Memory: 16 GB GDDR7\nMemory Interface: 256-bit\nCooling: Triple Fan\nFactory Overclocked: Yes\nInterface: PCIe 5.0",
  "PowerColor Hellhound RX 9070 XT": "GPU Memory: 16 GB GDDR6\nMemory Interface: 256-bit\nCooling: Triple Fan\nRay Tracing: Supported\nInterface: PCIe 5.0",
  "ASUS TUF Gaming RX 9070 XT OC Black Ops 7": "GPU Memory: 16 GB GDDR6\nMemory Interface: 256-bit\nCooling: Triple Fan\nFactory Overclocked: Yes\nInterface: PCIe 5.0",

  "Trident G-SKILL 2x16 6000Mhz": "Capacity: 32 GB\nMemory Type: DDR5\nSpeed: 6000 MHz\nConfiguration: 2 x 16 GB\nDesigned for: Gaming",
  "Kingston ARGB 2X16 5600Mhz": "Capacity: 32 GB\nMemory Type: DDR5\nSpeed: 5600 MHz\nConfiguration: 2 x 16 GB\nLighting: ARGB",
  "T-FORCE DELTA 2x32 6000Mhz": "Capacity: 64 GB\nMemory Type: DDR5\nSpeed: 6000 MHz\nConfiguration: 2 x 32 GB\nLighting: RGB",
  "CORSAIR VENGEANCE 2x16 6000Mhz": "Capacity: 32 GB\nMemory Type: DDR5\nSpeed: 6000 MHz\nConfiguration: 2 x 16 GB\nDesigned for: Gaming",
  "Patriot Viper 2x16 6000Mhz": "Capacity: 32 GB\nMemory Type: DDR5\nSpeed: 6000 MHz\nConfiguration: 2 x 16 GB\nHeat Spreader: Included",

  "Micron Crucial P510": "Storage Type: NVMe SSD\nInterface: PCIe 5.0\nCapacity: 1 - 4 TB\nRead Speed: 11,000 MB/s\nForm Factor: M.2",
  "WD BLACK SN8100": "Storage Type: NVMe SSD\nInterface: PCIe 5.0\nCapacity: 1 - 3 TB here\nRead Speed: 14,900 MB/s\nDesigned for: High Performance",
  "SAMSUNG SSD990 EVO": "Storage Type: NVMe SSD\nInterface: PCIe 4.0 / PCIe 5.0\nCapacity: 1 - 4 TB: M.2\nDesigned for: Gaming",

  "Superflower": "Wattage: 1200W\nEfficiency: Platinum Pro\nModular Type: Fully Modular",
  "Gigabyte": "Wattage: 1000w\nEfficiency: 80+ Gold\nModular Type: Fully Modular\nCooling: Fan cooled",
  "MSI MAG": "Wattage: 1000w\nEfficiency:80+ Gold\nModular Type: Fully Modular\nProtection: Included",
  "ASUS ROG": "Wattage: 1200w\nEfficiency: Platinum III\nModular Type: Fully Modular\nDesigned for: High-end gaming",

  "Fractal Design North": "Case Type: Mid Tower\nMotherboard Support: ATX / Micro-ATX / Mini-ITX\nFront Panel: Wood style",
  "Phanteks XT Pro Ultra": "Case Type: Mid Tower\nMotherboard Support: ATX / Micro-ATX / Mini-ITX",
  "Lian Li Lancool": "Case Type: Mid Tower\nMotherboard Support: ATX / Micro-ATX / Mini-ITX\nSide Panel: Tempered glass"
};

function selectPart(part) {
  const category = part.dataset.category;
  const partName = part.textContent.trim();

  if (selectedParts[category] === partName) {
    delete selectedParts[category];
    part.classList.remove("selected");
    updatePreview();
  } else {
    document
      .querySelectorAll(`[data-category="${category}"]`)
      .forEach((item) => item.classList.remove("selected"));

    selectedParts[category] = partName;
    part.classList.add("selected");
    updatePreview(category, partName);
  }

  updateSelectedParts();

  if (Object.keys(selectedParts).length > 0) {
    document.getElementById("build-section").scrollIntoView({
      behavior: "smooth"
    });
  }
}

function clearSelections() {
  Object.keys(selectedParts).forEach((category) => delete selectedParts[category]);

  document
    .querySelectorAll("[data-category]")
    .forEach((part) => part.classList.remove("selected"));

  updateSelectedParts();
  updatePreview();
}

function addSelectedPartsToCart() {
  if (Object.keys(selectedParts).length === 0) {
    alert("Please select at least one PC part first.");
    return;
  }

  Object.entries(selectedParts).forEach(([category, name]) => {
    cartItems[category] = name;
  });

  updateCart();

  document.querySelector(".cart").scrollIntoView({
    behavior: "smooth"
  });
}

function clearCart() {
  Object.keys(cartItems).forEach((category) => delete cartItems[category]);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  const items = Object.entries(cartItems);

  if (items.length === 0) {
    cartList.innerHTML = '<li class="empty-message">Your cart is empty.</li>';
    return;
  }

  items.forEach(([category, name]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${category}: ${name}`;
    cartList.appendChild(listItem);
  });
}

function updateSelectedParts() {
  const selectedPartsList = document.getElementById("selected-parts");
  selectedPartsList.innerHTML = "";

  const selections = Object.entries(selectedParts);

  if (selections.length === 0) {
    selectedPartsList.innerHTML =
      '<li class="empty-message">Choose PC components from the list below.</li>';
    return;
  }

  selections.forEach(([category, name]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${category}: ${name}`;
    selectedPartsList.appendChild(listItem);
  });
}

function updatePreview(category, partName) {
  const preview = document.getElementById("part-preview");

  if (!category || !partName) {
    preview.innerHTML = "<p>Select a component to preview its image.</p>";
    return;
  }

  const savedSpecifications =
    editedInformation[partName] || partSpecifications[partName] || "";

  preview.innerHTML = `
    <p>${category}: <strong>${partName}</strong></p>
    ${
      partImages[partName]
        ? `<img src="${partImages[partName]}" alt="${partName}">`
        : `<div class="image-unavailable">Image not available yet</div>`
    }
    <label for="part-information">SPECIFICATIONS</label>
    <textarea id="part-information" placeholder="Write the specifications here..."></textarea>
  `;

  const informationBox = document.getElementById("part-information");
  informationBox.value = savedSpecifications;

  informationBox.addEventListener("input", () => {
    editedInformation[partName] = informationBox.value;
  });
}

updateCart();