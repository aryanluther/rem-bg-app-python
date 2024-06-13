from flask import Flask, render_template, request, send_file, flash
from rembg import remove
from PIL import Image, UnidentifiedImageError
from io import BytesIO

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Necessary for flash messages

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file uploaded')
            return render_template('index.html'), 400
        
        file = request.files['file']
        if file.filename == '':
            flash('No file selected')
            return render_template('index.html'), 400
        
        try:
            input_image = Image.open(file.stream)
            output_image = remove(input_image, post_process_mask=True)
            img_io = BytesIO()
            output_image.save(img_io, 'PNG')
            img_io.seek(0)
            return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='rmbg.png')
        except UnidentifiedImageError:
            flash('The uploaded file is not a valid image')
            return render_template('index.html'), 400
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5100)
