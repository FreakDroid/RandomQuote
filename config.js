System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./app"
  },
  //packages defines our app package
  packages: {
    app: {
      main: './boot.ts',
      defaultExtension: 'ts'
    }
  }
});