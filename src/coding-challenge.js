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

// 3. Use the reduce method to calculate the total health of all monsters.

  /*
  Think like a developer:
  1. Look at the health of the first monster: 400, and add it to the accumulator.
  2. Look at the health of the second monster: 1000, and add it to the accumulator.
  3. Continue this process for each monster in the array.
  4. Add the total health of all monsters.
  */

    const totalHealth = monsters.reduce((accumulator, monster) => {
        return accumulator + monster.health;
    }, 0);

    console.log(totalHealth);

// 4. Use the sort method to arrange the monsters from highest damage to lowest.

    /*
    Think like a developer:
    1. Look at the Cacodemon's damage, 35, and the Baron of Hell's damage, 45. Since 35 is less than 45, we need to swap them.  a <==> b
    2. Now, compare the Cacodemon's damage, 35, to the Cyberdemon's damage, 125, Since 35 is less than 125, we need to swap them. a <==> c
       a. Now we look at the Cyberdemon's damage, 125, compared to the Baron of Hell's damage, 45. Since 45 is less than 125, we need to swap them. c <==> b

     At this point, the order of the first three monsters is Cyberdemon (125), Baron of Hell (45), and Cacodemon (35).

    3. Look at the Hell Knight's damage, 25, and the Cacodemon's damage, 35. Since 25 is less than 35, we don't need to swap them.
    4. Look at the Imp's damage, 20, and the Hell Knight's damage, 25. Since 20 is less than 25, we don't need to swap them.
    5. Look at the Lost Soul's damage, 10, and the Imp's damage, 20. Since 10 is less than 20, we don't need to swap them.

     At this point, the order of the first six monsters is Cyberdemon (125), Baron of Hell (45), Cacodemon (35), Hell Knight (25), Imp (20), and Lost Soul (10).

    6. Look at the Pinky's damage, 15, and the Lost Soul's damage, 10. Since 15 is greater than 10, we need to swap them.
       a. Now we need to look at the Pinky's damage, 15, and the Imp's damage, 20. Since 15 is less than 20, we don't need to swap them.
    7. Look at the Revenant's damage, 30, and the Lost Soul's damage, 10. Since 30 is greater than 10, we need to swap them.
       a. Now we need to look at the Revenant's damage, 30, and the Pinky's damage, 15. Since 30 is greater than 15, we need to swap them.
       b. Now we need to look at the Revenant's damage, 30, and the Imp's damage, 20. Since 30 is greater than 20, we need to swap them.
       c. Now we need to look at the Revenant's damage, 30, and the Hell Knight's damage, 25. Since 30 is greater than 25, we need to swap them.
       d. Now we need to look at the Revenant's damage, 30, and the Cacodemon's damage, 35. Since 30 is less than 35, we don't need to swap them.
    8. Look at the Spectre's damage, 20, and the Lost Soul's damage, 10. Since 20 is greater than 10, we need to swap them.
       a. Now we need to look at the Spectre's damage, 20, and the Pinky's damage, 15. Since 20 is greater than 15, we need to swap them.
       b. Now we need to look at the Spectre's damage, 20, and the Imp's damage, 20. Since 20 is equal to 20, we don't need to swap them.

     At this point, the order of the first nine monsters is Cyberdemon (125), Baron of Hell (45), Cacodemon (35), Revenant (30), Hell Knight (25), Imp (20), Spectre (20), Pinky (15), and Lost Soul (10).

    9. Look at the Spider Mastermind's damage, 50, and the Lost Soul's damage, 10. Since 50 is greater than 10, we need to swap them.
       a. Now we need to look at the Spider Mastermind's damage, 50, and the Pinky's damage, 15. Since 50 is greater than 15, we need to swap them.
       b. Now we need to look at the Spider Mastermind's damage, 50, and the Spectre's damage, 20. Since 50 is greater than 20, we need to swap them.
       c. Now we need to look at the Spider Mastermind's damage, 50, and the Imp's damage, 20. Since 50 is greater than 20, we need to swap them.
       d. Now we need to look at the Spider Mastermind's damage, 50, and the Hell Knight's damage, 25. Since 50 is greater than 25, we need to swap them.
       e. Now we need to look at the Spider Mastermind's damage, 50, and the Revenant's damage, 30. Since 50 is greater than 30, we need to swap them.
       f. Now we need to look at the Spider Mastermind's damage, 50, and the Cacodemon's damage, 35. Since 50 is greater than 35, we need to swap them.
       g. Now we need to look at the Spider Mastermind's damage, 50, and the Baron of Hell's damage, 45. Since 50 is greater than 45, we need to swap them.
       h. Now we need to look at the Spider Mastermind's damage, 50, and the Cyberdemon's damage, 125. Since 50 is less than 125, we don't need to swap them.

    10. Look at the Vile's damage, 40, and the Lost Soul's damage, 10. Since 40 is greater than 10, we need to swap them.
       a. Now we need to look at the Vile's damage, 40, and the Pinky's damage, 15. Since 40 is greater than 15, we need to swap them.
       b. Now we need to look at the Vile's damage, 40, and the Spectre's damage, 20. Since 40 is greater than 20, we need to swap them.
       c. Now we need to look at the Vile's damage, 40, and the Imp's damage, 20. Since 40 is greater than 20, we need to swap them.
       d. Now we need to look at the Vile's damage, 40, and the Hell Knight's damage, 25. Since 40 is greater than 25, we need to swap them.
       e. Now we need to look at the Vile's damage, 40, and the Revenant's damage, 30. Since 40 is greater than 30, we need to swap them.
       f. Now we need to look at the Vile's damage, 40, and the Cacodemon's damage, 35. Since 40 is greater than 35, we need to swap them.
       g. Now we need to look at the Vile's damage, 40, and the Baron of Hell's damage, 45. Since 40 is less than 45, we don't need to swap them.
    
    11. Look at the Zombie's damage, 5, and the Lost Soul's damage, 10. Since 5 is less than 10, we don't need to swap them.
    12. Look at the Zombieman's damage, 10, and the Zombie's damage, 5. Since 10 is greater than 5, we need to swap them.
       a. Now we need to look at the Zombieman's damage, 10, and the Lost Soul's damage, 10. Since 10 is equal to 10, we don't need to swap them.
    */

    const sortedMonsters = monsters.sort((a, b) => b.damage - a.damage);
    console.log(sortedMonsters);
