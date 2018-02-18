# Modusin Web with React

> Modusin is a publishing network for learners

The goal of this app is to clone a [Medium](https://medium.com) web app, called [Modusin](https://modusin.com).

![Screenshot](./assets/screenshot.png)

## Tech Stack

- Node.js
- React.js
- React Router
- Redux
- Netlify

--------------------------------------------------------------------------------

## Development

### Installing

Install `yarn` with `npm`

```sh
npm install -g yarn
yarn install
```

### Running

```sh
yarn dev
```

### Building

```sh
yarn build
```

--------------------------------------------------------------------------------

## Deployment

### Application

`node` => `react` => `react-scripts` => `react-app-rewired`

### Infrastructure

GitHub => Netlify => CloudFlare => mhaidarhanif.org/modusin.com

### Running

```sh
yarn deploy
```

--------------------------------------------------------------------------------

## Component Architecture

### Pages

| Route       | Component
|-------------|----------
| `/`         | home
| `/post/:id` | post
| `/register` | register
| `/login`    | login
| `/profile`  | profile
| `/setting`  | setting

### Size

#### Small

- Logo
- Topic
- SearchBox
- ActionButton
- ActionAvatar
- SectionTitle
- PostTitle
- PostImage
- PostSnippet
- Avatar
- MetaText
- MetaTextSmall
- FooterText
- ActionInput

#### Medium

- PageTitle
- PageSubtitle
- PageText
- ActionBar
  - SearchBox
  - ActionButton
  - ActionAvatar
- TopicTags
  - Array of Topic
- FeaturedPost
  - PostTitle
  - PostImage
  - PostSnippet
  - MetaText
- SmallPost
  - PostTitle
  - PostImage
  - PostSnippet
  - MetaText
  - MetaTextSmall
- ProfileBar
  - Avatar
  - MetaText
  - MetaTextSmall
- FooterTexts
  - FooterText

#### Large Segments

- SegmentNavigationHeader
  - Logo
  - ActionBar
  - TopicTags
- SegmentFeaturedPosts
  - Array of FeaturedPost
- SegmentLatestPosts
  - Array of SmallPost
- SegmentPostContent
  - ProfileBar
  - PostTitle
  - PostImage
  - PostTextContent

#### Templates

- Provider
- Router
- PageCommon
- PagePost

--------------------------------------------------------------------------------

## License

[MIT License](./LICENSE)
