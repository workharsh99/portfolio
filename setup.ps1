$ErrorActionPreference = "Continue"
Write-Host "Creating Vite app..."
npx --yes create-vite@latest tmp-app --template react

Write-Host "Moving files..."
Copy-Item -Path "tmp-app\*" -Destination ".\" -Recurse -Force
Copy-Item -Path "tmp-app\.*" -Destination ".\" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Cleaning up temporary Vite folder..."
Remove-Item -Path "tmp-app" -Recurse -Force

Write-Host "Installing dependencies..."
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Write-Host "Setup complete."
