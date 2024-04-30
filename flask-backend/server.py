from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId

# setup and connection
app = Flask(__name__)
CORS(app) 
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
# client = MongoClient("mongodb+srv://admin:capstone-proj-group-1@cluster0.ijebvxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
client = MongoClient("mongodb+srv://admin:capstone-proj-group-1@cluster0.ijebvxh.mongodb.net/")
db = client["Email-Chatbot"]

# database schema
if "drafts" not in db.list_collection_names():
    db.create_collection("drafts")
if "sent" not in db.list_collection_names():
    db.create_collection("sent")
if "inbox" not in db.list_collection_names():
    db.create_collection("inbox")

email_schema = {
    "from": {"type": "string", "required": True},
    "to": {"type": "string", "required": True},
    "subject": {"type": "string", "required": True},
    "body": {"type": "string", "required": True}
}

draft_schema = {
    "user_id": {"type": "string", "required": True},
    "emails": {"type": "list", "schema": email_schema}
}

sent_schema = {
    "user_id": {"type": "string", "required": True},
    "emails": {"type": "list", "schema": email_schema}
}

inbox_schema = {
    "user_id": {"type": "string", "required": True},
    "emails": {"type": "list", "schema": email_schema}
}

user_schema = {
    "name": {"type": "string", "required": True},
    "email": {"type": "string", "required": True},
    "password": {"type": "string", "required": True},
    "emails": {"type": "list", "schema": {
        "type": "dict",
        "schema": {
            "to": {"type": "string", "required": True},
            "subject": {"type": "string", "required": True},
            "body": {"type": "string", "required": True}
        }
    }},
    "drafts": {"type": "list", "schema": {
        "type": "dict",
        "schema": {
            "to": {"type": "string", "required": True},
            "subject": {"type": "string", "required": True},
            "body": {"type": "string", "required": True}
        }
    }},
    "sent": {"type": "list", "schema": {
        "type": "dict",
        "schema": {
            "from": {"type": "string", "required": True},
            "to": {"type": "string", "required": True},
            "subject": {"type": "string", "required": True},
            "body": {"type": "string", "required": True}
        }
    }},
    "inbox": {"type": "list", "schema": {
        "type": "dict",
        "schema": {
            "from": {"type": "string", "required": True},
            "to": {"type": "string", "required": True},
            "subject": {"type": "string", "required": True},
            "body": {"type": "string", "required": True}
        }
    }}
}

# routes 

# test route for debugging
@app.route('/test', methods=['POST'])
def test_route():
    # Display the request method (e.g., POST, GET, etc.)
    print(f"Request method: {request.method}")

    # Display the request headers
    print("Request headers:")
    for key, value in request.headers.items():
        print(f"{key}: {value}")

    # Display the request data (JSON format)
    print("Request data:")
    data = request.get_json()
    if data:
        print(data)
    else:
        print("No JSON data in request")

    return jsonify({'message': 'Request received'})

@app.route('/create', methods=['POST'])
def create_user():
    try:
        data = request.json

        if not data.get('name') or not data.get('email') or not data.get('password'):
            return jsonify({'message': 'Missing one or many fields'}), 400

        existing_user = db.users.find_one({"email": data['email']})
        if existing_user:
            return jsonify({'message': 'Email already registered'}), 400

        result = db.users.insert_one(data)
        inserted_id = str(result.inserted_id)

        db.drafts.insert_one({"user_id": inserted_id, "emails": []})
        db.sent.insert_one({"user_id": inserted_id, "emails": []})
        db.inbox.insert_one({"user_id": inserted_id, "emails": []})

        return jsonify({'message': 'User registered successfully', 'user_id': inserted_id}), 201

    except Exception as e:
        app.logger.error(f"Error registering user: {str(e)}")
        return jsonify({'message': 'Error registering user'}), 500

@app.route('/login', methods=['POST'])
def login_user():
    try:
        data = request.json

        if not data.get('email') or not data.get('password'):
            return jsonify({'message': 'Missing one or many fields'}), 400

        user = db.users.find_one({"email": data['email']})
        
        if not user:
            return jsonify({'message': 'Invalid username/password'}), 400
        
        if user['password'] != data['password']:
            return jsonify({'message': 'Incorrect password'}), 400
        
        return jsonify({'message': 'Login successful', 'user_id': str(user['_id'])}), 200

    except Exception as e:
        app.logger.error(f"Error logging in user: {str(e)}")
        return jsonify({'message': 'Error logging in user'}), 500

@app.route('/new-email-draft', methods=['POST'])
def add_draft():
    try:
        data = request.json

        if not data.get('user_id') or not data.get('email'):
            return jsonify({'message': 'Missing user_id or email'}), 400

        db.drafts.update_one({'user_id': data['user_id']}, {'$push': {'emails': data['email']}}, upsert=True)

        return jsonify({'message': 'Draft added successfully'}), 200

    except Exception as e:
        app.logger.error(f"Error adding draft: {str(e)}")
        return jsonify({'message': 'Error adding draft'}), 500

@app.route('/drafts', methods=['GET'])
def get_drafts():
    try:
        user_id = request.args.get('user_id')
        drafts = db.drafts.find({"user_id": user_id})
        draft_emails = [draft for draft in drafts]
        return jsonify({'emails': draft_emails})
    except Exception as e:
        app.logger.error(f"Error fetching drafts: {str(e)}")
        return jsonify({'message': 'Error fetching drafts'}), 500
        
# @app.route('/add-email', methods=['POST'])
# def add_email():
#     data = request.json
#     user_id = data['user_id']
#     email = {
#         'to': data['to'],
#         'subject': data['subject'],
#         'body': data['body']
#     }
#     db.users.update_one({'_id': ObjectId(user_id)}, {'$push': {'emails': email}})
#     return jsonify({'message': 'Email added successfully'})

if __name__ == "__main__":
    app.run(debug=True)

