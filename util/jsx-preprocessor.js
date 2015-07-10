'use strict';

import ReactTools from 'react-tools';

module.exports = {
  process: function (src, path) {
    if (!path.match(/\.jsx$/))
      return src;

    return ReactTools.transform(src);
  }
};
