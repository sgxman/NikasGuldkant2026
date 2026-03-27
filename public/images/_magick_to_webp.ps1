mkdir webp-1600 -ErrorAction SilentlyContinue
mkdir webp-800 -ErrorAction SilentlyContinue
mkdir webp-400 -ErrorAction SilentlyContinue

magick mogrify -path webp-1600 -format webp -quality 82 -auto-orient -resize 1600x1600^> *.png
magick mogrify -path webp-800 -format webp -quality 80 -auto-orient -resize 800x800^> *.png
magick mogrify -path webp-400 -format webp -quality 75 -auto-orient -resize 400x400^> *.png

#magick mogrify -path webp-1600 -format webp -quality 82 -auto-orient -resize 1600x1600^> *.jpeg
#magick mogrify -path webp-800 -format webp -quality 80 -auto-orient -resize 800x800^> *.jpeg
#magick mogrify -path webp-400 -format webp -quality 75 -auto-orient -resize 400x400^> *.jpeg

#magick mogrify -path webp-1600 -format webp -quality 82 -auto-orient -resize 1600x1600^> *.jpg
#magick mogrify -path webp-800 -format webp -quality 80 -auto-orient -resize 800x800^> *.jpg
#magick mogrify -path webp-400 -format webp -quality 75 -auto-orient -resize 400x400^> *.jpg

# magick mogrify -path webp-1600 -format webp -quality 82 -auto-orient -resize "1600x1600>" *.png
# magick mogrify -path webp-800 -format webp -quality 80 -auto-orient -resize 800x800^> *.png
# magick mogrify -path webp-400 -format webp -quality 75 -auto-orient -resize 400x400^> *.png


Write-Host "Klar!"