// ─── Projects Data ────────────────────────────────────────────────────────────
// Images are auto-discovered from src/assets/img/projects/<slug>/ at build time
// via Vite's import.meta.glob — no per-image imports or hardcoded paths.
// Control carousel order by prefixing filenames (01-, 02-, ...).
const projectImageUrls = import.meta.glob(
  '../assets/img/projects/*/*.{png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' }
);

// Collect every image living inside a project's folder, sorted by filename.
const imagesForProject = (slug) =>
  Object.entries(projectImageUrls)
    .filter(([key]) => key.includes(`/${slug}/`))
    .map(([, url]) => url)
    .sort();

export const projectsData = [
  {
    title: 'HCIExplorer',
    description:
      'An interactive educational website that explores Human-Computer Interaction through intuitive content, interactive demonstrations, case studies, and human-centered design principles.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    slug: 'hci-website',
    year: 2025,
    type: 'Academic Project',
    images: imagesForProject('hci-website'),
    demoLink: 'https://apstlrdny.github.io/hci-website/',
    githubLink: 'https://github.com/apstlrdny/hci-website',
    featured: false,
  },
];

export const categories = ['All', 'Full Stack', 'Frontend', 'APIs/AI'];