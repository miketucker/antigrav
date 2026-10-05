(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Za="180",Qc=0,Po=1,th=2,Kl=1,eh=2,Rn=3,Hn=0,Ve=1,te=2,Cn=0,Fi=1,ui=2,Do=3,Lo=4,nh=5,ri=100,ih=101,sh=102,rh=103,ah=104,oh=200,lh=201,ch=202,hh=203,na=204,ia=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=211,vh=212,_h=213,xh=214,sa=0,ra=1,aa=2,ki=3,oa=4,la=5,ca=6,ha=7,Ja=0,Mh=1,Sh=2,Vn=0,ja=1,Zl=2,Jl=3,jl=4,Ql=5,tc=6,ec=7,nc=300,Bi=301,zi=302,ua=303,da=304,gr=306,hr=1e3,li=1001,fa=1002,Te=1003,ic=1004,Rs=1005,vn=1006,yr=1007,ci=1008,Mn=1009,sc=1010,rc=1011,ps=1012,Qa=1013,Gn=1014,_n=1015,je=1016,to=1017,eo=1018,ms=1020,ac=35902,oc=35899,lc=1021,cc=1022,un=1023,gs=1026,vs=1027,vr=1028,no=1029,hc=1030,io=1031,so=1033,sr=33776,rr=33777,ar=33778,or=33779,pa=35840,ma=35841,ga=35842,va=35843,_a=36196,xa=37492,Ma=37496,Sa=37808,ya=37809,ba=37810,Ea=37811,Ta=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Da=37818,La=37819,Ia=37820,Ua=37821,Na=36492,Fa=36494,Oa=36495,ka=36283,Ba=36284,za=36285,Va=36286,yh=3200,bh=3201,uc=0,Eh=1,kn="",Ue="srgb",Vi="srgb-linear",ur="linear",ne="srgb",_i=7680,Io=519,Th=512,wh=513,Ah=514,dc=515,Rh=516,Ch=517,Ph=518,Dh=519,Uo=35044,No=35048,Fo="300 es",xn=2e3,dr=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const cs=Math.PI/180,_s=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function ro(s,t){return(s%t+t)%t}function Lh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ih(s,t,e){return s!==t?(e-s)/(t-s):0}function hs(s,t,e){return(1-e)*s+e*t}function Uh(s,t,e,n){return hs(s,t,1-Math.exp(-e*n))}function Nh(s,t=1){return t-Math.abs(ro(s,t*2)-t)}function Fh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Oh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bh(s,t){return s+Math.random()*(t-s)}function zh(s){return s*(.5-Math.random())}function Vh(s){s!==void 0&&(Oo=s);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hh(s){return s*cs}function Gh(s){return s*_s}function Wh(s){return(s&s-1)===0&&s!==0}function Xh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:cs,RAD2DEG:_s,generateUUID:mi,clamp:Wt,euclideanModulo:ro,mapLinear:Lh,inverseLerp:Ih,lerp:hs,damp:Uh,pingpong:Nh,smoothstep:Fh,smootherstep:Oh,randInt:kh,randFloat:Bh,randFloatSpread:zh,seededRandom:Vh,degToRad:Hh,radToDeg:Gh,isPowerOfTwo:Wh,ceilPowerOfTwo:Xh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Yh,normalize:Oe,denormalize:Ii};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(u!==M||l!==d||c!==f||h!==g){let p=1-o;const m=l*d+c*f+h*g+u*M,T=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const v=Math.sqrt(w),_=Math.atan2(v,m*T);p=Math.sin(p*_)/v,o=Math.sin(o*_)/v}const x=o*T;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+M*x,p===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return br.copy(this).projectOnVector(t),this.sub(br)}reflect(t){return this.sub(br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new C,ko=new Ee;class Bt{constructor(t,e,n,i,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=i[0],p=i[3],m=i[6],T=i[1],w=i[4],x=i[7],v=i[2],_=i[5],A=i[8];return r[0]=a*M+o*T+l*v,r[3]=a*p+o*w+l*_,r[6]=a*m+o*x+l*A,r[1]=c*M+h*T+u*v,r[4]=c*p+h*w+u*_,r[7]=c*m+h*x+u*A,r[2]=d*M+f*T+g*v,r[5]=d*p+f*w+g*_,r[8]=d*m+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(i*c-h*n)*M,t[2]=(o*n-i*a)*M,t[3]=d*M,t[4]=(h*e-i*l)*M,t[5]=(i*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Bt;function fc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $h(){const s=fr("canvas");return s.style.display="block",s}const Bo={};function xs(s){s in Bo||(Bo[s]=!0,console.warn(s))}function Kh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const zo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){const s={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?ur:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Vi]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}const Zt=Zh();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xi;class Jh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xi===void 0&&(xi=fr("canvas")),xi.width=t.width,xi.height=t.height;const i=xi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jh=0;class ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Tr(i[a].image)):r.push(Tr(i[a]))}else r=Tr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;const wr=new C;class Re extends qi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=li,i=li,r=vn,a=ci,o=un,l=Mn,c=Re.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=mi(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=nc;Re.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,x=(f+1)/2,v=(m+1)/2,_=(h+d)/4,A=(u+M)/4,E=(g+p)/4;return w>x&&w>v?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=_/n,r=A/n):x>v?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=_/i,r=E/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=A/r,i=E/r),this.set(n,i,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-M)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Re(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends tu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Ps.subVectors(this.max,Ji),Mi.subVectors(t.a,Ji),Si.subVectors(t.b,Ji),yi.subVectors(t.c,Ji),Ln.subVectors(Si,Mi),In.subVectors(yi,Si),Kn.subVectors(Mi,yi);let e=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Ar(e,Mi,Si,yi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,Mi,Si,yi,Ps))?!1:(Ds.crossVectors(Ln,In),e=[Ds.x,Ds.y,Ds.z],Ar(e,Mi,Si,yi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bn=[new C,new C,new C,new C,new C,new C,new C,new C],sn=new C,Cs=new Xn,Mi=new C,Si=new C,yi=new C,Ln=new C,In=new C,Kn=new C,Ji=new C,Ps=new C,Ds=new C,Zn=new C;function Ar(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nu=new Xn,ji=new C,Rr=new C;class Yi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Rr)),this.expandByPoint(ji.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const En=new C,Cr=new C,Ls=new C,Un=new C,Pr=new C,Is=new C,Dr=new C;class mc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Cr.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Cr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Un.dot(this.direction),l=-Un.dot(Ls),c=Un.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Cr).addScaledVector(Ls,d),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,r){Pr.subVectors(e,t),Is.subVectors(n,t),Dr.crossVectors(Pr,Is);let a=this.direction.dot(Dr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(Un,Is));if(l<0)return null;const c=o*this.direction.dot(Pr.cross(Un));if(c<0||l+c>a)return null;const h=-o*Un.dot(Dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,M,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,M,p)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Nn.crossVectors(n,Ke),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Nn.crossVectors(n,Ke)),Nn.normalize(),Us.crossVectors(Ke,Nn),i[0]=Nn.x,i[4]=Us.x,i[8]=Ke.x,i[1]=Nn.y,i[5]=Us.y,i[9]=Ke.y,i[2]=Nn.z,i[6]=Us.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],p=n[10],m=n[14],T=n[3],w=n[7],x=n[11],v=n[15],_=i[0],A=i[4],E=i[8],S=i[12],b=i[1],D=i[5],O=i[9],L=i[13],N=i[2],U=i[6],H=i[10],X=i[14],z=i[3],Q=i[7],$=i[11],at=i[15];return r[0]=a*_+o*b+l*N+c*z,r[4]=a*A+o*D+l*U+c*Q,r[8]=a*E+o*O+l*H+c*$,r[12]=a*S+o*L+l*X+c*at,r[1]=h*_+u*b+d*N+f*z,r[5]=h*A+u*D+d*U+f*Q,r[9]=h*E+u*O+d*H+f*$,r[13]=h*S+u*L+d*X+f*at,r[2]=g*_+M*b+p*N+m*z,r[6]=g*A+M*D+p*U+m*Q,r[10]=g*E+M*O+p*H+m*$,r[14]=g*S+M*L+p*X+m*at,r[3]=T*_+w*b+x*N+v*z,r[7]=T*A+w*D+x*U+v*Q,r[11]=T*E+w*O+x*H+v*$,r[15]=T*S+w*L+x*X+v*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],p=t[11],m=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+M*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+p*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],p=t[14],m=t[15],T=u*p*c-M*d*c+M*l*f-o*p*f-u*l*m+o*d*m,w=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,x=h*M*c-g*u*c+g*o*f-a*M*f-h*o*m+a*u*m,v=g*u*l-h*M*l-g*o*d+a*M*d+h*o*p-a*u*p,_=e*T+n*w+i*x+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/_;return t[0]=T*A,t[1]=(M*d*r-u*p*r-M*i*f+n*p*f+u*i*m-n*d*m)*A,t[2]=(o*p*r-M*l*r+M*i*c-n*p*c-o*i*m+n*l*m)*A,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=w*A,t[5]=(h*p*r-g*d*r+g*i*f-e*p*f-h*i*m+e*d*m)*A,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*m-e*l*m)*A,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*r-h*M*r-g*n*f+e*M*f+h*n*m-e*u*m)*A,t[10]=(a*M*r-g*o*r+g*n*c-e*M*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=v*A,t[13]=(h*M*i-g*u*i+g*n*d-e*M*d-h*n*p+e*u*p)*A,t[14]=(g*o*i-a*M*i-g*n*l+e*M*l+a*n*p-e*o*p)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,M=a*h,p=a*u,m=o*u,T=l*c,w=l*h,x=l*u,v=n.x,_=n.y,A=n.z;return i[0]=(1-(M+m))*v,i[1]=(f+x)*v,i[2]=(g-w)*v,i[3]=0,i[4]=(f-x)*_,i[5]=(1-(d+m))*_,i[6]=(p+T)*_,i[7]=0,i[8]=(g+w)*A,i[9]=(p-T)*A,i[10]=(1-(d+M))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const a=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=xn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=xn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===xn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new C,rn=new Ut,iu=new C(0,0,0),su=new C(1,1,1),Nn=new C,Us=new C,Ke=new C,Ho=new Ut,Go=new Ee;class fn{constructor(t=0,e=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Go.setFromEuler(this),this.setFromQuaternion(Go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ru=0;const Wo=new C,Ei=new Ee,Tn=new Ut,Ns=new C,Qi=new C,au=new C,ou=new Ee,Xo=new C(1,0,0),qo=new C(0,1,0),Yo=new C(0,0,1),$o={type:"added"},lu={type:"removed"},Ti={type:"childadded",child:null},Lr={type:"childremoved",child:null};class we extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new C,e=new fn,n=new Ee,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Bt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Qi,Ns,this.up):Tn.lookAt(Ns,Qi,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new C(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new C,wn=new C,Ir=new C,An=new C,wi=new C,Ai=new C,Ko=new C,Ur=new C,Nr=new C,Fr=new C,Or=new fe,kr=new fe,Br=new fe;class cn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),wn.subVectors(n,e),Ir.subVectors(t,e);const a=an.dot(an),o=an.dot(wn),l=an.dot(Ir),c=wn.dot(wn),h=wn.dot(Ir),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Or.setScalar(0),kr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;wi.subVectors(i,n),Ai.subVectors(r,n),Ur.subVectors(t,n);const l=wi.dot(Ur),c=Ai.dot(Ur);if(l<=0&&c<=0)return e.copy(n);Nr.subVectors(t,i);const h=wi.dot(Nr),u=Ai.dot(Nr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(wi,a);Fr.subVectors(t,r);const f=wi.dot(Fr),g=Ai.dot(Fr);if(g>=0&&f<=g)return e.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ai,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ko.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ko,o);const m=1/(p+M+d);return a=M*m,o=d*m,e.copy(n).addScaledVector(wi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=ro(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zr(a,r,t+1/3),this.g=zr(a,r,t),this.b=zr(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Zt.workingToColorSpace(De.copy(this),t),Math.round(Wt(De.r*255,0,255))*65536+Math.round(Wt(De.g*255,0,255))*256+Math.round(Wt(De.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ue){Zt.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Fs);const n=hs(Fn.h,Fs.h,e),i=hs(Fn.s,Fs.s,e),r=hs(Fn.l,Fs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new wt;wt.NAMES=vc;let cu=0;class $i extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Fi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Je extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new C,Os=new ot;let hu=0;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uo&&(t.usage=this.usage),t}}class _c extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xc extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uu=0;const en=new Ut,Vr=new we,Ri=new C,Ze=new Xn,ts=new Xn,be=new C;class he extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?xc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ze.min,ts.min),Ze.expandByPoint(be),be.addVectors(Ze.max,ts.max),Ze.expandByPoint(be)):(Ze.expandByPoint(ts.min),Ze.expandByPoint(ts.max))}Ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),be.add(Ri)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new C,l[E]=new C;const c=new C,h=new C,u=new C,d=new ot,f=new ot,g=new ot,M=new C,p=new C;function m(E,S,b){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[E].add(M),o[S].add(M),o[b].add(M),l[E].add(p),l[S].add(p),l[b].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let E=0,S=T.length;E<S;++E){const b=T[E],D=b.start,O=b.count;for(let L=D,N=D+O;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new C,x=new C,v=new C,_=new C;function A(E){v.fromBufferAttribute(i,E),_.copy(v);const S=o[E];w.copy(S),w.sub(v.multiplyScalar(v.dot(S))).normalize(),x.crossVectors(_,S);const D=x.dot(l[E])<0?-1:1;a.setXYZW(E,w.x,w.y,w.z,D)}for(let E=0,S=T.length;E<S;++E){const b=T[E],D=b.start,O=b.count;for(let L=D,N=D+O;L<N;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new Ut,Jn=new mc,ks=new Yi,Jo=new C,Bs=new C,zs=new C,Vs=new C,Hr=new C,Hs=new C,jo=new C,Gs=new C;class gt extends we{constructor(t=new he,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Hr.fromBufferAttribute(u,t),a?Hs.addScaledVector(Hr,h):Hs.addScaledVector(Hr.sub(e),h))}e.add(Hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(ks.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ks,Jo)===null||Jn.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Zo.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=T,v=w;x<v;x+=3){const _=o.getX(x),A=o.getX(x+1),E=o.getX(x+2);i=Ws(this,m,t,n,c,h,u,_,A,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const T=o.getX(p),w=o.getX(p+1),x=o.getX(p+2);i=Ws(this,a,t,n,c,h,u,T,w,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=T,v=w;x<v;x+=3){const _=x,A=x+1,E=x+2;i=Ws(this,m,t,n,c,h,u,_,A,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const T=p,w=p+1,x=p+2;i=Ws(this,a,t,n,c,h,u,T,w,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function du(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Hn,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:s}}function Ws(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Bs),s.getVertexPosition(l,zs),s.getVertexPosition(c,Vs);const h=du(s,t,e,n,Bs,zs,Vs,jo);if(h){const u=new C;cn.getBarycoord(jo,Bs,zs,Vs,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new ot)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};cn.getNormal(Bs,zs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class _e extends he{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(M,p,m,T,w,x,v,_,A,E,S){const b=x/A,D=v/E,O=x/2,L=v/2,N=_/2,U=A+1,H=E+1;let X=0,z=0;const Q=new C;for(let $=0;$<H;$++){const at=$*D-L;for(let Ct=0;Ct<U;Ct++){const Gt=Ct*b-O;Q[M]=Gt*T,Q[p]=at*w,Q[m]=N,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[p]=0,Q[m]=_>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ct/A),u.push(1-$/E),X+=1}}for(let $=0;$<E;$++)for(let at=0;at<A;at++){const Ct=d+at+U*$,Gt=d+at+U*($+1),Qt=d+(at+1)+U*($+1),Jt=d+(at+1)+U*$;l.push(Ct,Gt,Jt),l.push(Gt,Qt,Jt),z+=6}o.addGroup(f,z,S),f+=z,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(s){const t={};for(let e=0;e<s.length;e++){const n=Hi(s[e]);for(const i in n)t[i]=n[i]}return t}function fu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ms={clone:Hi,merge:ke};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new C,Qo=new ot,tl=new ot;class nn extends Sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,tl),e.subVectors(tl,Qo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Pi=1;class gu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Ci,Pi,t,e);i.layers=this.layers,this.add(i);const r=new nn(Ci,Pi,t,e);r.layers=this.layers,this.add(r);const a=new nn(Ci,Pi,t,e);a.layers=this.layers,this.add(a);const o=new nn(Ci,Pi,t,e);o.layers=this.layers,this.add(o);const l=new nn(Ci,Pi,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ci,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yc extends Re{constructor(t=[],e=Bi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vu extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _e(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Cn});r.uniforms.tEquirect.value=e;const a=new gt(i,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=vn),new gu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class qe extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _u={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_u)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xu extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mu extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Te,h=Te,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr extends Ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new Ut,el=new Ut,Xs=[],nl=new Xn,Su=new Ut,es=new gt,ns=new Yi;class di extends gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Su)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),nl.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),ns.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),el.multiplyMatrices(n,Di),es.matrixWorld=el,es.raycast(t,Xs);for(let a=0,o=Xs.length;a<o;a++){const l=Xs[a];l.instanceId=r,l.object=this,e.push(l)}Xs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(i*this.count),i,this.count,vr,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new C,yu=new C,bu=new Bt;class ni{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wr.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bu.getNormalMatrix(t),i=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Yi,Eu=new ot(.5,.5),qs=new C;class oo{constructor(t=new ni,e=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],p=r[10],m=r[11],T=r[12],w=r[13],x=r[14],v=r[15];if(i[0].setComponents(c-a,f-h,m-g,v-T).normalize(),i[1].setComponents(c+a,f+h,m+g,v+T).normalize(),i[2].setComponents(c+o,f+u,m+M,v+w).normalize(),i[3].setComponents(c-o,f-u,m-M,v-w).normalize(),n)i[4].setComponents(l,d,p,x).normalize(),i[5].setComponents(c-l,f-d,m-p,v-x).normalize();else if(i[4].setComponents(c-l,f-d,m-p,v-x).normalize(),e===xn)i[5].setComponents(c+l,f+d,m+p,v+x).normalize();else if(e===dr)i[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);const e=Eu.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qs.x=i.normal.x>0?t.max.x:t.min.x,qs.y=i.normal.y>0?t.max.y:t.min.y,qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lo extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const il=new Ut,Ha=new mc,Ys=new Yi,$s=new C;class Ga extends we{constructor(t=new he,e=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;il.copy(i).invert(),Ha.copy(t.ray).applyMatrix4(il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,M=f;g<M;g++){const p=c.getX(g);$s.fromBufferAttribute(u,p),sl($s,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,M=f;g<M;g++)$s.fromBufferAttribute(u,g),sl($s,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sl(s,t,e,n,i,r,a){const o=Ha.distanceSqToPoint(s);if(o<e){const l=new C;Ha.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class co extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends Re{constructor(t,e,n=Gn,i,r,a,o=Te,l=Te,c,h=gs,u=1){if(h!==gs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bc extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class uo extends he{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fi extends he{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],p=n/2;let m=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function T(){const x=new C,v=new C;let _=0;const A=(e-t)/n;for(let E=0;E<=r;E++){const S=[],b=E/r,D=b*(e-t)+t;for(let O=0;O<=i;O++){const L=O/i,N=L*l+o,U=Math.sin(N),H=Math.cos(N);v.x=D*U,v.y=-b*n+p,v.z=D*H,u.push(v.x,v.y,v.z),x.set(U,A,H).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-b),S.push(g++)}M.push(S)}for(let E=0;E<i;E++)for(let S=0;S<r;S++){const b=M[S][E],D=M[S+1][E],O=M[S+1][E+1],L=M[S][E+1];(t>0||S!==0)&&(h.push(b,D,L),_+=3),(e>0||S!==r-1)&&(h.push(D,O,L),_+=3)}c.addGroup(m,_,0),m+=_}function w(x){const v=g,_=new ot,A=new C;let E=0;const S=x===!0?t:e,b=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=i;O++){const N=O/i*l+o,U=Math.cos(N),H=Math.sin(N);A.x=S*H,A.y=p*b,A.z=S*U,u.push(A.x,A.y,A.z),d.push(0,b,0),_.x=U*.5+.5,_.y=H*.5*b+.5,f.push(_.x,_.y),g++}for(let O=0;O<i;O++){const L=v+O,N=D+O;x===!0?h.push(N,N+1,L):h.push(N+1,N,L),E+=3}c.addGroup(m,E,x===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends fi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ss(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fo extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const w=new C,x=new C,v=new C;for(let _=0;_<e.length;_+=3)f(e[_+0],w),f(e[_+1],x),f(e[_+2],v),l(w,x,v,T)}function l(T,w,x,v){const _=v+1,A=[];for(let E=0;E<=_;E++){A[E]=[];const S=T.clone().lerp(x,E/_),b=w.clone().lerp(x,E/_),D=_-E;for(let O=0;O<=D;O++)O===0&&E===_?A[E][O]=S:A[E][O]=S.clone().lerp(b,O/D)}for(let E=0;E<_;E++)for(let S=0;S<2*(_-E)-1;S++){const b=Math.floor(S/2);S%2===0?(d(A[E][b+1]),d(A[E+1][b]),d(A[E][b])):(d(A[E][b+1]),d(A[E+1][b+1]),d(A[E+1][b]))}}function c(T){const w=new C;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(T),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){const T=new C;for(let w=0;w<r.length;w+=3){T.x=r[w+0],T.y=r[w+1],T.z=r[w+2];const x=p(T)/2/Math.PI+.5,v=m(T)/Math.PI+.5;a.push(x,1-v)}g(),u()}function u(){for(let T=0;T<a.length;T+=6){const w=a[T+0],x=a[T+2],v=a[T+4],_=Math.max(w,x,v),A=Math.min(w,x,v);_>.9&&A<.1&&(w<.2&&(a[T+0]+=1),x<.2&&(a[T+2]+=1),v<.2&&(a[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,w){const x=T*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function g(){const T=new C,w=new C,x=new C,v=new C,_=new ot,A=new ot,E=new ot;for(let S=0,b=0;S<r.length;S+=9,b+=6){T.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),_.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),E.set(a[b+4],a[b+5]),v.copy(T).add(w).add(x).divideScalar(3);const D=p(v);M(_,b+0,T,D),M(A,b+2,w,D),M(E,b+4,x,D)}}function M(T,w,x,v){v<0&&T.x===1&&(a[w]=T.x-1),x.x===0&&x.z===0&&(a[w]=v/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.vertices,t.indices,t.radius,t.details)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ot:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new Ut;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class po extends Sn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tu extends po{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mo(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ks=new C,Xr=new mo,qr=new mo,Yr=new mo;class Ec extends Sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Xr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,p),qr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,p),Yr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Yr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Xr.calc(l),qr.calc(l),Yr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function wu(s,t){const e=1-s;return e*e*t}function Au(s,t){return 2*(1-s)*s*t}function Ru(s,t){return s*s*t}function us(s,t,e,n){return wu(s,t)+Au(s,e)+Ru(s,n)}function Cu(s,t){const e=1-s;return e*e*e*t}function Pu(s,t){const e=1-s;return 3*e*e*s*t}function Du(s,t){return 3*(1-s)*s*s*t}function Lu(s,t){return s*s*s*t}function ds(s,t,e,n,i){return Cu(s,t)+Pu(s,e)+Du(s,n)+Lu(s,i)}class Tc extends Sn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,i.x,r.x,a.x,o.x),ds(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends Sn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,i.x,r.x,a.x,o.x),ds(t,i.y,r.y,a.y,o.y),ds(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wc extends Sn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends Sn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ac extends Sn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(us(t,i.x,r.x,a.x),us(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Sn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(us(t,i.x,r.x,a.x),us(t,i.y,r.y,a.y),us(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rc extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(rl(o,l.x,c.x,h.x,u.x),rl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var al=Object.freeze({__proto__:null,ArcCurve:Tu,CatmullRomCurve3:Ec,CubicBezierCurve:Tc,CubicBezierCurve3:Iu,EllipseCurve:po,LineCurve:wc,LineCurve3:Uu,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:Nu,SplineCurve:Rc});class Fu extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new al[i.type]().fromJSON(i))}return this}}class ol extends Fu{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wc(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ac(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Tc(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new po(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cc extends ol{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ol().fromJSON(i))}return this}}function Ou(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Pc(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Hu(s,t,r,e)),s.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ys(r,a,e,o,l,c,0),a}function Pc(s,t,e,n,i){let r;if(i===Qu(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=ll(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ll(a/n|0,s[a],s[a+1],r);return r&&Gi(r,r.next)&&(Es(r),r=r.next),r}function pi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gi(e,e.next)||pe(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Yu(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Bu(s,n,i,r):ku(s)){t.push(l.i,s.i,c.i),Es(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=zu(pi(s),t),ys(s,t,e,n,i,r,2)):a===2&&Vu(s,t,e,n,i,r):ys(pi(s),t,e,n,i,r,1);break}}}function ku(s){const t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ss(i,o,r,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bu(s,t,e,n){const i=s.prev,r=s,a=s.next;if(pe(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),p=Math.max(h,u,d),m=Wa(f,g,t,e,n),T=Wa(M,p,t,e,n);let w=s.prevZ,x=s.nextZ;for(;w&&w.z>=m&&x&&x.z<=T;){if(w.x>=f&&w.x<=M&&w.y>=g&&w.y<=p&&w!==i&&w!==a&&ss(o,h,l,u,c,d,w.x,w.y)&&pe(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=M&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&ss(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=M&&w.y>=g&&w.y<=p&&w!==i&&w!==a&&ss(o,h,l,u,c,d,w.x,w.y)&&pe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&ss(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function zu(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Gi(n,i)&&Lc(n,e,e.next,i)&&bs(n,i)&&bs(i,n)&&(t.push(n.i,e.i,i.i),Es(e),Es(e.next),e=s=i),e=e.next}while(e!==s);return pi(e)}function Vu(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zu(a,o)){let l=Ic(a,o);a=pi(a,a.next),l=pi(l,l.next),ys(a,t,e,n,i,r,0),ys(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Hu(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Pc(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ku(c))}i.sort(Gu);for(let r=0;r<i.length;r++)e=Wu(i[r],e);return e}function Gu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Wu(s,t){const e=Xu(s,t);if(!e)return t;const n=Ic(e,s);return pi(n,n.next),pi(e,e.next)}function Xu(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Gi(s,e))return e;do{if(Gi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dc(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);bs(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&qu(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function qu(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function Yu(s,t,e,n){let i=s;do i.z===0&&(i.z=Wa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$u(i)}function $u(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Wa(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ku(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Dc(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ss(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Dc(s,t,e,n,i,r,a,o)}function Zu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ju(s,t)&&(bs(s,t)&&bs(t,s)&&ju(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||Gi(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gi(s,t){return s.x===t.x&&s.y===t.y}function Lc(s,t,e,n){const i=Js(pe(s,t,e)),r=Js(pe(s,t,n)),a=Js(pe(e,n,s)),o=Js(pe(e,n,t));return!!(i!==r&&a!==o||i===0&&Zs(s,e,t)||r===0&&Zs(s,n,t)||a===0&&Zs(e,s,n)||o===0&&Zs(e,t,n))}function Zs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Js(s){return s>0?1:s<0?-1:0}function Ju(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Lc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function bs(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function ju(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ic(s,t){const e=Xa(s.i,s.x,s.y),n=Xa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ll(s,t,e,n){const i=Xa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Es(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xa(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qu(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class td{static triangulate(t,e,n=2){return Ou(t,e,n)}}class fs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return fs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];cl(t),hl(n,t);let a=t.length;e.forEach(cl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,hl(n,e[l]);const o=td.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function cl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function hl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Wi extends fo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wi(t.radius,t.detail)}}class Be extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],M=[],p=[];for(let m=0;m<h;m++){const T=m*d-a;for(let w=0;w<c;w++){const x=w*u-r;g.push(x,-T,0),M.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const w=T+c*m,x=T+c*(m+1),v=T+1+c*(m+1),_=T+1+c*m;f.push(w,x,_),f.push(x,v,_)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}class go extends he{constructor(t=new Cc([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ht(i,3)),this.setAttribute("normal",new Ht(r,3)),this.setAttribute("uv",new Ht(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;fs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const T=g[p];fs.isClockWise(T)===!0&&(g[p]=T.reverse())}const M=fs.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const T=g[p];f=f.concat(T)}for(let p=0,m=f.length;p<m;p++){const T=f[p];i.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let p=0,m=M.length;p<m;p++){const T=M[p],w=T[0]+u,x=T[1]+u,v=T[2]+u;n.push(w,x,v),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ed(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new go(n,t.curveSegments)}}function ed(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class vo extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){const T=[],w=m/n;let x=0;m===0&&a===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let v=0;v<=e;v++){const _=v/e;u.x=-t*Math.cos(i+_*r)*Math.sin(a+w*o),u.y=t*Math.cos(a+w*o),u.z=t*Math.sin(i+_*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),p.push(_+x,1-w),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){const w=h[m][T+1],x=h[m][T],v=h[m+1][T],_=h[m+1][T+1];(m!==0||a>0)&&f.push(w,x,_),(m!==n-1||l<Math.PI)&&f.push(x,v,_)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zn extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const M=g/i*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(M),u.y=(t+e*Math.cos(p))*Math.sin(M),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const M=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,T=(i+1)*f+g;a.push(M,p,T),a.push(p,m,T)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nd extends ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ae extends $i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sd extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uc extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rd extends Uc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new Ut,ul=new C,dl=new C;class ad{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(ul),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _o extends Sc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class od extends ad{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ld extends Uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new od}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cd extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fl(s,t,e,n){const i=ud(n);switch(e){case lc:return s*t;case vr:return s*t/i.components*i.byteLength;case no:return s*t/i.components*i.byteLength;case hc:return s*t*2/i.components*i.byteLength;case io:return s*t*2/i.components*i.byteLength;case cc:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case so:return s*t*4/i.components*i.byteLength;case sr:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:case va:return Math.max(s,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(s,8)*Math.max(t,8)/2;case _a:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Na:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ka:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ud(s){switch(s){case Mn:case sc:return{byteLength:1,components:1};case ps:case rc:case je:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case Gn:case Qa:case _n:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Nc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function dd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];s.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:vd,alphatest_pars_fragment:_d,aomap_fragment:xd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:yd,begin_vertex:bd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:wd,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Dd,color_fragment:Ld,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:kd,displacementmap_pars_vertex:Bd,displacementmap_vertex:zd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Hd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:af,envmap_vertex:Kd,fog_vertex:Zd,fog_pars_vertex:Jd,fog_fragment:jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:tf,lightmap_pars_fragment:ef,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:of,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:xf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:yf,map_particle_pars_fragment:bf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Tf,morphinstance_vertex:wf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Df,normal_fragment_maps:Lf,normal_pars_fragment:If,normal_pars_vertex:Uf,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:zf,opaque_fragment:Vf,packing:Hf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:qf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Zf,shadowmap_vertex:Jf,shadowmask_pars_fragment:jf,skinbase_vertex:Qf,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:vp,cube_frag:_p,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:yp,equirect_vert:bp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Dp,meshmatcap_frag:Lp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:kp,meshtoon_vert:Bp,meshtoon_frag:zp,points_vert:Vp,points_frag:Hp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},lt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},mn={basic:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ke([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ke([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ke([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ke([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ke([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ke([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ke([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ke([lt.lights,lt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};mn.physical={uniforms:ke([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const js={r:0,b:0,g:0},Qn=new fn,Yp=new Ut;function $p(s,t,e,n,i,r,a){const o=new wt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function M(w){let x=!1;const v=g(w);v===null?m(o,l):v&&v.isColor&&(m(v,1),x=!0);const _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(w,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===gr)?(h===void 0&&(h=new gt(new _e(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Hi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Qn)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new Be(2,2),new ge({name:"BackgroundMaterial",uniforms:Hi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,x){w.getRGB(js,Mc(s)),n.buffers.color.setClear(js.r,js.g,js.b,x,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:M,addToRenderList:p,dispose:T}}function Kp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(b,D,O,L,N){let U=!1;const H=u(L,O,D);r!==H&&(r=H,c(r.object)),U=f(b,L,O,N),U&&g(b,L,O,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(b,D,O,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,D,O){const L=O.wireframe===!0;let N=n[b.id];N===void 0&&(N={},n[b.id]=N);let U=N[D.id];U===void 0&&(U={},N[D.id]=U);let H=U[L];return H===void 0&&(H=d(l()),U[L]=H),H}function d(b){const D=[],O=[],L=[];for(let N=0;N<e;N++)D[N]=0,O[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,D,O,L){const N=r.attributes,U=D.attributes;let H=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){const $=N[z];let at=U[z];if(at===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(b,D,O,L){const N={},U=D.attributes;let H=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){let $=U[z];$===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&($=b.instanceColor));const at={};at.attribute=$,$&&$.data&&(at.data=$.data),N[z]=at,H++}r.attributes=N,r.attributesNum=H,r.index=L}function M(){const b=r.newAttributes;for(let D=0,O=b.length;D<O;D++)b[D]=0}function p(b){m(b,0)}function m(b,D){const O=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;O[b]=1,L[b]===0&&(s.enableVertexAttribArray(b),L[b]=1),N[b]!==D&&(s.vertexAttribDivisor(b,D),N[b]=D)}function T(){const b=r.newAttributes,D=r.enabledAttributes;for(let O=0,L=D.length;O<L;O++)D[O]!==b[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function w(b,D,O,L,N,U,H){H===!0?s.vertexAttribIPointer(b,D,O,N,U):s.vertexAttribPointer(b,D,O,L,N,U)}function x(b,D,O,L){M();const N=L.attributes,U=O.getAttributes(),H=D.defaultAttributeValues;for(const X in U){const z=U[X];if(z.location>=0){let Q=N[X];if(Q===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const $=Q.normalized,at=Q.itemSize,Ct=t.get(Q);if(Ct===void 0)continue;const Gt=Ct.buffer,Qt=Ct.type,Jt=Ct.bytesPerElement,K=Qt===s.INT||Qt===s.UNSIGNED_INT||Q.gpuType===Qa;if(Q.isInterleavedBufferAttribute){const j=Q.data,pt=j.stride,Nt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<z.locationSize;Tt++)m(z.location+Tt,j.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<z.locationSize;Tt++)p(z.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Tt=0;Tt<z.locationSize;Tt++)w(z.location+Tt,at/z.locationSize,Qt,$,pt*Jt,(Nt+at/z.locationSize*Tt)*Jt,K)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)m(z.location+j,Q.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<z.locationSize;j++)p(z.location+j);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let j=0;j<z.locationSize;j++)w(z.location+j,at/z.locationSize,Qt,$,at*Jt,at/z.locationSize*j*Jt,K)}}else if(H!==void 0){const $=H[X];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(z.location,$);break;case 3:s.vertexAttrib3fv(z.location,$);break;case 4:s.vertexAttrib4fv(z.location,$);break;default:s.vertexAttrib1fv(z.location,$)}}}}T()}function v(){E();for(const b in n){const D=n[b];for(const O in D){const L=D[O];for(const N in L)h(L[N].object),delete L[N];delete D[O]}delete n[b]}}function _(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const O in D){const L=D[O];for(const N in L)h(L[N].object),delete L[N];delete D[O]}delete n[b.id]}function A(b){for(const D in n){const O=n[D];if(O[b.id]===void 0)continue;const L=O[b.id];for(const N in L)h(L[N].object),delete L[N];delete O[b.id]}}function E(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function Zp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==un&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,_=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:v,maxSamples:_}}function jp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ni,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const T=r?0:n,w=T*4;let x=m.clippingState||null;l.value=x,x=h(g,d,w,f);for(let v=0;v!==w;++v)x[v]=e[v];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const m=f+M*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=f;w!==M;++w,x+=4)a.copy(u[w]).applyMatrix4(T,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Qp(s){let t=new WeakMap;function e(a,o){return o===ua?a.mapping=Bi:o===da&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===da)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ui=4,pl=[.125,.215,.35,.446,.526,.582],ai=20,Kr=new _o,ml=new wt;let Zr=null,Jr=0,jr=0,Qr=!1;const ii=(1+Math.sqrt(5))/2,Li=1/ii,gl=[new C(-ii,Li,0),new C(ii,Li,0),new C(-Li,0,ii),new C(Li,0,ii),new C(0,ii,-Li),new C(0,ii,Li),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],tm=new C;class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=tm}=r;Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Jr,jr),this._renderer.xr.enabled=Qr,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:je,format:un,colorSpace:Vi,depthBuffer:!1},i=_l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=nm(r,t,e)}return i}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,i,r){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ml),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const M=new Je({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),p=new gt(new _e,M);let m=!1;const T=t.background;T?T.isColor&&(M.color.copy(T),t.background=null,m=!0):(M.color.copy(ml),m=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const v=this._cubeSize;Qs(i,x*v,w>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Bi||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gl[(i-r-1)%gl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ai-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const m=[];let T=0;for(let A=0;A<ai;++A){const E=A/M,S=Math.exp(-E*E/2);m.push(S),A===0?T+=S:A<p&&(T+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[i],v=3*x*(i>w-Ui?i-w+Ui:0),_=4*(this._cubeSize-x);Qs(e,v,_,3*x,2*x),l.setRenderTarget(e),l.render(u,Kr)}}function em(s){const t=[],e=[],n=[];let i=s;const r=s-Ui+1+pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ui?l=pl[a-s+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,p=2,m=1,T=new Float32Array(M*g*f),w=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let _=0;_<f;_++){const A=_%3*2/3-1,E=_>2?0:-1,S=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];T.set(S,M*g*_),w.set(d,p*g*_);const b=[_,_,_,_,_,_];x.set(b,m*g*_)}const v=new he;v.setAttribute("position",new Ge(T,M)),v.setAttribute("uv",new Ge(w,p)),v.setAttribute("faceIndex",new Ge(x,m)),t.push(v),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _l(s,t,e){const n=new He(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function nm(s,t,e){const n=new Float32Array(ai),i=new C(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function xl(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ml(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function im(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===da,h=l===Bi||l===zi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new vl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new vl(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rm(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const T=f.array;M=f.version;for(let w=0,x=T.length;w<x;w+=3){const v=T[w+0],_=T[w+1],A=T[w+2];d.push(v,_,_,A,A,v)}}else if(g!==void 0){const T=g.array;M=g.version;for(let w=0,x=T.length/3-1;w<x;w+=3){const v=w+0,_=w+1,A=w+2;d.push(v,_,_,A,A,v)}}else return;const p=new(fc(d)?xc:_c)(d,1);p.version=M;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function am(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let m=0;for(let T=0;T<g;T++)m+=f[T]*M[T];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function om(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lm(s,t,e){const n=new WeakMap,i=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),p===!0&&(x=3);let v=o.attributes.position.count*x,_=1;v>t.maxTextureSize&&(_=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*_*4*u),E=new pc(A,v,_,u);E.type=_n,E.needsUpdate=!0;const S=x*4;for(let D=0;D<u;D++){const O=m[D],L=T[D],N=w[D],U=v*_*4*D;for(let H=0;H<O.count;H++){const X=H*S;g===!0&&(i.fromBufferAttribute(O,H),A[U+X+0]=i.x,A[U+X+1]=i.y,A[U+X+2]=i.z,A[U+X+3]=0),M===!0&&(i.fromBufferAttribute(L,H),A[U+X+4]=i.x,A[U+X+5]=i.y,A[U+X+6]=i.z,A[U+X+7]=0),p===!0&&(i.fromBufferAttribute(N,H),A[U+X+8]=i.x,A[U+X+9]=i.y,A[U+X+10]=i.z,A[U+X+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new ot(v,_)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",M),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function cm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Fc=new Re,Sl=new ho(1,1),Oc=new pc,kc=new eu,Bc=new yc,yl=[],bl=[],El=new Float32Array(16),Tl=new Float32Array(9),wl=new Float32Array(4);function Ki(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=yl[i];if(r===void 0&&(r=new Float32Array(i),yl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _r(s,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function pm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;wl.set(n),s.uniformMatrix2fv(this.addr,!1,wl),Se(e,n)}}function mm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Tl.set(n),s.uniformMatrix3fv(this.addr,!1,Tl),Se(e,n)}}function gm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;El.set(n),s.uniformMatrix4fv(this.addr,!1,El),Se(e,n)}}function vm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function Sm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Tm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sl.compareFunction=dc,r=Sl):r=Fc,e.setTexture2D(t||r,i)}function wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kc,i)}function Am(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bc,i)}function Rm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oc,i)}function Cm(s){switch(s){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return ym;case 36295:return bm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(s,t){s.uniform1fv(this.addr,t)}function Dm(s,t){const e=Ki(t,this.size,2);s.uniform2fv(this.addr,e)}function Lm(s,t){const e=Ki(t,this.size,3);s.uniform3fv(this.addr,e)}function Im(s,t){const e=Ki(t,this.size,4);s.uniform4fv(this.addr,e)}function Um(s,t){const e=Ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Nm(s,t){const e=Ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fm(s,t){const e=Ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Om(s,t){s.uniform1iv(this.addr,t)}function km(s,t){s.uniform2iv(this.addr,t)}function Bm(s,t){s.uniform3iv(this.addr,t)}function zm(s,t){s.uniform4iv(this.addr,t)}function Vm(s,t){s.uniform1uiv(this.addr,t)}function Hm(s,t){s.uniform2uiv(this.addr,t)}function Gm(s,t){s.uniform3uiv(this.addr,t)}function Wm(s,t){s.uniform4uiv(this.addr,t)}function Xm(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Fc,r[a])}function qm(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||kc,r[a])}function Ym(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bc,r[a])}function $m(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Oc,r[a])}function Km(s){switch(s){case 5126:return Pm;case 35664:return Dm;case 35665:return Lm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return km;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Vm;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Km(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Al(s,t){s.seq.push(t),s.map[t.id]=t}function Qm(s,t,e){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),a=ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Al(e,c===void 0?new Zm(o,s,t):new Jm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new jm(o),Al(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Qm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Rl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tg=37297;let eg=0;function ng(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Cl=new Bt;function ig(s){Zt._getMatrix(Cl,Zt.workingColorSpace,s);const t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case ur:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Pl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ng(s.getShaderSource(t),o)}else return r}function sg(s,t){const e=ig(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(s,t){let e;switch(t){case ja:e="Linear";break;case Zl:e="Reinhard";break;case Jl:e="Cineon";break;case jl:e="ACESFilmic";break;case tc:e="AgX";break;case ec:e="Neutral";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new C;function ag(){Zt.getLuminanceCoefficients(tr);const s=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function lg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function rs(s){return s!==""}function Dl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(s){return s.replace(hg,dg)}const ug=new Map;function dg(s,t){let e=Vt[t];if(e===void 0){const n=ug.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(s){return s.replace(fg,pg)}function pg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ul(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zi&&(t="ENVMAP_MODE_REFRACTION"),t}function _g(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function xg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=mg(e),c=gg(e),h=vg(e),u=_g(e),d=xg(e),f=og(e),g=lg(r),M=i.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`)):(p=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),m=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=qa(a),a=Dl(a,e),a=Ll(a,e),o=qa(o),o=Dl(o,e),o=Ll(o,e),a=Il(a),o=Il(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=T+p+a,x=T+m+o,v=Rl(i,i.VERTEX_SHADER,w),_=Rl(i,i.FRAGMENT_SHADER,x);i.attachShader(M,v),i.attachShader(M,_),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function A(D){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(M)||"",L=i.getShaderInfoLog(v)||"",N=i.getShaderInfoLog(_)||"",U=O.trim(),H=L.trim(),X=N.trim();let z=!0,Q=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,v,_);else{const $=Pl(i,v,"vertex"),at=Pl(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+$+`
`+at)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||X==="")&&(Q=!1);Q&&(D.diagnostics={runnable:z,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(v),i.deleteShader(_),E=new lr(i,M),S=cg(i,M)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,tg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=v,this.fragmentShader=_,this}let Sg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bg(t),e.set(t,n)),n}}class bg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function Eg(s,t,e,n,i,r,a){const o=new gc,l=new yg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,D,O,L){const N=O.fog,U=L.geometry,H=S.isMeshStandardMaterial?O.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),z=X&&X.mapping===gr?X.image.height:null,Q=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=$!==void 0?$.length:0;let Ct=0;U.morphAttributes.position!==void 0&&(Ct=1),U.morphAttributes.normal!==void 0&&(Ct=2),U.morphAttributes.color!==void 0&&(Ct=3);let Gt,Qt,Jt,K;if(Q){const ee=mn[Q];Gt=ee.vertexShader,Qt=ee.fragmentShader}else Gt=S.vertexShader,Qt=S.fragmentShader,l.update(S),Jt=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const j=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,Kt=!!S.map,Ce=!!S.matcap,I=!!X,le=!!S.aoMap,Ot=!!S.lightMap,Lt=!!S.bumpMap,_t=!!S.normalMap,ce=!!S.displacementMap,xt=!!S.emissiveMap,zt=!!S.metalnessMap,ye=!!S.roughnessMap,ve=S.anisotropy>0,P=S.clearcoat>0,y=S.dispersion>0,V=S.iridescence>0,Y=S.sheen>0,J=S.transmission>0,q=ve&&!!S.anisotropyMap,Et=P&&!!S.clearcoatMap,st=P&&!!S.clearcoatNormalMap,Mt=P&&!!S.clearcoatRoughnessMap,yt=V&&!!S.iridescenceMap,nt=V&&!!S.iridescenceThicknessMap,ut=Y&&!!S.sheenColorMap,Dt=Y&&!!S.sheenRoughnessMap,bt=!!S.specularMap,ct=!!S.specularColorMap,kt=!!S.specularIntensityMap,F=J&&!!S.transmissionMap,it=J&&!!S.thicknessMap,rt=!!S.gradientMap,ft=!!S.alphaMap,tt=S.alphaTest>0,Z=!!S.alphaHash,vt=!!S.extensions;let Ft=Vn;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const re={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:Qt,defines:S.defines,customVertexShaderID:Jt,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:Ce,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:z,aoMap:le,lightMap:Ot,bumpMap:Lt,normalMap:_t,displacementMap:d&&ce,emissiveMap:xt,normalMapObjectSpace:_t&&S.normalMapType===Eh,normalMapTangentSpace:_t&&S.normalMapType===uc,metalnessMap:zt,roughnessMap:ye,anisotropy:ve,anisotropyMap:q,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:st,clearcoatRoughnessMap:Mt,dispersion:y,iridescence:V,iridescenceMap:yt,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Dt,specularMap:bt,specularColorMap:ct,specularIntensityMap:kt,transmission:J,transmissionMap:F,thicknessMap:it,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:tt,alphaHash:Z,combine:S.combine,mapUv:Kt&&M(S.map.channel),aoMapUv:le&&M(S.aoMap.channel),lightMapUv:Ot&&M(S.lightMap.channel),bumpMapUv:Lt&&M(S.bumpMap.channel),normalMapUv:_t&&M(S.normalMap.channel),displacementMapUv:ce&&M(S.displacementMap.channel),emissiveMapUv:xt&&M(S.emissiveMap.channel),metalnessMapUv:zt&&M(S.metalnessMap.channel),roughnessMapUv:ye&&M(S.roughnessMap.channel),anisotropyMapUv:q&&M(S.anisotropyMap.channel),clearcoatMapUv:Et&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&M(S.sheenRoughnessMap.channel),specularMapUv:bt&&M(S.specularMap.channel),specularColorMapUv:ct&&M(S.specularColorMap.channel),specularIntensityMapUv:kt&&M(S.specularIntensityMap.channel),transmissionMapUv:F&&M(S.transmissionMap.channel),thicknessMapUv:it&&M(S.thicknessMap.channel),alphaMapUv:ft&&M(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Kt||ft),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:xt&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===te,flipSided:S.side===Ve,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(T(b,S),w(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function T(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const b=g[S.type];let D;if(b){const O=mn[b];D=Ms.clone(O.uniforms)}else D=S.uniforms;return D}function v(S,b){let D;for(let O=0,L=h.length;O<L;O++){const N=h[O];if(N.cacheKey===b){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Mg(s,b,S,r),h.push(D)),D}function _(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:_,releaseShaderCache:A,programs:h,dispose:E}}function Tg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,M,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=M,m.group=p),t++,m}function o(u,d,f,g,M,p){const m=a(u,d,f,g,M,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,M,p){const m=a(u,d,f,g,M,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(d||Nl),i.length>1&&i.sort(d||Nl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ag(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Fl,s.set(n,[a])):i>=r.length?(a=new Fl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Cg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pg=0;function Dg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lg(s){const t=new Rg,e=Cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Ut,a=new Ut;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,T=0,w=0,x=0,v=0,_=0,A=0;c.sort(Dg);for(let S=0,b=c.length;S<b;S++){const D=c[S],O=D.color,L=D.intensity,N=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*L,u+=O.g*L,d+=O.b*L;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],L);A++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,z=e.get(D);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=D.shadow.matrix,T++}n.directional[f]=H,f++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(L),H.distance=N,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[M]=H;const X=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,X.updateMatrices(D),D.castShadow&&_++),n.spotLightMatrix[M]=X.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=U,x++}M++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(O).multiplyScalar(L),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=H,p++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const X=D.shadow,z=e.get(D);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(L),H.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==M||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==T||E.numPointShadows!==w||E.numSpotShadows!==x||E.numSpotMaps!==v||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+v-_,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=A,E.directionalLength=f,E.pointLength=g,E.spotLength=M,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=T,E.numPointShadows=w,E.numSpotShadows=x,E.numSpotMaps=v,E.numLightProbes=A,n.version=Pg++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0;const p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const w=c[m];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Ol(s){const t=new Lg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ig(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Ol(s),t.set(i,[o])):r>=a.length?(o=new Ol(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(s,t,e){let n=new oo;const i=new ot,r=new ot,a=new fe,o=new id({depthPacking:bh}),l=new sd,c={},h=e.maxTextureSize,u={[Hn]:Ve,[Ve]:Hn,[te]:te},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let m=this.type;this.render=function(_,A,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Cn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=m!==Rn&&this.type===Rn,N=m===Rn&&this.type!==Rn;for(let U=0,H=_.length;U<H;U++){const X=_[U],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();if(i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y)),z.map===null||L===!0||N===!0){const at=this.type!==Rn?{minFilter:Te,magFilter:Te}:{};z.map!==null&&z.map.dispose(),z.map=new He(i.x,i.y,at),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const $=z.getViewportCount();for(let at=0;at<$;at++){const Ct=z.getViewport(at);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a),z.updateMatrices(X,at),n=z.getFrustum(),x(A,E,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Rn&&T(z,E),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,b,D)};function T(_,A){const E=t.update(M);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new He(i.x,i.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(A,null,E,d,M,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(A,null,E,f,M,null)}function w(_,A,E,S){let b=null;const D=E.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)b=D;else if(b=E.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=b.uuid,L=A.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let U=N[L];U===void 0&&(U=b.clone(),N[L]=U,A.addEventListener("dispose",v)),b=U}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Rn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=s.properties.get(b);O.light=E}return b}function x(_,A,E,S,b){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===Rn)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,_.matrixWorld);const L=t.update(_),N=_.material;if(Array.isArray(N)){const U=L.groups;for(let H=0,X=U.length;H<X;H++){const z=U[H],Q=N[z.materialIndex];if(Q&&Q.visible){const $=w(_,Q,S,b);_.onBeforeShadow(s,_,A,E,L,$,z),s.renderBufferDirect(E,null,L,$,_,z),_.onAfterShadow(s,_,A,E,L,$,z)}}}else if(N.visible){const U=w(_,N,S,b);_.onBeforeShadow(s,_,A,E,L,U,null),s.renderBufferDirect(E,null,L,U,_,null),_.onAfterShadow(s,_,A,E,L,U,null)}}const O=_.children;for(let L=0,N=O.length;L<N;L++)x(O[L],A,E,S,b)}function v(_){_.target.removeEventListener("dispose",v);for(const E in c){const S=c[E],b=_.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Og={[sa]:ra,[aa]:ca,[oa]:ha,[ki]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:ki};function kg(s,t){function e(){let F=!1;const it=new fe;let rt=null;const ft=new fe(0,0,0,0);return{setMask:function(tt){rt!==tt&&!F&&(s.colorMask(tt,tt,tt,tt),rt=tt)},setLocked:function(tt){F=tt},setClear:function(tt,Z,vt,Ft,re){re===!0&&(tt*=Ft,Z*=Ft,vt*=Ft),it.set(tt,Z,vt,Ft),ft.equals(it)===!1&&(s.clearColor(tt,Z,vt,Ft),ft.copy(it))},reset:function(){F=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let F=!1,it=!1,rt=null,ft=null,tt=null;return{setReversed:function(Z){if(it!==Z){const vt=t.get("EXT_clip_control");Z?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),it=Z;const Ft=tt;tt=null,this.setClear(Ft)}},getReversed:function(){return it},setTest:function(Z){Z?j(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(Z){rt!==Z&&!F&&(s.depthMask(Z),rt=Z)},setFunc:function(Z){if(it&&(Z=Og[Z]),ft!==Z){switch(Z){case sa:s.depthFunc(s.NEVER);break;case ra:s.depthFunc(s.ALWAYS);break;case aa:s.depthFunc(s.LESS);break;case ki:s.depthFunc(s.LEQUAL);break;case oa:s.depthFunc(s.EQUAL);break;case la:s.depthFunc(s.GEQUAL);break;case ca:s.depthFunc(s.GREATER);break;case ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=Z}},setLocked:function(Z){F=Z},setClear:function(Z){tt!==Z&&(it&&(Z=1-Z),s.clearDepth(Z),tt=Z)},reset:function(){F=!1,rt=null,ft=null,tt=null,it=!1}}}function i(){let F=!1,it=null,rt=null,ft=null,tt=null,Z=null,vt=null,Ft=null,re=null;return{setTest:function(ee){F||(ee?j(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(ee){it!==ee&&!F&&(s.stencilMask(ee),it=ee)},setFunc:function(ee,yn,pn){(rt!==ee||ft!==yn||tt!==pn)&&(s.stencilFunc(ee,yn,pn),rt=ee,ft=yn,tt=pn)},setOp:function(ee,yn,pn){(Z!==ee||vt!==yn||Ft!==pn)&&(s.stencilOp(ee,yn,pn),Z=ee,vt=yn,Ft=pn)},setLocked:function(ee){F=ee},setClear:function(ee){re!==ee&&(s.clearStencil(ee),re=ee)},reset:function(){F=!1,it=null,rt=null,ft=null,tt=null,Z=null,vt=null,Ft=null,re=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,M=!1,p=null,m=null,T=null,w=null,x=null,v=null,_=null,A=new wt(0,0,0),E=0,S=!1,b=null,D=null,O=null,L=null,N=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=X>=2);let Q=null,$={};const at=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Gt=new fe().fromArray(at),Qt=new fe().fromArray(Ct);function Jt(F,it,rt,ft){const tt=new Uint8Array(4),Z=s.createTexture();s.bindTexture(F,Z),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<rt;vt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(it+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return Z}const K={};K[s.TEXTURE_2D]=Jt(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(ki),Lt(!1),_t(Po),j(s.CULL_FACE),le(Cn);function j(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function pt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Nt(F,it){return u[F]!==it?(s.bindFramebuffer(F,it),u[F]=it,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(F,it){let rt=f,ft=!1;if(F){rt=d.get(it),rt===void 0&&(rt=[],d.set(it,rt));const tt=F.textures;if(rt.length!==tt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,vt=tt.length;Z<vt;Z++)rt[Z]=s.COLOR_ATTACHMENT0+Z;rt.length=tt.length,ft=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,ft=!0);ft&&s.drawBuffers(rt)}function Kt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Ce={[ri]:s.FUNC_ADD,[ih]:s.FUNC_SUBTRACT,[sh]:s.FUNC_REVERSE_SUBTRACT};Ce[rh]=s.MIN,Ce[ah]=s.MAX;const I={[oh]:s.ZERO,[lh]:s.ONE,[ch]:s.SRC_COLOR,[na]:s.SRC_ALPHA,[mh]:s.SRC_ALPHA_SATURATE,[fh]:s.DST_COLOR,[uh]:s.DST_ALPHA,[hh]:s.ONE_MINUS_SRC_COLOR,[ia]:s.ONE_MINUS_SRC_ALPHA,[ph]:s.ONE_MINUS_DST_COLOR,[dh]:s.ONE_MINUS_DST_ALPHA,[gh]:s.CONSTANT_COLOR,[vh]:s.ONE_MINUS_CONSTANT_COLOR,[_h]:s.CONSTANT_ALPHA,[xh]:s.ONE_MINUS_CONSTANT_ALPHA};function le(F,it,rt,ft,tt,Z,vt,Ft,re,ee){if(F===Cn){M===!0&&(pt(s.BLEND),M=!1);return}if(M===!1&&(j(s.BLEND),M=!0),F!==nh){if(F!==p||ee!==S){if((m!==ri||x!==ri)&&(s.blendEquation(s.FUNC_ADD),m=ri,x=ri),ee)switch(F){case Fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ui:s.blendFunc(s.ONE,s.ONE);break;case Do:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Do:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,w=null,v=null,_=null,A.set(0,0,0),E=0,p=F,S=ee}return}tt=tt||it,Z=Z||rt,vt=vt||ft,(it!==m||tt!==x)&&(s.blendEquationSeparate(Ce[it],Ce[tt]),m=it,x=tt),(rt!==T||ft!==w||Z!==v||vt!==_)&&(s.blendFuncSeparate(I[rt],I[ft],I[Z],I[vt]),T=rt,w=ft,v=Z,_=vt),(Ft.equals(A)===!1||re!==E)&&(s.blendColor(Ft.r,Ft.g,Ft.b,re),A.copy(Ft),E=re),p=F,S=!1}function Ot(F,it){F.side===te?pt(s.CULL_FACE):j(s.CULL_FACE);let rt=F.side===Ve;it&&(rt=!rt),Lt(rt),F.blending===Fi&&F.transparent===!1?le(Cn):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ft=F.stencilWrite;o.setTest(ft),ft&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function _t(F){F!==Qc?(j(s.CULL_FACE),F!==D&&(F===Po?s.cullFace(s.BACK):F===th?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),D=F}function ce(F){F!==O&&(H&&s.lineWidth(F),O=F)}function xt(F,it,rt){F?(j(s.POLYGON_OFFSET_FILL),(L!==it||N!==rt)&&(s.polygonOffset(it,rt),L=it,N=rt)):pt(s.POLYGON_OFFSET_FILL)}function zt(F){F?j(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function ye(F){F===void 0&&(F=s.TEXTURE0+U-1),Q!==F&&(s.activeTexture(F),Q=F)}function ve(F,it,rt){rt===void 0&&(Q===null?rt=s.TEXTURE0+U-1:rt=Q);let ft=$[rt];ft===void 0&&(ft={type:void 0,texture:void 0},$[rt]=ft),(ft.type!==F||ft.texture!==it)&&(Q!==rt&&(s.activeTexture(rt),Q=rt),s.bindTexture(F,it||K[F]),ft.type=F,ft.texture=it)}function P(){const F=$[Q];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(F){Gt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Gt.copy(F))}function Dt(F){Qt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Qt.copy(F))}function bt(F,it){let rt=c.get(it);rt===void 0&&(rt=new WeakMap,c.set(it,rt));let ft=rt.get(F);ft===void 0&&(ft=s.getUniformBlockIndex(it,F.name),rt.set(F,ft))}function ct(F,it){const ft=c.get(it).get(F);l.get(it)!==ft&&(s.uniformBlockBinding(it,ft,F.__bindingPointIndex),l.set(it,ft))}function kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,$={},u={},d=new WeakMap,f=[],g=null,M=!1,p=null,m=null,T=null,w=null,x=null,v=null,_=null,A=new wt(0,0,0),E=0,S=!1,b=null,D=null,O=null,L=null,N=null,Gt.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Kt,setBlending:le,setMaterial:Ot,setFlipSided:Lt,setCullFace:_t,setLineWidth:ce,setPolygonOffset:xt,setScissorTest:zt,activeTexture:ye,bindTexture:ve,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:yt,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:Mt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Et,scissor:ut,viewport:Dt,reset:kt}}function Bg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return f?new OffscreenCanvas(P,y):fr("canvas")}function M(P,y,V){let Y=1;const J=ve(P);if((J.width>V||J.height>V)&&(Y=V/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Y*J.width),Et=Math.floor(Y*J.height);u===void 0&&(u=g(q,Et));const st=y?g(q,Et):u;return st.width=q,st.height=Et,st.getContext("2d").drawImage(P,0,0,q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Et+")."),st}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,y,V,Y,J=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=y;if(y===s.RED&&(V===s.FLOAT&&(q=s.R32F),V===s.HALF_FLOAT&&(q=s.R16F),V===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.R8UI),V===s.UNSIGNED_SHORT&&(q=s.R16UI),V===s.UNSIGNED_INT&&(q=s.R32UI),V===s.BYTE&&(q=s.R8I),V===s.SHORT&&(q=s.R16I),V===s.INT&&(q=s.R32I)),y===s.RG&&(V===s.FLOAT&&(q=s.RG32F),V===s.HALF_FLOAT&&(q=s.RG16F),V===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RG8UI),V===s.UNSIGNED_SHORT&&(q=s.RG16UI),V===s.UNSIGNED_INT&&(q=s.RG32UI),V===s.BYTE&&(q=s.RG8I),V===s.SHORT&&(q=s.RG16I),V===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(q=s.RGB16UI),V===s.UNSIGNED_INT&&(q=s.RGB32UI),V===s.BYTE&&(q=s.RGB8I),V===s.SHORT&&(q=s.RGB16I),V===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),V===s.UNSIGNED_INT&&(q=s.RGBA32UI),V===s.BYTE&&(q=s.RGBA8I),V===s.SHORT&&(q=s.RGBA16I),V===s.INT&&(q=s.RGBA32I)),y===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),y===s.RGBA){const Et=J?ur:Zt.getTransfer(Y);V===s.FLOAT&&(q=s.RGBA32F),V===s.HALF_FLOAT&&(q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(q=Et===ne?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(P,y){let V;return P?y===null||y===Gn||y===ms?V=s.DEPTH24_STENCIL8:y===_n?V=s.DEPTH32F_STENCIL8:y===ps&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===ms?V=s.DEPTH_COMPONENT24:y===_n?V=s.DEPTH_COMPONENT32F:y===ps&&(V=s.DEPTH_COMPONENT16),V}function v(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Te&&P.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function _(P){const y=P.target;y.removeEventListener("dispose",_),E(y),y.isVideoTexture&&h.delete(y)}function A(P){const y=P.target;y.removeEventListener("dispose",A),b(y)}function E(P){const y=n.get(P);if(y.__webglInit===void 0)return;const V=P.source,Y=d.get(V);if(Y){const J=Y[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(P),Object.keys(Y).length===0&&d.delete(V)}n.remove(P)}function S(P){const y=n.get(P);s.deleteTexture(y.__webglTexture);const V=P.source,Y=d.get(V);delete Y[y.__cacheKey],a.memory.textures--}function b(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let J=0;J<y.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=P.textures;for(let Y=0,J=V.length;Y<J;Y++){const q=n.get(V[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(P)}let D=0;function O(){D=0}function L(){const P=D;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function N(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function U(P,y){const V=n.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function H(P,y){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){K(V,P,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function X(P,y){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){K(V,P,y);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function z(P,y){const V=n.get(P);if(P.version>0&&V.__version!==P.version){j(V,P,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const Q={[hr]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},$={[Te]:s.NEAREST,[ic]:s.NEAREST_MIPMAP_NEAREST,[Rs]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},at={[Th]:s.NEVER,[Dh]:s.ALWAYS,[wh]:s.LESS,[dc]:s.LEQUAL,[Ah]:s.EQUAL,[Ph]:s.GEQUAL,[Rh]:s.GREATER,[Ch]:s.NOTEQUAL};function Ct(P,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===yr||y.magFilter===Rs||y.magFilter===ci||y.minFilter===vn||y.minFilter===yr||y.minFilter===Rs||y.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Q[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,$[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Te||y.minFilter!==Rs&&y.minFilter!==ci||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Gt(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",_));const Y=y.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const q=N(y);if(q!==P.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[q].usedTimes++;const Et=J[P.__cacheKey];Et!==void 0&&(J[P.__cacheKey].usedTimes--,Et.usedTimes===0&&S(y)),P.__cacheKey=q,P.__webglTexture=J[q].texture}return V}function Qt(P,y,V){return Math.floor(Math.floor(P/V)/y)}function Jt(P,y,V,Y){const q=P.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,V,Y,y.data);else{q.sort((nt,ut)=>nt.start-ut.start);let Et=0;for(let nt=1;nt<q.length;nt++){const ut=q[Et],Dt=q[nt],bt=ut.start+ut.count,ct=Qt(Dt.start,y.width,4),kt=Qt(ut.start,y.width,4);Dt.start<=bt+1&&ct===kt&&Qt(Dt.start+Dt.count-1,y.width,4)===ct?ut.count=Math.max(ut.count,Dt.start+Dt.count-ut.start):(++Et,q[Et]=Dt)}q.length=Et+1;const st=s.getParameter(s.UNPACK_ROW_LENGTH),Mt=s.getParameter(s.UNPACK_SKIP_PIXELS),yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let nt=0,ut=q.length;nt<ut;nt++){const Dt=q[nt],bt=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),kt=bt%y.width,F=Math.floor(bt/y.width),it=ct,rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,kt,F,it,rt,V,Y,y.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,st),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function K(P,y,V){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);const J=Gt(P,y),q=y.source;e.bindTexture(Y,P.__webglTexture,s.TEXTURE0+V);const Et=n.get(q);if(q.version!==Et.__version||J===!0){e.activeTexture(s.TEXTURE0+V);const st=Zt.getPrimaries(Zt.workingColorSpace),Mt=y.colorSpace===kn?null:Zt.getPrimaries(y.colorSpace),yt=y.colorSpace===kn||st===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let nt=M(y.image,!1,i.maxTextureSize);nt=ye(y,nt);const ut=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type);let bt=w(y.internalFormat,ut,Dt,y.colorSpace,y.isVideoTexture);Ct(Y,y);let ct;const kt=y.mipmaps,F=y.isVideoTexture!==!0,it=Et.__version===void 0||J===!0,rt=q.dataReady,ft=v(y,nt);if(y.isDepthTexture)bt=x(y.format===vs,y.type),it&&(F?e.texStorage2D(s.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,ut,Dt,null));else if(y.isDataTexture)if(kt.length>0){F&&it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],F?rt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ut,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,bt,ct.width,ct.height,0,ut,Dt,ct.data);y.generateMipmaps=!1}else F?(it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,nt.width,nt.height),rt&&Jt(y,nt,ut,Dt)):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,ut,Dt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,bt,kt[0].width,kt[0].height,nt.depth);for(let tt=0,Z=kt.length;tt<Z;tt++)if(ct=kt[tt],y.format!==un)if(ut!==null)if(F){if(rt)if(y.layerUpdates.size>0){const vt=fl(ct.width,ct.height,y.format,y.type);for(const Ft of y.layerUpdates){const re=ct.data.subarray(Ft*vt/ct.data.BYTES_PER_ELEMENT,(Ft+1)*vt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Ft,ct.width,ct.height,1,ut,re)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ut,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,bt,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ut,Dt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,bt,ct.width,ct.height,nt.depth,0,ut,Dt,ct.data)}else{F&&it&&e.texStorage2D(s.TEXTURE_2D,ft,bt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],y.format!==un?ut!==null?F?rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,bt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?rt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ut,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,bt,ct.width,ct.height,0,ut,Dt,ct.data)}else if(y.isDataArrayTexture)if(F){if(it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,bt,nt.width,nt.height,nt.depth),rt)if(y.layerUpdates.size>0){const tt=fl(nt.width,nt.height,y.format,y.type);for(const Z of y.layerUpdates){const vt=nt.data.subarray(Z*tt/nt.data.BYTES_PER_ELEMENT,(Z+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,ut,Dt,vt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Dt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,ut,Dt,nt.data);else if(y.isData3DTexture)F?(it&&e.texStorage3D(s.TEXTURE_3D,ft,bt,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Dt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,ut,Dt,nt.data);else if(y.isFramebufferTexture){if(it)if(F)e.texStorage2D(s.TEXTURE_2D,ft,bt,nt.width,nt.height);else{let tt=nt.width,Z=nt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(s.TEXTURE_2D,vt,bt,tt,Z,0,ut,Dt,null),tt>>=1,Z>>=1}}else if(kt.length>0){if(F&&it){const tt=ve(kt[0]);e.texStorage2D(s.TEXTURE_2D,ft,bt,tt.width,tt.height)}for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],F?rt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ut,Dt,ct):e.texImage2D(s.TEXTURE_2D,tt,bt,ut,Dt,ct);y.generateMipmaps=!1}else if(F){if(it){const tt=ve(nt);e.texStorage2D(s.TEXTURE_2D,ft,bt,tt.width,tt.height)}rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Dt,nt)}else e.texImage2D(s.TEXTURE_2D,0,bt,ut,Dt,nt);p(y)&&m(Y),Et.__version=q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function j(P,y,V){if(y.image.length!==6)return;const Y=Gt(P,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const q=n.get(J);if(J.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+V);const Et=Zt.getPrimaries(Zt.workingColorSpace),st=y.colorSpace===kn?null:Zt.getPrimaries(y.colorSpace),Mt=y.colorSpace===kn||Et===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const yt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!yt&&!nt?ut[Z]=M(y.image[Z],!0,i.maxCubemapSize):ut[Z]=nt?y.image[Z].image:y.image[Z],ut[Z]=ye(y,ut[Z]);const Dt=ut[0],bt=r.convert(y.format,y.colorSpace),ct=r.convert(y.type),kt=w(y.internalFormat,bt,ct,y.colorSpace),F=y.isVideoTexture!==!0,it=q.__version===void 0||Y===!0,rt=J.dataReady;let ft=v(y,Dt);Ct(s.TEXTURE_CUBE_MAP,y);let tt;if(yt){F&&it&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,kt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){tt=ut[Z].mipmaps;for(let vt=0;vt<tt.length;vt++){const Ft=tt[vt];y.format!==un?bt!==null?F?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,kt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ft.width,Ft.height,bt,ct,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,kt,Ft.width,Ft.height,0,bt,ct,Ft.data)}}}else{if(tt=y.mipmaps,F&&it){tt.length>0&&ft++;const Z=ve(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){F?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,bt,ct,ut[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ut[Z].width,ut[Z].height,0,bt,ct,ut[Z].data);for(let vt=0;vt<tt.length;vt++){const re=tt[vt].image[Z].image;F?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,re.width,re.height,bt,ct,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,kt,re.width,re.height,0,bt,ct,re.data)}}else{F?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ct,ut[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,bt,ct,ut[Z]);for(let vt=0;vt<tt.length;vt++){const Ft=tt[vt];F?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,bt,ct,Ft.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,kt,bt,ct,Ft.image[Z])}}}p(y)&&m(s.TEXTURE_CUBE_MAP),q.__version=J.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function pt(P,y,V,Y,J,q){const Et=r.convert(V.format,V.colorSpace),st=r.convert(V.type),Mt=w(V.internalFormat,Et,st,V.colorSpace),yt=n.get(y),nt=n.get(V);if(nt.__renderTarget=y,!yt.__hasExternalTextures){const ut=Math.max(1,y.width>>q),Dt=Math.max(1,y.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Mt,ut,Dt,y.depth,0,Et,st,null):e.texImage2D(J,q,Mt,ut,Dt,0,Et,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,nt.__webglTexture,0,ce(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,nt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(P,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){const Y=y.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=x(y.stencilBuffer,J),Et=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=ce(y);xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,q,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,P)}else{const Y=y.textures;for(let J=0;J<Y.length;J++){const q=Y[J],Et=r.convert(q.format,q.colorSpace),st=r.convert(q.type),Mt=w(q.internalFormat,Et,st,q.colorSpace),yt=ce(y);V&&xt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,Mt,y.width,y.height):xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,Mt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);const J=Y.__webglTexture,q=ce(y);if(y.depthTexture.format===gs)xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===vs)xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Kt(P){const y=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Y}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?Tt(y.__webglFramebuffer[0],P):Tt(y.__webglFramebuffer,P)}else if(V){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),Nt(y.__webglDepthbuffer[Y],P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Nt(y.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(P,y,V){const Y=n.get(P);y!==void 0&&pt(Y.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Kt(P)}function I(P){const y=P.texture,V=n.get(P),Y=n.get(y);P.addEventListener("dispose",A);const J=P.textures,q=P.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,a.memory.textures++),q){V.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[st]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)V.__webglFramebuffer[st][Mt]=s.createFramebuffer()}else V.__webglFramebuffer[st]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)V.__webglFramebuffer[st]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let st=0,Mt=J.length;st<Mt;st++){const yt=n.get(J[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&xt(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const Mt=J[st];V.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[st]);const yt=r.convert(Mt.format,Mt.colorSpace),nt=r.convert(Mt.type),ut=w(Mt.internalFormat,yt,nt,Mt.colorSpace,P.isXRRenderTarget===!0),Dt=ce(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,V.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)pt(V.__webglFramebuffer[st][Mt],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt);else pt(V.__webglFramebuffer[st],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(y)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let st=0,Mt=J.length;st<Mt;st++){const yt=J[st],nt=n.get(yt);let ut=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Ct(ut,yt),pt(V.__webglFramebuffer,P,yt,s.COLOR_ATTACHMENT0+st,ut,0),p(yt)&&m(ut)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(st=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ct(st,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)pt(V.__webglFramebuffer[Mt],P,y,s.COLOR_ATTACHMENT0,st,Mt);else pt(V.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,st,0);p(y)&&m(st),e.unbindTexture()}P.depthBuffer&&Kt(P)}function le(P){const y=P.textures;for(let V=0,Y=y.length;V<Y;V++){const J=y[V];if(p(J)){const q=T(P),Et=n.get(J).__webglTexture;e.bindTexture(q,Et),m(q),e.unbindTexture()}}}const Ot=[],Lt=[];function _t(P){if(P.samples>0){if(xt(P)===!1){const y=P.textures,V=P.width,Y=P.height;let J=s.COLOR_BUFFER_BIT;const q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),st=y.length>1;if(st)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Mt=P.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const nt=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,J,s.NEAREST),l===!0&&(Ot.length=0,Lt.length=0,Ot.push(s.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(q),Lt.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const nt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ce(P){return Math.min(i.maxSamples,P.samples)}function xt(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(P){const y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function ye(P,y){const V=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Vi&&V!==kn&&(Zt.getTransfer(V)===ne?(Y!==un||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ce,this.setupRenderTarget=I,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function zg(s,t){function e(n,i=kn){let r;const a=Zt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===to)return s.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return s.BYTE;if(n===rc)return s.SHORT;if(n===ps)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===je)return s.HALF_FLOAT;if(n===lc)return s.ALPHA;if(n===cc)return s.RGB;if(n===un)return s.RGBA;if(n===gs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===vr)return s.RED;if(n===no)return s.RED_INTEGER;if(n===hc)return s.RG;if(n===io)return s.RG_INTEGER;if(n===so)return s.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===xa)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ya||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Ba||n===za||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:Vg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends qi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",p=new Gg,m={},T=e.getContextAttributes();let w=null,x=null;const v=[],_=[],A=new ot;let E=null;const S=new nn;S.viewport=new fe;const b=new nn;b.viewport=new fe;const D=[S,b],O=new cd;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=v[K];return j===void 0&&(j=new Gr,v[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=v[K];return j===void 0&&(j=new Gr,v[K]=j),j.getGripSpace()},this.getHand=function(K){let j=v[K];return j===void 0&&(j=new Gr,v[K]=j),j.getHandSpace()};function U(K){const j=_.indexOf(K.inputSource);if(j===-1)return;const pt=v[j];pt!==void 0&&(pt.update(K.inputSource,K.frame,c||a),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let K=0;K<v.length;K++){const j=_[K];j!==null&&(_[K]=null,v[K].disconnect(j))}L=null,N=null,p.reset();for(const K in m)delete m[K];t.setRenderTarget(w),f=null,d=null,u=null,i=null,x=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),T.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,Tt=null;T.depth&&(Tt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?vs:gs,Nt=T.stencil?ms:Gn);const Kt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new He(d.textureWidth,d.textureHeight,{format:un,type:Mn,depthTexture:new ho(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new He(f.framebufferWidth,f.framebufferHeight,{format:un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(K){for(let j=0;j<K.removed.length;j++){const pt=K.removed[j],Nt=_.indexOf(pt);Nt>=0&&(_[Nt]=null,v[Nt].disconnect(pt))}for(let j=0;j<K.added.length;j++){const pt=K.added[j];let Nt=_.indexOf(pt);if(Nt===-1){for(let Kt=0;Kt<v.length;Kt++)if(Kt>=_.length){_.push(pt),Nt=Kt;break}else if(_[Kt]===null){_[Kt]=pt,Nt=Kt;break}if(Nt===-1)break}const Tt=v[Nt];Tt&&Tt.connect(pt)}}const z=new C,Q=new C;function $(K,j,pt){z.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(pt.matrixWorld);const Nt=z.distanceTo(Q),Tt=j.projectionMatrix.elements,Kt=pt.projectionMatrix.elements,Ce=Tt[14]/(Tt[10]-1),I=Tt[14]/(Tt[10]+1),le=(Tt[9]+1)/Tt[5],Ot=(Tt[9]-1)/Tt[5],Lt=(Tt[8]-1)/Tt[0],_t=(Kt[8]+1)/Kt[0],ce=Ce*Lt,xt=Ce*_t,zt=Nt/(-Lt+_t),ye=zt*-Lt;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ye),K.translateZ(zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ve=Ce+zt,P=I+zt,y=ce-ye,V=xt+(Nt-ye),Y=le*I/P*ve,J=Ot*I/P*ve;K.projectionMatrix.makePerspective(y,V,Y,J,ve,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function at(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,pt=K.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(pt=p.depthFar)),O.near=b.near=S.near=j,O.far=b.far=S.far=pt,(L!==O.near||N!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,N=O.far),O.layers.mask=K.layers.mask|6,S.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const Nt=K.parent,Tt=O.cameras;at(O,Nt);for(let Kt=0;Kt<Tt.length;Kt++)at(Tt[Kt],Nt);Tt.length===2?$(O,S,b):O.projectionMatrix.copy(S.projectionMatrix),Ct(K,O,Nt)};function Ct(K,j,pt){pt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_s*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return m[K]};let Gt=null;function Qt(K,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Nt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let I=0;I<pt.length;I++){const le=pt[I];let Ot=null;if(f!==null)Ot=f.getViewport(le);else{const _t=u.getViewSubImage(d,le);Ot=_t.viewport,I===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let Lt=D[I];Lt===void 0&&(Lt=new nn,Lt.layers.enable(I),Lt.viewport=new fe,D[I]=Lt),Lt.matrix.fromArray(le.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(le.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),I===0&&(O.matrix.copy(Lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(Lt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const I=u.getDepthInformation(pt[0]);I&&I.isValid&&I.texture&&p.init(I,i.renderState)}if(Tt&&Tt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<pt.length;I++){const le=pt[I].camera;if(le){let Ot=m[le];Ot||(Ot=new bc,m[le]=Ot);const Lt=u.getCameraImage(le);Ot.sourceTexture=Lt}}}}for(let pt=0;pt<v.length;pt++){const Nt=_[pt],Tt=v[pt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,j,c||a)}Gt&&Gt(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Jt=new Nc;Jt.setAnimationLoop(Qt),this.setAnimationLoop=function(K){Gt=K},this.dispose=function(){}}}const ti=new fn,Xg=new Ut;function qg(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,w,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),w=T.envMap,x=T.envMapRotation;w&&(p.envMap.value=w,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(ti)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const x=w.program;n.uniformBlockBinding(T,x)}function c(T,w){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",p));const v=w.program;n.updateUBOMapping(T,v);const _=t.render.frame;r[T.id]!==_&&(d(T),r[T.id]=_)}function h(T){const w=u();T.__bindingPointIndex=w;const x=s.createBuffer(),v=T.__size,_=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,v,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,x),x}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=i[T.id],x=T.uniforms,v=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let _=0,A=x.length;_<A;_++){const E=Array.isArray(x[_])?x[_]:[x[_]];for(let S=0,b=E.length;S<b;S++){const D=E[S];if(f(D,_,S,v)===!0){const O=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let U=0;U<L.length;U++){const H=L[U],X=M(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+N,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,w,x,v){const _=T.value,A=w+"_"+x;if(v[A]===void 0)return typeof _=="number"||typeof _=="boolean"?v[A]=_:v[A]=_.clone(),!0;{const E=v[A];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return v[A]=_,!0}else if(E.equals(_)===!1)return E.copy(_),!0}return!1}function g(T){const w=T.uniforms;let x=0;const v=16;for(let A=0,E=w.length;A<E;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let b=0,D=S.length;b<D;b++){const O=S[b],L=Array.isArray(O.value)?O.value:[O.value];for(let N=0,U=L.length;N<U;N++){const H=L[N],X=M(H),z=x%v,Q=z%X.boundary,$=z+Q;x+=Q,$!==0&&v-$<X.storage&&(x+=v-$),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const _=x%v;return _>0&&(x+=v-_),T.__size=x,T.__cache={},this}function M(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){const w=T.target;w.removeEventListener("dispose",p);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function m(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class $g{constructor(t={}){const{canvas:e=$h(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,m=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let v=!1;this._outputColorSpace=Ue;let _=0,A=0,E=null,S=-1,b=null;const D=new fe,O=new fe;let L=null;const N=new wt(0);let U=0,H=e.width,X=e.height,z=1,Q=null,$=null;const at=new fe(0,0,H,X),Ct=new fe(0,0,H,X);let Gt=!1;const Qt=new oo;let Jt=!1,K=!1;const j=new Ut,pt=new C,Nt=new fe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Ce(){return E===null?z:1}let I=n;function le(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",tt,!1),I===null){const k="webgl2";if(I=le(k,R),I===null)throw le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ot,Lt,_t,ce,xt,zt,ye,ve,P,y,V,Y,J,q,Et,st,Mt,yt,nt,ut,Dt,bt,ct,kt;function F(){Ot=new sm(I),Ot.init(),bt=new zg(I,Ot),Lt=new Jp(I,Ot,t,bt),_t=new kg(I,Ot),Lt.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),ce=new om(I),xt=new Tg,zt=new Bg(I,Ot,_t,xt,Lt,bt,ce),ye=new Qp(x),ve=new im(x),P=new dd(I),ct=new Kp(I,P),y=new rm(I,P,ce,ct),V=new cm(I,y,P,ce),nt=new lm(I,Lt,zt),st=new jp(xt),Y=new Eg(x,ye,ve,Ot,Lt,ct,st),J=new qg(x,xt),q=new Ag,Et=new Ig(Ot),yt=new $p(x,ye,ve,_t,V,f,l),Mt=new Fg(x,V,Lt),kt=new Yg(I,ce,Lt,_t),ut=new Zp(I,Ot,ce),Dt=new am(I,Ot,ce),ce.programs=Y.programs,x.capabilities=Lt,x.extensions=Ot,x.properties=xt,x.renderLists=q,x.shadowMap=Mt,x.state=_t,x.info=ce}F();const it=new Wg(x,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(H,X,!1))},this.getSize=function(R){return R.set(H,X)},this.setSize=function(R,k,G=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,X=k,e.width=Math.floor(R*z),e.height=Math.floor(k*z),G===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(H*z,X*z).floor()},this.setDrawingBufferSize=function(R,k,G){H=R,X=k,z=G,e.width=Math.floor(R*G),e.height=Math.floor(k*G),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,k,G,W){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,k,G,W),_t.viewport(D.copy(at).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,k,G,W){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,k,G,W),_t.scissor(O.copy(Ct).multiplyScalar(z).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(R){_t.setScissorTest(Gt=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,G=!0){let W=0;if(R){let B=!1;if(E!==null){const et=E.texture.format;B=et===so||et===io||et===no}if(B){const et=E.texture.type,ht=et===Mn||et===Gn||et===ps||et===ms||et===to||et===eo,mt=yt.getClearColor(),dt=yt.getClearAlpha(),Pt=mt.r,It=mt.g,At=mt.b;ht?(g[0]=Pt,g[1]=It,g[2]=At,g[3]=dt,I.clearBufferuiv(I.COLOR,0,g)):(M[0]=Pt,M[1]=It,M[2]=At,M[3]=dt,I.clearBufferiv(I.COLOR,0,M))}else W|=I.COLOR_BUFFER_BIT}k&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),yt.dispose(),q.dispose(),Et.dispose(),xt.dispose(),ye.dispose(),ve.dispose(),V.dispose(),ct.dispose(),kt.dispose(),Y.dispose(),it.dispose(),it.removeEventListener("sessionstart",pn),it.removeEventListener("sessionend",Eo),Yn.stop()};function rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=ce.autoReset,k=Mt.enabled,G=Mt.autoUpdate,W=Mt.needsUpdate,B=Mt.type;F(),ce.autoReset=R,Mt.enabled=k,Mt.autoUpdate=G,Mt.needsUpdate=W,Mt.type=B}function tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Z(R){const k=R.target;k.removeEventListener("dispose",Z),vt(k)}function vt(R){Ft(R),xt.remove(R)}function Ft(R){const k=xt.get(R).programs;k!==void 0&&(k.forEach(function(G){Y.releaseProgram(G)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,G,W,B,et){k===null&&(k=Tt);const ht=B.isMesh&&B.matrixWorld.determinant()<0,mt=Yc(R,k,G,W,B);_t.setMaterial(W,ht);let dt=G.index,Pt=1;if(W.wireframe===!0){if(dt=y.getWireframeAttribute(G),dt===void 0)return;Pt=2}const It=G.drawRange,At=G.attributes.position;let Yt=It.start*Pt,ie=(It.start+It.count)*Pt;et!==null&&(Yt=Math.max(Yt,et.start*Pt),ie=Math.min(ie,(et.start+et.count)*Pt)),dt!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,dt.count)):At!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,At.count));const me=ie-Yt;if(me<0||me===1/0)return;ct.setup(B,W,mt,G,dt);let oe,se=ut;if(dt!==null&&(oe=P.get(dt),se=Dt,se.setIndex(oe)),B.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Ce()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(B.isLine){let Rt=W.linewidth;Rt===void 0&&(Rt=1),_t.setLineWidth(Rt*Ce()),B.isLineSegments?se.setMode(I.LINES):B.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else B.isPoints?se.setMode(I.POINTS):B.isSprite&&se.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Rt=B._multiDrawStarts,ue=B._multiDrawCounts,jt=B._multiDrawCount,Ye=dt?P.get(dt).bytesPerElement:1,vi=xt.get(W).currentProgram.getUniforms();for(let $e=0;$e<jt;$e++)vi.setValue(I,"_gl_DrawID",$e),se.render(Rt[$e]/Ye,ue[$e])}else if(B.isInstancedMesh)se.renderInstances(Yt,me,B.count);else if(G.isInstancedBufferGeometry){const Rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ue=Math.min(G.instanceCount,Rt);se.renderInstances(Yt,me,ue)}else se.render(Yt,me)};function re(R,k,G){R.transparent===!0&&R.side===te&&R.forceSinglePass===!1?(R.side=Ve,R.needsUpdate=!0,As(R,k,G),R.side=Hn,R.needsUpdate=!0,As(R,k,G),R.side=te):As(R,k,G)}this.compile=function(R,k,G=null){G===null&&(G=R),m=Et.get(G),m.init(k),w.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),R!==G&&R.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const mt=et[ht];re(mt,G,B),W.add(mt)}else re(et,G,B),W.add(et)}),m=w.pop(),W},this.compileAsync=function(R,k,G=null){const W=this.compile(R,k,G);return new Promise(B=>{function et(){if(W.forEach(function(ht){xt.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){B(R);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ee=null;function yn(R){ee&&ee(R)}function pn(){Yn.stop()}function Eo(){Yn.start()}const Yn=new Nc;Yn.setAnimationLoop(yn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){ee=R,it.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},it.addEventListener("sessionstart",pn),it.addEventListener("sessionend",Eo),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,k,E),m=Et.get(R,w.length),m.init(k),w.push(m),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Qt.setFromProjectionMatrix(j,xn,k.reversedDepth),K=this.localClippingEnabled,Jt=st.init(this.clippingPlanes,K),p=q.get(R,T.length),p.init(),T.push(p),it.enabled===!0&&it.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Mr(et,k,-1/0,x.sortObjects)}Mr(R,k,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Q,$),Kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Kt&&yt.addToRenderList(p,R),this.info.render.frame++,Jt===!0&&st.beginShadows();const G=m.state.shadowsArray;Mt.render(G,R,k),Jt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,B=p.transmissive;if(m.setupLights(),k.isArrayCamera){const et=k.cameras;if(B.length>0)for(let ht=0,mt=et.length;ht<mt;ht++){const dt=et[ht];wo(W,B,R,dt)}Kt&&yt.render(R);for(let ht=0,mt=et.length;ht<mt;ht++){const dt=et[ht];To(p,R,dt,dt.viewport)}}else B.length>0&&wo(W,B,R,k),Kt&&yt.render(R),To(p,R,k);E!==null&&A===0&&(zt.updateMultisampleRenderTarget(E),zt.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,k),ct.resetDefaultState(),S=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],Jt===!0&&st.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Mr(R,k,G,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Qt.intersectsSprite(R)){W&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const ht=V.update(R),mt=R.material;mt.visible&&p.push(R,ht,mt,G,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Qt.intersectsObject(R))){const ht=V.update(R),mt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Nt.copy(ht.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(mt)){const dt=ht.groups;for(let Pt=0,It=dt.length;Pt<It;Pt++){const At=dt[Pt],Yt=mt[At.materialIndex];Yt&&Yt.visible&&p.push(R,ht,Yt,G,Nt.z,At)}}else mt.visible&&p.push(R,ht,mt,G,Nt.z,null)}}const et=R.children;for(let ht=0,mt=et.length;ht<mt;ht++)Mr(et[ht],k,G,W)}function To(R,k,G,W){const B=R.opaque,et=R.transmissive,ht=R.transparent;m.setupLightsView(G),Jt===!0&&st.setGlobalState(x.clippingPlanes,G),W&&_t.viewport(D.copy(W)),B.length>0&&ws(B,k,G),et.length>0&&ws(et,k,G),ht.length>0&&ws(ht,k,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function wo(R,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new He(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?je:Mn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const et=m.state.transmissionRenderTarget[W.id],ht=W.viewport||D;et.setSize(ht.z*x.transmissionResolutionScale,ht.w*x.transmissionResolutionScale);const mt=x.getRenderTarget(),dt=x.getActiveCubeFace(),Pt=x.getActiveMipmapLevel();x.setRenderTarget(et),x.getClearColor(N),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&yt.render(G);const It=x.toneMapping;x.toneMapping=Vn;const At=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Jt===!0&&st.setGlobalState(x.clippingPlanes,W),ws(R,G,W),zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ie=0,me=k.length;ie<me;ie++){const oe=k[ie],se=oe.object,Rt=oe.geometry,ue=oe.material,jt=oe.group;if(ue.side===te&&se.layers.test(W.layers)){const Ye=ue.side;ue.side=Ve,ue.needsUpdate=!0,Ao(se,G,W,Rt,ue,jt),ue.side=Ye,ue.needsUpdate=!0,Yt=!0}}Yt===!0&&(zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et))}x.setRenderTarget(mt,dt,Pt),x.setClearColor(N,U),At!==void 0&&(W.viewport=At),x.toneMapping=It}function ws(R,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,et=R.length;B<et;B++){const ht=R[B],mt=ht.object,dt=ht.geometry,Pt=ht.group;let It=ht.material;It.allowOverride===!0&&W!==null&&(It=W),mt.layers.test(G.layers)&&Ao(mt,k,G,dt,It,Pt)}}function Ao(R,k,G,W,B,et){R.onBeforeRender(x,k,G,W,B,et),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(x,k,G,W,R,et),B.transparent===!0&&B.side===te&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,x.renderBufferDirect(G,k,W,B,R,et),B.side=Hn,B.needsUpdate=!0,x.renderBufferDirect(G,k,W,B,R,et),B.side=te):x.renderBufferDirect(G,k,W,B,R,et),R.onAfterRender(x,k,G,W,B,et)}function As(R,k,G){k.isScene!==!0&&(k=Tt);const W=xt.get(R),B=m.state.lights,et=m.state.shadowsArray,ht=B.state.version,mt=Y.getParameters(R,B.state,et,k,G),dt=Y.getProgramCacheKey(mt);let Pt=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?ve:ye).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Pt===void 0&&(R.addEventListener("dispose",Z),Pt=new Map,W.programs=Pt);let It=Pt.get(dt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===ht)return Co(R,mt),It}else mt.uniforms=Y.getUniforms(R),R.onBeforeCompile(mt,x),It=Y.acquireProgram(mt,dt),Pt.set(dt,It),W.uniforms=mt.uniforms;const At=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=st.uniform),Co(R,mt),W.needsLights=Kc(R),W.lightsStateVersion=ht,W.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMap.value=B.state.directionalShadowMap,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotShadowMap.value=B.state.spotShadowMap,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMap.value=B.state.pointShadowMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function Ro(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=lr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Co(R,k){const G=xt.get(R);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Yc(R,k,G,W,B){k.isScene!==!0&&(k=Tt),zt.resetTextureUnits();const et=k.fog,ht=W.isMeshStandardMaterial?k.environment:null,mt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Vi,dt=(W.isMeshStandardMaterial?ve:ye).get(W.envMap||ht),Pt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color;let me=Vn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=x.toneMapping);const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=oe!==void 0?oe.length:0,Rt=xt.get(W),ue=m.state.lights;if(Jt===!0&&(K===!0||R!==b)){const Fe=R===b&&W.id===S;st.setState(W,R,Fe)}let jt=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ue.state.version||Rt.outputColorSpace!==mt||B.isBatchedMesh&&Rt.batching===!1||!B.isBatchedMesh&&Rt.batching===!0||B.isBatchedMesh&&Rt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Rt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Rt.instancing===!1||!B.isInstancedMesh&&Rt.instancing===!0||B.isSkinnedMesh&&Rt.skinning===!1||!B.isSkinnedMesh&&Rt.skinning===!0||B.isInstancedMesh&&Rt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Rt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Rt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Rt.instancingMorph===!1&&B.morphTexture!==null||Rt.envMap!==dt||W.fog===!0&&Rt.fog!==et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Pt||Rt.vertexTangents!==It||Rt.morphTargets!==At||Rt.morphNormals!==Yt||Rt.morphColors!==ie||Rt.toneMapping!==me||Rt.morphTargetsCount!==se)&&(jt=!0):(jt=!0,Rt.__version=W.version);let Ye=Rt.currentProgram;jt===!0&&(Ye=As(W,k,B));let vi=!1,$e=!1,Zi=!1;const de=Ye.getUniforms(),Qe=Rt.uniforms;if(_t.useProgram(Ye.program)&&(vi=!0,$e=!0,Zi=!0),W.id!==S&&(S=W.id,$e=!0),vi||b!==R){_t.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),de.setValue(I,"projectionMatrix",R.projectionMatrix),de.setValue(I,"viewMatrix",R.matrixWorldInverse);const We=de.map.cameraPosition;We!==void 0&&We.setValue(I,pt.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,$e=!0,Zi=!0)}if(B.isSkinnedMesh){de.setOptional(I,B,"bindMatrix"),de.setOptional(I,B,"bindMatrixInverse");const Fe=B.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),de.setValue(I,"boneTexture",Fe.boneTexture,zt))}B.isBatchedMesh&&(de.setOptional(I,B,"batchingTexture"),de.setValue(I,"batchingTexture",B._matricesTexture,zt),de.setOptional(I,B,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",B._indirectTexture,zt),de.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",B._colorsTexture,zt));const tn=G.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&nt.update(B,G,Ye),($e||Rt.receiveShadow!==B.receiveShadow)&&(Rt.receiveShadow=B.receiveShadow,de.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=dt,Qe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Qe.envMapIntensity.value=k.environmentIntensity),$e&&(de.setValue(I,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&$c(Qe,Zi),et&&W.fog===!0&&J.refreshFogUniforms(Qe,et),J.refreshMaterialUniforms(Qe,W,z,X,m.state.transmissionRenderTarget[R.id]),lr.upload(I,Ro(Rt),Qe,zt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lr.upload(I,Ro(Rt),Qe,zt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(I,"center",B.center),de.setValue(I,"modelViewMatrix",B.modelViewMatrix),de.setValue(I,"normalMatrix",B.normalMatrix),de.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fe=W.uniformsGroups;for(let We=0,Sr=Fe.length;We<Sr;We++){const $n=Fe[We];kt.update($n,Ye),kt.bind($n,Ye)}}return Ye}function $c(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Kc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,k,G){const W=xt.get(R);W.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),xt.get(R.texture).__webglTexture=k,xt.get(R.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const G=xt.get(R);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0};const Zc=I.createFramebuffer();this.setRenderTarget=function(R,k=0,G=0){E=R,_=k,A=G;let W=!0,B=null,et=!1,ht=!1;if(R){const dt=xt.get(R);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(R);else if(dt.__hasExternalTextures)zt.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const At=R.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(R.width!==At.image.width||R.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(R)}}const Pt=R.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);const It=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(It[k])?B=It[k][G]:B=It[k],et=!0):R.samples>0&&zt.useMultisampledRTT(R)===!1?B=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[G]:B=It,D.copy(R.viewport),O.copy(R.scissor),L=R.scissorTest}else D.copy(at).multiplyScalar(z).floor(),O.copy(Ct).multiplyScalar(z).floor(),L=Gt;if(G!==0&&(B=Zc),_t.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&_t.drawBuffers(R,B),_t.viewport(D),_t.scissor(O),_t.setScissorTest(L),et){const dt=xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,dt.__webglTexture,G)}else if(ht){const dt=k;for(let Pt=0;Pt<R.textures.length;Pt++){const It=xt.get(R.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,It.__webglTexture,G,dt)}}else if(R!==null&&G!==0){const dt=xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(R,k,G,W,B,et,ht,mt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(dt=dt[ht]),dt){_t.bindFramebuffer(I.FRAMEBUFFER,dt);try{const Pt=R.textures[mt],It=Pt.format,At=Pt.type;if(!Lt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&G>=0&&G<=R.height-B&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(k,G,W,B,bt.convert(It),bt.convert(At),et))}finally{const Pt=E!==null?xt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,k,G,W,B,et,ht,mt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(dt=dt[ht]),dt)if(k>=0&&k<=R.width-W&&G>=0&&G<=R.height-B){_t.bindFramebuffer(I.FRAMEBUFFER,dt);const Pt=R.textures[mt],It=Pt.format,At=Pt.type;if(!Lt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(k,G,W,B,bt.convert(It),bt.convert(At),0);const ie=E!==null?xt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ie);const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Kh(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Yt),I.deleteSync(me),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,G=0){const W=Math.pow(2,-G),B=Math.floor(R.image.width*W),et=Math.floor(R.image.height*W),ht=k!==null?k.x:0,mt=k!==null?k.y:0;zt.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ht,mt,B,et),_t.unbindTexture()};const Jc=I.createFramebuffer(),jc=I.createFramebuffer();this.copyTextureToTexture=function(R,k,G=null,W=null,B=0,et=null){et===null&&(B!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let ht,mt,dt,Pt,It,At,Yt,ie,me;const oe=R.isCompressedTexture?R.mipmaps[et]:R.image;if(G!==null)ht=G.max.x-G.min.x,mt=G.max.y-G.min.y,dt=G.isBox3?G.max.z-G.min.z:1,Pt=G.min.x,It=G.min.y,At=G.isBox3?G.min.z:0;else{const tn=Math.pow(2,-B);ht=Math.floor(oe.width*tn),mt=Math.floor(oe.height*tn),R.isDataArrayTexture?dt=oe.depth:R.isData3DTexture?dt=Math.floor(oe.depth*tn):dt=1,Pt=0,It=0,At=0}W!==null?(Yt=W.x,ie=W.y,me=W.z):(Yt=0,ie=0,me=0);const se=bt.convert(k.format),Rt=bt.convert(k.type);let ue;k.isData3DTexture?(zt.setTexture3D(k,0),ue=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(zt.setTexture2DArray(k,0),ue=I.TEXTURE_2D_ARRAY):(zt.setTexture2D(k,0),ue=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),Ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vi=I.getParameter(I.UNPACK_SKIP_PIXELS),$e=I.getParameter(I.UNPACK_SKIP_ROWS),Zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);const de=R.isDataArrayTexture||R.isData3DTexture,Qe=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const tn=xt.get(R),Fe=xt.get(k),We=xt.get(tn.__renderTarget),Sr=xt.get(Fe.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,We.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let $n=0;$n<dt;$n++)de&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(R).__webglTexture,B,At+$n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(k).__webglTexture,et,me+$n)),I.blitFramebuffer(Pt,It,ht,mt,Yt,ie,ht,mt,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||xt.has(R)){const tn=xt.get(R),Fe=xt.get(k);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Jc),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,jc);for(let We=0;We<dt;We++)de?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,B,At+We):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,B),Qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,et,me+We):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,et),B!==0?I.blitFramebuffer(Pt,It,ht,mt,Yt,ie,ht,mt,I.COLOR_BUFFER_BIT,I.NEAREST):Qe?I.copyTexSubImage3D(ue,et,Yt,ie,me+We,Pt,It,ht,mt):I.copyTexSubImage2D(ue,et,Yt,ie,Pt,It,ht,mt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qe?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(ue,et,Yt,ie,me,ht,mt,dt,se,Rt,oe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ue,et,Yt,ie,me,ht,mt,dt,se,oe.data):I.texSubImage3D(ue,et,Yt,ie,me,ht,mt,dt,se,Rt,oe):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Yt,ie,ht,mt,se,Rt,oe.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Yt,ie,oe.width,oe.height,se,oe.data):I.texSubImage2D(I.TEXTURE_2D,et,Yt,ie,ht,mt,se,Rt,oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,$e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zi),et===0&&k.generateMipmaps&&I.generateMipmap(ue),_t.unbindTexture()},this.initRenderTarget=function(R){xt.get(R).__webglFramebuffer===void 0&&zt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?zt.setTextureCube(R,0):R.isData3DTexture?zt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?zt.setTexture2DArray(R,0):zt.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){_=0,A=0,E=null,_t.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const zc=["slalom","rift","vortex","oblivion"],as={slalom:{subtitle:"04 / BANKED DRIFT",hint:"Banked hairpins · Drift exits · Neon district",accent:6680063,secondary:16742862,road:10202300,city:8821683},rift:{subtitle:"05 / SKY JUMPS",hint:"3 offset jumps · Air rings · Amber canyon",accent:16760434,secondary:16744798,road:11838880,city:11572625},vortex:{subtitle:"06 / TUBE SURFING",hint:"3 tunnels · Wall boost chains · Orbital ramps",accent:12097279,secondary:5365759,road:10328507,city:9405627},oblivion:{subtitle:"07 / FINAL EXAM",hint:"4 jumps · Banked turns · Reactor gauntlet",accent:16737928,secondary:16765041,road:10654628,city:11175580}};function Vc(s,t,e=.44){const n=[],i=[],r=a=>{const o=n[n.length-1];if(o){const l=Math.ceil(o.distanceTo(a)/35);for(let c=1;c<l;c++)n.push(o.clone().lerp(a,c/l))}return n.push(a.clone()),n.length-1};for(let a=0;a<s.length;a++){const o=s[a],l=s[(a+s.length-1)%s.length],c=s[(a+1)%s.length],h=o.clone().sub(l),u=c.clone().sub(o),d=Math.min(h.length(),u.length())*e;h.normalize(),u.normalize();const f=h.angleTo(u);if(t.has(a)||f<.04){i[a]=r(o);continue}const g=h.clone().cross(u).normalize(),M=d/Math.tan(f/2),p=o.clone().addScaledVector(h,-d),m=p.clone().addScaledVector(g.clone().cross(h),M);r(p);const T=p.clone().sub(m),w=Math.max(4,Math.ceil(M*f/25)),x=w+w%2;for(let v=1;v<=x;v++){const _=r(T.clone().applyAxisAngle(g,f*v/x).add(m));v===x/2&&(i[a]=_)}}return{nodes:n,indices:i}}function Kg(){const s=[[0,0,0],[0,0,-220],[-220,0,-440],[100,0,-700],[-220,0,-960],[100,0,-1220],[-220,0,-1480],[100,0,-1740],[-220,0,-2e3],[0,0,-2220],[400,0,-2380],[800,0,-2220],[1020,0,-2e3],[700,0,-1740],[1020,0,-1480],[700,0,-1220],[1020,0,-960],[700,0,-700],[1020,0,-440],[800,0,-220],[400,0,120],[0,0,220]].map(t=>new C(...t));return Vc(s,new Set([0]),.16).nodes}function Zg(s){const t=zc.indexOf(s)+1,e={slalom:[[-100,30,-480],[-320,65,-570],[-480,70,-390],[-410,85,-170],[-610,100,-100],[-790,125,-310],[-750,145,-590],[-540,145,-850]],rift:[[-140,75,-480],[-430,170,-690],[-650,235,-820]],vortex:[[-160,90,-440],[-350,170,-450],[-360,175,-220],[-530,250,-260],[-530,270,-580],[-740,310,-600],[-760,330,-900]],oblivion:[[-190,105,-430],[-360,210,-390],[-345,220,-180],[-520,330,-200],[-535,335,-530],[-720,420,-490],[-690,425,-250],[-900,490,-420],[-920,490,-900]]},n={slalom:1.6,rift:1,vortex:1.8,oblivion:2}[s],i=e[s].map(([$,at,Ct])=>[$*n,at,-320+(Ct+320)*n]),r=[[0,0,0],[0,0,-180],[0,15,-320],...i].map($=>new C(...$)),a=r.length-1,o=r[a],l=o.x,c=o.y,h=o.z;r.push(new C(l,c,h-180));const u=r.length;r.push(new C(l,c,h-380));const d=[0,8,-10,14][t-1],f=[135,165,195,225][t-1],g=r.length;r.push(new C(l+d,c-30,h-380-f));const M=r.length;r.push(new C(l+d,c-30,h-850));const p=[{start:u,end:g,landingEnd:M,width:36-t*3,lift:t===4?52:42}],m=s==="rift"?2:s==="oblivion"?3:0;for(let $=0;$<m;$++){const at=r[r.length-1],Ct=($%2?-1:1)*(s==="oblivion"?26:20),Gt=(s==="oblivion"?210:170)+$*16;r.push(at.clone().add(new C(0,0,-180)));const Qt=r.length;r.push(at.clone().add(new C(0,0,-380)));const Jt=r.length;r.push(at.clone().add(new C(Ct,-30,-380-Gt)));const K=r.length;r.push(at.clone().add(new C(Ct,-30,-920))),p.push({start:Qt,end:Jt,landingEnd:K,width:(s==="oblivion"?22:27)-$*2,lift:s==="oblivion"?54+$*2:42})}const T=r[r.length-1],w=T.x,x=T.y,v=T.z,_=r.length;for(let $=0;$<=12;$++){const at=$/12*Math.PI;r.push(new C(w+360*(1-Math.cos(at)),x+Math.sin(at)*t*35,v-200-330*Math.sin(at)))}const A=r.length-1,E=r[A],S=250-t*12;r.push(E.clone().add(new C(0,40,180)));const b=r.length;for(let $=0;$<=28;$++){const at=$/28*Math.PI*2;r.push(new C(E.x+$/28*220,E.y+90+S*(1-Math.cos(at)),E.z+380+S*Math.sin(at)))}const D=r.length-1,O=r.length;if(t>=3){const $=r[D],at=320,Ct=t===4?1.25:1;r.push($.clone().add(new C(0,-12,170)));for(let Gt=0;Gt<=36;Gt++){const Qt=Math.PI-Gt/36*Math.PI*2*Ct;r.push(new C($.x+at+at*Math.cos(Qt),$.y-30-Gt/36*Ct*280,$.z+350+at*Math.sin(Qt)))}}const L=r[r.length-1],N=Math.max(s==="oblivion"?1550:s==="vortex"?1250:1050,L.x+480),U=[];if(s==="slalom")U.push([L.x+140,L.y-10,L.z+280],[N,125,L.z+600],[N+200,95,-1e3],[N+80,80,-680],[N-230,70,-720],[N-360,55,-1050],[N-600,35,-970],[N-660,20,-610],[N-540,10,-260]);else{U.push([L.x+180,L.y-20,L.z+260],[N,L.y-35,L.z+650]);const $=U[U.length-1],at=Math.max(2,Math.ceil((-650-$[2])/480));for(let Ct=1;Ct<=at;Ct++){const Gt=Ct/at,Qt=s==="oblivion"?170:s==="vortex"?130:100;U.push([N+Math.sin(Gt*Math.PI*3)*Qt,$[1]*(1-Gt)+45*Gt,$[2]+(-650-$[2])*Gt])}U.push([N-120,30,-300],[N-400,15,-70])}U.push([400,5,140],[160,0,240],[0,0,180]),r.push(...U.map($=>new C(...$)));const H=r.length-3,X=new Set([0]);for(let $=a+1;$<_;$++)X.add($);const z=Vc(r,X),Q=$=>z.indices[$];return{nodes:z.nodes,difficulty:t,approachEnd:Q(a),jumps:p.map($=>({...$,start:Q($.start),end:Q($.end),landingEnd:Q($.landingEnd)})),jumpStart:Q(u),jumpEnd:Q(g),landingEnd:Q(M),pipeStart:Q(_),pipeEnd:Q(A),loopStart:Q(b),loopEnd:Q(D),returnStart:Q(O),returnEnd:Q(H),landingWidth:36-t*3}}const qt=ze.clamp,Xt=(s,t)=>(s%t+t)%t,Ie=s=>{const t=qt(s,0,1);return t*t*(3-2*t)},os={foundry:{name:"FOUNDRY CIRCUIT",subtitle:"INDUSTRIAL SKYWAY",sector:"FOUNDRY SECTOR / 07",stat:"75°",label:"BANKS"},abyss:{name:"ABYSS RUN",subtitle:"CANYON / EXTREME",sector:"ABYSS SECTOR / 12",stat:"360°",label:"PIPE"},helix:{name:"HELIX CROWN",subtitle:"EXTERIOR / ORBITAL",sector:"HELIX SECTOR / 19",stat:"3D",label:"LOOPS"},slalom:{name:"NEON SLALOM",subtitle:as.slalom.subtitle,sector:"NEON SECTOR / 24",stat:"70°",label:"DRIFT BANKS"},rift:{name:"RIFT CASCADE",subtitle:as.rift.subtitle,sector:"RIFT SECTOR / 31",stat:"3",label:"SKY JUMPS"},vortex:{name:"VORTEX SPINE",subtitle:as.vortex.subtitle,sector:"VORTEX SECTOR / 42",stat:"3",label:"TUNNELS"},oblivion:{name:"OBLIVION CIRCUIT",subtitle:as.oblivion.subtitle,sector:"OBLIVION SECTOR / 99",stat:"★★★★",label:"FINAL EXAM"},driftlab:{name:"DRIFT LAB",subtitle:"08 / ZIGZAG TEST",sector:"SIMULATION SECTOR / 08",stat:"SHIFT",label:"HOLD / RELEASE"}},ei=new C(0,1,0),on=(s,t,e,n=.025)=>Ie((s-t)/n)*Ie((e-s)/n);class Mo{curve;length;samples=1400;points;tangents;normals=[];rights=[];features;checkpoints;launch;stage;drop;pipe;waves;exterior;ramps;flats;boostChains;rings;pipes;gaps;markers;barriers;challenge;theme;banks;openEdges;banking=[];constructor(t="foundry"){this.stage=t,this.openEdges=t==="driftlab";const e=zc.includes(t)?Zg(t):null;this.challenge=e?.difficulty??0,this.theme=e?as[t]:null,this.banks=[],this.gaps=[],this.markers=[],this.barriers=[];const n=[[0,0,0],[0,3,-145],[-35,15,-280],[-160,48,-385],[-320,58,-340],[-395,24,-210],[-310,7,-75],[-160,10,-10],[-55,46,65],[60,86,75],[155,112,-10],[190,120,-135],[310,105,-165],[400,62,-65],[435,36,100],[310,6,200],[135,0,265],[-35,0,180]].map(v=>new C(v[0]*1.3,v[1],v[2]*1.3)),i=[[0,0,0],[0,5,-180],[-80,75,-360],[-270,210,-550],[-600,335,-600],[-600,340,-850],[-600,340,-940],[-576,40,-1480],[-576,40,-1980],[-576,40,-2180],[-576,40,-2500],[-576,40,-2800],[-380,20,-3020],[0,45,-3100],[350,85,-2940],[600,105,-2670],[630,105,-2370],[630,105,-1970],[630,105,-1570],[630,105,-1170],[620,110,-1e3],[620,100,-500],[430,180,40],[200,50,160],[50,5,150]].map(v=>new C(...v)),r=[[0,0,0],[0,10,-170],[0,40,-300]].map(v=>new C(...v)),a=r.length;for(let v=0;v<=32;v++){const _=-v/32*Math.PI*4;r.push(new C(-240+240*Math.cos(_),80+v/32*480,-400+240*Math.sin(_)))}const o=r.length-1;r.push(new C(0,605,-650),new C(60,610,-830));const l=r.length;for(let v=0;v<=24;v++){const _=v/24*Math.PI*2;r.push(new C(60+v/24*130,610+220*(1-Math.cos(_)),-850-220*Math.sin(_)))}const c=r.length-1;r.push(new C(320,550,-1130),new C(480,470,-1300));const h=r.length;for(let v=0;v<=24;v++){const _=Math.PI-v/24*Math.PI*2.5;r.push(new C(820+260*Math.cos(_),450-v/24*300,-1250+260*Math.sin(_)))}const u=r.length-1;r.push(...[[1100,100,-850],[1100,70,-450],[900,30,-130],[610,-15,80],[350,-30,140],[100,-15,120]].map(v=>new C(...v)));const d=t==="driftlab"?Kg():e?.nodes??(t==="helix"?r:t==="abyss"?i:n);this.curve=new Ec(d,!0,"centripetal"),this.curve.arcLengthDivisions=6e3,this.length=this.curve.getLength(),this.points=this.curve.getSpacedPoints(this.samples),this.tangents=Array.from({length:this.samples+1},(v,_)=>this.curve.getTangentAt(_/this.samples).normalize()),(t==="helix"||e)&&(this.points[this.samples].copy(this.points[0]),this.tangents[this.samples].copy(this.tangents[0]));let f=ei.clone().addScaledVector(this.tangents[0],-ei.dot(this.tangents[0])).normalize();for(let v=0;v<=this.samples;v++)v&&f.applyQuaternion(new Ee().setFromUnitVectors(this.tangents[v-1],this.tangents[v])),f.addScaledVector(this.tangents[v],-f.dot(this.tangents[v])).normalize(),this.normals.push(f.clone());const g=this.normals[this.samples],M=Math.atan2(this.tangents[0].dot(g.clone().cross(this.normals[0])),g.dot(this.normals[0]));for(let v=0;v<=this.samples;v++)this.normals[v].applyAxisAngle(this.tangents[v],M*v/this.samples),this.rights.push(this.tangents[v].clone().cross(this.normals[v]).normalize());const p=v=>{let _=0,A=1;for(let E=0;E<35;E++){const S=(_+A)/2;this.curve.getUtoTmapping(S,0)<v/d.length?_=S:A=S}return(_+A)/2*this.length};if(this.pipe=t==="abyss"?{start:p(15),end:p(20),radius:24}:t==="helix"?{start:p(h)+350,end:p(u)-220,radius:28}:null,this.pipes=this.pipe?[this.pipe]:[],e){if(this.pipe={start:p(e.pipeStart)+80,end:p(e.pipeEnd)-80,radius:28},this.pipes.push(this.pipe),e.difficulty>=3){const v=p(e.returnStart)+240,_=p(e.returnEnd)-260,A=v+(_-v)*.48;this.pipes.push({start:v,end:A-260,radius:28},{start:A+260,end:_,radius:28})}for(const v of e.jumps)this.gaps.push({start:p(v.start),end:p(v.end),landingEnd:p(v.landingEnd),width:v.width,lift:v.lift});(t==="slalom"||t==="oblivion")&&this.banks.push({start:280,end:p(e.approachEnd)-100},...t==="slalom"?[{start:p(e.returnStart)+100,end:p(e.returnEnd)-90}]:[])}this.drop=t==="abyss"?{start:p(5),end:p(7),landingEnd:p(8),direction:new C(0,0,-1),right:new C(1,0,0),origin:i[5].clone(),gravity:28,height:300}:null,this.waves=this.drop?[160,340,520].map(v=>({s:this.drop.landingEnd+v,height:14,span:38})):[],this.exterior=t==="helix"?{radius:28,spiralStart:p(a),spiralEnd:p(o),loopStart:p(l),loopEnd:p(c),descentStart:p(h),descentEnd:p(u)}:null,e&&(this.exterior={radius:28,spiralStart:p(e.pipeStart),spiralEnd:p(e.pipeEnd),loopStart:p(e.loopStart),loopEnd:p(e.loopEnd),descentStart:p(e.returnStart),descentEnd:p(e.returnEnd)});const m=this.exterior;if(this.flats=m?[{center:this.length-280,length:850,transition:260,name:"GRID / UNWRAPPED"},{center:(m.spiralEnd+m.loopStart)/2,length:180,transition:210,name:"SKY BRIDGE / UNWRAPPED"},{center:(m.loopEnd+m.descentStart)/2,length:260,transition:230,name:"CROWN BRIDGE / UNWRAPPED"}]:[],e){const v=p(e.jumpStart),_=p(e.returnStart),A=p(e.returnEnd);this.flats=[{center:0,length:260,transition:100,name:"GRID / POWER UP"},{center:v/2,length:v-60,transition:110,name:"DRIFT ALLEY / MARKER SLALOM"},...this.gaps.map(E=>({center:(E.start+E.landingEnd)/2,length:E.landingEnd-E.start+360,transition:100,name:"SKY JUMP / AIM FOR THE DECK"})),...e.difficulty<3?[{center:(_+A)/2,length:A-_,transition:180,name:"SWITCHBACK / DRIFT LINE"}]:[],{center:this.length-170,length:480,transition:180,name:"HOME STRAIGHT / MARKER SLALOM"}]}if(this.banks.length){const v=Array.from({length:this.samples},(A,E)=>this.rawBankAngle(E/this.samples*this.length)),_=Math.ceil(65/this.length*this.samples);for(let A=0;A<this.samples;A++){let E=0,S=0;for(let b=-_;b<=_;b++){const D=Math.exp(-.5*(b/Math.max(1,_/2))**2);E+=v[Xt(A+b,this.samples)]*D,S+=D}this.banking.push(E/S)}}if(this.ramps=m?[.07,.16,.25,.35,.43,.53,.81,.855,.88,.95].map((v,_)=>{const A=this.length*v;return{s:A,x:this.tubeBend(A)>.999?Xt(_*Math.PI/2*28+Math.PI*28,Math.PI*56)-Math.PI*28:0,length:38,width:18,height:6}}):[],e){this.ramps=this.gaps.map(_=>({s:_.start,x:0,length:48,width:60,height:5}));const v=m.loopStart-180;if(this.tubeBend(v)>.999&&this.ramps.push({s:v,x:44,length:38,width:16,height:5}),t==="vortex"||t==="oblivion"){for(const _ of this.pipes)for(let A=0,E=_.start+320;E<_.end-350;A++,E+=320)this.ramps.push({s:E,x:this.wrapLane(E,(A%3-1)*Math.PI/2*28),length:44,width:18,height:4});for(let _=0,A=m.loopStart+200;A<m.loopEnd-160;_++,A+=330)this.ramps.push({s:A,x:this.wrapLane(A,(_%3-1)*44),length:38,width:18,height:5})}}if(this.boostChains=[],this.rings=[],this.launch=this.openEdges?1/0:this.drop?.start??this.length*.535,this.checkpoints=Array.from({length:12},(v,_)=>this.length*_/12),this.drop&&(this.checkpoints[1]=500,this.checkpoints[2]=this.drop.start-215,this.checkpoints[3]=this.drop.end+70,this.checkpoints[4]=this.drop.landingEnd-70),e){this.checkpoints=this.checkpoints.filter(v=>!this.gaps.some(_=>v>_.start-140&&v<_.end+30));for(const v of this.gaps)this.checkpoints.push(v.start-110,v.end+35);this.checkpoints.sort((v,_)=>v-_)}const T=[[.037,-7],[.075,7],[.153,0],[.235,-7],[.322,7],[.412,0],[.505,-6],[.61,6],[.705,0],[.792,-7],[.895,7],[.954,0]],w=[[.055,0],[.12,-7],[.195,7],[.275,0],[.365,-6],[.452,7],[.565,0],[.665,-7],[.748,7],[.842,0],[.925,-6]],x=[...T.map(([v,_])=>({s:v*this.length,x:_,kind:"pad"})),...w.map(([v,_])=>({s:v*this.length,x:_,kind:"pickup"}))];if(this.drop&&this.pipe){const v=this.drop,_=this.pipe;x.length=0;for(const[A,E]of[[180,-6],[480,6],[v.start-210,0],[v.start-65,-5],[v.start-65,5],[v.end+160,4],[_.start-180,-5],[_.end+150,5],[this.length-160,0]])x.push({s:A,x:E,kind:"pad"});for(const[A,E]of[[280,0],[700,-5],[v.start-160,5],[v.end+260,-4],[_.start-110,0],[_.end+210,0],[this.length-300,6]])x.push({s:A,x:E,kind:"pickup"});for(let A=0;A<9;A++){const E=_.start+230+A*115,S=Xt((A+1)*Math.PI/2*_.radius+Math.PI*_.radius,Math.PI*2*_.radius)-Math.PI*_.radius;x.push({s:E,x:S,kind:A%2?"pickup":"pad"}),A%2===0&&x.push({s:E+35,x:-S,kind:"pickup"})}x.push({s:_.start+780,x:Math.PI*_.radius,kind:"pad"});for(const A of this.waves)for(const E of[-6,0,6])x.push({s:A.s-85,x:E,kind:"pad"})}if(this.exterior&&!e){x.length=0;for(const E of this.ramps){const S=E.s+150;x.push({s:E.s-80,x:E.x,kind:"pad"},{s:S,x:this.inFullPipe(S)?this.wrapLane(S,E.x+Math.PI*28/2):0,kind:"pickup"})}for(let E=0;E<30;E++){const S=(E+.5)/30*this.length,b=this.inFullPipe(S)?this.wrapLane(S,E%8*Math.PI/4*28):Math.sin(E)*14;x.push({s:S,x:b,kind:"pickup"})}const v=[[80,3,220,0,0],[this.length*.12,4,230,44,0],[this.length*.2,5,220,-25,18],[m.loopStart+200,3,240,0,0],[this.length*.49,4,220,0,0],[this.length*.62,5,230,-45,18],[this.length*.81,4,240,-30,18],[this.length-760,4,200,-12,8]];for(const[E,S,b,D,O]of v){const L={id:this.boostChains.length,mode:O?"angled":"straight",pads:[]};let N=E;for(let U=0;U<S;U++){const H=this.inFullPipe(N)?this.wrapLane(N,D+U*O):qt(D+U*O,-18,18);if(L.pads.push({s:N,x:H,heading:0}),U<S-1){let X=0;for(;X<b;){const z=this.surface(N,H).longitudinalScale;N+=2,X+=z*2}}}L.pads.forEach((U,H)=>{const X=L.pads[H+1]??L.pads[H];U.heading=Math.atan2(this.laneDelta(U.s,U.x,X.x),Math.max(1,X.s-U.s)*this.surface(U.s,U.x).longitudinalScale),x.push({...U,kind:"pad",chain:L.id})}),this.boostChains.push(L)}const _=[20,54,82,0,-24,0,-73,-43,-5,-9],A=[25,32,27,21,18,18,14,21,24,18];for(let E=0;E<this.ramps.length;E++){const S=this.ramps[E];this.rings.push({id:this.rings.length,s:S.s+110,x:_[E],height:A[E],radius:8,ramp:E})}if(this.pipe)for(let E=0;E<8;E++){const S=this.pipe.start+220+E*130,b=this.wrapLane(S,E%4*Math.PI/2*this.pipe.radius);x.push({s:S,x:b,kind:E%2?"pickup":"pad"})}}if(e){x.length=0;const v=this.gaps[0],_=180-this.challenge*18,A=v.start-160;for(let L=220;L<A;L+=_){const N=this.markers.length%2?"right":"left",U=N==="left"?-8:8;this.markers.push({id:this.markers.length,s:L,x:0,side:N}),x.push({s:L+35,x:U,kind:"pad"}),this.markers.length%2&&x.push({s:L+70,x:U,kind:"pickup"})}for(let L=0;L<4+this.challenge*2;L++){const N=290+L/(4+this.challenge*2)*(A-330),H=this.markers.reduce((X,z)=>Math.abs(z.s-N)<Math.abs(X.s-N)?z:X).side==="left"?1:-1;this.barriers.push({id:this.barriers.length,s:N,x:-H*(9-this.challenge*.5),width:5+this.challenge,height:5,length:7})}for(const L of this.gaps)for(const N of[-6,0,6])x.push({s:L.start-100,x:N,kind:"pad"});for(const L of this.pipes)for(let N=0,U=L.start+210;U<L.end-190;N++,U+=140){const H=this.wrapLane(U,N*Math.PI/2*28);x.push({s:U,x:H,kind:N%2?"pickup":"pad"}),N%3===1&&this.barriers.push({id:this.barriers.length,s:U+60,x:this.wrapLane(U,H+44),width:6+this.challenge,height:4,length:8})}for(let L=m.loopStart+150;L<m.loopEnd-100;L+=220)x.push({s:L,x:this.wrapLane(L,Math.sin(L)*44),kind:"pickup"});const E=this.length-600;for(let L=E;L<this.length-90;L+=_){const N=this.markers.length%2?"right":"left";this.markers.push({id:this.markers.length,s:L,x:0,side:N}),x.push({s:L+25,x:N==="left"?-8:8,kind:"pad"})}for(let L=0;L<2;L++){const N={id:this.boostChains.length,mode:L?"angled":"straight",pads:[]};for(let U=0;U<3+this.challenge%3;U++){const H=(L?m.loopStart+100:v.landingEnd+100)+U*220;if(!this.hasRoad(H)||!this.inFullPipe(H))continue;const X=this.wrapLane(H,L?-30+U*15:0),z=L?Math.atan2(15,220):0;N.pads.push({s:H,x:X,heading:z}),x.push({s:H,x:X,heading:z,kind:"pad",chain:N.id})}N.pads.length&&this.boostChains.push(N)}for(let L=0;L<this.gaps.length;L++)this.rings.push({id:this.rings.length,s:this.gaps[L].start+95,x:0,height:39,radius:10,ramp:L});if(t==="slalom"||t==="oblivion")for(const L of this.banks)for(let N=L.start+80;N<L.end-50;N+=220){const U=-Math.sign(this.curvature(N))*8;x.push({s:N,x:U,kind:"pad"},{s:N+65,x:-U,kind:"pickup"})}if(t==="vortex"||t==="oblivion"){for(const L of this.pipes){const N={id:this.boostChains.length,mode:"angled",pads:[]};for(let U=0,H=L.start+220;U<5&&H<L.end-190;U++,H+=210){const X=this.wrapLane(H,U*44),z=Math.atan2(44,210);N.pads.push({s:H,x:X,heading:z}),x.push({s:H,x:X,heading:z,kind:"pad",chain:N.id})}N.pads.length>=3&&this.boostChains.push(N)}for(let L=this.gaps.length;L<this.ramps.length;L++){const N=this.ramps[L],U=this.interiorBend(N.s)>.999;x.push({s:N.s-65,x:N.x,kind:"pad"}),this.rings.push({id:this.rings.length,s:N.s+(U?70:90),x:N.x,height:U?11:17,radius:U?6:8,ramp:L})}}const S=L=>this.hasRoad(L)&&!this.gaps.some(N=>L>N.start-180&&L<N.landingEnd+70),b=L=>x.some(N=>Math.abs(this.signedDistance(N.s,L))<100)||this.markers.some(N=>Math.abs(this.signedDistance(N.s,L))<75);for(let L=420;L<this.length-260;L+=190){if(!S(L)||b(L))continue;const N=this.inFullPipe(L),U=N?this.wrapLane(L,Math.floor(L/190)%4*44):Math.sin(L/380)*8;x.push({s:L,x:U,kind:Math.floor(L/190)%3===0?"pickup":"pad"})}for(const L of this.gaps){const N={id:this.boostChains.length,mode:"straight",pads:[]};for(const U of[L.start-380,L.start-240,L.start-100]){const H={s:U,x:0,heading:0};N.pads.push(H);const X=x.find(z=>z.kind==="pad"&&Math.abs(z.s-U)<.01&&z.x===0);X?Object.assign(X,{chain:N.id}):x.push({...H,kind:"pad",chain:N.id})}this.boostChains.push(N)}const D=m.descentStart+400,O=m.descentEnd-250;for(let L=0;L<this.challenge*2;L++){const N=D+(O-D)*(L+1)/(this.challenge*2+1);!S(N)||Math.abs(this.tubeShape(N))>.05||Math.abs(this.bankAngle(N))>.9||(this.barriers.push({id:this.barriers.length,s:N,x:L%2?-10:10,width:5+this.challenge,height:4,length:7}),b(N+90)||x.push({s:N+90,x:L%2?8:-8,kind:"pickup"}))}}this.openEdges&&(x.length=0),this.features=x.map((v,_)=>({...v,id:_}))}profile(t){if(this.openEdges)return{bank:0,depth:0,width:24,pipe:0};const e=Xt(t,this.length)/this.length;if(this.exterior){const o=this.interiorBend(t),l=this.challenge?42-this.challenge*3:54,c=this.gaps.find(h=>Xt(t,this.length)>=h.start-80&&Xt(t,this.length)<=h.landingEnd);return{bank:this.bankAngle(t),depth:0,width:c?c.width:(this.stage==="slalom"?46:l)+(Math.PI*2*this.exterior.radius-(this.stage==="slalom"?46:l))*(this.tubeBend(t)+o),pipe:o}}if(this.stage==="abyss"){const o=this.pipe,l=Ie((Xt(t,this.length)-o.start)/180)*Ie((o.end-Xt(t,this.length))/180),c=this.drop,h=Xt(t,this.length)>=c.end&&Xt(t,this.length)<=c.landingEnd,u=1.48*on(e,.045,.145,.025)-1.35*on(e,.42,.52,.025)+1.1*on(e,.88,.95,.02),d=on(e,.89,.93,.015),f=this.waves.length?on(Xt(t,this.length),this.waves[0].s-120,this.waves[2].s+140,80):0;return{bank:h||l>0||t>=c.start-160&&t<c.end?0:u*(1-f),depth:d*14,width:h?40:34+(Math.PI*2*o.radius-34)*l,pipe:l}}const n=1.28*on(e,.105,.245,.035)-1.15*on(e,.62,.74,.035)+.62*on(e,.82,.91,.035),i=on(e,.28,.445,.035),r=on(e,.745,.82,.02),a=on(e,.51,.62,.014);return{bank:n,depth:i*17+r*10,width:30+i*12+r*8+a*60,pipe:0}}base(t){const e=Xt(t,this.length)/this.length*this.samples,n=Math.floor(e),i=e-n,r=this.points[n].clone().lerp(this.points[n+1],i);if(this.drop){const d=this.drop,f=Xt(t,this.length);f>=d.start&&f<d.end&&(r.y=d.origin.y-d.height*Ie((f-d.start)/(d.end-d.start))),f>=d.end&&f<=d.landingEnd&&(r.y=d.origin.y-d.height)}const a=this.tangents[n].clone().lerp(this.tangents[n+1],i).normalize();this.drop&&Xt(t,this.length)>=this.drop.start&&Xt(t,this.length)<=this.drop.landingEnd&&(a.y=0),a.normalize();const o=this.stage==="abyss"?ei.clone().addScaledVector(a,-ei.dot(a)).normalize():this.normals[n].clone().lerp(this.normals[n+1],i).normalize();if(this.challenge||this.openEdges){const d=i*i,f=d*i,g=[(1-i)**3/6,(3*f-6*d+4)/6,(-3*f+3*d+3*i+1)/6,f/6],M=[-((1-i)**2)/2,1.5*d-2*i,-1.5*d+i+.5,d/2];r.set(0,0,0),a.set(0,0,0),o.set(0,0,0);for(let p=0;p<4;p++){const m=Xt(n+p-1,this.samples);r.addScaledVector(this.points[m],g[p]),a.addScaledVector(this.points[m],M[p]),o.addScaledVector(this.normals[m],g[p])}a.normalize(),o.addScaledVector(a,-o.dot(a)).normalize()}if(this.challenge&&Math.abs(a.y)<.9){const d=ei.clone().addScaledVector(a,-ei.dot(a)).normalize(),f=1-Math.abs(this.tubeShape(t));o.lerp(d,f*f).normalize()}const{bank:l,depth:c,width:h}=this.profile(t);o.applyAxisAngle(a,l);const u=a.clone().cross(o).normalize();return{position:r,forward:a,normal:o,right:u,bank:l,depth:c,width:h}}position(t,e){const n=this.base(t);if(this.exterior){const c=this.tubeShape(t),h=this.exterior.radius,u=e*c/h,d=Math.abs(c)>1e-5?h/c:0,f=this.rampHeight(t,e),g=d?d*Math.sin(u):e,M=h+(d?d*(Math.cos(u)-1):0);return n.position.addScaledVector(n.normal,M+f*Math.cos(u)).addScaledVector(n.right,g+f*Math.sin(u))}for(const c of this.waves)n.position.y+=c.height*Math.exp(-(((Xt(t,this.length)-c.s)/c.span)**2));const i=this.profile(t).pipe;if(i>1e-5&&this.pipe){const c=this.pipe.radius/i,h=e/c;return n.position.addScaledVector(n.right,c*Math.sin(h)).addScaledVector(n.normal,c*(1-Math.cos(h)))}const r=qt(e/(n.width/2),-.997,.997),a=n.depth*(1-Math.sqrt(1-r*r)),o=t-this.launch,l=!this.drop&&o>-27&&o<0?5.5*Ie((o+27)/27)*(1-Ie((Math.abs(e)-5)/5)):0;return n.position.addScaledVector(n.right,e).addScaledVector(n.normal,a+l)}surface(t,e){const{bank:n,depth:i,width:r}=this.profile(t),a=this.position(t,e);let o=t-.35,l=t+.35;if(t<this.launch&&l>=this.launch&&(l=this.launch-1e-4),t>=this.launch&&o<this.launch&&(o=this.launch),this.exterior)for(const d of this.ramps){const f=t+this.signedDistance(t,d.s);t<f&&l>=f&&(l=f-1e-4),t>=f&&o<f&&(o=f)}const c=this.position(l,e).sub(this.position(o,e)).multiplyScalar(1/Math.max(1e-4,l-o)),h=this.position(t,e+.025).sub(this.position(t,e-.025)).multiplyScalar(20),u=h.clone().cross(c).normalize();return{position:a,forward:c.clone().normalize(),right:h.clone().normalize(),normal:u,longitudinalScale:Math.max(.3,c.length()),lateralScale:Math.max(1,h.length()),width:r,bank:n,depth:i}}hasRoad(t){const e=Xt(t,this.length);return(!this.drop||e<=this.drop.start||e>=this.drop.end)&&!this.gaps.some(n=>e>n.start&&e<n.end)}tubeBend(t){if(!this.exterior)return 0;let e=1;for(const i of this.flats){const r=Ie((Math.abs(this.signedDistance(i.center,t))-i.length/2)/i.transition);e=this.challenge?e*r:Math.min(e,r)}const n=Xt(t,this.length);for(const i of this.pipes)e*=1-Ie((n-i.start+220)/220)*Ie((i.end+220-n)/220);return e}interiorBend(t){const e=Xt(t,this.length);return this.exterior?this.pipes.reduce((n,i)=>Math.max(n,Ie((e-i.start)/180)*Ie((i.end-e)/180)),0):0}tubeShape(t){return this.tubeBend(t)-this.interiorBend(t)}inFullPipe(t){return this.exterior?this.tubeBend(t)>.999||this.interiorBend(t)>.999:this.profile(t).pipe>.999}openingAhead(t){let e=1/0;for(const n of this.flats)e=Math.min(e,this.distanceAhead(t,Xt(n.center-n.length/2-n.transition,this.length)));if(this.exterior)for(const n of this.pipes)for(const i of[n.start-220,n.end-180])e=Math.min(e,this.distanceAhead(t,i));return e}wrapLane(t,e){const n=this.exterior?.radius??this.pipe?.radius;return n&&this.inFullPipe(t)?Xt(e+Math.PI*n,Math.PI*2*n)-Math.PI*n:e}laneDelta(t,e,n){return this.wrapLane(t,n-e)}rampHeight(t,e){let n=0;for(const i of this.ramps){const r=this.signedDistance(i.s,t),a=Math.abs(this.laneDelta(t,i.x,e));r>=-i.length&&r<0&&(n+=i.height*Ie((r+i.length)/i.length)*(1-Ie((a-i.width*.3)/(i.width*.2))))}return n}projectExterior(t,e){let n=e;for(let f=0;f<5;f++){const g=this.base(n),M=t.clone().sub(g.position).dot(g.forward);n+=qt(M,-30,30)}const i=this.base(n),r=this.tubeShape(n),a=this.exterior.radius,o=t.clone().sub(i.position),l=o.dot(i.right),c=o.dot(i.normal);if(Math.abs(r)<1e-5)return{s:n,x:l,radial:i.normal};const h=a/r,u=Math.sign(h),d=Math.atan2(l*u,(c-a+h)*u);return{s:n,x:d*h,radial:i.normal.clone().multiplyScalar(Math.cos(d)).addScaledVector(i.right,Math.sin(d)).normalize()}}projectDrop(t){const e=this.drop;let n=e.start,i=e.landingEnd+80;const r=t.clone().sub(e.origin).dot(e.direction);for(let l=0;l<17;l++){const c=(n+i)/2;this.base(c).position.sub(e.origin).dot(e.direction)<r?n=c:i=c}const a=(n+i)/2,o=this.base(a);return{s:a,x:t.clone().sub(o.position).dot(e.right)}}curvature(t){const e=this.base(t-8),n=this.base(t+8);return e.forward.clone().cross(n.forward).dot(e.normal)/16}bankAngle(t){if(!this.banking.length)return 0;const e=Xt(t,this.length);if(this.gaps.some(c=>e>c.start-170&&e<c.landingEnd+100))return 0;const n=e/this.length*this.samples,i=Math.floor(n),r=n-i,a=r*r,o=a*r;return[(1-r)**3/6,(3*o-6*a+4)/6,(-3*o+3*a+3*r+1)/6,o/6].reduce((c,h,u)=>c+h*this.banking[Xt(i+u-1,this.samples)],0)}rawBankAngle(t){if(!this.banks.length)return 0;const e=Xt(t,this.length),n=this.banks.find(c=>e>c.start&&e<c.end);if(!n||this.gaps.some(c=>e>c.start-170&&e<c.landingEnd+100))return 0;const i=c=>{const h=Xt(c,this.length)/this.length*this.samples,u=Math.floor(h);return this.tangents[u].clone().lerp(this.tangents[u+1],h-u).normalize()},r=i(t-35),a=i(t+35),o=r.clone().cross(a).dot(ei)/70,l=Ie((e-n.start)/120)*Ie((n.end-e)/120)*(1-Math.abs(this.tubeShape(t)))**2;return 1.22*Math.tanh(-o*300/1.22)*l}distanceAhead(t,e){return Xt(e-t,this.length)}signedDistance(t,e){const n=this.distanceAhead(t,e);return n>this.length/2?n-this.length:n}sectionName(t){if(this.openEdges)return Math.abs(this.curvature(t+30))>.004?"ZIGZAG / HOLD SHIFT TO CARVE":"DRIFT LAB / RELEASE ON THE EXIT";const e=Xt(t,this.length)/this.length;if(this.exterior){const n=this.exterior,i=Xt(t,this.length);if(this.challenge){if(!this.hasRoad(t))return"RIFT GAP / AIM FOR AMBER";if(Math.abs(this.bankAngle(t))>.18)return"BANKED HAIRPIN / DRIFT TO BOOST";if(this.interiorBend(t)>.01)return"REACTOR TUNNEL / 360°";if(i>n.loopStart&&i<n.loopEnd)return"VORTEX LOOP / INVERTED";if(this.tubeBend(t)>.99)return"EXTERIOR TUBE / ORBITAL"}if(this.interiorBend(t)>.001)return"INNER REACTOR / 360° TUNNEL";for(const r of this.flats)if(Math.abs(this.signedDistance(r.center,t))<r.length/2)return r.name;return this.tubeBend(t)<.999?"TUBE UNWRAP / CENTER YOUR LINE":i>=n.spiralStart&&i<=n.spiralEnd?"THE DOUBLE HELIX / ASCENT":i>=n.loopStart&&i<=n.loopEnd?"CROWN LOOP / INVERTED":i>=n.descentStart&&i<=n.descentEnd?"CORKSCREW / DESCENT":e>.8?"ORBITAL S-BENDS":"ORBITAL APPROACH"}if(this.stage==="abyss"){const n=this.drop,i=this.pipe,r=Xt(t,this.length);return this.waves.length&&r>this.waves[0].s-130&&r<this.waves[2].s+130?"BOOST SWELL / WAVE RIDGES":r>=i.start&&r<=i.end?"THE REACTOR / 360° PIPE":r>=n.start&&r<n.end?"ABYSS / AIM FOR THE DECK":r>=n.end&&r<n.landingEnd?"LANDING PLATFORM":r>=n.start-250&&r<n.start?"DROP APPROACH":e<.16?"VERTICAL ASCENT":e>.87?"CANYON DESCENT":"RAZOR RIDGE"}return e<.1||e>.94?"GRID STRAIGHT":e<.26?"BANKED ASCENT":e<.45?"THE HALFPIPE":e<.59?"SKYLINE LAUNCH":e<.745?"HIGHLINE CURVES":e<.825?"FOUNDRY BOWL":"DESCENT"}}const So=s=>s>=2.2?3:s>=1.35?2:s>=.65?1:0,ls=140,yo=192,Le=1.8,Jg=.5,jg=["YOU","KIRA","GHOST","AXEL","NOVA","RIFT"],Qg=[14090053,16737129,10193151,4644341,16754253,15758803],kl=(s,t,e)=>{const n=e.clone().sub(t),i=qt(s.clone().sub(t).dot(n)/Math.max(n.lengthSq(),.001),0,1);return s.distanceTo(t.clone().addScaledVector(n,i))};class Hc{track;ships=[];rockets=[];mines=[];pickupTimers=new Map;padTimers=new Map;ringTimers=new Map;markerTimers=new Map;events=[];phase="menu";previousPhase="racing";elapsed=0;countdown=3.4;finishCount=0;seed=99;nextId=1;difficulty="standard";totalLaps=3;constructor(t){this.track=t,this.reset(!1)}get player(){return this.ships[0]}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223|0,(this.seed>>>0)/4294967296}reset(t=!0){this.seed=99,this.elapsed=0,this.countdown=3.4,this.nextId=1,this.finishCount=0,this.rockets=[],this.mines=[],this.events=[],this.pickupTimers.clear(),this.padTimers.clear(),this.ringTimers.clear(),this.markerTimers.clear(),this.ships=jg.map((e,n)=>{const i=9-Math.floor(n/2)*8,r=n%2?4.2:-4.2,a=this.track.surface(i,r),o=a.position.clone().addScaledVector(a.normal,Le);return{id:n,name:e,color:Qg[n],s:i,x:r,speed:0,yaw:0,position:o,previous:o.clone(),rotation:new Ee,energy:100,item:null,boost:0,hit:0,recovery:0,checkpoint:1,laps:0,total:0,finish:null,lastLap:0,lapStart:0,bestLap:1/0,aiTarget:r,aiThink:0,itemCooldown:0,airborne:0,flightVelocity:new C,airHeight:0,launches:0,hoverHeight:Le,hoverVelocity:0,aiPace:1,dropFlight:!1,pitch:0,flightTilted:!1,drifting:!1,driftCharge:0,driftDirection:0,driftSlide:0,markerPenalty:!1,markerStreak:0,markerPassed:0,markerMissed:0,jumpGap:null,aiDriftTime:0,aiDriftCooldown:0,falling:!1}}),this.phase=t?"countdown":"menu"}pause(){this.phase==="paused"?this.phase=this.previousPhase:(this.phase==="racing"||this.phase==="countdown")&&(this.previousPhase=this.phase,this.phase="paused")}ranking(){return[...this.ships].sort((t,e)=>t.finish!==null?e.finish!==null?t.finish-e.finish:-1:e.finish!==null?1:e.total-t.total)}emit(t,e,n,i=e.position){this.events.push({kind:t,position:i.clone(),player:e.id===0,text:n,color:e.color})}ai(t,e){const n=this.difficulty==="rookie"?.86:this.difficulty==="expert"?1.08:1,i=t.id===0?0:qt((this.player.total-t.total)/260,-1,1),r=1+i*(i>0?.17:.07);t.aiPace+=(r-t.aiPace)*(1-Math.exp(-e*1.3)),t.aiThink-=e;const a=Math.abs(this.track.curvature(t.s+Math.max(30,t.speed*.6)));let o=qt(ls-a*3800,76,134)*n*t.aiPace;const l=this.track.drop;if(l&&(t.dropFlight||t.s>l.start-220&&t.s<l.start)&&(o=ls*t.aiPace),t.aiThink<=0){t.aiThink=.18+this.random()*.15;let v=Math.sin(t.s*.005+t.id*2)*5;const _=this.track.features.filter(E=>this.track.distanceAhead(t.s,E.s)<(this.track.inFullPipe(t.s)?240:130)&&(E.kind==="pad"||!t.item&&!this.pickupTimers.has(E.id)));if(_.sort((E,S)=>this.track.distanceAhead(t.s,E.s)-this.track.distanceAhead(t.s,S.s)),_.length&&(v=_[0].x),this.track.exterior&&(!this.track.inFullPipe(t.s)||this.track.openingAhead(t.s)<340)&&(v=0),this.track.pipe&&t.s>this.track.pipe.end-280&&t.s<this.track.pipe.end&&(v=0),this.track.challenge){const E=this.nextMarker(t);E&&this.track.distanceAhead(t.s,E.s)<210&&(v=E.x+(E.side==="left"?-8:8));for(const S of this.track.barriers)this.track.distanceAhead(t.s,S.s)<110&&Math.abs(this.track.laneDelta(t.s,v,S.x))<S.width/2+3&&(v=S.x+(S.x>t.x?-1:1)*(S.width/2+6));this.track.gaps.some(S=>t.s>S.start-190&&t.s<S.landingEnd)&&(v=0),this.track.pipes.some(S=>t.s>S.end-330&&t.s<S.end+180)&&(v=0)}l&&t.s>l.start-220&&t.s<l.landingEnd&&(v=0);for(const E of this.ships){if(E.id===t.id)continue;this.track.distanceAhead(t.s,E.s)<32&&Math.abs(this.track.laneDelta(t.s,E.x,v))<4&&(v=E.x+(t.x>E.x?5:-5))}for(const E of this.mines)this.track.distanceAhead(t.s,E.s)<90&&Math.abs(this.track.laneDelta(t.s,E.x,v))<6&&(v=E.x>0?-7:7);const A=this.track.profile(t.s+50).width/2;t.aiTarget=this.track.inFullPipe(t.s)?this.track.wrapLane(t.s,v):qt(v,-A+4,A-4)}const c=this.track.laneDelta(t.s,t.x,t.aiTarget),h=qt(c*(this.track.inFullPipe(t.s)?.04:.024),-.42,.42),u=t.dropFlight?0:-this.track.curvature(t.s)*t.speed*.325;let d=qt((h-t.yaw)*5+u,-1,1);if(this.track.exterior&&t.airborne){const v=this.track.rings.filter(_=>this.track.distanceAhead(t.s,_.s)<190&&!this.ringTimers.has(`${t.id}:${_.id}`)).sort((_,A)=>this.track.distanceAhead(t.s,_.s)-this.track.distanceAhead(t.s,A.s))[0];if(v){const _=this.track.surface(t.s,t.x),A=t.flightVelocity.dot(_.right),E=qt(this.track.laneDelta(t.s,t.x,v.x)*1.2,-30,30);d=qt((E-A)*.09,-1,1)}}if(t.dropFlight&&l){const v=this.landingPrediction(t,!1),_=qt(t.flightVelocity.dot(l.right)-v.error/Math.max(.25,v.remaining),-30,30);d=qt((Math.asin(qt(_/Math.max(t.speed,1),-.5,.5))-t.yaw)*5,-1,1)}const f=this.ships.some(v=>v.id!==t.id&&this.track.distanceAhead(t.s,v.s)<190&&Math.abs(this.track.laneDelta(t.s,t.x,v.x))<10),g=this.ships.some(v=>v.id!==t.id&&this.track.distanceAhead(v.s,t.s)<70),M=t.itemCooldown<=0&&(t.item==="boost"?a<.007&&t.speed>70:t.item==="rocket"?f:t.item==="mine"&&g);this.track.challenge&&this.track.gaps.some(v=>t.s>v.start-250&&t.s<v.landingEnd)&&(o=ls*t.aiPace);const p=Math.abs(this.track.bankAngle(t.s+25))>.5&&Math.abs(this.track.curvature(t.s))>.0012;t.aiDriftCooldown=Math.max(0,t.aiDriftCooldown-e),t.aiDriftTime=Math.max(0,t.aiDriftTime-e),(t.airborne||t.hit>0||t.driftCharge>=.68)&&(t.aiDriftTime=0);const m=-Math.sign(this.track.curvature(t.s));p&&!t.airborne&&t.hit<=0&&t.speed>70&&t.speed<145&&t.boost===0&&t.aiDriftCooldown===0&&t.x*m<this.track.profile(t.s).width/2-t.speed*.12-5&&(t.aiDriftTime=.78,t.aiDriftCooldown=3);const T=t.aiDriftTime>0;let w=T||this.track.challenge>0&&!p&&!t.airborne&&t.speed>65&&a>.0018&&Math.abs(d)>.28&&t.driftCharge<2.25;if(T&&(d=(t.driftDirection||m)*.64),this.track.openEdges){const v=this.track.curvature(t.s);w=!t.airborne&&t.hit<=0&&t.speed>50&&(Math.abs(v)>.004||Math.abs(this.track.curvature(t.s+35))>.008);const _=qt(-t.x*.035,-.24,.24),A=w?4.4:.8,E=w?7.2:8.4;d=qt(((_-t.yaw)*10+_*E-v*t.speed*.78)/A,-1,1),t.aiTarget=0,o=134*n*t.aiPace}const x=t.airborne>0&&t.jumpGap!==null;return{throttle:x||t.speed<o+2?1:.28,brake:!x&&t.speed>o+16?.5:0,steer:d,airbrake:Math.abs(d)>.85&&a>.007?Math.sign(d)*.3:0,pitch:0,use:M,drift:w}}step(t,e){if(this.events=[],!(this.phase==="paused"||this.phase==="menu"||this.phase==="finished")){if(this.phase==="countdown"){this.countdown-=t,this.countdown<=0&&(this.phase="racing",this.events.push({kind:"boost",position:this.player.position.clone(),player:!0,text:"GO · FIND YOUR LINE"}));return}this.elapsed+=t;for(const[n,i]of this.pickupTimers)i<=t?this.pickupTimers.delete(n):this.pickupTimers.set(n,i-t);for(const[n,i]of this.padTimers)i<=t?this.padTimers.delete(n):this.padTimers.set(n,i-t);for(const[n,i]of this.ringTimers)i<=t?this.ringTimers.delete(n):this.ringTimers.set(n,i-t);for(const[n,i]of this.markerTimers)i<=t?this.markerTimers.delete(n):this.markerTimers.set(n,i-t);for(const n of this.ships)this.move(n,n.id===0?e:this.ai(n,t),t);this.resolveShipCollisions(t),this.updateWeapons(t),this.player.finish!==null&&(this.phase="finished",this.emit("finish",this.player))}}move(t,e,n){if(t.previous.copy(t.position),t.boost=Math.max(0,t.boost-n),t.hit=Math.max(0,t.hit-n),t.itemCooldown=Math.max(0,t.itemCooldown-n),t.recovery>0){if(t.recovery=Math.max(0,t.recovery-n),t.recovery<=0){const w=this.track.checkpoints[Xt(t.checkpoint-1,this.track.checkpoints.length)];t.s=w+3,t.x=0,t.speed=44,t.yaw=0,t.energy=100,t.airborne=0,t.dropFlight=!1,t.flightTilted=!1,t.pitch=0,t.boost=0,t.hoverHeight=Le,t.hoverVelocity=0,t.airHeight=0,t.flightVelocity.set(0,0,0),t.jumpGap=null,t.falling=!1,this.cancelDrift(t);const x=this.track.surface(t.s,0);t.position.copy(x.position).addScaledVector(x.normal,Le),t.previous.copy(t.position)}return}if(t.falling){this.moveEdgeFall(t,n);return}const i=this.track.surface(t.s,t.x);this.updateDrift(t,e,n);const r=t.boost>0,a=this.speedLimit(t),o=e.throttle*(r?120:70)-14-t.speed*.075-e.brake*96-Math.abs(e.airbrake)*24-(t.drifting?6:0);(!t.airborne||!t.flightTilted)&&(t.speed=qt(t.speed+o*n,0,a)),t.hit>0&&(t.speed=Math.min(t.speed,98));const l=t.dropFlight||this.track.exterior&&t.airborne?0:this.track.curvature(t.s),c=e.steer*((t.drifting?4.4:this.track.openEdges?.8:2.4)+Math.abs(e.airbrake)*1.4)+e.airbrake+l*t.speed*.78;t.yaw=qt(t.yaw+(c-t.yaw*(t.drifting?7.2:8.4))*n,-.8,.8);const h=t.s,u=t.dropFlight,d=t.airborne?this.track.gaps.find(w=>t.s>=w.start&&t.s<=w.landingEnd+100):void 0;if(t.dropFlight)this.moveDropFlight(t,e,n);else if(this.track.exterior&&t.airborne)this.moveExteriorFlight(t,e,n);else{const w=t.drifting?t.yaw*.52:t.yaw,x=t.speed*Math.cos(w)/i.longitudinalScale;let v=t.speed*Math.sin(w)/i.lateralScale;t.drifting?(t.driftSlide+=(v-t.driftSlide)*(1-Math.exp(-n*5)),v=t.driftSlide):t.driftSlide=v,t.s+=x*n,t.x+=v*n;const _=this.track.profile(t.s).width;this.track.exterior&&!t.airborne&&(t.x*=_/i.width);const A=_/2-1.7;if(t.x=this.track.wrapLane(t.s,t.x),!this.track.inFullPipe(t.s)&&!t.airborne&&Math.abs(t.x)>A){if(this.track.openEdges){const U=this.track.surface(t.s,t.x);t.position.copy(U.position).addScaledVector(U.normal,t.hoverHeight),t.flightVelocity.copy(U.forward).multiplyScalar(t.speed*Math.cos(w)).addScaledVector(U.right,v).addScaledVector(U.normal,t.hoverVelocity),t.falling=!0,t.airborne=.001,t.boost=0,this.cancelDrift(t),this.emit("launch",t,"EDGE MISSED · FALLING");return}t.x=qt(t.x,-A,A),t.hit<=0&&t.speed>15&&(t.speed*=.83,t.energy-=4,t.hit=.22,this.cancelDrift(t),this.emit("wall",t)),t.yaw*=-.25}const E=this.track.surface(t.s,t.x),S=this.track.drop&&h<this.track.drop.start&&t.s>=this.track.drop.start,b=this.track.gaps.find(U=>h<U.start&&t.s>=U.start),D=this.track.profile(t.s).pipe>0,O=!b&&this.track.exterior&&this.track.ramps.find(U=>this.track.distanceAhead(h,U.s)<=this.track.distanceAhead(h,t.s)&&Math.abs(this.track.laneDelta(t.s,t.x,U.x))<U.width*.45),L=this.track.waves.some(U=>h<U.s&&t.s>=U.s)&&t.speed>100,N=!this.track.drop&&!this.track.exterior&&h<this.track.launch&&t.s>=this.track.launch&&Math.abs(t.x)<8&&t.speed>8;if(!t.airborne){const U=this.track.exterior?0:qt((E.forward.y-i.forward.y)*t.speed/n*Math.max(.25,E.normal.y),-110,100),H=Math.sin(this.elapsed*3.4+t.id*1.7)*2,X=qt(46+(Le-t.hoverHeight)*42-t.hoverVelocity*7.2+H,0,110);t.hoverVelocity+=(X-46-U)*n,t.hoverHeight+=t.hoverVelocity*n,t.hoverHeight<.65&&(t.hoverHeight=.65,t.hoverVelocity=Math.abs(t.hoverVelocity)*.25)}if(!t.airborne&&(!D&&(N||L||!this.track.exterior&&t.hoverHeight>3.2&&t.hoverVelocity>2)||O&&t.speed>70)&&(t.airborne=.001,t.flightTilted=!1,t.launches++,t.flightVelocity.copy(i.forward).multiplyScalar(t.speed*Math.cos(t.yaw)).addScaledVector(i.right,t.speed*Math.sin(t.yaw)).addScaledVector(O?E.normal:i.normal,Math.max(t.hoverVelocity,O?D?16:28:N?6:L?18:0)),this.emit("launch",t,O?D?"TUNNEL RAMP · AIRBORNE":"ORBITAL RAMP · AIRBORNE":L?"WAVE CREST · AIRBORNE":"AIRBORNE")),S){const U=this.track.drop;t.dropFlight=!0,t.flightTilted=!1,t.airborne=.001,t.launches++,t.flightVelocity.copy(U.direction).multiplyScalar(t.speed*Math.cos(t.yaw)).addScaledVector(U.right,t.speed*Math.sin(t.yaw)),t.flightVelocity.y=8,this.emit("launch",t,"ABYSS DROP · AIM FOR THE DECK")}if(b&&(t.speed<65?this.recover(t):(t.airborne=.001,t.flightTilted=!1,t.jumpGap=this.track.gaps.indexOf(b),t.launches++,t.flightVelocity.copy(i.forward).multiplyScalar(t.speed*Math.cos(t.yaw)).addScaledVector(i.right,t.speed*Math.sin(t.yaw)).addScaledVector(i.normal,b.lift),this.cancelDrift(t),this.emit("launch",t,"RIFT JUMP · AIM FOR AMBER"))),t.airborne&&this.cancelDrift(t),t.dropFlight)this.moveDropFlight(t,e,n);else if(this.track.exterior&&t.airborne)this.moveExteriorFlight(t,e,n);else if(t.airborne){if(t.airborne+=n,t.flightVelocity.y-=18*n,t.flightVelocity.addScaledVector(E.normal,-58*n),t.flightTilted||e.pitch){this.applyAirPitch(t,e,n);const X=t.flightVelocity.dot(E.normal),z=Math.sqrt(Math.max(0,t.flightVelocity.lengthSq()-X*X)),$=E.forward.clone().multiplyScalar(Math.cos(t.yaw)).addScaledVector(E.right,Math.sin(t.yaw)).multiplyScalar(z).addScaledVector(E.normal,X);t.flightVelocity.lerp($,1-Math.exp(-n*3.2)),t.speed=t.flightVelocity.length()}else{const X=E.forward.clone().multiplyScalar(t.speed*Math.cos(t.yaw)).addScaledVector(E.right,t.speed*Math.sin(t.yaw));X.addScaledVector(E.normal,t.flightVelocity.dot(E.normal)),t.flightVelocity.lerp(X,1-Math.exp(-n*3.2)),t.flightVelocity.addScaledVector(E.right,e.steer*8*n)}t.position.addScaledVector(t.flightVelocity,n);for(let X=0;X<2;X++){const z=this.track.surface(t.s,t.x),Q=t.position.clone().sub(z.position);t.s+=qt(Q.dot(z.forward)/z.longitudinalScale,-12,12),t.x+=qt(Q.dot(z.right)/z.lateralScale,-4,4)}const U=this.track.surface(t.s,t.x),H=t.position.clone().sub(U.position).dot(U.normal);t.airHeight=Math.max(0,H-Le),t.airborne>.12&&H<Le&&Math.abs(t.x)<U.width/2-1.5&&t.flightVelocity.dot(U.normal)<0?(t.airborne=0,t.flightTilted=!1,t.pitch=0,t.airHeight=0,this.emit("land",t,"CLEAN LANDING"),t.hoverHeight=Math.max(.65,H),t.hoverVelocity=qt(t.flightVelocity.dot(U.normal),-9,0),t.position.copy(U.position).addScaledVector(U.normal,t.hoverHeight)):(t.airborne>(t.flightTilted?6:4)||t.position.y<(this.track.drop?-430:-90))&&this.recover(t)}else t.position.copy(E.position).addScaledVector(E.normal,t.hoverHeight),t.airHeight=Math.max(0,t.hoverHeight-Le)}const f=this.track.surface(t.s,t.x);let g=t.airborne&&!this.track.exterior?new C(0,1,0):f.normal;const M=t.airborne?t.flightVelocity.clone().normalize():f.forward.clone().applyAxisAngle(g,-t.yaw),p=M.clone().cross(g).normalize();t.airborne?(t.pitch=this.track.exterior?Math.asin(qt(M.dot(g),-1,1)):Math.atan2(M.y,Math.hypot(M.x,M.z)),g=p.clone().cross(M).normalize()):t.pitch=0;const m=new Ut().makeBasis(p,g,M.clone().negate()),T=new Ee().setFromRotationMatrix(m);T.multiply(new Ee().setFromAxisAngle(new C(0,0,1),-e.steer*.12)),T.multiply(new Ee().setFromAxisAngle(new C(1,0,0),t.airborne?0:qt(t.hoverVelocity*.012,-.12,.12))),t.rotation.slerp(T,1-Math.exp(-12*n)),e.use&&t.item&&t.itemCooldown<=0&&this.useItem(t),this.collectMarkers(t,h),this.collideBarriers(t),t.markerPenalty&&(t.speed=Math.min(t.speed,this.speedLimit(t)),t.airborne&&t.flightVelocity.clampLength(0,this.speedLimit(t))),this.track.exterior&&this.collectRings(t),t.airborne||this.collectFeatures(t,h),this.updateProgress(t,u&&!t.dropFlight?Math.min(h,this.track.drop.end-1):d&&!t.airborne&&!t.recovery?Math.min(h,d.start-1):h),t.hit<=0&&(t.energy=Math.min(100,t.energy+n*1.2)),t.energy<=0&&this.recover(t),t.s>=this.track.length&&(t.s-=this.track.length)}moveEdgeFall(t,e){t.airborne+=e,t.flightVelocity.y-=46*e,t.position.addScaledVector(t.flightVelocity,e),(t.position.y<this.track.surface(t.s,t.x).position.y-70||t.airborne>2.5)&&this.recover(t)}moveExteriorFlight(t,e,n){const i=this.track,r=i.exterior,a=i.projectExterior(t.position,t.s),o=i.base(a.s),l=a.radial,c=i.surface(a.s,a.x),h=t.position.clone().sub(c.position).dot(c.normal),u=o.forward.clone().cross(l).normalize();if(e.pitch||t.flightTilted){t.flightTilted=!0;const _=Math.asin(qt(t.flightVelocity.clone().normalize().dot(l),-1,1)),A=e.pitch?qt(_+e.pitch*.95*n,-1.05,.85)-_:0,E=t.flightVelocity.clone().addScaledVector(l,-t.flightVelocity.dot(l)).normalize().cross(l).normalize();t.flightVelocity.applyAxisAngle(E,A);const S=3+Math.max(0,e.pitch)*24+Math.max(0,Math.sin(_))*24+e.brake*35;t.flightVelocity.setLength(Math.max(22,t.flightVelocity.length()+(e.throttle*5-S)*n));const b=this.speedLimit(t);if(t.flightVelocity.length()>b){const D=t.flightVelocity.clone().addScaledVector(l,-t.flightVelocity.dot(l)).normalize();t.flightVelocity.addScaledVector(D,-(t.flightVelocity.length()-b)*3*n)}}else{const _=this.speedLimit(t),A=t.flightVelocity.length()>_?-(t.flightVelocity.length()-_)*3-e.brake*96:e.throttle*(t.boost>0?120:70)-14-t.speed*.075-e.brake*96,E=t.flightVelocity.clone().addScaledVector(l,-t.flightVelocity.dot(l)).normalize();t.flightVelocity.addScaledVector(E,A*n)}t.flightVelocity.addScaledVector(u,e.steer*20*n);const d=(1-Math.abs(i.tubeShape(a.s)))**2;if(d>0){const _=i.surface(a.s,a.x),A=t.flightVelocity.dot(l),E=Math.sqrt(Math.max(0,t.flightVelocity.lengthSq()-A*A)),S=_.forward.clone().multiplyScalar(Math.cos(t.yaw)).addScaledVector(_.right,Math.sin(t.yaw));t.flightVelocity.lerp(S.multiplyScalar(E).addScaledVector(l,A),1-Math.exp(-n*3.2*d))}const f=i.base(a.s+8).forward.sub(i.base(a.s-8).forward).multiplyScalar(1/16),g=t.flightVelocity.dot(o.forward),M=t.flightVelocity.dot(u),p=this.exteriorGravity(t,a.s,l,g,M,f);t.flightVelocity.addScaledVector(l,-p*n),t.position.addScaledVector(t.flightVelocity,n),t.airborne+=n;const m=i.projectExterior(t.position,a.s);t.s=m.s,t.x=i.wrapLane(t.s,m.x);const T=i.surface(t.s,t.x),w=t.position.clone().sub(T.position).dot(T.normal),x=t.jumpGap===null?null:i.gaps[t.jumpGap],v=!x||t.s>=x.end&&t.s<=x.landingEnd;t.airHeight=Math.max(0,w-Le),t.speed=t.flightVelocity.length(),v&&i.hasRoad(t.s)&&t.airborne>.12&&w<Le&&(i.inFullPipe(t.s)||Math.abs(t.x)<T.width/2-1.5)&&(h>=Le||t.flightVelocity.dot(m.radial)<0)?(t.airborne=0,t.flightTilted=!1,t.pitch=0,t.airHeight=0,t.jumpGap=null,t.hoverHeight=Math.max(.65,w),t.hoverVelocity=-7,t.speed=Math.min(this.speedLimit(t),Math.hypot(t.flightVelocity.dot(T.forward),t.flightVelocity.dot(T.right))),t.position.copy(T.position).addScaledVector(T.normal,t.hoverHeight),this.emit("land",t,"ORBITAL LANDING")):(t.airborne>8||w>180||w<-r.radius||x&&t.s>x.landingEnd+15)&&this.recover(t)}exteriorGravity(t,e,n,i,r,a){const o=this.track.exterior.radius,l=Math.abs(this.track.tubeShape(e));return Jg*(95+Math.max(0,-a.dot(n))*i*i+r*r*l/(o+Le))}collectRings(t){if(t.airborne)for(const e of this.track.rings){const n=`${t.id}:${e.id}`;if(this.ringTimers.has(n))continue;const i=this.track.surface(e.s,e.x),r=i.position.clone().addScaledVector(i.normal,e.height),a=t.previous.clone().sub(r).dot(i.forward),o=t.position.clone().sub(r).dot(i.forward);a>=0||o<0||t.previous.clone().lerp(t.position,-a/(o-a)).distanceTo(r)>e.radius-1.2||(this.ringTimers.set(n,3),t.boost=Math.max(t.boost,1.4),t.flightVelocity.setLength(this.speedLimit(t)),t.speed=t.flightVelocity.length(),this.emit("boost",t,"AIR RING · BOOST",r))}}speedLimit(t){return(t.boost>0?yo:ls)*(t.id===0?1:t.aiPace)*(t.markerPenalty?.8:1)}cancelDrift(t){t.drifting=!1,t.driftCharge=0,t.driftDirection=0,t.driftSlide=0}updateDrift(t,e,n){if(t.airborne||t.hit>0||t.speed<50||e.brake>.8){this.cancelDrift(t);return}if(e.drift)t.drifting=!0,Math.abs(e.steer)>.28&&(t.driftDirection&&Math.sign(e.steer)!==t.driftDirection?t.driftCharge=Math.max(0,t.driftCharge-n*2):t.driftCharge=Math.min(3,t.driftCharge+n*Math.min(1,Math.abs(e.steer)*1.5)),t.driftDirection=Math.sign(e.steer));else if(t.drifting){const i=So(t.driftCharge);this.cancelDrift(t),i&&(t.boost=Math.max(t.boost,[0,.65,1.15,1.8][i]),t.speed=Math.min(this.speedLimit(t),t.speed+22+i*8),this.emit("boost",t,`DRIFT TURBO / ${["","CYAN","AMBER","VIOLET"][i]}`))}}nextMarker(t){return this.track.markers.filter(e=>!this.markerTimers.has(`${t.id}:${e.id}`)).sort((e,n)=>this.track.distanceAhead(t.s,e.s)-this.track.distanceAhead(t.s,n.s))[0]}collectMarkers(t,e){for(const n of this.track.markers){if(!(e<n.s&&t.s>=n.s)||this.markerTimers.has(`${t.id}:${n.id}`))continue;this.markerTimers.set(`${t.id}:${n.id}`,5);const i=this.track.surface(n.s,n.x),r=t.previous.clone().lerp(t.position,qt((n.s-e)/Math.max(.001,t.s-e),0,1)).sub(i.position),a=r.dot(i.right);this.track.hasRoad(n.s)&&Math.abs(a)<i.width/2-1.2&&Math.abs(r.dot(i.normal))<14&&t.recovery<=0&&(n.side==="left"?a<-1.5:a>1.5)?(t.markerPassed++,t.markerPenalty&&(t.markerStreak++,t.markerStreak>=5?(t.markerPenalty=!1,t.markerStreak=0,this.emit("marker",t,"FIVE CLEAN · FULL POWER RESTORED")):this.emit("marker",t,`CLEAN MARKER · POWER ${t.markerStreak} / 5`))):(t.markerMissed++,t.markerPenalty=!0,t.markerStreak=0,t.speed=Math.min(t.speed,this.speedLimit(t)),t.airborne&&t.flightVelocity.clampLength(0,this.speedLimit(t)),this.emit("marker",t,"MISSED MARKER · POWER 80%"))}}collideBarriers(t){if(!(t.hit>0||t.recovery>0))for(const e of this.track.barriers){if(Math.abs(this.track.signedDistance(t.s,e.s))>35)continue;const n=this.track.surface(e.s,e.x),i=t.previous.clone().sub(n.position),r=t.position.clone().sub(n.position);let a=0,o=1;for(const[l,c,h]of[[n.right,e.width/2+1.5,0],[n.normal,e.height/2+1,e.height/2],[n.forward,e.length/2+2,0]]){const u=i.dot(l)-h,d=r.dot(l)-i.dot(l);if(Math.abs(d)<1e-6){if(Math.abs(u)>c){o=-1;break}}else{const f=(-c-u)/d,g=(c-u)/d;a=Math.max(a,Math.min(f,g)),o=Math.min(o,Math.max(f,g))}}if(a<=o){this.damage(t,12,t.previous.clone().lerp(t.position,qt(a,0,1))),this.emit("wall",t,"BARRIER IMPACT · DODGE THE RED BLOCKS");break}}}applyAirPitch(t,e,n){t.flightTilted=!0;const i=t.flightVelocity,r=new C(i.x,0,i.z);if(r.lengthSq()<.01)return;const a=r.normalize().cross(new C(0,1,0)),o=Math.atan2(i.y,Math.hypot(i.x,i.z)),l=qt(o+e.pitch*.95*n,-1.05,.85);i.applyAxisAngle(a,l-o),i.applyAxisAngle(new C(0,1,0),-e.steer*.55*n);const c=3+Math.max(0,e.pitch)*24+Math.max(0,Math.sin(l))*24+e.brake*35+Math.abs(e.airbrake)*10,h=Math.max(22,i.length()+(e.throttle*5+(t.boost>0?6:0)-c)*n);i.setLength(h),t.speed=h}landingPrediction(t,e=!0){const n=this.track.drop;if(!n||!t.dropFlight)return null;const i=Math.max(0,(t.flightVelocity.y+Math.sqrt(t.flightVelocity.y**2+2*n.gravity*Math.max(0,t.position.y-n.origin.y+n.height)))/n.gravity),r=t.position.clone().addScaledVector(t.flightVelocity,i);if(e&&!t.flightTilted){const f=(1-Math.exp(-2.6*i))/2.6,g=(1-Math.exp(-8.4*i))/8.4,M=t.flightVelocity.dot(n.right),p=t.speed*Math.sin(t.yaw),m=M*f+p*2.6/(2.6-8.4)*(g-f);r.addScaledVector(n.right,m-M*i)}const a=this.track.projectDrop(r),o=this.track.base(a.s).position,l=r.clone().sub(n.origin).dot(n.direction),c=this.track.base(n.end).position.sub(n.origin).dot(n.direction),h=this.track.base(n.landingEnd).position.sub(n.origin).dot(n.direction);return{remaining:i,error:r.sub(o).dot(n.right),range:l<c?"short":l>h?"long":"inside"}}moveDropFlight(t,e,n){const i=this.track.drop;if(t.airborne+=n,t.flightTilted||e.pitch)this.applyAirPitch(t,e,n);else{const c=i.direction.clone().multiplyScalar(t.speed*Math.cos(t.yaw)).addScaledVector(i.right,t.speed*Math.sin(t.yaw));c.y=t.flightVelocity.y,t.flightVelocity.lerp(c,1-Math.exp(-n*2.6))}t.flightVelocity.y-=i.gravity*n,t.flightTilted&&(t.speed=t.flightVelocity.length()),t.position.addScaledVector(t.flightVelocity,n);const r=this.track.projectDrop(t.position);t.s=r.s,t.x=r.x;const a=this.track.surface(t.s,t.x),o=t.position.clone().sub(a.position).dot(a.normal);t.airHeight=Math.max(0,t.position.y-(i.origin.y-i.height)-Le),t.previous.y>=a.position.y+Le&&o<=Le&&t.s>=i.end&&t.s<=i.landingEnd&&Math.abs(t.x)<a.width/2-2&&t.flightVelocity.y<0?(t.dropFlight=!1,t.airborne=0,t.flightTilted=!1,t.pitch=0,t.airHeight=0,t.hoverHeight=Math.max(.65,o),t.hoverVelocity=-9,t.position.copy(a.position).addScaledVector(a.normal,t.hoverHeight),this.emit("land",t,"ABYSS LANDING · CLEAN")):(t.airborne>14||t.position.y<i.origin.y-i.height-14||t.s>i.landingEnd+40)&&this.recover(t)}updateProgress(t,e){const n=t.s,i=t.airborne&&this.track.gaps.find(o=>t.s>=o.start&&t.s<=o.landingEnd+100);if(i){t.total=t.laps*this.track.length+i.start;return}const r=this.track.checkpoints[t.checkpoint];if(!t.dropFlight&&t.checkpoint===0)e<this.track.length&&n>=this.track.length&&(t.laps++,t.lastLap=this.elapsed-t.lapStart,t.bestLap=Math.min(t.bestLap,t.lastLap),t.lapStart=this.elapsed,t.checkpoint=1,this.emit("lap",t,t.laps===2?"FINAL LAP":`LAP ${t.laps+1} / 3`),t.laps>=this.totalLaps&&t.finish===null&&(t.finish=++this.finishCount));else if(!t.dropFlight&&e<r&&n>=r)do t.checkpoint=(t.checkpoint+1)%this.track.checkpoints.length;while(t.checkpoint!==0&&n>=this.track.checkpoints[t.checkpoint]);const a=t.checkpoint===0?this.track.checkpoints[this.track.checkpoints.length-1]:this.track.checkpoints[t.checkpoint-1];t.total=t.laps*this.track.length+qt(Xt(n,this.track.length),a,t.checkpoint===0?this.track.length:this.track.checkpoints[t.checkpoint])}collectFeatures(t,e){for(const n of this.track.features)if(!(!(e<=n.s+3&&t.s>=n.s-3)||Math.abs(this.track.laneDelta(n.s,t.x,n.x))>(n.kind==="pad"?3.8:4.2))){if(n.kind==="pad"){const r=`${t.id}:${n.id}`;this.padTimers.has(r)||(t.boost=Math.max(t.boost,.85),this.padTimers.set(r,2),this.emit("boost",t,"BOOST PAD"))}else if(!t.item&&!this.pickupTimers.has(n.id)){const r=["rocket","boost","mine"];t.item=r[Math.floor(this.random()*3)],this.pickupTimers.set(n.id,5),this.emit("pickup",t,`${t.item.toUpperCase()} ACQUIRED`)}}}useItem(t){const e=t.item;if(t.item=null,t.itemCooldown=.8,e==="boost")t.boost=Math.max(t.boost,1.8),this.emit("boost",t,"BOOST ENGAGED");else if(e==="mine"){const n=Xt(t.s-5,this.track.length),i=this.track.surface(n,t.x);this.mines.push({id:this.nextId++,owner:t.id,s:n,x:t.x,position:i.position.clone().addScaledVector(i.normal,.5),normal:i.normal,life:18,armed:.7}),this.mines.length>24&&this.mines.shift(),this.emit("mine",t,"MINE DEPLOYED")}else if(e==="rocket"){const n=this.track.surface(t.s,t.x),i=n.forward.clone().applyAxisAngle(n.normal,-t.yaw),r=this.ships.filter(o=>o.id!==t.id&&this.track.distanceAhead(t.s,o.s)<240&&o.position.clone().sub(t.position).normalize().dot(i)>.55).sort((o,l)=>o.position.distanceToSquared(t.position)-l.position.distanceToSquared(t.position))[0],a=t.position.clone().addScaledVector(i,5).addScaledVector(n.normal,.5);this.rockets.push({id:this.nextId++,owner:t.id,position:a,previous:a.clone(),velocity:i.multiplyScalar(270),life:3,target:r?.id??null}),this.rockets.length>18&&this.rockets.shift(),this.emit("fire",t,"ROCKET AWAY")}}damage(t,e,n){t.hit>0||t.recovery>0||(this.cancelDrift(t),t.energy-=e,t.speed*=.55,t.airborne&&t.flightVelocity.multiplyScalar(.55),t.hit=.85,t.yaw+=(this.random()-.5)*.2,this.emit("hit",t,"IMPACT · ENERGY LOST",n))}updateWeapons(t){this.rockets=this.rockets.filter(e=>{e.life-=t,e.previous.copy(e.position);const n=e.target!==null?this.ships[e.target]:null;if(n&&n.recovery<=0){const l=n.position.clone().addScaledVector(this.track.base(n.s).forward,n.speed*.12).sub(e.position).normalize(),c=e.velocity.clone().normalize(),h=c.angleTo(l),u=Math.min(1,t*2.3/Math.max(h,.001));c.applyQuaternion(new Ee().setFromUnitVectors(c,l).slerp(new Ee,1-u)),e.velocity.copy(c).multiplyScalar(270)}e.position.addScaledVector(e.velocity,t);for(const l of this.ships)if(!(l.id===e.owner||l.recovery>0)&&kl(l.position,e.previous,e.position)<3.6)return this.damage(l,25,e.position),!1;const i=this.ships[e.owner];let r=1/0,a=this.track.surface(i.s,i.x);for(let l=-20;l<260;l+=12){const c=this.track.base(i.s+l),h=e.position.clone().sub(c.position),u=this.track.profile(i.s+l).pipe,d=this.track.pipe&&u>.01?this.track.pipe.radius/u:0,f=this.track.tubeShape(i.s+l),g=this.track.exterior&&Math.abs(f)>1e-5?this.track.exterior.radius/f:0,M=Math.sign(g),p=this.track.exterior?g?Math.atan2(h.dot(c.right)*M,(h.dot(c.normal)-this.track.exterior.radius+g)*M)*g:h.dot(c.right):d?Math.atan2(h.dot(c.right),d-h.dot(c.normal))*d:h.dot(c.right),m=this.track.surface(i.s+l,qt(p,-c.width/2+.2,c.width/2-.2)),T=m.position.distanceToSquared(e.position);T<r&&(r=T,a=m)}const o=e.position.clone().sub(a.position).dot(a.normal);return r<1200&&o<.1?(this.events.push({kind:"hit",position:e.position.clone(),player:!1,color:16754253}),!1):e.life>0&&(this.track.exterior||e.position.y>-80)}),this.mines=this.mines.filter(e=>{if(e.life-=t,e.armed-=t,e.armed<=0){for(const n of this.ships)if(!(n.recovery>0||n.id===e.owner&&e.life>16.5)&&kl(e.position,n.previous,n.position)<4)return this.damage(n,30,e.position),!1}return e.life>0})}resolveShipCollisions(t){for(let e=0;e<this.ships.length;e++)for(let n=e+1;n<this.ships.length;n++){const i=this.ships[e],r=this.ships[n];if(i.recovery>0||r.recovery>0||i.position.distanceToSquared(r.position)>20)continue;const a=this.track.laneDelta(i.s,r.x,i.x)>0?1:-1;i.x+=a*t*9,r.x-=a*t*9,i.speed>r.speed?i.speed=Math.max(r.speed,i.speed-16*t):r.speed=Math.max(i.speed,r.speed-16*t)}}recover(t){t.recovery>0||(this.cancelDrift(t),t.recovery=1.5,t.speed=0,t.item=null,this.emit("recover",t,"RECOVERING TO CHECKPOINT"))}}const Bl=48;class t0{points=[[],[]];positions=new Float32Array(2*(Bl-1)*6*3);colors=new Float32Array(this.positions.length);mesh;emission=0;constructor(t){const e=new he;e.setAttribute("position",new Ge(this.positions,3).setUsage(No)),e.setAttribute("color",new Ge(this.colors,3).setUsage(No)),e.setDrawRange(0,0),this.mesh=new gt(e,new Je({vertexColors:!0,transparent:!0,opacity:.85,blending:ui,depthWrite:!1,side:te})),this.mesh.frustumCulled=!1,t.add(this.mesh)}clear(){this.points.forEach(t=>{t.length=0}),this.mesh.geometry.setDrawRange(0,0),this.emission=0}update(t,e,n,i,r){if(t.recovery>0||!r){this.clear();return}if(i<=0)return;for(const l of this.points){for(const c of l)c.age+=i;for(;l.length&&l[0].age>(l[0].boost?.58:.32);)l.shift()}if(this.emission+=i,t.speed>8&&this.emission>=1/90){this.emission%=1/90;for(let l=0;l<2;l++){const c=this.points[l],h=new C(l?2.15:-2.15,-.1,3.9).applyQuaternion(e.quaternion).add(e.position);c.length&&c[c.length-1].position.distanceTo(h)>30&&(c.length=0),c.push({position:h,age:0,boost:t.boost>0}),c.length>Bl&&c.shift()}}let a=0;const o=Math.min(1,.35+t.speed/yo);for(const l of this.points)for(let c=1;c<l.length;c++){const h=l[c-1],u=l[c],d=u.position.clone().sub(h.position);if(d.lengthSq()<1e-4)continue;const f=d.cross(n.position.clone().sub(u.position)).normalize(),g=Math.max(0,1-h.age/(h.boost?.58:.32)),M=Math.max(0,1-u.age/(u.boost?.58:.32)),p=(h.boost?.66:.34)*g,m=(u.boost?.66:.34)*M,T=[h.position.clone().addScaledVector(f,p),h.position.clone().addScaledVector(f,-p),u.position.clone().addScaledVector(f,m),u.position.clone().addScaledVector(f,-m)],w=new wt(h.boost?14090053:5823999).multiplyScalar(g*g*o*6),x=new wt(u.boost?14090053:5823999).multiplyScalar(M*M*o*6);for(const v of[0,1,2,1,3,2])T[v].toArray(this.positions,a*3),(v<2?w:x).toArray(this.colors,a*3),a++}this.mesh.geometry.setDrawRange(0,a),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}const cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Dn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e0=new _o(-1,1,1,-1,0,1);class n0 extends he{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const i0=new n0;class Wn{constructor(t){this._mesh=new gt(i0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gc extends Dn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zl extends Dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class s0 extends Dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class r0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gc(cr),this.copyPass.material.blending=Cn,this.clock=new hd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(a instanceof zl?n=!0:a instanceof s0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a0 extends Dn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new wt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const o0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xi extends Dn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,a,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new He(r,a,{type:je});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new He(r,a,{type:je});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=o0;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ms.clone(cr.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,blending:ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new wt,this._oldClearAlpha=1,this._basic=new Je,this._fsQuad=new Wn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xi.BlurDirectionX=new ot(1,0);Xi.BlurDirectionY=new ot(0,1);const er={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class l0 extends Dn{constructor(){super(),this.uniforms=Ms.clone(er.uniforms),this.material=new nd({name:er.name,uniforms:this.uniforms,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader}),this._fsQuad=new Wn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ja?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Vl={lime:14090053,cyan:6743529};function ae(s,t=8,e={}){return new Je({...e,color:new wt(s).multiplyScalar(t)})}function xr(s,t){const e=document.createElement("canvas");e.width=e.height=s;const n=e.getContext("2d");t(n,s);const i=new co(e);return i.colorSpace=Ue,i.magFilter=Te,i.minFilter=ic,i.wrapS=i.wrapT=hr,i}function c0(){return xr(128,s=>{s.fillStyle="#818a9f",s.fillRect(0,0,128,128);let t=17;for(let e=0;e<2100;e++){t=Math.imul(t,1664525)+1013904223|0;const n=t>>>0;s.fillStyle=e%2?"#8a93a7":"#737e95",s.fillRect(n%128,(n>>>8)%128,1,1)}s.fillStyle="#626d84",s.fillRect(0,0,128,2),s.fillRect(0,0,2,128),s.fillStyle="#a2aabb",s.fillRect(2,2,126,1),s.fillStyle="#616d83",s.fillRect(8,9,4,2),s.fillRect(117,117,4,2),s.fillStyle="#ced4d8",s.fillRect(62,5,3,39),s.fillRect(62,70,3,39),s.fillStyle="#d1d7df",s.fillRect(7,0,2,128),s.fillRect(119,0,2,128)})}function Hl(){return xr(64,s=>{s.fillStyle="#d6ff45",s.fillRect(0,0,64,64),s.fillStyle="#202638";for(let t=-64;t<128;t+=32)s.beginPath(),s.moveTo(t,0),s.lineTo(t+16,0),s.lineTo(t+80,64),s.lineTo(t+64,64),s.fill();s.fillStyle="#ffffff33",s.fillRect(0,0,64,5)})}function h0(){return xr(64,s=>{s.fillStyle="#244c48",s.fillRect(0,0,64,64),s.fillStyle="#d6ff45";for(let t=0;t<80;t+=24)s.beginPath(),s.moveTo(5,t+18),s.lineTo(32,t),s.lineTo(59,t+18),s.lineTo(59,t+27),s.lineTo(32,t+9),s.lineTo(5,t+27),s.fill();s.fillRect(0,0,3,64),s.fillRect(61,0,3,64)})}function u0(s){return xr(64,t=>{t.fillStyle=`#${s.toString(16).padStart(6,"0")}`,t.fillRect(0,0,64,64),t.fillStyle="#131d2d",t.fillRect(23,0,12,64),t.fillRect(3,15,12,2),t.fillRect(43,46,18,3),t.fillStyle="#f0f0dc",t.fillRect(38,0,3,64),t.font="bold 15px monospace",t.fillText("99",43,28),t.fillStyle="#ffffff55",t.fillRect(3,3,14,1),t.fillRect(45,54,14,1),t.fillStyle="#151e33";for(let e=32;e<50;e+=3)t.fillRect(6,e,10,1)})}function si(s,t="#d6ff45",e=""){const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");i.fillStyle="#192033",i.fillRect(0,0,256,64),i.fillStyle=t,i.fillRect(0,0,5,64),i.font="900 27px monospace",i.fillText(s,13,34),i.font="9px monospace",i.fillStyle="#c0c8d4",i.fillText(e||"ANTI-GRAVITY RACING LEAGUE // 2099",14,51);const r=new co(n);return r.colorSpace=Ue,r.magFilter=Te,r}function is(s,t,e){const n=[],i=[];for(const a of t)for(const o of a){const l=s[o];n.push(...l),i.push((l[0]+3.5)/7,(l[2]+4)/7)}const r=new he;return r.setAttribute("position",new Ht(n,3)),r.setAttribute("uv",new Ht(i,2)),r.computeVertexNormals(),new gt(r,e)}function d0(s,t=0){const e=new qe,n=new Ae({map:u0(s),flatShading:!0,side:te}),i=new Ae({color:2436419,flatShading:!0}),r=new Ae({color:12437711,flatShading:!0}),a=new Ae({color:6798021,emissive:1458003,flatShading:!0}),o=[[0,.25,-4.4],[-.9,.3,-1.3],[.9,.3,-1.3],[-1.1,.2,2.2],[1.1,.2,2.2],[0,1.05,-.1],[0,.75,2.1],[0,-.55,-1.5],[-.8,-.45,2],[.8,-.45,2]];e.add(is(o,[[0,1,5],[0,5,2],[1,3,6],[1,6,5],[2,5,6],[2,6,4],[3,4,6]],n)),e.add(is(o,[[0,7,1],[0,2,7],[1,7,8],[1,8,3],[2,9,7],[2,4,9],[3,8,9],[3,9,4],[7,9,8]],i)),e.add(is([[-.56,.65,-1.5],[.56,.65,-1.5],[0,1.12,-.1],[-.58,.65,.75],[.58,.65,.75]],[[0,2,1],[0,3,2],[1,2,4],[3,4,2]],a));for(const c of[-1,1]){const h=[[c*.75,.15,-.6],[c*3.1,-.1,2.25],[c*1.2,.3,2.7],[c*2.55,.25,.55]];e.add(is(h,[[0,1,3],[0,2,1],[1,2,3]],n));const u=new gt(new _e(.65,.55,2.1),i);u.position.set(c*2.15,-.1,1.45),e.add(u);const d=is([[c*1.9,.1,1],[c*2.2,1.2,2.3],[c*2.35,.1,2.5]],[[0,1,2]],n);e.add(d);const f=new gt(new fi(.32,.4,.5,6),r);f.rotation.x=Math.PI/2,f.position.set(c*2.15,-.1,2.55),e.add(f);const g=new gt(new Ss(.42,2.5,5),ae(7860223,8,{transparent:!0,opacity:.9,blending:ui,depthWrite:!1}));g.rotation.x=Math.PI/2,g.position.set(c*2.15,-.1,3.7),g.name=`flame${c}`,e.add(g);const M=new gt(new Ss(.18,1.6,5),ae(14154751,6));M.rotation.x=Math.PI/2,M.position.set(c*2.15,-.1,3.15),M.name=`engineCore${c}`,e.add(M);const p=new gt(new _e(.08,.09,2),ae(6743529,7));p.position.set(c*2.48,.2,1.45),e.add(p)}const l=new gt(new Be(.65,.6),new Je({map:si(`0${t+1}`),side:te}));return l.rotation.x=-Math.PI/2,l.position.set(0,.85,1.5),e.add(l),e}function f0(){const s=new qe,t=new gt(new Wi(1.5),ae(10187263,9));s.add(t);const e=new gt(new Wi(2),ae(14735615,8,{wireframe:!0}));s.add(e);const n=new gt(new zn(2.1,.17,4,16),ae(12098303,14));return n.rotation.x=Math.PI/2,s.add(n),s}const Ya={driftlab:{name:"HOLOGRAPHIC TEST VOID",skyTop:133397,skyBottom:1125435,horizon:5427168,horizonGlow:.55,haze:1255482,hazeDensity:.4,cloudShadow:1584195,cloudLight:9288137,ambient:11984879,groundLight:1781835,ambientIntensity:2.1,sunLight:12378093,sunIntensity:1.4,sunDirection:[-.3,.45,-1],sunColor:10087167,sunSize:0,sunGlow:0,buildings:0,nearby:0,stars:420,mountains:"none",abstract:"none"},foundry:{name:"INDUSTRIAL DUSK",skyTop:1120559,skyBottom:6637394,horizon:16741969,horizonGlow:2,haze:5718350,hazeDensity:1,cloudShadow:4276313,cloudLight:13017754,ambient:15128271,groundLight:5456223,ambientIntensity:1.9,sunLight:16759698,sunIntensity:2,sunDirection:[-.35,.05,-1],sunColor:16753265,sunSize:.022,sunGlow:5,buildings:85,nearby:15,stars:0,mountains:"none",abstract:"none"},abyss:{name:"MOONLIT CHASM",skyTop:132366,skyBottom:1780808,horizon:6850988,horizonGlow:.35,haze:1384758,hazeDensity:.75,cloudShadow:1121326,cloudLight:6455199,ambient:8428740,groundLight:1775924,ambientIntensity:1.25,sunLight:13032959,sunIntensity:1.6,sunDirection:[-.45,.34,-1],sunColor:14084863,sunSize:.035,sunGlow:2.8,buildings:16,nearby:4,stars:520,mountains:"moon",abstract:"none"},helix:{name:"VIOLET SCULPTURE FIELD",skyTop:2168389,skyBottom:6450065,horizon:12101114,horizonGlow:.8,haze:5327209,hazeDensity:.65,cloudShadow:4800613,cloudLight:11578833,ambient:13747967,groundLight:3482711,ambientIntensity:2.15,sunLight:13033215,sunIntensity:1.65,sunDirection:[-.5,.18,-1],sunColor:16768249,sunSize:0,sunGlow:0,buildings:22,nearby:5,stars:0,mountains:"none",abstract:"shards"},slalom:{name:"NEON MIDNIGHT",skyTop:131849,skyBottom:465705,horizon:1404802,horizonGlow:.45,haze:531243,hazeDensity:.85,cloudShadow:726828,cloudLight:4679547,ambient:9752543,groundLight:2433087,ambientIntensity:1.15,sunLight:10272220,sunIntensity:.9,sunDirection:[.3,.5,-1],sunColor:8893914,sunSize:.013,sunGlow:1.8,buildings:85,nearby:15,stars:650,mountains:"none",abstract:"none"},rift:{name:"SCARLET ALPINE VOID",skyTop:3548463,skyBottom:10120295,horizon:16228992,horizonGlow:.55,haze:6508885,hazeDensity:.32,cloudShadow:6313050,cloudLight:14930108,ambient:14934495,groundLight:3356483,ambientIntensity:2.5,sunLight:16765620,sunIntensity:2.3,sunDirection:[-.2,.14,-1],sunColor:16763573,sunSize:0,sunGlow:0,buildings:0,nearby:0,stars:0,mountains:"snow",abstract:"none"},vortex:{name:"DEEP ORBIT",skyTop:67093,skyBottom:464689,horizon:4288229,horizonGlow:.5,haze:726840,hazeDensity:.6,cloudShadow:1055292,cloudLight:6519760,ambient:8035809,groundLight:2037575,ambientIntensity:1.35,sunLight:9879551,sunIntensity:1.15,sunDirection:[.5,.4,-1],sunColor:9223679,sunSize:0,sunGlow:0,buildings:10,nearby:2,stars:1e3,mountains:"none",abstract:"rings"},oblivion:{name:"GOLDEN HORIZON",skyTop:5846098,skyBottom:11889741,horizon:16756290,horizonGlow:3.8,haze:10117439,hazeDensity:.55,cloudShadow:6899290,cloudLight:16763779,ambient:16767676,groundLight:5387328,ambientIntensity:2.1,sunLight:16758861,sunIntensity:3,sunDirection:[-.24,.04,-1],sunColor:16766073,sunSize:.062,sunGlow:16,buildings:48,nearby:8,stars:0,mountains:"none",abstract:"none"}},oi=s=>new wt(s),bo=s=>{let t=s;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296)};function p0(s){const t=new qe;t.name="environment-sky",t.userData.theme=s.name;const e=new ge({side:Ve,depthWrite:!1,fog:!1,uniforms:{skyTop:{value:oi(s.skyTop)},skyBottom:{value:oi(s.skyBottom)},horizon:{value:oi(s.horizon).multiplyScalar(s.horizonGlow)},sunDirection:{value:new C(...s.sunDirection).normalize()},sunColor:{value:oi(s.sunColor).multiplyScalar(s.sunGlow)},sunSize:{value:s.sunSize}},vertexShader:"varying vec3 vRay;void main(){vec4 world=modelMatrix*vec4(position,1.0);vRay=world.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:`uniform vec3 skyTop,skyBottom,horizon,sunDirection,sunColor;uniform float sunSize;varying vec3 vRay;
      void main(){vec3 ray=normalize(vRay);float y=ray.y;
        vec3 sky=mix(skyBottom,skyTop,smoothstep(-.17,.65,y));
        float glow=exp(-pow((y+.025)/.09,2.0));sky+=horizon*glow;
        float angle=acos(clamp(dot(ray,sunDirection),-1.0,1.0));
        if(sunSize>0.0)sky+=sunColor*(1.0-smoothstep(sunSize*.92,sunSize,angle)+.075*exp(-angle*angle/(sunSize*sunSize*8.0)));
        gl_FragColor=vec4(sky,1.0);}`}),n=new gt(new vo(12e3,24,16),e);if(n.name="course-sky",n.renderOrder=-2,t.add(n),s.stars){const i=bo(908),r=[],a=[];for(let c=0;c<s.stars;c++){const h=.08+i()*.9,u=i()*Math.PI*2,d=Math.sqrt(1-h*h),f=11e3;r.push(Math.cos(u)*d*f,h*f,Math.sin(u)*d*f);const g=oi(c%4?11913455:16768198).multiplyScalar(1.3+i()*2);a.push(g.r,g.g,g.b)}const o=new he;o.setAttribute("position",new Ht(r,3)),o.setAttribute("color",new Ht(a,3));const l=new Ga(o,new lo({size:2,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1,fog:!1}));l.name="night-stars",l.renderOrder=-1,t.add(l)}return t}function m0(s,t){const e=bo(730),n=[],i=[],r=t.mountains==="snow",a=new Xn().setFromPoints(s.points),o=a.getCenter(new C),l=(u,d,f,g=!1)=>{n.push(...u.toArray(),...d.toArray(),...f.toArray());const M=(u.y+d.y+f.y)/3,p=e(),m=g||r&&M>950,T=oi(m?[15919579,13029078,15000543][Math.floor(p*3)]:r?[2567222,4670538,6905958][Math.floor(p*3)]:[1649216,3162977,5465732][Math.floor(p*3)]);for(let w=0;w<3;w++)i.push(T.r,T.g,T.b)};for(let u=0;u<26;u++){const d=u/26*Math.PI*2,f=(r?1050:680)+e()*(r?900:580),g=r?1400:620;let M=o.x+Math.cos(d)*(a.max.x-a.min.x)/2+Math.cos(d)*(f+g),p=o.z+Math.sin(d)*(a.max.z-a.min.z)/2+Math.sin(d)*(f+g);for(;s.points.some(_=>Math.hypot(_.x-M,_.z-p)<f+(r?950:230));)M+=Math.cos(d)*180,p+=Math.sin(d)*180;const m=(r?650:800)+e()*(r?1400:1100),T=m*.1-500,w=[],x=[];for(let _=0;_<7;_++){const A=_/7*Math.PI*2,E=f*(.78+e()*.4);w.push(new C(M+Math.cos(A)*E,-3100,p+Math.sin(A)*E)),x.push(new C(M+Math.cos(A)*E*.65,T+(e()-.5)*500,p+Math.sin(A)*E*.65))}const v=new C(M+(e()-.5)*f*.7,m,p+(e()-.5)*f*.7);for(let _=0;_<7;_++){const A=(_+1)%7;if(l(w[_],x[_],w[A]),l(w[A],x[_],x[A]),r){const E=x[_].clone().lerp(v,.52),S=x[A].clone().lerp(v,.57);l(x[_],E,x[A]),l(x[A],E,S),l(E,v,S,!0)}else l(x[_],v,x[A])}}const c=new he;c.setAttribute("position",new Ht(n,3)),c.setAttribute("color",new Ht(i,3)),c.computeVertexNormals();const h=new gt(c,new Ae({vertexColors:!0,flatShading:!0,side:te}));return h.name="faceted-mountains",h}function g0(s,t){const e=new qe;e.name="abstract-landmarks";const n=bo(412),i=t.abstract==="rings",r=i?26:58,a=i?new zn(1,.055,3,12):new Wi(1,0),o=new di(a,new Ae({color:i?6054817:9271734,flatShading:!0,emissive:i?1515096:2431559,emissiveIntensity:.9}),r);o.name=i?"orbital-sculptures":"floating-polyhedra";const l=new di(a,ae(i?4620266:12356863,i?3:1.4,{wireframe:!0}),r),c=new Ut;for(let h=0;h<r;h++){const u=h/r*s.length,d=s.base(u),f=h%2?1:-1,g=(i?90:50)+n()*(i?160:145),M=new C(d.right.x,0,d.right.z);M.lengthSq()<.01&&M.set(1,0,0),M.normalize();const p=d.position.clone().addScaledVector(M,f*(g+240+n()*550));for(p.y+=140+n()*650;s.points.some(T=>T.distanceTo(p)<g+160);)p.addScaledVector(M,f*150),p.y+=60;const m=new Ee().setFromEuler(new fn(n()*3,n()*3,n()*3));c.compose(p,m,new C(g,g*(i?1:1.2+n()),g)),o.setMatrixAt(h,c),l.setMatrixAt(h,c),o.setColorAt(h,oi(h%3===0?5537452:12824283))}return e.add(o,l),e}const gn=4,$a=6,Gl="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Wl=`uniform sampler2D tDepth;uniform mat4 projectionInverse,cameraWorld;uniform vec3 eye;varying vec2 vUv;
  vec3 worldPoint(vec2 uv,float z){vec4 p=projectionInverse*vec4(uv*2.0-1.0,z*2.0-1.0,1.0);p/=p.w;return(cameraWorld*p).xyz;}`;class v0 extends Dn{uniforms;cloudTarget=new He(1,1,{type:je,depthBuffer:!1});cloudMaterial;compositeMaterial;cloudQuad;compositeQuad;constructor(){super(),this.uniforms={tDiffuse:{value:null},tDepth:{value:null},tCloud:{value:this.cloudTarget.texture},atmosphereEnabled:{value:!1},projectionInverse:{value:new Ut},cameraWorld:{value:new Ut},eye:{value:new C},cloudCount:{value:0},cloudCenters:{value:Array.from({length:gn},()=>new fe)},cloudSizes:{value:Array.from({length:gn},()=>new C(1,1,1))},time:{value:0},hazeBase:{value:-140},hazeDensity:{value:1},hazeColor:{value:new wt(.16,.105,.24)},horizonColor:{value:new wt(.9,.4,.28)},cloudShadow:{value:new wt(.26,.25,.4)},cloudLight:{value:new wt(.92,.67,.6)},resolution:{value:new ot(1,1)},cloudResolution:{value:new ot(1,1)}},this.cloudMaterial=new ge({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:Gl,fragmentShader:`${Wl}
        uniform int cloudCount;uniform vec4 cloudCenters[${gn}];uniform vec3 cloudSizes[${gn}];
        uniform vec3 cloudShadow,cloudLight;uniform vec2 resolution;uniform float time;
        float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
        float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
          return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
        void main(){
          vec2 pixel=.5/resolution;
          // Clip to the nearest of the covered scene pixels, preventing fog on foreground edges.
          float depth=min(min(texture2D(tDepth,vUv+pixel).x,texture2D(tDepth,vUv-pixel).x),min(texture2D(tDepth,vUv+vec2(pixel.x,-pixel.y)).x,texture2D(tDepth,vUv+vec2(-pixel.x,pixel.y)).x));
          vec3 endpoint=worldPoint(vUv,depth),ray=normalize(endpoint-eye);
          float distance=min(length(endpoint-eye),4200.0);vec3 cloudColor=vec3(0.0);float transmission=1.0;
          for(int i=0;i<${gn};i++){
            if(i>=cloudCount||transmission<.025)break;
            vec3 center=cloudCenters[i].xyz;
            vec3 o=(eye-center)/cloudSizes[i],d=ray/cloudSizes[i];
            float a=dot(d,d),b=dot(o,d),c=dot(o,o)-1.0,disc=b*b-a*c;if(disc<=0.0)continue;
            float entry=max(0.0,(-b-sqrt(disc))/a),exit=min(distance,(-b+sqrt(disc))/a);if(exit<=entry)continue;
            float stepSize=(exit-entry)/float(${$a});
            for(int j=0;j<${$a};j++){
              vec3 p=eye+ray*(entry+(float(j)+.5)*stepSize),local=(p-center)/cloudSizes[i];
              float edge=1.0-smoothstep(.16,1.0,dot(local,local));
              float shape=noise3(p*.017+vec3(time*.006,0.0,time*.004));
              float density=max(0.0,shape-.3)*edge*cloudCenters[i].w;
              float opacity=1.0-exp(-density*stepSize*.028);
              vec3 light=mix(cloudShadow,cloudLight,clamp(local.y*.45+.65,0.0,1.0));
              cloudColor+=transmission*opacity*light;transmission*=1.0-opacity;
            }
          }
          gl_FragColor=vec4(cloudColor,transmission);
        }`}),this.compositeMaterial=new ge({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:Gl,fragmentShader:`${Wl}
        uniform sampler2D tDiffuse,tCloud;uniform bool atmosphereEnabled;
        uniform vec2 cloudResolution;uniform vec3 hazeColor,horizonColor;uniform float hazeBase,hazeDensity;
        void main(){vec4 scene=texture2D(tDiffuse,vUv);if(!atmosphereEnabled){gl_FragColor=scene;return;}
          float depth=texture2D(tDepth,vUv).x;vec3 endpoint=worldPoint(vUv,depth),ray=normalize(endpoint-eye);
          float sceneDistance=length(endpoint-eye),distance=min(sceneDistance,4200.0);
          vec2 cell=vUv*cloudResolution-.5,base=floor(cell),fraction=fract(cell);
          vec4 cloud=vec4(0.0);float weights=0.0;
          // Bilateral upsampling: neighboring cloud texels cannot bleed through nearby geometry.
          for(int i=0;i<4;i++){
            vec2 offset=vec2(float(i-i/2*2),float(i/2)),uv=(base+offset+.5)/cloudResolution;
            float neighborDepth=texture2D(tDepth,uv).x;
            float neighborDistance=length(worldPoint(uv,neighborDepth)-eye);
            vec2 blend=mix(1.0-fraction,fraction,offset);
            float weight=blend.x*blend.y*exp(-abs(neighborDistance-sceneDistance)/(2.0+sceneDistance*.008));
            cloud+=texture2D(tCloud,uv)*weight;weights+=weight;
          }
          cloud=weights>.0001?cloud/weights:vec4(0.0,0.0,0.0,1.0);
          vec3 color=scene.rgb*cloud.a+cloud.rgb,end=eye+ray*distance;
          float low=exp(clamp((hazeBase-eye.y)/350.0,-8.0,7.0)),high=exp(clamp((hazeBase-end.y)/350.0,-8.0,7.0));
          float dy=(end.y-eye.y)/350.0,mean=abs(dy)>.01?(low-high)/dy:low;
          float haze=1.0-exp(-distance*(.00013+.00040*max(0.0,mean))*hazeDensity);
          float horizon=exp(-pow((ray.y+.025)/.09,2.0));vec3 fog=mix(hazeColor,horizonColor,horizon);
          gl_FragColor=vec4(mix(color,fog,clamp(haze,0.0,.98)),scene.a);
        }`}),this.cloudQuad=new Wn(this.cloudMaterial),this.compositeQuad=new Wn(this.compositeMaterial),this.cloudTarget.texture.name="HalfResolutionClouds"}setSize(t,e){const n=Math.max(1,Math.ceil(t*.5)),i=Math.max(1,Math.ceil(e*.5));this.cloudTarget.setSize(n,i),this.uniforms.resolution.value.set(t,e),this.uniforms.cloudResolution.value.set(n,i)}render(t,e,n){const i=this.uniforms;i.tDiffuse.value=n.texture,n.depthTexture&&(i.tDepth.value=n.depthTexture),i.atmosphereEnabled.value&&(t.setRenderTarget(this.cloudTarget),this.cloudQuad.render(t)),t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.compositeQuad.render(t)}dispose(){this.cloudTarget.dispose(),this.cloudMaterial.dispose(),this.compositeMaterial.dispose(),this.cloudQuad.dispose(),this.compositeQuad.dispose()}}class _0{pass=new v0;clouds=[];time=0;towerBase=-7e3;quality={scale:.5,steps:$a,maxClouds:gn,noiseOctaves:1};nearest=Array.from({length:gn},()=>({cloud:null,distance:1/0}));setTrack(t){this.time=0;const e=t.exterior?[.07,.17,.29,.4,.47,.55,.65,.74,.83,.94]:[.08,.19,.34,.5,.59,.68,.8,.92];this.clouds=e.map((r,a)=>{const o=t.surface(t.length*r,0);return{center:o.position.clone().addScaledVector(o.normal,22).addScaledVector(o.right,a%2?20:-15),size:new C(t.exterior?175:130,t.exterior?85:55,t.exterior?165:140),density:.9+a%3*.12}}),t.drop&&this.clouds.push({center:t.drop.origin.clone().addScaledVector(t.drop.direction,340).add(new C(14,-75,0)),size:new C(160,85,190),density:1.05});const n=Ya[t.stage],i=this.pass.uniforms;i.atmosphereEnabled.value=!0,i.hazeBase.value=t.exterior?-170:t.drop?-220:-140,i.hazeColor.value.setHex(n.haze),i.horizonColor.value.setHex(n.horizon),i.hazeDensity.value=n.hazeDensity,i.cloudShadow.value.setHex(n.cloudShadow),i.cloudLight.value.setHex(n.cloudLight)}update(t,e,n){this.time+=Math.max(0,n);const i=this.pass.uniforms;i.tDepth.value=e,i.projectionInverse.value.copy(t.projectionMatrixInverse),i.cameraWorld.value.copy(t.matrixWorld),i.eye.value.setFromMatrixPosition(t.matrixWorld),i.time.value=this.time;let r=0;for(const a of this.nearest)a.cloud=null,a.distance=1/0;for(const a of this.clouds){const o=a.center.distanceToSquared(i.eye.value);if(o>Math.pow(4200+Math.max(a.size.x,a.size.y,a.size.z),2))continue;let l=0;for(;l<r&&this.nearest[l].distance<o;)l++;if(l<gn){for(let c=Math.min(r,gn-1);c>l;c--)this.nearest[c].cloud=this.nearest[c-1].cloud,this.nearest[c].distance=this.nearest[c-1].distance;this.nearest[l].cloud=a,this.nearest[l].distance=o,r=Math.min(r+1,gn)}}i.cloudCount.value=r,this.nearest.forEach(({cloud:a},o)=>{if(!a)return;const l=i.cloudCenters.value[o],c=a.center.x*.017+a.center.z*.023;l.set(a.center.x+Math.sin(this.time*.035+c)*24,a.center.y,a.center.z+Math.cos(this.time*.025+c)*18,a.density),i.cloudSizes.value[o].copy(a.size)})}}const Ka="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Xl=`uniform sampler2D tDepth;uniform float focus,focusBand,aperture,focalPixels,maxRadius;varying vec2 vUv;
  float blurRadius(float depth){return min(maxRadius,max(0.0,abs(1.0-focus/max(depth,.01))-focusBand)*aperture*focalPixels/(2.0*max(focus,1.0)));}`;class x0 extends Dn{target=new He(1,1,{type:je,format:vr,minFilter:Te,magFilter:Te,depthBuffer:!1});material=new ge({depthTest:!1,depthWrite:!1,uniforms:{tDepth:{value:null},nearClip:{value:.3},farClip:{value:15e3}},vertexShader:Ka,fragmentShader:`#include <packing>
      uniform sampler2D tDepth;uniform float nearClip,farClip;varying vec2 vUv;
      void main(){float depth=-perspectiveDepthToViewZ(texture2D(tDepth,vUv).x,nearClip,farClip);gl_FragColor=vec4(depth,0.0,0.0,1.0);}`});quad=new Wn(this.material);constructor(){super(),this.needsSwap=!1,this.target.texture.name="FocusSceneDepth"}setSize(t,e){this.target.setSize(t,e)}render(t,e,n){this.material.uniforms.tDepth.value=n.depthTexture,t.setRenderTarget(this.target),this.quad.render(t)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}}class M0 extends Dn{depthPass=new x0;blurTarget=new He(1,1,{type:je,depthBuffer:!1});uniforms={tDiffuse:{value:null},tDepth:{value:this.depthPass.target.texture},tBlur:{value:this.blurTarget.texture},resolution:{value:new ot(1,1)},blurResolution:{value:new ot(1,1)},focus:{value:100},focusBand:{value:.18},aperture:{value:2.25},focalPixels:{value:900},maxRadius:{value:20}};blurMaterial;compositeMaterial;blurQuad;compositeQuad;shot="";initialized=!1;point=new C;constructor(){super(),this.blurTarget.texture.name="HalfResolutionDepthOfField",this.blurMaterial=new ge({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:Ka,fragmentShader:`${Xl}
        uniform sampler2D tDiffuse;uniform vec2 resolution;
        void main(){float depth=texture2D(tDepth,vUv).r,radius=blurRadius(depth);vec4 center=texture2D(tDiffuse,vUv);
          if(radius<.6){gl_FragColor=center;return;}
          vec3 color=center.rgb;float weights=1.0;
          for(int i=0;i<24;i++){
            float angle=float(i)*2.39996323,r=sqrt((float(i)+.5)/24.0);
            vec2 uv=clamp(vUv+vec2(cos(angle),sin(angle))*r*radius/resolution,vec2(0.0),vec2(1.0));
            float neighbor=texture2D(tDepth,uv).r;
            // Reject unrelated depths so the skyline cannot bleed over a sharp racer.
            float edge=abs(neighbor-depth)/max(2.0,min(neighbor,depth)*.06);
            float weight=exp(-edge*edge);
            color+=texture2D(tDiffuse,uv).rgb*weight;weights+=weight;
          }
          gl_FragColor=vec4(color/weights,center.a);
        }`}),this.compositeMaterial=new ge({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:Ka,fragmentShader:`${Xl}
        uniform sampler2D tDiffuse,tBlur;uniform vec2 blurResolution;
        void main(){vec4 sharp=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).r,radius=blurRadius(depth);
          if(radius<.6){gl_FragColor=sharp;return;}
          vec2 cell=vUv*blurResolution-.5,base=floor(cell),fraction=fract(cell);vec3 blurred=vec3(0.0);float weights=0.0;
          for(int i=0;i<4;i++){
            vec2 offset=vec2(float(i-i/2*2),float(i/2)),uv=clamp((base+offset+.5)/blurResolution,vec2(0.0),vec2(1.0));
            float neighbor=texture2D(tDepth,uv).r,edge=abs(neighbor-depth)/max(2.0,min(neighbor,depth)*.06);
            vec2 blend=mix(1.0-fraction,fraction,offset);float weight=blend.x*blend.y*exp(-edge*edge);
            blurred+=texture2D(tBlur,uv).rgb*weight;weights+=weight;
          }
          blurred=weights>.0001?blurred/weights:sharp.rgb;
          gl_FragColor=vec4(mix(sharp.rgb,blurred,smoothstep(.6,2.0,radius)),sharp.a);
        }`}),this.blurQuad=new Wn(this.blurMaterial),this.compositeQuad=new Wn(this.compositeMaterial)}resetFocus(){this.initialized=!1}focusOn(t,e,n,i,r){t.updateMatrixWorld();const a=ze.clamp(-this.point.copy(e).applyMatrix4(t.matrixWorldInverse).z,t.near+1,t.far),o=!this.initialized||i!==this.shot;this.uniforms.focus.value=o?a:ze.lerp(this.uniforms.focus.value,a,1-Math.exp(-Math.max(0,n)*8)),this.initialized=!0,this.shot=i,this.uniforms.focusBand.value=r?.18:.3,this.uniforms.aperture.value=r?2.25:.4,this.uniforms.maxRadius.value=r?20:8,this.uniforms.focalPixels.value=this.uniforms.resolution.value.y/(2*Math.tan(ze.degToRad(t.fov)/2)),this.depthPass.material.uniforms.nearClip.value=t.near,this.depthPass.material.uniforms.farClip.value=t.far,this.depthPass.enabled=this.enabled}setSize(t,e){const n=Math.max(1,Math.ceil(t*.5)),i=Math.max(1,Math.ceil(e*.5));this.blurTarget.setSize(n,i),this.uniforms.resolution.value.set(t,e),this.uniforms.blurResolution.value.set(n,i)}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.blurTarget),this.blurQuad.render(t),t.setRenderTarget(this.renderToScreen?null:e),this.compositeQuad.render(t)}dispose(){this.depthPass.dispose(),this.blurTarget.dispose(),this.blurMaterial.dispose(),this.compositeMaterial.dispose(),this.blurQuad.dispose(),this.compositeQuad.dispose()}}class S0{composer;grade;bloom;atmosphere=new _0;dof=new M0;camera;constructor(t,e,n){this.camera=n,t.toneMapping=ja;const i=new He(1,1,{type:je});i.depthTexture=new ho(1,1,Gn),this.composer=new r0(t,i),this.composer.addPass(new a0(e,n)),this.composer.addPass(this.dof.depthPass),this.composer.addPass(this.atmosphere.pass),this.composer.addPass(this.dof),this.grade=new Gc({name:"SceneBrightness",uniforms:{tDiffuse:{value:null},brightness:{value:.5}},vertexShader:`varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform sampler2D tDiffuse;
        uniform float brightness;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          vec4 displayColor = sRGBTransferOETF(vec4(max(color.rgb, vec3(0.0)), color.a));
          displayColor.rgb *= brightness;
          gl_FragColor = sRGBTransferEOTF(displayColor);
        }`}),this.composer.addPass(this.grade),this.bloom=new Xi(new ot(1,1),.38,.3,.9),this.composer.addPass(this.bloom),this.composer.addPass(new l0)}resize(t,e,n){const i=n<=1?4:0;this.composer.renderTarget1.samples=this.composer.renderTarget2.samples=i,this.composer.setPixelRatio(n),this.composer.setSize(t,e)}render(t){this.camera.updateMatrixWorld(),this.atmosphere.update(this.camera,this.composer.readBuffer.depthTexture,t),this.composer.render(t)}}const Wc=[[14,0],[0,14],[68,82],[18,82],[36,100],[100,100],[100,36],[82,18],[82,68]],y0=`${Wc.map(([s,t],e)=>`${e?"L":"M"}${s} ${t}`).join(" ")} Z`;function b0(s,t=0){const e=new Cc;Wc.forEach(([a,o],l)=>{const c=(a-50)*.18*(s==="left"?-1:1),h=(50-o)*.18;l?e.lineTo(c,h):e.moveTo(c,h)}),e.closePath();const n=new go(e),i=new ge({transparent:!0,depthWrite:!1,side:te,blending:ui,uniforms:{time:{value:0},phase:{value:t},intensity:{value:1},tint:{value:new wt(s==="left"?6675711:16760178)}},vertexShader:`varying vec3 vLocal;varying vec3 vNormal;varying vec3 vView;
      void main(){vLocal=position;vec4 view=modelViewMatrix*vec4(position,1.0);vNormal=normalize(normalMatrix*normal);vView=normalize(-view.xyz);gl_Position=projectionMatrix*view;}`,fragmentShader:`uniform float time,phase,intensity;uniform vec3 tint;varying vec3 vLocal,vNormal,vView;
      void main(){float clock=time+phase;
        float scan=.55+.45*smoothstep(-.35,.45,sin(vLocal.y*18.0-clock*5.0));
        float band=exp(-pow(mod(vLocal.y-clock*2.0+9.0,18.0)-9.0,2.0)*2.0);
        float flicker=.94+.04*sin(clock*31.0)+.02*sin(clock*79.0);
        float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),2.0);
        float alpha=(.38+.28*scan+.13*band)*flicker*intensity;
        gl_FragColor=vec4(tint*(3.0+scan*2.0+band*3.0+rim*1.8),alpha);}`}),r=new gt(n,i);return r.name="direction-arrow",r.position.y=12,r}class E0{race;viewpoints=[];target=new C;focusTarget=new C;activeCamera=-1;cuts=0;targetFov=50;framing=0;hold=0;lens=Number.NaN;zoomVelocity=0;constructor(t){this.race=new Hc(t),this.setTrack(t)}setTrack(t){this.race.track=t,this.viewpoints.length=0;for(let e=0;e<4;e++){const n=t.length*(.08+e*.25);let i=n,r=1/0;for(let l=-10;l<=10;l++){const c=Xt(n+l*t.length*.006,t.length);if(!t.hasRoad(c))continue;const h=Math.abs(l)+(t.inFullPipe(c)?30:0);h<r&&(r=h,i=c)}const a=t.surface(i,0);let o;if(t.inFullPipe(i)){const l=t.surface(i,a.width*.22);o=l.position.addScaledVector(l.normal,6).addScaledVector(a.forward,-25)}else{const l=new C(a.right.x,0,a.right.z).normalize();l.lengthSq()<.01&&l.set(1,0,0),o=a.position.clone().addScaledVector(l,(e%2?-1:1)*(55+e*8)),o.y+=38+e*9,o.addScaledVector(a.forward,-30)}this.viewpoints.push({s:i,position:o})}this.reset()}reset(){const t=this.race.track;this.race.reset(),this.race.phase="racing";let e=Xt(this.viewpoints[0].s-100,t.length);for(;!t.hasRoad(e);)e=Xt(e-20,t.length);for(const n of this.race.ships){n.s=Xt(e-Math.floor(n.id/2)*16,t.length),n.x=(n.id%2?1:-1)*Math.min(4.2,t.profile(n.s).width*.15),n.speed=110,n.total=n.s,n.checkpoint=t.checkpoints.findIndex(r=>r>n.s),n.checkpoint<0&&(n.checkpoint=0);const i=t.surface(n.s,n.x);n.position.copy(i.position).addScaledVector(i.normal,Le),n.previous.copy(n.position),n.rotation.setFromRotationMatrix(new Ut().makeBasis(i.right,i.normal,i.forward.clone().negate()))}this.activeCamera=-1,this.cuts=0,this.hold=0,this.lens=Number.NaN,this.zoomVelocity=0}step(t){this.race.phase==="finished"&&this.reset(),this.race.step(t,this.race.ai(this.race.player,t))}updateCamera(t,e){const n=this.race.ranking().find(_=>_.recovery<=0&&!_.falling&&_.finish===null)??this.race.player,i=this.race.ships.filter(_=>_.id===n.id||_.recovery<=0&&!_.falling&&_.finish===null&&_.position.distanceToSquared(n.position)<6400),r=new C;for(const _ of i)r.add(_.position);r.divideScalar(i.length),this.focusTarget.copy(r),r.addScaledVector(n.position.clone().sub(n.previous),11);let a=0,o=1/0;this.viewpoints.forEach((_,A)=>{const E=_.position.distanceToSquared(r);E<o&&(a=A,o=E)}),this.hold+=e;const l=this.viewpoints[this.activeCamera],c=l?.position.distanceToSquared(r)??1/0,h=!l||a!==this.activeCamera&&this.hold>=2&&o<c*.8;h?(l&&this.cuts++,this.activeCamera=a,this.hold=0,this.target.copy(r)):this.target.lerp(r,1-Math.exp(-e*5)),t.position.copy(this.viewpoints[this.activeCamera].position),t.up.set(0,1,0),t.lookAt(this.target);const u=document.querySelector(".course-picker").getBoundingClientRect(),d=innerWidth,f=innerHeight,g=d>=900||f<=480&&d>540,M=g?u.right+24:0,p=Math.max(120,d-M-24),m=g?f-48:Math.max(120,u.top-24);t.updateMatrixWorld();let T=0,w=0;for(const _ of i){const A=_.position.clone().applyMatrix4(t.matrixWorldInverse),E=Math.max(8,-A.z-4.5);T=Math.max(T,(Math.abs(A.x)+4.5)/E*f/p),w=Math.max(w,(Math.abs(A.y)+4.5)/E*f/m)}const x=ze.clamp(Math.max(T/.62,w/.52),Math.tan(ze.degToRad(2)),Math.tan(ze.degToRad(52.5)));this.targetFov=ze.radToDeg(2*Math.atan(x));const v=Math.log(x);if(h||!Number.isFinite(this.lens))this.lens=v,this.zoomVelocity=0;else{const _=v-this.lens,A=Math.abs(_)>.055?_:0,E=A>0;this.zoomVelocity+=(A*(E?12:7)-this.zoomVelocity*5)*e,this.zoomVelocity=ze.clamp(this.zoomVelocity,-.85,1.4),this.lens=ze.clamp(this.lens+this.zoomVelocity*e,Math.log(Math.tan(ze.degToRad(2))),Math.log(Math.tan(ze.degToRad(52.5))))}t.fov=ze.radToDeg(2*Math.atan(Math.exp(this.lens))),this.framing=Math.max(T,w)/Math.exp(this.lens),t.far=15e3,t.setViewOffset(d,f,-M/2,g?0:(f-m)/2,d,f)}}function T0(s){const t=Math.max(1800,Math.ceil(s.length/10)),e=Array.from({length:t+1},(r,a)=>{const o=a/t*s.length,l=s.profile(o),c=l.width/2+l.depth+(s.exterior?.radius??0)+s.waves.reduce((h,u)=>h+u.height,0)+40;return{position:s.base(o).position,radius:c}}),n=(r,a,o)=>{const l=Math.hypot(a,o)/2+3;let c=1/0;for(let h=0;h<t;h++){const u=e[h],d=e[h+1],f=d.position.x-u.position.x,g=d.position.z-u.position.z,M=f*f+g*g,p=M?ze.clamp(((r.x-u.position.x)*f+(r.z-u.position.z)*g)/M,0,1):0;c=Math.min(c,Math.hypot(r.x-u.position.x-p*f,r.z-u.position.z-p*g)-Math.max(u.radius,d.radius)-l)}return c};return{margin:n,place:(r,a,o,l)=>{const c=a.clone().setY(0).normalize();c.lengthSq()<.01&&c.set(1,0,0);for(let d=0;d<128;d++){if(n(r,o,l)>=0)return;r.addScaledVector(c,80)}const h=Math.hypot(o,l)/2+3,u=Math.max(...e.map(d=>d.position.dot(c)+d.radius))+h+10;r.addScaledVector(c,Math.max(0,u-r.dot(c)))}}}function w0(){const s=new Ae({color:10267591});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
      attribute vec3 towerSize; attribute vec4 towerStyle;
      varying vec2 vOfficeCoord; varying vec4 vOfficeStyle; varying float vRoof;`).replace("#include <uv_vertex>",`#include <uv_vertex>
      float facadeWidth=towerStyle.w>.5?PI*(towerSize.x+towerSize.z)*.5:(abs(normal.z)>.5?towerSize.x:towerSize.z);
      float faceOffset=towerStyle.w>.5?0.0:dot(normal.xz,vec2(137.0,271.0));
      vOfficeCoord=uv*vec2(facadeWidth,towerSize.y)+vec2(faceOffset,0.0);
      vOfficeStyle=towerStyle;vRoof=abs(normal.y);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 vOfficeCoord; varying vec4 vOfficeStyle; varying float vRoof;
      float officeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+vOfficeStyle.x*17.17)*43758.5453);}`).replace("#include <color_fragment>",`#include <color_fragment>
      vec2 office=vOfficeCoord/vec2(4.5+mod(vOfficeStyle.x,4.0),vOfficeStyle.z);
      vec2 cell=floor(office),local=fract(office),aa=min(fwidth(office)*.65,vec2(.4));
      float windowMask=smoothstep(.12-aa.x,.12+aa.x,local.x)*(1.0-smoothstep(.88-aa.x,.88+aa.x,local.x));
      windowMask*=smoothstep(.20-aa.y,.20+aa.y,local.y)*(1.0-smoothstep(.78-aa.y,.78+aa.y,local.y));
      windowMask*=1.0-step(.9,vRoof);
      vec2 officeBlock=floor(cell/vec2(3.0+mod(vOfficeStyle.x,3.0),4.0+mod(vOfficeStyle.x,5.0)));
      float block=officeHash(officeBlock),floorState=officeHash(vec2(-57.0,cell.y)),room=officeHash(cell+vec2(19.0,73.0));
      float occupiedBlock=step(1.0-vOfficeStyle.y,block)*step(.12,room);
      float band=step(.91,floorState)*step(.08,room);
      float scattered=step(1.0-vOfficeStyle.y*.10,room);
      float occupied=max(max(occupiedBlock,band),scattered)*step(.10,floorState);
      // Retain half the occupied windows without changing the underlying patches.
      occupied*=step(.5,officeHash(cell+vec2(157.0,419.0)));
      float tint=officeHash(officeBlock+vec2(61.0,29.0));
      vec3 officeLight=tint<.44?vec3(1.0,.78,.47):tint<.91?vec3(.70,.86,1.0):vec3(.60,.38,.85);
      diffuseColor.rgb*=mix(vec3(.065,.09,.14),vec3(.14,.19,.27),windowMask);
      totalEmissiveRadiance+=officeLight*windowMask*occupied*(2.2+block*3.0);`)},s.customProgramCacheKey=()=>"occupied-office-facades-v2",s}function A0(s,t,e){const n=t?new fi(.5,.5,1,20,1):new _e(1,1,1);n.setAttribute("towerSize",new pr(new Float32Array(s.flatMap(a=>a.size.toArray())),3)),n.setAttribute("towerStyle",new pr(new Float32Array(s.flatMap(a=>[a.seed,a.occupancy,a.floorHeight,t?1:0])),4));const i=new di(n,e,s.length);i.name=t?"rounded-office-towers":"rectangular-office-towers";const r=new Ut;return s.forEach((a,o)=>{r.compose(a.position,a.rotation,a.size),i.setMatrixAt(o,r),i.setColorAt(o,new wt().setHSL(.57+a.seed%11*.009,.12+a.seed%5*.025,.65+a.seed%7*.025))}),i}function R0(s,t){const e=new qe;if(e.name="skyline-buildings",e.userData.buildings=t.buildings,e.userData.nearby=0,!t.buildings&&!t.nearby)return e;const n=T0(s);let i=123;const r=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296),a=-7e3,o=s.exterior?-500:s.stage==="foundry"?0:-1e3,l=[],c=[],h=[],u=[{width:48,spread:48,depth:.72,height:1.35},{width:140,spread:140,depth:.75,height:.63},{width:70,spread:75,depth:1,height:1.08},{width:100,spread:85,depth:1.18,height:.9}];for(let p=0;p<t.buildings;p++){const m=u[p%u.length],T=p%5===2,w=p%5===3,x=m.width+r()*m.spread,v=x*(m.depth+r()*.25),_=(160+r()*(s.exterior?1850:1400))*m.height,A=_-a,E=p/t.buildings*Math.PI*2+r()*.09,S=(s.stage==="foundry"?950:1600)+r()*1200,b=new Ee().setFromAxisAngle(new C(0,1,0),r()*.8),D=new C(Math.cos(E)*S,a+A/2,Math.sin(E)*S+o);if(s.stage==="oblivion"){const X=Math.atan2(t.sunDirection[0],t.sunDirection[2]),z=Math.atan2(D.x,D.z),Q=Math.atan2(Math.sin(z-X),Math.cos(z-X));if(Math.abs(Q)<.25){const $=Math.hypot(D.x,D.z),at=X+(Q<0?-.34:.34);D.x=Math.sin(at)*$,D.z=Math.cos(at)*$}}n.place(D,new C(Math.cos(E),0,Math.sin(E)),x,v);const O=.1+r()*.68,L=9+r()*9,N=17+p*13,U=w?80+r()*200:0,H={position:D.clone().add(new C(0,-U/2,0)),rotation:b,size:new C(x,A-U,v),seed:N,occupancy:O,floorHeight:L,rounded:T,nearby:!1};if(l.push(H),w){const X={...H,position:new C(D.x,_-U/2,D.z),size:new C(x*.66,U,v*.66),seed:N+5};l.push(X)}p%3===0&&c.push({tower:H,color:[6667007,16735129,10714879,16759155][p%4],band:p%2===0}),p%2===0&&h.push(new C(D.x,_+3,D.z))}for(let p=0;p<t.nearby;p++){const m=p/t.nearby*s.length;if(!s.hasRoad(m))continue;const T=s.base(m),w=p%2?1:-1,x=28+r()*42,v=30+r()*45,_=new C(T.right.x,0,T.right.z).normalize();_.lengthSq()<.01&&_.set(1,0,0);const A=T.position.clone().addScaledVector(_,w*(s.exterior?180:110));n.place(A,_.clone().multiplyScalar(w),x,v);const E=T.position.y+35+r()*160,S=E-a;A.y=a+S/2;const b={position:A,rotation:new Ee,size:new C(x,S,v),seed:1501+p*19,occupancy:.16+r()*.6,floorHeight:8+r()*8,rounded:p%4===1,nearby:!0};l.push(b),e.userData.nearby++,p%4===0&&c.push({tower:b,color:s.theme?.accent??6675711,band:!0})}const d=w0();for(const p of[!1,!0]){const m=l.filter(T=>T.rounded===p);m.length&&e.add(A0(m,p,d))}const f=new di(new _e(1,1,1),ae(16777215,1),c.length);f.name="skyline-accent-bands";const g=new Ut;c.forEach(({tower:p,color:m,band:T},w)=>{const[x,v,_]=p.size.toArray(),A=new C(T?0:x/2+.5,T?v/2-3:v*.35,T?_/2+.6:0).applyQuaternion(p.rotation);g.compose(p.position.clone().add(A),p.rotation,T?new C(x*.9,1.6,1):new C(1.1,v*.26,1.1)),f.setMatrixAt(w,g),f.setColorAt(w,new wt(m).multiplyScalar(5))}),e.add(f);const M=new di(new Wi(1),ae(16735862,6),h.length);return M.name="skyline-roof-beacons",h.forEach((p,m)=>{g.compose(p,new Ee,new C(2,2,2)),M.setMatrixAt(m,g)}),e.add(M),e.userData.profiles=u.length,e.userData.rounded=l.filter(p=>p.rounded).length,e.userData.stepped=Math.floor(t.buildings/5),e.userData.occupancyRange=[Math.min(...l.map(p=>p.occupancy)),Math.max(...l.map(p=>p.occupancy))],e.userData.floorHeightRange=[Math.min(...l.map(p=>p.floorHeight)),Math.max(...l.map(p=>p.floorHeight))],e.userData.minimumCourseClearance=Math.min(...l.map(p=>n.margin(p.position,p.size.x,p.size.z))),e}class C0{scene=new xu;camera=new nn(67,1,.3,15e3);renderer;post;track;course=new qe;ships;shadows;wakes;exhaustTimers=Array(6).fill(0);pickups=new Map;pads=[];boostRings=new Map;markerVisuals=new Map;rocketVisuals=new Map;mineVisuals=new Map;particles=[];particleMesh;particlePositions=new Float32Array(450*3);particleColors=new Float32Array(450*3);cameraTarget=new C;cameraUp=new C(0,1,0);spectator;ambient=new rd;sun=new ld;sky=null;renderedStage=null;time=0;cameraRoll=.5;shake=!0;shakeAmount=0;constructor(t,e){this.track=e,this.spectator=new E0(e),this.renderer=new $g({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ue,this.renderer.info.autoReset=!1,this.scene.background=new wt(1514034),this.scene.add(this.ambient,this.sun),this.scene.add(this.course),this.buildTrack(),this.buildScenery(),this.ships=Array.from({length:6},(a,o)=>{const c=d0([14090053,16737129,10193151,4644341,16754253,15758803][o],o);return this.scene.add(c),c});const n=new uo(3.5,12),i=new Je({color:1581110,transparent:!0,opacity:.24,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});this.shadows=this.ships.map(()=>{const a=new gt(n,i);return this.scene.add(a),a}),this.wakes=this.ships.map(()=>new t0(this.scene));const r=new he;r.setAttribute("position",new Ge(this.particlePositions,3)),r.setAttribute("color",new Ge(this.particleColors,3)),this.particleMesh=new Ga(r,new lo({size:.48,vertexColors:!0,transparent:!0,opacity:.9,blending:ui,sizeAttenuation:!0,depthWrite:!1})),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh),this.post=new S0(this.renderer,this.scene,this.camera),this.post.atmosphere.setTrack(e),this.resize()}resize(){const t=Math.max(1,innerWidth),e=Math.max(1,innerHeight),n=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.post.resize(t,e,n),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setTrack(t){this.renderedStage=null,this.post.dof.resetFocus(),this.clearEffects();const e=new Set,n=new Set,i=new Set;this.course.traverse(r=>{if(r instanceof gt||r instanceof Ga){r instanceof di&&r.dispose(),e.add(r.geometry);for(const a of Array.isArray(r.material)?r.material:[r.material]){n.add(a);for(const o of Object.values(a))o instanceof Re&&i.add(o)}}}),e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose()),this.course.clear(),this.pickups.clear(),this.pads.length=0,this.boostRings.clear(),this.markerVisuals.clear(),this.track=t,this.spectator.setTrack(t),this.buildTrack(),this.buildScenery(),this.post.atmosphere.setTrack(t),this.cameraUp.set(0,1,0),this.cameraTarget.copy(t.surface(9,-4.2).position)}courseStations(){const t=this.track.exterior?1800:this.track.pipe?1600:1200,e=Array.from({length:t+1},(n,i)=>i/t*this.track.length);this.track.drop&&e.push(this.track.drop.start,this.track.drop.end);for(const n of this.track.gaps)e.push(n.start,n.end,n.landingEnd);for(const n of this.track.ramps)e.push(n.s-n.length,n.s-.001,n.s);for(const n of this.track.flats)for(const i of[-n.length/2-n.transition,-n.length/2,n.length/2,n.length/2+n.transition])e.push((n.center+i+this.track.length)%this.track.length);return e.sort((n,i)=>n-i)}buildLanding(){const t=this.track.drop,e=ae(16756071,10);for(const a of[-1,1]){const o=this.track.surface(t.end+2,a*19),c=this.track.surface(t.landingEnd-5,a*19).position.clone().sub(o.position),h=new gt(new _e(.5,.5,c.length()),e);h.position.copy(o.position).addScaledVector(c,.5).addScaledVector(o.normal,.45),h.quaternion.setFromUnitVectors(new C(0,0,1),c.normalize()),this.course.add(h);for(const u of[t.end+3,t.end+90,t.landingEnd-5]){const d=this.track.surface(u,a*22),f=new gt(new _e(.8,28,.8),e);f.position.copy(d.position).addScaledVector(d.normal,14),this.course.add(f)}}for(const a of[t.end+5,t.end+90,t.end+190,t.end+290,t.end+390]){const o=this.track.surface(a,0),l=new gt(new Be(35,.6),e);l.position.copy(o.position).addScaledVector(o.normal,.17),l.quaternion.setFromRotationMatrix(new Ut().makeBasis(o.right,o.forward,o.normal)),this.course.add(l)}const n=this.track.surface(t.end+55,0),i=new gt(new Be(34,8),new Je({map:si("LAND HERE // >>>","#ffad67"),side:te}));i.position.copy(n.position).addScaledVector(n.normal,.18),i.quaternion.setFromRotationMatrix(new Ut().makeBasis(n.right,n.forward,n.normal)),this.course.add(i);const r=new Ae({color:3421516,flatShading:!0});for(let a=0;a<18;a++){const o=220+a%5*55,l=a%2?1:-1,c=new gt(new fi(18,65,o,5),r);c.position.copy(t.origin).addScaledVector(t.direction,120+a*45).addScaledVector(t.right,l*(140+a%3*35)),c.position.y=-450+o/2,this.course.add(c)}}strip(t,e,n,i=0,r=12,a=()=>!0){const o=[],l=[],c=[],h=this.courseStations(),u=h.length-1;for(let g=0;g<=u;g++){const M=h[g];for(const p of[-1,1]){const m=this.track.surface(M,t(M)+p*e/2),T=m.position.addScaledVector(m.normal,i);o.push(T.x,T.y,T.z),l.push((p+1)/2,M/r)}if(g<u&&this.track.hasRoad((M+h[g+1])/2)&&a((M+h[g+1])/2)){const p=g*2;c.push(p,p+1,p+2,p+1,p+3,p+2)}}const d=new he;d.setAttribute("position",new Ht(o,3)),d.setAttribute("uv",new Ht(l,2)),d.setIndex(c),d.computeVertexNormals();const f=new gt(d,n);return this.course.add(f),f}buildTrack(){const t=[],e=[],n=[],i=this.courseStations(),r=i.length-1,a=this.track.pipe||this.track.exterior?Array.from({length:33},(v,_)=>_/16-1):[-1,-.97,-.88,-.73,-.5,-.25,0,.25,.5,.73,.88,.97,1];for(let v=0;v<=r;v++){const _=i[v],A=this.track.profile(_).width;for(const E of a){const S=this.track.position(_,E*A/2);t.push(S.x,S.y,S.z),e.push((E+1)/2,_/24)}if(v<r&&this.track.hasRoad((_+i[v+1])/2))for(let E=0;E<a.length-1;E++){const S=v*a.length+E,b=S+a.length;n.push(S,b,S+1,S+1,b,b+1)}}const o=new he;o.setAttribute("position",new Ht(t,3)),o.setAttribute("uv",new Ht(e,2)),o.setIndex(n),o.computeVertexNormals(),this.course.add(new gt(o,new Ae({map:c0(),color:this.track.theme?.road??16777215,side:te})));const l=new Ae({map:Hl(),side:te}),c=ae(Vl.cyan,10,{side:te}),h=ae(4900844,9,{side:te});if(!this.track.exterior)for(const v of[-1,1])this.strip(_=>v*(this.track.profile(_).width/2-.8),1.4,l,.08,5),this.strip(_=>v*(this.track.profile(_).width/2-.18),.4,c,.45,5),this.strip(_=>v*this.track.profile(_).width*.24,.22,h,.12,5);if(this.track.pipe)for(const v of[-.75,-.5,0,.5,.75])this.strip(_=>v*this.track.profile(_).width/2,.28,ae(Math.abs(v)===.75?12098303:6743529,9,{side:te}),.14,12,_=>!this.track.exterior||this.track.interiorBend(_)>.01);if(this.track.exterior){for(let v=-4;v<4;v++)this.strip(_=>v/4*this.track.profile(_).width/2,.32,ae(v%2?this.track.theme?.secondary??16754284:this.track.theme?.accent??6743529,8,{side:te}),.15);for(const v of[-1,1])this.strip(_=>v*(this.track.profile(_).width/2-.6),.65,ae(16760178,10,{side:te}),.55,12,_=>this.track.tubeBend(_)<.999)}const u=new Ae({color:3423060,side:te});if(!this.track.exterior)for(const v of[-1,1]){const _=[],A=[];for(let S=0;S<=r;S++){const b=i[S],D=this.track.surface(b,v*this.track.profile(b).width/2);if(_.push(D.position.x,D.position.y,D.position.z,D.position.x-D.normal.x*3,D.position.y-D.normal.y*3,D.position.z-D.normal.z*3),S<r&&this.track.hasRoad((b+i[S+1])/2)){const O=S*2;A.push(O,O+2,O+1,O+1,O+2,O+3)}}const E=new he;E.setAttribute("position",new Ht(_,3)),E.setIndex(A),E.computeVertexNormals(),this.course.add(new gt(E,u))}const d=ae(16777215,8,{map:h0(),side:te});for(const v of this.track.features){const _=this.track.surface(v.s,v.x);if(v.kind==="pad"){const A=new gt(new Be(6.3,10),d);A.position.copy(_.position).addScaledVector(_.normal,.14),A.quaternion.setFromRotationMatrix(new Ut().makeBasis(_.right,_.forward,_.normal)),A.rotateZ(-(v.heading??0)),this.course.add(A),this.pads.push(A)}else{const A=f0();A.position.copy(_.position).addScaledVector(_.normal,3.2),A.quaternion.setFromRotationMatrix(new Ut().makeBasis(_.right,_.normal,_.forward.clone().negate())),A.userData.baseRotation=A.quaternion.clone(),this.course.add(A),this.pickups.set(v.id,A)}}this.track.features.some(v=>v.kind==="pad")||(d.map?.dispose(),d.dispose());const f=document.createElement("canvas");f.width=f.height=32;const g=f.getContext("2d");for(let v=0;v<4;v++)for(let _=0;_<8;_++)g.fillStyle=(_+v)%2?"#172033":"#f1f0db",g.fillRect(_*4,v*8,4,8);const M=new co(f);M.magFilter=Te,M.colorSpace=Ue;const p=new gt(new Be(this.track.openEdges?this.track.profile(1).width:28,4),new Je({map:M,side:te})),m=this.track.surface(1,0);if(p.position.copy(m.position).addScaledVector(m.normal,.13),p.quaternion.setFromRotationMatrix(new Ut().makeBasis(m.right,m.forward,m.normal)),this.course.add(p),this.gantry(25,"VECTOR // 99","#d6ff45"),this.track.exterior){const v=this.track.exterior;this.gantry(v.spiralStart+65,this.track.challenge?"REACTOR // 360":"DOUBLE HELIX","#ffad67"),this.gantry(v.loopStart+80,this.track.challenge?"VORTEX // LOOP":"CROWN // LOOP","#c5acff"),this.gantry(v.descentStart+70,this.track.challenge?"FINAL SECTOR":"CORKSCREW","#66e5e9"),this.buildExteriorRamps(),this.buildBoostRings();for(const _ of this.track.pipes)this.gantry(_.start-110,"INNER REACTOR","#c5acff");if(!this.track.challenge)for(const _ of this.track.flats)this.gantry(_.center-_.length/2-_.transition-50,"UNWRAP // CENTER","#ffbd72")}else this.track.drop&&this.track.pipe?(this.gantry(this.track.drop.start-95,"ABYSS // 5 SEC","#ffad67"),this.gantry(this.track.pipe.start-85,"REACTOR // 360","#c5acff"),this.gantry(this.track.waves[0].s-135,"BOOST SWELL","#d6ff45"),this.buildLanding()):this.track.openEdges||(this.gantry(this.track.length*.274,"THE HALFPIPE","#c5acff"),this.gantry(this.track.launch-38,"LAUNCH ZONE","#ff9a6c"),this.gantry(this.track.length*.74,"FOUNDRY BOWL","#66e5e9"));if(this.buildChallenges(),this.track.banks.length)for(const v of this.track.banks){this.gantry(v.start+45,"DRIFT // RELEASE",this.track.stage==="slalom"?"#65edff":"#ff6688");for(let _=v.start+100;_<v.end-90;_+=130){if(Math.abs(this.track.bankAngle(_))<.25)continue;const A=-Math.sign(this.track.bankAngle(_)),E=this.track.surface(_,A*(this.track.profile(_).width/2-2)),S=new gt(new Be(11,3.5),ae(16777215,3,{map:si(A>0?"<<< DRIFT":"DRIFT >>>",this.track.stage==="slalom"?"#ff79ce":"#ffd071"),side:te}));S.position.copy(E.position).addScaledVector(E.normal,5),S.quaternion.setFromRotationMatrix(new Ut().makeBasis(E.right,E.normal,E.forward.clone().negate())),this.course.add(S)}}if(this.track.exterior||this.track.openEdges)return;const T=new di(new _e(4,1,5),new Ae({color:4673643}),55),w=new Ut;let x=0;for(let v=0;v<55;v++){const _=v/55*this.track.length;if(!this.track.hasRoad(_))continue;const A=this.track.base(_),E=A.position.y+(this.track.drop?450:62);w.compose(new C(A.position.x,A.position.y-E/2-3,A.position.z),new Ee,new C(1,E,1)),T.setMatrixAt(x++,w)}T.count=x,this.course.add(T)}buildChallenges(){const t=(i,r)=>{const a=this.track.surface(i,r),o=new qe;return o.position.copy(a.position),o.quaternion.setFromRotationMatrix(new Ut().makeBasis(a.right,a.normal,a.forward.clone().negate())),o};for(const i of this.track.markers){const r=t(i.s,i.x);r.add(b0(i.side,i.id*.73)),this.course.add(r),this.markerVisuals.set(i.id,r)}const e=new Ae({color:10038090,map:Hl(),flatShading:!0}),n=ae(16729708,9);for(const i of this.track.barriers){const r=t(i.s,i.x),a=new gt(new _e(i.width,i.height,i.length),e);a.position.y=i.height/2,r.add(a);for(const c of[-1,1]){const h=new gt(new _e(.3,i.height+.3,i.length+.3),n);h.position.set(c*i.width/2,i.height/2,0),r.add(h)}const o=new gt(new _e(i.width,.3,i.length),n);o.position.y=i.height,r.add(o);const l=new gt(new Be(i.width-1,2.8),new Je({map:si("X / X","#ff466c"),side:te}));l.position.set(0,i.height/2,i.length/2+.05),r.add(l),this.course.add(r)}for(const[i,r]of this.track.gaps.entries()){this.gantry(r.start-140,`JUMP ${i+1} // AIM`,"#ffbd72");for(const l of[r.end+2,r.end+60,r.landingEnd-20]){const c=t(l,0),h=new gt(new _e(r.width,.25,.5),ae(16760178,10));h.position.y=.2,c.add(h);for(const u of[-1,1]){const d=new gt(new _e(.45,15,.45),ae(16760178,8));d.position.set(u*r.width/2,7.5,0),c.add(d)}this.course.add(c)}const a=this.track.surface(r.end+25,0),o=new gt(new Be(r.width-2,8),new Je({map:si("LAND HERE >>>","#ffbd72"),side:te}));o.position.copy(a.position).addScaledVector(a.normal,.16),o.quaternion.setFromRotationMatrix(new Ut().makeBasis(a.right,a.forward,a.normal)),this.course.add(o)}}buildBoostRings(){const t=ae(14090053,12),e=ae(15400904,9);for(const n of this.track.rings){const i=this.track.surface(n.s,n.x),r=new qe;r.position.copy(i.position).addScaledVector(i.normal,n.height),r.quaternion.setFromRotationMatrix(new Ut().makeBasis(i.right,i.normal,i.forward.clone().negate())),r.add(new gt(new zn(n.radius,.38,4,20),t)),r.add(new gt(new zn(n.radius-.7,.14,3,20),e));for(let a=0;a<4;a++){const o=a*Math.PI/2,l=new gt(new _e(1.6,.35,.5),t);l.position.set(Math.cos(o)*n.radius,Math.sin(o)*n.radius,0),l.rotation.z=o,r.add(l)}this.course.add(r),this.boostRings.set(n.id,r)}}buildExteriorRamps(){const t=ae(16753756,9,{side:te});for(const n of this.track.ramps){for(const a of[-1,1]){const o=[],l=[];for(let h=0;h<=20;h++){const u=n.s-n.length+h/20*(n.length-.01);for(const d of[-.18,.18]){const f=this.track.surface(u,n.x+a*n.width*.3+d),g=f.position.addScaledVector(f.normal,.18);o.push(g.x,g.y,g.z)}if(h<20){const d=h*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new he;c.setAttribute("position",new Ht(o,3)),c.setIndex(l),c.computeVertexNormals(),this.course.add(new gt(c,t))}const i=this.track.surface(n.s-12,n.x),r=new gt(new Be(9,8),new Je({map:si("JUMP >>>","#ffad67"),side:te}));r.position.copy(i.position).addScaledVector(i.normal,.22),r.quaternion.setFromRotationMatrix(new Ut().makeBasis(i.right,i.forward,i.normal)),this.course.add(r)}const e=new Ae({color:3752538,flatShading:!0});for(let n=0;n<this.track.length;n+=150){if(this.track.tubeBend(n)<.999)continue;const i=this.track.base(n),r=new gt(new zn(this.track.exterior.radius-2,1.4,4,24),e);r.position.copy(i.position),r.quaternion.setFromUnitVectors(new C(0,0,1),i.forward),this.course.add(r)}}gantry(t,e,n){const i=this.track.exterior?{...this.track.surface(t,0),width:26}:this.track.base(t),r=new qe;r.position.copy(i.position),r.quaternion.setFromRotationMatrix(new Ut().makeBasis(i.right,i.normal,i.forward.clone().negate()));const a=new Ae({color:2239298});for(const c of[-1,1]){const h=new gt(new _e(1.5,15,2),a);h.position.set(c*(i.width/2+1),7.5,0),r.add(h)}const o=new gt(new _e(i.width+5,3,2),a);o.position.y=15,r.add(o);const l=new gt(new Be(24,6),new Je({map:si(e,n),side:te}));l.position.set(0,15,1.1),r.add(l);for(const c of[-1,1]){const h=new gt(new _e(.5,11,.4),ae(n,7));h.position.set(c*(i.width/2+.1),7.5,1.2),r.add(h)}this.course.add(r)}buildScenery(){const t=Ya[this.track.stage];this.ambient.color.setHex(t.ambient),this.ambient.groundColor.setHex(t.groundLight),this.ambient.intensity=t.ambientIntensity,this.sun.color.setHex(t.sunLight),this.sun.intensity=t.sunIntensity,this.sun.position.set(...t.sunDirection).multiplyScalar(1e3),this.scene.background=new wt(t.skyTop);const e=new gt(new Be(22e3,22e3),new Ae({color:t.haze}));if(e.rotation.x=-Math.PI/2,e.position.y=-7e3,this.course.add(e),this.course.add(R0(this.track,t)),t.mountains!=="none"&&this.course.add(m0(this.track,t)),t.abstract!=="none"){const n=g0(this.track,t);this.course.add(n)}this.sky=p0(t),this.course.add(this.sky)}burst(t){if(t.kind==="hit"||t.kind==="wall"||t.kind==="land"||t.kind==="boost"||t.kind==="pickup"){const e=t.kind==="hit"?28:t.kind==="boost"?12:9;for(let n=0;n<e;n++)this.particles.length>=450&&this.particles.shift(),this.particles.push({position:t.position.clone(),velocity:new C((Math.random()-.5)*15,Math.random()*12,(Math.random()-.5)*15),life:.4+Math.random()*.5,max:1,color:new wt(t.kind==="hit"?16756071:t.kind==="pickup"?12098303:t.kind==="boost"?Vl.lime:15655099)})}t.player&&(t.kind==="hit"||t.kind==="wall"||t.kind==="land")&&(this.shakeAmount=t.kind==="hit"?.5:.2)}update(t,e,n){this.time+=e;const i=t.phase==="menu";i&&(t=this.spectator.race);const r=t.phase==="paused"?0:e;for(const a of t.ships){const o=this.ships[a.id];o.visible=t.phase!=="menu"&&(a.recovery<=0||Math.sin(this.time*22)>0),o.scale.setScalar(1),o.position.copy(a.previous).lerp(a.position,n),o.quaternion.copy(a.rotation);const l=this.track.surface(a.s,a.x),c=this.shadows[a.id];c.visible=o.visible&&!a.falling&&this.track.hasRoad(a.s)&&t.phase!=="menu",c.position.copy(l.position).addScaledVector(l.normal,.08),c.quaternion.setFromRotationMatrix(new Ut().makeBasis(l.right,l.forward,l.normal));const h=1+a.airHeight*.025;c.scale.set(h,1.5*h,1);for(const u of[-1,1]){const d=o.getObjectByName(`flame${u}`);d.visible=a.speed>2||t.phase==="menu",d.scale.y=(a.boost>0?2.6:.55+a.speed/ls*.8)+Math.sin(this.time*43+a.id)*.12,d.material.color.setHex(a.boost>0?14090053:7860223).multiplyScalar(8);const f=o.getObjectByName(`engineCore${u}`);f.visible=d.visible,f.scale.y=a.boost>0?1.7:1}if(this.wakes[a.id].update(a,o,this.camera,r,t.phase==="racing"||t.phase==="paused"),t.phase==="racing"&&a.recovery<=0&&a.speed>8)for(this.exhaustTimers[a.id]+=r;this.exhaustTimers[a.id]>.035;){this.exhaustTimers[a.id]-=.035;for(const u of[-1,1])if(this.particles.length<450){const d=new C(u*2.15,-.1,4).applyQuaternion(o.quaternion).add(o.position);if(this.particles.push({position:d,velocity:l.forward.clone().multiplyScalar(-8).addScaledVector(l.normal,(Math.random()-.5)*2),life:a.boost>0?.5:.25,max:a.boost>0?.5:.25,color:new wt(a.boost>0?14090053:6545407)}),a.drifting&&this.particles.length<450){const f=So(a.driftCharge),g=[6675711,6675711,16760178,13213951][f],M=o.position.clone().addScaledVector(l.right,-a.driftDirection*2.8).addScaledVector(l.normal,-1);this.particles.push({position:M,velocity:l.forward.clone().multiplyScalar(-18).addScaledVector(l.right,-a.driftDirection*9).addScaledVector(l.normal,2),life:.35,max:.35,color:new wt(g)})}}}}for(const[a,o]of this.pickups)o.visible=!t.pickupTimers.has(a),o.quaternion.copy(o.userData.baseRotation).multiply(new Ee().setFromAxisAngle(new C(0,1,0),this.time*1.2)),o.children[0].rotation.z=this.time*.8,o.children[2].scale.setScalar(1+Math.sin(this.time*2.5+a)*.1);for(const[a,o]of this.boostRings)o.userData.pulse=(o.userData.pulse??0)+r,o.children[0].scale.setScalar(1+Math.sin(o.userData.pulse*4+a)*.025),o.visible=!t.ringTimers.has(`${t.player.id}:${a}`);for(const[a,o]of this.markerVisuals){const l=o.children[0].material;l.uniforms.time.value+=r,l.uniforms.intensity.value=t.markerTimers.has(`${t.player.id}:${a}`)?.16:1}for(const[a,o]of this.rocketVisuals)t.rockets.some(l=>l.id===a)||(this.scene.remove(o),this.rocketVisuals.delete(a),o.geometry.dispose(),o.material.dispose());for(const a of t.rockets){let o=this.rocketVisuals.get(a.id);o||(o=new gt(new Ss(.4,2.5,5),ae(16756855,10)),this.rocketVisuals.set(a.id,o),this.scene.add(o)),o.position.copy(a.position),o.quaternion.setFromUnitVectors(new C(0,1,0),a.velocity.clone().normalize()),r>0&&this.particles.length<450&&this.particles.push({position:a.position.clone(),velocity:new C(0,.5,0),life:.35,max:.35,color:new wt(16751720)})}for(const[a,o]of this.mineVisuals)t.mines.some(l=>l.id===a)||(this.scene.remove(o),this.mineVisuals.delete(a),o.traverse(l=>{l instanceof gt&&(l.geometry.dispose(),l.material.dispose())}));for(const a of t.mines){let o=this.mineVisuals.get(a.id);if(!o){o=new qe;const l=new gt(new fi(1.5,1.8,.6,6),new Ae({color:16740733,emissive:6687256}));o.add(l);const c=new gt(new zn(2,.16,4,12),ae(16734841,12));c.rotation.x=Math.PI/2,o.add(c),this.mineVisuals.set(a.id,o),this.scene.add(o)}o.position.copy(a.position),o.quaternion.setFromUnitVectors(new C(0,1,0),a.normal),o.children[1].scale.setScalar(1+Math.sin(this.time*9)*.1)}for(const a of this.particles)a.life-=r,a.position.addScaledVector(a.velocity,r),a.velocity.y-=r*8;this.particles.splice(0,this.particles.length,...this.particles.filter(a=>a.life>0)),this.particles.forEach((a,o)=>{const l=Math.min(1,a.life/a.max)*6;this.particlePositions.set([a.position.x,a.position.y,a.position.z],o*3),this.particleColors.set([a.color.r*l,a.color.g*l,a.color.b*l],o*3)}),this.particleMesh.geometry.setDrawRange(0,this.particles.length),this.particleMesh.geometry.attributes.position.needsUpdate=!0,this.particleMesh.geometry.attributes.color.needsUpdate=!0,this.updateCamera(t,e,i),this.sky?.position.copy(this.camera.position),this.renderer.info.reset(),this.post.render(r),this.renderedStage=this.track.stage}updateCamera(t,e,n=!1){if(n){this.spectator.updateCamera(this.camera,e),this.post.dof.focusOn(this.camera,this.spectator.focusTarget,e,`spectator-${this.spectator.activeCamera}`,!0);return}this.camera.clearViewOffset(),this.camera.far=15e3,this.post.atmosphere.pass.uniforms.hazeDensity.value=Ya[this.track.stage].hazeDensity;const i=t.player,r=this.track.surface(i.s,i.x),a=this.ships[0],o=i.dropFlight?i.flightVelocity.clone().normalize():r.forward,l=i.dropFlight?new C(0,1,0):r.normal,c=a.position.clone().addScaledVector(o,i.dropFlight?-22:-12-i.speed*.0175).addScaledVector(l,i.dropFlight?24:6),h=1-Math.exp(-e*6);this.camera.position.distanceTo(c)>70?this.camera.position.copy(c):this.camera.position.lerp(c,h);const u=a.position.clone().addScaledVector(o,i.dropFlight?30:12+i.speed*.03).addScaledVector(l,i.dropFlight?-12:1.2);this.cameraTarget.lerp(u,1-Math.exp(-e*9));const d=new C(0,1,0).lerp(l,this.track.exterior||this.track.profile(i.s).pipe>.02?1:this.cameraRoll).normalize();this.cameraUp.lerp(d,1-Math.exp(-e*(this.track.exterior?7:5))),this.camera.up.copy(this.cameraUp),this.shake&&this.shakeAmount>0&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmount,this.camera.position.y+=(Math.random()-.5)*this.shakeAmount,this.shakeAmount=Math.max(0,this.shakeAmount-e)),this.camera.lookAt(this.cameraTarget);const f=67+i.speed*.0275+(i.boost>0?5:0);this.camera.fov=ze.lerp(this.camera.fov,f,1-Math.exp(-e*3)),this.camera.updateProjectionMatrix(),this.post.dof.focusOn(this.camera,a.position,t.phase==="paused"?0:e,"chase",!1)}clearEffects(){this.particles.length=0,this.wakes.forEach(t=>t.clear()),this.exhaustTimers.fill(0)}}const ln={arrow:'<svg viewBox="0 0 24 24" fill="none"><path d="m9 5 7 7-7 7M3 12h12" stroke="currentColor" stroke-width="2"/></svg>',sound:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 4V5L8 9H4Zm12-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14" stroke="currentColor" stroke-width="1.5"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none"><path d="m9 3-.6 3-2 .9L3.6 6 2 9l2.3 2v2L2 15l1.6 3 2.8-.9 2 .9L9 21h6l.6-3 2-.9 2.8.9 1.6-3-2.3-2v-2L22 9l-1.6-3-2.8.9-2-.9L15 3H9Z" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/></svg>',boost:'<svg viewBox="0 0 40 40" fill="none"><path d="m23 3-15 21h11l-2 13 15-22H21l2-12Z" fill="currentColor"/></svg>',rocket:'<svg viewBox="0 0 40 40" fill="none"><path d="M29 6c-12 0-19 7-19 19l6 5c12-3 15-12 13-24Z" stroke="currentColor" stroke-width="2"/><circle cx="23" cy="14" r="3" fill="currentColor"/><path d="m10 18-6 6 6 1m10 3-1 8 8-9M9 30l-4 6 7-4" stroke="currentColor" stroke-width="2"/></svg>',mine:'<svg viewBox="0 0 40 40" fill="none"><path d="m20 3 3 9 9-5-4 10 9 3-9 3 4 10-9-5-3 9-3-9-10 5 5-10-9-3 9-3L7 7l10 5 3-9Z" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="5" fill="currentColor"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none"><path d="M5 21V3h14v11H5" stroke="currentColor" stroke-width="1.5"/><path d="M5 3h5v5H5m5 5h5V8h-5m5-5h4v5h-4" fill="currentColor"/></svg>'},nr=s=>{if(!Number.isFinite(s))return"—";const t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s%1*100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`},St=s=>document.getElementById(s);class P0{app;map;previousPhase="";noticeTimer=0;previousItem=void 0;previousCountdown=4;onCountdown=()=>{};onSelectStage=()=>{};constructor(t,e){this.app=t,t.innerHTML=`
      <canvas id="game-canvas" tabindex="0" aria-label="Three-dimensional futuristic racing circuit"></canvas>
      <div class="screen-vignette" aria-hidden="true"></div>
      <main id="menu" class="menu" aria-label="Race setup">
        <section class="course-picker" aria-label="Choose a course">
          <div id="course-grid" class="course-grid" role="group" aria-label="Courses">${Object.entries(os).map(([n,i])=>`<button class="course-option" data-stage="${n}" aria-pressed="false"><canvas id="course-map-${n}" width="320" height="160" aria-hidden="true"></canvas><span>${i.name}</span></button>`).join("")}</div>
          <p id="stage-hint" class="stage-hint">Extreme banks · Half-pipe · Skyline launch</p>
          <div class="menu-actions"><button id="start-button" class="primary-button"><span>START RACE</span>${ln.arrow}</button></div>
          <div id="menu-tools" class="menu-tools"><button id="help-button" class="text-button">HOW TO RACE <span>↗</span></button><div id="utility-actions" class="utility-actions" role="group" aria-label="Game controls"><button id="pause-button" class="icon-button" aria-label="Pause race" title="Pause race" hidden><svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3"/></svg></button><button id="sound-button" class="icon-button" aria-label="Mute sound" title="Toggle sound">${ln.sound}</button><button id="settings-button" class="icon-button" aria-label="Open settings" title="Settings">${ln.gear}</button></div></div>
        </section>
      </main>
      <section id="hud" class="hud" hidden aria-label="Race information">
        <div class="race-top"><div class="lap-panel"><span class="hud-label">LAP</span><b id="lap-value">01<span>/ 03</span></b></div><div class="timer-panel"><span class="hud-label">RACE TIME</span><b id="time-value">00:00.00</b><span id="best-value">BEST —</span></div><div class="position-panel"><span class="hud-label">POSITION</span><b id="position-value">1<span>/ 6</span></b></div></div>
        <div class="leaderboard" id="leaderboard"></div>
        <div id="race-map-panel" class="race-map"><canvas id="race-map" width="300" height="230" aria-label="Live map of all racers"></canvas><span id="section-name">GRID STRAIGHT</span></div>
        <div id="technique-hud" class="technique-hud"><div id="drift-status" hidden></div><div id="marker-status" role="img" hidden></div></div><div id="landing-cue" class="landing-cue" hidden aria-live="polite"></div>
        <div id="notice" class="notice" aria-live="polite"></div>
        <div id="countdown" class="countdown" aria-live="assertive"></div>
        <div id="warning" class="warning" hidden>⚠ INCOMING ROCKET</div>
        <div class="speed-panel"><div class="speed-readout"><b id="speed-value">000</b><span>KM/H</span></div><div class="speed-bars" id="speed-bars"></div><div class="speed-caption"><span id="boost-label">THRUST / NOMINAL</span><span class="speed-class">V-01</span></div></div>
        <div class="energy-panel"><span class="hud-label">CHASSIS ENERGY</span><div class="energy-track"><div id="energy-fill"></div></div><span id="energy-value">100%</span></div>
        <div class="weapon-panel"><div id="weapon-icon" class="weapon-icon">+</div><div class="weapon-info"><span class="hud-label">ITEM SYSTEM</span><b id="weapon-name">EMPTY</b><span id="weapon-hint">FLY THROUGH A PICKUP</span></div><kbd>SPACE</kbd></div>
        <div class="race-controls"><span><kbd>W</kbd> THRUST</span><span><kbd>A</kbd><kbd>D</kbd> STEER</span><span><kbd>Q</kbd><kbd>E</kbd> AIRBRAKE</span><span><kbd>SHIFT</kbd> DRIFT</span><span id="air-pitch-hint" hidden><kbd>I</kbd><kbd>K</kbd> TILT</span><span><kbd>ESC</kbd> PAUSE</span></div>
      </section>
      <div id="pause-overlay" class="overlay" hidden><section class="modal pause-modal" role="dialog" aria-modal="true" aria-labelledby="pause-title"><h2 id="pause-title">RACE PAUSED</h2><button id="resume-button" class="primary-button">RESUME RACE ${ln.arrow}</button><button id="restart-button" class="secondary-button">RESTART RACE</button><button id="quit-button" class="text-button">RETURN TO GRID ↗</button></section></div>
      <div id="results-overlay" class="overlay" hidden><section class="modal results-modal" role="dialog" aria-modal="true" aria-labelledby="results-title"><span class="eyebrow" id="result-stage">FOUNDRY CIRCUIT</span><h2 id="results-title">RACE COMPLETE</h2><div class="result-summary"><div><span class="hud-label">POSITION</span><b id="result-position">01<span>/06</span></b></div><div><span class="hud-label">RACE TIME</span><b id="result-time">00:00.00</b><span id="result-best">BEST LAP —</span></div></div><div id="result-grid" class="result-grid"></div><button id="race-again-button" class="primary-button">RACE AGAIN ${ln.arrow}</button><button id="results-quit-button" class="text-button">RETURN TO GRID ↗</button></section></div>
      <dialog id="help-dialog" class="modal help-modal"><button class="close-button" data-close="help-dialog" aria-label="Close instructions">×</button><h2>CONTROLS</h2><p id="stage-briefing">Race three laps against five CPU pilots. Stay fast through the banks, climb the half-pipe walls, and use the launch ramp to leave the pack behind.</p><div class="control-grid"><span><kbd>W</kbd> / <kbd>↑</kbd></span><b>Accelerate</b><span><kbd>S</kbd> / <kbd>↓</kbd></span><b>Brake</b><span><kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd></span><b>Steer</b><span><kbd>Q</kbd> <kbd>E</kbd></span><b>Airbrake into sharp turns</b><span><kbd>SHIFT</kbd> + STEER</span><b>Drift · Release for a mini-turbo</b><span><kbd>SPACE</kbd></span><b>Use held item</b><span><kbd>I</kbd> <kbd>K</kbd> / <kbd>↑</kbd> <kbd>↓</kbd></span><b>Tilt up / down while airborne</b><span><kbd>ESC</kbd></span><b>Pause race</b></div><div class="item-guide"><div>${ln.boost}<b>BOOST</b><p>Lime pads give free speed. Save your booster for a clear straight.</p></div><div>${ln.rocket}<b>ROCKET</b><p>Fire toward a rival ahead. Limited homing helps land the hit.</p></div><div>${ln.mine}<b>MINE</b><p>Drop a trap behind you. Mines cling to even the steepest banks.</p></div></div><p class="help-note" id="stage-help">Purple diamonds give one item. Impacts drain energy; a wreck returns you to your last checkpoint. Steer to an outer lane to bypass the center launch ramp.</p><button id="help-start-button" class="primary-button">LET'S RACE ${ln.arrow}</button></dialog>
      <dialog id="settings-dialog" class="modal settings-modal"><button class="close-button" data-close="settings-dialog" aria-label="Close settings">×</button><h2>SETTINGS</h2><label class="setting-row"><span>CPU difficulty</span><select id="difficulty"><option value="rookie">ROOKIE</option><option value="standard" selected>STANDARD</option><option value="expert">EXPERT</option></select></label><label class="setting-row"><span>Bloom lighting</span><input id="bloom" type="checkbox" checked></label><label class="setting-row"><span>Depth of field</span><input id="depth-of-field" type="checkbox" checked></label><label class="setting-row"><span>Camera banking</span><select id="camera-roll"><option value="0">STABLE</option><option value="0.5" selected>BALANCED</option><option value="1">FULL BANK</option></select></label><label class="setting-row"><span>Impact shake</span><input id="shake" type="checkbox" checked></label><label class="setting-row"><span>Electronic soundtrack</span><input id="music" type="checkbox" checked></label><p class="help-note">Keyboard and gamepad supported. Gamepad: left stick to steer and tilt in flight, RT to accelerate, LT to brake, bumpers to airbrake, X to drift (release to boost), A to use an item, Start to pause.</p><button id="settings-done-button" class="primary-button">BACK TO FLIGHT ${ln.arrow}</button></dialog>
      <div class="touch-controls" id="touch-controls" hidden><button data-touch="left" aria-label="Steer left">◀</button><button data-touch="right" aria-label="Steer right">▶</button><button data-touch="brake">BRAKE</button><button data-touch="throttle">THRUST</button><button data-touch="drift">DRIFT</button><button data-touch="use">ITEM</button><button data-touch="pitch-up" hidden aria-label="Tilt nose up">UP</button><button data-touch="pitch-down" hidden aria-label="Tilt nose down">DOWN</button></div>
      <div id="error-overlay" class="overlay" hidden><section class="modal"><h2>UNABLE TO START</h2><p id="error-message"></p><button onclick="location.reload()" class="primary-button">RETRY</button></section></div>`,this.map=St("race-map");for(const n of Object.keys(os))this.drawMap(St(`course-map-${n}`),n===e.stage?e:new Mo(n),null);document.querySelectorAll("[data-stage]").forEach(n=>n.addEventListener("click",()=>this.onSelectStage(n.dataset.stage))),St("speed-bars").innerHTML=Array.from({length:24},()=>"<i></i>").join(""),this.setTrack(e),document.querySelectorAll("[data-close]").forEach(n=>n.addEventListener("click",()=>St(n.dataset.close).close())),document.querySelectorAll("dialog").forEach(n=>n.addEventListener("click",i=>{i.target===n&&n.close()}))}setTrack(t){const e=os[t.stage];if(document.querySelectorAll("[data-stage]").forEach(n=>{const i=n.dataset.stage===t.stage;n.classList.toggle("selected",i),n.setAttribute("aria-pressed",String(i))}),St("start-button").setAttribute("aria-label",`Start race on ${e.name}`),St("stage-hint").textContent=t.exterior?"Air rings · Reactor tunnel · Flat bridges":t.drop?"5-second drop · Boosted waves · 360° pipe":"Extreme banks · Half-pipe · Skyline launch",St("stage-briefing").textContent=t.exterior?"Race three laps around the outside of an orbital tube against five CPU pilots. Climb the double helix, roll through the Crown loop and plunge down the corkscrew. Lighter gravity pulls toward the tube, even on its underside. Follow boost chains, jump through floating rings and line up for three unwrapped road sections. Carve around the walls and ceiling inside the Reactor tunnel.":t.drop?"Race three laps across a vertical canyon against five CPU pilots. Take the 300 m drop, aim for the offset landing deck, surf boosted wave crests, then carve a complete loop inside the Reactor pipe.":"Race three laps against five CPU pilots. Stay fast through the banks, climb the half-pipe walls, and use the launch ramp to leave the pack behind.",St("stage-help").textContent=t.exterior?"Hold W for thrust and use A/D to steer all the way around the tube. Follow chains of 3–5 lime boosts and launch from orange ramps to fly through floating boost rings. Lighter inward gravity gives you more airtime. Before amber UNWRAP gates, steer toward the center: the tube opens into a flat road. In the violet Reactor tunnel, hold A or D to carve its walls and ceiling; center your line before its exit. Use I/K or Up/Down in flight: up tilts away from the tube and trades speed for airtime, down dives toward it. The camera follows your roll through the spiral and vertical loop.":t.drop?"Keep W held at takeoff. In the air, use A/D to aim for the amber deck; release steering when the landing cue aligns. I/K or Up/Down tilt your nose: up trades speed for airtime, down dives toward the deck. Hold A or D inside the pipe to climb its walls and ceiling. Follow the lime boosts and violet items, and steer back toward the floor before the flared exit. A missed landing returns you to the approach.":"Purple diamonds give one item. Impacts drain energy; a wreck returns you to your last checkpoint. Steer to an outer lane to bypass the center launch ramp.",t.challenge){St("stage-hint").textContent=t.theme.hint;const n={slalom:"Carve wide cyan-and-pink banks through repeated hairpins. Hold Shift into each bend, then release your charged drift on the exit. A single sky jump, Reactor tunnel and vertical loop break up the drift district.",rift:"Leap across three missing skyway sections in the amber canyon. Each offset landing is narrower than the last. Follow the runway boosts, aim through airborne rings and line up with the amber decks. A missed landing returns you to that jump’s approach.",vortex:"Surf three violet Reactor tunnels, an exterior vertical loop and a descending spiral. Wall and ceiling boost chains reward full-circumference carving. Optional orange ramps launch short hops through floating rings; center before tunnel exits.",oblivion:"The red-and-gold final exam combines banked switchbacks, four offset sky jumps, three Reactor tunnels, exterior loops and ramp hops. Narrowing landing decks and dense barriers test every technique. Carry drift boosts into clear straights and watch your marker power."};St("stage-briefing").textContent=`${e.name}: ${n[t.stage]} Race three laps against five CPU pilots.`,St("stage-help").textContent="Hold Shift while steering to charge cyan, amber or violet drift sparks, then release for a mini-turbo. Dodge the red blocks. Pass on the side indicated by the floating corner arrows: cyan points left, amber points right. A miss cuts top speed to 80%; five consecutive correct markers restore full power. Follow approach boosts, keep your jump aligned with the amber landing deck and use I/K to tilt in flight. Carve around tunnel walls for boosts and powerups, and center before exits."}t.openEdges&&(St("stage-hint").textContent="Flat zigzags · Open edges · Drift to survive",St("stage-briefing").textContent="A pure handling test: large alternating zigzags on a flat, narrow ribbon. Race three laps against five CPU pilots. At racing speed, enter each corner with Shift held, then release on the exit for a mini-turbo.",St("stage-help").textContent="Hold W for thrust. Use Shift with A/D to carve each zigzag, then release Shift as the track straightens. Normal steering has less grip here: mistimed drifts slide off the open edge. Falling cancels your charge and returns you to the last checkpoint. Brake to learn the course at lower speed. There are no pickups or boost pads; your drift releases supply the boosts.")}update(t,e){const n=t.phase,i=t.player;if(n!==this.previousPhase&&(St("menu").hidden=n!=="menu",St("hud").hidden=n==="menu",St("pause-overlay").hidden=n!=="paused",St("results-overlay").hidden=n!=="finished",n==="menu"?St("menu-tools").append(St("utility-actions")):St("race-map-panel").prepend(St("utility-actions")),St("pause-button").hidden=n!=="racing"&&n!=="countdown",this.app.dataset.phase=n,this.previousPhase=n,n==="finished"&&this.results(t),n==="countdown"&&(this.previousCountdown=4,this.previousItem=void 0,this.noticeTimer=0),St("touch-controls").hidden=n!=="racing"||!matchMedia("(pointer: coarse)").matches),n==="menu")return;St("air-pitch-hint").hidden=!i.airborne,document.querySelectorAll('[data-touch^="pitch-"]').forEach(f=>f.hidden=!i.airborne),St("lap-value").innerHTML=`${String(Math.min(i.laps+1,3)).padStart(2,"0")}<span>/ 03</span>`,St("time-value").textContent=nr(t.elapsed),St("best-value").textContent=`BEST ${nr(i.bestLap)}`;const r=t.ranking(),a=r.findIndex(f=>f.id===0)+1;St("position-value").innerHTML=`${a}<span>/ 6</span>`,St("leaderboard").innerHTML=r.map((f,g)=>`<div class="leader-row ${f.id===0?"is-player":""}"><span>${String(g+1).padStart(2,"0")}</span><i style="background:#${f.color.toString(16)}"></i><b>${f.name}</b><span>${f.finish?"FIN":f.id===0?"V-01":`${Math.round(Math.abs(f.total-i.total))} M`}</span></div>`).join(""),St("speed-value").textContent=String(Math.round(i.speed*7)).padStart(3,"0");const o=St("speed-bars").children;for(let f=0;f<o.length;f++)o[f].classList.toggle("active",f<i.speed/yo*24);St("boost-label").textContent=i.recovery>0?"CHASSIS / RECOVERING":i.markerPenalty?"POWER / 80%":i.drifting?"DRIFT / CHARGING":i.airborne?"FLIGHT / AIRBORNE":i.boost>0?"BOOST / ENGAGED":"THRUST / NOMINAL",St("boost-label").classList.toggle("boosting",i.boost>0),this.app.classList.toggle("is-boosting",i.boost>0),St("energy-fill").style.width=`${Math.max(0,i.energy)}%`,St("energy-fill").classList.toggle("low",i.energy<30),St("energy-value").textContent=`${Math.max(0,Math.round(i.energy))}%`;const l=St("drift-status"),c=So(i.driftCharge);l.hidden=!i.drifting,l.dataset.tier=String(c),l.innerHTML=`<span>SHIFT / DRIFT</span><b>${c?["","CYAN","AMBER","VIOLET"][c]+" TURBO READY":"CHARGING"}</b><i style="--charge:${Math.min(1,i.driftCharge/2.2)}"></i><small>RELEASE TO BOOST</small>`;const h=St("marker-status"),u=t.nextMarker(i);h.hidden=!u,h.classList.toggle("penalty",i.markerPenalty),u&&(h.dataset.side=u.side,h.setAttribute("aria-label",`Pass ${u.side}, ${Math.round(t.track.distanceAhead(i.s,u.s))} meters ahead. ${i.markerPenalty?`Power 80 percent, ${i.markerStreak} of 5 clean markers.`:"Full power."}`),h.innerHTML=`<svg class="marker-arrow" viewBox="0 0 100 100" aria-hidden="true"><path d="${y0}"/></svg>`);const d=St("landing-cue");if(d.hidden=!i.dropFlight||i.recovery>0,i.dropFlight&&t.track.drop){const f=t.landingPrediction(i),g=f.range==="inside"&&Math.abs(f.error)<17;d.classList.toggle("aligned",g);const M=f.range==="short"?"MORE THRUST ↑":f.range==="long"?"BRAKE ↓":g?"◆ ALIGNED":f.error<0?"STEER RIGHT ►":"◄ STEER LEFT";d.innerHTML=`<span>LANDING DECK / ${f.remaining.toFixed(1)} SEC</span><b>${M}</b>`}if(St("section-name").textContent=t.track.sectionName(i.s),i.item!==this.previousItem&&(St("weapon-icon").innerHTML=i.item?ln[i.item]:"+",St("weapon-name").textContent=i.item?.toUpperCase()??"EMPTY",St("weapon-hint").textContent=i.item?"READY TO DEPLOY":"FLY THROUGH A PICKUP",this.previousItem=i.item,St("weapon-icon").classList.toggle("has-item",!!i.item)),this.drawMap(this.map,t.track,t),n==="countdown"){const f=Math.max(1,Math.ceil(t.countdown));St("countdown").textContent=String(f),St("countdown").hidden=!1,f!==this.previousCountdown&&(this.onCountdown(f),this.previousCountdown=f)}else St("countdown").hidden=!0;this.noticeTimer=Math.max(0,this.noticeTimer-e),St("notice").classList.toggle("visible",this.noticeTimer>0),St("warning").hidden=!t.rockets.some(f=>f.target===0&&f.position.distanceTo(i.position)<100)}event(t){t.player&&t.text&&(St("notice").textContent=t.text,this.noticeTimer=2.2)}drawMap(t,e,n){const i=t.getContext("2d"),r=t.width,a=t.height;i.clearRect(0,0,r,a);const o=e.points,l=Math.min(...o.map(M=>M.x)),c=Math.max(...o.map(M=>M.x)),h=Math.min(...o.map(M=>M.z)),u=Math.max(...o.map(M=>M.z)),d=Math.min((r-50)/(c-l),(a-35)/(u-h)),f=M=>({x:(M.x-(l+c)/2)*d+r/2,y:(M.z-(h+u)/2)*d+a/2});if(i.strokeStyle=n?"#f0f0e755":"#bfc5d744",i.lineWidth=n?5:10,i.lineJoin="round",i.beginPath(),o.forEach((M,p)=>{const m=f(M);p?i.lineTo(m.x,m.y):i.moveTo(m.x,m.y)}),i.closePath(),i.stroke(),i.strokeStyle=n?"#dce1e5":"#d6ff45",i.lineWidth=n?1.8:2,i.stroke(),!n){i.strokeStyle="#b7a0ff",i.lineWidth=4,i.beginPath();const M=e.pipe?Math.floor(e.pipe.start/e.length*(o.length-1)):Math.floor(o.length*.28),p=e.pipe?e.pipe.end/e.length*(o.length-1):o.length*.445;for(let m=M;m<p;m++){const T=f(o[m]);m===M?i.moveTo(T.x,T.y):i.lineTo(T.x,T.y)}i.stroke()}const g=f(e.points[0]);if(i.fillStyle="#d6ff45",i.fillRect(g.x-4,g.y-4,8,8),n)for(const M of[...n.ships].reverse()){const p=f(e.base(M.s).position);i.beginPath(),i.arc(p.x,p.y,M.id===0?5:3,0,Math.PI*2),i.fillStyle=`#${M.color.toString(16).padStart(6,"0")}`,i.fill(),M.id===0&&(i.strokeStyle="#fff",i.lineWidth=1.3,i.stroke())}}results(t){St("result-stage").textContent=os[t.track.stage].name;const e=t.player;St("result-position").innerHTML=`${String(e.finish??6).padStart(2,"0")}<span>/06</span>`,St("result-time").textContent=nr(t.elapsed),St("result-best").textContent=`BEST LAP ${nr(e.bestLap)}`,St("result-grid").innerHTML=t.ranking().map((n,i)=>`<div class="result-row ${n.id===0?"is-player":""}"><span>${String(i+1).padStart(2,"0")}</span><b>${n.name}</b><span>${n.finish?"FINISHED":`LAP ${Math.min(n.laps+1,3)}`}</span></div>`).join("")}error(t){St("error-overlay").hidden=!1,St("error-message").textContent=t}}class D0{context=null;master=null;engine=null;engineGain=null;muted=!1;music=!0;beat=0;musicTime=0;async start(){if(!this.context){this.context=new AudioContext,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.28,this.master.connect(this.context.destination),this.engine=this.context.createOscillator(),this.engine.type="sawtooth",this.engineGain=this.context.createGain(),this.engineGain.gain.value=0;const t=this.context.createBiquadFilter();t.type="lowpass",t.frequency.value=280,this.engine.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.master),this.engine.start()}await this.context.resume()}setMuted(t){this.muted=t,this.context&&this.master&&this.master.gain.setTargetAtTime(t?0:.28,this.context.currentTime,.05)}tone(t,e,n="square",i=.2,r){if(!this.context||!this.master)return;const a=this.context.createOscillator(),o=this.context.createGain(),l=this.context.currentTime;a.type=n,a.frequency.setValueAtTime(t,l),r&&a.frequency.exponentialRampToValueAtTime(r,l+e),o.gain.setValueAtTime(i,l),o.gain.exponentialRampToValueAtTime(.001,l+e),a.connect(o),o.connect(this.master),a.start(),a.stop(l+e),a.onended=()=>{a.disconnect(),o.disconnect()}}noise(t=.3){if(!this.context||!this.master)return;const e=this.context.createBuffer(1,Math.round(this.context.sampleRate*t),this.context.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*(1-a/n.length);const i=this.context.createBufferSource(),r=this.context.createGain();i.buffer=e,r.gain.value=.35,i.connect(r),r.connect(this.master),i.start(),i.onended=()=>{i.disconnect(),r.disconnect()}}event(t){!t.player&&t.kind!=="hit"||(t.kind==="boost"&&this.tone(180,.4,"sawtooth",.17,650),t.kind==="pickup"&&(this.tone(700,.12,"sine",.3),setTimeout(()=>this.tone(1050,.18,"sine",.25),90)),t.kind==="fire"&&this.tone(500,.2,"sawtooth",.25,70),t.kind==="mine"&&this.tone(250,.25,"square",.15,100),(t.kind==="hit"||t.kind==="wall"||t.kind==="land")&&this.noise(t.kind==="hit"?.4:.12),(t.kind==="lap"||t.kind==="finish")&&(this.tone(523,.2,"square",.15),setTimeout(()=>this.tone(784,.3,"square",.15),180)),t.kind==="marker"&&this.tone(t.text?.includes("MISSED")?120:820,.18,"triangle",.16,t.text?.includes("MISSED")?70:1100))}update(t,e,n,i){if(!(!this.context||!this.engine||!this.engineGain)&&(this.engine.frequency.setTargetAtTime(35+t*.825+(e?35:0),this.context.currentTime,.07),this.engineGain.gain.setTargetAtTime(n?.025+t*25e-5:0,this.context.currentTime,.07),!(!n||!this.music)&&(this.musicTime-=i,this.musicTime<=0))){this.musicTime=.24;const r=[55,55,65.4,55,73.4,73.4,65.4,49];this.tone(r[Math.floor(this.beat/2)%8],.2,"triangle",.2),this.beat%4===0&&this.tone(110,.13,"sine",.35,28),this.beat%4===2&&this.noise(.045),this.beat%2===1&&this.tone([440,523,659,784][Math.floor(this.beat/4)%4],.1,"triangle",.06),this.beat++}}}const ea=new URLSearchParams(location.search).get("stage");let Bn=new Mo(ea&&Object.hasOwn(os,ea)?ea:"foundry");const dn=new P0(document.getElementById("app"),Bn),$t=new Hc(Bn),hn=new D0;let Ne;try{Ne=new C0(document.getElementById("game-canvas"),Bn)}catch(s){throw dn.error(`The 3D renderer could not start. Enable hardware acceleration and use a browser with WebGL 2 support. ${s instanceof Error?s.message:""}`),s}const qn=new Set,Xe=new Set;let Ts=!1,hi=!1,ql=!1,Yl=!1,$l=performance.now(),Ni=0,ir=0,mr=!1;dn.onSelectStage=s=>{if($t.phase!=="menu"||s===Bn.stage)return;Bn=new Mo(s),$t.track=Bn,$t.reset(!1),Ne.setTrack(Bn),dn.setTrack(Bn),dn.update($t,0),qn.clear(),Xe.clear(),hi=!1,Ni=0;const t=new URL(location.href);t.searchParams.set("stage",s),t.searchParams.delete("preview"),history.replaceState(null,"",t)};const Xc=async()=>{document.querySelectorAll("dialog").forEach(s=>s.close()),qn.clear(),Xe.clear(),Ts=!1,hi=!1,Ni=0,$t.reset(),Ne.clearEffects(),Ne.cameraTarget.copy($t.player.position),await hn.start(),dn.update($t,0),document.getElementById("game-canvas")?.focus()},L0=()=>{$t.reset(!1),Ne.clearEffects(),qn.clear(),Xe.clear(),hi=!1,hn.update(0,!1,!1,0),dn.update($t,0),document.getElementById("start-button")?.focus()},gi=()=>{$t.pause(),qn.clear(),Xe.clear(),hi=!1,dn.update($t,0),$t.phase==="racing"||$t.phase==="countdown"?document.getElementById("game-canvas")?.focus():$t.phase==="paused"&&document.getElementById("resume-button")?.focus()};for(const s of["start-button","help-start-button","restart-button","race-again-button"])document.getElementById(s).addEventListener("click",Xc);for(const s of["resume-button","pause-button"])document.getElementById(s).addEventListener("click",gi);for(const s of["quit-button","results-quit-button"])document.getElementById(s).addEventListener("click",L0);document.getElementById("help-button").addEventListener("click",()=>{document.getElementById("help-dialog").showModal()});document.getElementById("settings-button").addEventListener("click",()=>{mr=$t.phase==="racing"||$t.phase==="countdown",mr&&gi(),document.getElementById("settings-dialog").showModal()});document.getElementById("settings-done-button").addEventListener("click",()=>{document.getElementById("settings-dialog").close()});document.getElementById("settings-dialog").addEventListener("close",()=>{mr&&$t.phase==="paused"&&gi(),mr=!1});document.getElementById("difficulty").addEventListener("change",s=>{$t.difficulty=s.target.value});document.getElementById("bloom").addEventListener("change",s=>{Ne.post.bloom.enabled=s.target.checked});document.getElementById("depth-of-field").addEventListener("change",s=>{Ne.post.dof.enabled=Ne.post.dof.depthPass.enabled=s.target.checked});document.getElementById("camera-roll").addEventListener("change",s=>{Ne.cameraRoll=Number(s.target.value)});document.getElementById("shake").addEventListener("change",s=>{Ne.shake=s.target.checked});document.getElementById("music").addEventListener("change",s=>{hn.music=s.target.checked});document.getElementById("sound-button").addEventListener("click",async()=>{await hn.start(),hn.setMuted(!hn.muted);const s=document.getElementById("sound-button");s.classList.toggle("is-muted",hn.muted),s.setAttribute("aria-label",hn.muted?"Unmute sound":"Mute sound"),($t.phase==="racing"||$t.phase==="countdown")&&document.getElementById("game-canvas")?.focus()});dn.onCountdown=s=>hn.tone(s===1?650:440,.18,"square",.15);window.addEventListener("keydown",s=>{if(!!document.querySelector("dialog[open]"))return;const e=s.target;if(!(["INPUT","SELECT","TEXTAREA","BUTTON"].includes(e.tagName)&&s.code!=="Escape")){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&s.preventDefault(),s.code==="Escape"){s.preventDefault(),s.repeat||gi();return}if(s.code==="Space"&&!s.repeat&&(Ts=!0),s.code==="Enter"&&$t.phase==="menu"){Xc();return}qn.add(s.code)}});window.addEventListener("keyup",s=>qn.delete(s.code));window.addEventListener("blur",()=>{qn.clear(),Xe.clear(),($t.phase==="racing"||$t.phase==="countdown")&&gi()});document.addEventListener("visibilitychange",()=>{document.hidden&&($t.phase==="racing"||$t.phase==="countdown")&&gi()});window.addEventListener("resize",()=>Ne.resize());document.querySelectorAll("[data-touch]").forEach(s=>{s.addEventListener("pointerdown",t=>{t.preventDefault(),s.setPointerCapture(t.pointerId),Xe.add(s.dataset.touch),s.dataset.touch==="use"&&(Ts=!0)});for(const t of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(t,()=>Xe.delete(s.dataset.touch))});function I0(){const s=(...n)=>n.some(i=>qn.has(i)),t={throttle:s(...$t.player.airborne?["KeyW"]:["KeyW","ArrowUp"])||Xe.has("throttle")?1:0,brake:s(...$t.player.airborne?["KeyS"]:["KeyS","ArrowDown"])||Xe.has("brake")?1:0,steer:(s("KeyD","ArrowRight")||Xe.has("right")?1:0)-(s("KeyA","ArrowLeft")||Xe.has("left")?1:0),airbrake:(s("KeyE")?1:0)-(s("KeyQ")?1:0),pitch:(s("KeyI","ArrowUp")||Xe.has("pitch-up")?1:0)-(s("KeyK","ArrowDown")||Xe.has("pitch-down")?1:0),use:Ts,drift:s("ShiftLeft","ShiftRight")||Xe.has("drift")};Ts=!1;const e=navigator.getGamepads?.()[0];if(e&&(t.drift||=e.buttons[2]?.pressed??!1),e){t.steer=qt(t.steer+(Math.abs(e.axes[0])>.12?e.axes[0]:0),-1,1),t.pitch=qt(t.pitch+(Math.abs(e.axes[1])>.12?-e.axes[1]:0),-1,1),t.throttle=Math.max(t.throttle,e.buttons[7]?.value??0),t.brake=Math.max(t.brake,e.buttons[6]?.value??0),t.airbrake+=(e.buttons[5]?.pressed?1:0)-(e.buttons[4]?.pressed?1:0);const n=e.buttons[0]?.pressed??!1;t.use||=n&&!ql,ql=n;const i=e.buttons[9]?.pressed??!1;i&&!Yl&&gi(),Yl=i}return t}function qc(s){const t=qt((s-$l)/1e3,0,.08);$l=s,Ni+=t;const e=I0();for(hi||=e.use;Ni>=1/60;){if($t.phase==="menu"){Ne.spectator.step(1/60);for(const n of Ne.spectator.race.events)Ne.burst({...n,player:!1})}else{$t.step(1/60,{...e,use:hi});for(const n of $t.events)Ne.burst(n),dn.event(n),hn.event(n)}hi=!1,Ni-=1/60}Ne.update($t,t,Ni*60),ir+=t,ir>1/20&&(dn.update($t,ir),ir=0),hn.update($t.player.speed,$t.player.boost>0,$t.phase==="racing",t),requestAnimationFrame(qc)}dn.update($t,0);requestAnimationFrame(qc);
