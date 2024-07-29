<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scraped Data Display</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-5">Scraped Data</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Source URL</th>
                    <th>Scraped Text</th>
                    <th>Date Scraped</th>
                </tr>
            </thead>
            <tbody>
                {% for row in data %}
                <tr>
                    <td>{{ row['Source URL'] }}</td>
                    <td>{{ row['Scraped Text'] }}</td>
                    <td>{{ row['Date Scraped'] }}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
        <a href="{{ url_for('static', filename=file_name.replace('static/', '')) }}" class="btn btn-primary" download="scraped_data.csv">Download CSV</a>
    </div>
</body>
</html>