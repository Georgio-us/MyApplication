from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/spin', methods=['GET'])
def spin():
    prize = 1000
    return {'prize': prize}

@app.route('/telegram')
def telegram():
    return redirect('https://t.me/Georgio_P')  # Замените 'your_telegram_username' на свое имя пользователя в Телеграм

if __name__ == '__main__':
    app.run(debug=True)

