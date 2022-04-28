import AEMHeadless from '@adobe/aem-headless-client-js'

const VITE_AEM_GRAPHQL_HOST = import.meta.env.VITE_AEM_GRAPHQL_HOST
const VITE_AEM_GRAPHQL_ENDPOINT = import.meta.env.VITE_AEM_GRAPHQL_ENDPOINT

export class AdventureClient {
  static init(fetch) {
    if (!this.__envClient) {
      this.__envClient = new AdventureClient({
        serviceURL: VITE_AEM_GRAPHQL_HOST,
        endpoint: VITE_AEM_GRAPHQL_ENDPOINT,
        fetch
      })
    }
    return this.__envClient
  }
  constructor({ serviceURL, endpoint, fetch }) {
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL,
      endpoint,
      auth: ['admin', 'admin'], // TODO: dynamically set auth based on AEM instance
      fetch
    })
  }

  async getAllAdventures() {
    const query = `{
      adventureList {
        items {
          _path
          adventureTitle
          adventureDescription {
            plaintext
          }
          adventurePrice
          adventureTripLength
          adventurePrimaryImage {
            ... on ImageRef {
              _path
            }
          }
        }
      }
    }`
    const res = await this.runQuery(query)
    return res
  }

  async getAdventurePaths() {
    const res = await this.getAdventures();
    const adventures = res?.data?.adventureList?.items || [];
    const paths = adventures.map((item) => {
      const pathItems = item._path.split('/');
      return {
        params: {
          id: `${pathItems[pathItems.length - 2]}`,
        },
      };
    });
    return paths;
  }

  async getAdventureByPath(path) {
    const query = `{
      adventureByPath (_path: "${path}") {
        item {
          _path
            adventureTitle
            adventureActivity
            adventureType
            adventurePrice
            adventureTripLength
            adventureGroupSize
            adventureDifficulty
            adventurePrimaryImage {
              ... on ImageRef {
                _path
                mimeType
                width
                height
              }
            }
            adventureDescription {
              html
            }
            adventureItinerary {
              html
            }
        }
      }
    }
    `
    const res = await this.runQuery(query)
    return res
  }

  async runQuery(query) {
    const { serviceURL, endpoint, fetch } = this.aemHeadlessClient
    let result = {}
    try {
      const res = await fetch(`${serviceURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic YWRtaW46YWRtaW4='
        },
        method: 'POST',
        body: JSON.stringify( { query } )
      })
      result = await res.json()
    } catch(e) {
      // invalid JSON?
      console.error(e)
    }
    return result
  }
}
