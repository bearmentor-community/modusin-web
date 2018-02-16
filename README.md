# Modusin Web with React

> Modusin is a publishing network for learners

The goal of this app is to clone a [Medium](https://medium.com) web app, called [Modusin](https://modusin.com).

![Screenshot](./screenshot.png)

## Tech Stack

- Node.js
- React.js
- React Router
- Redux
- Netlify

--------------------------------------------------------------------------------

## Development

### Application

Install `yarn` with `npm`

```sh
npm install -g yarn
```

### Running

```sh
yarn install
yarn dev
```

--------------------------------------------------------------------------------

## Deployment

### Infrastructure

GitHub => Netlify => CloudFlare => modusin.com

### Application

`node` => `react-scripts`

### Running

```sh
yarn build
yarn deploy
```

--------------------------------------------------------------------------------

## Component Architecture

### Pages

| Route       | Component
|-------------|----------
| `/``        | Home
| `/post/:id` | Post
| `/register` | Register
| `/login`    | Login
| `/profile`  | Profile
| `/settings` | Settings

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

#### Large

- NavigationHeader
  - Logo
  - ActionBar
  - TopicTags
- FeaturedPosts
  - FeaturedPost
- TopPosts
  - SmallPost
- PostContent
  - ProfileBar
  - PostTitle
  - PostImage
  - PostContent

#### Template

- Provider
- Router
- Posts
- Page

--------------------------------------------------------------------------------

## License

[MIT License](./LICENSE)
