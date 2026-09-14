$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$exportRoot = Join-Path $projectRoot 'out'
foreach ($required in @('index.html', '404.html', '.htaccess', 'sitemap.xml', 'robots.txt')) {
    if (-not (Test-Path -LiteralPath (Join-Path $exportRoot $required))) {
        throw "Falta $required en out/. Ejecuta npm run build."
    }
}
$artifactRoot = Join-Path $projectRoot 'artifacts'
New-Item -ItemType Directory -Force -Path $artifactRoot | Out-Null
$archive = Join-Path $artifactRoot 'atelier-romain-hostinger.zip'
Add-Type -AssemblyName System.IO.Compression.FileSystem
if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive }
[System.IO.Compression.ZipFile]::CreateFromDirectory($exportRoot, $archive)
Write-Output "Listo: $archive"
Write-Output 'Extrae el contenido del ZIP directamente en public_html del dominio.'
