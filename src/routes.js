import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

const Chunk = ChunkGenerator(ChunkComponent);

// Route-based code splitting

const routes = {
  '/': Chunk(() => import('./views/Home.svelte')),
  '/projects': Chunk(() => import('./views/Projects.svelte')),
  '/posts': Chunk(() => import('./views/Blog.svelte')),
  '/posts/:slug': Chunk(() => import('./views/Dynamic/Post.svelte')),
  '/cv': Chunk(() => import('./views/CV.svelte')),
  '/find-me': Chunk(() => import('./views/FindMe.svelte')),
  '*': Chunk(() => import('./views/RouteNotFound.svelte')),
};

const baseLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Blog' },
  { href: '/cv', label: 'About Me' },
  { href: '/find-me', label: 'Find Me' },
];

export { baseLinks, routes };

// import Home from './views/Home.svelte';
// import Projects from './views/Projects.svelte';
// import Blog from './views/Blog.svelte';
// import CV from './views/CV.svelte';
// import FindMe from './views/FindMe.svelte';
// import RouteNotFound from './views/RouteNotFound.svelte';
// import Post from './views/Post.svelte';

// const routes = {
//   '/': Home,
//   '/projects': Projects,
//   '/blog': Blog,
//   '/blog/:slug': Post,
//   '/cv': CV,
//   '/find-me': FindMe,
//   '*': RouteNotFound,
// };
