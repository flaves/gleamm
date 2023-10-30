const path = require(`path`);

function splitLanguage(lang) {
  return lang.split(`-`)[0];
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/fr`,
    force: true,
    isPermanent: true,
    conditions: {
      language: `fr`,
    },
  });

  createRedirect({
    fromPath: `/`,
    toPath: `/nl`,
    force: true,
    isPermanent: true,
    conditions: {
      language: `nl`,
    },
  });

  createRedirect({
    fromPath: `/`,
    toPath: `/en`,
    force: true,
    isPermanent: true,
    conditions: {
      language: `en`,
    },
  });

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
      const language = splitLanguage(lang);
      createPage({
        path: `/${language}`,
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
      const language = splitLanguage(lang);
      createPage({
        path: `/${language}/${uid}`,
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
      const language = splitLanguage(lang);
      createPage({
        path: `/${language}/${uid}`,
        component: path.resolve(`./src/templates/LegalPage.tsx`),
        context: {
          id,
          lang,
        },
      });
    });
  });
};
