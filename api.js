document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Construct the payload from form fields
    var payload = {
        "answer": {
            "type": "entry",
            "name": document.getElementById('name').value,
            "gender": document.getElementById('gender').value,
            "year_of_birth": parseInt(document.getElementById('year_of_birth').value),
            "initial_symptom": document.getElementById('initial_symptom').value,
            "other": document.getElementById('other').checked
        }
    };

    // Here you would insert the actual endpoint and headers for your API
    var apiEndpoint = 'https://portal.your.md/v3/chat';
    var headers = {
        "Authorization": "Bearer 6F2KzWLvTdqDuauU5xMDuyAcOW0VcA96.5cXSmcsImGgr26KKDVaRYGRsUhTSzAOz",
        "x-api-key": "Hs2sJlImch3zRV2tKwLCC8egV2VjbtDu9OG9OgeZ",
        "Content-Type": "application/json"
    };

    // Use fetch API to post the JSON payload to the API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('result').textContent = 'Submission successful.';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred.';
    });
});