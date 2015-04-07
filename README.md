# Tucked.js

Another accordion...with ARIA helpers and drag queen references.

## Installation
Tucked.js has a jQuery dependency. So make sure to load it after that.

Tucked.js depends on some minimal css being used, see tucked.css for that.

### Install with bower:
`bower install tucked.js --save`

### Manual
Download the zip file and link to the minified file after loading jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="path/to/tucked.min.js"></script>
```

## Usage
In your javascript file, just run `.tuckit()` on your selector:
```javascript
$('a.tuck-toggle').tuckit();
```

After you include the js and integrate the css, just follow this structure in your html file:

```html
<--! The controller -->
<a id="tuck-toggler" class="tuck-toggle" href="#" data-target="#toggle-that-tuck" aria-expanded="false" aria-controls="toggle-that-tuck" role="tab">
  <p>Title Text</p>
  <i class="tucked-icon"></i>
  <i class="untucked-icon"></i>
</a>

<--! The Squeezebox -->
<div id="toggle-that-tuck" class="tucked tuck-content" role="tabpanel" aria-labelledby="tuck-toggler">
  <p>Content</p>
</div>
```

**Notes on Selectors and ARIA:**
- The `id` of the squeezebox should be put into `data-target` on the controller, complete with hash: `data-target="#squeezebox-id"`
- The controller should have an `id` that matches the `aria-labelledby` value in the squeezebox.
- The squeezebox should have an `id` that matches the `aria-controls` value in the controller.

## Contribute
Please do! And thanks!

## Issues
Please report them!

## Pipeline
This is a super basic plugin. It may or may not have the following done to it in the future, so if you wanna help, here is some stuff to do:
- Option to tuck all untucked squeezeboxes if another is clicked
- Untuck on hover option

<3,
Shaun
