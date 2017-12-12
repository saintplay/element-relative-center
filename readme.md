# element-relative-center

> Get the x,y relative coordinates of an element's center
> Works well with elements with scroll overflow

## Install ##

    npm install --save element-relative-center

or

    yarn add element-relative-center


## Usage ##

**Example:** If the element has a width: 1360px and height: 440  
The relative center would be x: 680 and y: 220  
*Note:* if the element has scroll overflow, the center will be readjusted


## Usage ##

```js
var elementRelativeCenter = require('element-relative-center');
// or
import elementRelativeCenter from 'element-relative-center';

var containerEl = document.getElementById('container')
elementRelativeCenter(containerEl)
//=> { x: 680, y: 220 }
```

## License ##

MIT © [Diego Jara](saintplay96@gmail.com)
