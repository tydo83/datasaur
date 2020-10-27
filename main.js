/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    'species': species,
    'period': period,
    'carnivore': carnivore,
    'extinct': extinct,
  };
}

const makeSingular = function(makeDino) {
  return {
    'species': makeDino.species.endsWith('us') ? makeDino.species.slice(0, -2) : makeDino.species,
    'period': makeDino.period,
    'carnivore': makeDino.carnivore,
    'extinct': makeDino.extinct,
  };
}

const truncateSpecies = function(makeDino) {
  return {
    'species': makeDino.species.length <= 10 ? makeDino.species : makeDino.species.slice(0, 7) + '...',
    'period': makeDino.period,
    'carnivore': makeDino.carnivore,
    'extinct': makeDino.extinct,
  };
}

const makeExtinct = function(makeDino) {
  return {
    'species': makeDino.species,
    'period': makeDino.period,
    'carnivore': makeDino.carnivore,
    'extinct': true,
  };
}

const isCarnivore = function(makeDino) {
  return makeDino.carnivore === true;
}

const isHerbivore = function(makeDino) {
  return makeDino.carnivore !== true;
}

const isExtinct = function(makeDino) {
  return makeDino.extinct === true;
}

const isNotExtinct = function(makeDino) {
  return makeDino.extinct !== true;
}

const isTriassic = function(makeDino) {
  return makeDino.period === 'Triassic'; 
}

const isJurassic = function(makeDino) {
  return makeDino.period === 'Jurassic';
}

const isCretaceous = function(makeDino) {
  return makeDino.period === 'Cretaceous';
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/
// Map
const singularizeDinos = function(makeDino) {
  const singularDinos = [];
  for(const dino of makeDino) {
    singularDinos.push(makeSingular(dino))
  }
  return singularDinos;
}

const truncateDinos = function(makeDino) {
  const truncateDinos = [];
  for(const dino of makeDino) {
    truncateDinos.push(truncateSpecies(dino))
  }
  return truncateDinos;
}

const makeAllExtinct = function(makeDino) {
  const allExtinct = [];
  for(const dino of makeDino) {
    allExtinct.push(makeExtinct(dino))
  }
  return allExtinct;
}

// Filter
const carnivoresOnly= function(makeDino) {
  const carnivore = [];
  for(const dino of makeDino) {
    if(isCarnivore(dino)) {
      carnivore.push(dino)
    }
  }
  return carnivore;
}

const herbivoresOnly = function(makeDino) {
  const herbivore = [];
  for(const dino of makeDino) {
    if(isHerbivore(dino)) {
      herbivore.push(dino);
    }
  }
  return herbivore;
}

const extinctOnly = function(makeDino) {
  const extinctOnly = [];
  for(const dino of makeDino) {
    if(isExtinct(dino)) {
      extinctOnly.push(dino)
    }
  }
  return extinctOnly;
}

const notExtinct = function(makeDino) {
  const notExtinct = [];
  for(const dino of makeDino) {
    if(isNotExtinct(dino)) {
      notExtinct.push(dino)
    }
  }
  return notExtinct;
}

const triassicOnly = function(makeDino) {
  const triassicOnly = [];
  for(const dino of makeDino) {
    if(isTriassic(dino)) {
      triassicOnly.push(dino)
    }
  }
  return triassicOnly;
}

const notTriassic = function(makeDino) {
  const notTriassic = [];
  for(const dino of makeDino) {
    if(!isTriassic(dino)) {
      notTriassic.push(dino)
    }
  }
  return notTriassic;
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  isHerbivore,
}
