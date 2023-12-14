# Flex Direction

The flex direction defines the direction of the main axis.

## Row

When flex-direction is set to row:

1. The main axis is going from **left to right**.
2. The cross-axis is going from **top to bottom**.

Example:

```css
    flex-direction: row;
```

## Column

When flex-direction is set to column:

1. The main axis is going from **top to bottom**.
2. The cross-axis is going from **left to right**.

Example:

```css
    flex-direction: column;
```

## Flex-Basis

The Flex-Basis is being **set on the children** of the flex-container.
A child is called **flex-item**.

Dependent on the flex-direction sets the **width (row)** or **height (column)**
The Flex-Basis flexes along the main axis.

## General Flexbox

CheatSheet: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Order

Order can be set on a **flex-item** to determine the order of the element inside the flex-container. A higher number gets put at the end of the container.

### Flex-Wrap

Is set on the flex-container.

Default behavior: **flex-wrap: nowrap**

Things get pushed of the page, when the container is full.

**flex-wrap: wrap**: All elements that don't have enough space to fit in the width, the elements get pushed to the next line.


### Justy-Content

Is set on the flex-container.

Default behavior: **justify-content: flex-start**

Justy-Content handles the distribution of content along the **main axis**.

**justify-content: flex-end**: When all items have enough space to be at max width, the beginning of the flex-container will have free space. flex-end will push elements to the end of the flex-container.

**justify-content: center**: Can be used to horizontally or vertically center items inside a flex-container.

**justify-content: space-between**: Can be used to distribute content evenly along the main axis, while space will be kept between items.


### align-items

Is set on the flex-container.

Default behavior: **align-items: flex-start**

align-items sets the distribution of the flex-items along the **cross-axis**. 

Behaves analog to justify-content.

For align-items to correctly work, the **height** of the **flex-container** must be set. If the main-axis points down, the **width** of the **flex-container** must be set.

Example:

```css

.container {
    align-items: flex-start;
    height: 70vh; // vh == viewport height
}
```

### align-self

Is set on the flex-item.

align-self sets the distribution of a single flex-item.

Behaves analog to justify-content and align-items but for a single flex-item.

### align-content

**Only works, when flex-wrap: wrap.**

Beside that it works similar to align-items.

When we make our items wrap **and** we want to specify how the items align, we use align-content.


## Flex-box Sizing

Order of size property importance:

Content Width < Width < flex-basis < min-width/max-width

By default min- and max-width are being set based on the content by default.

max-width == all of the content lined up 
min-width == width of the longest word

### flex-grow

Is set on the flex-item.

When activated the items continue to grow to fill up all available space. This enables the item to **grow beyond the flex-basis size**.

Can be deactivated by setting flex-grow to 0

Example:

```css
    body {
        flex-grow: 0;
    }
```


### flex-shrink

Is set on the flex-item.

When activated the items continue to **shrink until min-width is reached**. This enables the item to **shrink beneath the flex-basis size**.

Can be deactivated by setting flex-shrink to 0

Example:

```css
    body {
        flex-shrink: 0;
    }
```

### flex-basis

Is set on the flex-item.

Determines the size of the flex-item.

Can be set to auto.

When set to auto, the flex-box tries to give more size to larger content items and less size to smaller content items.

### Size shorthand

grow, shrink and basis can be written in shorthand.

Example:

```css
    body {
        flex: 1 1 0;
    }
```

First value is grow.
Second value is shrink.
Third value is basis.

This particular shorthand can be shortened even further, by omitting shrink and basis value.

Example:

```css
    body {
        flex: 1;
    }
```
Which is exactly the same as above.