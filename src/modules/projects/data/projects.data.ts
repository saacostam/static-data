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
    content: [
      {
        type: ProjectContentType.HEADER,
        text: 'Motivation',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'The motivation behind TuneCode was to merge two passions: coding and music production. The project aimed to offer a creative and technical platform that blends the two fields, allowing users to code their music through a familiar yet flexible interface.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Key Features',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Error Handling: Syntactical and semantic errors are displayed in the console, helping users write correct code.',
          'Oscillators: Users can generate and play melodies using basic oscillators, such as sine, square, and triangle waves.',
          'Audio Sample Scheduling: TuneCode allows for the scheduling and playback of audio samples.',
          'Effects: Effects such as gain, reverb, and delay can be applied to audio sources, enriching the sound.',
          'Mixing & Scheduling: Multiple audio sources can be played in parallel using a scheduling mechanism that enables intricate compositions.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Delelopment Process Overview',
      },
      {
        type: ProjectContentType.ORDERED_LIST,
        listElements: [
          'Initial Proof of Concepts (POCs) were created to test oscillators, audio samples, and audio scheduling.',
          'Language primitives were defined to mirror common DAW elements and workflows, such as tabs, audio sources, and effect chains.',
          'The parser was built using ANTLR, and an iterative process refined it to correctly build the audio graph.',
          'The original scheduler used setTimeout for audio execution but was refactored to utilize the Web Audio API for more precise scheduling.',
          'The embedded Monaco editor was integrated for a better code editing experience.',
          'Additional features like a frequency spectrum visualizer and a library of pre-loaded audio samples were introduced.',
          'End-to-end testing was employed to iteratively polish various components, including the scheduler and user interface.',
          'Documentation was created to explain the DSL primitives and guide users in composing with TuneCode.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Challanges',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Building a domain-specific language (DSL) involved creating tokenizers, syntactic trees, and executing those trees. Though part of a class project, this was an intricate process requiring attention to detail.',
          'Loading and preloading audio files asynchronously in the browser was a novel concept that required careful handling.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Reflections and Learnings',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'Working on TuneCode introduced many new topics, such as tokenizers, syntactic trees, tree traversal, the Web Audio API, and Canvas API, along with integrations using Vue and external modules. This project presented unusual challenges, unlike typical web development, and demonstrated the power and flexibility of DSLs in solving complex and creative tasks. It also highlighted the importance of precision in audio scheduling and how different libraries can simplify or enhance development workflows.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Future Improvements',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'User Uploads: Enable users to upload their own audio files for further customization.',
          'Editor Enhancements: Integrate syntax highlighting and auto-completion in the Monaco editor, leveraging ANTLR’s capabilities.',
          'Documentation Translation: Translate all documentation into English to reach a wider audience.',
        ],
      },
    ],
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
    content: [
      {
        type: ProjectContentType.HEADER,
        text: 'Motivation',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'The motivation behind Lalu was to create a frontend application inspired by Spotify, designed to allow users to stream music, explore artist profiles, and enjoy curated playlists.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Key Features',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Audio Playback: Includes basic playback functionality for songs and playlists.',
          'Explore Artists: Access the profiles of various artists and their popular songs.',
          'Spotify-like UI: Familiar and intuitive interface that mirrors the experience of using Spotify, making navigation and exploration easy for users.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Development Process Overview',
      },
      {
        type: ProjectContentType.ORDERED_LIST,
        listElements: [
          'Initial Microservices Architecture: The project began as part of a class project using a sprint-based development cycle. Each team member was responsible for creating microservices in different languages, handling various entities. These services were integrated through an API gateway, consumed by both a mobile and a web app.',
          'Layout and Global State Management: The first task focused on creating a complex layout where static components, such as the audio player and navigation, remained persistent across pages while dynamic content, such as artist profiles, followed a router-based behavior.',
          'Data Integration: Once the layout was established, the next step was integrating data from the API gateway for artists, playlists, and songs, ensuring proper display on the frontend.',
          'Audio Playback Handling: I explored various approaches for handling audio playback. While considering the Web Audio API, I opted for the native HTML audio element for simplicity and reliability.',
          'Refactor and Mock Data: After the backend infrastructure was removed, I replaced the server data with mock data and refactored the codebase, breaking it down into more reusable components while ensuring the app maintained its core functionality.',
          'Responsive Design Implementation: The final step involved refining the app to be responsive across different devices.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Challanges',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Managing Audio Files and Playback: Understanding how to effectively manage audio files and integrate them into playlists was a significant challenge. By experimenting with both the Web Audio API and the native HTML audio element, I was able to achieve a stable playback functionality.',
          'Complex Layout Implementation: This project required creating an unusual layout where certain elements, such as the player and navigation, persist across pages while the main content dynamically changes. This helped me gain a deeper understanding of state management and CSS techniques to build more complex layouts.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Learnings',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Responsive Design: While the application is responsive, I realized that adopting a mobile-first design approach from the beginning might have simplified the development process. The current layout, though functional, could be further optimized for a better user experience.',
          'Audio Element: This project gave me a solid grasp of the HTML audio element, helping me understand its capabilities and limitations compared to more complex solutions like the Web Audio API.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Future Improvements',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Responsive Layout Revamp: A revisit of the responsive design might be necessary to improve it offering a more intuitive and comfortable experience across devices.',
          'Enhanced Playback Features: Future updates may include additional playback modes such as shuffle, loop, and more advanced audio controls to mimic a full-fledged music streaming application.',
        ],
      },
    ],
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
    content: [
      {
        type: ProjectContentType.HEADER,
        text: 'Challenges and Solutions',
      },
      {
        type: ProjectContentType.TEXT,
        text: `During development, one of the biggest challenges was implementing the standard "input-update-draw" loop using BabylonJs, which required a steep learning curve. Although the framework itself was not inherently difficult, it needed to be learned from the ground up. Additionally, handling 3D models presented its own set of obstacles. Instead of relying on pre-built 3D models, I opted to use simpler shapes like cubes, cylinders, and spheres. These basic shapes were combined and manipulated directly within the game logic to form more complex structures, streamlining development given the project's modest visual requirements`,
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Key Features',
      },
      {
        type: ProjectContentType.UNORDERED_LIST,
        listElements: [
          'Recreation of core Crossy Road gameplay from scratch.',
          'Optimizations for game performance, such as pooling and cleanup of unused or off-screen elements.',
          'Use of basic shapes to form complex structures, ensuring efficient development and minimizing dependencies on 3D modeling software.',
          "Collision detection and movement in 3D space using BabylonJs's mesh collisions.",
          'Game state management achieved through the use of state machines.',
        ],
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Delelopment Process Overview',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'The development process was driven more by curiosity and fun than by a formal methodology. Features were built as they came to mind, making this project a significant learning experience. The architecture was kept lean, with a focus on implementing a game loop similar to that of ExcaliburJs but adapted for 3D.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Reflections and Learnings',
      },
      {
        type: ProjectContentType.TEXT,
        text: "This project provided valuable experience working with BabylonJs. Although I didn't utilize all of the engine's features, I became comfortable with its basic workflow and primitives. I also gained a deeper understanding of handling movement and collisions in 3D space. The implementation of state machines for game state management was particularly rewarding, as it allowed for better organization of the game's various states.",
      },
      {
        type: ProjectContentType.TEXT,
        text: 'Additionally, I encountered challenges when attempting to integrate external 3D models into the project. The models were not normalized, resulting in significant size discrepancies, and I realized that external tools like Blender were necessary to fix these issues. This was a new learning experience and something I plan to explore further.',
      },
      {
        type: ProjectContentType.HEADER,
        text: 'Future Improvements and Next Steps',
      },
      {
        type: ProjectContentType.TEXT,
        text: 'Moving forward, I would like to revisit the integration of 3D models, learning to adjust and normalize them properly within the scene. Additionally, I realized that while BabylonJs is a powerful engine, the resulting architecture of my project might be better suited to a more lightweight framework such as ThreeJs. The slimmer codebase and simpler game loop suggest that using ThreeJs could lead to a more streamlined and efficient development process.',
      },
    ],
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
