import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '815b6d1577e544838473a9e7f1b18b07',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Karma Blog',
  domain: 'https://karma.kevinkkien.me',
  author: 'Karma',

  // open graph metadata (optional)
  description: 'Karma Blog',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  
  pageUrlOverrides: {
    //'/book': '561f992e260e4717826e5e43de041386',
    //'/blog': '2bce9d34e7344f2d9860d0afc4b5671a'
  },

  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default',
  //navigationStyle: 'custom',
  //navigationLinks: [
  //  {
   //   title: 'Book',
  //    pageId: '561f992e260e4717826e5e43de041386'
  //  },
 //   {
  //    title: 'Blog',
  //    pageId: '2bce9d34e7344f2d9860d0afc4b5671a'
  //  }
  //]
})
