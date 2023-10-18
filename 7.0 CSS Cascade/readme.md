# CSS Execution Order

Position -> Specificity -> Type -> Importance

## Position

**Position in file / import order matters.**

## Specificity:

1. Element
2. Class
3. Attribute
4. ID

**When setting each to a different color, the color of id will win.**

## Type

1. External
2. Internal
3. Inline

**Most important are inline styles**

## Importance

**!important** ignores all other previous rules.