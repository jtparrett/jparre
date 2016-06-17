# Piper
Welcome to Piper, Rawnet's UI styleguide and boilerplate.

To use the boilerplate: 
- Download the [ZIP](https://github.com/dahliacreative/piper/zipball/master)
- Extract the ZIP to your project root, make sure you extract to the right place, as attempting to manually copy the files will miss required hidden files
- In terminal, from your project root, run `npm install`
- Edit `GruntConfig.json` to meet your requirments
- Ensure there is a `.gitignore` file with the following:
```
.sass-cache
.DS_Store
node_modules
*.map
/path/to/build/directory
```
- In terminal from your project root, run `grunt` to compile and watch for further changes; or
- Run `grunt build` to simply build the project
