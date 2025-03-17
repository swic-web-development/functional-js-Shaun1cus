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

    