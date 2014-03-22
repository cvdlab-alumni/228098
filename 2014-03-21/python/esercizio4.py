
from pyplasm import *

pts0=[[-20,-20],[70,-20],[70,70],[-20,70]]
pts1=[[0,0],[53,0],[53,53],[0,53]]
pts2=[[6,6],[47,6],[47,47],[6,47]]
cells=[[1,2,3,4]]
pols=None
floor0=MKPOL([pts0,cells,pols])
floor1=COLOR(ORANGE)(T([1,2,3])([0,0,10])(MKPOL([pts1,cells,pols])))
floor2=COLOR(YELLOW)(T([1,2,3])([0,0,19])(MKPOL([pts1,cells,pols])))
floor3=COLOR(GREEN)(T([1,2,3])([0,0,28])(MKPOL([pts1,cells,pols])))
floor4=COLOR(BROWN)(T([1,2,3])([0,0,37])(MKPOL([pts1,cells,pols])))
floor5=COLOR(WHITE)(T([1,2,3])([0,0,46])(MKPOL([pts1,cells,pols])))
floor6=COLOR(BLUE)(T([1,2,3])([0,0,55])(MKPOL([pts1,cells,pols])))
floor7=COLOR(BLACK)(T([1,2,3])([0,0,64])(MKPOL([pts2,cells,pols])))
plants=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6,floor7])
pts0=[[0,0],[53,0],[53,60],[0,60]]
pts1=[[6.2,0],[46.6,0],[46.6,64],[6.2,64]]

cells0=[[1,2,3,4]]
pols0=None
pts3=[[5.8,0],[0.8,0],[0.8,6.6],[5.8,6.6]]
pts4=[[5.8,0],[0.8,0],[0.8,5.6],[5.8,5.6]]

def disk2D(r):
	u,v=r
	return [v*COS(u),v*SIN(u)]

d2d=PROD([INTERVALS(2*PI)(32),INTERVALS(2.5)(3)])
disk=MAP(disk2D)(d2d)

window0=STRUCT([MKPOL([pts3,cells0,pols0]),T([1,2])([3.3,6.6])(disk)])
windows0=STRUCT([T([1])([(i*5.8)])(window0) for i in range(9)])
plane0=DIFFERENCE([MKPOL([pts0,cells0,pols0]), windows0])

windowl1=STRUCT([MKPOL([pts4,cells0,pols0]),T([1,2])([3.3,5.6])(disk)])
windowsl1=STRUCT([T([1,2])([(i*5.8),10])(windowl1) for i in range(9)])
windows1=STRUCT([T([2])([(i*9)])(windowsl1) for i in range(5)])
plane=DIFFERENCE([plane0, windows1])


windows01=STRUCT([T([1])([5.7+(i*5.8)])(window0) for i in range(7)])
plane01=DIFFERENCE([MKPOL([pts1,cells0,pols0]), windows0])

windowsl01=STRUCT([T([1,2])([5.7+(i*5.8),10])(windowl1) for i in range(7)])
windows01=STRUCT([T([2])([(i*9)])(windowsl01) for i in range(5)])
plane1=DIFFERENCE([plane01, windows01])
#plane1=STRUCT([plane1,COLOR(BLUE)(windows01)])


#VIEW(plane1)
n=STRUCT([T([1,2,3])([0,0,53])(plane),T([1,2,3])([0,0,46.8])(plane1)])
s=STRUCT([T([1,2,3])([0,0,0])(plane),T([1,2,3])([0,0,6.4])(plane1)])

w=STRUCT([T([1,2,3])([0,0,53])(plane),T([1,2,3])([0,0,46.8])(plane1)])
e=STRUCT([T([1,2,3])([0,0,0])(plane),T([1,2,3])([0,0,6.4])(plane1)])
nord=MAP([S3,S1,S2])(n)

sud=MAP([S3,S1,S2])(s)

est=MAP([S1,S3,S2])(w)
ovest=MAP([S1,S3,S2])(e)
north=nord
south=sud
east=est
west=ovest

prospects=STRUCT([north,south,east,west])

VIEW(prospects)


pts6=[[-20.2,-20.2],[70.2,-20.2],[70.2,70.2],[-20.2,70.2]]
pts7=[[-20.4,-20.4],[70.4,-20.4],[70.4,70.4],[-20.4,70.4]]
pts8=[[-20.6,-20.6],[70.6,-20.6],[70.6,70.6],[-20.6,70.6]]
pts9=[[-20.8,-20.8],[70.8,-20.8],[70.8,70.8],[-20.8,70.8]]
pts10=[[-21,-21],[71,-21],[71,71],[-21,71]]
scale1=COLOR(ORANGE)(T([1,2,3])([0,0,-0.2])(PROD([MKPOL([pts6,cells,pols]),Q(0.2)])))
scale2=COLOR(YELLOW)(T([1,2,3])([0,0,-0.4])(PROD([MKPOL([pts6,cells,pols]),Q(0.2)])))
scale3=COLOR(GREEN)(T([1,2,3])([0,0,-0.6])(PROD([MKPOL([pts6,cells,pols]),Q(0.2)])))
scale4=COLOR(BROWN)(T([1,2,3])([0,0,-0.8])(PROD([MKPOL([pts6,cells,pols]),Q(0.2)])))
scale5=COLOR(WHITE)(T([1,2,3])([0,0,-1])(PROD([MKPOL([pts6,cells,pols]),Q(0.2)])))
scale=STRUCT([scale5,scale4,scale3,scale2,scale1])
VIEW(STRUCT([plants,prospects,scale]))
VIEW(scale)