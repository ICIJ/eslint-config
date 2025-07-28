// error @typescript-eslint/no-explicit-any
function hello(name: any) {
  // error @typescript-eslint/no-wrapper-object-types
  console.log('Hello, %s!', name as String)
}

hello('world')
