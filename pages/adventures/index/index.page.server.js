import { AdventureClient } from '../../../lib/adventures'

async function onBeforeRender(pageContext) {
  const client = AdventureClient.init(pageContext.fetch)
  const res = await client.getAllAdventures()
  const adventures = res?.data?.adventureList?.items
  
  return {
    pageContext: {
      pageProps: {
        adventures: adventures,
        ASSETS_SERVER: import.meta.env.VITE_AEM_HOST
      },
      documentProps: { title: `Adventures` },
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