////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import rollupBuilder from '@haixing_hu/rollup-builder';

export default rollupBuilder('TypeDetect', import.meta.url, {
  terserPluginOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      inline: true,
      toplevel: true,
      passes: 2,
    },
    output: {
      comments: false,
    },
  },
});
