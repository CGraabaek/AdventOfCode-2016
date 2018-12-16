from collections import Counter

print("Advent Of Code - Day 6")

PUZZLEINPUT = open('input.txt', 'r').readlines()


s1 = []
s2 = []
s3 = []
s4 = []
s5 = []
s6 = []
s7 = []
s8 = []


for line in PUZZLEINPUT:
    s1.append(line[0])
    s2.append(line[1])
    s3.append(line[2])
    s4.append(line[3])
    s5.append(line[4])
    s6.append(line[5])
    s7.append(line[6])
    s8.append(line[7])

c1 = Counter(s1).most_common(1)[0][0]
c2 = Counter(s2).most_common(1)[0][0]
c3 = Counter(s3).most_common(1)[0][0]
c4 = Counter(s4).most_common(1)[0][0]
c5 = Counter(s5).most_common(1)[0][0]
c6 = Counter(s6).most_common(1)[0][0]
c7 = Counter(s7).most_common(1)[0][0]
c8 = Counter(s8).most_common(1)[0][0]


print("Part 1: Keyword is: {}{}{}{}{}{}{}{}".format(c1,c2,c3,c4,c5,c6,c7,c8))


c1p2 = Counter(s1).most_common()[-1][0]
c2p2 = Counter(s2).most_common()[-1][0]
c3p2 = Counter(s3).most_common()[-1][0]
c4p2 = Counter(s4).most_common()[-1][0]
c5p2 = Counter(s5).most_common()[-1][0]
c6p2 = Counter(s6).most_common()[-1][0]
c7p2 = Counter(s7).most_common()[-1][0]
c8p2 = Counter(s8).most_common()[-1][0]


print("Part 2: Keyword is: {}{}{}{}{}{}{}{}".format(c1p2,c2p2,c3p2,c4p2,c5p2,c6p2,c7p2,c8p2))
