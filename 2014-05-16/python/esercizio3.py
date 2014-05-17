from pyplasm import *
from scipy import *
import os,sys
""" import modules from larcc/lib """
sys.path.insert(0, '/home/j-hard/Programmazione/python/lib/lar-cc/lib/py/')

from architectural import *
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from sysml import *


#parametri (signature) array di blocchi, cella x il merge, array di blocchi x la modifica (mod[i] si sottrae a blocchi[i]), colore del fonte e size del font, flag x stampare a video 
def mergingNumberingElimination(blocchi,merge,modifica):
	blocchiMod=[]
	
	j=0
	for blocco in blocchi:
		toMerge=merge[j] 
		mod=modifica[j]
		V,CV = blocco
		cell = MKPOL([bagno[0],[[v+1 for v in  bagno[1][toMerge]]],None])
		
		diagram=mod
		blocchiMod.append(diagram2cell(diagram,blocco,toMerge))	
		blocco=diagram2cell(diagram,blocco,toMerge)	
		j=j+1
		hpcb= SKEL_1(STRUCT(MKPOLS(blocco)))
		hpcb = cellNumbering (blocco,hpcb)(range(len(blocco[1])),CYAN,1)		
		VIEW(hpcb)
	return blocchiMod		

#parametri (signature) array di blocchi, cella x il merge, array di blocchi x la modifica (mod[i] si sottrae a blocchi[i]), colore del fonte e size del font, flag x stampare a video 
def mergingNumberingEliminationAlt(blocchi,merge,modifica,colorefont,sizefont,vedi):
	blocchiMod=[]
	
	j=0
	for blocco in blocchi:
		toMerge=merge[j] 
		mod=modifica[j]
		V,CV = blocco
		cell = MKPOL([bagno[0],[[v+1 for v in  bagno[1][toMerge]]],None])
		
		diagram=mod
		blocchiMod.append(diagram2cell(diagram,blocco,toMerge))	
		blocco=diagram2cell(diagram,blocco,toMerge)	
		j=j+1
		if vedi==True:
			hpcb= SKEL_1(STRUCT(MKPOLS(blocco)))
			hpcb = cellNumbering (blocco,hpcb)(range(len(blocco[1])),colorefont,sizefont)		
			VIEW(hpcb)
	return blocchiMod		


DRAW = COMP([VIEW,STRUCT,MKPOLS])

bagno = assemblyDiagramInit([3,2,2])([[.3,3,.3],[3,.3],[.3,2.7]])
modifica=assemblyDiagramInit([3,1,3])([[.4,.5,2],[.3],[1,1.2,.5]])
b=mergingNumberingEliminationAlt([bagno],[7],[modifica],CYAN,1,True)
n=mergingNumberingElimination([bagno],[7],[modifica])
d= SKEL_1(STRUCT(MKPOLS(b[0])))
c = cellNumbering (b[0],d)(range(len(b[0][1])),CYAN,1)
VIEW(c)
