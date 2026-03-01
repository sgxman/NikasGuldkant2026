mkdir webp-1600 -ErrorAction SilentlyContinue
mkdir webp-800 -ErrorAction SilentlyContinue
mkdir webp-400 -ErrorAction SilentlyContinue

magick mogrify -path webp-1600 -format webp -quality 82 -resize 1600x1600^> *.jpg
magick mogrify -path webp-800 -format webp -quality 80 -resize 800x800^> *.jpg
magick mogrify -path webp-400 -format webp -quality 75 -resize 400x400^> *.jpg

Write-Host "Klar!"