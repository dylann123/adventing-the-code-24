#requires 2 tuples representing coords
#returns row change, then col
#aiming for left minus right
def dist(n1, n2):
    rowChange = 0
    colChange = 0
    secondOnLeft = False

    if n1[1] < n2[1]: 
        colChange = n1[1] - n2[1]
        rowChange = n1[0] - n2[0]
        secondOnLeft = False
    else:
        colChange = n2[1] - n1[1]
        rowChange = n2[0] - n1[0]
        secondOnLeft = True

    return (rowChange, colChange, secondOnLeft)


input = open('day8/inp.txt').read().split('\n')

nodes = {}
for row, i in enumerate(input):
    for col, j in enumerate(i):
        if not j == ".":
            if j in nodes:
                nodes[j].append((row, col))
            else:
                nodes[j] = [(row,col)]

anti = []
for n in nodes.keys():
    anti+=nodes[n]
    for i in nodes[n]:
        for j in nodes[n]:
            if i == j:
                continue
            
            tempDist = dist(i, j)
            if tempDist[2]:
                row = j[0] + tempDist[0]
                col = j[1] + tempDist[1]
                while row  < len(input) and col < len(input[0]) and  row  >=0 and col >=0:
                    anti.append((row, col))
                    row += tempDist[0]
                    col += tempDist[1]

                row = i[0] - tempDist[0]
                col = i[1] - tempDist[1]
                while row  >=0 and col >=0 and  row < len(input) and col < len(input[0]):
                    anti.append((row, col))
                    row -= tempDist[0]
                    col -= tempDist[1]
            else:
                row = i[0] + tempDist[0]
                col = i[1] + tempDist[1]
                while row < len(input) and col < len(input[0]) and row  >=0 and col >=0:
                    anti.append((row, col))
                    row += tempDist[0]
                    col += tempDist[1]

                row = j[0] - tempDist[0]
                col = j[1] - tempDist[1]
                while row  >=0 and col >=0 and  row < len(input) and col < len(input[0]):
                    anti.append((row, col))
                    row -= tempDist[0]
                    col -= tempDist[1]

anti = list(set(anti))
anti.sort()
pain = []
for i in anti:
    if i[0] >= len(input) or i[1] >= len(input[0]) or i[0] < 0 or i[1] < 0:
        pass
    else:
        pain.append(i)

pain.sort()
print(pain)
print(len(pain))