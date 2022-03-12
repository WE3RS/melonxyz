from flask import Flask

app = Flask(__name__)

app.config["SECRET_KEY"] = "xyz"

@app.route("/")
def strona():
    return "..."

if(__name__) == "__main__":
    app.run(debug=True)