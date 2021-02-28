from app import app
from flask import request, jsonify, json
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import  dumps


@app.route('/api',methods=['GET','POST'])
def index():   
    numFibonacci = '' 
    if request.method == 'POST':
        jsonLoad = request.get_json()             
        requestData = jsonLoad['content']                           
        numFibonacci = jsonify([*map(responseSerializer, fibonacciSeries(int(requestData)))])  
    
    return numFibonacci


def fibonacciSeries(num):
    num1 = 0
    num2 = 1
    series = 0
    listSeries = []
    for i in range(num):
        print(series, end=' ');
        num1 = num2;
        num2 = series;
        series = num1 + num2;
        listSeries.append(series)
    
    return listSeries    


def responseSerializer(fibonacciNumbers):
    return{
        'number': fibonacciNumbers
    }
