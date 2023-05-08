fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => {
    // do something with the returned data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
