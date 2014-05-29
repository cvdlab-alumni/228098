""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
""" import modules from larcc/lib """
sys.path.insert(0, '/home/j-hard/Programmazione/python/lib/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([9,15,2])([[.3,3.9,.1,.2,.1,.8,.1,2,.3],[.1,1,.3,3.9,.1,2,.1,2.9,.3,2.7,.3,1,.1,1.9,.3],[.3,2.7]])
open1 = assemblyDiagramInit([3,1,3])([[1,1,.9],[.3],[1,1.2,.5]])#finestra camera
open2 = assemblyDiagramInit([3,1,3])([[.5,1,.4],[.3],[1,1.2,.5]])#finestra studio
open3 = assemblyDiagramInit([1,1,2])([[1],[.3],[2.2,.5]])#porta ingresso
open4 = assemblyDiagramInit([1,3,2])([[.1],[1.9,1,1],[2.2,.5]])#porta camera
open5 = assemblyDiagramInit([1,2,2])([[.1],[1,1],[2.2,.5]])#porta camera
open6 = assemblyDiagramInit([3,1,2])([[.5,1,1.2],[.3],[2.2,.5]])#porta bagno1
open7 = assemblyDiagramInit([3,1,2])([[.5,1,1.2],[.1],[2.2,.5]])#porta bagno2

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering(master,hpc)(range(len(master[1])),CYAN,1)
VIEW(hpc)
 
master = diagram2cell(open1,master,35)
master = diagram2cell(open2,master,214)
master = diagram2cell(open3,master,154)
master = diagram2cell(open4,master,66)
master = diagram2cell(open5,master,69)
master = diagram2cell(open6,master,226)
master = diagram2cell(open7,master,229)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,.5)
VIEW(hpc)

emptyChain = [1,3,31,32,30,206,207,208,148,149,178,235,33,209,46,163,222,40,36,212,216,183,187,224,48,44,46,163,52,56,230,173,295,301,267,281,276,285,289,57,58,203,150,2,233,236,179,153,183,214,218,220,222,187,191,161,157,155,163,234,62,90,149,178,150,60,177,147,176,120,61,89,88,87,120,0,118,119,59,117,55,27,26,29,227,169,199,83,84,85,86,28,94,124,98,128,102,132,106,136,104,134,110,140,80,83,84,85,86,165,195,193,159,189,185,96,126,100,130,72,74,76]
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
exteriorCV += exteriorCells(master)

DRAW((master[0],solidCV))

CV = solidCV + exteriorCV
V = master[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS(B_Rep)))
VIEW(STRUCT(MKPOLS(B_Rep)))