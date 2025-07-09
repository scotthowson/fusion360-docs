// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/getting-started',
        'guides/modeling-basics',
        'guides/parametric-design',
        'guides/exporting-for-3d-printing',
        'guides/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsible: true,
      collapsed: false,
      items: [
        'references/shortcuts',
        'references/terminology',
        'references/filetypes-and-compatibility',
        'references/fusion360-vs-freecad',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsible: true,
      collapsed: false,
      items: [
        'projects/resin-printer-tools',
        'projects/fdm-organization-hacks',
        'projects/calibration-and-test-prints',
      ],
    },
  ],
};

export default sidebars;
