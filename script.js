function search() {
  let query = document.getElementById('searchQuery').value.toLowerCase();
  if (!query) {
    alert('Please enter something');
    return;
  }
            
  let resultsDiv = document.getElementById('results');
  fetch('Sites.txt')
  .then(response => response.text())
  .then(data => {
      resultsDiv.innerHTML = '';
      let sites = data.split('\n').map(line => line.trim()).filter(line => line);
      let filteredSites = sites.filter(site => site.toLowerCase().includes(query));
                
      if (filteredSites.length > 0) {
        filteredSites.forEach(site => {
            let item = `<div><a href="${site}" target="_blank">${site}</a></div>`;
            resultsDiv.innerHTML += item;
        });
      } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
      }
   })
   .catch(error => {
      console.error('Error fetching results:', error);
      resultsDiv.innerHTML = '<p>Error retrieving results. Try again later.</p>';
    });
}
