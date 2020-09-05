/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui";
import { Link } from "gatsby";

const Footer = () => (
  <footer
    sx={{
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`,
    }}
  >
    <div>
      &copy; {new Date().getFullYear()} by Max Niederman. All rights reserved.
    </div>
    <div>
      Built with{" "}
      <TLink as={Link} aria-label="Link to the site's tech stack" to="/tech">
        <b>this Tech</b>
      </TLink>
    </div>
  </footer>
);

export default Footer;
