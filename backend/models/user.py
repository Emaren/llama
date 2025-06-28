class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(100))
    full_name = db.Column(db.String(100))

    def __init__(self, email, password, full_name):
        self.email = email
        self.password = password
        self.full_name = full_name

