# Personal website

[![codecov](https://codecov.io/gh/tim-richter/website/branch/master/graph/badge.svg?token=DXRIUPG9DD)](https://codecov.io/gh/tim-richter/website)

This repository contains the frontend project for timrichter.dev. It is a [NextJS](https://nextjs.org) project written in [TypeScript](https://www.typescriptlang.org). [Strapi](https://strapi.io) is used as CMS.

## Local Dev

- Create a file '.env.local' and copy the contents of '.env.example' into that
- Edit your strapi instance url's accordingly in that file
- Run with docker-compose
  ```shell
  docker-compose up
  ```
- Frontend will be available at http://localhost:3000

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.tsx**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
