"use strict";(self["webpackChunkvue_firebase_crud_app"]=self["webpackChunkvue_firebase_crud_app"]||[]).push([[836],{8836:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",[a("b-button",{staticClass:"float-right",attrs:{variant:"success"},on:{click:function(e){t.show_popup_them_moi=!0}}},[t._v("Thêm mới")]),a("b-modal",{attrs:{title:"Thêm mới",size:"lg"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.show_popup_them_moi=!1}}},[t._v(" Đóng ")])],1)]},proxy:!0}]),model:{value:t.show_popup_them_moi,callback:function(e){t.show_popup_them_moi=e},expression:"show_popup_them_moi"}},[a("themmoi")],1),a("b-modal",{attrs:{title:"Cập nhật hóa đơn",size:"lg"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.show_popup_sua=!1}}},[t._v(" Đóng ")])],1)]},proxy:!0}]),model:{value:t.show_popup_sua,callback:function(e){t.show_popup_sua=e},expression:"show_popup_sua"}},[a("sua",{attrs:{chitiethoadon_item:t.chitiet_hoadon_item_selected}})],1)],1),a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"h5 font-weight-bold text-center"},[t._v("Danh sách")]),a("b-form-group",{staticClass:"my-2",attrs:{label:"Tìm kiếm","label-for":"filter-input"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Nhập từ khóa để tìm kiếm"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Xóa")])],1)],1)],1),a("b-table",{staticClass:"table-hoadon",attrs:{striped:"",hover:"",items:t.danh_sach_chi_tiet_hoa_don,fields:t.fields_table,filter:t.filter,"per-page":t.perPage,"current-page":t.currentPage,id:"my-table"},scopedSlots:t._u([{key:"cell(giasi)",fn:function(e){return[t._v(" "+t._s(t.formatMoney(e.item.giasi,0,2))+" VNĐ ")]}},{key:"cell(giack)",fn:function(e){return[t._v(" "+t._s(t.formatMoney(e.item.giack,0,2))+" VNĐ ")]}},{key:"cell(gianhap)",fn:function(e){return[t._v(" "+t._s(t.formatMoney(e.item.gianhap,0,2))+" VNĐ ")]}},{key:"cell(bonus)",fn:function(e){return[t._v(" "+t._s(t.formatMoney(e.item.bonus,0,2))+" VNĐ ")]}},{key:"cell(thanhtien)",fn:function(e){return[t._v(" "+t._s(t.formatMoney(e.item.thanhtien,0,2))+" VNĐ ")]}},{key:"cell(key)",fn:function(e){return[a("button",{staticClass:"btn btn-info",on:{click:function(a){a.preventDefault(),t.chitiet_hoadon_item_selected=JSON.parse(JSON.stringify(e.item)),t.show_popup_sua=!0}}},[t._v(" Sửa ")]),a("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return a.preventDefault(),t.deleteHoadon(e.item.key)}}},[t._v(" Xóa ")])]}}])}),a("b-pagination",{attrs:{"total-rows":t.danh_sach_chi_tiet_hoa_don.length,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),a("div",[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$router.back()}}},[t._v("Trở lại")])],1)])},i=[],n=a(4805),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{},[a("h3",{staticClass:"text-center"},[t._v("Thêm mới sản phẩm vào hóa đơn")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.themmoi.apply(null,arguments)}}},[a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Tên sản phẩm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.tensp,expression:"chitiethoadon.tensp"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.chitiethoadon.tensp},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"tensp",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Số lượng")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.soluong,expression:"chitiethoadon.soluong"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.soluong},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"soluong",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá sỉ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.giasi,expression:"chitiethoadon.giasi"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.giasi},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"giasi",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá chiết khấu")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.giack,expression:"chitiethoadon.giack"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.giack},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"giack",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá nhập")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.gianhap,expression:"chitiethoadon.gianhap"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.gianhap},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"gianhap",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Bonus")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.bonus,expression:"chitiethoadon.bonus"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.bonus},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"bonus",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Thành tiền")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.thanhtien,expression:"chitiethoadon.thanhtien"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.thanhtien},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"thanhtien",e.target.value)}}})]),t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mt-2 mt-2"},[a("button",{staticClass:"btn btn-success btn-block"},[t._v("Thêm mới")])])}],h={data(){return{chitiethoadon:{mahd:"",tensp:"",giack:0,gianhap:0,giasi:0,soluong:0,thanhtien:0,bonus:0}}},methods:{themmoi(t){t.preventDefault(),this.chitiethoadon.mahd=this.$route.params.id,n.db.collection("chitiethoadon").add(this.chitiethoadon).then((()=>{alert("Thêm mới thành công!"),this.chitiethoadon={mahd:"",tensp:"",giack:0,gianhap:0,giasi:0,soluong:0,thanhtien:0,bonus:0}})).catch((t=>{alert("Có lỗi xảy ra vui lòng thử lại sau!"),console.log(t)}))},update_gia(){setTimeout((()=>{this.chitiethoadon.thanhtien=parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.giasi),this.chitiethoadon.bonus=parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.giasi)-parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.gianhap)}),500)}}},l=h,c=a(1001),u=(0,c.Z)(l,s,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{},[a("h3",{staticClass:"text-center"},[t._v("Cập nhật hóa đơn")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.capnhat.apply(null,arguments)}}},[a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Tên sản phẩm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.tensp,expression:"chitiethoadon.tensp"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.chitiethoadon.tensp},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"tensp",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Số lượng")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.soluong,expression:"chitiethoadon.soluong"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.soluong},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"soluong",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá sỉ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.giasi,expression:"chitiethoadon.giasi"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.giasi},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"giasi",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá chiết khấu")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.giack,expression:"chitiethoadon.giack"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.giack},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"giack",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Giá nhập")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.gianhap,expression:"chitiethoadon.gianhap"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.gianhap},on:{keydown:t.update_gia,input:function(e){e.target.composing||t.$set(t.chitiethoadon,"gianhap",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Bonus")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.bonus,expression:"chitiethoadon.bonus"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.bonus},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"bonus",e.target.value)}}})]),a("div",{staticClass:"form-group m-2"},[a("label",[t._v("Thành tiền")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chitiethoadon.thanhtien,expression:"chitiethoadon.thanhtien"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.chitiethoadon.thanhtien},on:{input:function(e){e.target.composing||t.$set(t.chitiethoadon,"thanhtien",e.target.value)}}})]),t._m(0)])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mt-2 mt-2"},[a("button",{staticClass:"btn btn-success btn-block"},[t._v("Cập nhật")])])}],g={props:["chitiethoadon_item"],data(){return{chitiethoadon:{mahd:"",tensp:"",giack:0,gianhap:0,giasi:0,soluong:0,thanhtien:0,bonus:0}}},created(){this.chitiethoadon=JSON.parse(JSON.stringify(this.chitiethoadon_item))},methods:{capnhat(t){t.preventDefault(),n.db.collection("chitiethoadon").doc(this.chitiethoadon.key).update(this.chitiethoadon).then((()=>{alert("Cập nhật thành công!")})).catch((t=>{alert("Có lỗi xảy ra vui lòng thử lại sau!"),console.log(t)}))},update_gia(){setTimeout((()=>{this.chitiethoadon.thanhtien=parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.giasi),this.chitiethoadon.bonus=parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.giasi)-parseFloat(this.chitiethoadon.soluong)*parseFloat(this.chitiethoadon.gianhap)}),500)}}},v=g,_=(0,c.Z)(v,p,m,!1,null,null,null),f=_.exports,b={data(){return{show_popup_them_moi:!1,show_popup_sua:!1,filter:null,perPage:20,currentPage:1,danh_sach_chi_tiet_hoa_don:[],fields_table:[{key:"stt",label:"STT",sortable:!0},{key:"tensp",label:"Tên SP",sortable:!0},{key:"soluong",label:"Số lượng",sortable:!0},{key:"giasi",label:"Giá sỉ shop",sortable:!0},{key:"giack",label:"Giá CK",sortable:!0},{key:"gianhap",label:"Giá nhập",sortable:!0},{key:"bonus",label:"Tiền bonus",sortable:!0},{key:"thanhtien",label:"Thành tiền",sortable:!0},{key:"key",label:"Hành động",sortable:!0}],chitiet_hoadon_item_selected:{}}},components:{themmoi:d,sua:f},created(){n.db.collection("chitiethoadon").where("mahd","==",this.$route.params.id).onSnapshot((t=>{this.danh_sach_chi_tiet_hoa_don=[];let e=0;t.forEach((t=>{e++,this.danh_sach_chi_tiet_hoa_don.push({key:t.id,stt:e,mahd:t.data().mahd,tensp:t.data().tensp,giack:t.data().giack,gianhap:t.data().gianhap,giasi:t.data().giasi,soluong:t.data().soluong,thanhtien:t.data().thanhtien,bonus:t.data().bonus})}))}))},methods:{deleteHoadon(t){window.confirm("Bạn có chắc chắn muốn xóa không?")&&n.db.collection("chitiethoadon").doc(t).delete().then((()=>{console.log("Đã xóa hóa đơn!")})).catch((t=>{console.error(t)}))},formatMoney(t,e,a){let o=parseFloat(t);return isNaN(o)?t:(t=parseFloat(t),t.toLocaleString("en",{minimumFractionDigits:e,maximumFractionDigits:a}))}}},k=b,y=(0,c.Z)(k,o,i,!1,null,null,null),C=y.exports}}]);
//# sourceMappingURL=836.f6e50c64.js.map