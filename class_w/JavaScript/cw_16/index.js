import compat from 'core-js-compat';
console.log('HELLO')


const {
    list,                       // array of required modules
    targets,                    // object with targets for each module
} = compat({
    targets: '> 1%',            // browserslist query or object of minimum environment versions to support, see below
    modules: [                  // optional list / filter of modules - regex, string or an array of them:
        'core-js/actual',         // - an entry point
        'esnext.array.unique-by', // - a module name (or just a start of a module name)
        /^web\./,                 // - regex that a module name must satisfy
    ],
    exclude: [                  // optional list / filter of modules to exclude, the signature is similar to `modules` option
        'web.atob',
    ],
    version: '3.41',            // used `core-js` version, by default - the latest
    inverse: false,             // inverse of the result - shows modules that are NOT required for the target environment
});


