import sys
from threading import Timer
from backend.helper import *
from backend.exceptions import *
from jinja2 import TemplateNotFound
from webbrowser import open as webbrowser_open
from flask import (
    Flask,
    abort,
    render_template
)


app = Flask(__name__)
log("Starting app...")
k = foreplay()
try:
    if "0" in k:
        raise InitializationErr(f"App unable to initialize, failed with error code: {k}")
    else:
        log(f"App initialized successfully; code: {k}")
except InitializationErr as e:
    log(f"Initialization error: {e}", 3)
    sys.exit(1)


@app.route("/")
def main():
    return render_template("index.html")

@app.route("/donate")
def donate():
    return render_template("donate.html")

@app.route("/shop")
def shop():
    return render_template("shop.html")

@app.route("/coin")
def coin():
    return render_template("coin.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/services/<name>")
def services(name):
    try:
        return render_template(f"{name}.html")
    except TemplateNotFound:
        abort(404)

@app.route("/thankYou")
def thankYou():
    return render_template("thankYou.html")


@app.errorhandler(404)
def not_found_404(e):
    return render_template("404.html"), 404

@app.errorhandler(405)
def not_found_405(e):
    return render_template("405.html"), 405


if __name__ == "__main__":
    try:
        app.run(host="127.0.0.1", port=5050, debug=False)
        # Timer(1, lambda: webbrowser_open("http://"127.0.0.1:5050")).start()
    except KeyboardInterrupt:
        log(r"^C pressed, shutting down app", 1)
        sys.exit(0)
    except Exception as e:
        log(f"Error: {e}", 3)
        raise
