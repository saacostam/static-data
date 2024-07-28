import { Project } from '../types/index.js';

export const PROJECTS: Project[] = [
  {
    id: 'fake-store',
    name: 'Fake Store API - FE App',
    rating: 3.5,
    description:
      'Fake Store is a "fake" front-end application that uses mock data from the fake-store-api to simulate an e-commerce website. It was built as a personal project, to learn Vue, Axios and Vuex.',
    smImage: '/assets/project/fake-store.png',
    url: 'https://saacostam.github.io/fake-store',
    iframe: {
      isResponsive: true,
    },
  },
  {
    id: 'tune-code',
    name: 'TuneCode: Musical Programming Language',
    rating: 4.5,
    description:
      "TuneCode is a web programming language for music creation, oriented towards people with experience in the use of software dedicated to music production (DAW: Digital Audio Workstations). Using analogous concepts to DAW's, TuneCode allows the playback of melodies through basic oscillators, the scheduling of samples and the use of effects.",
    smImage: '/assets/project/tune-code.png',
    url: 'https://saacostam.github.io/music-dsl',
    iframe: {
      isResponsive: false,
    },
  },
  {
    id: '3d-music-visualizer',
    name: '3D Music Visualizer',
    rating: 4,
    description:
      'Website that creates a 3D visualization of audio files, using the AnalyserNode from the JavaScript Audio API, and p5.js & WEBGL to render the graphics. It enables users to choose between different displays, set their own parameters and upload their own audio files.',
    smImage: '/assets/project/3d-music-visualizer.png',
    url: 'https://saacostam.github.io/3d-music-visualizer/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    rating: 2.5,
    description:
      'A traditional sudoku game built using the HTML Canvas element. It has random level generation, pencil, cell-highlighting, answer validation and timer.',
    smImage: '/assets/project/sudoku.png',
    url: 'https://saacostam.github.io/static-websites/sudoku/',
    iframe: {
      isResponsive: true,
      canBeUsedInMobile: false,
    },
  },
  {
    id: 'music-visualizer',
    name: '2D Music Visualizer',
    rating: 3.5,
    description:
      'Music Visualizer is a website that uses the AnalyserNode from JavaScript Audio API to create a 3-band frequency-based visualization. It enables the user to set their own parameters and select from a range of preloaded songs. It was built as a personal project to learn the Canvas API.',
    smImage: '/assets/project/music-visualizer.png',
    url: 'https://saacostam.github.io/music-visualizer/',
    iframe: {
      isResponsive: true,
    },
  },
  {
    id: 'lalu',
    name: 'Lalu: Spotify Clone - FE App',
    rating: 4.2,
    description:
      'This is a frontend application similar to Spotify that allows users to listen to music, view artist profiles and listen to playlists. It was originally created as a class project, which used a distributed microservices backend with multiple programming languages and components. Currently, the frontend application uses mock-data to achieve the original behavior.',
    smImage: '/assets/project/lalu.png',
    url: 'https://saacostam.github.io/lalu/',
    iframe: {
      isResponsive: true,
    },
  },
  {
    id: 'signal-grid',
    name: 'Signal Grid - Game',
    rating: 2.4,
    description:
      'Signal-grid is a game, written in vanilla typescript, that is similar to traditional pipe puzzles.',
    smImage: '/assets/project/signal-grid.png',
    url: 'https://saacostam.github.io/static-websites/signal-grid/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
  },
  {
    id: 'bio-rastro',
    name: 'BioRastro - Game',
    rating: 4.0,
    description:
      "It is a pokemon-like game where the objective is to discover the fauna of the chingaza paramo. It's purpose is educating the player in the biodiversity of this paramo and Colombia 🇨🇴 in general. It was built using excalibur JS.",
    smImage: '/assets/project/bio-rastro.png',
    url: 'https://saacostam.github.io/bio-rastro/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      width: 1000,
      height: 500,
    },
  },
  {
    id: 'trivia',
    name: 'Trivia API - FE App',
    rating: 3.5,
    description:
      'Web application that uses the public trivia api to retrieve trivia questions, and keep stats about the users performance. It is built using React + Vite + ReactQuery.',
    smImage: '/assets/project/trivia.png',
    url: 'https://saacostam.github.io/trivia/',
    iframe: {
      isResponsive: true,
      height: 850,
    },
  },
  {
    id: 'chord-visualizer',
    name: 'Chord Visualizer',
    rating: 4.5,
    description:
      'Web App for leaning chords with a real-time interactive visualizer that syncs to a audio source (Youtube video)',
    smImage: '/assets/project/chord-visualizer.png',
    url: 'https://saacostam.github.io/fuzzy-noteable/',
    iframe: {
      isResponsive: true,
    },
  },
  {
    id: 'crossy-road',
    name: 'Crossy Road - Game Clone',
    rating: 4.1,
    description:
      'This is a clone project for the game Crossy Road, built using BabylonJs as the 3D game engine. The project and class structure mirrors the ExcaliburJs framework, but using the 3D primitives provided by BabylonJs.',
    smImage: '/assets/project/crossy-road.png',
    url: 'https://saacostam.github.io/3d-crossy-road/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      width: 1000,
      height: 500,
    },
  },
  {
    id: 'tetris',
    name: 'Tetris - Game Clone',
    rating: 3.3,
    description:
      "Clone of Tetris, built using vue, using javidx9's (🙌) tetris video as a reference.",
    url: 'https://saacostam.github.io/tetris-vue/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
      height: 600,
      width: 1000,
    },
  },
  {
    id: 'slippery-slope',
    name: 'Slippery Slope',
    rating: 3.5,
    description:
      "A platform game built using the HTML Canvas element. It's slippery because I didn't know proper friction physics 🫠",
    url: 'https://saacostam.github.io/slippery-slope/',
    iframe: {
      isResponsive: true,
      canBeUsedInMobile: false,
      height: 600,
      width: 1000,
    },
  },
  {
    id: 'piano-roll',
    name: 'Piano Roll',
    rating: 3.6,
    description: 'A functional Piano Roll for web music prototyping',
    url: 'https://saacostam.github.io/piano-roll/',
    iframe: {
      isResponsive: false,
      canBeUsedInMobile: false,
    },
  },
];
