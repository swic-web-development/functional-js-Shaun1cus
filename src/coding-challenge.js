// Backpack inventory for Coding Challenge 1
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
    { item: 'rockets', quantity: 1, priceEa: 5.0 },
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
  ];

  /* 
  Think like a developer:
  1. Look at the first item in the backpack: bullets
    a. Look at quantity and the value for the bullets: 10 and 0.5, respectively.
    b. Multiply the quantity of bullets by the value of each bullet: 10 * 0.5 = 5.0
  2. Look at the second item in the backpack: shotgun shells
    a. Look at quantity and the value for the shotgun shells: 4 and 0.5, respectively.
    b. Multiply the quantity of shotgun shells by the value of each shell: 4 * 0.5 = 2.0
  3. Look at the third item in the backpack: rockets
    a. Look at quantity and the value for the rockets: 1 and 5.0, respectively.
    b. Multiply the quantity of rockets by the value of each rocket: 1 * 5.0 = 5.0
  4. Look at the fourth item in the backpack: energy cell units
    a. Look at quantity and the value for the energy cell units: 20 and 0.2, respectively.
    b. Multiply the quantity of energy cell units by the value of each cell: 20 * 0.2 = 4.0
  5. Add the total value of each item in the backpack: 5.0 + 2.0 + 5.0 + 4.0 = 16.0
  6. Print the total value of the backpack: 16.0
  */

  // Calculate the total value of the backpack using the reduce method
    const totalValue = backpackFullOfAmmo.reduce((accumulator, item) => {
        return accumulator + item.quantity * item.priceEa;
    }, 0);

    console.log(totalValue); // Output: 16.0

// Monsters data for Coding Challenge 2
const monsters = [
    // Deals 10-60 damage per bite
    { name: 'Cacodemon', health: 400, damage: 35 },
    
    // Deals 15-75 damage per claw/fireball
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    
    // Deals 20-200 damage per rocket
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    
    // Deals 5-50 damage per bite
    { name: 'Hell Knight', health: 800, damage: 25 },
    
    // Deals 10-100 damage per bite
    { name: 'Imp', health: 200, damage: 20 },
    
    // Deals 5-25 damage per bite
    { name: 'Lost Soul', health: 100, damage: 10 },
    
    // Deals 5-50 damage per bite
    { name: 'Pinky', health: 300, damage: 15 },
    
    // Deals 10-100 damage per bite
    { name: 'Revenant', health: 500, damage: 30 },
    
    // Deals 5-50 damage per bite
    { name: 'Spectre', health: 200, damage: 20 },
    
    // Deals 5-50 damage per bite
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    
    // Deals 5-50 damage per bite
    { name: 'Vile', health: 1000, damage: 40 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombie', health: 100, damage: 5 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombieman', health: 200, damage: 10 },
  ];

// 1. Use the map method to create a new array containing just the names of the monsters.

  /* 
  Think like a developer:
  1. Look at the name of the first monster: Cacodemon, and add it to the new array.
  2. Look at the name of the second monster: Baron of Hell, and add it to the new array.
  3. Continue this process for each monster in the array.
  */

    const monsterNames = monsters.map(monster => monster.name);
    console.log(monsterNames);

// 2. Use the filter method to find all monsters with health greater than 150.

  /*
  Think like a developer:
  1. Look at the health of the first monster: 400, which is obviously greater than 150. Add it to the new array.
  2. Look at the health of the second monster: 1000, which is greater than 150. Add it to the new array.
  3. Continue this process for each monster in the array.
  */

    const highHealthMonsters = monsters.filter(monster => monster.health > 150);
    console.log(highHealthMonsters);
