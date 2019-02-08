# UI-Developer-1

## Christopher Foster

# MVP

- [x] All MVP features were built

- [x] Mobile view at 500px, completed with no horizontal scroll bars

- [x] Event listeners incorporated using javascript

- [x] Incorporate use of Array methods in javascript components

- [x] Link site to react app using CTA

- [x] Desktop view at 1000px, completed with no horizontal scroll bars

- [x] Theme integrated effectively using design picked by team

# 2-page Marketing Website

## Features:

- Scales seamlessly from mobile to desktop sizes, and any size between them
- Simple automatic slideshow quickly suggests several product use cases to potential customers
- Slides can be added or removed out easily (see below)
- Three different buttons encourage the audience to find their way to the signup/login page
- Features cards stack at lower screen widths and separate at higher screen widths
- About Us page includes each team member's name and role, and a link to their GitHub page

## Instructions:

### Changing Slideshow Images

To add an image, first add it to the /img folder. For best results, the image should be cropped to a 2:3 (portrait) ratio. Finally, find the existing <img> tags in the HTML and add a new tag pointing at the new image. Add a short description of the image for screen readers.

To remove an image, remove the corresponding <img> tag from the HTML. There should always be at least one image, preferably at least three for the slideshow effect.

The JS for the slideshow generates an array of images from the HTML upon page load, and then cycles through them. There should be no need to edit the JS because of added or removed images.

### Features Cards

The features cards are a sort of semi-component. It wouldn’t be that difficult to edit the HTML to refer to more features of the product. However, there is so little width at the mobile level that adding even one new feature card could cause side effects.

### Color Scheme

Variables are used throughout the LESS files to refer to the color scheme, making this portion of a color adjustment fairly simple. However, JS does not have access those color variables, and must rely instead on hex codes to apply color. Therefore, editing the site colors would require editing one or more LESS files _as well as_ the index.js.

## Known Issues

- Some styles are applied on page load by JS. If the user’s connection is slow, there is a chance of them seeing the site without all styling applied.
- While the site scales well, it doesn’t look great at all screen widths. The tablet view (min-width: 550ps) in particular could use a redesign to display more of the important information on screen
- Feature cards and colors are not as easy to change as they could be.
