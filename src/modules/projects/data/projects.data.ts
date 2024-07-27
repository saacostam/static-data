import { Project } from '../types/index.js';

export const PROJECTS: Project[] = [
  {
    id: 'fake-store',
    name: 'Fake Store API - FE App',
    rating: 3.5,
    description:
      'Fake Store is a "fake" front-end application that uses mock data from the fake-store-api to simulate an e-commerce website. It was built as a personal project, to learn Vue, Axios and Vuex.',
  },
  {
    id: 'tune-code',
    name: 'TuneCode: Musical Programming Language',
    rating: 4.5,
    description:
      "TuneCode is a web programming language for music creation, oriented towards people with experience in the use of software dedicated to music production (DAW: Digital Audio Workstations). Using analogous concepts to DAW's, TuneCode allows the playback of melodies through basic oscillators, the scheduling of samples and the use of effects.",
  },
  {
    id: '3d-music-visualizer',
    name: '3D Music Visualizer',
    rating: 4,
    description:
      'Website that creates a 3D visualization of audio files, using the AnalyserNode from the JavaScript Audio API, and p5.js & WEBGL to render the graphics. It enables users to choose between different displays, set their own parameters and upload their own audio files.',
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    rating: 2.5,
    description:
      'A traditional sudoku game built using the HTML Canvas element. It has random level generation, pencil, cell-highlighting, answer validation and timer.',
  },
  {
    id: 'music-visualizer',
    name: '2D Music Visualizer',
    rating: 3.5,
    description:
      'Music Visualizer is a website that uses the AnalyserNode from JavaScript Audio API to create a 3-band frequency-based visualization. It enables the user to set their own parameters and select from a range of preloaded songs. It was built as a personal project to learn the Canvas API.',
  },
  {
    id: 'lalu-spotify-clone',
    name: 'Lalu: Spotify Clone - FE App',
    rating: 4.2,
    description:
      'This is a frontend application similar to Spotify that allows users to listen to music, view artist profiles and listen to playlists. It was originally created as a class project, which used a distributed microservices backend with multiple programming languages and components. Currently, the frontend application uses mock-data to achieve the original behavior.',
  },
  {
    id: 'signal-grid',
    name: 'Signal Grid - Game',
    rating: 2.4,
    description:
      'Signal-grid is a game, written in vanilla typescript, that is similar to traditional pipe puzzles.',
  },
  {
    id: 'bio-rastro',
    name: 'BioRastro - Game',
    rating: 4.0,
    description:
      "t is a pokemon-like game where the objective is to discover the fauna of the chingaza paramo. It's purpose is educating the player in the biodiversity of this paramo and Colombia 🇨🇴 in general. It was built using excalibur JS.",
  },
  {
    id: 'trivia',
    name: 'Trivia API - FE App',
    rating: 3.5,
    description:
      'Web application that uses the public trivia api to retrieve trivia questions, and keep stats about the users performance. It is built using React + Vite + ReactQuery.',
  },
  {
    id: 'chord-visualizer',
    name: 'Chord Visualizer',
    rating: 4.5,
    description:
      'Web App for leaning chords with a real-time interactive visualizer that syncs to a audio source (Youtube video)',
  },
];
