$postData = @{nombre='TestFromPowerShell';apellido='TestFromPowershell';telefono='TestFromPowershell'}
Invoke-WebRequest -Method POST -Uri http://localhost:4001/api/contact -Body $postData -UseBasicParsing
