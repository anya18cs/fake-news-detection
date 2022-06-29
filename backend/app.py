from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__, template_folder="../frontend/template")

def getNews(title):
    # calling the Models function here

    return True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api', methods=["POST"])
def base():
    data = request.get_json()
    data = json.dumps(data)
    data_load = json.loads(data)
    newstitle = data_load['newsId']['title']
    result = getNews(newstitle)
    solutions = {
        'title': newstitle,
        'Authenticity': result,
        'status': "Successfully Retrieved Result"
    }
    return jsonify(data=solutions)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
