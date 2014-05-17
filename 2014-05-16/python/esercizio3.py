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

def cycle(blocchi,merge,modifica,colorefont,sizefont,vedi):
	bloccchiMod=[]
	
	j=0
	for blocco in blocchi:
		toMerge=merge[j] 
		mod=modifica[j]
		V,CV = blocco
		cell = MKPOL([bagno[0],[[v+1 for v in  bagno[1][toMerge]]],None])
		#VIEW(STRUCT([hpc,cell]))
		
		#diagram = assemblyDiagramInit(x)([pts])
		#diagram=assemblyDiagramInit([3,1,3])([[.4,.5,2],[.3],[1,1.2,.5]])
		diagram=mod
		bloccchiMod.append(diagram2cell(diagram,blocco,toMerge))	
		blocco=diagram2cell(diagram,blocco,toMerge)	
		j=j+1
		if vedi==True:
			hpcb= SKEL_1(STRUCT(MKPOLS(blocco)))
			hpcb = cellNumbering (blocco,hpcb)(range(len(blocco[1])),colorefont,sizefont)		
			VIEW(hpcb)
	return bloccchiMod		















DRAW = COMP([VIEW,STRUCT,MKPOLS])

bagno = assemblyDiagramInit([3,2,2])([[.3,3,.3],[3,.3],[.3,2.7]])
modifica=assemblyDiagramInit([3,1,3])([[.4,.5,2],[.3],[1,1.2,.5]])
b=cycle([bagno],[7],[modifica],CYAN,1,True)
d= SKEL_1(STRUCT(MKPOLS(b[0])))
c = cellNumbering (b[0],d)(range(len(b[0][1])),CYAN,1)
VIEW(c)
