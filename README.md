# scrollToElementJS

A simple animate scroll to Element Plugin

## Example

```code
Default

$(Selector).scrollToElement();

Setting options
- Selector (ID or Class or Path)
- distance from top
- animation speed in milliseconds
- URL without anchor

$(Selector).scrollToElement({
    element: "#test",
    top: 100,
    speed: 1000,
    urlWithoutAnchor: true
});
```