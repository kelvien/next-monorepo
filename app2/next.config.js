const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules[0].include.push(path.resolve(__dirname, "../shared"))
    return config
  },
};
