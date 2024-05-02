## React Card Collection: A Versatile Hook-Driven App

This React application provides a fun and interactive way to explore card collections! It showcases two distinct functionalities:

- **Playing Card List:** Add and display random playing cards from the Deck of Cards API.
- **PokeDex:** Search and display information about your favorite Pokemon using the PokeAPI.

### Key Features

- **Custom Hooks:** Leverages custom hooks (`useFlip`, `useAxios`, `useLocalStorage`) for modular and reusable functionality.
- **Data Fetching:** Employs the `useAxios` hook to fetch data from external APIs (Deck of Cards API, PokeAPI).
- **Local Storage Integration:** Utilizes `useLocalStorage` to persist card data across app sessions.
- **Interactive Controls:** Provides buttons for adding cards, clearing collections, and (in PokeDex) selecting Pokemon from a dropdown.
- **Visually Appealing:** Includes basic CSS styling for a user-friendly experience.

### Installation

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.

### Usage

1. Start the development server using `npm start` or `yarn start`.
2. Open `http://localhost:3000` in your web browser.

### Functionality Breakdown

#### Playing Card List

- Clicking the "Add a playing card!" button fetches a random card from the Deck of Cards API and adds it to the list.
- Clicking the "Clear cards" button removes all cards from the list.

#### PokeDex

- Select a Pokemon from the dropdown menu and click the "Add Pokemon" button to display its details.
- Alternatively, use the API to fetch random Pokemon by leaving the dropdown selection empty.
- Clicking the "Clear Pokemon" button removes all displayed Pokemon from the PokeDex.

### Hooks

- **useFlip:** Manages a simple boolean state variable with a toggle function.
- **useAxios:** Handles data fetching from external APIs, including error handling and local storage integration.
- **useLocalStorage:** Provides a hook to interact with the browser's local storage for persistent data management.

### Code Structure

The code is organized into several React components and custom hooks:

- **hooks** - Contains the reusable custom hook implementations (`useFlip`, `useAxios`, `useLocalStorage`).
- **PlayingCard** - Renders a single playing card with its image.
- **PlayingCardList** - Manages the playing card collection, including adding, clearing, and displaying cards.
- **PokemonCard** - Renders a single Pokemon card with its image, name, and stats.
- **PokemonSelect** - Provides a dropdown menu for selecting Pokemon.
- **PokeDex** - Manages the Pokemon collection, including fetching, clearing, and displaying Pokemon details.
- **CardTable** - The main component, rendering both the PlayingCardList and PokeDex sections.

This project demonstrates the use of custom hooks for managing state and data interactions, showcasing potential applications in creating more modular and reusable React components.

#### By Samie Smilz
