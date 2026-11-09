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
Add-Type -AssemblyName System.IO.Compression
if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive }
$zip = [System.IO.Compression.ZipFile]::Open($archive, [System.IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($file in Get-ChildItem -LiteralPath $exportRoot -Recurse -File -Force) {
        $entryName = $file.FullName.Substring($exportRoot.Length + 1).Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
} finally {
    $zip.Dispose()
}
Write-Output "Listo: $archive"
Write-Output 'Extrae el contenido del ZIP directamente en public_html del dominio.'
