document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var query = document.getElementById('search-input').value.trim();
  
  if(query === "") {
    alert("Please enter a search query!");
    return;
  }
  
  // For demonstration, we redirect to Google search.
  // Replace this with your own search results handling if building a custom backend.
  window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
});
