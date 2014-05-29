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

pts=[[0,0],[1,0],[1,1]]
cells=[[1,2,3]]
pols=None
gradinospigolo=PROD([MKPOL([pts,cells,pols]),Q(0.15)])
gradinataspigolo=STRUCT([T([1,2,3])([0,0,1.5])(gradinospigolo),T([1,2,3])([1,1,1.65])(R([1,2])(-PI)(gradinospigolo)),T([1,2,3])([0,2,1.8])(R([1,2])(-PI/2)(gradinospigolo)),T([1,2,3])([1,1,1.95])(R([1,2])(-3*PI/2)(gradinospigolo))])
VIEW(gradinataspigolo)
gradino= CUBOID([0.3,1,0.15])
gradinata1=STRUCT([T([1,2,3])([(3.1-(i*0.3)),0,((i*0.15)+0.30)])(gradino) for i in range(8)])
gradinata2=STRUCT([T([1,2,3])([((i*0.3)+1),1,((i*0.15)+2.1)])(gradino) for i in range(8)])
gradinata=STRUCT([gradinata1,gradinata2,gradinataspigolo])
scale=STRUCT([gradinata])
VIEW(scale)


b1 = BEZIER(S1)([[4.5,-1.5,0],[4.5,-1.5,9]])
b2 = BEZIER(S1)([[4.5,-3,0],[4.5,-3,9]])
b3 = BEZIER(S1)([[5.7,-3,0],#[2,-1,2.5],
[5.7,-3,9]])
b4 = BEZIER(S1)([[5.7,-3,0],[5.7,-3,9]])
#b5 = BEZIER(S1)([[4.5,-3,0],[4.5,-3,9]])
controls = [b1,b2,b3,b4]
knots = [0,0,0,1,3,3,3]
# periodic B-spline
# non-periodic B-spline
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])

obj = larMap(tbspline)(dom)

vano=STRUCT( MKPOLS(obj) )

VIEW(STRUCT([house,vano,muro]))

VIEW(STRUCT( MKPOLS(obj) ))
VIEW(SKEL_1(STRUCT( MKPOLS(dom) )))


controlpoints = [[-7,-6],[0,0],[7,0],[7,-14],[0,-14],[-7,-8]]
dom = larDomain([32])
mapping = larBezierCurve(controlpoints)
obj = larMap(mapping)(dom)
VIEW(STRUCT( MKPOLS(obj) + [POLYLINE(controlpoints)] ))



b1 = BEZIER(S1)([[0,1,0],[0,1,5]])
b2 = BEZIER(S1)([[0,0,0],[0,0,5]])
b3 = BEZIER(S1)([[1,0,0],[2,-1,2.5],[1,0,5]])
b4 = BEZIER(S1)([[1,1,0],[1,1,5]])
b5 = BEZIER(S1)([[0,1,0],[0,1,5]])
controls = [b1,b2,b3,b4,b5]
knots = [0,1,2,3,4,5,6,7]           # periodic B-spline
knots = [0,0,0,1,2,3,3,3]           # non-periodic B-spline
tbspline = TBSPLINE(S2)(2)(knots)(controlpoints)  
dom = larModelProduct([larDomain([10]),larDom(knots)])
#dom = larIntervals([32,48],'simplex')([1,3])
obj = larMap(tbspline)(dom)
VIEW(STRUCT( MKPOLS(obj) ))
VIEW(SKEL_1(STRUCT( MKPOLS(dom) )))





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

