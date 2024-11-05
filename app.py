from flask import Flask, render_template

app = Flask(__name__)

# Головна сторінка
@app.route("/")
def index():
    return render_template("index.html")

# Маршрути для кнопок
@app.route("/action1")
def action1():
    return "Дія для кнопки 1 виконується"

@app.route("/action2")
def action2():
    return "moveMapToLviv()"

@app.route("/action3")
def action3():
    return "Дія для кнопки 3 виконується"

@app.route("/action4")
def action4():
    return "Дія для кнопки 4 виконується"

@app.route("/action5")
def action5():
    return "Дія для кнопки 5 виконується"

@app.route("/action6")
def action6():
    return "moveMapToLviv()"

if __name__ == "__main__":
    app.run(debug=True)
