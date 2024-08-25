import {
  Project,
  ProjectCategory,
  ProjectContentType,
} from '../types/index.js';

export const PROJECTS: Project[] = [
  {
    id: 'fake-store',
    name: 'Fake Store API - FE App',
    rating: 3.5,
    category: [ProjectCategory.SoftwareEngineering],
    description:
      'Fake Store API - FE App is a front-end application that uses mock data from the fake-store-api to simulate an e-commerce website. Developed as a personal project, it focuses on applying and deepening knowledge of Vue, Axios, and Vuex.',
    smImage: '/assets/project/fake-store.png',
    url: 'https://saacostam.github.io/fake-store',
    iframe: {
      isResponsive: true,
    },
    repoUrl: 'https://github.com/saacostam/fake-store',
    content: [],
  },
  {
    id: 'tune-code',
    name: 'TuneCode: Musical Programming Language',
    rating: 4.5,
    category: [ProjectCategory.MusicSoftware],
    description:
      'TuneCode is a web-based programming language tailored for music creation, designed for users familiar with Digital Audio Workstations (DAWs). By using familiar DAW-like concepts, TuneCode enables users to create and manipulate music directly through code. It allows the playback of melodies using basic oscillators, the scheduling of audio samples, and the application of effects to craft rich soundscapes. TuneCode bridges the gap between music production and coding, offering a new, flexible way to explore musical creativity.',
    smImage: '/assets/project/tune-code.png',
    url: 'https://saacostam.github.io/music-dsl',
    iframe: {
      isResponsive: false,
    },
    repoUrl: 'https://github.com/saacostam/music-dsl',
    content: [],
  },
  {
    id: '3d-music-visualizer',
    name: '3D Music Visualizer',
    rating: 4,
    category: [ProjectCategory.MusicSoftware],
    description:
      '3D Music Visualizer is a web application that generates attractive 3D visualizations of audio files, using the AnalyserNode from the JavaScript Audio API combined with p5.js and WEBGL for rendering. Users can upload their own audio tracks, customize various visual parameters, and select from different visualization modes to create a personalized experience. This project provides an engaging and dynamic way to explore the connection between sound and visuals.',
    smImage: '/assets/project/3d-music-visualizer.png',
    url: 'https://saacostam.github.io/3d-music-visualizer/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
    repoUrl: 'https://github.com/saacostam/3d-music-visualizer',
    content: [],
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    rating: 2.5,
    category: [ProjectCategory.Games],
    description:
      'Sudoku is a traditional sudoku game built using the HTML Canvas element. It features random level generation, a pencil tool for notes, cell highlighting, answer validation, and a timer. This project provides a comprehensive sudoku experience with interactive and dynamic gameplay elements.',
    smImage: '/assets/project/sudoku.png',
    url: 'https://saacostam.github.io/static-websites/sudoku/',
    iframe: {
      isResponsive: true,
      canBeUsedInMobile: false,
    },
    repoUrl: 'https://github.com/saacostam/static-websites/',
    content: [],
  },
  {
    id: 'music-visualizer',
    name: '2D Music Visualizer',
    rating: 3.5,
    category: [ProjectCategory.MusicSoftware],
    description:
      '2D Music Visualizer is a web application that leverages the AnalyserNode from the JavaScript Audio API to produce a 3-band frequency-based visualization. Users can customize parameters and choose from a selection of preloaded songs to visualize their music. This project was developed to explore the Canvas API, providing a hands-on approach to creating dynamic audio visualizations.',
    smImage: '/assets/project/music-visualizer.png',
    url: 'https://saacostam.github.io/music-visualizer/',
    iframe: {
      isResponsive: true,
    },
    repoUrl: 'https://github.com/saacostam/music-visualizer',
    content: [],
  },
  {
    id: 'lalu',
    name: 'Lalu: Spotify Clone - FE App',
    rating: 4.2,
    category: [
      ProjectCategory.MusicSoftware,
      ProjectCategory.SoftwareEngineering,
    ],
    description:
      'Lalu is a frontend application inspired by Spotify, designed to allow users to stream music, explore artist profiles, and enjoy curated playlists. Originally developed as a class project, the app was built to interface with a complex backend powered by distributed microservices using various programming languages and components. In its current state, the frontend relies on mock data to simulate the original functionality, providing an engaging music streaming experience without the need for a full backend infrastructure.',
    smImage: '/assets/project/lalu.png',
    url: 'https://saacostam.github.io/lalu/',
    iframe: {
      isResponsive: true,
    },
    repoUrl: 'https://github.com/saacostam/lalu',
    content: [],
  },
  {
    id: 'signal-grid',
    name: 'Signal Grid - Game',
    rating: 2.4,
    category: [ProjectCategory.Games],
    description:
      "Signal Grid is a puzzle game developed in vanilla TypeScript, inspired by traditional pipe puzzles. The objective is to connect all the pipes in the grid to the source, ensuring a continuous flow throughout the network. Players must strategically arrange the pipes to complete the circuit and solve each level's challenge, emphasizing logical thinking and spatial reasoning.",
    smImage: '/assets/project/signal-grid.png',
    url: 'https://saacostam.github.io/static-websites/signal-grid/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
    repoUrl: 'https://github.com/saacostam/signal-grid',
    content: [],
  },
  {
    id: 'bio-rastro',
    name: 'BioRastro - Game',
    rating: 4.0,
    category: [ProjectCategory.Games],
    description:
      "BioRastro is a Pokémon-inspired game where players explore the Chingaza páramo, discovering its unique fauna. The game's goal is to educate players about the rich biodiversity of this Colombian ecosystem and Colombia 🇨🇴 as a whole. Built using Excalibur.js, BioRastro combines adventure and learning, offering an engaging way to raise awareness about environmental conservation.",
    smImage: '/assets/project/bio-rastro.png',
    url: 'https://saacostam.github.io/bio-rastro/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      width: 1000,
      height: 500,
    },
    repoUrl: 'https://github.com/saacostam/bio-rastro',
    content: [],
  },
  {
    id: 'trivia',
    name: 'Trivia API - FE App',
    rating: 3.5,
    category: [ProjectCategory.SoftwareEngineering],
    description:
      'This is a web application that utilizes the public trivia API to fetch trivia questions and track user performance. Built with React, Vite, and React Query, the app provides an interactive trivia experience, allowing users to test their knowledge while monitoring their progress and stats.',
    smImage: '/assets/project/trivia.png',
    url: 'https://saacostam.github.io/trivia/',
    iframe: {
      isResponsive: true,
      height: 850,
    },
    repoUrl: 'https://github.com/saacostam/trivia',
    content: [],
  },
  {
    id: 'chord-visualizer',
    name: 'Chord Visualizer',
    rating: 4.5,
    category: [ProjectCategory.MusicSoftware],
    description:
      "Chord Visualizer is a web app designed to help musicians and music enthusiasts learn chords through an interactive and engaging experience. The app features a real-time chord visualizer that syncs seamlessly with audio sources like YouTube videos, providing a dynamic way to follow along with music. Users can see chords displayed as they play, enhancing their learning experience by combining visual cues with auditory input. Whether you're practicing a song or learning new chords, Chord Visualizer makes the process intuitive and fun.",
    smImage: '/assets/project/chord-visualizer.png',
    url: 'https://saacostam.github.io/fuzzy-noteable/',
    iframe: {
      isResponsive: true,
    },
    repoUrl: 'https://github.com/saacostam/fuzzy-noteable',
    content: [
      {
        type: ProjectContentType.HEADER,
        text: 'Key Features',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Key and Capo Adjustment: Users can change the key or move the capo on a guitar, with chords automatically shifting based on the key.',
          'Chord Display: Shows the previous, current, and next chords, allowing users to "get ready" for upcoming chords, especially useful for unfamiliar chords.',
          'Chord Variations: Offers a relatively wide range of chord variations, covering many common chords.',
          'Chord Duration Progress Bar: Displays a progress bar for each chord, indicating how long it should be played, which is helpful for songs with variable chord durations.',
          'YouTube Playback Sync: Adapts to changes in playback position and speed on YouTube, allowing for flexible learning at different speeds.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Challanges and Solutions',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'Syncing the visualizer with an audio source was the main challange from the project. Is was solved by adding time and duration meta-data to chords, creating a in-memory timeline to track the current, previous, and next chords based on the playback time. This approach achieved accurate audio sync, with the visual state updated on every frame.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Development Process Overview',
      },
      {
        type: ProjectContentType.ORDERED_LIST,
        listElements: [
          'Defining Core Interfaces: Created interfaces for artist, song, tablature, chord, chord variations, and audio syncing metadata.',
          'Mock Data Creation: Created mock data of two songs to develop and test the visualizer.',
          'Agent-Based Architecture: Adopted an agent-based architecture similar to the common game loop (update + draw) for rendering the visualizer.',
          'JSON Editor: Created a JSON editor to quickly test and iterate on song data, developing tabs for around 40 songs.',
          'UI Development: Used daisyUI to build a basic UI for displaying and filtering available tabs.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Reflections and Learnings',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'By decoupling the timeline state and rendering logic the code was greatly simplified. A "data manager" handles the in-memory chord timeline and returns the current chords, while a "canvas manager" handles rendering, allowing efficient execution on every animation frame.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Future Improvements',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'UI Enhancements: Transition from a canvas-based UI to using DOM elements overlaid on the canvas for better maintainability and accessibility.',
          'Capo Update Logic: Improve the capo update logic to ensure changes are applied immediately rather than waiting for the chord to change.',
        ],
      },
    ],
  },
  {
    id: 'crossy-road',
    name: 'Crossy Road - Game Clone',
    rating: 4.1,
    category: [ProjectCategory.Games],
    description:
      "This is a 3D recreation of the popular game Crossy Road, developed using BabylonJs as the game engine. The project's architecture and class structure closely follow the ExcaliburJs framework, while leveraging BabylonJs's 3D primitives to bring the game world to life. This project showcases the implementation of core gameplay mechanics in a 3D environment, providing a modern twist on a familiar classic.",
    smImage: '/assets/project/crossy-road.png',
    url: 'https://saacostam.github.io/3d-crossy-road/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      width: 1000,
      height: 500,
    },
    repoUrl: 'https://github.com/saacostam/3d-crossy-road/',
    content: [],
  },
  {
    id: 'tetris',
    name: 'Tetris - Game Clone',
    rating: 3.3,
    category: [ProjectCategory.Games],
    description:
      "Tetris - Game Clone is a Vue-based recreation of the classic Tetris game, developed with inspiration from javidx9's Tetris video tutorial 🙌. The project faithfully replicates the core gameplay mechanics and block-dropping challenges of the original, offering an engaging experience.",
    smImage: '/assets/project/tetris.png',
    url: 'https://saacostam.github.io/tetris-vue/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      height: 550,
      width: 1000,
    },
    repoUrl: 'https://github.com/saacostam/tetris-vue',
    content: [],
  },
  {
    id: 'slippery-slope',
    name: 'Slippery Slope',
    rating: 3.5,
    category: [ProjectCategory.Games],
    description:
      "Slippery Slope is a platform game developed using the HTML Canvas element. The game's unique challenge comes from its slippery mechanics, a result of experimenting with friction physics during development. Players navigate through various levels, dealing with the game's intentionally slippery surfaces, which add a distinctive twist to the platforming experience.",
    smImage: '/assets/project/slippery-slope.png',
    url: 'https://saacostam.github.io/slippery-slope/',
    iframe: {
      isResponsive: true,
      canBeUsedInMobile: false,
      height: 435,
      width: 830,
    },
    repoUrl: 'https://github.com/saacostam/slippery-slope',
    content: [],
  },
  {
    id: 'piano-roll',
    name: 'Piano Roll',
    rating: 3.6,
    category: [ProjectCategory.MusicSoftware],
    description:
      'Piano Roll is a functional web-based tool for music prototyping, designed to resemble the piano rolls found in music production software (DAWs). It allows users to visually compose and edit melodies by placing notes on a grid, providing an intuitive interface for creating music in a browser environment. This tool is ideal for quick music sketching and experimentation.',
    smImage: '/assets/project/piano-roll.png',
    url: 'https://saacostam.github.io/piano-roll/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
    repoUrl: 'https://github.com/saacostam/piano-roll',
    content: [],
  },
];
