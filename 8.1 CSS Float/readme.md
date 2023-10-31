## CSS Float

Wrapping text using float and clear.

Property name: float.
Float can be applied to elements so text can fit around images.

**Example:**

```html
<img .../>
<p>text...</p>
```

```css
img {
    float: left;
}
```

The text will now start right of the image and continue below the image.

### Clear

Prevent elements from floating around others can be done using clear.


**Example:**

```html
<img .../>
<p>text...</p>
<footer>Bla Bla bla</footer>
```

```css
img {
    float: left;
}

footer {
    clear: left;
}
```

Clear can also be set to **both** to be cleared of left and right floating.