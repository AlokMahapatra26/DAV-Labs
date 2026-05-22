#!/usr/bin/env python3
"""
Trim whitespace from the logo and generate a properly sized favicon
that fills the full icon area.
"""
from PIL import Image
import os

# Paths
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
logo_path = os.path.join(base_dir, "public", "logo.png")
favicon_path = os.path.join(base_dir, "src", "app", "favicon.ico")

# Open the logo
img = Image.open(logo_path).convert("RGBA")
print(f"Original size: {img.size}")

# Get the bounding box of non-white/non-transparent pixels
bbox = img.getbbox()
if bbox:
    print(f"Content bounding box: {bbox}")
    cropped = img.crop(bbox)
    print(f"Cropped size: {cropped.size}")
else:
    cropped = img

# More aggressive trim of near-white pixels
pixels = cropped.load()
w, h = cropped.size

min_x, min_y, max_x, max_y = w, h, 0, 0
threshold = 240

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 30 and (r < threshold or g < threshold or b < threshold):
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

if max_x > min_x and max_y > min_y:
    pad_x = max(int((max_x - min_x) * 0.03), 3)
    pad_y = max(int((max_y - min_y) * 0.03), 3)
    min_x = max(0, min_x - pad_x)
    min_y = max(0, min_y - pad_y)
    max_x = min(w, max_x + pad_x + 1)
    max_y = min(h, max_y + pad_y + 1)
    
    cropped = cropped.crop((min_x, min_y, max_x, max_y))
    print(f"Tight crop size: {cropped.size}")

# Make it square
cw, ch = cropped.size
size = max(cw, ch)
square = Image.new("RGBA", (size, size), (0, 0, 0, 0))
offset_x = (size - cw) // 2
offset_y = (size - ch) // 2
square.paste(cropped, (offset_x, offset_y))
print(f"Square size: {square.size}")

# Save as ICO with multiple sizes
icon_sizes = [16, 32, 48, 64, 128, 256]
images_for_ico = []
for s in icon_sizes:
    resized = square.resize((s, s), Image.Resampling.LANCZOS)
    images_for_ico.append(resized)

# Save using the proper ICO method
images_for_ico[0].save(
    favicon_path,
    format="ICO",
    sizes=[(s, s) for s in icon_sizes],
    append_images=images_for_ico[1:]
)

final_size = os.path.getsize(favicon_path)
print(f"Favicon saved to: {favicon_path} ({final_size} bytes)")

# Also save a PNG version for verification
png_path = os.path.join(base_dir, "public", "favicon_preview.png")
square.resize((256, 256), Image.Resampling.LANCZOS).save(png_path, format="PNG")
print(f"Preview PNG saved to: {png_path}")
print("Done!")
