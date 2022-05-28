from flask import Flask, render_template, jsonify

app = Flask(__name__, template_folder="../frontend/template")

def algo():
    # calling the Models function here
    return None


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api', methods=["POST", "GET"])
def base():
    result= algo()
    solutions = {
        'name': "fake news apis",
        'Authenticity': True,
        'status': 200
    }
    return jsonify(solutions=solutions)


if __name__ == "__main__":
    app.run(debug=True)
