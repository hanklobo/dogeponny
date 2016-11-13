var _0x54ab=["\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x42\x69\x74\x6D\x61\x70\x5F\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65","\x72\x65\x73\x65\x74","\x6E\x61\x6D\x65","\x48\x65\x72\x6F","\x73\x6E\x61\x70\x54\x6F\x50\x69\x78\x65\x6C","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x73\x63\x61\x6C\x65","\x6F\x6E\x47\x72\x6F\x75\x6E\x64","\x64\x6F\x75\x62\x6C\x65\x4A\x75\x6D\x70","\x74\x69\x63\x6B","\x79","\x67\x65\x74\x43\x6F\x6C\x6C\x69\x64\x65\x61\x62\x6C\x65\x73","\x78","\x6A\x75\x6D\x70"]
(function(_0x48e5x1)
{
function _0x48e5x2(_0x48e5x3)
{
this[_0x54ab[0]](_0x48e5x3)
}
_0x48e5x2[_0x54ab[1]]=  new Bitmap();
_0x48e5x2[_0x54ab[1]][_0x54ab[2]]= _0x48e5x2[_0x54ab[1]][_0x54ab[0]];
_0x48e5x2[_0x54ab[1]][_0x54ab[0]]= function(_0x48e5x3)
{
this[_0x54ab[3]]();
this.Bitmap_initialize(_0x48e5x3);
this[_0x54ab[4]]= _0x54ab[5];
this[_0x54ab[6]]= true
}
;
_0x48e5x2[_0x54ab[1]][_0x54ab[3]]= function()
{
this[_0x54ab[7]]= {x:10* Game[_0x54ab[8]],y:25* Game[_0x54ab[8]]};
this[_0x54ab[9]]= false;
this[_0x54ab[10]]= false
}
;
_0x48e5x2[_0x54ab[1]][_0x54ab[11]]= function()
{
this[_0x54ab[7]][_0x54ab[12]]+= 1* Game[_0x54ab[8]];
var _0x48e5x4={x:0,y:this[_0x54ab[7]][_0x54ab[12]]},_0x48e5x5=null,_0x48e5x6=Game[_0x54ab[13]]();
_0x48e5x5= calculateCollision(this,_0x54ab[12],_0x48e5x6,_0x48e5x4);
this[_0x54ab[12]]+= _0x48e5x4[_0x54ab[12]];
if(!_0x48e5x5)
{
if(this[_0x54ab[9]])
{
this[_0x54ab[9]]= false;
this[_0x54ab[10]]= true
}
}
else 
{
if(_0x48e5x4[_0x54ab[12]]>= 0)
{
this[_0x54ab[9]]= true;
this[_0x54ab[10]]= false
}
this[_0x54ab[7]][_0x54ab[12]]= 0
}
_0x48e5x4= {x:this[_0x54ab[7]][_0x54ab[14]],y:0};
_0x48e5x5= calculateCollision(this,_0x54ab[14],_0x48e5x6,_0x48e5x4);
this[_0x54ab[14]]+= _0x48e5x4[_0x54ab[14]]
}
;
_0x48e5x2[_0x54ab[1]][_0x54ab[15]]= function()
{
if(this[_0x54ab[9]])
{
this[_0x54ab[7]][_0x54ab[12]]= -17* Game[_0x54ab[8]];
this[_0x54ab[9]]= false;
this[_0x54ab[10]]= true
}
else 
{
if(this[_0x54ab[10]])
{
this[_0x54ab[7]][_0x54ab[12]]= -17* Game[_0x54ab[8]];
this[_0x54ab[10]]= false
}
}
}
;
_0x48e5x1[_0x54ab[5]]= _0x48e5x2
}
(window))