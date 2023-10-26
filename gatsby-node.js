const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await graphql(`
    {
      allPrismicHomePage {
        edges {
          node {
            id
            lang
          }
        }
      }
    }
  `).then((res) => {
    return res.data.allPrismicHomePage.edges.forEach((edge) => {
      const { id, lang } = edge.node;
      createPage({
        path: `/${lang}`,
        component: path.resolve(`./src/templates/HomePage.tsx`),
        context: {
          id,
          lang,
        },
      });
    });
  });

  await graphql(`
    {
      allPrismicContactPage {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `).then((res) => {
    return res.data.allPrismicContactPage.edges.forEach((edge) => {
      const { id, lang, uid } = edge.node;
      createPage({
        path: `/${lang}/${uid}`,
        component: path.resolve(`./src/templates/ContactPage.tsx`),
        context: {
          id,
          lang,
        },
      });
    });
  });

  await graphql(`
    {
      allPrismicLegalPage {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `).then((res) => {
    return res.data.allPrismicLegalPage.edges.forEach((edge) => {
      const { id, lang, uid } = edge.node;
      createPage({
        path: `/${lang}/${uid}`,
        component: path.resolve(`./src/templates/LegalPage.tsx`),
        context: {
          id,
          lang,
        },
      });
    });
  });
};
