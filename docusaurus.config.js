module.exports = {
  title: "Bloom Documentation",
  tagline:
    "Everything you need to set up your minecraft server, and much more.",
  url: "https://docs.bloom.host",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "billy-bloom", // Usually your GitHub org/user name.
  projectName: "bloom-docs", // Usually your repo name.
  plugins: ["@docusaurus/plugin-ideal-image"],
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: "YOUR_API_KEY",
      indexName: "YOUR_INDEX_NAME",
    },
    announcementBar: {
      id: "join_discord",
      content:
        'For more support, as well as an amazing community, check out our discord <a rel="noopener noreferrer" target ="_blank" href="https://discord.com/invite/8UGXqNBDt6">here</a>',
      backgroundColor: "#54c7ec",
      textColor: "#0e0e17",
    },
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      hideOnScroll: true,
      title: "Bloom Documentation",
      logo: {
        alt: "Bloom Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          to: "mc/overview",
          label: "MC",
          position: "left",
        },
        {
          to: "doc2",
          label: "VPS",
          position: "left",
        },
        {
          href: "https://github.com/billy-bloom/bloomdocs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Info",
          items: [
            {
              label: "Contributors",
              to: "doc1",
            },
            {
              label: "Branding",
              to: "doc2",
            },
            {
              label: "FAQs",
              to: "doc3",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Bloom",
          items: [
            {
              label: "Billing Panel",
              href: "https://bloom.host/portal/clientarea.php",
            },
            {
              label: "Minecraft Panel",
              href: "https://mc.bloom.host/",
            },
            {
              label: "VPS Panel",
              href: "https://vps.bloom.host/",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Bloom.host. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // mc: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   path: "mc",
        //   editURL: "https://github.com/billy-bloom/bloomdocs/edit/master/mc/",
        // },
        // vps: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   path: "vps",
        //   editURL: "https://github.com/billy-bloom/bloomdocs/edit/master/vps/",
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/',
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
