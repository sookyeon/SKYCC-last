from flask import Flask # Flask
from flask import request
from slack_sdk import WebClient
import json
import time, os
from werkzeug.utils import secure_filename
import image_convert

app = Flask(__name__)
channel_id = ""
slack_token = ""
web = WebClient(slack_token)
uweb = WebClient(")

ID = "U05770P7L31"

def get_members_positions():
    user_list = web.users_list()
    members = []
    for user in user_list["members"]:
        if user["is_bot"]:
            continue
#         print(user)
        members.append({"name": user['profile']["display_name"], "position": user['profile']["title"], "user_id":user['id']})

    return members
def find_members_by_position(position):
    members_positions = get_members_positions()
    correct_members = []
    for member in members_positions:
        if member["position"] == position: correct_members.append(member)
    return correct_members

def create_private_channel(user_id1, user_id2, c_name, greeting_msg="두 분이 매칭되었습니다! by onboarding"):
    response_1 = web.conversations_create(
        is_private=True,
        name = c_name,
    )
    channel_id = response_1["channel"]["id"]
    
#     web.stars_add(channel=channel_id)
    response_2 = web.conversations_invite(
        channel=channel_id,
        users= user_id1 +"," + user_id2
    )
    
    response_3 = web.chat_postMessage(
        channel=channel_id,
        text=greeting_msg
    )
    
    return response_1, response_2, response_3

def set_profile_image(user_id, image_file):
    f = open(image_file, "rb")
    image_data = f.read()
    response = uweb.users_setPhoto(
        user=user_id,
        image=image_data)

@app.route('/users')
def users():
	# users 데이터를 Json 형식으로 반환한다
    return {"members": [{ "id" : 1, "name" : "yerin" },
    					{ "id" : 2, "name" : "dalkong" }]}
           

@app.route("/mate_post",methods=['POST'])
def mate_post():
    params = json.loads(request.get_data(), encoding='utf-8')
    print(params)
    parts = params["parts"]
    title = params["title"]
    text = params["textarea"]
    mapdict = {"프로덕트 디자이너": "디자인:프로덕트",
               "프론트엔드 개발자": "개발:frontend",
               "백엔드 개발자": "개발:backend",}

    matching_id = find_members_by_position(mapdict[parts]+" "+title)[0]["user_id"]
    # print(matching_id)
    time.sleep(0.1)
    greeting = "두 분이 매칭되었습니다!\n" + "메이트에게 전하고 싶은말은\n" + text
    create_private_channel(ID, matching_id, "데모용메칭채널2", greeting_msg=greeting)
    return "good"

@app.route("/image_post",methods=['POST'])
def image_post():
    image_path = "./img"
    file = request.files["file"]
    print(request)
    filename = secure_filename(file.filename)
    os.makedirs(image_path, exists_ok=True)
    file.save(os.path.join(image_path, filename))
    print("testestse")
    return filename


@app.route("/file_post",methods=['POST'])
def file_post():
    image_path = "./file"
    file = request.files["file"]
    print(request)
    filename = secure_filename(file.filename)
    os.makedirs(image_path, exist_ok=True)
    file.save(os.path.join(image_path, filename))
    print("testestse")
    return filename

if __name__ == "__main__":
	app.run()

# if __name__ == "__main__":
#     app.run(debug = True)
