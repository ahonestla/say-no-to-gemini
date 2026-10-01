# Build script for Chrome/Edge Web Store submission (Windows PowerShell)

$DistDir = "dist"
$ZipFile = "say-no-to-gemini.zip"
$ZipPath = Join-Path $DistDir $ZipFile

Write-Host "Building Say No To Gemini extension package..." -ForegroundColor Green

# Create dist directory if it doesn't exist
if (-not (Test-Path $DistDir)) {
    New-Item -ItemType Directory -Path $DistDir | Out-Null
}

# Remove old zip if exists
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath
}

# Files to include
$FilesToInclude = @(
    "manifest.json",
    "content.js",
    "background.js",
    "popup/popup.html",
    "popup/popup.css",
    "popup/popup.js",
    "icons/16.png",
    "icons/48.png",
    "icons/128.png",
    "LICENSE",
    "README.md",
    "QUICKSTART.md"
)

# Create a temporary folder for compression
$TempDir = Join-Path $DistDir "temp"
if (Test-Path $TempDir) {
    Remove-Item $TempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $TempDir | Out-Null

# Copy files to temp directory
foreach ($file in $FilesToInclude) {
    $source = $file
    $dest = Join-Path $TempDir $file
    $destDir = Split-Path $dest
    
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $dest -Force
    } else {
        Write-Host "Warning: File not found: $source" -ForegroundColor Yellow
    }
}

# Compress to zip
Compress-Archive -Path "$TempDir\*" -DestinationPath $ZipPath -Force

# Clean up temp folder
Remove-Item $TempDir -Recurse -Force

Write-Host "Package created: $ZipPath" -ForegroundColor Green
Write-Host "Ready for store submission!" -ForegroundColor Green