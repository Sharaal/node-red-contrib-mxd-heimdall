const { AssetsQuery, Heimdall } = require('mxd-heimdall');

module.exports = (RED) => {
  RED.nodes.registerType('mxd-heimdall', function NODE(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    if (!config.hostname || !config.apikey || !config.appid) {
      node.error('config is missing');
    }

    node.AssetsQuery = AssetsQuery;
    node.heimdall = new Heimdall({ hostname: config.hostname, apikey: config.apikey, appid: config.appid });
  });
};
