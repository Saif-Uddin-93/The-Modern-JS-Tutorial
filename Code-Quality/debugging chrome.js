//* Code can be paused by using the debugger command in it, like this:

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}
//* Command works only when the development tools are open, otherwise the browser ignores it.

