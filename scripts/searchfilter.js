document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        if (searchText.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = searchData.filter(item => item.name.toLowerCase().includes(searchText));

        if (matches.length > 0) {
            matches.forEach(match => {
                const link = document.createElement('a');
                link.href = match.url;
                link.textContent = match.name;
                link.className = 'search-result-item';
                searchResults.appendChild(link);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="no-result">No matches found.</div>';
            searchResults.style.display = 'block';
        }
    });
});
