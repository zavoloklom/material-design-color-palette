# [Material Design Color Palette v1.1.0](http://zavoloklom.github.io/material-design-color-palette)
### Material Design Color Palette: LESS/CSS toolkit

[![Material Design Color Palette](http://zavoloklom.github.io/material-design-color-palette/images/Material-Design-Color-Palette.png)](http://zavoloklom.github.io/material-design-color-palette/)

Color palette created and maintained by [Google](http://www.google.com/design/spec/style/color.html#color-color-palette).

This color palette comprises primary and accent colors that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other.

Get started at [http://zavoloklom.github.io/material-design-color-palette](http://zavoloklom.github.io/material-design-color-palette)

Download: [v1.1.0 (ZIP)](https://github.com/zavoloklom/material-design-color-palette/releases/download/v1.1.0/material-design-color-palette.zip)


##Install
**Bower:**       `bower install material-design-color-palette`

##Getting started
####BASIC: Default CSS
Use this method to get the default Material Design Color Palette CSS.
- Download latest version of Material Design Color Palette.
- Unpack the entire `material-design-color-palette` archive into your project.
- In the <head> of your html, reference the location to your material-design-color-palette.min.css.
`<link rel="stylesheet" href="path/to/material-design-color-palette/css/material-design-color-palette.min.css">`
- Check out the [Examples pages](http://zavoloklom.github.io/material-design-color-palette/examples.html) to start using Material Design Color Palette!

####PRO: Custom LESS
Use this method to customize Material Design Color Palette using LESS.
- Download latest version of Material Design Color Palette.
- Unpack the entire `material-design-color-palette` archive into your project.
- Open your project's `path/to/material-design-color-palette/less/variables/colors.less` to change HEX values.
- Open your project's `path/to/material-design-color-palette/less/variables/main.less` to change prefixes `@zmdc-css-prefix`, `@zmdc-text-prefix` and `@zmdc-bg-prefix`.

> Css class template: {@zmdc-css-prefix}-{@zmdc-text-prefix or @zmdc-bg-prefix}-{color name}-{color value}.
> Example: mdc-text-red-400

- Re-compile your LESS if using a static compiler.
- Check out the [Examples pages](http://zavoloklom.github.io/material-design-color-palette/examples.html) to start using Material Design Color Palette!

##License
- Material Design Color Palette CSS and LESS files are licensed under the MIT License:
  - http://opensource.org/licenses/mit-license.html
- Full details: [License page](http://zavoloklom.github.io/material-design-color-palette/license.html)

## Changelog
- v1.1.0 - add some changes into LESS mixins and variables
- v1.0.0 - add all colors from [Google](http://www.google.com/design/spec/style/color.html#color-color-palette)

## Versioning
Material Design Color Palette will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* New colors from Google or changes that breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org.

## Author
- Email: s.kupletsky@gmail.com
- Twitter: https://twitter.com/zavoloklom
- GitHub: https://github.com/zavoloklom
- CodePen: http://codepen.io/zavoloklom
- Dribble: https://dribbble.com/zavoloklom