# Import flask and datetime module for showing date and time
# from crypt import methods
from urllib import response
from flask import Flask
from flask.globals import request
from flask.json import jsonify
import http
import json
import requests
from flask import Response
import numpy as np
import pandas as pd
from sklearn.svm import SVR
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from flask_cors import CORS, cross_origin

#model

ds = pd.read_csv('dataset311000.csv')
y = ds['waiting_time'].copy()
x = ds.drop('waiting_time', axis=1).copy()
X_train, X_valid, y_train, y_valid = train_test_split(
    x, y, random_state=0, test_size=0.25)
regressor = SVR(kernel='rbf')
regressor.fit(X_train, y_train)
r = regressor.score(X_train, y_train)
print('accuracy : '+str(r))
y_pred = regressor.predict(X_valid)
r = regressor.score(X_valid, y_pred)

# Initializing flask app
app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/time": {"origins": "http://localhost:3000"}})


# api
@app.route('/time', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])

def time():
    day = ""
    if request.method == 'POST':
        print('=========')
        t_variable = request.get_data().decode('UTF-8')
        data_array=json.loads(t_variable)
        day = data_array['day']
        position = data_array['position']
        type =data_array['type']
        print(day)

    # response = jsonify({'day': day})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # response.headers.add('Content-Type', 'application/json')
    predicted = regressor.predict([Integer.parseInt(day), Integer.parseInt(position), Integer.parseInt(type)])
    return jsonify(predicted)
    # return jsonify(day=data_array['day'], position=data_array['position'])
    print('sdf')
    error = []
    for i in input:
        try:
            inputData = form_data[i]
        except:
            error.append(i)
    if not error == []:
        return jsonify({
            "error": "not enough inputs",
            "inputs missing": error
        }), http.HTTPStatus.BAD_REQUEST
    else:
        predicted = regressor.predict(inputData)
        # here change the url to the nodes url
        # a = requests.post('http://127.0.0.1:5000/api',
        #                   json={'prediction': predicted})
        if a.status_code == http.HTTPStatus.OK:
            return jsonify({
                'prediction': predicted
            }), http.HTTPStatus.OK
        else:
            return a.json(), http.HTTPStatus.INTERNAL_SERVER_ERROR



# Running app
if __name__ == '__main__':
    
    app.run(debug=True)
