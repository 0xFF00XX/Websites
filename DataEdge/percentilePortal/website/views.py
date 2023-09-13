from flask import Blueprint, render_template, request, redirect
from .forms import CreateTableForm


views = Blueprint('views', __name__)

@views.route('/', methods=['GET','POST'])
def home():

    if request.method == 'POST':
        selected_option = request.form['select']
        print(selected_option)
        return(selected_option)
    return render_template('index.html')
