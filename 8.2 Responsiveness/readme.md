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

### Flexbox

Using flexbox we can divide a row into colums. 
By default they share the same percentage of width.
We can set the flex to 2 or 0.5 for example, to have 1 element be double the size of others and the other element to be half of the size of the default.

Example:

```html
<div class="flex-container">
    <div class="first card"></div>
    <div class="second card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>
```

```css
.flex-container {
    display: flex;
}

.card {
    background: blue;
    border: 30px solid white;
    height: 100px;
    flex: 1;
}

.first {
    flex:2;
}

.second {
    flex: 0.5;
}
```

### Bootstrap Framework

Bootstrap offers several different css classes, to achieve a responsive website layout.

Bootstrap uses a 12 division system

col-6 == 50% of available width
col-1 == 1/12 of available width
