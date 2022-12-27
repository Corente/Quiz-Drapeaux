import json
import os
import boto3
countries_path = "./files/db.json"
leaderboard_path = "./files/leaderboard.json"

bucket_name = os.environ["AWS_BUCKET_NAME"]

s3 = boto3.resource(
    service_name = "s3",
    region_name = os.environ["AWS_REGION"],
    aws_access_key_id = os.environ["AWS_SECRET_KEY_ID"],
    aws_secret_access_key = os.environ["AWS_SECRET_ACCESS_KEY"]
)

def upload_file(filename):
    if filename == "db":
        s3.Bucket(bucket_name).upload_file(Filename=countries_path, Key="db.json")
    elif filename == "leaderboard":
        s3.Bucket(bucket_name).upload_file(Filename=leaderboard_path, Key="leaderboard.json")
    else:
        print("the fuck you are doing here")

def download_file(filename):
    if filename == "db":
        s3.Bucket(bucket_name).download_file(Filename=countries_path, Key="db.json")
    elif filename == "leaderboard":
        s3.Bucket(bucket_name).download_file(Filename=leaderboard_path, Key="leaderboard.json")
    else:
        print("the fuck you are doing here")

def database_get_country(id):
    download_file("db")
    file = open(countries_path)
    data = json.load(file)
    ret = {}
    for i in data:
        if int(i["id"]) == id:
            ret = i
            break
    file.close()
    return ret
    
def database_get_leaderboard():
    download_file("leaderboard")
    file = open(leaderboard_path, 'r')
    data = json.load(file)
    data.sort(key=lambda k: k['score'], reverse=True)
    file.close()
    return data

def check_if_name_exist(name, database, score):
    for i in database:
        if i["name"] == name and i["score"] < score:
            i["score"] = score
            return True
    return False

def database_post_leaderboard(name, score):
    if (name == ""):
        return
    file = open(leaderboard_path, 'r+')
    data = json.load(file)
    if (check_if_name_exist(name, data, score) == False):
        entry = {}
        entry["name"] = name
        entry["score"] = score
        data.append(entry)
    file.close()
    file = open(leaderboard_path, "w")
    json.dump(data, file)
    file.close()
    upload_file("leaderboard")