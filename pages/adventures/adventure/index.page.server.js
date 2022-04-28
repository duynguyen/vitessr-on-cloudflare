import { AdventureClient } from '../../../lib/adventures'

async function onBeforeRender(pageContext) {
  const cfPath = pageContext.routeParams['*']
  const client = AdventureClient.init(pageContext.fetch)
  const path = `/content/dam/wknd/en/adventures/${cfPath}`
  const res = await client.getAdventureByPath(path)
  const adventure = res?.data?.adventureByPath?.item
  
  return {
    pageContext: {
      pageProps: {
        adventure,
        ASSETS_SERVER: import.meta.env.VITE_AEM_GRAPHQL_HOST
      },
      documentProps: { title: adventure.adventureTitle },
    },
  }
}

// async function prerender() {
//   const movies = await getStarWarsMovies();

//   return [
//     {
//       url: "/star-wars",
//       // We already provide `pageContext` here so that `vite-plugin-ssr`
//       // will *not* have to call the `onBeforeRender()` hook defined
//       // above in this file.
//       pageContext: {
//         pageProps: {
//           movies: filterMoviesData(movies),
//         },
//         documentProps: { title: getTitle(movies) },
//       },
//     },
//     ...movies.map((movie) => {
//       const url = `/star-wars/${movie.id}`;
//       return {
//         url,
//         // Note that we can also provide the `pageContext` of other pages.
//         // This means that `vite-plugin-ssr` will not call any
//         // `onBeforeRender()` hook and the Star Wars API will be called
//         // only once (in this `prerender()` hook).
//         pageContext: {
//           pageProps: {
//             movie: filterMovieData(movie),
//           },
//           documentProps: { title: movie.title },
//         },
//       };
//     }),
//   ];
// }

export { onBeforeRender }

export const doNotPrerender = true