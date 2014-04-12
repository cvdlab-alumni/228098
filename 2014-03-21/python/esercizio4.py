
from pyplasm import *
pts0=[[-20,-20],[73,-20],[73,73],[-20,73]]
pts1=[[0,0],[53,0],[53,53],[0,53]]
pts2=[[6.2,6.2],[46.8,6.2],[46.8,46.8],[6.2,46.8]]
cells=[[1,2,3,4]]
pols=None
floor0=MKPOL([pts0,cells,pols])
floor1=COLOR(ORANGE)(T([1,2,3])([0,0,10])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor2=COLOR(YELLOW)(T([1,2,3])([0,0,19])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor3=COLOR(GREEN)(T([1,2,3])([0,0,28])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor4=COLOR(BROWN)(T([1,2,3])([0,0,37])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor5=COLOR(WHITE)(T([1,2,3])([0,0,46])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor6=COLOR(BLUE)(T([1,2,3])([0,0,55])(PROD([MKPOL([pts1,cells,pols]),Q(-0.3)])))
floor7=COLOR(BLACK)(T([1,2,3])([0,0,64])(MKPOL([pts2,cells,pols])))
plants=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6,floor7])
pts0=[[0,0],[53,0],[53,60],[0,60]]
pts1=[[6.2,0],[46.8,0],[46.8,64],[6.2,64]]

cells0=[[1,2,3,4]]
pols0=None
pts3=[[5.8,0],[0.8,0],[0.8,6.6],[5.8,6.6]]
pts4=[[5.8,0],[0.8,0],[0.8,5.6],[5.8,5.6]]

def disk2D(r):
	u,v=r
	return [v*COS(u),v*SIN(u)]


d2d=PROD([INTERVALS(2*PI)(8),INTERVALS(2.5)(3)])
disk=MAP(disk2D)(d2d)

window0=STRUCT([MKPOL([pts3,cells0,pols0]),T([1,2])([3.3,6.6])(disk)])
windows0=STRUCT([T([1])([(i*5.8)])(window0) for i in range(9)])
plane0=DIFFERENCE([MKPOL([pts0,cells0,pols0]), windows0])

windowl1=STRUCT([MKPOL([pts4,cells0,pols0]),T([1,2])([3.3,5.6])(disk)])
windowsl1=STRUCT([T([1,2])([(i*5.8),10])(windowl1) for i in range(9)])
windows1=STRUCT([T([2])([(i*9)])(windowsl1) for i in range(5)])
plane=DIFFERENCE([plane0, windows1])
#plane=plane0

windows01=STRUCT([T([1])([5.7+(i*5.8)])(window0) for i in range(7)])


windowsl01=STRUCT([T([1,2])([5.7+(i*5.8),10])(windowl1) for i in range(7)])
windows01=STRUCT([T([2])([(i*9)])(windowsl01) for i in range(5)])
windows00=STRUCT([T([1])([(i*5.8)+5.7])(window0) for i in range(7)])
plane01=DIFFERENCE([MKPOL([pts1,cells0,pols0]), windows00])
plane1=DIFFERENCE([plane01, windows01])
 #plane1=STRUCT([COLOR(GREEN)(plane1),COLOR(BLUE)(windows01),COLOR(BLUE)(windows00)])

#plane1=STRUCT([plane1,COLOR(BLUE)(windows01)])


#VIEW(plane1)
n=STRUCT([T([1,2,3])([0,0,53])(PROD([plane, Q(-0.4)])),T([1,2,3])([0,0,46.8])(PROD([plane1, Q(-0.3)]))])
s=STRUCT([T([1,2,3])([0,0,0])(PROD([plane, Q(0.4)])),T([1,2,3])([0,0,6.2])(PROD([plane1, Q(0.3)]))])

w=STRUCT([T([1,2,3])([0,0,53])(PROD([plane, Q(-0.4)])),T([1,2,3])([0,0,46.8])(PROD([plane1, Q(-0.3)]))])
e=STRUCT([T([1,2,3])([0,0,0])(PROD([plane, Q(0.4)])),T([1,2,3])([0,0,6.2])(PROD([plane1, Q(0.3)]))])
nord=MAP([S3,S1,S2])(n)

sud=MAP([S3,S1,S2])(s)

est=MAP([S1,S3,S2])(w)
ovest=MAP([S1,S3,S2])(e)
north=nord
south=sud
east=est
west=ovest

prospects=STRUCT([COLOR(BLACK)(north),COLOR(GREEN)(south),COLOR(YELLOW)(east),west])
#prospects=STRUCT([north,south,east,west])
VIEW(prospects)

pts0=[[-20,-20],[70,-20],[70,70],[-20,70]]
pts1=[[0,0],[53,0],[53,53],[0,53]]
pts2=[[6.2,6.2],[46.8,6.2],[46.8,46.8],[6.2,46.8]]
cells=[[1,2,3,4]]
cells2=[[1,2,3,4,5]]
pols=None


ptsscala=[[0,0],[0.2,0],[0.2, -0.2],[0,-0.2]]
ptscorrimano=[[0,1],[0.2,1],[20, -19],[20,-20],[0,-20]]
#gradino=PROD([MKPOL([ptsscala,cells,pols]),Q(10)])
#gradino2D=MKPOL([ptsscala,cells,pols])
#scala2D=STRUCT([T([1,2,3])([0.2*(x-1),-0.2*(x-1),0])(gradino2D) for x in range(20)])
#scala3D=PROD([scala2D, Q(70)])
gradino3D=PROD([MKPOL([ptsscala,cells,pols]), Q(93)])
corrimano3D=PROD([MKPOL([ptscorrimano,cells2,pols]), Q(0.2)])
VIEW(STRUCT([corrimano3D]))
scala3D0=STRUCT([T([1,2,3])([0.2*(x-1),-0.2*(x-1),0])(gradino3D) for x in range(101)])
scala3D=STRUCT([scala3D0,corrimano3D,T([1,2,3])([0,0,92.8])(corrimano3D)])
scalaEst=T([1,2,3])([-20,73,-0.2])(MAP([S3,S1,S2])(scala3D))

scalaNord=T([1,2,3])([0,53,0])(R([1,2])(-PI/2)(scalaEst))
scalaSud=T([1,2,3])([53,0,0])(R([1,2])(PI/2)(scalaEst))
scalaOvest=T([1,2,3])([53,53,0])(R([1,2])(PI)(scalaEst))

#scalaNord=T([1,2,3])([(70+20-0.2),-20,(0.2-20)])(MAP([S2,S3,S1])(scala3D))
#scalaSud=T([1,2,3])([50,50,0])(R([1,2])(PI)(scalaNord))
#scalaOvest=T([1,2,3])([50,(70-20),0])(R([1,2])(PI)(scalaEst))
#scale=JOIN([COLOR(BLACK)(scalaNord),COLOR(GREEN)(scalaSud)])

scale=STRUCT([COLOR(BLACK)(scalaNord),scalaEst,COLOR(GREEN)(scalaSud),COLOR(YELLOW)(scalaOvest)])
#VIEW(scale)
VIEW(STRUCT([plants,prospects,scale]))