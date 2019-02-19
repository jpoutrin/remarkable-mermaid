
var mermaidAPI = require('mermaidAPI');;

module.exports = function mermaidPlugin(md, options) {
  md.renderer.rules.fence_custom['mermaid'] = function(tokens, index) {
     var token = tokens[index];
     var result;
     mermaidAPI.render('id1', token.content, function(cbResult){
       result = cbResult;
     });
     return result;
  };
};
