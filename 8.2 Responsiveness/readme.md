## Responsiveness: Media Queries, FlexBox, Grid, Bootstrap

### Media Query

Can be used instead of css selectors.

Example:

```css
@media (max-width: 600px) {
    /* CSS code for screens <= 600px wide*/
}
```

### CSS Grid

Can be used to create grids.

Example:

```html
<div class="grid-container">
    <div class="first card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>
```

```css

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 200px 200px;
    gap: 30px;
}

.first {
    grid.column: span 2;
}

```

In the example above we use **Fraction** (fr) to divide the grid into two equal columns
We use rows to define the size of rows.
We used grid.column to make the first card span over 2 rows.

