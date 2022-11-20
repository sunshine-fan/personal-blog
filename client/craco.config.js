const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
      "@utils": path.resolve("src/utils"),
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      // options: {
      //   customizeTheme: {
      //     '@primary-color': '#ececec',
      //   },
      // },
    },
  ],
};