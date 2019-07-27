function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {
      return new WebAssembly.Instance(module);
    });
}

//load WebAssembly
loadWebAssembly('square.wasm').then(instance => {
  const square = instance.exports.square;
  // call any exported function, e.g. instance.exports.main()
  //console.log(Object.keys(instance.exports));

  document.getElementById('res2').innerHTML = square(2);
  document.getElementById('res3').innerHTML = square(3);
  document.getElementById('res4').innerHTML = square(4);
});
