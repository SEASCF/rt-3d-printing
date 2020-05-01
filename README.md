# rt-3d-printing
A web app that simplifies the 3d printing process for lab techs


# requirements 
* python 3
* flask
* rt
* python-dotenv

# how do? 
``` ssh rebeccalshanley@3dtrack.seas.gwu.edu ```  

run ``` gunicorn3 --workers=3 flask_app:app ``` while in the repo

# common errors 
* if you get the error that the server is in use but no one is using it...
``` sudo fuser -k 8000/tcp ```

# credits
* Art from Stackoverflow for refresh code -> https://stackoverflow.com/users/330617/art



