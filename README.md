# remarkable-mermaid

A plugin that uses custom code fences in remarkable to create mermaid diagrams inside

## Installation

  npm install mermaid-for-remarkable --save

## Usage (Remove '' in front of code fences)

  var mermaidAPI = require('mermaidAPI');

  codefence mermaid\n
  sequenceDiagram\n
  Alice->>Bob:Hello\n
  Bob->>Jim:Hi\n
  codefence

## Release History

* 0.1.0 Initial release
