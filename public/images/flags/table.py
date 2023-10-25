import glob

path = "/home/sachin/tmp/flags/"

ls = glob.glob(path + "*.jpg")

for f in ls:
    f = f.replace(path, "")
    n = f.replace(".jpg", "")
    n = n.replace("_", " ")
    n = n.title()
    out = "<td style={{padding: '30px'}}><a href='#'><img src='./images/flags/" + f + "'/><br/>" + n + "</a></td>" 
    print(out)
