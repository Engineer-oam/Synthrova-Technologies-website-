import sys
try:
    from PIL import Image
    
    def analyze_image(path):
        try:
            img = Image.open(path).convert('RGBA')
            # Check the top-left pixel for background color
            bg_color = img.getpixel((0, 0))
            print(f"{path}: Top-left pixel is {bg_color}")
            
            # Check center pixels or general brightness
            # to guess if it's meant for light or dark
        except Exception as e:
            print(f"Error reading {path}: {e}")

    analyze_image('public/images/logo-dark.png')
    analyze_image('public/images/logo-white.png')
except ImportError:
    print("Pillow not installed")
