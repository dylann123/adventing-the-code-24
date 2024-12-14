# Parse data frfr

data = ""
with open('./input.txt', 'r') as file:
    data = file.read()

x1 = []
x2 = []
xv = []
y1 = []
y2 = []
yv = []

chunks = data.split("\n\n")
for chunk in chunks:
    x1.append(chunk.split("X+")[1].split(",")[0])
    x2.append(chunk.split("X+")[2].split(",")[0])
    xv.append(chunk.split("X=")[1].split(",")[0])
    y1.append(chunk.split("Y+")[1].split("\n")[0])
    y2.append(chunk.split("Y+")[2].split("\n")[0])
    yv.append(chunk.split("Y=")[1].split("\n")[0])

with open('./out.txt', 'w') as file:
    file.write("["+",".join(x1)+"]\n")
    file.write("["+",".join(x2)+"]\n")
    file.write("["+",".join(xv)+"]\n")
    file.write("["+",".join(y1)+"]\n")
    file.write("["+",".join(y2)+"]\n")
    file.write("["+",".join(yv)+"]\n")