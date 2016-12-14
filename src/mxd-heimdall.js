const { AssetsQuery, Heimdall } = require('mxd-heimdall');
const DNode = require('node-red-contrib-dnode');

module.exports = DNode.createNode('mxd-heimdall', (dnode) => {
  const configs = dnode.getConfigs(['hostname', 'apikey', 'appid']);
  dnode.setServices({
    AssetsQuery,
    heimdall: new Heimdall(configs),
  });
});
