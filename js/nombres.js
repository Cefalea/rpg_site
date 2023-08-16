const nombresFantasia = [
    "Aricel",
    "Elowyn",
    "Thandor",
    "Elessar",
    "Galadria",
    "Naelon",
    "Aerendir",
    "Caladriel",
    "Ithilwen",
    "Thalion",
    "Lúthien",
    "Galdorin",
    "Arandor",
    "Elendir",
    "Finriel",
    "Aldoril",
    "Tharandil",
    "Celestia",
    "Caelumir",
    "Eärendil"
  ];
  
const apellidosFantasia = [
    "Thundertalon",
    "Stoneforge",
    "Windrider",
    "Ironshield",
    "Frostbane",
    "Fireheart",
    "Silverbrook",
    "Starshadow",
    "Stormdancer",
    "Moonwhisper",
    "Swiftblade",
    "Oakenshield",
    "Goldenthorn",
    "Shadowcaster",
    "Nightfall",
    "Brightwood",
    "Dawnstrider",
    "Swiftwater",
    "Shadowthorn",
    "Stormwatcher"
  ];

  function generadorNombre() {
    return (itemAleatorio(nombresFantasia) + ' ' + itemAleatorio(apellidosFantasia));
  }

  function itemAleatorio(arreglo) {
    const indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    return arreglo[indiceAleatorio];
  }

  console.log(generadorNombre());