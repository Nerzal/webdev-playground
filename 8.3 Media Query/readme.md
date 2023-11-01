# Media Query

Media Queries allows us to create responsive element styling.

**Syntax:**

> @media (breakpoint) {
>  //  css code
> }

Its also possible to set 2 breakpoints

**Syntax:**

> @media (breakpoint) and (breakpoint) {
>  //  css code
> }

**Example:**

```css
@media (min-width: 600) and (max-width: 1200) {
    body {
        background-color: red;
    }
}

```