const notFound = (req, res) => res.status(404).render('page-not-found', {
  pageTitle: 'Page not found',
  path: '/404'
});

module.exports = notFound;