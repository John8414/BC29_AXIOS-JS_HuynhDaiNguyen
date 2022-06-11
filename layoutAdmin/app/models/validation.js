function Validation() {
   this.kiemTraRong = function (value, tbId, mess) {
      if (value === "") {
         // error
         getID(tbId).innerHTML = mess;
         getID(tbId).style.display = "block";
         return false;
      }
      getID(tbId).innerHTML = "";
      getID(tbId).style.display = "none";
      return true;
   }
   this.kiemTraOption = function (selectId, tbId, mess) {
      if (getID(selectId).selectedIndex !== 0) {
         //true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false 
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
   this.kiemTraDoDaiKiTu = function (value, tbId, min, max, mess) {
      if (value.trim().length >= min && value.trim().length <= max) {
         // true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false 
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
   this.kiemTraChuoiKiTu = function (value, tbId, mess) {
      var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if (value.match(letter)) {
         // true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
   this.kiemTraEmail = function (value, tbId, mess) {
      var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(email)) {
         // true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
   this.kiemTraPassword = function (value, tbId, mess) {
      var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
      if (value.match(password)) {
         // true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
   this.kiemTraTKTonTai = function (value, tbId, mess, arr) {
      var isStatus = true;
      arr.forEach(function (item) {
         if (item.taiKhoan === value) {
            // Tai khoan ton tai
            isStatus = false;
         }
      });
      if (isStatus) {
         // true
         getID(tbId).innerHTML = "";
         getID(tbId).style.display = "none";
         return true;
      }
      // false
      getID(tbId).innerHTML = mess;
      getID(tbId).style.display = "block";
      return false;
   };
}