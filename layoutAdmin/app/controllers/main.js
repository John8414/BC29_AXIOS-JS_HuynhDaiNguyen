var services = new Services();

function getID(id) {
   return document.getElementById(id);
}

function getListOurTeachs() {
   services
      .getListOurTeachApi()
      .then(function (result) {
         renderListOurTeachs(result.data);
      })
      .catch(function (error) {
         console.log(error);
      });
}

getListOurTeachs();

function renderListOurTeachs(data) {
   var contentHTML = "";

   data.forEach(function (ourTeach, index) {
      contentHTML += `
      <tr>
            <td>${index + 1}</td>
            <td>${ourTeach.taiKhoan}</td>
            <td>${ourTeach.matKhau}</td>
            <td>${ourTeach.hoTen}</td>
            <td>${ourTeach.email}</td>
            <td>${ourTeach.ngonNgu}</td>
            <td>${ourTeach.userType}</td>
            <td>${ourTeach.moTa}</td>
            <td>
                  <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editOurTeach(${ourTeach.id})">Sửa</button>
                  <button class="btn btn-danger" onclick="deleteOurTeach(${ourTeach.id})">Xóa</button>
            </td>
      </tr>
      `;
   });

   getID("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

/**
 * Xoa ND
 */
function deleteOurTeach(id) {
   console.log(id);
   services
      .deleteOurTeachApi(id)
      .then(function () {
         // render table
         getListOurTeachs();
      })
      .catch(function (error) {
         console.log(error);
      });
}

getID("btnThemNguoiDung").onclick = function () {
   // Sửa lại title modal
   document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm Người Dùng";
   // Thêm nút "Add" vào footer modal
   var footer = `<button class = "btn btn-success" onclick="addOurTeach()">Add</button>`;
   document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
};

/**
 * Add ND
 */

function addOurTeach() {
   var taiKhoan = getID("TaiKhoan").value;
   var matKhau = getID("MatKhau").value;
   var hoTen = getID("HoTen").value;
   var email = getID("Email").value;
   var hinhAnh = getID("HinhAnh").value;
   var loaiNgonNgu = getID("loaiNgonNgu").value;
   var loaiNguoiDung = getID("loaiNguoiDung").value;
   var moTa = getID("MoTa").value;

   // đối tượng ourTeach
   var ourTeach = new OurTeach(
      "",
      taiKhoan,
      matKhau,
      hoTen,
      email,
      hinhAnh,
      loaiNgonNgu,
      loaiNguoiDung,
      moTa,
   );
   services
      .addOurTeachApi(ourTeach)
      .then(function () {
         // render table
         getListOurTeachs();
         // close modal
         document.getElementsByClassName("close")[0].click();
      })
      .catch(function (error) {
         console.log(error);
      });
}

function editOurTeach(id) {
   // Sửa lại title modal
   document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Người Dùng";
   // Thêm nút "Update" vào footer modal
   var footer = `<button class = "btn btn-success" onclick="updateOurTeach(${id})">Update</button>`;
   document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
   // getOurTeachById
   services
      .getOurTeachById(id)
      .then(function (result) {
         // show thông tin ra các thẻ input
         getID("TaiKhoan").value = result.data.taiKhoan;
         getID("MatKhau").value = result.data.matKhau;
         getID("HoTen").value = result.data.hoTen;
         getID("Email").value = result.data.email;
         getID("HinhAnh").value = result.data.hinhAnh;
         getID("loaiNgonNgu").value = result.data.ngonNgu;
         getID("loaiNguoiDung").value = result.data.userType;
         getID("MoTa").value = result.data.moTa;

      })
      .catch(function (error) {
         console.log(error);
      });
}

/**
 * Update ND
 */

function updateOurTeach(id) {
   var taiKhoan = getID("TaiKhoan").value;
   var matKhau = getID("MatKhau").value;
   var hoTen = getID("HoTen").value;
   var email = getID("Email").value;
   var hinhAnh = getID("HinhAnh").value;
   var loaiNgonNgu = getID("loaiNgonNgu").value;
   var loaiNguoiDung = getID("loaiNguoiDung").value;
   var moTa = getID("MoTa").value;

   var ourTeach = new OurTeach(
      id,
      taiKhoan,
      matKhau,
      hoTen,
      email,
      hinhAnh,
      loaiNgonNgu,
      loaiNguoiDung,
      moTa
   );
   services
      .updateOurTeachApi(ourTeach)
      .then(function () {
         // render table
         getListOurTeachs();
         // close modal
         document.getElementsByClassName("close")[0].click();
      })
      .catch(function (error) {
         console.log(error);
      });
}