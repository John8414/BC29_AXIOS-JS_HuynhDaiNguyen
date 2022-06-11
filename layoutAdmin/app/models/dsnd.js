function DanhSachNguoiDung() {
   this.arr = [];

   this.timViTriND = function (taiKhoan) {

      var index = -1;
      this.arr.forEach(function (item, i) {
         if (item.taiKhoan === taiKhoan)
            index = i;
      });
      return index;
   };

   this.update = function (nd) {
      //tim vi tri nd muon cap nhat
      var index = this.timViTriND(nd.taiKhoan);
      if (index !== -1) return this.arr[index] = nd;
   };
}