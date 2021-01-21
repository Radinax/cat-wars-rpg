# Cat Wars RPG

This app was made with the intention of testing new technologies for me like TypeScript, Chakra UI and also adding testing.

This game is one where you can select a team of Cats, you can select their class and have them fight a Boss!

## General Objective

Create a fullstack application where the user can create a team of random generated cats and have them fight another random generated team.

## Specific Objectives

- Use TypeScript with React.
- Add testing with `react-testing-library`.
- Send a GET request to the the API `https://robohash.org/${id}?set=set4` to obtain an Object which will be added to an array of objects which will represent a team of three Cats.
- When making the request and obtaining the data, add to the objects the stats `hp` , `mp`, `strength`, `magic`, `pDefense`, `mDefense`, `speed`, depending on the classes.
- Create the Classes `warrior`, `mage`, `rogue`, `knight`, each will have their own prefered stats which will be randomly generated when filling a team with a new member and after asking the user to select a Class.
- Use Chakra UI for the styling.

## Libraries

- axios.
- create-react-app with TypeScript.
- Chakra UI.
- react-testing-library.
- redux-toolkit.

## Logic

App asks user to create a team in the creation section, user can select the following classes:

- Warrior:

  - Heavily favours: None.
  - Favours: `hp` ,`strength`, `pdefense`, `speed`.
  - Weak: `mDefense`, `mp`.
  - Abilities:
    - `wolfStrike`: Deals `1.25*STR` physical. Costs 5MP.
    - `lionHeart`: Deals `1*STR+(HP-currentHP)` physical. Costs 10MP.

- Mage:

  - Heavily favours: `mp`, `magic`, `mDefense`.
  - Favours: `speed`.
  - Weak: `pDefense`, `hp`.
  - Abilities:
    - `fireBall`: Deals `1.25*MAG` magical. Costs 3MP.

- Rogue:

  - Heavily favours: `speed`.
  - Favours: `strength`, `mp`.
  - Weak: `pDefense`, `mDefense`, `hp`.
  - Abilities:
    - `backstab`: Deals `1.5*SPEED` physical. Costs 3MP.
    - `cloak`: Avoids damage. Costs 2MP.

- Knight:
  - Heavily favours: `hp`, `pDefense`.
  - Favours: `strength`.
  - Weak: `mDefense`, `mp`, `speed`.
  - Abilities:
    - `hitMe`: Makes enemy focus you. Costs 2MP.
    - `hitHim`: Makes enemy focus another. Costs 2MP.

While the boss will have the following stats:

- HP: 500.
- strength: 50.
- pDefense: 40.
- mDefense: 20.
- speed: 20.

The cats recruited will be affected by RNG depending on what the stat they favour the most.

[TO DO]

## Conclusion

[TO DO]

**Made by Web Developer Adrian Beria**