masterV=master[0],[cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
masterV=STRUCT(MKPOLS(masterV))
masterV=STRUCT([masterV,T([1,2])([.3,5.4])(scale)])
VIEW(masterV)

pianoterra = assemblyDiagramInit([9,17,3])([[.3,3.9,.1,.2,.1,.8,.1,2,.3],[.1,1,.3,1.9,.1,2,.1,2,.1,2.9,.3,2.7,.3,1,.1,1.9,.3],[.3,1,1.7]])
open1a = assemblyDiagramInit([4,1,2])([[.5,1,1,.4],[.3],[1.2,.5]])#finestra cucina
open1b = assemblyDiagramInit([4,1,1])([[.5,1,1,.4],[.3],[1]])#finestra cucina
open2 = assemblyDiagramInit([3,1,2])([[.5,1,.4],[.3],[1.2,.5]])#finestra bagno
open3a = assemblyDiagramInit([1,3,2])([[.1],[2.4,1,.5],[1.2,.5]])#porta cucicna
open3b = assemblyDiagramInit([1,3,1])([[.1],[2.4,1,.5],[1]])#porta cucicna
open4a = assemblyDiagramInit([1,2,2])([[.1],[1,1],[1.2,.5]])#porta scale
open4b = assemblyDiagramInit([1,2,1])([[.1],[1,1],[1]])#porta scale
open5a = assemblyDiagramInit([3,1,2])([[1,1,.7],[.3],[1.2,.5]])#porta ingresso
open5b = assemblyDiagramInit([3,1,1])([[1,1,.7],[.3],[1]])#porta ingresso
open7a = assemblyDiagramInit([1,3,2])([[.1],[1.5,1,.4],[1.2,.5]])#porta camera
open7b = assemblyDiagramInit([1,3,1])([[.1],[1.5,1,.4],[1]])#porta camera



hpc = SKEL_1(STRUCT(MKPOLS(pianoterra)))
hpc = cellNumbering(pianoterra,hpc)(range(len(pianoterra[1])),CYAN,.2)
VIEW(hpc)
 
pianoterra = diagram2cell(open5a,pianoterra,389) 
pianoterra = diagram2cell(open5b,pianoterra,388)
pianoterra = diagram2cell(open2,pianoterra,365)
pianoterra = diagram2cell(open7a,pianoterra,329) 
pianoterra = diagram2cell(open7b,pianoterra,328)
pianoterra = diagram2cell(open3a,pianoterra,323)
pianoterra = diagram2cell(open3b,pianoterra,322)
pianoterra = diagram2cell(open7a,pianoterra,131) 
pianoterra = diagram2cell(open7b,pianoterra,130)
pianoterra = diagram2cell(open4a,pianoterra,125)
pianoterra = diagram2cell(open4b,pianoterra,124)
pianoterra = diagram2cell(open3a,pianoterra,119)
pianoterra = diagram2cell(open3b,pianoterra,118)
pianoterra = diagram2cell(open1a,pianoterra,89) 
pianoterra = diagram2cell(open1b,pianoterra,88)
pianoterra = diagram2cell(open1a,pianoterra,59) 
pianoterra = diagram2cell(open1b,pianoterra,58)








hpc = SKEL_1(STRUCT(MKPOLS(pianoterra)))
hpc = cellNumbering (pianoterra,hpc)(range(len(pianoterra[1])),CYAN,.5)
VIEW(hpc)

emptyChain = [2,5,53,55,56,100,145,196,247,298,345,250,249,300,301,348,347,453,60,59,255,256,
63,62,66,65,72,71,261,262,358,359,365,364,267,268,375,374,84,83,88,87,300,301,94,93,292,291,387,386,91,41,44,
78,77,274,273,371,370,279,280,286,285,381,380,352,353,
396,393,103,148,199,102,147,198,47,46,49,50,97,96,142,193,244,295,294,342,341,390,389,440,441,438,437,435,434,432,431,384,383,
141,192,243,338,339,288,289,333,332,80,81,355,356,154,205,153,204,211,210,159,160,163,214,162,213,166,217,216,165,169,220,168,
219,223,222,171,172,133,132,139,190,241,138,189,240,265,264,271,270,368,367,336,335,184,235,238,187,136,127,126,327,326,307,306,
501,503,508,509,444,449,477,482,484,488,489,486,464,459,473,468,497,492,513,515,520,521,
476,475,481,478,480,479,483,40,43,90,135,186,237,183,234,463,457,458,320,321,465,461,462,460,318,317,70,426,425,378,377,282,283,123,124,428,429,330,329]
solidCV = [cell for k,cell in enumerate(pianoterra[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(pianoterra[1]) if k in emptyChain]
exteriorCV += exteriorCells(pianoterra)

DRAW((pianoterra[0],solidCV))

CV = solidCV + exteriorCV
V = pianoterra[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS(B_Rep)))
#VIEW(STRUCT(MKPOLS(B_Rep)))

pianoterraV=pianoterra[0],[cell for k,cell in enumerate(pianoterra[1]) if not (k in emptyChain)]
pianoterraV=STRUCT(MKPOLS(pianoterraV))
pianoterraV=STRUCT([pianoterraV,T([1,2])([.3,5.4])(scale)])
VIEW(pianoterraV)

pianoprimo = assemblyDiagramInit([9,17,3])([[.3,3.9,.1,.2,.1,.8,.1,2,.3],[.1,1,.3,1.9,.1,2,.1,2,.1,2.9,.3,2.7,.3,1,.1,1.9,.3],[.3,1,1.7]])
open1a = assemblyDiagramInit([4,1,2])([[.5,1,1,.4],[.3],[1.2,.5]])#finestra cucina
open1b = assemblyDiagramInit([4,1,1])([[.5,1,1,.4],[.3],[1]])#finestra cucina
open2 = assemblyDiagramInit([3,1,2])([[.5,1,.4],[.3],[1.2,.5]])#finestra bagno
open3a = assemblyDiagramInit([1,3,2])([[.1],[2.4,1,.5],[1.2,.5]])#porta cucicna
open3b = assemblyDiagramInit([1,3,1])([[.1],[2.4,1,.5],[1]])#porta cucicna
open4a = assemblyDiagramInit([1,2,2])([[.1],[1,1],[1.2,.5]])#porta scale
open4b = assemblyDiagramInit([1,2,1])([[.1],[1,1],[1]])#porta scale
open5a = assemblyDiagramInit([3,1,2])([[1,1,.7],[.3],[1.2,.5]])#porta ingresso
open5b = assemblyDiagramInit([3,1,1])([[1,1,.7],[.3],[1]])#porta ingresso
open7a = assemblyDiagramInit([1,3,2])([[.1],[1.5,1,.4],[1.2,.5]])#porta camera
open7b = assemblyDiagramInit([1,3,1])([[.1],[1.5,1,.4],[1]])#porta camera



hpc = SKEL_1(STRUCT(MKPOLS(pianoprimo)))
hpc = cellNumbering(pianoprimo,hpc)(range(len(pianoprimo[1])),CYAN,.2)
VIEW(hpc)
 
pianoprimo = diagram2cell(open5a,pianoprimo,389) 
pianoprimo = diagram2cell(open5b,pianoprimo,388)
pianoprimo = diagram2cell(open2,pianoprimo,365)
pianoprimo = diagram2cell(open7a,pianoprimo,329) 
pianoprimo = diagram2cell(open7b,pianoprimo,328)
pianoprimo = diagram2cell(open3a,pianoprimo,323)
pianoprimo = diagram2cell(open3b,pianoprimo,322)
pianoprimo = diagram2cell(open7a,pianoprimo,131) 
pianoprimo = diagram2cell(open7b,pianoprimo,130)
pianoprimo = diagram2cell(open4a,pianoprimo,125)
pianoprimo = diagram2cell(open4b,pianoprimo,124)
pianoprimo = diagram2cell(open3a,pianoprimo,119)
pianoprimo = diagram2cell(open3b,pianoprimo,118)
pianoprimo = diagram2cell(open1a,pianoprimo,89) 
pianoprimo = diagram2cell(open1b,pianoprimo,88)
pianoprimo = diagram2cell(open1a,pianoprimo,59) 
pianoprimo = diagram2cell(open1b,pianoprimo,58)



hpc = SKEL_1(STRUCT(MKPOLS(pianoprimo)))
hpc = cellNumbering (pianoprimo,hpc)(range(len(pianoprimo[1])),CYAN,.5)
VIEW(hpc)

emptyChain = [2,5,53,55,56,100,145,196,247,298,345,250,249,300,301,348,347,453,60,59,255,256,
63,62,66,65,72,71,261,262,358,359,365,364,267,268,375,374,84,83,88,87,300,301,94,93,292,291,387,386,91,41,44,
78,77,274,273,371,370,279,280,286,285,381,380,352,353,
396,393,103,148,199,102,147,198,47,46,49,50,97,96,142,193,244,295,294,342,341,390,389,440,441,438,437,435,434,432,431,384,383,
141,192,243,338,339,288,289,333,332,80,81,355,356,154,205,153,204,211,210,159,160,163,214,162,213,166,217,216,165,169,220,168,
219,223,222,171,172,133,132,139,190,241,138,189,240,265,264,271,270,368,367,336,335,184,235,238,187,136,127,126,327,326,307,306,
501,503,508,509,444,477,482,484,488,489,486,464,459,473,468,497,492,513,70,426,425,378,377,282,283,123,124,428,429,330,329,
4,1,52,99,144,195,246,297,344,343,391,394,392,395,346,299,296,245,248,98,143,194,101,146,197,54,51,0,3,95,92,293,340,290,337,140,191,242,388,385,439,436,
45,137,188,239,284,379,376,373,325,278,48,331,281,328,287,334,424,427,430,433,382,334,287]
solidCV = [cell for k,cell in enumerate(pianoprimo[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(pianoprimo[1]) if k in emptyChain]
exteriorCV += exteriorCells(pianoprimo)

DRAW((pianoprimo[0],solidCV))

CV = solidCV + exteriorCV
V = pianoprimo[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS(B_Rep)))
#VIEW(STRUCT(MKPOLS(B_Rep)))

pianoprimoV=pianoprimo[0],[cell for k,cell in enumerate(pianoprimo[1]) if not (k in emptyChain)]
pianoprimoV=STRUCT(MKPOLS(pianoprimoV))
VIEW(pianoprimoV)


house=STRUCT([masterV,T([1,2,3])([0,0,3])(pianoterraV),T([1,2,3])([0,0,6])(pianoprimoV)])
VIEW(house)

