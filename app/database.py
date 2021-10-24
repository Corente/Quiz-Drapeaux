import json
countries_path = "./files/db.json"
leaderboard_path = "./files/leaderboard.json"


def database_get_country(id):
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
    file = open(leaderboard_path, 'r')
    data = json.load(file)
    data.sort(key=lambda k: k['score'], reverse=True)
    file.close()
    return data

def database_post_leaderboard(name, score):
    if (name == ""):
        return
    file = open(leaderboard_path, 'r+')
    data = json.load(file)
    entry = {}
    entry["name"] = name
    entry["score"] = score
    data.append(entry)
    file.close()
    file = open(leaderboard_path, "w")
    json.dump(data, file)
    file.close()
