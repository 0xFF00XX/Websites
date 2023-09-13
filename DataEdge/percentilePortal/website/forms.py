from flask_wtf import FlaskForm
from wtforms import StringField, FieldList, FormField, SubmitField

class RowInputForm(FlaskForm):
    name = StringField('Name')
    description = StringField('Description')

class CreateTableForm(FlaskForm):
    table_name = StringField('Table Name')
    columns = FieldList(FormField(RowInputForm), min_entries=1)
    submit = SubmitField('Create Table and Add Data')
