"scripts": {
"build": "tsup src/index.ts --format cjs,esm --dts --out-dir dist --clean",
"build:watch": "tsup src/index.ts --format cjs,esm --dts --out-dir dist --watch",
"test": "echo \"no tests\" && exit 0",
"prepare": "npm run build"
},

"exports": {
".": {
"import": "./dist/index.mjs",
"require": "./dist/index.js",
"types": "./dist/index.d.ts",
"default": "./dist/index.mjs"
},
"./dist/index.css": {
"default": "./dist/index.css"
}
},