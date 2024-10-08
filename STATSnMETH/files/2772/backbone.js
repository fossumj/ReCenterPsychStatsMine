(function(){var q=this;
var o=q.Backbone;
var p=Array.prototype.slice;
var y=Array.prototype.splice;
var c;
if(typeof exports!=="undefined"){c=exports
}else{c=q.Backbone={}
}c.VERSION="0.9.2";
var A=q._;
if(!A&&(typeof require!=="undefined")){A=require("underscore")
}var g=q.jQuery||q.Zepto||q.ender;
c.setDomLibrary=function(C){g=C
};
c.noConflict=function(){q.Backbone=o;
return this
};
c.emulateHTTP=false;
c.emulateJSON=false;
var a=/\s+/;
var n=c.Events={on:function(F,J,E){var D,H,G,C,I;
if(!J){return this
}F=F.split(a);
D=this._callbacks||(this._callbacks={});
while(H=F.shift()){I=D[H];
G=I?I.tail:{};
G.next=C={};
G.context=E;
G.callback=J;
D[H]={tail:C,next:I?I.next:G}
}return this
},off:function(J,H,D){var C,K,E,G,F,I;
if(!(K=this._callbacks)){return
}if(!(J||H||D)){delete this._callbacks;
return this
}J=J?J.split(a):A.keys(K);
while(C=J.shift()){E=K[C];
delete K[C];
if(!E||!(H||D)){continue
}G=E.tail;
while((E=E.next)!==G){F=E.callback;
I=E.context;
if((H&&F!==H)||(D&&I!==D)){this.on(C,F,I)
}}}return this
},trigger:function(F){var J,I,E,D,C,H,G;
if(!(E=this._callbacks)){return this
}H=E.all;
F=F.split(a);
G=p.call(arguments,1);
while(J=F.shift()){if(I=E[J]){D=I.tail;
while((I=I.next)!==D){I.callback.apply(I.context||this,G)
}}if(I=H){D=I.tail;
C=[J].concat(G);
while((I=I.next)!==D){I.callback.apply(I.context||this,C)
}}}return this
}};
n.bind=n.on;
n.unbind=n.off;
var k=c.Model=function(C,D){var E;
C||(C={});
if(D&&D.parse){C=this.parse(C)
}if(E=d(this,"defaults")){C=A.extend({},E,C)
}if(D&&D.collection){this.collection=D.collection
}this.attributes={};
this._escapedAttributes={};
this.cid=A.uniqueId("c");
this.changed={};
this._silent={};
this._pending={};
this.set(C,{silent:true});
this.changed={};
this._silent={};
this._pending={};
this._previousAttributes=A.clone(this.attributes);
this.initialize.apply(this,arguments)
};
A.extend(k.prototype,n,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(C){return A.clone(this.attributes)
},get:function(C){return this.attributes[C]
},escape:function(C){var D;
if(D=this._escapedAttributes[C]){return D
}var E=this.get(C);
return this._escapedAttributes[C]=A.escape(E==null?"":""+E)
},has:function(C){return this.get(C)!=null
},set:function(J,I,L){var K,G,E;
if(A.isObject(J)||J==null){K=J;
L=I
}else{K={};
K[J]=I
}L||(L={});
if(!K){return this
}if(K instanceof k){K=K.attributes
}if(L.unset){for(G in K){K[G]=void 0
}}if(!this._validate(K,L)){return false
}if(this.idAttribute in K){this.id=K[this.idAttribute]
}var H=L.changes={};
var D=this.attributes;
var C=this._escapedAttributes;
var F=this._previousAttributes||{};
for(G in K){E=K[G];
if(!A.isEqual(D[G],E)||(L.unset&&A.has(D,G))){delete C[G];
(L.silent?this._silent:H)[G]=true
}L.unset?delete D[G]:D[G]=E;
if(!A.isEqual(F[G],E)||(A.has(D,G)!=A.has(F,G))){this.changed[G]=E;
if(!L.silent){this._pending[G]=true
}}else{delete this.changed[G];
delete this._pending[G]
}}if(!L.silent){this.change(L)
}return this
},unset:function(C,D){(D||(D={})).unset=true;
return this.set(C,null,D)
},clear:function(C){(C||(C={})).unset=true;
return this.set(A.clone(this.attributes),C)
},fetch:function(D){D=D?A.clone(D):{};
var C=this;
var E=D.success;
D.success=function(H,F,G){if(!C.set(C.parse(H,G),D)){return false
}if(E){E(C,H)
}};
D.error=c.wrapError(D.error,C,D);
return(this.sync||c.sync).call(this,"read",this,D)
},save:function(H,G,L){var I,F;
if(A.isObject(H)||H==null){I=H;
L=G
}else{I={};
I[H]=G
}L=L?A.clone(L):{};
if(L.wait){if(!this._validate(I,L)){return false
}F=A.clone(this.attributes)
}var D=A.extend({},L,{silent:true});
if(I&&!this.set(I,L.wait?D:L)){return false
}var E=this;
var J=L.success;
L.success=function(P,M,O){var N=E.parse(P,O);
if(L.wait){delete L.wait;
N=A.extend(I||{},N)
}if(!E.set(N,L)){return false
}if(J){J(E,P)
}else{E.trigger("sync",E,P,L)
}};
L.error=c.wrapError(L.error,E,L);
var C=this.isNew()?"create":"update";
var K=(this.sync||c.sync).call(this,C,this,L);
if(L.wait){this.set(F,D)
}return K
},destroy:function(D){D=D?A.clone(D):{};
var C=this;
var G=D.success;
var F=function(){C.trigger("destroy",C,C.collection,D)
};
if(this.isNew()){F();
return false
}D.success=function(H){if(D.wait){F()
}if(G){G(C,H)
}else{C.trigger("sync",C,H,D)
}};
D.error=c.wrapError(D.error,C,D);
var E=(this.sync||c.sync).call(this,"delete",this,D);
if(!D.wait){F()
}return E
},url:function(){var C=d(this,"urlRoot")||d(this.collection,"url")||t();
if(this.isNew()){return C
}return C+(C.charAt(C.length-1)=="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(D,C){return D
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},change:function(D){D||(D={});
var F=this._changing;
this._changing=true;
for(var C in this._silent){this._pending[C]=true
}var E=A.extend({},D.changes,this._silent);
this._silent={};
for(var C in E){this.trigger("change:"+C,this,this.get(C),D)
}if(F){return this
}while(!A.isEmpty(this._pending)){this._pending={};
this.trigger("change",this,D);
for(var C in this.changed){if(this._pending[C]||this._silent[C]){continue
}delete this.changed[C]
}this._previousAttributes=A.clone(this.attributes)
}this._changing=false;
return this
},hasChanged:function(C){if(!arguments.length){return !A.isEmpty(this.changed)
}return A.has(this.changed,C)
},changedAttributes:function(E){if(!E){return this.hasChanged()?A.clone(this.changed):false
}var G,F=false,D=this._previousAttributes;
for(var C in E){if(A.isEqual(D[C],(G=E[C]))){continue
}(F||(F={}))[C]=G
}return F
},previous:function(C){if(!arguments.length||!this._previousAttributes){return null
}return this._previousAttributes[C]
},previousAttributes:function(){return A.clone(this._previousAttributes)
},isValid:function(){return !this.validate||!this.validate(this.attributes)
},_validate:function(E,D){if(D.silent||!this.validate){return true
}E=A.extend({},this.attributes,E);
var C=this.validate(E,D);
if(!C){return true
}if(D&&D.error){D.error(this,C,D)
}else{this.trigger("error",this,C,D)
}return false
}});
var B=c.Collection=function(D,C){C||(C={});
if(C.model){this.model=C.model
}if(C.comparator){this.comparator=C.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(D){this.reset(D,{silent:true,parse:C.parse})
}};
A.extend(B.prototype,n,{model:k,initialize:function(){},toJSON:function(C){return this.map(function(D){return D.toJSON(C)
})
},add:function(D,M){var I,K,F,J,L,E,G={},C={},H=[];
M||(M={});
D=A.isArray(D)?D.slice():[D];
for(I=0,F=D.length;
I<F;
I++){if(!(J=D[I]=this._prepareModel(D[I],M))){throw new Error("Can't add an invalid model to a collection")
}L=J.cid;
E=J.id;
if(G[L]||this._byCid[L]||((E!=null)&&(C[E]||this._byId[E]))){H.push(I);
continue
}G[L]=C[E]=J
}I=H.length;
while(I--){D.splice(H[I],1)
}for(I=0,F=D.length;
I<F;
I++){(J=D[I]).on("all",this._onModelEvent,this);
this._byCid[J.cid]=J;
if(J.id!=null){this._byId[J.id]=J
}}this.length+=F;
K=M.at!=null?M.at:this.models.length;
y.apply(this.models,[K,0].concat(D));
if(this.comparator){this.sort({silent:true})
}if(M.silent){return this
}for(I=0,F=this.models.length;
I<F;
I++){if(!G[(J=this.models[I]).cid]){continue
}M.index=I;
J.trigger("add",J,this,M)
}return this
},remove:function(H,F){var G,C,E,D;
F||(F={});
H=A.isArray(H)?H.slice():[H];
for(G=0,C=H.length;
G<C;
G++){D=this.getByCid(H[G])||this.get(H[G]);
if(!D){continue
}delete this._byId[D.id];
delete this._byCid[D.cid];
E=this.indexOf(D);
this.models.splice(E,1);
this.length--;
if(!F.silent){F.index=E;
D.trigger("remove",D,this,F)
}this._removeReference(D)
}return this
},push:function(D,C){D=this._prepareModel(D,C);
this.add(D,C);
return D
},pop:function(D){var C=this.at(this.length-1);
this.remove(C,D);
return C
},unshift:function(D,C){D=this._prepareModel(D,C);
this.add(D,A.extend({at:0},C));
return D
},shift:function(D){var C=this.at(0);
this.remove(C,D);
return C
},get:function(C){if(C==null){return void 0
}return this._byId[C.id!=null?C.id:C]
},getByCid:function(C){return C&&this._byCid[C.cid||C]
},at:function(C){return this.models[C]
},where:function(C){if(A.isEmpty(C)){return[]
}return this.filter(function(D){for(var E in C){if(C[E]!==D.get(E)){return false
}}return true
})
},sort:function(D){D||(D={});
if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}var C=A.bind(this.comparator,this);
if(this.comparator.length==1){this.models=this.sortBy(C)
}else{this.models.sort(C)
}if(!D.silent){this.trigger("reset",this,D)
}return this
},pluck:function(C){return A.map(this.models,function(D){return D.get(C)
})
},reset:function(F,D){F||(F=[]);
D||(D={});
for(var E=0,C=this.models.length;
E<C;
E++){this._removeReference(this.models[E])
}this._reset();
this.add(F,A.extend({silent:true},D));
if(!D.silent){this.trigger("reset",this,D)
}return this
},fetch:function(C){C=C?A.clone(C):{};
if(C.parse===undefined){C.parse=true
}var E=this;
var D=C.success;
C.success=function(H,F,G){E[C.add?"add":"reset"](E.parse(H,G),C);
if(D){D(E,H)
}};
C.error=c.wrapError(C.error,E,C);
return(this.sync||c.sync).call(this,"read",this,C)
},create:function(D,C){var E=this;
C=C?A.clone(C):{};
D=this._prepareModel(D,C);
if(!D){return false
}if(!C.wait){E.add(D,C)
}var F=C.success;
C.success=function(G,I,H){if(C.wait){E.add(G,C)
}if(F){F(G,I)
}else{G.trigger("sync",D,I,C)
}};
D.save(null,C);
return D
},parse:function(D,C){return D
},chain:function(){return A(this.models).chain()
},_reset:function(C){this.length=0;
this.models=[];
this._byId={};
this._byCid={}
},_prepareModel:function(E,D){D||(D={});
if(!(E instanceof k)){var C=E;
D.collection=this;
E=new this.model(C,D);
if(!E._validate(E.attributes,D)){E=false
}}else{if(!E.collection){E.collection=this
}}return E
},_removeReference:function(C){if(this==C.collection){delete C.collection
}C.off("all",this._onModelEvent,this)
},_onModelEvent:function(E,D,F,C){if((E=="add"||E=="remove")&&F!=this){return
}if(E=="destroy"){this.remove(D,C)
}if(D&&E==="change:"+D.idAttribute){delete this._byId[D.previous(D.idAttribute)];
this._byId[D.id]=D
}this.trigger.apply(this,arguments)
}});
var w=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];
A.each(w,function(C){B.prototype[C]=function(){return A[C].apply(A,[this.models].concat(A.toArray(arguments)))
}
});
var z=c.Router=function(C){C||(C={});
if(C.routes){this.routes=C.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var i=/:\w+/g;
var x=/\*\w+/g;
var e=/[-[\]{}()+?.,\\^$|#\s]/g;
A.extend(z.prototype,n,{initialize:function(){},route:function(C,D,E){c.history||(c.history=new b);
if(!A.isRegExp(C)){C=this._routeToRegExp(C)
}if(!E){E=this[D]
}c.history.route(C,A.bind(function(G){var F=this._extractParameters(C,G);
E&&E.apply(this,F);
this.trigger.apply(this,["route:"+D].concat(F));
c.history.trigger("route",this,D,F)
},this));
return this
},navigate:function(D,C){c.history.navigate(D,C)
},_bindRoutes:function(){if(!this.routes){return
}var D=[];
for(var E in this.routes){D.unshift([E,this.routes[E]])
}for(var F=0,C=D.length;
F<C;
F++){this.route(D[F][0],D[F][1],this[D[F][1]])
}},_routeToRegExp:function(C){C=C.replace(e,"\\$&").replace(i,"([^/]+)").replace(x,"(.*?)");
return new RegExp("^"+C+"$")
},_extractParameters:function(C,D){return C.exec(D).slice(1)
}});
var b=c.History=function(){this.handlers=[];
A.bindAll(this,"checkUrl")
};
var m=/^[#\/]/;
var j=/msie [\w.]+/;
b.started=false;
A.extend(b.prototype,n,{interval:50,getHash:function(E){var D=E?E.location:window.location;
var C=D.href.match(/#(.*)$/);
return C?C[1]:""
},getFragment:function(D,C){if(D==null){if(this._hasPushState||C){D=window.location.pathname;
var E=window.location.search;
if(E){D+=E
}}else{D=this.getHash()
}}if(!D.indexOf(this.options.root)){D=D.substr(this.options.root.length)
}return D.replace(m,"")
},start:function(E){if(b.started){throw new Error("Backbone.history has already been started")
}b.started=true;
this.options=A.extend({},{root:"/"},this.options,E);
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);
var D=this.getFragment();
var C=document.documentMode;
var G=(j.exec(navigator.userAgent.toLowerCase())&&(!C||C<=7));
if(G){this.iframe=g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(D)
}if(this._hasPushState){g(window).bind("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!G){g(window).bind("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=D;
var H=window.location;
var F=H.pathname==this.options.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!F){this.fragment=this.getFragment(null,true);
window.location.replace(this.options.root+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&F&&H.hash){this.fragment=this.getHash().replace(m,"");
window.history.replaceState({},document.title,H.protocol+"//"+H.host+this.options.root+this.fragment)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){g(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
b.started=false
},route:function(C,D){this.handlers.unshift({route:C,callback:D})
},checkUrl:function(D){var C=this.getFragment();
if(C==this.fragment&&this.iframe){C=this.getFragment(this.getHash(this.iframe))
}if(C==this.fragment){return false
}if(this.iframe){this.navigate(C)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(E){var D=this.fragment=this.getFragment(E);
var C=A.any(this.handlers,function(F){if(F.route.test(D)){F.callback(D);
return true
}});
return C
},navigate:function(D,C){if(!b.started){return false
}if(!C||C===true){C={trigger:C}
}var E=(D||"").replace(m,"");
if(this.fragment==E){return
}if(this._hasPushState){if(E.indexOf(this.options.root)!=0){E=this.options.root+E
}this.fragment=E;
window.history[C.replace?"replaceState":"pushState"]({},document.title,E)
}else{if(this._wantsHashChange){this.fragment=E;
this._updateHash(window.location,E,C.replace);
if(this.iframe&&(E!=this.getFragment(this.getHash(this.iframe)))){if(!C.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,E,C.replace)
}}else{window.location.assign(this.options.root+D)
}}if(C.trigger){this.loadUrl(D)
}},_updateHash:function(C,D,E){if(E){C.replace(C.toString().replace(/(javascript:|#).*$/,"")+"#"+D)
}else{C.hash=D
}}});
var s=c.View=function(C){this.cid=A.uniqueId("view");
this._configure(C||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var f=/^(\S+)\s*(.*)$/;
var u=["model","collection","el","id","attributes","className","tagName"];
A.extend(s.prototype,n,{tagName:"div",$:function(C){return this.$el.find(C)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
return this
},make:function(D,C,F){var E=document.createElement(D);
if(C){g(E).attr(C)
}if(F){g(E).html(F)
}return E
},setElement:function(C,D){if(this.$el){this.undelegateEvents()
}this.$el=(C instanceof g)?C:g(C);
this.el=this.$el[0];
if(D!==false){this.delegateEvents()
}return this
},delegateEvents:function(G){if(!(G||(G=d(this,"events")))){return
}this.undelegateEvents();
for(var F in G){var H=G[F];
if(!A.isFunction(H)){H=this[G[F]]
}if(!H){throw new Error('Method "'+G[F]+'" does not exist')
}var E=F.match(f);
var D=E[1],C=E[2];
H=A.bind(H,this);
D+=".delegateEvents"+this.cid;
if(C===""){this.$el.bind(D,H)
}else{this.$el.delegate(C,D,H)
}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)
},_configure:function(E){if(this.options){E=A.extend({},this.options,E)
}for(var F=0,D=u.length;
F<D;
F++){var C=u[F];
if(E[C]){this[C]=E[C]
}}this.options=E
},_ensureElement:function(){if(!this.el){var C=d(this,"attributes")||{};
if(this.id){C.id=this.id
}if(this.className){C["class"]=this.className
}this.setElement(this.make(this.tagName,C),false)
}else{this.setElement(this.el,false)
}}});
var v=function(C,D){var E=l(this,C,D);
E.extend=this.extend;
return E
};
k.extend=B.extend=z.extend=s.extend=v;
var r={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};
c.sync=function(H,D,C){var E=r[H];
C||(C={});
var F={type:E,dataType:"json"};
if(!C.url){F.url=d(D,"url")||t()
}if(!C.data&&D&&(H=="create"||H=="update")){F.contentType="application/json";
F.data=JSON.stringify(D.toJSON())
}if(c.emulateJSON){F.contentType="application/x-www-form-urlencoded";
F.data=F.data?{model:F.data}:{}
}if(c.emulateHTTP){if(E==="PUT"||E==="DELETE"){if(c.emulateJSON){F.data._method=E
}F.type="POST";
F.beforeSend=function(I){I.setRequestHeader("X-HTTP-Method-Override",E)
}
}}if(F.type!=="GET"&&!c.emulateJSON){F.processData=false
}var G=g.ajax(A.extend(F,C));
return G
};
c.wrapError=function(D,E,C){return function(F,G){G=F===E?G:F;
if(D){D(E,G,C)
}else{E.trigger("error",E,G,C)
}}
};
var h=function(){};
var l=function(D,C,E){var F;
if(C&&C.hasOwnProperty("constructor")){F=C.constructor
}else{F=function(){D.apply(this,arguments)
}
}A.extend(F,D);
h.prototype=D.prototype;
F.prototype=new h();
if(C){A.extend(F.prototype,C)
}if(E){A.extend(F,E)
}F.prototype.constructor=F;
F.__super__=D.prototype;
return F
};
var d=function(C,D){if(!(C&&C[D])){return null
}return A.isFunction(C[D])?C[D]():C[D]
};
var t=function(){throw new Error('A "url" property or function must be specified')
}
}).call(this);