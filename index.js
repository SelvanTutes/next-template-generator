#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path = require("path");
var samplePage_1 = require("./templates/samplePage");
// Get arguments from CLI
var args = process.argv.slice(2);
var componentName = args[0];
var outputDir = args[1] || process.cwd(); // default: current folder
if (!componentName) {
    console.error("❌ Please provide a component name: generate-page <ComponentName> [outputDir]");
    process.exit(1);
}
// Replace placeholder with actual component name
var content = samplePage_1.samplePageTemplate.replace(/__COMPONENT_NAME__/g, componentName);
// Ensure folder exists
fs_extra_1.default.ensureDirSync(outputDir);
// Write page.tsx
var filePath = path.join(outputDir, "page.tsx");
fs_extra_1.default.writeFileSync(filePath, content.trim());
console.log("\u2705 Page '".concat(componentName, "' created at ").concat(filePath));
