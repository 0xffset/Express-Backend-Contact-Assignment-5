$response = Invoke-WebRequest -Method GET -Uri http://localhost:4001/api/contact -UseBasicParsing
ConvertFrom-Json $([String]::new($response.Content))