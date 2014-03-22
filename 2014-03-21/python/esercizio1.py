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
VIEW(plants)

